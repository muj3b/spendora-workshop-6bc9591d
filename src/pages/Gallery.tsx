import { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
} from "lucide-react";
import { useLocation, useNavigate, Link } from "react-router-dom";

interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  caption: string;
  section: "local" | "india";
  schoolOrSession: string;
  date?: string;
}

// Media Data
const doonSchoolMedia: MediaItem[] = [
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
    id: "doon-v1",
    type: "video",
    src: "https://files.catbox.moe/v6lsc0.mp4",
    alt: "Doon Public School Workshop Video Highlights",
    title: "Live Video Highlights",
    caption: "Live video recording of senior secondary students gathered in the auditorium during the seminar.",
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
    alt: "Students reviewing Risk Tolerance chart",
    title: "Risk Tolerance Discussion",
    caption: "Students analyzing the risk vs return curve shown on the auditorium screen.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-5",
    type: "image",
    src: "/lovable-uploads/doon-school-5.jpg",
    alt: "Auditorium Audience Engaged",
    title: "Audience Perspective",
    caption: "Students taking notes and following along with compound growth concepts.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-6",
    type: "image",
    src: "/lovable-uploads/doon-school-6.jpg",
    alt: "Classes XI and XII at Doon Public School",
    title: "Hall Attendance",
    caption: "Senior secondary students actively participating in practical finance discussions.",
    section: "india",
    schoolOrSession: "Doon Public School",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-7",
    type: "image",
    src: "/lovable-uploads/doon-school-7.jpg",
    alt: "Presentation delivery to senior students",
    title: "Curriculum Delivery",
    caption: "Walking students through smart saving habits, compounding, and opening beginner investment accounts.",
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
  },
  {
    id: "sg-2",
    type: "image",
    src: "/lovable-uploads/indian-school-2.jpg",
    alt: "Students learning financial concepts in a rural classroom",
    title: "Interactive Classroom Session",
    caption: "Explaining how early saving builds long term financial security.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-3",
    type: "image",
    src: "/lovable-uploads/indian-school-3.jpg",
    alt: "Interactive presentation at rural Indian school",
    title: "Hands-on Discussion",
    caption: "Students responding to questions about family budgeting and expenses.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-4",
    type: "image",
    src: "/lovable-uploads/indian-school-4.jpg",
    alt: "Engaged students at rural school",
    title: "Active Learning",
    caption: "Young learners participating in step by step personal finance exercises.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-5",
    type: "image",
    src: "/lovable-uploads/indian-school-5.jpg",
    alt: "Full rural classroom",
    title: "Full Classroom Attendance",
    caption: "A crowded classroom of students eager to understand basic personal finance.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-6",
    type: "image",
    src: "/lovable-uploads/indian-school-6.jpg",
    alt: "Financial literacy in progress at rural school",
    title: "Curriculum in Action",
    caption: "Breaking down financial habits into simple, practical everyday rules.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-7",
    type: "image",
    src: "/lovable-uploads/indian-school-7.jpg",
    alt: "Students participating in rural workshop",
    title: "Student Participation",
    caption: "Students sharing their personal savings goals with the class.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-v1",
    type: "video",
    src: "/lovable-uploads/indian-school-video-1.mov",
    alt: "Rural School Workshop Video 1",
    title: "Classroom Highlight 1",
    caption: "Video recording of students participating in money games and questions.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-v2",
    type: "video",
    src: "https://files.catbox.moe/my1k56.MOV",
    alt: "Rural School Workshop Video 2",
    title: "Classroom Highlight 2",
    caption: "Students answering questions about money basics and household budgeting.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-v3",
    type: "video",
    src: "https://files.catbox.moe/xxvohu.MOV",
    alt: "Rural School Workshop Video 3",
    title: "Classroom Highlight 3",
    caption: "Demonstrating how setting aside small amounts regularly adds up over time.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-v4",
    type: "video",
    src: "https://files.catbox.moe/p5qi4y.MOV",
    alt: "Rural School Workshop Video 4",
    title: "Classroom Highlight 4",
    caption: "Interactive question and answer session with rural students.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
  {
    id: "sg-v5",
    type: "video",
    src: "https://files.catbox.moe/mz2ov5.MOV",
    alt: "Rural School Workshop Video 5",
    title: "Classroom Highlight 5",
    caption: "Wrap up and student reactions at the close of the workshop.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
  },
];

