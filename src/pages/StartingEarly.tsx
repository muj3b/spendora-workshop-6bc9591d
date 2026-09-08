import { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  RotateCcw, 
  Calendar, 
  Headphones
} from "lucide-react";

export const StartingEarly = () => {
  const navigate = useNavigate();

  // Questionnaire state
  const [step, setStep] = useState<number>(1);
  const [currentAge, setCurrentAge] = useState<number>(16);
  const [customAgeInput, setCustomAgeInput] = useState<string>("");
  const [monthlyDeposit, setMonthlyDeposit] = useState<number>(100);
  const [customDepositInput, setCustomDepositInput] = useState<string>("");
  const [growthRate, setGrowthRate] = useState<number>(9);
  const [targetAge, setTargetAge] = useState<number>(65);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Power of Starting Early | Spendora";
  }, [step]);

  // Options for Question 1: Current Age
  const ageOptions = [
    { value: 14, label: "14 to 15", desc: "Freshman or Early Teen" },
    { value: 16, label: "16 to 17", desc: "High School Sophomore / Junior (Most common)" },
    { value: 18, label: "18 to 19", desc: "High School Senior or College Frosh" },
    { value: 21, label: "20 to 24", desc: "College Student or Young Adult" },
  ];

  // Options for Question 2: Monthly Stash
  const depositOptions = [
    { value: 25, label: "$25 / month", desc: "About $6 a week. Skipping 2 boba drinks or snacks." },
    { value: 50, label: "$50 / month", desc: "Light side-hustle, chores, or small allowance." },
    { value: 100, label: "$100 / month", desc: "Weekend babysitting, lawn mowing, or part-time job." },
    { value: 250, label: "$250 / month", desc: "Summer job paycheck or consistent part-time hours." },
  ];

  // Options for Question 3: Investing Style
  const rateOptions = [
    { 
      value: 7, 
      label: "Steady & Conservative (~7% / yr)", 
      desc: "Broad market index funds with lower risk and dividend focus." 
    },
    { 
      value: 9, 
      label: "Balanced Market (~9% / yr)", 
      desc: "Historical average of the US S&P 500 index over the last 50 years." 
    },
    { 
      value: 11, 
      label: "Aggressive Growth (~11% / yr)", 
      desc: "Diversified index funds with higher tech and growth weighting." 
    },
  ];

  // Compound Interest Calculation
  const calculation = useMemo(() => {
    const years = Math.max(1, targetAge - currentAge);
    const months = years * 12;
    const monthlyRate = growthRate / 100 / 12;

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
  }, [currentAge, monthlyDeposit, growthRate, targetAge]);

  // Comparison: What if the student waited until age 26?
  const comparisonWait26 = useMemo(() => {
    const years = Math.max(1, targetAge - 26);
    const months = years * 12;
    const monthlyRate = growthRate / 100 / 12;

    const futureValue =
      monthlyDeposit * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate);
    const totalContributed = monthlyDeposit * months;
    const totalGrowth = Math.max(0, futureValue - totalContributed);

    return {
      futureValue: Math.round(futureValue),
      totalContributed: Math.round(totalContributed),
      totalGrowth: Math.round(totalGrowth),
    };
  }, [monthlyDeposit, growthRate, targetAge]);

  const costOfWaiting = Math.max(
    0,
    calculation.futureValue - comparisonWait26.futureValue
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
  const growthPercent = Math.max(0, 100 - contributedPercent);

  const handleNextStep = () => {
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleReset = () => {
    setCurrentAge(16);
    setMonthlyDeposit(100);
    setGrowthRate(9);
    setTargetAge(65);
    setStep(1);
  };

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-20 px-4 sm:px-6 bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          {step === 4 && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Retake Questionnaire
            </button>
          )}
        </div>

        {/* Header Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" />
            Quick 60-Second Wealth Check
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">
            The Power of <span className="text-emerald-700 dark:text-[#52b788]">Starting Early</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl mx-auto mt-2 font-medium">
            Answer 3 fast questions to see how much wealth you could build by retirement just by starting now.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 dark:text-zinc-400 mb-2">
            <span>{step === 4 ? "Your Results Ready" : `Question ${step} of 3`}</span>
            <span>{step === 1 ? "33%" : step === 2 ? "66%" : step === 3 ? "100%" : "Complete"}</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-emerald-600 dark:bg-[#52b788] transition-all duration-500 ease-out"
              style={{ width: `${step === 1 ? 33 : step === 2 ? 66 : 100}%` }}
            />
          </div>
        </div>

        {/* MAIN QUESTIONNAIRE CONTAINER */}
        <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 rounded-3xl p-6 sm:p-10 shadow-xl">
          
          {/* ==================================================== */}
          {/* STEP 1: CURRENT AGE */}
          {/* ==================================================== */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Step 1
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-manrope mt-1">
                  How old are you right now?
                </h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
                  Your age is your greatest asset. Time turns small deposits into serious wealth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ageOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setCurrentAge(opt.value);
                      setCustomAgeInput("");
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      currentAge === opt.value && !customAgeInput
                        ? "border-emerald-600 bg-emerald-50/60 dark:border-[#52b788] dark:bg-[#52b788]/10 ring-2 ring-emerald-500/20"
                        : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-lg text-slate-900 dark:text-white font-manrope">
                        {opt.label}
                      </span>
                      {currentAge === opt.value && !customAgeInput && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-[#52b788]" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                      {opt.desc}
                    </span>
                  </button>
                ))}
              </div>

              {/* Or enter custom age */}
              <div className="pt-2 border-t border-slate-100 dark:border-zinc-900 flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 whitespace-nowrap">
                  Exact age:
                </span>
                <input
                  type="number"
                  min="10"
                  max="50"
                  value={customAgeInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    setCustomAgeInput(val);
                    const parsed = parseInt(val, 10);
                    if (!isNaN(parsed) && parsed >= 10 && parsed <= 50) {
                      setCurrentAge(parsed);
                    }
                  }}
                  placeholder="e.g. 15"
                  className="w-24 px-3 py-1.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <span className="text-xs text-slate-400 dark:text-zinc-500">
                  (Currently selected: <strong className="text-slate-900 dark:text-white">{currentAge} years old</strong>)
                </span>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="shiny-cta px-7 py-3 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                >
                  Continue to Question 2 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 2: MONTHLY DEPOSIT */}
          {/* ==================================================== */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Step 2
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-manrope mt-1">
                  How much could you stash away each month?
                </h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
                  You do not need thousands of dollars. Even $25 or $50 a month starts the compounding engine.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {depositOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      setMonthlyDeposit(opt.value);
                      setCustomDepositInput("");
                    }}
                    className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      monthlyDeposit === opt.value && !customDepositInput
                        ? "border-emerald-600 bg-emerald-50/60 dark:border-[#52b788] dark:bg-[#52b788]/10 ring-2 ring-emerald-500/20"
                        : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-extrabold text-xl text-slate-900 dark:text-white font-manrope">
                        {opt.label}
                      </span>
                      {monthlyDeposit === opt.value && !customDepositInput && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-[#52b788]" />
                      )}
                    </div>
                    <span className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                      {opt.desc}
                    </span>
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div className="pt-2 border-t border-slate-100 dark:border-zinc-900 flex items-center gap-3">
                <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 whitespace-nowrap">
                  Custom amount:
                </span>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-xs font-bold text-slate-400">$</span>
                  <input
                    type="number"
                    min="5"
                    max="5000"
                    step="5"
                    value={customDepositInput}
                    onChange={(e) => {
                      const val = e.target.value;
                      setCustomDepositInput(val);
                      const parsed = parseInt(val, 10);
                      if (!isNaN(parsed) && parsed > 0) {
                        setMonthlyDeposit(parsed);
                      }
                    }}
                    placeholder="75"
                    className="w-28 pl-6 pr-3 py-1.5 rounded-xl border border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-900 text-sm font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <span className="text-xs text-slate-400 dark:text-zinc-500">
                  (Currently selected: <strong className="text-slate-900 dark:text-white">${monthlyDeposit}/mo</strong>)
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-zinc-800 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="shiny-cta px-7 py-3 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                >
                  Continue to Question 3 <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 3: INVESTING STYLE / RETURN RATE */}
          {/* ==================================================== */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                  Step 3
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-manrope mt-1">
                  How would you like to invest?
                </h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
                  We teach students how broad index funds like the S&P 500 work. Pick an annual growth assumption below.
                </p>
              </div>

              <div className="space-y-3">
                {rateOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setGrowthRate(opt.value)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 ${
                      growthRate === opt.value
                        ? "border-emerald-600 bg-emerald-50/60 dark:border-[#52b788] dark:bg-[#52b788]/10 ring-2 ring-emerald-500/20"
                        : "border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-slate-300 dark:hover:border-zinc-700"
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white font-manrope">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                        {opt.desc}
                      </div>
                    </div>
                    {growthRate === opt.value ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-[#52b788] shrink-0" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-slate-300 dark:border-zinc-700 shrink-0" />
                    )}
                  </button>
                ))}
              </div>

              {/* Target Retirement Age Selector */}
              <div className="pt-3 border-t border-slate-100 dark:border-zinc-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <span className="font-bold text-slate-600 dark:text-zinc-400">
                  Target age to see your nest egg:
                </span>
                <div className="flex items-center gap-2">
                  {[55, 60, 65].map((age) => (
                    <button
                      key={age}
                      type="button"
                      onClick={() => setTargetAge(age)}
                      className={`px-3 py-1 rounded-lg font-bold border transition-colors cursor-pointer ${
                        targetAge === age
                          ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent"
                          : "border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:border-slate-400"
                      }`}
                    >
                      Age {age}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-full border border-slate-200 dark:border-zinc-800 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="shiny-cta px-8 py-3.5 rounded-full text-white font-black text-sm sm:text-base inline-flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer shadow-xl"
                >
                  See My Projected Wealth <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ==================================================== */}
          {/* STEP 4: RESULTS DASHBOARD (THE PAYOFF!) */}
          {/* ==================================================== */}
          {step === 4 && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500">
              
              {/* Top Result Card */}
              <div className="text-center py-6 px-4 rounded-2xl bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent border border-emerald-500/20">
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 mb-2">
                  Projected Wealth at Age {targetAge} (Starting at {currentAge})
                </div>
                <div className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight font-manrope">
                  {formatCurrency(calculation.futureValue)}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-2 font-medium">
                  By putting away just <strong className="text-slate-900 dark:text-white">${monthlyDeposit}/month</strong> at an average annual return of <strong className="text-slate-900 dark:text-white">{growthRate}%</strong>.
                </p>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Out of Pocket */}
                <div className="p-4 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900/60">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-zinc-400 mb-1">
                    <DollarSign className="w-4 h-4 text-slate-400" />
                    What You Put In
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-manrope text-slate-900 dark:text-white">
                    {formatCurrency(calculation.totalContributed)}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-zinc-500 mt-1">
                    Only {contributedPercent}% of your total wealth
                  </div>
                </div>

                {/* Free Compound Growth */}
                <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-[#52b788]/10 sm:col-span-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-[#52b788]" />
                    Free Compound Growth
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-manrope text-emerald-700 dark:text-[#52b788]">
                    {formatCurrency(calculation.totalGrowth)}
                  </div>
                  <div className="text-[11px] text-emerald-800 dark:text-emerald-400 mt-1 font-medium">
                    {growthPercent}% of your wealth was generated automatically by starting early!
                  </div>
                </div>
              </div>

              {/* Visual Proportion Bar */}
              <div>
                <div className="flex justify-between text-xs font-bold mb-1.5">
                  <span className="text-slate-600 dark:text-zinc-400">
                    Your Money: {contributedPercent}%
                  </span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">
                    Compound Growth: {growthPercent}%
                  </span>
                </div>
                <div className="h-3 w-full bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden flex">
                  <div
                    className="bg-slate-400 dark:bg-zinc-600 h-full"
                    style={{ width: `${contributedPercent}%` }}
                    title="What you contributed"
                  />
                  <div
                    className="bg-emerald-600 dark:bg-[#52b788] h-full"
                    style={{ width: `${growthPercent}%` }}
                    title="Compound interest generated"
                  />
                </div>
              </div>

              {/* The "Cost of Waiting" Eye-Opener */}
              {currentAge < 26 && (
                <div className="p-5 rounded-2xl border border-amber-300 dark:border-amber-500/20 bg-amber-50/70 dark:bg-amber-500/10 text-slate-800 dark:text-zinc-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-800 dark:text-amber-400 uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4" />
                    The Cost of Waiting Until Age 26
                  </div>
                  <p className="text-sm font-medium leading-relaxed">
                    If someone puts off investing until age 26 (just 10 years from high school), they would only have{" "}
                    <strong>{formatCurrency(comparisonWait26.futureValue)}</strong> at retirement.
                  </p>
                  <p className="text-sm font-bold text-amber-900 dark:text-amber-300 mt-2">
                    Starting now gives you an extra {formatCurrency(costOfWaiting)} in compound growth for the exact same monthly effort.
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-300 dark:border-zinc-700 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Try Different Answers
                </button>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <Link
                    to="/audiobook"
                    className="w-full sm:w-auto px-5 py-3 rounded-full border border-slate-300 dark:border-zinc-700 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors inline-flex items-center justify-center gap-2 cursor-pointer text-center"
                  >
                    <Headphones className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    Free Audio Course
                  </Link>

                  <button
                    type="button"
                    onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
                    className="shiny-cta w-full sm:w-auto px-6 py-3 rounded-full text-white font-bold text-xs inline-flex items-center justify-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Reserve Spot at Workshop
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Informational reassurance */}
        <div className="mt-8 text-center text-xs text-slate-500 dark:text-zinc-500 space-y-1">
          <p>This questionnaire is designed for educational demonstration.</p>
          <p>Historical returns are based on average market performance and do not guarantee future results.</p>
        </div>

      </div>
    </div>
  );
};

export default StartingEarly;
