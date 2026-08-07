import { memo, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Store, ArrowRight, Coins, Bitcoin, Heart, Camera, MapPin, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveEventTimer from "@/components/LiveEventTimer";

const Hero = memo(() => {
  const navigate = useNavigate();

  const handleSignup = useCallback(() => {
    window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank');
  }, []);

  const handleDonate = useCallback(() => {
    navigate('/donate');
  }, [navigate]);

  const handleGallery = useCallback(() => {
    navigate('/gallery#indian-school');
  }, [navigate]);

  return (
    <section className="relative min-h-[90vh] pt-28 pb-16 overflow-hidden flex flex-col justify-center">
      {/* Aurora Ambient Glow */}
      <div className="aurora-bg absolute inset-0 z-0 pointer-events-none opacity-60" aria-hidden />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Student-Led Financial Literacy</span>
          </div>

          <h1 className="text-display text-foreground">
            Level up your <span className="gradient-text-primary">money skills</span>
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A free workshop designed by high school students to teach real-world financial skills to students.
          </p>

          {/* Impact Stats Row - Concentric radii & optical alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 pb-2 max-w-3xl mx-auto">
            {/* Stat 1 - Clickable Indian School */}
            <button
              type="button"
              onClick={handleGallery}
              className="p-5 rounded-3xl border border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10 transition-all duration-200 active:scale-[0.96] text-left group cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-md"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent tabular-nums">
                  300+
                </div>
                <div className="text-sm font-bold text-foreground mt-1">Students</div>
                <div className="text-xs text-muted-foreground">Indian schools</div>
              </div>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-500 group-hover:underline">
                Click to view photos & videos →
              </div>
            </button>

            {/* Stat 2 */}
            <div className="p-5 rounded-3xl border border-emerald-500/30 bg-emerald-500/5 text-left shadow-xs">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent tabular-nums">
                3
              </div>
              <div className="text-sm font-bold text-foreground mt-1">Events</div>
              <div className="text-xs text-muted-foreground">Hosted</div>
            </div>

            {/* Stat 3 */}
            <div className="p-5 rounded-3xl border border-purple-500/30 bg-purple-500/5 text-left shadow-xs">
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent tabular-nums">
                5+
              </div>
              <div className="text-sm font-bold text-foreground mt-1">Topics</div>
              <div className="text-xs text-muted-foreground">Covered</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={handleSignup}
                className="w-full sm:w-auto px-8 py-6 rounded-full text-base sm:text-lg font-bold shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
              >
                Reserve Your Spot - It's Free! 🚀
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Button
                variant="outline"
                onClick={handleDonate}
                className="rounded-full gap-2 text-xs sm:text-sm"
              >
                <Heart className="w-4 h-4 text-pink-500" />
                Support Our Mission
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/gallery')}
                className="rounded-full gap-2 text-xs sm:text-sm"
              >
                <Camera className="w-4 h-4 text-blue-500" />
                Workshop Gallery
              </Button>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground pt-1">
              Limited spots available - Don't miss out!
            </p>
          </div>
        </div>

        {/* Live Timer & Location Block */}
        <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-6 items-stretch">
          {/* Live Timer */}
          <div className="p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm flex flex-col justify-center">
            <LiveEventTimer
              isActive={true}
              eventStartDateTime="2025-07-10T11:00:00"
              eventDurationHours={1.5}
              totalEventDays={2}
            />
          </div>

          {/* Location & Features */}
          <div className="space-y-4 flex flex-col justify-between">
            {/* Location Card */}
            <div className="p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">R.H. Stafford Library</h3>
                  <p className="text-xs text-muted-foreground">Workshop Location</p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline"
              >
                <span>View on Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Features Included Card */}
            <div className="p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-sm">
              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">What's Included</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs sm:text-sm font-semibold text-foreground">
                <div className="flex items-center gap-2">💰 Completely Free</div>
                <div className="flex items-center gap-2">📚 All Supplies Included</div>
                <div className="flex items-center gap-2">🍪 Snacks Provided</div>
              </div>
            </div>
          </div>
        </div>

        {/* Explore Workshop Topics Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="text-center mb-10 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">Explore Our Workshop Topics</h2>
            <p className="text-muted-foreground text-sm sm:text-base">Click on any card to learn more about each topic</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={ChartLine}
              title="Stock Markets & Investing"
              description="Learn investing fundamentals and market analysis"
              iconGradient="blue"
              onCardClick={() => navigate('/stock-markets')}
              badge={
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-500">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              }
            />
            <FeatureCard
              icon={Coins}
              title="Budgeting"
              description="Master personal finance and money management"
              iconGradient="green"
              onCardClick={() => navigate('/budgeting')}
              badge={
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-green-500">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              }
            />
            <FeatureCard
              icon={Store}
              title="Online Business"
              description="Explore e-commerce and entrepreneurship"
              iconGradient="purple"
              onCardClick={() => navigate('/online-business')}
              badge={
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-purple-500">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              }
            />
            <FeatureCard
              icon={Bitcoin}
              title="Crypto + NFTs"
              description="Understand digital assets and blockchain"
              iconGradient="orange"
              onCardClick={() => navigate('/crypto-nfts')}
              badge={
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500">
                  Learn More <ArrowRight className="w-3 h-3" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
