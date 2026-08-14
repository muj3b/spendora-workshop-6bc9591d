import { useNavigate } from "react-router-dom";
import { Headphones, ArrowRight, Captions, ClipboardCheck, ListMusic } from "lucide-react";

const AudiobookPromo = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 py-24 px-6" aria-labelledby="audiobook-promo">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl p-8 sm:p-12">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 dark:bg-emerald-700/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 dark:bg-white/5 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4">
                <Headphones className="w-3.5 h-3.5" /> New audiobook
              </div>
              <h2 id="audiobook-promo" className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
                Neil made an <span className="text-emerald-700 dark:text-[#52b788]">audiobook</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 font-medium leading-relaxed mb-6 max-w-xl">
                Neil Kaila recorded eight chapters on paychecks, budgeting, banking, credit, and investing.
                Hit play and the transcript follows along, so you can read it even if the volume is off.
              </p>

              <div className="flex flex-wrap gap-2.5 mb-8 text-xs font-bold">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300">
                  <ListMusic className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> 8 Chapters
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300">
                  <Captions className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Live Transcripts
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300">
                  <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Final Test
                </span>
              </div>

              <button
                onClick={() => navigate("/audiobook")}
                className="shiny-cta group shadow-xl hover:scale-105 transition-all"
              >
                <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
                  Hit play <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>

            <div className="hidden md:flex shrink-0 w-44 h-44 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-900 dark:from-[#2d6a4f] dark:to-[#1b4332] items-center justify-center shadow-xl">
              <Headphones className="w-20 h-20 text-emerald-200/90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiobookPromo;
