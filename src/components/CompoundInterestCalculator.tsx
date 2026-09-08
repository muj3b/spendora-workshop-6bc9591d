import { useState, useMemo } from "react";
import { TrendingUp, Sparkles, ArrowRight, DollarSign, Clock, CheckCircle2 } from "lucide-react";

export const CompoundInterestCalculator = () => {
  const [startAge, setStartAge] = useState<number>(16);
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(100);
  const [returnRate, setReturnRate] = useState<number>(9);
  const retirementAge = 65;

  // Preset buttons for quick high school scenarios
  const presets = [
    { label: "$25/mo", amount: 25, desc: "Spare change & snacks" },
    { label: "$50/mo", amount: 50, desc: "Side hustle earnings" },
    { label: "$100/mo", amount: 100, desc: "Recommended starter" },
    { label: "$250/mo", amount: 250, desc: "Summer job paycheck" },
  ];

  // Calculation for user's selected parameters
  const calculation = useMemo(() => {
    const years = Math.max(1, retirementAge - startAge);
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;

    const futureValue =
      monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const totalContributed = monthlyDeposit * months;
    const totalGrowth = Math.max(0, futureValue - totalContributed);

    return {
      years,
      futureValue: Math.round(futureValue),
      totalContributed: Math.round(totalContributed),
      totalGrowth: Math.round(totalGrowth),
      growthMultiple: (futureValue / Math.max(1, totalContributed)).toFixed(1),
    };
  }, [startAge, monthlyDeposit, returnRate]);

  // Comparison calculation: What if you waited until age 26?
  const comparisonAge26 = useMemo(() => {
    const years = Math.max(1, retirementAge - 26);
    const months = years * 12;
    const monthlyRate = returnRate / 100 / 12;

    const futureValue =
      monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const totalContributed = monthlyDeposit * months;
    const totalGrowth = Math.max(0, futureValue - totalContributed);

    return {
      futureValue: Math.round(futureValue),
      totalContributed: Math.round(totalContributed),
      totalGrowth: Math.round(totalGrowth),
    };
  }, [monthlyDeposit, returnRate]);

  const earlyAdvantage = Math.max(
    0,
    calculation.futureValue - comparisonAge26.futureValue
  );

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const contributedPercent = Math.round(
    (calculation.totalContributed / Math.max(1, calculation.futureValue)) * 100
  );
  const growthPercent = 100 - contributedPercent;

  return (
    <section className="relative z-10 py-20 px-6" aria-labelledby="calculator-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" />
            Interactive Wealth Simulator
          </div>
          <h2
            id="calculator-heading"
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4"
          >
            The Power of <span className="text-emerald-700 dark:text-[#52b788]">Starting Early</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Slide the numbers below to see why starting at 16 is the biggest financial advantage you will ever have.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-3xl shadow-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Controls (Sliders & Presets) */}
            <div className="lg:col-span-6 space-y-7">
              {/* Starting Age Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-700 dark:text-[#52b788]" />
                    <span>Your Starting Age:</span>
                  </label>
                  <span className="text-lg font-black text-emerald-700 dark:text-[#52b788] tabular-nums font-manrope">
                    Age {startAge}
                  </span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="35"
                  step="1"
                  value={startAge}
                  onChange={(e) => setStartAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-[#52b788]"
                />
                <div className="flex justify-between text-[11px] font-semibold text-slate-400 dark:text-zinc-500 mt-1">
                  <span>14 (High School)</span>
                  <span>25 (Post College)</span>
                  <span>35</span>
                </div>
              </div>

              {/* Monthly Deposit Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-emerald-700 dark:text-[#52b788]" />
                    <span>Monthly Investment:</span>
                  </label>
                  <span className="text-lg font-black text-emerald-700 dark:text-[#52b788] tabular-nums font-manrope">
                    {formatCurrency(monthlyDeposit)} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="10"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-emerald-600 dark:accent-[#52b788]"
                />
                
                {/* Preset Quick Buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3">
                  {presets.map((preset) => (
                    <button
                      key={preset.amount}
                      onClick={() => setMonthlyDeposit(preset.amount)}
                      className={`p-2 rounded-xl text-xs font-bold transition-all text-center cursor-pointer border ${
                        monthlyDeposit === preset.amount
                          ? "bg-emerald-700 text-white border-emerald-700 dark:bg-[#2d6a4f] dark:border-[#2d6a4f] shadow-sm"
                          : "bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-emerald-500/40"
                      }`}
                    >
                      <div>{preset.label}</div>
                      <div className="text-[10px] font-normal opacity-80 truncate">{preset.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Annual Growth Rate */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-700 dark:text-[#52b788]" />
                    <span>Estimated Annual Return:</span>
                  </label>
                  <span className="text-lg font-black text-emerald-700 dark:text-[#52b788] tabular-nums font-manrope">
                    {returnRate}% / yr
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {[7, 9, 11].map((rate) => (
                    <button
                      key={rate}
                      onClick={() => setReturnRate(rate)}
                      className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        returnRate === rate
                          ? "bg-emerald-700 text-white border-emerald-700 dark:bg-[#2d6a4f] dark:border-[#2d6a4f]"
                          : "bg-slate-50 dark:bg-zinc-900 border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300"
                      }`}
                    >
                      {rate}% {rate === 9 && "(S&P 500 Avg)"}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500 dark:text-zinc-500 mt-2">
                  Historical average return of the S&P 500 index over the last 50 years with dividends reinvested is about 9% to 10%.
                </p>
              </div>

              {/* Callout Info Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-700 dark:text-[#52b788] shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-900 dark:text-emerald-200/90 leading-relaxed font-medium">
                  <strong>Notice the ratio:</strong> You only put in {formatCurrency(calculation.totalContributed)}, but compounding interest generated {formatCurrency(calculation.totalGrowth)} for you. That is money working for you while you sleep.
                </p>
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              {/* Grand Total Value Box */}
              <div className="p-7 rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-[#122e23] dark:from-[#24533e] dark:via-[#193d2e] dark:to-[#0f241c] text-white shadow-xl relative overflow-hidden">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-200/80 mb-1">
                  Estimated Total at Age {retirementAge} ({calculation.years} Years of Compounding)
                </div>
                <div className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-white my-3 tabular-nums">
                  {formatCurrency(calculation.futureValue)}
                </div>

                {/* Progress bar breakdown */}
                <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-emerald-200/90">
                      Your Deposits: {formatCurrency(calculation.totalContributed)} ({contributedPercent}%)
                    </span>
                    <span className="text-emerald-300 font-bold">
                      Interest Growth: {formatCurrency(calculation.totalGrowth)} ({growthPercent}%)
                    </span>
                  </div>
                  <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden flex">
                    <div
                      style={{ width: `${Math.max(5, contributedPercent)}%` }}
                      className="bg-emerald-400 h-full"
                      title="Your Money"
                    />
                    <div
                      style={{ width: `${Math.min(95, growthPercent)}%` }}
                      className="bg-emerald-200 h-full"
                      title="Compound Growth"
                    />
                  </div>
                </div>
              </div>

              {/* Head-to-Head: Start at 16 vs Wait until 26 */}
              <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-zinc-950 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                    The 10-Year Head Start Comparison
                  </span>
                  <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    +{formatCurrency(earlyAdvantage)} Extra
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-emerald-300/60 dark:border-emerald-700/60 shadow-xs">
                    <div className="text-[11px] font-bold text-emerald-700 dark:text-[#52b788]">
                      Start at Age 16
                    </div>
                    <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white font-manrope tabular-nums mt-0.5">
                      {formatCurrency(calculation.futureValue)}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-zinc-500 mt-1">
                      {calculation.years} years of growth
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs opacity-75">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-zinc-400">
                      Wait until Age 26
                    </div>
                    <div className="text-lg sm:text-xl font-black text-slate-700 dark:text-zinc-300 font-manrope tabular-nums mt-0.5">
                      {formatCurrency(comparisonAge26.futureValue)}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-zinc-500 mt-1">
                      39 years of growth
                    </div>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
                  By starting 10 years earlier, you gain an extra <strong>{formatCurrency(earlyAdvantage)}</strong> while only depositing <strong>{formatCurrency(monthlyDeposit * 120)}</strong> more out of pocket. Time is your greatest asset.
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => window.open("https://forms.gle/JWCVyGcfN5UKiwqHA", "_blank")}
                className="shiny-cta group shadow-xl hover:scale-105 transition-all text-center w-full"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-bold text-sm">
                  Learn How to Open an Account in Our Free Workshop
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompoundInterestCalculator;
