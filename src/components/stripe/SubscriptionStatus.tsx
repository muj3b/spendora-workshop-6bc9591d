import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useSubscription } from '@/hooks/useSubscription';
import { getProductByPriceId } from '@/stripe-config';

export const SubscriptionStatus = () => {
  const { subscription, loading, error } = useSubscription();

  if (loading) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="pt-6">
          <p className="text-red-600">Error loading subscription: {error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!subscription || !subscription.subscription_id) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription Status</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">No active subscription</p>
        </CardContent>
      </Card>
    );
  }

  const product = subscription.price_id ? getProductByPriceId(subscription.price_id) : null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'trialing':
        return 'bg-blue-100 text-blue-800';
      case 'past_due':
        return 'bg-yellow-100 text-yellow-800';
      case 'canceled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription Status</CardTitle>
        {product && <CardDescription>{product.name}</CardDescription>}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Status:</span>
          <Badge className={getStatusColor(subscription.subscription_status)}>
            {subscription.subscription_status.replace('_', ' ')}
          </Badge>
        </div>
        
        {subscription.current_period_end && (
          <div className="text-sm">
            <span className="font-medium">Next billing:</span>{' '}
            {new Date(subscription.current_period_end * 1000).toLocaleDateString()}
          </div>
        )}
        
        {subscription.cancel_at_period_end && (
          <div className="text-sm text-yellow-600">
            Subscription will cancel at the end of the current period
          </div>
        )}
        
        {subscription.payment_method_brand && subscription.payment_method_last4 && (
          <div className="text-sm">
            <span className="font-medium">Payment method:</span>{' '}
            {subscription.payment_method_brand.toUpperCase()} ending in {subscription.payment_method_last4}
          </div>
        )}
      </CardContent>
    </Card>
  );
};