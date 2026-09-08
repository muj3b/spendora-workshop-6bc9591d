import { useNavigate } from "react-router-dom";
import { Headphones, ArrowRight, Award, FileText, CheckCircle2 } from "lucide-react";

const AudiobookPromo = () => {
  const navigate = useNavigate();

  return (
    <section className="relative z-10 py-24 px-6" aria-labelledby="audiobook-promo">
      <div className="max-w-5xl mx-auto">
        <div className="border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-zinc-950 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-3">
                <Headphones className="w-3.5 h-3.5" /> Self-Paced Audio Curriculum
              </div>

              <h2
                id="audiobook-promo"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-manrope mb-4"
              >
                The Spendora Audio Course
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-400 font-medium leading-relaxed mb-6">
                Eight concise modules breaking down wages, budgeting, banking, debt, and investing. Listen with synchronized word-by-word transcripts, then take the Spendora SAT review test to earn your verified Money Ready Certificate.
              </p>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-zinc-400 mb-8">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>8 Audio Modules</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>Live Transcripts</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
                  <span>20-Question SAT Test</span>
                </span>
              </div>

              <button
                onClick={() => navigate("/audiobook")}
                className="px-6 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-800 dark:bg-[#2d6a4f] dark:hover:bg-[#1b4332] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Start Free Audio Course</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right side course credential preview */}
            <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 rounded-xl p-6 shadow-xs">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-white/5">
                <div className="p-2.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                    Course Credential
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-white font-manrope">
                    Spendora Money Ready Certificate
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                Awarded upon scoring 80% or higher on the Spendora SAT assessment. Verified badge ready for high school resumes, LinkedIn, and college applications.
              </p>

              <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-zinc-500 pt-2">
                <span>Free & Open Access</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-bold">100% Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudiobookPromo;
