import { useEffect } from "react";
import { ArrowLeft, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Budgeting = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Budgeting & Money Skills | Spendora'; }, []);

  const paragraphs = [
    "Money skills aren't taught in most schools, but they are essential for adult life. Budgeting means planning how you'll spend and save your money each month so you always have enough for what matters.",
    "A simple and popular rule is the 50/30/20 rule: 50% of your income goes toward Needs (housing, food, transportation), 30% toward Wants (entertainment, dining out, hobbies), and 20% toward Savings and Debt Repayment.",
    "Building an emergency fund is one of the smartest money moves you can make early in life. Having 3 to 6 months of living expenses saved protects you from unexpected expenses without having to take on high-interest debt.",
    "Tracking your spending for just 30 days will reveal surprising patterns about where your money goes. Small daily habits—like buying a $5 coffee or subscribing to services you don't use—add up to hundreds of dollars over a year.",
    "Start building good financial habits early. Set clear goals, automate your savings, and make your money work for you."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold mb-4"><Wallet className="w-3.5 h-3.5" /> Personal Finance</div>
          <h1 className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">Personal Finance & <span className="text-emerald-700 dark:text-[#52b788]">Budgeting</span></h1>
        </div>
        <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl space-y-6 text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
          {paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </div>
    </div>
  );
};

export default Budgeting;