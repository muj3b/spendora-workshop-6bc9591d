export interface StripeProduct {
  id: string;
  priceId: string;
  name: string;
  description: string;
  mode: 'payment' | 'subscription';
  amount?: number; // in cents
  currency?: string;
}

export const stripeProducts: StripeProduct[] = [
  {
    id: 'donation-5',
    priceId: 'price_1Rkai6GBGSPgBW8VzHRk7yN8', // Your existing price ID
    name: 'Support Spendora',
    description: 'Help us continue providing free financial literacy workshops to students',
    mode: 'payment',
    amount: 500, // $5.00
    currency: 'usd',
  },
  // You can add more donation amounts or subscription tiers here
  // {
  //   id: 'donation-10',
  //   priceId: 'price_XXXXXXXXX', // Create this in Stripe dashboard
  //   name: 'Support Spendora - $10',
  //   description: 'Help us reach more students with financial education',
  //   mode: 'payment',
  //   amount: 1000, // $10.00
  //   currency: 'usd',
  // },
];

export const getProductByPriceId = (priceId: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.priceId === priceId);
};

export const getProductById = (id: string): StripeProduct | undefined => {
  return stripeProducts.find(product => product.id === id);
};