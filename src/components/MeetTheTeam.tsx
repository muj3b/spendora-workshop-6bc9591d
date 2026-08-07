import { memo } from "react";
import { Award, TrendingUp, ShoppingBag, Landmark } from "lucide-react";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Mujeeb Chaudhry",
      expertise: "E-commerce & Investment Strategy",
      bio: "Mujeeb competed in the Wharton Investment Competition and BPA. He specializes in reselling, dropshipping, complex online shops, crypto projects, and has built multiple profitable apps. He also created this website. Together with Neil, he's made thousands through strategic investments and e-commerce ventures.",
      color: "from-blue-500 to-cyan-500",
      icon: ShoppingBag
    },
    {
      name: "Harshad Amalan",
      expertise: "Reselling & Product Trends", 
      bio: "Harshad is a successful reseller who's placed at the state level in BPA competitions. He teaches how to spot product trends and flip items for profit.",
      color: "from-emerald-500 to-teal-500",
      icon: Award
    },
    {
      name: "Neil Kaila", 
      expertise: "Stock Analysis & Investing",
      bio: "Neil is a student investor who competed in the Wharton Investment Competition and made thousands of dollars through his investments. He's passionate about teaching students how to research, analyze, and confidently invest in stocks.",
      color: "from-purple-500 to-violet-500",
      icon: TrendingUp
    },
    {
      name: "Yashas Singh",
      expertise: "Economics & Digital Assets",
      bio: "Yashas taught AP Econ to his peers and made over $1,000 trading NFTs. He focuses on helping students understand crypto digital assets, and economic decision-making.", 
      color: "from-orange-500 to-amber-500",
      icon: Landmark
    }
  ];

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Meet the <span className="gradient-text-primary">Founders</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Student entrepreneurs who've competed nationally and generated thousands in revenue—now teaching you their proven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {team.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <div key={index} className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs hover:shadow-md transition-all text-left flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} text-white flex items-center justify-center font-black text-2xl shadow-sm shrink-0`}>
                      {member.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {member.name}
                      </h3>
                      <p className={`text-xs font-bold bg-gradient-to-r ${member.color} bg-clip-text text-transparent flex items-center gap-1.5 mt-0.5`}>
                        <IconComponent className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>{member.expertise}</span>
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md max-w-3xl mx-auto space-y-3 shadow-xs">
            <h3 className="text-xl font-bold text-foreground">
              Real Results, Real Education
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our founders have competed in prestigious competitions like Wharton Investment and BPA, 
              built profitable ventures, and generated real revenue. Now they're sharing their proven strategies 
              to help you build genuine financial literacy and entrepreneurial skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(MeetTheTeam);
