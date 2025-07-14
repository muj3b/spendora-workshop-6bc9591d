import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckoutButton } from './CheckoutButton';
import { StripeProduct } from '@/stripe-config';

interface ProductCardProps {
  product: StripeProduct;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <CheckoutButton
          priceId={product.priceId}
          mode={product.mode}
          className="w-full"
        >
          {product.mode === 'subscription' ? 'Subscribe' : 'Purchase'}
        </CheckoutButton>
      </CardContent>
    </Card>
  );
};