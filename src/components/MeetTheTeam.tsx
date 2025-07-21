
import { Card } from "@/components/ui/card";

const MeetTheTeam = () => {
  const team = [
    {
      name: "Mujeeb Chaudhry",
      expertise: "E-commerce & TikTok Shop",
      bio: "Mujeeb specializes in complex online shops and has experience with dropshipping, creating crypto projects, and building profitable apps. He and Neil made thousands of dollars through their ventures and helps students learn advanced e-commerce strategies.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Harshad Amalan",
      expertise: "Reselling & Product Trends", 
      bio: "Harshad is a successful reseller who's placed at the state level in BPA competitions. He teaches how to spot product trends and flip items for profit.",
      gradient: "from-green-500 to-emerald-500"
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
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            High school entrepreneurs and investors sharing their real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-8 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 transform hover:-translate-y-2 animate-dynamic-island-pop" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center mb-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-4 flex items-center justify-center`}>
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className={`text-sm font-semibold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                  {member.expertise}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Learn from Real Experience
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Our team brings together state-level competition winners, successful entrepreneurs, 
              and experienced investors—all passionate about sharing what they've learned with the next generation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
