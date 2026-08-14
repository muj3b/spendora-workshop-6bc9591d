import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Headphones, ClipboardCheck, CheckCircle2, Award } from "lucide-react";
import AudiobookChapter from "@/components/AudiobookChapter";
import { audiobookChapters, AUDIOBOOK_TEST_URL } from "@/data/audiobooks";

const Audiobook = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Spendora Audiobook | Spendora";
    const desc = "Listen to Spendora's free financial literacy audiobook by Neil Kaila. Live transcripts, a test at the end, and a certificate if you pass.";
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
            <Headphones className="w-3.5 h-3.5" /> Narrated by Neil Kaila
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-4">
            The Spendora <span className="text-emerald-700 dark:text-[#52b788]">Audiobook</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Eight chapters, from your first paycheck to building wealth. Each one has a transcript that follows the audio. Finish the test at the end and you can earn a certificate.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5 text-xs font-bold">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> 8 Chapters
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Live transcripts
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 shadow-sm">
              <Award className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Certificate
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

        {/* Test CTA */}
        <div className="mt-14 bg-gradient-to-r from-emerald-800 to-emerald-900 dark:from-[#2d6a4f] dark:to-[#1b4332] py-12 px-8 rounded-2xl text-center shadow-xl">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 border border-white/20 text-emerald-300 mb-5">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white font-manrope mb-3">Done listening? Take the test</h2>
          <p className="text-sm sm:text-base text-emerald-100/90 max-w-xl mx-auto mb-8 font-medium">
            A short quiz on what you just heard. Pass it and you get a certificate you can put on a resume or LinkedIn.
          </p>
          <button onClick={() => window.open(AUDIOBOOK_TEST_URL, "_blank")} className="shiny-cta group shadow-xl hover:scale-105 transition-all">
            <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">
              Take the Test <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audiobook;
