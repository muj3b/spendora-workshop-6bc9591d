
import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Coins, Store, Users, Award, Target } from "lucide-react";

const AboutSpendora = () => {
  return (
    <section className="py-20 bg-background transition-colors duration-300" aria-labelledby="about-spendora">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 id="about-spendora" className="text-display text-foreground mb-6">
            About <span className="gradient-text-primary">Spendora</span>
          </h2>
          <div className="flex justify-center items-center gap-6 mb-6 flex-wrap">
            <div className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Users className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-800 dark:text-blue-200">Growing Community</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800 dark:text-green-200">100% Free</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-800 dark:text-purple-200">Real Results</span>
            </div>
          </div>
          <p className="text-body-large text-muted-foreground">
            Created and taught by <span className="font-semibold text-blue-600 dark:text-blue-400">East Ridge High School</span> students 
            who have real experience with investing, entrepreneurship, and financial success. We're passionate about 
            sharing practical money skills that actually work in today's world.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Workshop features">
          <FeatureCard
            icon={Coins}
            title="Real-World Skills"
            description="Learn budgeting, online payments, taxes, and smart spending habits that you'll actually use."
            iconGradient="blue"
            variant="elevated"
            animationDelay="0.1s"
          />
          
          <FeatureCard
            icon={Store}
            title="Modern Business"
            description="Explore online businesses, TikTok Shop, reselling, and digital entrepreneurship opportunities."
            iconGradient="green"
            variant="elevated"
            animationDelay="0.2s"
          />
          
          <FeatureCard
            icon={ChartLine}
            title="Investment Basics"
            description="Understand stocks, markets, and how to make your money work for you from an early age."
            iconGradient="purple"
            variant="elevated"
            animationDelay="0.3s"
          />
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in transform transition-all duration-700 hover:scale-105 shadow-medium hover:shadow-large mb-16" style={{ animationDelay: '0.4s' }} aria-labelledby="team-video">
          <div className="max-w-4xl mx-auto text-center">
            <h3 id="team-video" className="text-heading text-card-foreground mb-6">
              Meet the Team Behind Spendora
            </h3>
            <p className="text-body-large text-muted-foreground mb-8">
              Hear directly from our student leaders about what makes Spendora special and why we're passionate about financial literacy.
            </p>
            <div className="relative rounded-xl overflow-hidden shadow-large max-w-3xl mx-auto">
              <video 
                controls 
                className="w-full h-auto"
                poster="/placeholder.svg"
                preload="metadata"
              >
                <source src="https://files.catbox.moe/62riwa.mov" type="video/quicktime" />
                <source src="https://files.catbox.moe/62riwa.mov" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <aside className="glass rounded-2xl p-8 md:p-12 animate-fade-in transform transition-all duration-700 hover:scale-105 shadow-medium hover:shadow-large" style={{ animationDelay: '0.6s' }} aria-labelledby="free-attendance">
          <div className="max-w-3xl mx-auto text-center">
            <h3 id="free-attendance" className="text-heading text-card-foreground mb-4">
              🎉 Completely Free to Attend
            </h3>
            <p className="text-body-large text-muted-foreground mb-6">
              Everything is provided at no cost, hosted in partnership with R.H. Stafford Library. 
              You'll gain hands-on experience with real financial tools, learn from successful student entrepreneurs, 
              and build skills that will benefit you for life!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-muted-foreground" role="list" aria-label="What's included">
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">📚</span> All Materials
              </div>
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">👨‍🏫</span> Expert Instruction
              </div>
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">💪</span> Hands-on Practice
              </div>
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">🏆</span> Final Competition
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSpendora;
