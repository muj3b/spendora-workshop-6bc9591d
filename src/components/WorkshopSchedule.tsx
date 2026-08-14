import { Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const WorkshopSchedule = () => {
  const schedule = [
    { day: "Session 1", title: "Intro to Markets & Payment Setup", description: "We kick off with market basics, icebreakers, and a hands-on workshop to set up online payment methods and bank accounts.", activities: ["Market fundamentals icebreaker", "Payment method setup workshop", "Personal finance basics"] },
    { day: "Session 2", title: "Stocks & Investment", description: "What stocks actually are, how to spot a trend, and how to research an investment without guessing.", activities: ["Stock trend prediction game", "Investment strategy workshop", "Research fundamentals"] },
    { day: "Session 3", title: "Online Business & Marketing", description: "Advertising, how to start a small online business, and a breakout to brainstorm your own idea.", activities: ["Successful business strategy videos", "Dropshipping & TikTok Shop basics", "Business idea brainstorming"] },
    { day: "Session 4", title: "How Money Works & Crypto", description: "Taxes, saving vs investing, crypto basics, and a few real side-hustle examples.", activities: ["Tax basics demonstration", "Spend vs. Invest case studies", "Crypto fundamentals & side hustles"] },
    { day: "Session 5", title: "Final Competition & Celebration", description: "Put it all to use in a few competitions, present what you learned, and wrap up with prizes and snacks.", activities: ["Blooket fishing game competition", "Student presentations", "Prize ceremony & celebration"] },
    { day: "Session 6", title: "Mystery Session", description: "We're keeping this one quiet on purpose. Show up. It's worth it.", activities: ["Details dropping soon", "You'll want to be there", "Expect the unexpected"], golden: true },
  ];

  return (
    <section className="relative z-10 py-24 px-6" aria-labelledby="workshop-schedule">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="workshop-schedule" className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
            Workshop <span className="text-emerald-700 dark:text-[#52b788]">Schedule</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 mb-6 font-medium">Six sessions. Each one picks up where the last left off.</p>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 shadow-sm">
            <Calendar className="w-4 h-4 text-emerald-600 dark:text-[#52b788]" />
            Specific dates sent after you sign up!
          </div>
        </div>

        <div className="space-y-5">
          {schedule.map((day, i) => (
            <div key={i} className={`group relative overflow-hidden border ${day.golden ? 'border-yellow-400/40 dark:border-yellow-500/15' : 'border-slate-200 dark:border-white/10'} bg-white dark:bg-black ${day.golden ? 'hover:border-yellow-500/60 dark:hover:border-yellow-500/25' : 'hover:border-emerald-500/40 dark:hover:border-white/20'} transition-all rounded-2xl shadow-md hover:shadow-xl`}>
              <div className="flex flex-col sm:flex-row">
                <div className={`sm:w-36 p-5 ${day.golden ? 'bg-gradient-to-br from-yellow-500 to-yellow-700 dark:from-yellow-600 dark:to-yellow-800' : 'bg-gradient-to-br from-emerald-700 to-emerald-900 dark:from-[#2d6a4f] dark:to-[#1b4332]'} text-white flex items-center justify-center font-black text-lg sm:text-xl font-manrope shrink-0 text-center`}>
                  {day.day}
                </div>
                <div className="flex-1 p-6 md:p-8 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope">{day.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium">{day.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    {day.activities.map((a, j) => (
                      <div key={j} className={`p-3 border ${day.golden ? 'border-yellow-300/40 dark:border-yellow-700/20 bg-yellow-50/50 dark:bg-yellow-900/10' : 'border-slate-200/80 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/50'} rounded-xl text-xs font-semibold text-slate-700 dark:text-zinc-300 flex items-center gap-2`}>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${day.golden ? 'text-yellow-600 dark:text-yellow-400' : 'text-emerald-600 dark:text-[#52b788]'} shrink-0`} /> {a}
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
              Reserve your spot <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkshopSchedule;
