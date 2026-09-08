import { memo } from "react";
import { ArrowRight, Smartphone, School, Building2, Globe, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface SchoolPartner {
  name: string;
  type: string;
  location: string;
  focus: string;
  link?: string;
  isExternal?: boolean;
}

const schoolPartners: SchoolPartner[] = [
  {
    name: "Doon Public School",
    type: "CBSE Senior Secondary",
    location: "Sector 21, Panchkula, Haryana, India",
    focus: "Auditorium financial literacy programme empowering Classes XI & XII with essential investing, risk tolerance curves, and money management skills.",
    link: "/gallery#doon-school",
  },
  {
    name: "R.H. Stafford Library",
    type: "Community Host & Venue",
    location: "Woodbury, Minnesota, USA",
    focus: "Premier Washington County public library hosting free, interactive in-person workshops for local high school and middle school students.",
    link: "https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc",
    isExternal: true,
  },
  {
    name: "Sri Girdhar Techno School",
    type: "Rural Outreach Partner",
    location: "Rural India",
    focus: "Delivering foundational savings curriculum, interactive budgeting exercises, and money habits to rural classroom learners.",
    link: "/gallery#indian-school",
  },
  {
    name: "Ram Krishna Dwarika School",
    type: "High School Partner",
    location: "Patna, Bihar, India",
    focus: "Conducting structured classroom seminars on compound growth, banking fundamentals, and early investing strategies.",
    link: "/gallery#ram-krishna-school",
  },
];

interface PartnersSectionProps {
  compact?: boolean;
}

const PartnersSection = ({ compact = false }: PartnersSectionProps) => {
  return (
    <section
      className={`relative z-10 ${compact ? "py-8" : "py-24 px-6"}`}
      id="partners"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-5xl mx-auto">
        {!compact && (
          <div className="mb-12">
            <h2
              id="partners-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight font-manrope mb-3"
            >
              Partners & Collaborations
            </h2>
            <p className="text-base text-slate-600 dark:text-zinc-400 font-medium max-w-2xl">
              From our local home library in Minnesota to school auditoriums and youth app partners abroad, here's who helps make Spendora free and accessible.
            </p>
          </div>
        )}

        {/* Featured International App Partner: Spendora Nigeria */}
        <div className="mb-8 border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-zinc-950 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-2">
                <Smartphone className="w-3.5 h-3.5" /> Confirmed Mobile Partnership
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white font-manrope mb-2">
                Spendora Nigeria
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 font-medium leading-relaxed">
                Official international app collaboration expanding Spendora's interactive financial tools, mobile budgeting calculators, and student education modules to youth across Nigeria.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-zinc-800 shadow-xs">
              <Globe className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>International Youth Outreach</span>
            </div>
          </div>
        </div>

        {/* School & Venue Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schoolPartners.map((partner, i) => (
            <div
              key={i}
              className="border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400 mb-2">
                  <span className="font-semibold text-emerald-800 dark:text-emerald-400">{partner.type}</span>
                  <span>{partner.location}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white font-manrope mb-2">
                  {partner.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium leading-relaxed mb-4">
                  {partner.focus}
                </p>
              </div>

              {partner.link && (
                <div className="pt-3 border-t border-slate-100 dark:border-white/5">
                  {partner.isExternal ? (
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      <span>Venue details</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={partner.link}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 hover:underline"
                    >
                      <span>View workshop photos</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(PartnersSection);