const ramKrishnaMedia: MediaItem[] = [
  {
    id: "rk-1",
    type: "image",
    src: "/lovable-uploads/ram-krishna-school-1.jpg",
    alt: "Teaching at Ram Krishna Dwarika School",
    title: "Classroom Seminar",
    caption: "Teaching budgeting and savings fundamentals to high school students in Patna.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
  },
  {
    id: "rk-2",
    type: "image",
    src: "/lovable-uploads/ram-krishna-school-2.jpg",
    alt: "Students learning at Ram Krishna School",
    title: "Interactive Discussion",
    caption: "Students working through examples on saving money versus investing early.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
  },
];

const localSession1Media: MediaItem[] = [
  {
    id: "loc1-1",
    type: "image",
    src: "/lovable-uploads/857218ea-0cf3-4f24-8242-23e038e71457.png",
    alt: "Students learning about investing origins",
    title: "Origins of Stock Markets",
    caption: "Explaining the history of public exchanges, shares, and how companies raise capital.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-2",
    type: "image",
    src: "/lovable-uploads/672fa77a-f981-49c2-b3ad-9ad462f1fb41.png",
    alt: "Presenter explaining financial charts",
    title: "Reading Stock Charts",
    caption: "Walking through index funds, historical returns, and long term market cycles.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-3",
    type: "image",
    src: "/lovable-uploads/43ffa40d-8361-401a-a4ef-2251c466a8f4.png",
    alt: "Interactive discussion about investments",
    title: "Student Group Discussion",
    caption: "Students discussing index funds, diversification, and investment horizons.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-4",
    type: "image",
    src: "/lovable-uploads/94b78fc9-f062-40b5-8e2e-977da26afeda.png",
    alt: "Setting up investment accounts",
    title: "Setting Up Accounts",
    caption: "Practical walkthrough on how high school students and parents open custodial accounts.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-5",
    type: "image",
    src: "/lovable-uploads/a9c673d3-410d-4593-a415-f9eaa6efbe74.png",
    alt: "Learning key economic terms",
    title: "Key Financial Terms",
    caption: "Explaining inflation, dividend yields, expense ratios, and asset allocation.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-6",
    type: "image",
    src: "/lovable-uploads/682cf84a-b680-4189-93ca-96be9f9ece99.png",
    alt: "Spendora's mission presentation",
    title: "Spendora Mission Overview",
    caption: "Sharing the founding story and why student to student teaching works best.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-7",
    type: "image",
    src: "/lovable-uploads/9937f5f7-ec84-4a99-8719-715f1a743b92.png",
    alt: "Workshop conclusion",
    title: "Worksheet Exercise",
    caption: "Students completing hands-on worksheets at the conclusion of Session 1.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
  {
    id: "loc1-8",
    type: "image",
    src: "/lovable-uploads/eabd20b0-ff60-4809-b6ca-6ef2878b3576.png",
    alt: "Learning about compound interest",
    title: "Compound Growth Math",
    caption: "Visualizing the math behind compound interest when starting in your teens.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
  },
];

const localSession2Media: MediaItem[] = [
  {
    id: "loc2-1",
    type: "image",
    src: "/lovable-uploads/1ee41063-a95d-4cb9-bcfd-ed9961525b86.png",
    alt: "Session 2 - Saving vs Investing",
    title: "Saving vs Investing Framework",
    caption: "Comparing liquidity, emergency cash reserves, and long term investments.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
  },
  {
    id: "loc2-2",
    type: "image",
    src: "/lovable-uploads/7695d299-bbc3-48ce-a41e-954300708ffa.png",
    alt: "Session 2 - Students engaged",
    title: "Budgeting Case Studies",
    caption: "Evaluating realistic monthly budgeting scenarios for part-time student income.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
  },
  {
    id: "loc2-3",
    type: "image",
    src: "/lovable-uploads/4089050e-e0a8-4630-9c75-511673fd035d.png",
    alt: "Session 2 - Interactive session",
    title: "Hands-on Calculations",
    caption: "Applying the 50/30/20 budgeting rule to student earnings and goals.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
  },
  {
    id: "loc2-4",
    type: "image",
    src: "/lovable-uploads/0665f9c3-339d-4e49-bfc4-d6d00b95d8e6.png",
    alt: "Session 2 - Group discussion",
    title: "Roth IRA Planning",
    caption: "Discussing tax-advantaged accounts like Roth IRAs and index portfolios.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
  },
  {
    id: "loc2-v1",
    type: "video",
    src: "https://files.catbox.moe/b7vufo.MOV",
    alt: "Session 2 Video 1",
    title: "Risk Analysis Lecture",
    caption: "Live video highlight explaining risk versus reward trade-offs to attendees.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
  },
  {
    id: "loc2-v2",
    type: "video",
    src: "https://files.catbox.moe/o5monx.MOV",
    alt: "Session 2 Video 2",
    title: "Student Q&A Session",
    caption: "Live video answering questions on index funds and high-yield savings accounts.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
  },
];

type TabType = "all" | "local" | "india";

const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [lightboxState, setLightboxState] = useState<{
    items: MediaItem[];
    currentIndex: number;
  } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workshop Gallery | Spendora";
  }, []);

  // Handle URL hash navigation without breaking scroll position
  useEffect(() => {
    if (!location.hash) return;
    const hash = location.hash.replace("#", "");

    if (hash === "local" || hash.startsWith("session-")) {
      setActiveTab("local");
    } else if (
      hash === "india" ||
      hash === "doon-school" ||
      hash === "indian-school" ||
      hash === "ram-krishna-school"
    ) {
      setActiveTab("india");
    }

    setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
  }, [location.hash]);

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

  // Safe jump navigation: ensures proper tab is active, then scrolls smoothly
  const jumpToSection = (sectionId: string, tab: TabType) => {
    setActiveTab(tab);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
  };

  const totalLocalCount = localSession1Media.length + localSession2Media.length;
  const totalIndiaCount =
    doonSchoolMedia.length + sriGirdharMedia.length + ramKrishnaMedia.length;
  const totalItemsCount = totalLocalCount + totalIndiaCount;

  // Clean image-first grid: pure visuals with subtle title on hover
  const renderMediaGrid = (items: MediaItem[]) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
      {items.map((item, idx) => (
        <div
          key={item.id}
          onClick={() => openLightbox(items, idx)}
          className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 dark:bg-zinc-900 cursor-pointer shadow-xs hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-slate-200/60 dark:border-white/5"
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative w-full h-full bg-black">
              <video
                src={item.src}
                preload="metadata"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-600 transition-all shadow-lg">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5 fill-white" />
                </div>
              </div>
            </div>
          )}

          {/* Minimal Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-4 text-white pointer-events-none">
            <span className="text-xs sm:text-sm font-bold font-manrope line-clamp-1">
              {item.title}
            </span>
            <span className="text-[10px] sm:text-xs text-white/80">
              {item.type === "video" ? "Video highlight • Click to play" : "Click to view fullscreen"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Link */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="mb-8">
          <h1 className="text-3xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-2">
            Workshop Gallery
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl font-medium">
            Photos and video highlights from our student workshops in Minnesota and India.
          </p>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex items-center gap-2 mb-12 pb-4 border-b border-slate-200/80 dark:border-white/10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "all"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm"
                : "bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800"
            }`}
          >
            <span>All Media</span>
            <span className="text-[10px] opacity-70">({totalItemsCount})</span>
          </button>

          <button
            onClick={() => setActiveTab("india")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "india"
                ? "bg-emerald-800 text-white dark:bg-emerald-700 shadow-sm"
                : "bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800"
            }`}
          >
            <span>India</span>
            <span className="text-[10px] opacity-70">({totalIndiaCount})</span>
          </button>

          <button
            onClick={() => setActiveTab("local")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "local"
                ? "bg-emerald-800 text-white dark:bg-emerald-700 shadow-sm"
                : "bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800"
            }`}
          >
            <span>Minnesota</span>
            <span className="text-[10px] opacity-70">({totalLocalCount})</span>
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
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Doon Public School
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Sector 21, Panchkula, Haryana, India • Senior Secondary Seminar
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">
                  {doonSchoolMedia.length} photos & video
                </span>
              </div>
              {renderMediaGrid(doonSchoolMedia)}
            </div>

            {/* School 2: Sri Girdhar Techno School */}
            <div id="indian-school" className="scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Sri Girdhar Techno School
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Rural Outreach Partner • India
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">
                  {sriGirdharMedia.length} photos & videos
                </span>
              </div>
              {renderMediaGrid(sriGirdharMedia)}
            </div>

            {/* School 3: Ram Krishna Dwarika School */}
            <div id="ram-krishna-school" className="scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Ram Krishna Dwarika School
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Patna, Bihar, India • High School Workshops
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">
                  {ramKrishnaMedia.length} photos
                </span>
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
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Session 1: Intro to Investing
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    R.H. Stafford Library • Woodbury, MN
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">
                  {localSession1Media.length} photos
                </span>
              </div>
              {renderMediaGrid(localSession1Media)}
            </div>

            {/* Session 2 */}
            <div id="session-2" className="scroll-mt-28 pt-6 border-t border-slate-200/60 dark:border-white/5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-4 pb-2 border-b border-slate-200/60 dark:border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Session 2: Saving vs. Investing
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    R.H. Stafford Library • Woodbury, MN
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-zinc-500">
                  {localSession2Media.length} photos & videos
                </span>
              </div>
              {renderMediaGrid(localSession2Media)}
            </div>
          </section>
        )}

        {/* Quiet Footer Link */}
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/94 backdrop-blur-md p-4 sm:p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-xs font-semibold">
              <span className="tabular-nums opacity-75">
                {String(lightboxState.currentIndex + 1).padStart(2, "0")} /{" "}
                {String(lightboxState.items.length).padStart(2, "0")}
              </span>
              <span className="opacity-40">•</span>
              <span className="text-zinc-300">
                {lightboxState.items[lightboxState.currentIndex].schoolOrSession}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={lightboxState.items[lightboxState.currentIndex].src}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Open original media"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxItem();
            }}
            aria-label="Previous item"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxItem();
            }}
            aria-label="Next item"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Container */}
          <div
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxState.items[lightboxState.currentIndex].type === "image" ? (
              <img
                src={lightboxState.items[lightboxState.currentIndex].src}
                alt={lightboxState.items[lightboxState.currentIndex].alt}
                className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            ) : (
              <video
                key={lightboxState.items[lightboxState.currentIndex].src}
                src={lightboxState.items[lightboxState.currentIndex].src}
                controls
                autoPlay
                className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-full rounded-lg shadow-2xl bg-black"
              />
            )}

            {/* Bottom Caption */}
            <div className="w-full max-w-2xl mt-4 text-center px-4">
              <div className="text-sm font-bold text-white font-manrope">
                {lightboxState.items[lightboxState.currentIndex].title}
              </div>
              {lightboxState.items[lightboxState.currentIndex].caption && (
                <p className="text-xs text-zinc-300 font-medium mt-1 leading-relaxed">
                  {lightboxState.items[lightboxState.currentIndex].caption}
                </p>
              )}
              {lightboxState.items[lightboxState.currentIndex].date && (
                <div className="text-[11px] text-zinc-400 font-medium mt-1.5">
                  {lightboxState.items[lightboxState.currentIndex].schoolOrSession} • {lightboxState.items[lightboxState.currentIndex].date}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
