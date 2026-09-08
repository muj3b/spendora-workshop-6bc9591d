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
        <div className="mb-12">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-manrope tracking-tight text-slate-900 dark:text-white mb-4">
            The Spendora Audio Course
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl font-medium leading-relaxed">
            Eight modules covering paychecks, budgeting, banking, credit, and investing. Listen with synchronized live transcripts, then take the Spendora SAT assessment to claim your verified Money Ready Certificate.
          </p>
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
        <div className="mt-14 overflow-hidden rounded-2xl bg-slate-900 text-white dark:bg-zinc-950 p-8 sm:p-10 border border-slate-800 dark:border-white/10">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-emerald-700/30 border border-emerald-500/30 text-emerald-400">
              <Award className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-manrope">
                Course Assessment: Spendora SAT
              </h2>
              <p className="text-sm text-slate-300 dark:text-zinc-400 leading-relaxed font-medium">
                Complete the 20-question review test on Google Forms. Scoring 80% or higher awards your verified <strong className="text-white">Spendora Money Ready Certificate</strong> to document your financial literacy on your resume or LinkedIn.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-slate-300">
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 20 Questions
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> 80% to Pass
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> Unlimited Retakes
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => window.open(AUDIOBOOK_TEST_URL, "_blank")}
                className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Take the Spendora SAT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Audiobook;
