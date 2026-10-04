import { memo } from "react";
import { Newspaper, ExternalLink, ArrowRight } from "lucide-react";

export interface Publication {
  outlet: string;
  title: string;
  tag: string;
  date: string;
  url: string;
  summary: string;
}

export const publications: Publication[] = [
  {
    outlet: "SoWashCo Schools News",
    title: "The Spendora Effect",
    tag: "District Feature",
    date: "Sept 30, 2026",
    url: "https://www.sowashco.org/about-us/news/article/~board/news/post/the-spendora-effect",
    summary: "East Ridge High School students turn a passion project into an international financial literacy movement.",
  },
  {
    outlet: "The Spectrum (NDSU)",
    title: "High School Founders Bring Peer-to-Peer Approach to Financial Literacy",
    tag: "University Press",
    date: "Sept 16, 2026",
    url: "https://ndsuspectrum.com/article/high-school-founders-bring-peer-to-peer-approach-to-financial-literacy",
    summary: "Spotlight on Spendora's peer-to-peer model teaching practical investing and money skills schools skip.",
  },
  {
    outlet: "Woodbury News Net",
    title: "Three East Ridge High School Students Create Financial Literacy Initiative for Their Community",
    tag: "Community News",
    date: "Sept 2, 2026",
    url: "https://woodburynewsnet.org/7897/schools/three-east-ridge-high-school-students-create-financial-literacy-initiative-for-their-community/",
    summary: "Local reporting on Harshad, Mujeeb, and Neil hosting free library workshops for Woodbury students.",
  },
];

const FeaturedIn = () => {
  return (
    <div className="flex flex-col justify-between h-full space-y-5">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-[#40916c]/20 border border-emerald-200 dark:border-[#40916c]/40 text-emerald-700 dark:text-[#52b788] flex items-center justify-center shrink-0">
              <Newspaper className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white font-manrope">Featured In</h3>
              <p className="text-xs font-semibold text-emerald-700 dark:text-[#52b788]">Press & Media Coverage</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-white/10 text-emerald-800 dark:text-[#52b788] rounded-full border border-emerald-200/60 dark:border-white/10">
            3 Features
          </span>
        </div>

        {/* Publications List */}
        <div className="space-y-2.5">
          {publications.map((pub, i) => (
            <a
              key={i}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start justify-between gap-3 p-3.5 rounded-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/50 hover:border-emerald-500/40 dark:hover:border-emerald-500/30 hover:bg-emerald-50/40 dark:hover:bg-zinc-800/60 transition-all cursor-pointer"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-zinc-200 group-hover:text-emerald-700 dark:group-hover:text-[#52b788] transition-colors">
                    {pub.outlet}
                  </span>
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-slate-200/80 dark:bg-zinc-800 text-slate-700 dark:text-zinc-400 rounded-full shrink-0">
                    {pub.tag}
                  </span>
                  <span className="text-[11px] text-slate-400 dark:text-zinc-500 hidden sm:inline">
                    · {pub.date}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-700 dark:text-zinc-300 line-clamp-1">
                  "{pub.title}"
                </p>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 line-clamp-1 mt-0.5">
                  {pub.summary}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 dark:text-zinc-500 group-hover:text-emerald-600 dark:group-hover:text-[#52b788] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
        <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">
          Independent student & local reporting
        </span>
        <a
          href="#press"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs font-bold text-emerald-700 dark:text-[#52b788] hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
        >
          View Spotlight <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};

export default memo(FeaturedIn);
