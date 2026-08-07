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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          asChild
          className="mb-6 flex items-center gap-2 hover:bg-accent max-w-fit"
        >
          <Link to="/">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Support <span className="gradient-text-primary">Spendora</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Help us continue providing free financial literacy workshops to students. 
            Your donation makes a real difference in young people's financial education.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <Card className="rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-xl p-6">
              <CardHeader className="text-center p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  Choose Your Amount
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Every donation helps us reach more students with essential financial education.
                  You can choose any amount that works for you.
                </p>
              </CardHeader>
              <CardContent className="text-center space-y-6 p-0">
                <div className="p-6 rounded-2xl bg-muted/40 border border-border/50 text-left space-y-2">
                  <h3 className="text-base font-bold text-foreground">
                    Make a Difference Today
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your support helps keep our workshops completely free for all students.
                    Every contribution makes a real difference in a student's financial future.
                  </p>
                </div>
                
                <Button
                  onClick={handleDonate}
                  size="lg"
                  className="w-full sm:w-auto px-10 py-6 rounded-full shadow-lg hover:scale-105 transition-all text-lg font-bold bg-pink-600 hover:bg-pink-700 text-white"
                >
                  <Heart className="w-5 h-5 mr-2 fill-white" />
                  Donate Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                <p className="text-xs text-muted-foreground">
                  Secure payment processing powered by Stripe
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-lg p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg font-bold text-foreground">
                  Other Ways to Support Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 p-0 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span>Share our workshop with friends and family</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  <span>Follow us on social media</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  <span>Volunteer at our workshops</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  <span>Provide feedback to help us improve</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side */}
          <div className="space-y-6">
            <Card className="rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-xl p-6">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-xl font-bold text-foreground">
                  Your Impact in Action
                </CardTitle>
                <p className="text-xs text-muted-foreground">
                  See exactly how your donation helps students succeed
                </p>
              </CardHeader>
              <CardContent className="space-y-3 p-0">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/50">
                  <div className="w-8 h-8 bg-blue-500 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">$</div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Learning Materials & Supplies</h4>
                    <p className="text-xs text-muted-foreground">Workbooks, calculators, and hands-on materials for every student</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/50">
                  <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">🏢</div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Venue & Facility Costs</h4>
                    <p className="text-xs text-muted-foreground">Library partnerships and equipment rental to keep workshops accessible</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/50">
                  <div className="w-8 h-8 bg-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">📚</div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Curriculum Development</h4>
                    <p className="text-xs text-muted-foreground">Creating engaging, age-appropriate financial education content</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-muted/40 border border-border/50">
                  <div className="w-8 h-8 bg-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">🎯</div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Program Expansion</h4>
                    <p className="text-xs text-muted-foreground">Reaching more schools and communities with financial literacy</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-lg p-6 space-y-3">
              <h3 className="text-lg font-bold text-foreground">Student-Led, Community-Supported</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Spendora is created and run entirely by passionate high school students who believe 
                every young person deserves financial literacy skills. Your support ensures we can 
                continue offering these life-changing workshops completely free.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;