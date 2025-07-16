import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ProductCard } from '@/components/stripe/ProductCard';
import { SubscriptionStatus } from '@/components/stripe/SubscriptionStatus';
import { useAuth } from '@/hooks/useAuth';
import { stripeProducts } from '@/stripe-config';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const Donate = () => {
  const { user } = useAuth();

  // Check if we're in development mode
  const isDevelopment = window.location.hostname === 'localhost' || 
                       window.location.hostname.includes('webcontainer') ||
                       window.location.hostname.includes('local-credentialless');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Support Spendora
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Help us continue providing free financial literacy workshops to students. 
            Your donation makes a real difference in young people's financial education.
          </p>
        </div>

        {isDevelopment && (
          <Alert>
            <Info className="h-4 w-4" />
            <AlertDescription>
              <strong>Development Mode:</strong> Stripe payments are disabled in development. 
              The donation functionality will work when the app is deployed to production with proper Supabase and Stripe configuration.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Make a Donation
            </h2>
            
            <div className="grid gap-4">
              {stripeProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Impact of Your Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm">Provides workshop materials for students</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm">Supports venue costs for free workshops</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-sm">Helps develop new educational content</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <p className="text-sm">Enables us to reach more students</p>
                </div>
              </CardContent>
            </Card>

            {user && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Your Account
                </h2>
                <SubscriptionStatus />
              </div>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Alternative Ways to Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-sm">Share our workshop with friends and family</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-sm">Follow us on social media</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm">Volunteer at our workshops</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm">Provide feedback to help us improve</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {!user && (
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Want to track your donations? 
            </p>
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/signup">Create Account</Link>
              </Button>
            </div>
          </div>
        )}

        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;