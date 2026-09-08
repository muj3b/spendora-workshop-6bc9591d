import { useState } from "react";
import { TrendingUp, PieChart, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

export const StockMarketSimulator = () => {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(75);

  const calculateMilestone = (years: number) => {
    const monthlyRate = 0.095 / 12; // 9.5% average annual return
    const months = years * 12;
    const futureValue =
      monthlyContribution *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const totalDeposited = monthlyContribution * months;
    return {
      total: Math.round(futureValue),
      deposited: Math.round(totalDeposited),
      gain: Math.round(futureValue - totalDeposited),
    };
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const terms = [
    {
      title: "What is a Share?",
      desc: "A share is a slice of legal ownership in a corporation. If Apple has billions of shares and you buy 5, you legally own a piece of Apple's future profits.",
    },
    {
      title: "What is an Index Fund (S&P 500)?",
      desc: "Instead of trying to guess which single company will win, an index fund buys all 500 biggest American companies at once. If one drops, the others balance it out.",
    },
    {
      title: "What is a Custodial Account?",
      desc: "Because you are under 18, a parent or guardian co-opens the account (UTMA/UGMA or Custodial Roth IRA). When you turn 18, 100% of the funds transfer to your name.",
    },
    {
      title: "Why Starting Early Beats Timing the Market",
      desc: "Historical data shows that time in the market always beats trying to guess the tops and bottoms. Consistent monthly buying through high school is the highest percentage strategy.",
    },
  ];

  const m5 = calculateMilestone(5);
  const m10 = calculateMilestone(10);
  const m20 = calculateMilestone(20);
  const m30 = calculateMilestone(30);

  return (
    <div className="my-10 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-3xl p-6 sm:p-8 shadow-xl space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100 dark:border-white/5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 dark:bg-white/5 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">
            <TrendingUp className="w-3.5 h-3.5" /> Interactive Growth Model
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-manrope">
            Index Fund Compounding Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium mt-0.5">
            See what happens if you set aside even pocket cash into an S&P 500 index fund starting right now.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">Monthly Contribution</div>
          <div className="text-2xl font-black text-emerald-700 dark:text-[#52b788] tabular-nums font-manrope">
            {formatCurrency(monthlyContribution)} / mo
          </div>
        </div>
      </div>

      {/* Slider */}
      <div className="space-y-3">
        <input
          type="range"
          min="25"
          max="500"
          step="25"
          value={monthlyContribution}
          onChange={(e) => setMonthlyContribution(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-[#52b788]"
        />
        <div className="flex justify-between text-[11px] font-semibold text-slate-400 dark:text-zinc-500">
          <span>$25/mo</span>
          <span>$150/mo</span>
          <span>$300/mo</span>
          <span>$500/mo</span>
        </div>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
          <div className="text-xs font-bold text-slate-500 dark:text-zinc-400">In 5 Years (Age ~21)</div>
          <div className="text-xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mt-1">
            {formatCurrency(m5.total)}
          </div>
          <div className="text-[10px] text-emerald-700 dark:text-[#52b788] font-semibold mt-1">
            +{formatCurrency(m5.gain)} profit
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
          <div className="text-xs font-bold text-slate-500 dark:text-zinc-400">In 10 Years (Age ~26)</div>
          <div className="text-xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mt-1">
            {formatCurrency(m10.total)}
          </div>
          <div className="text-[10px] text-emerald-700 dark:text-[#52b788] font-semibold mt-1">
            +{formatCurrency(m10.gain)} profit
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200 dark:border-zinc-800">
          <div className="text-xs font-bold text-slate-500 dark:text-zinc-400">In 20 Years (Age ~36)</div>
          <div className="text-xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mt-1">
            {formatCurrency(m20.total)}
          </div>
          <div className="text-[10px] text-emerald-700 dark:text-[#52b788] font-semibold mt-1">
            +{formatCurrency(m20.gain)} profit
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800">
          <div className="text-xs font-bold text-emerald-800 dark:text-emerald-300">In 30 Years (Age ~46)</div>
          <div className="text-xl font-black text-emerald-900 dark:text-emerald-100 font-manrope tabular-nums mt-1">
            {formatCurrency(m30.total)}
          </div>
          <div className="text-[10px] text-emerald-700 dark:text-[#52b788] font-extrabold mt-1">
            +{formatCurrency(m30.gain)} profit
          </div>
        </div>
      </div>

      {/* Key Concepts Cards */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/5">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
          Core Investing Rules Taught in Our Workshops
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {terms.map((t, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-zinc-900/40 space-y-1"
            >
              <div className="text-xs font-bold text-slate-900 dark:text-white font-manrope">
                {t.title}
              </div>
              <p className="text-[11px] text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockMarketSimulator;
