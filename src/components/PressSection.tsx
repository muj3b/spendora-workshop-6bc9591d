import { memo } from "react";
import { Newspaper, ExternalLink, Calendar, User, Quote } from "lucide-react";

const PressSection = () => {
  const articleUrl = "https://woodburynewsnet.org/7897/schools/three-east-ridge-high-school-students-create-financial-literacy-initiative-for-their-community/";
  const articleImage = "https://woodburynewsnet.org/wp-content/uploads/2026/09/Screenshot-2026-08-30-at-10.32.47-PM-e1788388795976-1200x800.jpg";

  return (
    <section className="relative z-10 py-20 px-6" id="press" aria-labelledby="press-heading">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-800 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Newspaper className="w-3.5 h-3.5" /> Press & Media Coverage
          </div>
          <h2 id="press-heading" className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
            Spendora in the <span className="text-emerald-700 dark:text-[#52b788]">News</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Recognized by local journalists for empowering students with free, practical financial education.
          </p>
        </div>

        {/* Featured Article Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black shadow-xl hover:shadow-2xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Image Side */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full bg-slate-100 dark:bg-zinc-950 overflow-hidden">
              <img
                src={articleImage}
                alt="Mujeeb Chaudhry, Neil Kaila, and Harshad Amalan presenting Spendora to their East Ridge classmates"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:hidden" />
              <div className="absolute bottom-3 left-4 right-4 text-[11px] text-white/90 lg:hidden font-medium">
                Photo: Mujeeb Chaudhry, Neil Kaila & Harshad Amalan at East Ridge
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
              <div>
                {/* Meta header */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-zinc-400 font-semibold mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-[#52b788] border border-emerald-200/80 dark:border-emerald-800/60 font-bold">
                    Woodbury News Net
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> Sept 2, 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> Andrea Hillukka
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white font-manrope leading-tight mb-4">
                  Three East Ridge High School Students Create Financial Literacy Initiative for Their Community
                </h3>

                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium mb-6">
                  Spendora was founded by Harshad Amalan, Mujeeb Chaudhry, and Neil Kaila to teach "the money stuff schools skip." From Woodbury to international classrooms, the initiative provides accessible workshops, guides, and a free 8-part audio course.
                </p>

                {/* Pull Quote */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/80 dark:border-zinc-800 relative">
                  <Quote className="w-6 h-6 text-emerald-600/30 dark:text-emerald-400/20 absolute -top-2.5 -left-1.5 fill-current" />
                  <p className="text-xs sm:text-sm italic text-slate-700 dark:text-zinc-300 font-medium pl-3 leading-relaxed">
                    "We take concepts such as compound interest, diversification, budgeting and investment risk and explain them using examples students can understand."
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 dark:border-white/5">
                <span className="text-xs text-slate-500 dark:text-zinc-500 font-medium hidden sm:inline">
                  Original reporting on Woodbury's independent news outlet
                </span>
                <a
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-700 dark:bg-[#2d6a4f] hover:bg-emerald-800 dark:hover:bg-[#1b4332] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg shrink-0"
                >
                  <span>Read Full Story</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PressSection);
