
import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Coins, Store } from "lucide-react";

const AboutSpendora = () => {
  return (
    <section className="py-20 bg-background transition-colors duration-300" aria-labelledby="about-spendora">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 id="about-spendora" className="text-display text-foreground mb-6">
            About <span className="gradient-text-primary">Spendora</span>
          </h2>
          <p className="text-body-large text-muted-foreground">
            A student-led financial literacy workshop by <span className="font-semibold text-blue-600 dark:text-blue-400">East Ridge High School</span> students, 
            designed to make financial literacy fun, accessible, and practical for the next generation.
          </p>
        </header>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16 max-w-6xl mx-auto" role="list" aria-label="Workshop features">
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

        <div className="liquid-glass-surface glass-interactive glass-floating rounded-2xl p-8 md:p-12 animate-fade-in transform transition-all duration-700 hover:scale-105 shadow-medium hover:shadow-large mb-16" style={{ animationDelay: '0.4s' }} aria-labelledby="team-video">
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

        <aside className="liquid-glass-surface glass-interactive glass-floating rounded-2xl p-8 md:p-12 animate-fade-in transform transition-all duration-700 hover:scale-105 shadow-medium hover:shadow-large" style={{ animationDelay: '0.6s' }} aria-labelledby="free-attendance">
          <div className="max-w-3xl mx-auto text-center">
            <h3 id="free-attendance" className="text-heading text-card-foreground mb-4">
              Completely Free to Attend
            </h3>
            <p className="text-body-large text-muted-foreground mb-6">
              All supplies included, hosted in partnership with local libraries and camps. 
              Plus, you'll build a resume and gain practical experience with money management.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-muted-foreground" role="list" aria-label="What's included">
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">✓</span> All Materials
              </div>
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">✓</span> Expert Instruction
              </div>
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">✓</span> Hands-on Practice
              </div>
              <div className="transition-all duration-300 hover:scale-110" role="listitem">
                <span aria-hidden="true">✓</span> Final Competition
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSpendora;
