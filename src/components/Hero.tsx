import { memo, useCallback } from 'react';
import { ArrowRight, Heart, Camera, MapPin, TrendingUp, Wallet, Store, Coins, Navigation, Sparkles, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LiveEventTimer from "@/components/LiveEventTimer";
import AudiobookPromo from "@/components/AudiobookPromo";

const Hero = memo(() => {
  const navigate = useNavigate();

  const handleSignup = useCallback(() => {
    window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank');
  }, []);

  const topics = [
    { title: "Stock Markets", desc: "What a stock is, how prices move, and how people actually trade.", icon: TrendingUp, path: "/stock-markets", color: "text-blue-500 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40" },
    { title: "Budgeting", desc: "The 50/30/20 rule, tracking what you spend, and not going broke.", icon: Wallet, path: "/budgeting", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40" },
    { title: "Online Business", desc: "Dropshipping, TikTok Shop, and selling stuff without a storefront.", icon: Store, path: "/online-business", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40" },
    { title: "Crypto + NFTs", desc: "What crypto and NFTs actually are, minus the hype.", icon: Coins, path: "/crypto-nfts", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/40" },
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
          <div className="flex flex-col items-center gap-3 mb-6">
            <a
              href="#press"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/80 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-white transition-colors text-xs font-semibold group"
            >
              <span className="font-bold uppercase tracking-wider text-[10px] px-2 py-0.5 rounded-full bg-emerald-700 dark:bg-[#2d6a4f] text-white">Press</span>
              <span>Featured in Woodbury News Net</span>
              <ArrowRight className="w-3 h-3 shrink-0 group-hover:translate-x-0.5 transition-transform opacity-70" />
            </a>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight font-manrope leading-[1.05] mb-6 text-slate-900 dark:text-white">
            Level up your money skills.
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            A free, student-led initiative teaching real-world investing, budgeting, and compound growth. What schools skip, we deliver.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleSignup}
              className="px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 dark:bg-[#2d6a4f] dark:hover:bg-[#1b4332] text-white font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>Reserve Free Spot</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <button
              onClick={() => navigate('/gallery')}
              className="px-7 py-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 font-bold hover:text-emerald-700 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Camera className="w-4 h-4 text-emerald-600 dark:text-[#52b788]" />
              <span>Workshop Gallery</span>
            </button>
          </div>
        </div>

        {/* Stats Proof Strip */}
        <div className="w-full mt-16 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-zinc-950/30 py-8">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <button onClick={() => navigate('/gallery#india')} className="group text-center cursor-pointer">
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-manrope tabular-nums">2,000+</div>
              <div className="text-xs font-bold text-slate-700 dark:text-zinc-300 mt-1">Reached Internationally</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-0.5">Partner school workshops</div>
            </button>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-manrope tabular-nums">300+</div>
              <div className="text-xs font-bold text-slate-700 dark:text-zinc-300 mt-1">Students Locally</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-0.5">Minnesota community sessions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-manrope tabular-nums">3</div>
              <div className="text-xs font-bold text-slate-700 dark:text-zinc-300 mt-1">Years Teaching</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-0.5">Student-led financial education</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white font-manrope tabular-nums">8</div>
              <div className="text-xs font-bold text-slate-700 dark:text-zinc-300 mt-1">Audio Modules</div>
              <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-0.5">Free audio course + SAT test</div>
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
                  <p className="text-xs font-semibold text-emerald-700 dark:text-[#52b788]">Where we meet</p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600 dark:text-zinc-400">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800">
                  <p className="font-semibold text-slate-900 dark:text-zinc-200 mb-0.5">Address</p>
                  <p>8595 Central Park Pl, Woodbury, MN 55125</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-1">
                  <p className="font-semibold text-slate-900 dark:text-zinc-200">What's included</p>
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

      <AudiobookPromo />

      {/* Workshop Topics Bento Grid */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-white/5 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> What we cover
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-3">
              What we <span className="text-emerald-700 dark:text-[#52b788]">cover</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl mx-auto font-medium">
              Pick a topic and we'll walk you through it.
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
                      Read the guide
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
