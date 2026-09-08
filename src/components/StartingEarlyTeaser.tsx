import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

export const StartingEarlyTeaser = () => {
  return (
    <section className="relative z-10 py-20 px-6" aria-labelledby="starting-early-heading">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" />
          Free 60-Second Wealth Check
        </div>

        {/* Title */}
        <h2
          id="starting-early-heading"
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4"
        >
          The Power of <span className="text-emerald-700 dark:text-[#52b788]">Starting Early</span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          Most people assume you need thousands of dollars to invest. In reality, starting at 16 with spare change gives you a massive advantage that money alone cannot buy.
        </p>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-[#52b788]/15 text-emerald-700 dark:text-[#52b788] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white font-manrope text-base mb-1">
              Time is Your Superpower
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
              Every year you wait in your teens and 20s can cost hundreds of thousands in compound gains.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-[#52b788]/15 text-emerald-700 dark:text-[#52b788] flex items-center justify-center mb-3">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white font-manrope text-base mb-1">
              Start with Spare Change
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
              Even $25 to $50 a month from a weekend side gig builds the financial engine for life.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-[#52b788]/15 text-emerald-700 dark:text-[#52b788] flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white font-manrope text-base mb-1">
              Instant Custom Result
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
              Answer 3 simple questions to see your exact projected wealth number at retirement.
            </p>
          </div>

        </div>

        {/* Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/starting-early"
            className="shiny-cta group shadow-xl hover:scale-105 transition-all w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full"
          >
            <span className="relative z-10 flex items-center gap-2 text-white font-black text-base">
              Calculate Your Wealth Potential <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

        <p className="text-xs text-slate-400 dark:text-zinc-500 mt-4">
          Takes 30 seconds • No account or login required • 100% free
        </p>

      </div>
    </section>
  );
};

export default StartingEarlyTeaser;
