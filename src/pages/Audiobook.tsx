import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Headphones, ClipboardCheck, CheckCircle2, Award } from "lucide-react";
import AudiobookChapter from "@/components/AudiobookChapter";
import { audiobookChapters, AUDIOBOOK_TEST_URL } from "@/data/audiobooks";

const Audiobook = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Spendora Audiobook & Course | Spendora";
    const desc = "Listen to Spendora's free 8-part financial literacy audio course. Live transcripts, then take the Spendora SAT to earn your Money Ready Certificate.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", window.location.origin + "/audiobook");
  }, []);

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors max-w-fit">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold mb-5 shadow-sm">
            <Headphones className="w-3.5 h-3.5" /> Free Audiobook & Course
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-4">
            The Spendora <span className="text-emerald-700 dark:text-[#52b788]">Audiobook & Course</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Eight modules spanning paychecks, budgeting, banking, debt, and building wealth. Follow along with interactive live transcripts. Pass the Spendora SAT at the end to claim your official certificate.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> 8 Modules
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Live Transcripts
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 shadow-sm">
              <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Spendora SAT
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-[#52b788] shadow-sm">
              <Award className="w-3.5 h-3.5" /> Money Ready Certificate
            </span>
          </div>
        </div>

        {/* Chapters */}
        <div className="space-y-5">
          {audiobookChapters.map((ch) => (
            <AudiobookChapter
              key={ch.id}
              chapter={ch}
              isActivePlayer={playingId === ch.id}
              onPlay={setPlayingId}
            />
          ))}
        </div>

        {/* Certificate & Test Card */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-[#122e23] dark:from-[#24533e] dark:via-[#193d2e] dark:to-[#0f241c] p-8 sm:p-12 shadow-2xl text-white border border-emerald-700/50">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border border-white/20 text-emerald-300 shadow-inner">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <ClipboardCheck className="w-3.5 h-3.5" /> Course Assessment & Certificate
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-manrope">
                Done listening? Take the Spendora SAT
              </h2>
            </div>

            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
              Take the 20-question review test on Google Forms. Score 80% or higher to receive your verified <strong className="text-white">Spendora Money Ready Certificate & Badge</strong>—ready to add to your resume, college applications, or LinkedIn profile.
            </p>

            <div className="p-4 rounded-2xl bg-black/20 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-emerald-100">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" /> 20 Questions
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" /> 80% to Pass
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" /> Unlimited Retakes
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => window.open(AUDIOBOOK_TEST_URL, "_blank")}
                className="shiny-cta group shadow-2xl hover:scale-105 transition-all text-base w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-white">
                  Take the Spendora SAT <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audiobook;
