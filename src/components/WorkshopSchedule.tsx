import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const WorkshopSchedule = () => {
  const schedule = [
    { day: "Day 1", title: "Intro to Markets & Payment Setup", description: "Interactive presentation on market basics, icebreakers, and hands-on workshop to set up online payment methods and bank accounts", activities: ["Market fundamentals icebreaker", "Payment method setup workshop", "Personal finance basics"] },
    { day: "Day 2", title: "Stocks & Investment", description: "Understand what stocks are, practice predicting trends, and learn investment research through interactive games", activities: ["Stock trend prediction game", "Investment strategy workshop", "Research fundamentals"] },
    { day: "Day 3", title: "Online Business & Marketing", description: "Learn online advertising, business setup strategies, and brainstorm your own business ideas in breakout sessions", activities: ["Successful business strategy videos", "Dropshipping & TikTok Shop basics", "Business idea brainstorming"] },
    { day: "Day 4", title: "How Money Works & Crypto", description: "Interactive demonstrations on taxes, saving vs investing strategies, crypto basics, and hustling opportunities", activities: ["Tax basics demonstration", "Spend vs. Invest case studies", "Crypto fundamentals & side hustles"] },
    { day: "Day 5", title: "Final Competition & Celebration", description: "Apply everything you've learned in fun competitions, presentations, and celebrate with prizes and refreshments!", activities: ["Blooket fishing game competition", "Student presentations", "Prize ceremony & celebration"] },
    { day: "Day 6", title: "Mystery Day", description: "We're keeping this one under wraps for now. All we can say is it's going to be packed with information and we're pushing boundaries. You don't want to miss this one.", activities: ["Something big is coming", "Stay tuned for the reveal", "Trust us on this one"], golden: true },
  ];

  return (
    <section className="relative z-10 py-24 px-6" aria-labelledby="workshop-schedule">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="workshop-schedule" className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
            6-Day Workshop <span className="text-emerald-700 dark:text-[#52b788]">Schedule</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 mb-6 font-medium">Each day builds on the last, creating a comprehensive foundation in financial literacy</p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 shadow-sm">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-[#52b788]" />
            Specific dates sent after you sign up!
          </div>
        </div>

        <div className="space-y-5">
          {schedule.map((day, i) => (
            <div key={i} className={`group relative overflow-hidden border ${day.golden ? 'border-amber-300/60 dark:border-amber-500/20' : 'border-slate-200 dark:border-white/10'} bg-white dark:bg-black ${day.golden ? 'hover:border-amber-400/80 dark:hover:border-amber-500/30' : 'hover:border-emerald-500/40 dark:hover:border-white/20'} transition-all rounded-2xl shadow-md hover:shadow-xl`}>
              <div className="flex flex-col sm:flex-row">
                <div className={`sm:w-32 p-5 ${day.golden ? 'bg-gradient-to-br from-amber-500 to-amber-700 dark:from-amber-600 dark:to-amber-800' : 'bg-gradient-to-br from-emerald-700 to-emerald-900 dark:from-[#2d6a4f] dark:to-[#1b4332]'} text-white flex items-center justify-center font-black text-xl font-manrope shrink-0`}>
                  {day.day}
                </div>
                <div className="flex-1 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope">{day.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">{day.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {day.activities.map((a, j) => (
                      <div key={j} className={`p-3 border ${day.golden ? 'border-amber-200/60 dark:border-amber-800/30 bg-amber-50/50 dark:bg-amber-900/10' : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/50'} rounded-xl text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-2`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${day.golden ? 'text-amber-500 dark:text-amber-400' : 'text-emerald-600 dark:text-[#52b788]'} shrink-0`} /> {a}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')} className="shiny-cta group shadow-xl hover:scale-105 transition-all">
            <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
              Reserve Your Spot Now <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
