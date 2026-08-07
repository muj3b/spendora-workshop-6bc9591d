import { Coins, Store, ChartLine, CheckCircle2 } from "lucide-react";

const AboutSpendora = () => {
  const features = [
    {
      icon: Coins,
      title: "Real-World Skills",
      description: "Learn budgeting, online payments, taxes, and smart spending habits that you'll actually use.",
      gradient: "from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-500"
    },
    {
      icon: Store,
      title: "Modern Business",
      description: "Explore online businesses, TikTok Shop, reselling, and digital entrepreneurship opportunities.",
      gradient: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-500"
    },
    {
      icon: ChartLine,
      title: "Investment Basics",
      description: "Understand stocks, markets, and how to make your money work for you from an early age.",
      gradient: "from-purple-500/20 to-violet-500/20 border-purple-500/30 text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-background transition-colors duration-300" aria-labelledby="about-spendora">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 id="about-spendora" className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            About <span className="gradient-text-primary">Spendora</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A student-led financial literacy workshop by <span className="font-semibold text-blue-500 dark:text-blue-400">East Ridge High School</span> students, 
            designed to make financial literacy fun, accessible, and practical for the next generation.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f, idx) => {
            const IconComponent = f.icon;
            return (
              <div key={idx} className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs text-left space-y-4 hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-2xl border ${f.gradient} flex items-center justify-center`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            );
          })}
        </div>

        {/* Free Attendance Block */}
        <div className="p-8 md:p-12 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Completely Free to Attend
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              All supplies included, hosted in partnership with local libraries and camps. 
              Plus, you'll build a resume and gain practical experience with money management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm font-semibold text-foreground pt-2 max-w-3xl mx-auto">
            <div className="p-3 rounded-2xl bg-muted/40 border border-border/40 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> All Materials
            </div>
            <div className="p-3 rounded-2xl bg-muted/40 border border-border/40 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Expert Instruction
            </div>
            <div className="p-3 rounded-2xl bg-muted/40 border border-border/40 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Hands-on Practice
            </div>
            <div className="p-3 rounded-2xl bg-muted/40 border border-border/40 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Final Competition
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpendora;
