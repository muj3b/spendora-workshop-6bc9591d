import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart } from 'lucide-react';

const Success = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading period to show the success state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // SEO
    document.title = 'Donation Success | Spendora';
    const desc = 'Thank you for supporting Spendora. Your donation helps fund free financial literacy workshops.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel','canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/success');

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center liquid-page">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Processing your donation...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center liquid-page px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Thank You for Your Support!</CardTitle>
          <CardDescription>
            Your donation has been processed successfully and will help us continue providing free financial literacy workshops to students.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {sessionId && (
            <div className="text-sm text-muted-foreground bg-gray-50 dark:bg-gray-800 p-3 rounded">
              <p className="font-medium mb-1">Transaction Details:</p>
              <p className="font-mono text-xs break-all">Session ID: {sessionId}</p>
            </div>
          )}
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Heart className="h-5 w-5 text-red-500" />
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">Thank you</h3>
            </div>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              That money goes to supplies, the library space, and keeping workshops free.
            </p>
          </div>
          
          <div className="space-y-2">
            <Button asChild className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/gallery">View Workshop Gallery</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Success;