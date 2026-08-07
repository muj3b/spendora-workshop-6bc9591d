import { memo, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Camera, MapPin, Sparkles, TrendingUp, Wallet, Store, Coins } from "lucide-react";
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

  const topics = [
    {
      title: "Stock Markets & Investing",
      desc: "Learn investing fundamentals, market analysis & portfolio strategy",
      img: "/images/stocks.jpg",
      icon: TrendingUp,
      path: "/stock-markets",
      color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
    },
    {
      title: "Budgeting",
      desc: "Master personal finance, money management & savings goals",
      img: "/images/budgeting.jpg",
      icon: Wallet,
      path: "/budgeting",
      color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
    },
    {
      title: "Online Business",
      desc: "Explore e-commerce, dropshipping, TikTok Shop & marketing",
      img: "/images/business.jpg",
      icon: Store,
      path: "/online-business",
      color: "text-purple-500 bg-purple-500/10 border-purple-500/20"
    },
    {
      title: "Crypto + NFTs",
      desc: "Understand digital assets, blockchain technology & Web3",
      img: "/images/crypto.jpg",
      icon: Coins,
      path: "/crypto-nfts",
      color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
    }
  ];

  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="aurora-bg absolute inset-0 z-0 pointer-events-none opacity-40" aria-hidden />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Split Screen Hero - Taste Skill Directive */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>Student-Led Financial Literacy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              Level up your <span className="gradient-text-primary">money skills</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              A free workshop designed by high school students to teach real-world financial skills to students.
            </p>

            {/* Impact Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2 pb-2">
              <button
                type="button"
                onClick={handleGallery}
                className="p-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-all active:scale-[0.96] text-left group cursor-pointer"
              >
                <div className="text-2xl sm:text-3xl font-black text-blue-500 tabular-nums">300+</div>
                <div className="text-xs font-bold text-foreground mt-0.5">Students</div>
                <div className="text-[11px] text-muted-foreground truncate">Indian schools</div>
                <div className="mt-2 text-[10px] font-bold text-blue-500 group-hover:underline">View gallery →</div>
              </button>

              <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-left">
                <div className="text-2xl sm:text-3xl font-black text-emerald-500 tabular-nums">3</div>
                <div className="text-xs font-bold text-foreground mt-0.5">Events</div>
                <div className="text-[11px] text-muted-foreground">Hosted</div>
              </div>

              <div className="p-4 rounded-2xl border border-purple-500/20 bg-purple-500/5 text-left">
                <div className="text-2xl sm:text-3xl font-black text-purple-500 tabular-nums">5+</div>
                <div className="text-xs font-bold text-foreground mt-0.5">Topics</div>
                <div className="text-[11px] text-muted-foreground">Covered</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button
                  size="lg"
                  onClick={handleSignup}
                  className="px-8 py-6 rounded-2xl text-base font-bold shadow-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Reserve Your Spot - It's Free! 🚀
                </Button>

                <Button
                  variant="outline"
                  onClick={handleDonate}
                  className="px-6 py-6 rounded-2xl text-sm font-semibold gap-2"
                >
                  <Heart className="w-4 h-4 text-pink-500 fill-pink-500/20" />
                  Support Mission
                </Button>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-1">
                <span>⚡ Limited spots available</span>
                <span>•</span>
                <button onClick={() => navigate('/gallery')} className="hover:text-foreground underline flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5 text-blue-500" /> Workshop Gallery
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photography Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-border/80 image-outline group">
              <img
                src="/images/hero.jpg"
                alt="High school students learning financial literacy in a workshop"
                className="w-full h-[400px] lg:h-[460px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end text-left text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Live Hands-On Learning</span>
                <p className="text-sm font-semibold text-white/90">Interactive workshops hosted in local libraries & schools</p>
              </div>
            </div>
          </div>
        </div>

        {/* Workshop Event Info & Location Bar */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-6 items-stretch mb-20">
          {/* Live Timer */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs flex flex-col justify-center text-left">
            <LiveEventTimer
              isActive={true}
              eventStartDateTime="2025-07-10T11:00:00"
              eventDurationHours={1.5}
              totalEventDays={2}
            />
          </div>

          {/* Location & Details */}
          <div className="md:col-span-5 p-6 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs flex flex-col justify-between space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center font-bold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">R.H. Stafford Library</h3>
                <p className="text-xs text-muted-foreground">Workshop Location</p>
                <a
                  href="https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline mt-2"
                >
                  <span>View on Maps</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-border/40 grid grid-cols-3 gap-2 text-xs font-semibold text-foreground">
              <div>💰 Free</div>
              <div>📚 Supplies</div>
              <div>🍪 Snacks</div>
            </div>
          </div>
        </div>

        {/* Explore Workshop Topics Grid with Photography */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">Explore Workshop Topics</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Practical modules built to give you a real financial edge</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((t, idx) => {
              const IconComp = t.icon;
              return (
                <div
                  key={idx}
                  onClick={() => navigate(t.path)}
                  className="group rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between text-left"
                >
                  <div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={t.img}
                        alt={t.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 image-outline"
                      />
                      <div className="absolute top-3 left-3">
                        <div className={`w-9 h-9 rounded-xl ${t.color} backdrop-blur-md flex items-center justify-center border shadow-xs`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">{t.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{t.desc}</p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:underline">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
