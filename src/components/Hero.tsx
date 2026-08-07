import { memo, useCallback } from 'react';
import { ArrowRight, Heart, Camera, MapPin, TrendingUp, Wallet, Store, Coins, Navigation, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveEventTimer from "@/components/LiveEventTimer";

const Hero = memo(() => {
  const navigate = useNavigate();

  const handleSignup = useCallback(() => {
    window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank');
  }, []);

  const topics = [
    { title: "Stock Markets", desc: "Learn investing fundamentals, market analysis & trading basics", icon: TrendingUp, path: "/stock-markets", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40" },
    { title: "Budgeting", desc: "Master personal finance, 50/30/20 rule & expense tracking", icon: Wallet, path: "/budgeting", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40" },
    { title: "Online Business", desc: "Explore e-commerce, dropshipping, TikTok shop & marketing", icon: Store, path: "/online-business", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40" },
    { title: "Crypto + NFTs", desc: "Understand digital assets, blockchain technology & Web3", icon: Coins, path: "/crypto-nfts", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5eee8] via-[#fdfbfa] to-background dark:from-[#071a12] dark:to-black" />
        <div className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent stars-1 animate-[animStar_50s_linear_infinite]" />
        <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent stars-2 animate-[animStar_80s_linear_infinite]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 dark:bg-emerald-700/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      </div>

      {/* Hero Header */}
      <div className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center pt-32 pb-16 px-6">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 backdrop-blur-md mb-8 animate-fade-up shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 dark:bg-[#40916c]" />
            </span>
            <span className="text-xs font-bold text-emerald-900 dark:text-emerald-100/90 tracking-wide font-manrope">Student-Led Financial Literacy</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight font-manrope leading-[1.08] mb-8 animate-fade-up text-slate-900 dark:text-white">
            <span>Level up your </span>
            <span className="text-emerald-700 dark:text-[#52b788] inline-block relative">
              money skills
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-emerald-500/40 dark:text-[#40916c] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            A free workshop designed by high school students to teach real-world financial skills to students.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
            <button onClick={handleSignup} className="shiny-cta group shadow-xl hover:scale-105 transition-all">
              <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
                Reserve Your Spot - It's Free! <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
            
            <button onClick={() => navigate('/gallery')} className="group px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 font-bold hover:text-emerald-700 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-md">
              <Camera className="w-5 h-5 text-emerald-600 dark:text-[#52b788]" /> Workshop Gallery
            </button>

            <button onClick={() => navigate('/donate')} className="group px-6 py-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 font-bold hover:text-emerald-700 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-md">
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500/20" /> Support Our Mission
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="w-full mt-20 border-y border-slate-200 dark:border-white/5 bg-white/60 dark:bg-white/[0.02] backdrop-blur-md py-8">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <button onClick={() => navigate('/gallery#indian-school')} className="group cursor-pointer">
              <div className="text-4xl md:text-5xl font-black text-emerald-700 dark:text-[#52b788] font-manrope tabular-nums">300+</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">Students Reached</div>
              <div className="text-xs text-slate-500 dark:text-zinc-500">Indian schools</div>
              <div className="text-xs font-bold text-emerald-600 dark:text-[#52b788] mt-1.5 group-hover:underline">View gallery →</div>
            </button>
            <div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-manrope tabular-nums">3</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">Events</div>
              <div className="text-xs text-slate-500 dark:text-zinc-500">Hosted</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white font-manrope tabular-nums">5+</div>
              <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">Topics</div>
              <div className="text-xs text-slate-500 dark:text-zinc-500">Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Timer & Location Section (Balanced Cards) */}
      <div className="relative z-10 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-6 items-stretch">
          {/* Live Timer Left */}
          <div className="md:col-span-7 p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-zinc-900/60 backdrop-blur-lg rounded-2xl shadow-xl flex flex-col justify-between">
            <LiveEventTimer isActive={true} eventStartDateTime="2025-07-10T11:00:00" eventDurationHours={1.5} totalEventDays={2} />
          </div>

          {/* Location Right - Filled & Balanced */}
          <div className="md:col-span-5 p-6 sm:p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-[#40916c]/20 border border-emerald-200 dark:border-[#40916c]/40 text-emerald-700 dark:text-[#52b788] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope">R.H. Stafford Library</h3>
                  <p className="text-xs font-semibold text-emerald-700 dark:text-[#52b788]">Official Workshop Venue</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 dark:text-zinc-400">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800">
                  <p className="font-semibold text-slate-900 dark:text-zinc-200 mb-0.5">Address</p>
                  <p>8595 Central Park Pl, Woodbury, MN 55125</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-zinc-200">Amenities Included</p>
                  <div className="grid grid-cols-2 gap-2 pt-1 text-[11px]">
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Free Admission</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> All Supplies</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Free Snacks</span>
                    <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Free Parking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500 flex items-center gap-1">
                <Navigation className="w-3.5 h-3.5" /> Woodbury, MN
              </span>
              <a 
                href="https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-[#52b788] hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
              >
                Get Directions <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Workshop Topics Bento Grid */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-white/5 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Curriculum
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-3">
              Explore Workshop <span className="text-emerald-700 dark:text-[#52b788]">Topics</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mx-auto font-medium">
              Click any topic card below to read our detailed personalized guide for each module.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {topics.map((t, i) => {
              const Icon = t.icon;
              return (
                <div 
                  key={i} 
                  onClick={() => navigate(t.path)} 
                  className="group relative overflow-hidden p-6 sm:p-7 border border-slate-200 dark:border-white/10 bg-white dark:bg-black hover:border-emerald-500/50 dark:hover:border-white/30 hover:shadow-xl transition-all duration-300 rounded-2xl cursor-pointer flex flex-col justify-between"
                >
                  <div className="relative z-10">
                    <div className={`mb-4 inline-flex p-3 rounded-xl border ${t.bg} ${t.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope mb-2 group-hover:text-emerald-700 dark:group-hover:text-[#52b788] transition-colors">{t.title}</h3>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 mb-6 leading-relaxed">{t.desc}</p>
                  </div>

                  {/* Always-Visible Click Text for Mobile & Desktop */}
                  <div className="relative z-10 pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 dark:text-[#52b788] group-hover:underline">
                      Click here: Learn topic
                    </span>
                    <ArrowRight className="w-4 h-4 text-emerald-700 dark:text-[#52b788] group-hover:translate-x-1 transition-transform" />
                  </div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-tr from-emerald-500/5 to-transparent" />
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
