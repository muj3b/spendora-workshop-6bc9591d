import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Clock, DollarSign } from "lucide-react";

export const StartingEarlyTeaser = () => {
  return (
    <section className="relative z-10 py-20 px-6" aria-labelledby="starting-young-heading">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title explaining what it is */}
        <h2
          id="starting-young-heading"
          className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4"
        >
          How compound interest works when you <span className="text-emerald-700 dark:text-[#52b788]">start young</span>
        </h2>

        {/* Clear human explanation */}
        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium mb-10 leading-relaxed">
          Most people assume you need thousands of dollars to invest. In reality, starting young with spare change gives you a massive advantage that money alone cannot buy. Time lets compound growth do almost all the heavy lifting for you.
        </p>

        {/* 3 Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
          
          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-[#52b788]/15 text-emerald-700 dark:text-[#52b788] flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white font-manrope text-base mb-1">
              Time Does the Heavy Lifting
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
              Decades of compound interest turn small monthly habits into real wealth over time.
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
              Even $25 to $50 a month from a part-time job or allowance gets your money growing.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xs">
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-[#52b788]/15 text-emerald-700 dark:text-[#52b788] flex items-center justify-center mb-3">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="font-extrabold text-slate-900 dark:text-white font-manrope text-base mb-1">
              See the Numbers
            </h3>
            <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium leading-relaxed">
              Answer 3 simple questions to see what your money could grow into over the years.
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
              See How Your Money Grows <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default StartingEarlyTeaser;
