
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Store, ArrowRight, Coins, Bitcoin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveEventTimer from "@/components/LiveEventTimer";
import HamburgerMenu from "@/components/HamburgerMenu";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 flex items-center overflow-hidden transition-colors duration-300" role="main" aria-label="Spendora Workshop Hero Section">
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
          <div className="space-y-6 animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out_0.6s_both]">
            {/* Hero CTA Button */}
            <div className="text-center">
              <GradientButton 
                size="xl" 
                variant="secondary" 
                pulse={true}
                className="w-full sm:w-auto rounded-full text-xl px-12 py-6 hover:scale-110 transition-all duration-300 shadow-glow"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc96cCWzGieYsW8-O71obKoyoV3yF8YTE1Msay3ZwoeWgydBg/viewform', '_blank')}
                aria-label="Tell us what days work for you"
              >
                <span className="font-bold">Help Us Pick The Perfect Dates!</span> <span role="img" aria-label="Calendar">📅</span>
              </GradientButton>
              <p className="text-muted-foreground mt-3 text-lg">
                Vote for your preferred workshop dates 👆
              </p>
            </div>

            {/* Secondary info card */}
            <div className="bg-gradient-primary/10 dark:bg-gradient-primary/5 rounded-2xl p-4 sm:p-6 mx-auto max-w-lg backdrop-blur-sm border border-primary/20">
              <LiveEventTimer 
                isActive={false} 
                eventStartDateTime="2025-07-06T14:00:00"
                eventDurationHours={2}
                totalEventDays={5}
                className="mb-3"
              />
              <div className="text-center space-y-2">
                <p className="text-body text-muted-foreground">
                  <span role="img" aria-label="Location">📍</span> R.H. Stafford Library
                </p>
                <p className="text-body text-muted-foreground">
                  <span role="img" aria-label="Money">💰</span> Free • All supplies included
                </p>
              </div>
            </div>

            {/* Secondary signup button */}
            <div className="text-center">
              <GradientButton 
                size="lg" 
                variant="primary"
                className="w-full sm:w-auto rounded-full"
                onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
                aria-label="Sign up for the free Spendora workshop"
              >
                Reserve Your Spot - It's Free! <span role="img" aria-label="Rocket">🚀</span>
              </GradientButton>
            </div>
          </div>

          <section id="features" className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-2 animate-[fade-in_1s_ease-out_0.8s_both]" aria-labelledby="workshop-topics">
            <h2 id="workshop-topics" className="sr-only">Workshop Topics</h2>
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
                <div className="flex items-center space-x-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  <span>Click me</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
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
                <div className="flex items-center space-x-1 text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
                  <span>Click me</span>
                  <ArrowRight className="w-4 h-4 animate-pulse" />
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
