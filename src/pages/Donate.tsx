import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight, ArrowLeft } from 'lucide-react';

const Donate = () => {
  const handleDonate = () => {
    window.open('https://buy.stripe.com/cNicN5gG3f8ocU4cjN0Ba00', '_blank');
  };

  useEffect(() => {
    document.title = 'Support Our Mission | Spendora';
    const desc = 'Donate to support free student-led financial literacy workshops by Spendora.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name', 'description'); document.head.appendChild(meta); }
    meta.setAttribute('content', desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel', 'canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/donate');
  }, []);

  return (
    <div className="min-h-screen liquid-page py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Button
            variant="ghost"
            asChild
            className="mb-6 flex items-center gap-2 hover:bg-primary/10"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="text-display text-foreground mb-4">
            Support <span className="gradient-text-primary">Spendora</span>
          </h1>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Help us continue providing free financial literacy workshops to students. 
            Your donation makes a real difference in young people's financial education.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Donation Section */}
          <div className="space-y-6">
            <Card className="liquid-glass-surface shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-blue-800 dark:text-blue-200 mb-2">
                  Choose Your Amount
                </CardTitle>
                <p className="text-gray-700 dark:text-gray-300">
                  Every donation helps us reach more students with essential financial education.
                  You can choose any amount that works for you.
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Make a Difference Today
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Your support helps keep our workshops completely free for all students.
                    Every contribution makes a real difference in a student's financial future.
                  </p>
                </div>
                
                <Button
                  onClick={handleDonate}
                  size="lg"
                  className="px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-xl"
               >
                  <Heart className="w-6 h-6 mr-3" />
                  Donate Now
                  <ArrowRight className="w-6 h-6 ml-3" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Secure payment processing powered by Stripe
                </p>
              </CardContent>
            </Card>

            {/* Alternative Support Methods */}
            <Card className="liquid-glass-surface">
              <CardHeader>
                <CardTitle className="text-green-800 dark:text-green-200 text-xl">
                  Other Ways to Support Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Share our workshop with friends and family</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Follow us on social media</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Volunteer at our workshops</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                  <p className="text-sm text-green-700 dark:text-green-300">Provide feedback to help us improve</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Impact & Benefits */}
          <div className="space-y-6">
            <Card className="liquid-glass-surface shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Your Impact in Action
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-400">
                  See exactly how your donation helps students succeed
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4 p-4 liquid-glass-surface rounded-lg">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">$</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">Learning Materials & Supplies</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-300">Workbooks, calculators, and hands-on materials for every student</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 liquid-glass-surface rounded-lg">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">🏢</div>
                  <div>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Venue & Facility Costs</h4>
                    <p className="text-sm text-green-700 dark:text-green-300">Library partnerships and equipment rental to keep workshops accessible</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 liquid-glass-surface rounded-lg">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">📚</div>
                  <div>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Curriculum Development</h4>
                    <p className="text-sm text-purple-700 dark:text-purple-300">Creating engaging, age-appropriate financial education content</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 liquid-glass-surface rounded-lg">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">🎯</div>
                  <div>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Program Expansion</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">Reaching more schools and communities with financial literacy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="liquid-glass-surface">
              <CardHeader>
                <CardTitle className="text-indigo-800 dark:text-indigo-200 text-xl">
                  Student-Led, Community-Supported
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-700 dark:text-indigo-300 leading-relaxed">
                  Spendora is created and run entirely by passionate high school students who believe 
                  every young person deserves financial literacy skills. Your support ensures we can 
                  continue offering these life-changing workshops completely free, removing financial 
                  barriers that might prevent students from accessing this crucial education.
                </p>
              </CardContent>
            </Card>

            <Card className="liquid-glass-surface">
              <CardHeader>
                <CardTitle className="text-emerald-800 dark:text-emerald-200 text-xl">
                  Real Student Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <blockquote className="text-emerald-700 dark:text-emerald-300 leading-relaxed italic border-l-4 border-emerald-400 pl-4">
                    "Thanks to Spendora, I learned how to budget my allowance and even started 
                    investing! Now I'm helping my friends understand money too."
                  </blockquote>
                  <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                    — Workshop Participant, Age 14
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;