import { useState } from "react";
import { Globe, MapPin, Users, ArrowRight, Camera, GraduationCap, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";

interface FootprintLocation {
  id: string;
  region: string;
  country: string;
  flag: string;
  type: string;
  title: string;
  subtitle: string;
  statNumber: string;
  statLabel: string;
  highlights: string[];
  galleryLink?: string;
}

const locations: FootprintLocation[] = [
  {
    id: "usa",
    region: "Woodbury, Minnesota",
    country: "United States",
    flag: "🇺🇸",
    type: "Founding Headquarters & In-Person Sessions",
    title: "R.H. Stafford Library & East Ridge High School",
    subtitle: "Community library presentation halls & local school workshops",
    statNumber: "300+",
    statLabel: "Local Students Trained",
    highlights: [
      "In-person weekend workshops at Woodbury's central library",
      "Interactive stock trend prediction games & Roth IRA walkthroughs",
      "Free workbooks, financial guides, calculators, and snacks for all attendees",
    ],
    galleryLink: "/gallery#local",
  },
  {
    id: "india-doon",
    region: "Panchkula, Haryana",
    country: "India",
    flag: "🇮🇳",
    type: "Senior Secondary Auditorium Programme",
    title: "Doon Public School (Sector 21)",
    subtitle: "CBSE Affiliated Senior Secondary Institution",
    statNumber: "250+",
    statLabel: "Auditorium Attendees",
    highlights: [
      "Auditorium-wide seminar delivered to Classes XI and XII",
      "Covering risk vs return trade-offs, compound math, and bank accounts",
      "Full photo and live video documentation in the gallery",
    ],
    galleryLink: "/gallery#doon-school",
  },
  {
    id: "india-rural",
    region: "Patna, Bihar & Rural Outreach",
    country: "India",
    flag: "🇮🇳",
    type: "Classroom Educational Outreach",
    title: "Sri Girdhar Techno School & Ram Krishna Dwarika School",
    subtitle: "Classroom financial literacy sessions across multiple states",
    statNumber: "1,750+",
    statLabel: "Classroom Students Reached",
    highlights: [
      "Hands-on money games and budgeting worksheets in rural classrooms",
      "Step-by-step guidance on personal savings and family budgeting",
      "Interactive question and answer discussions with video recordings",
    ],
    galleryLink: "/gallery#indian-school",
  },
  {
    id: "nigeria",
    region: "Lagos & Nationwide",
    country: "Nigeria",
    flag: "🇳🇬",
    type: "Confirmed Mobile App Collaboration",
    title: "Spendora Nigeria",
    subtitle: "International Youth Mobile Outreach",
    statNumber: "Mobile",
    statLabel: "Digital Tools & Outreach",
    highlights: [
      "Expanding Spendora's interactive budgeting tools to African youth",
      "Mobile-first calculations for student savings and currency basics",
      "Partnering with local student ambassadors to extend global reach",
    ],
    galleryLink: "/#partners",
  },
];

export const GlobalFootprintSection = () => {
  const [activeTab, setActiveTab] = useState<string>("usa");

  const selectedLocation = locations.find((loc) => loc.id === activeTab) || locations[0];

  return (
    <section className="relative z-10 py-20 px-6" id="global-footprint" aria-labelledby="footprint-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Globe className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" />
            Global Reach
          </div>
          <h2
            id="footprint-heading"
            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight font-manrope mb-4"
          >
            Where We <span className="text-emerald-700 dark:text-[#52b788]">Teach</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Started by three high schoolers in Woodbury, Minnesota. Now empowering students in community libraries, international auditoriums, and mobile apps.
          </p>
        </div>

        {/* Region Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveTab(loc.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                activeTab === loc.id
                  ? "border-emerald-600 bg-white dark:bg-zinc-900 dark:border-emerald-500 shadow-lg ring-2 ring-emerald-600/20"
                  : "border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-zinc-950/60 hover:bg-white dark:hover:bg-zinc-900"
              }`}
            >
              <div className="text-xl mb-1">{loc.flag}</div>
              <div className="text-xs font-extrabold text-slate-900 dark:text-white truncate">
                {loc.region}
              </div>
              <div className="text-[11px] font-semibold text-emerald-700 dark:text-[#52b788] truncate mt-0.5">
                {loc.statNumber} {loc.statLabel.split(" ")[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Hub Feature Card */}
        <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-base">{selectedLocation.flag}</span>
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-[#52b788]">
                  {selectedLocation.type}
                </span>
                <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
                  {selectedLocation.country}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-manrope">
                  {selectedLocation.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mt-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-[#52b788] shrink-0" />
                  <span>{selectedLocation.subtitle}</span>
                </p>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                {selectedLocation.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-[#52b788] mt-2 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {selectedLocation.galleryLink && (
                <div className="pt-4">
                  <Link
                    to={selectedLocation.galleryLink}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-900 text-white text-xs font-bold transition-all shadow-md"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>View Workshop Photos & Media</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Metric Box */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-800 via-emerald-900 to-[#122e23] dark:from-[#24533e] dark:via-[#193d2e] dark:to-[#0f241c] text-white text-center shadow-lg">
              <Users className="w-8 h-8 mx-auto text-emerald-300 mb-2 opacity-90" />
              <div className="text-4xl sm:text-5xl font-black font-manrope tracking-tight tabular-nums">
                {selectedLocation.statNumber}
              </div>
              <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider mt-1">
                {selectedLocation.statLabel}
              </div>
              <p className="text-[11px] text-emerald-100/80 font-medium mt-3 leading-relaxed">
                Empowering students with practical investing and budgeting habits that schools overlook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalFootprintSection;
