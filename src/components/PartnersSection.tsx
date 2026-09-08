import { memo } from "react";
import { Handshake, Smartphone, Building2, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Partner {
  name: string;
  category: string;
  role: string;
  description: string;
  location: string;
  icon: typeof Handshake;
  color: string;
  bg: string;
  link?: string;
  badgeText?: string;
}

const partners: Partner[] = [
  {
    name: "Spendora Nigeria",
    category: "App Partnership",
    role: "International App & Youth Expansion",
    description: "Official confirmed app partnership deploying interactive financial tools, mobile budgeting resources, and digital education to students across Nigeria.",
    location: "Nigeria (International)",
    icon: Smartphone,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50",
    badgeText: "Confirmed App Partner",
  },
  {
    name: "R.H. Stafford Library",
    category: "Host & Venue Partner",
    role: "Community Workshop Venue",
    description: "Woodbury's premier public library, providing welcoming community spaces, presentation rooms, and resources for our free in-person workshops.",
    location: "Woodbury, MN",
    icon: Building2,
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-800/50",
    link: "https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc",
    badgeText: "Host Venue",
  },
  {
    name: "Doon Public School",
    category: "School Partner",
    role: "Senior Secondary Financial Literacy",
    description: "Auditorium-wide financial literacy programme empowering Classes XI & XII with essential investing, risk tolerance, and money management skills.",
    location: "Panchkula, Haryana, India",
    icon: GraduationCap,
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/50",
    link: "/gallery#doon-school",
    badgeText: "CBSE Affiliated",
  },
  {
    name: "Sri Girdhar Techno School",
    category: "School Partner",
    role: "Rural Educational Outreach",
    description: "Partnering to deliver interactive financial curriculum, money basics, and savings strategies directly into rural Indian classrooms.",
    location: "Rural India",
    icon: GraduationCap,
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/50",
    link: "/gallery#indian-school",
    badgeText: "Classroom Partner",
  },
  {
    name: "Ram Krishna Dwarika School",
    category: "School Partner",
    role: "Classroom Workshop Partner",
    description: "Empowering students through structured classroom sessions covering saving vs. investing, economic fundamentals, and personal budgeting.",
    location: "India",
    icon: GraduationCap,
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800/50",
    link: "/gallery#ram-krishna-school",
    badgeText: "Classroom Partner",
  },
];

interface PartnersSectionProps {
  compact?: boolean;
}

const PartnersSection = ({ compact = false }: PartnersSectionProps) => {
  return (
    <section className={`relative z-10 ${compact ? 'py-8' : 'py-20 px-6'}`} id="partners" aria-labelledby="partners-heading">
      <div className="max-w-5xl mx-auto">
        {!compact && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Handshake className="w-3.5 h-3.5" /> Our Network
            </div>
            <h2 id="partners-heading" className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4">
              Partners & <span className="text-emerald-700 dark:text-[#52b788]">Collaborations</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
              From our home library in Minnesota to classroom and mobile app partners abroad, here's who helps make Spendora free and accessible.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col justify-between p-6 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-md hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-white/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`p-2.5 rounded-xl border ${p.bg} ${p.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    {p.badgeText && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                        {p.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope group-hover:text-emerald-700 dark:group-hover:text-[#52b788] transition-colors mb-1">
                    {p.name}
                  </h3>
                  <div className="text-xs font-semibold text-emerald-700 dark:text-[#52b788] mb-2">
                    {p.role}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-medium mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-zinc-500">
                  <span>{p.location}</span>
                  {p.link && (
                    p.link.startsWith('/') ? (
                      <Link to={p.link} className="inline-flex items-center gap-1 text-emerald-700 dark:text-[#52b788] hover:underline">
                        View <ArrowRight className="w-3 h-3" />
                      </Link>
                    ) : (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-700 dark:text-[#52b788] hover:underline">
                        Details <ArrowRight className="w-3 h-3" />
                      </a>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(PartnersSection);
