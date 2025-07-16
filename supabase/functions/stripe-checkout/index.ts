import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') ?? '', 
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
);

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY');
if (!stripeSecret) {
  throw new Error('STRIPE_SECRET_KEY environment variable is required');
}

const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Spendora Integration',
    version: '1.0.0',
  },
});

// Helper function to create responses with CORS headers
function corsResponse(body: string | object | null, status = 200) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': '*',
  };

  if (status === 204) {
    return new Response(null, { status, headers });
  }

  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  });
}

Deno.serve(async (req) => {
  try {
    console.log('Stripe checkout function called');
    
    if (req.method === 'OPTIONS') {
      return corsResponse(null, 204);
    }

    if (req.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    const { price_id, success_url, cancel_url, mode } = await req.json();
    console.log('Request data:', { price_id, success_url, cancel_url, mode });

    // Validate required parameters
    if (!price_id || !success_url || !cancel_url || !mode) {
      return corsResponse({ 
        error: 'Missing required parameters: price_id, success_url, cancel_url, mode' 
      }, 400);
    }

    if (!['payment', 'subscription'].includes(mode)) {
      return corsResponse({ 
        error: 'Mode must be either "payment" or "subscription"' 
      }, 400);
    }

    let user = null;
    let customerId = null;

    // Try to get user if auth token is provided
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      try {
        const {
          data: { user: authUser },
          error: getUserError,
        } = await supabase.auth.getUser(token);

        if (!getUserError && authUser) {
          user = authUser;
          console.log('Authenticated user:', user.id);
          
          // Check if user has existing customer
          const { data: customer, error: getCustomerError } = await supabase
            .from('stripe_customers')
            .select('customer_id')
            .eq('user_id', user.id)
            .is('deleted_at', null)
            .maybeSingle();

          if (!getCustomerError && customer) {
            customerId = customer.customer_id;
            console.log('Found existing customer:', customerId);
          }
        }
      } catch (authError) {
        console.log('Auth error (continuing as guest):', authError);
      }
    }

    // If no existing customer, create a new one
    if (!customerId) {
      const customerData: Stripe.CustomerCreateParams = {};
      
      if (user?.email) {
        customerData.email = user.email;
        customerData.metadata = { userId: user.id };
      }

      const newCustomer = await stripe.customers.create(customerData);
      customerId = newCustomer.id;
      console.log('Created new customer:', customerId);

      // If user is authenticated, save the customer mapping
      if (user) {
        const { error: createCustomerError } = await supabase
          .from('stripe_customers')
          .insert({
            user_id: user.id,
            customer_id: newCustomer.id,
          });

        if (createCustomerError) {
          console.error('Failed to save customer in database:', createCustomerError);
        }

        if (mode === 'subscription') {
          const { error: createSubscriptionError } = await supabase
            .from('stripe_subscriptions')
            .insert({
              customer_id: newCustomer.id,
              status: 'not_started',
            });

          if (createSubscriptionError) {
            console.error('Failed to save subscription in database:', createSubscriptionError);
          }
        }
      }
    }

    // Create Checkout Session
    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [
        {
          price: price_id,
          quantity: 1,
        },
      ],
      mode,
      success_url,
      cancel_url,
    };

    // For guest users, allow customer creation
    if (!user) {
      sessionParams.customer_creation = 'always';
    }

    console.log('Creating checkout session with params:', sessionParams);
    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log('Created checkout session:', session.id);

    return corsResponse({ 
      sessionId: session.id, 
      url: session.url 
    });

  } catch (error: any) {
    console.error('Checkout error:', error);
    return corsResponse({ 
      error: `Checkout failed: ${error.message}` 
    }, 500);
  }
});