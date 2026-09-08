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

// Media Data with Verified File Paths
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
    id: "sg-1",
    type: "image",
    src: "/lovable-uploads/indian-school-1.jpg",
    alt: "Teaching students at Sri Girdhar Techno School",
    title: "Foundational Money Basics",
    caption: "Introducing basic currency, budgeting, and savings concepts to rural school students.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-2",
    type: "image",
    src: "/lovable-uploads/indian-school-2.jpg",
    alt: "Students learning financial concepts in a rural classroom",
    title: "Interactive Classroom Session",
    caption: "Explaining how saving early generates compound growth and financial resilience.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-3",
    type: "image",
    src: "/lovable-uploads/indian-school-3.jpg",
    alt: "Interactive presentation at rural Indian school",
    title: "Hands-on Discussion",
    caption: "Students actively responding to personal money management prompts.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-4",
    type: "image",
    src: "/lovable-uploads/indian-school-4.jpg",
    alt: "Engaged students at rural school",
    title: "Active Learning",
    caption: "Young learners participating in Spendora's step-by-step financial curriculum.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-5",
    type: "image",
    src: "/lovable-uploads/indian-school-5.jpg",
    alt: "Full rural classroom",
    title: "Full Classroom Attendance",
    caption: "Crowded classroom of students focused on learning practical money skills.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-6",
    type: "image",
    src: "/lovable-uploads/indian-school-6.jpg",
    alt: "Financial literacy in progress at rural school",
    title: "Curriculum in Action",
    caption: "Breaking down financial habits into accessible, memorable everyday rules.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-7",
    type: "image",
    src: "/lovable-uploads/indian-school-7.jpg",
    alt: "Students participating in rural workshop",
    title: "Student Participation",
    caption: "Students sharing their savings goals and aspirations with the class.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-v1",
    type: "video",
    src: "/lovable-uploads/indian-school-video-1.mov",
    alt: "Rural School Workshop Video 1",
    title: "Classroom Interaction Highlight 1",
    caption: "Live video highlight of students participating in financial games and questions.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-v2",
    type: "video",
    src: "https://files.catbox.moe/my1k56.MOV",
    alt: "Rural School Workshop Video 2",
    title: "Classroom Interaction Highlight 2",
    caption: "Students answering questions about money basics and family budgeting.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-v3",
    type: "video",
    src: "https://files.catbox.moe/xxvohu.MOV",
    alt: "Rural School Workshop Video 3",
    title: "Classroom Interaction Highlight 3",
    caption: "Demonstrating how saving small amounts regularly creates financial security.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-v4",
    type: "video",
    src: "https://files.catbox.moe/p5qi4y.MOV",
    alt: "Rural School Workshop Video 4",
    title: "Classroom Interaction Highlight 4",
    caption: "Interactive question and answer session with rural students.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
  {
    id: "sg-v5",
    type: "video",
    src: "https://files.catbox.moe/mz2ov5.MOV",
    alt: "Rural School Workshop Video 5",
    title: "Classroom Interaction Highlight 5",
    caption: "Session wrap-up and student reactions at Sri Girdhar Techno School.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    date: "Oct 2024",
  },
];

const ramKrishnaMedia: MediaItem[] = [
  {
    id: "rk-1",
    type: "image",
    src: "/lovable-uploads/ram-krishna-school-1.jpg",
    alt: "Teaching at Ram Krishna Dwarika School",
    title: "Financial Literacy Classroom Session",
    caption: "Delivering Spendora's personal finance and budgeting curriculum to high school students in Patna.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
    date: "Nov 2024",
  },
  {
    id: "rk-2",
    type: "image",
    src: "/lovable-uploads/ram-krishna-school-2.jpg",
    alt: "Students learning at Ram Krishna School",
    title: "Engaged Classroom Learners",
    caption: "Students actively following the presentation on saving vs. investing fundamentals.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
    date: "Nov 2024",
  },
];

