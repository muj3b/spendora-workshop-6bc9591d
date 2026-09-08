import { useState } from "react";
import { Wallet, PieChart, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";

export const BudgetCalculator = () => {
  const [monthlyIncome, setMonthlyIncome] = useState<number>(400);

  const presets = [
    { label: "Babysitting / Chores", amount: 150 },
    { label: "Part-Time Job", amount: 400 },
    { label: "Retail / Barista", amount: 750 },
    { label: "Summer Hustle", amount: 1400 },
  ];

  const needs = Math.round(monthlyIncome * 0.5);
  const wants = Math.round(monthlyIncome * 0.3);
  const savings = Math.round(monthlyIncome * 0.2);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="my-10 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-3xl p-6 sm:p-8 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-slate-100 dark:border-white/5">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-white/5 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-2">
            <PieChart className="w-3.5 h-3.5" /> Interactive Tool
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-manrope">
            50/30/20 Teen Budget Splitter
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium mt-0.5">
            Enter your monthly earnings to see how to split your cash so you never wonder where it went.
          </p>
        </div>
        <div className="text-right">
          <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">Monthly Cash Flow</div>
          <div className="text-2xl font-black text-emerald-700 dark:text-[#52b788] tabular-nums font-manrope">
            {formatCurrency(monthlyIncome)}
          </div>
        </div>
      </div>

      {/* Slider & Presets */}
      <div className="space-y-4 mb-8">
        <input
          type="range"
          min="50"
          max="2500"
          step="25"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-[#52b788]"
        />

        <div className="flex flex-wrap gap-2">
          {presets.map((preset) => (
            <button
              key={preset.amount}
              onClick={() => setMonthlyIncome(preset.amount)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                monthlyIncome === preset.amount
                  ? "bg-emerald-700 text-white border-emerald-700 dark:bg-[#2d6a4f] dark:border-[#2d6a4f]"
                  : "bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300"
              }`}
            >
              {preset.label} ({formatCurrency(preset.amount)})
            </button>
          ))}
        </div>
      </div>

      {/* Three Buckets Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 50% Needs */}
        <div className="p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">
              <span>50% Needs</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mb-2">
              {formatCurrency(needs)}
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-300 font-medium leading-relaxed">
              Things you actually need to function: gas for your car, phone bill, essential food, school fees.
            </p>
          </div>
          <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 mt-4 pt-3 border-t border-blue-200/60 dark:border-blue-800/30">
            Pay these first every paycheck.
          </div>
        </div>

        {/* 30% Wants */}
        <div className="p-5 rounded-2xl bg-purple-50/70 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-purple-700 dark:text-purple-400 mb-1">
              <span>30% Fun & Wants</span>
              <Sparkles className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mb-2">
              {formatCurrency(wants)}
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-300 font-medium leading-relaxed">
              Guilt-free spending: going out with friends, sneaker drops, fast food, concerts, games.
            </p>
          </div>
          <div className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 mt-4 pt-3 border-t border-purple-200/60 dark:border-purple-800/30">
            You enjoy it on purpose, not by accident.
          </div>
        </div>

        {/* 20% Savings & Growth */}
        <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-[#52b788] mb-1">
              <span>20% Wealth & Savings</span>
              <Wallet className="w-4 h-4" />
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mb-2">
              {formatCurrency(savings)}
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-300 font-medium leading-relaxed">
              Your future freedom: Roth IRA, emergency fund, stock index funds. Compounding starts here.
            </p>
          </div>
          <div className="text-[11px] font-semibold text-emerald-700 dark:text-[#52b788] mt-4 pt-3 border-t border-emerald-200/60 dark:border-emerald-800/30">
            In 1 year: {formatCurrency(savings * 12)} saved!
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetCalculator;
