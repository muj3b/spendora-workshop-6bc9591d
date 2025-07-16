import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/lib/supabase';

interface CheckoutButtonProps {
  priceId: string;
  mode: 'payment' | 'subscription';
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const CheckoutButton = ({ 
  priceId, 
  mode, 
  children, 
  className,
  disabled = false 
}: CheckoutButtonProps) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      let authToken = null;
      
      if (user) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          authToken = session.access_token;
        }
      }

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      
      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      // Check if we're in development or production
      const isDevelopment = window.location.hostname === 'localhost' || 
                           window.location.hostname.includes('webcontainer') ||
                           window.location.hostname.includes('local-credentialless');

      let functionUrl: string;
      
      if (isDevelopment) {
        // In development, show a demo message instead of trying to call the function
        setError('Stripe checkout is not available in development mode. This will work when deployed to production with proper Supabase configuration.');
        return;
      } else {
        // In production, use the actual Supabase function URL
        functionUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`;
      }
      
      console.log('Making request to:', functionUrl);
      console.log('Request payload:', {
        price_id: priceId,
        mode,
        success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: window.location.href,
      });

      const response = await fetch(functionUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          price_id: priceId,
          mode,
          success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: window.location.href,
        }),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Response error:', errorText);
        throw new Error(`Payment service error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (data.error) {
        throw new Error(data.error);
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received from server');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      if (err instanceof Error) {
        if (err.message.includes('Failed to fetch')) {
          setError('Payment service is currently unavailable. This feature requires proper Supabase and Stripe configuration in production.');
        } else {
          setError(err.message);
        }
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-2">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <Button
        onClick={handleCheckout}
        disabled={loading || disabled}
        className={className}
      >
        {loading ? 'Processing...' : children}
      </Button>
    </div>
  );
};