const localSession1Media: MediaItem[] = [
  {
    id: "loc1-1",
    type: "image",
    src: "/lovable-uploads/857218ea-0cf3-4f24-8242-23e038e71457.png",
    alt: "Students learning about investing origins",
    title: "Origins of Stock Markets",
    caption: "Explaining historical origins of stock trading, shares, and how public capital works.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-2",
    type: "image",
    src: "/lovable-uploads/672fa77a-f981-49c2-b3ad-9ad462f1fb41.png",
    alt: "Presenter explaining financial charts",
    title: "Reading Market Charts & Trends",
    caption: "Live walkthrough of index funds, market cycles, and historical average returns.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-3",
    type: "image",
    src: "/lovable-uploads/43ffa40d-8361-401a-a4ef-2251c466a8f4.png",
    alt: "Interactive discussion about investments",
    title: "Student Investment Discussion",
    caption: "Collaborative discussion on stocks, mutual funds, and risk management strategies.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-4",
    type: "image",
    src: "/lovable-uploads/94b78fc9-f062-40b5-8e2e-977da26afeda.png",
    alt: "Setting up investment accounts",
    title: "Setting Up Custodial Accounts",
    caption: "Step-by-step guidance on how teens and parents open beginner investment accounts.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-5",
    type: "image",
    src: "/lovable-uploads/a9c673d3-410d-4593-a415-f9eaa6efbe74.png",
    alt: "Learning key economic terms",
    title: "Core Economic & Wealth Terms",
    caption: "Unpacking inflation, dividend yields, expense ratios, and asset allocation.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-6",
    type: "image",
    src: "/lovable-uploads/682cf84a-b680-4189-93ca-96be9f9ece99.png",
    alt: "Spendora's mission presentation",
    title: "Spendora Mission & Vision",
    caption: "Presenting Spendora's mission to bridge the financial knowledge gap for high schoolers.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-7",
    type: "image",
    src: "/lovable-uploads/9937f5f7-ec84-4a99-8719-715f1a743b92.png",
    alt: "Workshop conclusion",
    title: "Session Wrap-Up & Worksheets",
    caption: "Students completing workshop summary sheets and practical investment exercises.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
  {
    id: "loc1-8",
    type: "image",
    src: "/lovable-uploads/eabd20b0-ff60-4809-b6ca-6ef2878b3576.png",
    alt: "Learning about compound interest",
    title: "Power of Compound Interest",
    caption: "Visualizing the long-term difference between saving cash vs investing early in compound assets.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    date: "July 2024",
  },
];

const localSession2Media: MediaItem[] = [
  {
    id: "loc2-1",
    type: "image",
    src: "/lovable-uploads/1ee41063-a95d-4cb9-bcfd-ed9961525b86.png",
    alt: "Session 2 - Saving vs Investing",
    title: "Saving vs. Investing Framework",
    caption: "Analyzing liquidity, emergency reserves, high-yield savings accounts, and investment horizons.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "loc2-2",
    type: "image",
    src: "/lovable-uploads/7695d299-bbc3-48ce-a41e-954300708ffa.png",
    alt: "Students examining Roth IRA and compound growth models",
    title: "Roth IRA Deep Dive",
    caption: "Walking through how tax-free growth in a Roth IRA can compound over 40 years.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "loc2-3",
    type: "image",
    src: "/lovable-uploads/4089050e-e0a8-4630-9c75-511673fd035d.png",
    alt: "Team case study on teenage budgeting challenges",
    title: "Budgeting Case Studies",
    caption: "Solving realistic high school money scenarios: car insurance, gas, eating out, and saving.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "loc2-4",
    type: "image",
    src: "/lovable-uploads/0665f9c3-339d-4e49-bfc4-d6d00b95d8e6.png",
    alt: "Interactive Q&A on side hustles and digital ventures",
    title: "Side Hustles & Ventures",
    caption: "Discussing digital commerce, freelancing, and turning part-time income into investments.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "loc2-v1",
    type: "video",
    src: "https://files.catbox.moe/b7vufo.MOV",
    alt: "Session 2 live classroom video snippet",
    title: "Session 2 Highlights",
    caption: "Live clip from our second in-person workshop at the R.H. Stafford Library.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs. Investing",
    date: "Aug 2024",
  },
  {
    id: "loc2-v2",
    type: "video",
    src: "https://files.catbox.moe/o5monx.MOV",
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

  // Clean, visual image & video grid with auto poster frame
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
                src={`${item.src}#t=0.001`}
                preload="metadata"
                playsInline
                muted
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
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
              {item.type === "video" ? "Click to play video" : "Click to view fullscreen"}
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

        {/* Clean Header with Signature Underline */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-6xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-3">
            Workshop{" "}
            <span className="text-emerald-700 dark:text-[#52b788] inline-block relative">
              Gallery
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-emerald-500/40 dark:text-[#40916c] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-xl font-medium">
            Photos and video highlights from our student workshops in Minnesota and India.
          </p>
        </div>

        {/* Clean Filter Tabs */}
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
