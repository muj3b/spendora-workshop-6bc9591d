# Spendora - Financial Literacy Workshop

A modern web application for Spendora's financial literacy workshops, built with React, TypeScript, and Supabase.

## Features

- 🎓 Workshop information and registration
- 💰 Donation system with Stripe integration
- 👥 User authentication and profiles
- 📱 Responsive design for all devices
- 🌙 Dark/light mode support
- 📊 Admin dashboard for workshop management

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Edge Functions)
- **Payments**: Stripe
- **Deployment**: Netlify
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account (for payments)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd spendora
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

## Stripe Integration

### Development Mode
In development, Stripe payments are disabled to prevent accidental charges. The donation buttons will show an informational message instead.

### Production Setup
To enable Stripe payments in production:

1. **Supabase Setup**:
   - Deploy the Edge Functions in `/supabase/functions/`
   - Set environment variables in Supabase dashboard:
     - `STRIPE_SECRET_KEY`
     - `STRIPE_WEBHOOK_SECRET`

2. **Stripe Setup**:
   - Create products and prices in Stripe dashboard
   - Update price IDs in `src/stripe-config.ts`
   - Configure webhooks to point to your Supabase Edge Function

3. **Database Setup**:
   - Run migrations to create Stripe-related tables
   - Ensure RLS policies are properly configured

## Deployment

The app is configured for deployment on Netlify:

```bash
npm run build
```

The build output will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── auth/           # Authentication components
│   ├── stripe/         # Stripe payment components
│   └── ui/             # Base UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── contexts/           # React contexts
└── styles/             # Global styles

supabase/
├── functions/          # Edge Functions
└── migrations/         # Database migrations
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.