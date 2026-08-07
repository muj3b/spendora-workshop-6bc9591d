import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle2 } from "lucide-react";

const WorkshopSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Intro to Markets & Payment Setup",
      description: "Interactive presentation on market basics, icebreakers, and hands-on workshop to set up online payment methods and bank accounts",
      activities: ["Market fundamentals icebreaker", "Payment method setup workshop", "Personal finance basics"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      day: "Day 2", 
      title: "Stocks & Investment",
      description: "Understand what stocks are, practice predicting trends, and learn investment research through interactive games",
      activities: ["Stock trend prediction game", "Investment strategy workshop", "Research fundamentals"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      day: "Day 3",
      title: "Online Business & Marketing", 
      description: "Learn online advertising, business setup strategies, and brainstorm your own business ideas in breakout sessions",
      activities: ["Successful business strategy videos", "Dropshipping & TikTok Shop basics", "Business idea brainstorming"],
      color: "from-purple-500 to-violet-500"
    },
    {
      day: "Day 4",
      title: "How Money Works & Crypto",
      description: "Interactive demonstrations on taxes, saving vs investing strategies, crypto basics, and hustling opportunities", 
      activities: ["Tax basics demonstration", "Spend vs. Invest case studies", "Crypto fundamentals & side hustles"],
      color: "from-orange-500 to-amber-500"
    },
    {
      day: "Day 5",
      title: "Final Competition & Celebration",
      description: "Apply everything you've learned in fun competitions, presentations, and celebrate with prizes and refreshments!",
      activities: ["Blooket fishing game competition", "Student presentations", "Prize ceremony & celebration"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/20 transition-colors duration-300" aria-labelledby="workshop-schedule">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-16 space-y-4">
          <h2 id="workshop-schedule" className="text-3xl sm:text-5xl font-extrabold text-foreground">
            5-Day Workshop <span className="gradient-text-primary">Schedule</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Each day builds on the last, creating a comprehensive foundation in financial literacy
          </p>
          <div className="p-4 rounded-2xl border border-blue-500/20 bg-blue-500/10 max-w-2xl mx-auto text-blue-600 dark:text-blue-300 font-medium text-sm sm:text-base flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span>Specific dates, times, and locations will be sent to you via your contact information some time after you sign up!</span>
          </div>
        </header>

        <div className="space-y-6 max-w-4xl mx-auto" role="list" aria-label="Daily workshop schedule">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden border border-border bg-card/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all rounded-3xl" role="listitem">
              <div className="flex flex-col sm:flex-row">
                <div className={`sm:w-32 p-4 bg-gradient-to-r sm:bg-gradient-to-b ${day.color} text-white flex items-center justify-center font-extrabold text-lg sm:text-xl flex-shrink-0`}>
                  {day.day}
                </div>
                <div className="flex-1 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {day.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    {day.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3" role="list" aria-label={`${day.day} activities`}>
                    {day.activities.map((activity, actIndex) => (
                      <div key={actIndex} className="p-3 rounded-xl border border-border/50 bg-background/50 text-xs sm:text-sm font-medium text-foreground flex items-center gap-2" role="listitem">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        <span>{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center mt-12 space-y-4">
          <p className="text-lg font-semibold text-muted-foreground">
            Ready to transform your relationship with money?
          </p>
          <Button 
            size="lg"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            aria-label="Reserve your spot in the Spendora workshop"
            className="rounded-full px-8 py-6 text-lg font-bold shadow-lg hover:scale-105 transition-all bg-primary text-primary-foreground"
          >
            Reserve Your Spot Now 🚀
          </Button>
        </footer>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
