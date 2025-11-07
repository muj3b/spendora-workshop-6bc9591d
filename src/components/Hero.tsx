import { memo, useMemo, useCallback, useRef } from 'react';
import { GradientButton } from "@/components/ui/gradient-button";
import { FeatureCard } from "@/components/ui/feature-card";
import TextPressure from "@/components/ui/text-pressure";
import { Spotlight } from "@/components/ui/spotlight-mouse";
import { ChartLine, Store, ArrowRight, Coins, Bitcoin, Heart, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveEventTimer from "@/components/LiveEventTimer";
import { RobotBackground } from "@/components/RobotBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Holographic Stat Card Component
const HolographicStatCard = memo(({ number, label, sublabel, gradient, hoverBorder }: {
  number: string;
  label: string;
  sublabel: string;
  gradient: string;
  hoverBorder: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--bg-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--bg-y', `${(y / rect.height) * 100}%`);
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    card.style.setProperty('--x', '50%');
    card.style.setProperty('--y', '50%');
    card.style.setProperty('--bg-x', '50%');
    card.style.setProperty('--bg-y', '50%');
  };

  return (
    <div className="group cursor-default">
      <div
        ref={cardRef}
        className={`holographic-stat-card liquid-glass-surface stat-card rounded-xl p-3 sm:p-5 shadow-medium bg-background/20 backdrop-blur-md border border-white/5 hover:border-${hoverBorder} transition-all duration-300`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center space-y-1 sm:space-y-2 relative z-10">
          <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-br ${gradient} bg-clip-text text-transparent`}>
            {number}
          </div>
          <div className="text-xs sm:text-sm font-semibold text-foreground">{label}</div>
          <div className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block">{sublabel}</div>
        </div>
      </div>
    </div>
  );
});

HolographicStatCard.displayName = 'HolographicStatCard';


const Hero = memo(() => {
  const navigate = useNavigate();
  
  const handleSignup = useCallback(() => {
    window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank');
  }, []);
  
  const handleDonate = useCallback(() => {
    navigate('/donate');
  }, [navigate]);
  
  const handleGallery = useCallback(() => {
    navigate('/gallery');
  }, [navigate]);
  
  const navigateToStockMarkets = useCallback(() => {
    navigate('/stock-markets');
  }, [navigate]);
  
  const navigateToCryptoNFTs = useCallback(() => {
    navigate('/crypto-nfts');
  }, [navigate]);

  // Memoize heavy decorative elements
  const decorativeElements = useMemo(() => (
    <div className="absolute inset-0 overflow-hidden z-0">
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
  ), []);

  return (
    <main className="relative min-h-screen bg-transparent flex flex-col overflow-hidden transition-colors duration-300 pt-32" role="main" aria-label="Spendora Workshop Hero Section">
      {/* Aurora animated background - Lowest layer */}
      <div className="aurora-bg absolute inset-0 z-0" aria-hidden />
      
      {/* Background decorative elements */}
      {decorativeElements}
      
      {/* Spotlight - Behind robot but above background */}
      <div className="absolute inset-0 z-10">
        <Spotlight
          size={400}
          className=""
          springOptions={{ bounce: 0, stiffness: 150, damping: 25 }}
        />
      </div>
      
      {/* Robot Background - Above spotlight */}
      <div className="absolute inset-0 z-20">
        <RobotBackground />
      </div>

      {/* Main content - Above everything */}
      <div className="container mx-auto px-4 sm:px-6 relative z-30 flex-1 flex flex-col">
        {/* Title and Subtitle Section - Compact at top */}
        <div className="text-center pt-1 pb-2">
          <div className="relative mb-1 animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out]" style={{ animationDelay: '0.2s', height: '120px' }}>
            <TextPressure
              text="Level up your money skills"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="hsl(var(--foreground))"
              strokeColor="transparent"
              minFontSize={32}
              className="font-black tracking-tight"
            />
          </div>
          
          {/* Subtitle right under the title */}
          <div className="-mt-4 mb-8">
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out_0.4s_both] text-lg md:text-xl">
              A free workshop designed by high school students to teach 
              real-world financial skills to students.
            </p>
            
            {/* Impact Stats - Inline below subtitle */}
            <div className="mt-6 mb-4 max-w-4xl mx-auto animate-smooth-fade-in animate-[fade-in_1s_ease-out_0.5s_both]">
              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                {/* Stat 1 - Clickable Indian School with permanent glow */}
                <div 
                  onClick={() => navigate('/gallery')} 
                  className="cursor-pointer relative group/card"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate('/gallery')}
                  aria-label="View 300+ Indian school students workshop gallery"
                >
                  <GlowingEffect
                    spread={360}
                    glow={true}
                    proximity={0}
                    inactiveZone={0.01}
                    borderWidth={3}
                    blur={0}
                    alwaysOn
                  />
                  <div className="absolute top-2 right-2 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-blue-500/90 text-white text-[10px] px-2 py-1 rounded-full font-bold transition-all duration-300">
                      Click to view!
                    </div>
                  </div>
                  <HolographicStatCard
                    number="300+"
                    label="Students"
                    sublabel="Indian schools"
                    gradient="from-blue-500 via-purple-500 to-pink-500"
                    hoverBorder="blue-500/30"
                  />
                </div>

                {/* Stat 2 */}
                <HolographicStatCard
                  number="3"
                  label="Libraries"
                  sublabel="Partnerships"
                  gradient="from-green-500 via-emerald-500 to-teal-500"
                  hoverBorder="green-500/30"
                />

                {/* Stat 3 */}
                <HolographicStatCard
                  number="5+"
                  label="Topics"
                  sublabel="Covered"
                  gradient="from-orange-500 via-red-500 to-pink-500"
                  hoverBorder="orange-500/30"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Robot Space - Larger area for robot */}
        <div className="flex-1 min-h-[300px] relative">
          {/* Robot renders here via RobotBackground component */}
          
          {/* Buttons positioned at robot's body/legs level */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="text-center space-y-6 animate-smooth-fade-in transform transition-all duration-1000 animate-[fade-in_1s_ease-out_0.6s_both]">
              {/* Primary signup button */}
              <div className="space-y-4">
                <GradientButton 
                  size="xl" 
                  variant="secondary" 
                  pulse={true}
                  className="w-full sm:w-auto rounded-full text-xl px-12 py-6 hover:scale-110 transition-all duration-300 bg-background/40"
                  onClick={handleSignup}
                  aria-label="Sign up for the free Spendora workshop"
                >
                  <span className="font-bold">Reserve Your Spot - It's Free!</span> <span role="img" aria-label="Rocket">🚀</span>
                </GradientButton>
                
                {/* Support and Gallery buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <GradientButton 
                    size="lg" 
                    variant="warm" 
                    className="rounded-full text-lg px-8 py-4 hover:scale-105 transition-all duration-300 bg-background/40"
                    onClick={handleDonate}
                    aria-label="Support Spendora with a donation"
                    data-spotlight
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Support Our Mission</span>
                  </GradientButton>
                  
                  <GradientButton 
                    size="lg" 
                    variant="accent" 
                    className="rounded-full text-lg px-8 py-4 hover:scale-105 transition-all duration-300 bg-background/40"
                    onClick={handleGallery}
                    aria-label="View workshop gallery"
                    data-spotlight
                  >
                    <Camera className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Workshop Gallery</span>
                  </GradientButton>
                </div>
                
                <p className="text-muted-foreground mt-3 text-lg">
                  Limited spots available - Don't miss out! 
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Info Section - Right below robot */}
        <div className="pb-8 pt-8">
          <div className="max-w-4xl mx-auto">
            {/* Dynamic Workshop Info Section */}
            <div className="relative mb-12">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Timer Section */}
                <div className="relative">
                  <div className="liquid-glass-surface glass-interactive glass-floating rounded-3xl p-8 shadow-large relative overflow-hidden bg-background/40">
                    {/* Background pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                    <div className="relative z-10">
                      <LiveEventTimer 
                        isActive={true} 
                        eventStartDateTime="2025-07-10T11:00:00"
                        eventDurationHours={1.5}
                        totalEventDays={2}
                        className=""
                      />
                    </div>
                  </div>
                </div>

                {/* Location & Details Section */}
                <div className="space-y-6">
                  {/* Location Card */}
                  <div className="liquid-glass-surface glass-interactive glass-floating rounded-2xl p-6 shadow-medium bg-background/40">
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
                  <div className="liquid-glass-surface glass-interactive glass-floating rounded-2xl p-6 shadow-medium bg-background/40">
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

            <div className="text-center mb-8">
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
                onCardClick={navigateToStockMarkets}
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
                onCardClick={() => navigate('/budgeting')}
                badge={
                  <div className="flex items-center space-x-1 text-sm font-semibold text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                }
              />
              <FeatureCard
                icon={Store}
                title="Online Business"
                description="Explore e-commerce and entrepreneurship"
                iconGradient="purple"
                iconSize="lg"
                variant="glass"
                animationDelay="1.7s"
                onCardClick={() => navigate('/online-business')}
                badge={
                  <div className="flex items-center space-x-1 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors bg-purple-100 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                }
              />
              <FeatureCard
                icon={Bitcoin}
                title="Crypto + NFTs"
                description="Understand digital assets and blockchain"
                iconGradient="orange"
                iconSize="lg"
                variant="glass"
                animationDelay="1.9s"
                onCardClick={navigateToCryptoNFTs}
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
      </div>
    </main>
  );
});

Hero.displayName = 'Hero';

export default Hero;
