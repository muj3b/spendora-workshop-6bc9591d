import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const supabase = createClient(Deno.env.get('SUPABASE_URL') ?? '', Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '');
const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
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

  // For 204 No Content, don't include Content-Type or body
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
    if (req.method === 'OPTIONS') {
      return corsResponse({}, 204);
    }

    if (req.method !== 'POST') {
      return corsResponse({ error: 'Method not allowed' }, 405);
    }

    const { price_id, success_url, cancel_url, mode } = await req.json();

    const error = validateParameters(
      { price_id, success_url, cancel_url, mode },
      {
        cancel_url: 'string',
        price_id: 'string',
        success_url: 'string',
        mode: { values: ['payment', 'subscription'] },
      },
    );

    if (error) {
      return corsResponse({ error }, 400);
    }

    let user = null;
    let customerId = null;

    // Try to get user if auth token is provided
    const authHeader = req.headers.get('Authorization');
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      const {
        data: { user: authUser },
        error: getUserError,
      } = await supabase.auth.getUser(token);

      if (!getUserError && authUser) {
        user = authUser;
        
        // Check if user has existing customer
        const { data: customer, error: getCustomerError } = await supabase
          .from('stripe_customers')
          .select('customer_id')
          .eq('user_id', user.id)
          .is('deleted_at', null)
          .maybeSingle();

        if (!getCustomerError && customer) {
          customerId = customer.customer_id;
        }
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

      console.log(`Created new Stripe customer ${newCustomer.id} for user ${user?.id || 'guest'}`);

      // If user is authenticated, save the customer mapping
      if (user) {
        const { error: createCustomerError } = await supabase.from('stripe_customers').insert({
          user_id: user.id,
          customer_id: newCustomer.id,
        });

        if (createCustomerError) {
          console.error('Failed to save customer information in the database', createCustomerError);
          // Continue anyway for guest checkout
        }

        if (mode === 'subscription') {
          const { error: createSubscriptionError } = await supabase.from('stripe_subscriptions').insert({
            customer_id: newCustomer.id,
            status: 'not_started',
          });

          if (createSubscriptionError) {
            console.error('Failed to save subscription in the database', createSubscriptionError);
            // Continue anyway for guest checkout
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

    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log(`Created checkout session ${session.id} for customer ${customerId}`);

    return corsResponse({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error(`Checkout error: ${error.message}`);
    return corsResponse({ error: error.message }, 500);
  }
});

type ExpectedType = 'string' | { values: string[] };
type Expectations<T> = { [K in keyof T]: ExpectedType };

function validateParameters<T extends Record<string, any>>(values: T, expected: Expectations<T>): string | undefined {
  for (const parameter in values) {
    const expectation = expected[parameter];
    const value = values[parameter];

    if (expectation === 'string') {
      if (value == null) {
        return `Missing required parameter ${parameter}`;
      }
      if (typeof value !== 'string') {
        return `Expected parameter ${parameter} to be a string got ${JSON.stringify(value)}`;
      }
    } else {
      if (!expectation.values.includes(value)) {
        return `Expected parameter ${parameter} to be one of ${expectation.values.join(', ')}`;
      }
    }
  }

  return undefined;
}