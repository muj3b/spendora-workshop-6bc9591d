import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Store, ArrowRight, Coins, Bitcoin, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveEventTimer from "@/components/LiveEventTimer";
import HamburgerMenu from "@/components/HamburgerMenu";
import { useAuth } from "@/hooks/useAuth";

const Hero = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center overflow-hidden transition-colors duration-300 pt-16" role="main" aria-label="Spendora Workshop Hero Section">
      <HamburgerMenu />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 opacity-10 animate-[float_6s_ease-in-out_infinite]">
          <ChartLine size={120} className="text-blue-600" />
        </div>
        <div className="absolute top-40 right-20 opacity-10 animate-[float_8s_ease-in-out_infinite_2s]">
          <Coins size={100} className="text-green-600" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-10 animate-[float_7s_ease-in-out_infinite_1s]">
          <Store size={110} className="text-purple-600" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10 animate-[float_9s_ease-in-out_infinite_3s]">
          <ChartLine size={90} className="text-blue-600" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="relative text-display mb-6 sm:mb-8 animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out]" style={{ animationDelay: '0.2s' }}>
            <span className="relative inline-block gradient-text-primary">
              <span className="animate-letter-shine">Level Up Your Money Skills</span>
            </span>
          </h1>
          
          <p className="text-body-large text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out_0.4s_both]">
            A free workshop designed by high school students to teach 
            real-world financial skills to students.
          </p>

          {/* Main Call-to-Action Section */}
          <div className="space-y-8 animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out_0.6s_both]">
            {/* Primary signup button */}
            <div className="text-center space-y-4">
              <GradientButton 
                size="xl" 
                variant="secondary" 
                pulse={true}
                className="w-full sm:w-auto rounded-full text-xl px-12 py-6 hover:scale-110 transition-all duration-300 shadow-glow"
                onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
                aria-label="Sign up for the free Spendora workshop"
              >
                <span className="font-bold">Reserve Your Spot - It's Free!</span> <span role="img" aria-label="Rocket">🚀</span>
              </GradientButton>
              
              {/* Support button */}
              <div className="flex justify-center">
                <GradientButton 
                  size="lg" 
                  variant="warm" 
                  className="rounded-full text-lg px-8 py-4 hover:scale-105 transition-all duration-300"
                  onClick={() => navigate('/donate')}
                  aria-label="Support Spendora with a donation"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="font-semibold">Support Our Mission</span>
                </GradientButton>
              </div>
              
              <p className="text-muted-foreground mt-3 text-lg">
                Limited spots available - Don't miss out! 
              </p>
            </div>

            {/* Dynamic Workshop Info Section - Redesigned */}
            <div className="relative max-w-4xl mx-auto">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Timer Section */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600/90 to-purple-600/90 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl relative overflow-hidden">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <div className="relative z-10">
                      <LiveEventTimer 
                        isActive={true} 
                        eventStartDateTime="2025-07-10T11:00:00"
                        eventDurationHours={1.5}
                        totalEventDays={1}
                        className=""
                      />
                    </div>
                  </div>
                </div>

                {/* Location & Details Section */}
                <div className="space-y-6">
                  {/* Location Card */}
                  <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                          <span role="img" aria-label="Location" className="text-2xl">📍</span>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-foreground">R.H. Stafford Library</h3>
                          <p className="text-muted-foreground text-sm">Workshop Location</p>
                        </div>
                      </div>
                      <a 
                        href="https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-lg text-primary hover:text-primary/80 transition-all duration-300 font-medium group bg-primary/10 px-4 py-2 rounded-full"
                      >
                        <span>View on Maps</span>
                        <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Features Card */}
                  <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
                    <div className="text-center space-y-3">
                      <h4 className="text-xl font-bold text-foreground">What's Included</h4>
                      <div className="grid grid-cols-1 gap-2 text-foreground">
                        <div className="flex items-center justify-center space-x-2">
                          <span role="img" aria-label="Money">💰</span>
                          <span className="font-medium">Completely Free</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <span role="img" aria-label="Supplies">📚</span>
                          <span className="font-medium">All Supplies Included</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                          <span role="img" aria-label="Snacks">🍪</span>
                          <span className="font-medium">Snacks Provided</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">Explore Our Workshop Topics</h2>
            <p className="text-muted-foreground mb-8">Click on any card to learn more about each topic</p>
          </div>

          <section id="features" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 animate-[fade-in_1s_ease-out_0.8s_both]" aria-labelledby="workshop-topics">
            <FeatureCard
              icon={ChartLine}
              title="Stock Markets & Investing"
              description="Learn investing fundamentals and market analysis"
              iconGradient="blue"
              iconSize="lg"
              variant="glass"
              animationDelay="1.3s"
              onCardClick={() => navigate('/stock-markets')}
              badge={
                <div className="flex items-center space-x-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              }
            />
            <FeatureCard
              icon={Coins}
              title="Budgeting"
              description="Master personal finance and money management"
              iconGradient="green"
              iconSize="lg"
              variant="glass"
              animationDelay="1.5s"
              badge={<span className="text-sm text-muted-foreground">Coming Soon</span>}
            />
            <FeatureCard
              icon={Store}
              title="Online Business"
              description="Explore e-commerce and entrepreneurship"
              iconGradient="purple"
              iconSize="lg"
              variant="glass"
              animationDelay="1.7s"
              badge={<span className="text-sm text-muted-foreground">Coming Soon</span>}
            />
            <FeatureCard
              icon={Bitcoin}
              title="Crypto + NFTs"
              description="Understand digital assets and blockchain"
              iconGradient="orange"
              iconSize="lg"
              variant="glass"
              animationDelay="1.9s"
              onCardClick={() => navigate('/crypto-nfts')}
              badge={
                <div className="flex items-center space-x-1 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors bg-orange-100 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              }
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Hero;