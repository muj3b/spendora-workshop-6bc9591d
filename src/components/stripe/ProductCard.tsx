import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckoutButton } from './CheckoutButton';
import { StripeProduct } from '@/stripe-config';

interface ProductCardProps {
  product: StripeProduct;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  const formatAmount = (amount?: number, currency?: string) => {
    if (!amount) return '';
    const formatted = (amount / 100).toFixed(2);
    return `$${formatted}`;
  };

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {product.name}
          {product.amount && (
            <span className="text-2xl font-bold text-primary">
              {formatAmount(product.amount, product.currency)}
            </span>
          )}
        </CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CheckoutButton
          priceId={product.priceId}
          mode={product.mode}
          className="w-full"
        >
          {product.mode === 'subscription' ? 'Subscribe' : 'Donate Now'}
        </CheckoutButton>
      </CardContent>
    </Card>
  );
};