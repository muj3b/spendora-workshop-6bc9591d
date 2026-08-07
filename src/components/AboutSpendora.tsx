import { Coins, Store, ChartLine, CheckCircle2 } from "lucide-react";

const AboutSpendora = () => {
  const features = [
    { icon: Coins, title: "Real-World Skills", description: "Learn budgeting, online payments, taxes, and smart spending habits that you'll actually use.", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/40" },
    { icon: Store, title: "Modern Business", description: "Explore online businesses, TikTok Shop, reselling, and digital entrepreneurship opportunities.", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/40" },
    { icon: ChartLine, title: "Investment Basics", description: "Understand stocks, markets, and how to make your money work for you from an early age.", color: "text-purple-600 dark:text-purple-400", bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/40" },
  ];

  return (
    <section className="relative z-10 py-24 px-6" aria-labelledby="about-spendora">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="about-spendora" className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
            About <span className="text-emerald-700 dark:text-[#52b788]">Spendora</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            A student-led financial literacy workshop by <span className="font-bold text-slate-900 dark:text-white">East Ridge High School</span> students, designed to make financial literacy fun, accessible, and practical.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="group relative overflow-hidden p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black hover:border-emerald-500/50 dark:hover:border-white/20 transition-all rounded-2xl shadow-lg hover:shadow-xl">
                <div className="relative z-10">
                  <div className={`mb-4 inline-flex p-3 rounded-xl border ${f.bg} ${f.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope mb-3">{f.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">{f.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free banner */}
        <div className="w-full bg-gradient-to-r from-emerald-800 to-emerald-900 dark:from-[#2d6a4f] dark:to-[#1b4332] py-14 px-8 rounded-2xl text-center shadow-xl">
          <h3 className="text-2xl md:text-3xl font-black text-white font-manrope mb-3">Completely Free to Attend</h3>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-xl mx-auto mb-8 font-medium">
            All supplies included, hosted in partnership with local libraries. Build a resume and gain practical experience with money management.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-white">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> All Materials</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Expert Instruction</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Hands-on Practice</div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Final Competition</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSpendora;
