import { memo } from "react";
import { Card } from "@/components/ui/card";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Mujeeb Chaudhry",
      expertise: "E-commerce & Investment Strategy",
      bio: "Mujeeb competed in the Wharton Investment Competition and BPA. He specializes in reselling, dropshipping, complex online shops, crypto projects, and has built multiple profitable apps. He also created this website. Together with Neil, he's made thousands through strategic investments and e-commerce ventures, teaching students advanced business strategies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Harshad Amalan",
      expertise: "Reselling & Product Trends", 
      bio: "Harshad is a successful reseller who's placed at the state level in BPA competitions. He teaches how to spot product trends and flip items for profit.",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      name: "Neil Kaila", 
      expertise: "Stock Analysis & Investing",
      bio: "Neil is a student investor who competed in the Wharton Investment Competition and made thousands of dollars through his investments. He's passionate about teaching students how to research, analyze, and confidently invest in stocks.",
      gradient: "from-purple-500 to-violet-500"
    },
    {
      name: "Yashas Singh",
      expertise: "Economics & Digital Assets",
      bio: "Yashas taught AP Econ to his peers and made over $1,000 trading NFTs. He focuses on helping students understand crypto digital assets, and economic decision-making.", 
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground">
            Meet the <span className="gradient-text-primary">Founders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student entrepreneurs who've competed nationally and generated thousands in revenue—now teaching you their proven strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-8 border border-border bg-card/60 backdrop-blur-md shadow-lg rounded-3xl hover:border-primary/40 transition-all">
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-4 flex items-center justify-center shadow-md`}>
                  <span className="text-white text-3xl font-black">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                  {member.expertise}
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-center text-sm sm:text-base">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="p-8 rounded-3xl border border-border bg-card/60 backdrop-blur-md max-w-3xl mx-auto space-y-4 shadow-xl">
            <h3 className="text-2xl font-bold text-foreground">
              Real Results, Real Education
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed">
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
