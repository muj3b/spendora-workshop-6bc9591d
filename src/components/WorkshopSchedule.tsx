
import { GradientButton } from "@/components/ui/gradient-button";
import { Card } from "@/components/ui/card";

const WorkshopSchedule = () => {
  const schedule = [
    {
      day: "Day 1",
      title: "Intro to Markets & Payment Setup",
      description: "Interactive presentation on market basics, icebreakers, and hands-on workshop to set up online payment methods and bank accounts",
      activities: ["Market fundamentals icebreaker", "Payment method setup workshop", "Personal finance basics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      day: "Day 2", 
      title: "How Money Works",
      description: "Interactive demonstrations on taxes, saving vs investing strategies, and economic principles like inflation and interest rates",
      activities: ["Tax basics demonstration", "Spend vs. Invest case studies", "Economic principles workshop"],
      color: "from-green-500 to-green-600"
    },
    {
      day: "Day 3",
      title: "Online Business & Marketing", 
      description: "Learn online advertising, business setup strategies, and brainstorm your own business ideas in breakout sessions",
      activities: ["Successful business strategy videos", "Dropshipping & TikTok Shop basics", "Business idea brainstorming"],
      color: "from-purple-500 to-purple-600"
    },
    {
      day: "Day 4",
      title: "Stocks & Investment Strategy",
      description: "Understand what stocks are, practice predicting trends, and learn investment research through interactive games", 
      activities: ["Stock trend prediction game", "Investment strategy workshop", "Research fundamentals"],
      color: "from-orange-500 to-orange-600"
    },
    {
      day: "Day 5",
      title: "Final Competition & Celebration",
      description: "Apply everything you've learned in fun competitions, presentations, and celebrate with prizes and refreshments!",
      activities: ["Blooket fishing game competition", "Student presentations", "Prize ceremony & celebration"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 transition-colors duration-300" aria-labelledby="workshop-schedule">
      <div className="container mx-auto px-6">
        <header className="max-w-4xl mx-auto text-center mb-16">
          <h2 id="workshop-schedule" className="text-display text-foreground mb-6">
            5-Day Workshop <span className="gradient-text-primary">Schedule</span>
          </h2>
          <p className="text-body-large text-muted-foreground mb-4">
            Each day builds on the last, creating a comprehensive foundation in financial literacy
          </p>
          <div className="glass border-blue-200 dark:border-blue-700 rounded-lg p-4 mb-8 animate-fade-in" role="note" aria-label="Important schedule information">
            <p className="text-blue-800 dark:text-blue-200 font-medium">
              <span role="img" aria-label="Calendar">📅</span> Specific dates, times, and locations will be sent to you via your contact information some time after you sign up!
            </p>
          </div>
        </header>

        <div className="space-y-6 max-w-4xl mx-auto" role="list" aria-label="Daily workshop schedule">
          {schedule.map((day, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-large transition-all duration-300 transform hover:-translate-y-1 animate-dynamic-island-pop shadow-soft" style={{ animationDelay: `${index * 0.1}s` }} role="listitem">
              <div className="flex">
                <div className={`w-2 bg-gradient-to-b ${day.color}`} aria-hidden="true"></div>
                <div className="flex-1 p-6 md:p-8">
                  <div className="flex flex-col">
                    <header className="flex items-center mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${day.color} mr-4`}>
                        {day.day}
                      </span>
                      <h3 className="text-subheading text-card-foreground">
                        {day.title}
                      </h3>
                    </header>
                    <p className="text-body text-muted-foreground mb-4">
                      {day.description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3" role="list" aria-label={`${day.day} activities`}>
                      {day.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="glass rounded-lg p-3 text-sm text-card-foreground hover:glass-strong transition-colors duration-200" role="listitem">
                          <span aria-hidden="true">•</span> {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <footer className="text-center mt-12">
          <p className="text-body-large text-muted-foreground mb-4">
            Ready to transform your relationship with money?
          </p>
          <GradientButton 
            size="lg"
            variant="primary"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            aria-label="Reserve your spot in the Spendora workshop"
            className="rounded-full"
          >
            Reserve Your Spot Now
          </GradientButton>
        </footer>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
