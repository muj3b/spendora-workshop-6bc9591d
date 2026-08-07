import { useEffect } from "react";
import { ArrowLeft, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Budgeting = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Budgeting & Money Skills | Spendora';
  }, []);

  const paragraphs = [
    "Money skills aren't taught in most schools, but they are essential for adult life. Budgeting means planning how you'll spend and save your money each month so you always have enough for what matters.",
    "A simple and popular rule is the 50/30/20 rule: 50% of your income goes toward Needs (housing, food, transportation), 30% toward Wants (entertainment, dining out, hobbies), and 20% toward Savings and Debt Repayment.",
    "Building an emergency fund is one of the smartest money moves you can make early in life. Having 3 to 6 months of living expenses saved protects you from unexpected expenses without having to take on high-interest debt.",
    "Tracking your spending for just 30 days will reveal surprising patterns about where your money goes. Small daily habits—like buying a $5 coffee or subscribing to services you don't use—add up to hundreds of dollars over a year.",
    "Start building good financial habits early. Set clear goals, automate your savings, and make your money work for you."
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Button>

        <div className="space-y-4 mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold">
            <Wallet className="w-3.5 h-3.5" />
            <span>Personal Finance</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Personal Finance & <span className="gradient-text-primary">Budgeting</span>
          </h1>
        </div>

        {/* Hero Image Asset */}
        <div className="rounded-3xl overflow-hidden mb-10 border border-border/80 image-outline shadow-md">
          <img src="/images/budgeting.jpg" alt="Personal budgeting app screen" className="w-full h-[280px] sm:h-[360px] object-cover" />
        </div>

        <div className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Budgeting;