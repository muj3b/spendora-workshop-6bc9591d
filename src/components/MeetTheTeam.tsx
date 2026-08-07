import { memo } from "react";
import { Award, TrendingUp, ShoppingBag, Landmark } from "lucide-react";

const MeetTheTeam = () => {
  const team = [
    { name: "Mujeeb Chaudhry", expertise: "E-commerce & Investment Strategy", bio: "Mujeeb competed in the Wharton Investment Competition and BPA. He specializes in reselling, dropshipping, complex online shops, crypto projects, and has built multiple profitable apps. He also created this website. Together with Neil, he's made thousands through strategic investments and e-commerce ventures.", icon: ShoppingBag },
    { name: "Harshad Amalan", expertise: "Reselling & Product Trends", bio: "Harshad is a successful reseller who's placed at the state level in BPA competitions. He teaches how to spot product trends and flip items for profit.", icon: Award },
    { name: "Neil Kaila", expertise: "Stock Analysis & Investing", bio: "Neil is a student investor who competed in the Wharton Investment Competition and made thousands of dollars through his investments. He's passionate about teaching students how to research, analyze, and confidently invest in stocks.", icon: TrendingUp },
    { name: "Yashas Singh", expertise: "Economics & Digital Assets", bio: "Yashas taught AP Econ to his peers and made over $1,000 trading NFTs. He focuses on helping students understand crypto digital assets, and economic decision-making.", icon: Landmark },
  ];

  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
            Meet the <span className="text-emerald-700 dark:text-[#52b788]">Founders</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Student entrepreneurs who've competed nationally and generated thousands in revenue
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {team.map((m, i) => {
            const Icon = m.icon;
            return (
              <div key={i} className="group relative overflow-hidden p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black hover:border-emerald-500/40 dark:hover:border-white/20 transition-all rounded-2xl shadow-md hover:shadow-xl flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-700 dark:bg-[#2d6a4f] text-white flex items-center justify-center font-black text-xl font-manrope shadow-md shrink-0">
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope">{m.name}</h3>
                      <p className="text-xs font-bold text-emerald-700 dark:text-[#52b788] flex items-center gap-1.5 mt-0.5"><Icon className="w-3.5 h-3.5" /> {m.expertise}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">{m.bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(MeetTheTeam);
