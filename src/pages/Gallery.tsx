import { useState, useEffect, useCallback } from "react";
import { 
  ArrowLeft, 
  Play, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  caption: string;
  section: "local" | "india";
  schoolOrSession: string;
  date: string;
}

// Media Data
const doonSchoolMedia: MediaItem[] = [
  {
    id: "doon-v1",
    type: "video",
    src: "https://files.catbox.moe/ueqz03.mp4",
    alt: "Doon Public School Workshop Live Auditorium Session",
    title: "Auditorium Live Highlights",
    caption: "Live video recording of senior secondary students gathered in the auditorium during the seminar in Panchkula, India.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-1",
    type: "image",
    src: "/lovable-uploads/doon-school-1.jpg",
    alt: "Doon Public School Financial Literacy Programme Slide",
    title: "Presentation Slide",
    caption: "Projector screen announcing the financial literacy programme for Classes XI and XII, in collaboration with Spendora.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-2",
    type: "image",
    src: "/lovable-uploads/doon-school-2.jpg",
    alt: "Full Auditorium Session at Doon Public School",
    title: "Auditorium Overview",
    caption: "Over 250 students in Classes XI and XII attending the financial literacy session in Panchkula.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-3",
    type: "image",
    src: "/lovable-uploads/doon-school-3.jpg",
    alt: "Student Q&A with Microphone",
    title: "Student Q&A Session",
    caption: "A Class XI student asking a question with a microphone during the risk management segment.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-4",
    type: "image",
    src: "/lovable-uploads/doon-school-4.jpg",
    alt: "Interactive Discussion with Speaker",
    title: "Interactive Discussion",
    caption: "A student speaker engaging directly with the front rows on real-world compounding examples.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-5",
    type: "image",
    src: "/lovable-uploads/doon-school-5.jpg",
    alt: "Auditorium Floor View During Workshop",
    title: "Attentive Classroom Audience",
    caption: "Wide shot showing the rows of high school students listening closely to the core investing modules.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-6",
    type: "image",
    src: "/lovable-uploads/doon-school-6.jpg",
    alt: "Classes XI and XII at Doon Public School",
    title: "Auditorium Perspective",
    caption: "Side balcony perspective of the full auditorium session in Panchkula.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-7",
    type: "image",
    src: "/lovable-uploads/doon-school-7.jpg",
    alt: "Auditorium Stage View",
    title: "Workshop Stage View",
    caption: "Overview from the back of the auditorium showing the projector screen and student participation.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
];

const sriGirdharMedia: MediaItem[] = [
  {
    id: "sri-girdhar-1",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-1.jpg",
    alt: "Students holding Spendora financial certificates",
    title: "Certificate Presentation",
    caption: "Students proudly displaying their completed course certificates after the personal finance workshop.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-2",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-2.jpg",
    alt: "Classroom teaching session at Sri Girdhar Techno School",
    title: "Classroom Instruction",
    caption: "Interactive blackboard lesson breaking down how stocks, companies, and simple budgeting habits work.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-3",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-3.jpg",
    alt: "Student group photo with instructor in classroom",
    title: "Workshop Group Photo",
    caption: "Classroom group portrait of students and session instructor following the budgeting segment.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-4",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-4.jpg",
    alt: "Students reviewing course materials at desks",
    title: "Curriculum Review",
    caption: "Students working through printed Spendora lesson handouts and practical exercises.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-5",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-5.jpg",
    alt: "Students seated at classroom desks during lecture",
    title: "Lecture Session",
    caption: "Students focused during the personal finance and savings concepts discussion.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-6",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-6.jpg",
    alt: "Instructor explaining financial literacy at whiteboard",
    title: "Board Breakdown",
    caption: "Instructor detailing compound interest and monthly savings allocations on the whiteboard.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-7",
    type: "image",
    src: "/lovable-uploads/sri-girdhar-7.jpg",
    alt: "Students holding certificates in classroom setting",
    title: "Course Completion",
    caption: "Celebrating student accomplishments with certificates recognizing their active participation.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-v1",
    type: "video",
    src: "https://files.catbox.moe/p4b65x.mp4",
    alt: "Students reviewing certificates on camera",
    title: "Student Reactions",
    caption: "Short video clip showing students sharing their excitement after completing the Spendora workshop.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-v2",
    type: "video",
    src: "https://files.catbox.moe/5v4pve.mp4",
    alt: "Live classroom financial literacy session clip",
    title: "Live Classroom Session",
    caption: "Footage of active teaching in session with students following along on the board.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-v3",
    type: "video",
    src: "https://files.catbox.moe/lcecw2.mp4",
    alt: "Classroom presentation video clip",
    title: "Curriculum Walkthrough",
    caption: "Instructor explaining real-life budgeting examples and answering questions from the room.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-v4",
    type: "video",
    src: "https://files.catbox.moe/j91g88.mp4",
    alt: "Workshop discussion video clip",
    title: "Group Activity Clip",
    caption: "Quick clip of students discussing savings targets in small teams.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sri-girdhar-v5",
    type: "video",
    src: "https://files.catbox.moe/5144b6.mp4",
    alt: "Post-session student celebration clip",
    title: "Celebration Clip",
    caption: "Students celebrating the end of the module with their instructor.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
];

const ramKrishnaMedia: MediaItem[] = [
  {
    id: "ram-krishna-1",
    type: "image",
    src: "/lovable-uploads/ram-krishna-1.jpg",
    alt: "Students holding certificates with school leadership",
    title: "Certificate Award Ceremony",
    caption: "Students and administration commemorating the successful completion of the financial literacy workshop in Patna, Bihar.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
    date: "Nov 2024",
  },
  {
    id: "ram-krishna-2",
    type: "image",
    src: "/lovable-uploads/ram-krishna-2.jpg",
    alt: "Instructor presenting lesson at whiteboard in Patna",
    title: "Interactive Classroom Seminar",
    caption: "Hands-on instruction introducing the fundamentals of saving, budgeting, and long-term asset building.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
    date: "Nov 2024",
  },
];

const localSession1Media: MediaItem[] = [
  {
    id: "session-1-1",
    type: "image",
    src: "/lovable-uploads/session-1-1.jpg",
    alt: "Founders presenting at R.H. Stafford Library",
    title: "Session 1 Kickoff",
    caption: "Mujeeb, Harshad, and Neil welcoming students to the inaugural workshop at the R.H. Stafford Library in Woodbury, MN.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-2",
    type: "image",
    src: "/lovable-uploads/session-1-2.jpg",
    alt: "Student team collaborating on trading simulation",
    title: "Interactive Trading Game",
    caption: "Students testing their market instincts in real time using paper-trading allocations.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-3",
    type: "image",
    src: "/lovable-uploads/session-1-3.jpg",
    alt: "Founders guiding students through stock chart analysis",
    title: "Stock Chart Walkthrough",
    caption: "Breaking down candlestick charts, market caps, and what moves price action day to day.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-4",
    type: "image",
    src: "/lovable-uploads/session-1-4.jpg",
    alt: "Hands-on portfolio building session",
    title: "Portfolio Workshop",
    caption: "Students choosing diversified index funds and learning the difference between stocks and ETFs.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-5",
    type: "image",
    src: "/lovable-uploads/session-1-5.jpg",
    alt: "Classroom overview during Session 1 lecture",
    title: "Classroom Discussion",
    caption: "Full room at R.H. Stafford Library reviewing the power of compound interest and time horizons.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-6",
    type: "image",
    src: "/lovable-uploads/session-1-6.jpg",
    alt: "Small group mentoring with Spendora founders",
    title: "1-on-1 Mentoring",
    caption: "Founders answering specific questions about custodial accounts and getting started before 18.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-7",
    type: "image",
    src: "/lovable-uploads/session-1-7.jpg",
    alt: "Student reviewing printed budgeting worksheet",
    title: "Practical Exercises",
    caption: "Students filling out their first real monthly cash flow and saving sheets.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "session-1-8",
    type: "image",
    src: "/lovable-uploads/session-1-8.jpg",
    alt: "End-of-session group photo at R.H. Stafford Library",
    title: "Session 1 Cohort",
    caption: "The first cohort of Woodbury students completing the Intro to Investing workshop.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
];

const localSession2Media: MediaItem[] = [
  {
    id: "session-2-1",
    type: "image",
    src: "/lovable-uploads/session-2-1.jpg",
    alt: "Session 2 presentation on saving vs investing",
    title: "Saving vs Investing",
    caption: "Exploring when cash in a high-yield savings account makes sense compared to index funds.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "session-2-2",
    type: "image",
    src: "/lovable-uploads/session-2-2.jpg",
    alt: "Students examining Roth IRA and compound growth models",
    title: "Roth IRA Deep Dive",
    caption: "Walking through how tax-free growth in a Roth IRA can compound over 40 years.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "session-2-3",
    type: "image",
    src: "/lovable-uploads/session-2-3.jpg",
    alt: "Team case study on teenage budgeting challenges",
    title: "Budgeting Case Studies",
    caption: "Solving realistic high school money scenarios: car insurance, gas, eating out, and saving.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "session-2-4",
    type: "image",
    src: "/lovable-uploads/session-2-4.jpg",
    alt: "Interactive Q&A on side hustles and digital ventures",
    title: "Side Hustles & Ventures",
    caption: "Discussing digital commerce, freelancing, and turning part-time income into investments.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "session-2-v1",
    type: "video",
    src: "https://files.catbox.moe/k3l0w8.mp4",
    alt: "Session 2 live classroom video snippet",
    title: "Session 2 Highlights",
    caption: "Live clip from our second in-person workshop at the R.H. Stafford Library.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "session-2-v2",
    type: "video",
    src: "https://files.catbox.moe/5v4pve.mp4",
    alt: "Student discussion during Session 2",
    title: "Classroom Discussion Clip",
    caption: "Students reviewing their 50/30/20 budget allocations with workshop instructors.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
];

type TabType = "all" | "india" | "local";

export const Gallery = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabType>("all");

  const [lightboxState, setLightboxState] = useState<{
    items: MediaItem[];
    currentIndex: number;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workshop Gallery | Spendora";
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxState) return;
      if (e.key === "Escape") {
        setLightboxState(null);
      } else if (e.key === "ArrowLeft") {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.items.length) % prev.items.length,
              }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setLightboxState((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.items.length,
              }
            : null
        );
      }
    },
    [lightboxState]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (items: MediaItem[], index: number) => {
    setLightboxState({ items, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightboxState(null);
  };

  const nextLightboxItem = () => {
    if (!lightboxState) return;
    setLightboxState({
      ...lightboxState,
      currentIndex: (lightboxState.currentIndex + 1) % lightboxState.items.length,
    });
  };

  const prevLightboxItem = () => {
    if (!lightboxState) return;
    setLightboxState({
      ...lightboxState,
      currentIndex:
        (lightboxState.currentIndex - 1 + lightboxState.items.length) %
        lightboxState.items.length,
    });
  };

  // Clean, visual image & video grid
  const renderMediaGrid = (items: MediaItem[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
      {items.map((item, idx) => (
        <div
          key={item.id}
          onClick={() => openLightbox(items, idx)}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/50 dark:hover:border-emerald-400/40"
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="relative w-full h-full bg-black">
              <video
                src={item.src}
                preload="metadata"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
              />
              
              {/* Floating Video Tag */}
              <div className="absolute top-2.5 left-2.5 z-10 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Video</span>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-600/90 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500 transition-all shadow-xl">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-white" />
                </div>
              </div>
            </div>
          )}

          {/* Hover Expand Icon for Images */}
          {item.type === "image" && (
            <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md text-white border border-white/15">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>
          )}

          {/* Bottom Scrim & Title */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none">
            <span className="text-xs sm:text-sm font-bold font-manrope line-clamp-1">
              {item.title}
            </span>
            <span className="text-[10px] sm:text-xs text-white/80 mt-0.5">
              {item.type === "video" ? "Click to play recording" : "Click to view fullscreen"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-4 sm:px-6">
      
      {/* Background Atmosphere */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5eee8] via-[#fdfbfa] to-background dark:from-[#071a12] dark:to-black" />
        <div className="absolute top-0 left-0 w-[1px] h-[1px] bg-transparent stars-1 animate-[animStar_50s_linear_infinite]" />
        <div className="absolute top-0 left-0 w-[2px] h-[2px] bg-transparent stars-2 animate-[animStar_80s_linear_infinite]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-500/10 dark:bg-emerald-700/5 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Navigation back */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        {/* Clean Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-2">
            Workshop Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl font-medium">
            Photos and video highlights from our student workshops in Minnesota and India.
          </p>
        </div>

        {/* Clean Region Filter Tabs */}
        <div className="flex items-center gap-2 mb-12 pb-4 border-b border-slate-200/80 dark:border-white/10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "all"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                : "bg-white/80 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-slate-400"
            }`}
          >
            All Workshops
          </button>

          <button
            onClick={() => setActiveTab("india")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "india"
                ? "bg-emerald-800 text-white dark:bg-emerald-700 shadow-sm"
                : "bg-white/80 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-slate-400"
            }`}
          >
            India
          </button>

          <button
            onClick={() => setActiveTab("local")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "local"
                ? "bg-emerald-800 text-white dark:bg-emerald-700 shadow-sm"
                : "bg-white/80 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-zinc-300 hover:border-slate-400"
            }`}
          >
            Minnesota Local
          </button>
        </div>

        {/* ======================================================== */}
        {/* INDIA OUTREACH & SCHOOLS */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "india") && (
          <section id="india" className="space-y-12 mb-16 scroll-mt-28">
            
            {/* School 1: Doon Public School */}
            <div id="doon-school" className="scroll-mt-28">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Doon Public School
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Sector 21, Panchkula, Haryana, India • Senior Secondary Seminar
                  </p>
                </div>
              </div>
              {renderMediaGrid(doonSchoolMedia)}
            </div>

            {/* School 2: Sri Girdhar Techno School */}
            <div id="indian-school" className="scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Sri Girdhar Techno School
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Rural Outreach Partner • India
                  </p>
                </div>
              </div>
              {renderMediaGrid(sriGirdharMedia)}
            </div>

            {/* School 3: Ram Krishna Dwarika School */}
            <div id="ram-krishna-school" className="scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Ram Krishna Dwarika School
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Patna, Bihar, India • High School Workshops
                  </p>
                </div>
              </div>
              {renderMediaGrid(ramKrishnaMedia)}
            </div>

          </section>
        )}

        {/* ======================================================== */}
        {/* LOCAL WORKSHOPS (MINNESOTA) */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "local") && (
          <section id="local" className="space-y-12 mb-16 scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
            
            {/* Session 1 */}
            <div id="session-1" className="scroll-mt-28">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Session 1: Intro to Investing
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    R.H. Stafford Library • Woodbury, MN
                  </p>
                </div>
              </div>
              {renderMediaGrid(localSession1Media)}
            </div>

            {/* Session 2 */}
            <div id="session-2" className="scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Session 2: Saving vs. Investing
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    R.H. Stafford Library • Woodbury, MN
                  </p>
                </div>
              </div>
              {renderMediaGrid(localSession2Media)}
            </div>

          </section>
        )}

        {/* Quiet Footer Links */}
        <div className="mt-16 pt-8 border-t border-slate-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 dark:text-zinc-400">
          <span>Looking to bring Spendora to your school or library?</span>
          <div className="flex items-center gap-4">
            <Link to="/#partners" className="hover:text-emerald-700 dark:hover:text-white underline">
              View Partners
            </Link>
            <Link to="/#faq" className="hover:text-emerald-700 dark:hover:text-white underline">
              FAQ
            </Link>
            <Link to="/" className="hover:text-emerald-700 dark:hover:text-white underline">
              Home
            </Link>
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* FULLSCREEN LIGHTBOX MODAL */}
      {/* ======================================================== */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
                {lightboxState.currentIndex + 1} / {lightboxState.items.length}
              </span>
              <span className="text-xs font-bold text-emerald-400 hidden sm:inline">
                {lightboxState.items[lightboxState.currentIndex].schoolOrSession}
              </span>
            </div>
            
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close fullscreen"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          {lightboxState.items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevLightboxItem();
              }}
              className="absolute left-3 sm:left-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 cursor-pointer"
              aria-label="Previous item"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Media Container */}
          <div
            className="relative max-w-4xl max-h-[82vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxState.items[lightboxState.currentIndex].type === "image" ? (
              <img
                src={lightboxState.items[lightboxState.currentIndex].src}
                alt={lightboxState.items[lightboxState.currentIndex].alt}
                className="max-h-[68vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            ) : (
              <video
                src={lightboxState.items[lightboxState.currentIndex].src}
                controls
                autoPlay
                className="max-h-[68vh] max-w-full rounded-xl shadow-2xl bg-black"
              />
            )}

            {/* Caption & Metadata */}
            <div className="w-full mt-4 text-center text-white max-w-2xl px-4">
              <h3 className="text-base sm:text-lg font-extrabold font-manrope">
                {lightboxState.items[lightboxState.currentIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed">
                {lightboxState.items[lightboxState.currentIndex].caption}
              </p>
              <div className="flex items-center justify-center gap-3 mt-2 text-[11px] text-zinc-400">
                <span>{lightboxState.items[lightboxState.currentIndex].schoolOrSession}</span>
                <span>•</span>
                <span>{lightboxState.items[lightboxState.currentIndex].date}</span>
              </div>
            </div>
          </div>

          {/* Next Button */}
          {lightboxState.items.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextLightboxItem();
              }}
              className="absolute right-3 sm:right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-10 cursor-pointer"
              aria-label="Next item"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}
        </div>
      )}

    </div>
  );
};

export default Gallery;
