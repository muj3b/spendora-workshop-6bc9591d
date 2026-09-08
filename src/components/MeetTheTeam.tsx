import { memo } from "react";
import { Linkedin, ArrowUpRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string | null;
}

const team: TeamMember[] = [
  {
    name: "Mujeeb Chaudhry",
    role: "E-commerce & Investment Strategy",
    bio: "Mujeeb is an active crypto trader and stock investor with notable experience scaling B2B, B2C, and SaaS ventures, affiliate marketing with TikTok, and YouTube automation. He's also a competitor in the Wharton Investment Competition. He coded this very website with the help of his peer Harshad, and specializes in app development, most notably owning and fully developing Vidi. In addition, he noticed that financial literacy is low and wanted to spread his knowledge on cryptic trends and brackets.",
    linkedin: "https://www.linkedin.com/in/muj3b/",
  },
  {
    name: "Harshad Amalan",
    role: "Stock Market & Trend Spotting",
    bio: "Harshad is a student investor with an interest in how the stock market differentiates. He keeps a close watch on the NYSE and has a knack for spotting trends before they take off. He's competed in the Wharton Investment Competition on two occasions, and he's driven by a passion for helping students build the skills to research and invest with confidence because they aren’t taught that in schools. He also helped create this website with Mujeeb.",
    linkedin: "https://www.linkedin.com/in/harshad-amalan/?skipRedirect=true",
  },
  {
    name: "Neil Kaila",
    role: "Stock Analysis & Portfolio Strategy",
    bio: "Neil is a student investor with experience in stock analysis and portfolio strategy. He has competed in the Wharton Global High School Investment Competition on three occasions. Through Business Professionals of America, he won at the state level in Small Business Management and earned a regional placement in Personal Financial Management. He is passionate about helping students develop the skills to research, analyze, and invest with confidence.",
    linkedin: "https://www.linkedin.com/in/neil-k-33b468371/?skipRedirect=true",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-manrope mb-3">
            The Founders
          </h2>
          <p className="text-base text-slate-600 dark:text-zinc-400 font-medium max-w-2xl">
            East Ridge High School students who competed nationally, managed real portfolios, and founded Spendora to teach practical financial literacy to their peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {team.map((m, i) => (
            <div
              key={i}
              className="border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope">
                      {m.name}
                    </h3>
                    <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 mt-0.5">
                      {m.role}
                    </p>
                  </div>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-100 dark:bg-zinc-900 hover:bg-[#0A66C2] hover:text-white text-slate-600 dark:text-zinc-400 transition-colors"
                      title={`${m.name}'s LinkedIn`}
                      aria-label={`${m.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium mt-4">
                  {m.bio}
                </p>
              </div>

              {m.linkedin && (
                <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    <span>View LinkedIn profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(MeetTheTeam);
