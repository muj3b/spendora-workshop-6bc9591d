import { FeatureCard } from "@/components/ui/feature-card";
import { ChartLine, Coins, Store, CheckCircle2 } from "lucide-react";

const AboutSpendora = () => {
  return (
    <section className="py-20 bg-background transition-colors duration-300" aria-labelledby="about-spendora">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="about-spendora" className="text-3xl sm:text-5xl font-extrabold text-foreground mb-6">
            About <span className="gradient-text-primary">Spendora</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A student-led financial literacy workshop by <span className="font-semibold text-blue-500 dark:text-blue-400">East Ridge High School</span> students, 
            designed to make financial literacy fun, accessible, and practical for the next generation.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-16" role="list" aria-label="Workshop features">
          <FeatureCard
            icon={Coins}
            title="Real-World Skills"
            description="Learn budgeting, online payments, taxes, and smart spending habits that you'll actually use."
            iconGradient="blue"
            variant="elevated"
          />
          
          <FeatureCard
            icon={Store}
            title="Modern Business"
            description="Explore online businesses, TikTok Shop, reselling, and digital entrepreneurship opportunities."
            iconGradient="green"
            variant="elevated"
          />
          
          <FeatureCard
            icon={ChartLine}
            title="Investment Basics"
            description="Understand stocks, markets, and how to make your money work for you from an early age."
            iconGradient="purple"
            variant="elevated"
          />
        </div>

        <aside className="p-8 md:p-12 rounded-3xl border border-border bg-card/60 backdrop-blur-md shadow-xl" aria-labelledby="free-attendance">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 id="free-attendance" className="text-2xl sm:text-3xl font-bold text-foreground">
              Completely Free to Attend
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground">
              All supplies included, hosted in partnership with local libraries and camps. 
              Plus, you'll build a resume and gain practical experience with money management.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-semibold text-foreground pt-4" role="list" aria-label="What's included">
              <div className="flex items-center justify-center gap-2" role="listitem">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> All Materials
              </div>
              <div className="flex items-center justify-center gap-2" role="listitem">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Expert Instruction
              </div>
              <div className="flex items-center justify-center gap-2" role="listitem">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Hands-on Practice
              </div>
              <div className="flex items-center justify-center gap-2" role="listitem">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Final Competition
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default AboutSpendora;
