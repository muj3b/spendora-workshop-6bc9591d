import { memo } from "react";
import { ExternalLink, Calendar, ArrowRight } from "lucide-react";

const PressSection = () => {
  const articleUrl =
    "https://woodburynewsnet.org/7897/schools/three-east-ridge-high-school-students-create-financial-literacy-initiative-for-their-community/";
  const articleImage =
    "https://woodburynewsnet.org/wp-content/uploads/2026/09/Screenshot-2026-08-30-at-10.32.47-PM-e1788388795976-1200x800.jpg";

  return (
    <section className="relative z-10 py-24 px-6" id="press" aria-labelledby="press-heading">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2
            id="press-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-manrope mb-3"
          >
            In the News
          </h2>
          <p className="text-base text-slate-600 dark:text-zinc-400 font-medium max-w-2xl">
            Local reporting on Spendora's mission to bring practical financial education to high school students.
          </p>
        </div>

        {/* Editorial Feature */}
        <article className="border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Story Details */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between order-2 lg:order-1">
              <div>
                {/* Masthead bar */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-500 dark:text-zinc-400 font-medium mb-4 pb-3 border-b border-slate-100 dark:border-white/5">
                  <span className="font-extrabold uppercase tracking-widest text-[11px] text-emerald-800 dark:text-emerald-400">
                    Woodbury News Net
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 opacity-60" /> Sept 2, 2026
                  </span>
                  <span>•</span>
                  <span>By Andrea Hillukka</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-manrope leading-snug tracking-tight mb-4">
                  Three East Ridge High School Students Create Financial Literacy Initiative for Their Community
                </h3>

                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-medium mb-6">
                  Spendora was founded by Harshad Amalan, Mujeeb Chaudhry, and Neil Kaila to teach what conventional school curricula often overlook. From community library workshops in Woodbury to partner classrooms abroad, the student-led group delivers interactive lessons on investing, budgeting, and compound wealth.
                </p>

                {/* Editorial Pull Quote */}
                <blockquote className="border-l-2 border-emerald-600 dark:border-emerald-500 pl-4 my-6">
                  <p className="text-sm italic text-slate-800 dark:text-zinc-200 font-medium leading-relaxed">
                    "We take concepts such as compound interest, diversification, budgeting and investment risk and explain them using examples students can understand."
                  </p>
                </blockquote>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-white/5">
                <a
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors group"
                >
                  <span>Read the full article on Woodbury News Net</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Photo Column */}
            <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full bg-slate-100 dark:bg-zinc-900 overflow-hidden order-1 lg:order-2">
              <img
                src={articleImage}
                alt="Mujeeb Chaudhry, Neil Kaila, and Harshad Amalan presenting Spendora to their classmates"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
                <p className="text-[11px] font-medium text-white/90 leading-tight">
                  Mujeeb Chaudhry, Neil Kaila & Harshad Amalan presenting at East Ridge High School. Photo: Mujeeb Chaudhry
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default memo(PressSection);
