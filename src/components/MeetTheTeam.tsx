import { memo } from "react";
import { Award, TrendingUp, ShoppingBag, Landmark, Linkedin, ExternalLink } from "lucide-react";

interface TeamMember {
  name: string;
  expertise: string;
  bio: string;
  icon: typeof ShoppingBag;
  linkedin: string | null;
}

const MeetTheTeam = () => {
  const team: TeamMember[] = [
    {
      name: "Mujeeb Chaudhry",
      expertise: "E-commerce & Investment Strategy",
      bio: "Mujeeb competed in the Wharton Investment Competition and BPA. He specializes in reselling, dropshipping, complex online shops, crypto projects, and has built multiple profitable apps. He also created this website.",
      icon: ShoppingBag,
      linkedin: "https://www.linkedin.com/in/muj3b/",
    },
    {
      name: "Harshad Amalan",
      expertise: "Stock Market & Trend Spotting",
      bio: "Harshad is a student investor with an interest in how the stock market differentiates. He keeps a close watch on the NYSE and has a knack for spotting trends before they take off. He's competed in the Wharton Investment Competition on two occasions, and he's driven by a passion for helping students build the skills to research and invest with confidence because they aren’t taught that in schools. He also helped create this website with Mujeeb.",
      icon: TrendingUp,
      linkedin: "https://www.linkedin.com/in/harshad-amalan/?skipRedirect=true",
    },
    {
      name: "Neil Kaila",
      expertise: "Stock Analysis & Investing",
      bio: "Neil is a student investor who competed in the Wharton Investment Competition and made thousands of dollars through his investments. He's passionate about teaching students how to research, analyze, and confidently invest in stocks.",
      icon: TrendingUp,
      linkedin: "https://www.linkedin.com/in/neil-k-33b468371/?skipRedirect=true",
    },
    {
      name: "Yashas Singh",
      expertise: "Economics & Digital Assets",
      bio: "Yashas taught AP Econ to his peers and made over $1,000 trading NFTs. He focuses on helping students understand crypto digital assets, and economic decision-making.",
      icon: Landmark,
      linkedin: null,
    },
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
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/50 text-blue-700 dark:text-blue-400 text-xs font-semibold shadow-xs">
            <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>Click any founder's profile to connect on LinkedIn</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((m, i) => {
            const Icon = m.icon;
            const hasLinkedin = Boolean(m.linkedin);

            return (
              <div
                key={i}
                onClick={() => {
                  if (m.linkedin) {
                    window.open(m.linkedin, "_blank", "noopener,noreferrer");
                  }
                }}
                className={`group relative overflow-hidden p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black transition-all rounded-2xl shadow-md flex flex-col justify-between ${
                  hasLinkedin
                    ? "cursor-pointer hover:border-[#0A66C2]/60 dark:hover:border-[#0A66C2]/80 hover:shadow-xl hover:shadow-[#0A66C2]/5"
                    : "hover:border-emerald-500/40 dark:hover:border-white/20 hover:shadow-xl"
                }`}
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-700 dark:bg-[#2d6a4f] text-white flex items-center justify-center font-black text-xl font-manrope shadow-md shrink-0">
                        {m.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope flex items-center gap-2">
                          {m.name}
                        </h3>
                        <p className="text-xs font-bold text-emerald-700 dark:text-[#52b788] flex items-center gap-1.5 mt-0.5">
                          <Icon className="w-3.5 h-3.5" /> {m.expertise}
                        </p>
                      </div>
                    </div>

                    {hasLinkedin && (
                      <a
                        href={m.linkedin!}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${m.name}'s LinkedIn Profile`}
                        className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-[#0A66C2] dark:text-blue-400 border border-blue-200 dark:border-blue-800/80 hover:bg-[#0A66C2] hover:text-white dark:hover:bg-[#0A66C2] dark:hover:text-white transition-all shadow-xs group/link"
                      >
                        <Linkedin className="w-3.5 h-3.5 fill-current" />
                        <span>LinkedIn</span>
                        <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {m.bio}
                  </p>
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
