import { useState, useEffect, useCallback } from "react";
import {
  ArrowLeft,
  Video,
  ArrowRight,
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
  caption?: string;
  section: "local" | "india";
  schoolOrSession: string;
  location: string;
  date?: string;
  badge?: string;
}

// Media Data
const doonSchoolMedia: MediaItem[] = [
  {
    id: "doon-1",
    type: "image",
    src: "/lovable-uploads/doon-school-1.jpg",
    alt: "Doon Public School Financial Literacy Programme Slide",
    title: "Spendora Collaboration Slide",
    caption: "Official presentation screen: 'Financial Literacy Programme: Empowering Young Minds with Essential Money Skills — In Collaboration with Spendora for Classes XI & XII'.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Presentation",
  },
  {
    id: "doon-v1",
    type: "video",
    src: "https://files.catbox.moe/v6lsc0.mp4",
    alt: "Doon Public School Workshop Video Highlights",
    title: "Auditorium Workshop Highlights",
    caption: "Live video recording of senior secondary students gathered in the school auditorium during Spendora's interactive financial literacy seminar.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Live Video",
  },
  {
    id: "doon-2",
    type: "image",
    src: "/lovable-uploads/doon-school-2.jpg",
    alt: "Full Auditorium Session at Doon Public School",
    title: "Senior Secondary Auditorium Session",
    caption: "Over 250+ students in Classes XI & XII attending the interactive financial literacy seminar in Panchkula.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-3",
    type: "image",
    src: "/lovable-uploads/doon-school-3.jpg",
    alt: "Student Q&A with Microphone",
    title: "Student Q&A & Discussion",
    caption: "Class XI student asking an insightful question with a microphone during the interactive risk management segment.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-4",
    type: "image",
    src: "/lovable-uploads/doon-school-4.jpg",
    alt: "Students reviewing Risk Tolerance chart",
    title: "Risk Tolerance & Return Curves",
    caption: "High school students reviewing the live risk-return curve and investment horizons on the main auditorium display.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-5",
    type: "image",
    src: "/lovable-uploads/doon-school-5.jpg",
    alt: "Auditorium Audience Engaged",
    title: "Engaged High School Audience",
    caption: "Students actively taking notes and following modern investment and budgeting concepts.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-6",
    type: "image",
    src: "/lovable-uploads/doon-school-6.jpg",
    alt: "Classes XI and XII at Doon Public School",
    title: "Classes XI & XII Workshop",
    caption: "Wide perspective of senior secondary students participating in practical personal finance lessons.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
  },
  {
    id: "doon-7",
    type: "image",
    src: "/lovable-uploads/doon-school-7.jpg",
    alt: "Presentation delivery to senior students",
    title: "Financial Programme Delivery",
    caption: "Delivering foundational concepts of compound growth, smart saving, and long-term asset allocation.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
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
    caption: "Introducing basic currency, budgeting, and savings concepts to eager rural school students.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    location: "Rural India",
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
    location: "Rural India",
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
    location: "Rural India",
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
    location: "Rural India",
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
    location: "Rural India",
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
    location: "Rural India",
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
    location: "Rural India",
  },
  {
    id: "sg-v1",
    type: "video",
    src: "/lovable-uploads/indian-school-video-1.mov",
    alt: "Rural School Workshop Video 1",
    title: "Classroom Interaction Highlight 1",
    caption: "Video recording of students participating in financial exercises and questions.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    location: "Rural India",
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
    location: "Rural India",
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
    location: "Rural India",
  },
  {
    id: "sg-v4",
    type: "video",
    src: "https://files.catbox.moe/p5qi4y.MOV",
    alt: "Rural School Workshop Video 4",
    title: "Classroom Interaction Highlight 4",
    caption: "Interactive question-and-answer session with rural students.",
    section: "india",
    schoolOrSession: "Sri Girdhar Techno School",
    location: "Rural India",
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
    location: "Rural India",
  },
];

const ramKrishnaMedia: MediaItem[] = [
  {
    id: "rk-1",
    type: "image",
    src: "/lovable-uploads/ram-krishna-school-1.jpg",
    alt: "Teaching at Ram Krishna Dwarika School",
    title: "Classroom Financial Seminar",
    caption: "Delivering Spendora's personal finance and budgeting curriculum to high school students in Patna.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
    location: "Patna, Bihar, India",
  },
  {
    id: "rk-2",
    type: "image",
    src: "/lovable-uploads/ram-krishna-school-2.jpg",
    alt: "Students learning at Ram Krishna School",
    title: "Interactive Classroom Group",
    caption: "Students actively following the presentation on saving vs. investing fundamentals.",
    section: "india",
    schoolOrSession: "Ram Krishna Dwarika School",
    location: "Patna, Bihar, India",
  },
];

const localSession1Media: MediaItem[] = [
  {
    id: "loc1-1",
    type: "image",
    src: "/lovable-uploads/857218ea-0cf3-4f24-8242-23e038e71457.png",
    alt: "Students learning about investing origins",
    title: "Origins of Stock Markets",
    caption: "Explaining historical origins of stock trading, shares, and how public capital markets function.",
    section: "local",
    schoolOrSession: "Session 1: Intro to Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    location: "R.H. Stafford Library, Woodbury, MN",
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
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
  },
  {
    id: "loc2-2",
    type: "image",
    src: "/lovable-uploads/7695d299-bbc3-48ce-a41e-954300708ffa.png",
    alt: "Session 2 - Students engaged",
    title: "Budgeting Case Studies",
    caption: "Students working through real-world scenarios on budgeting teen income and savings goals.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
  },
  {
    id: "loc2-3",
    type: "image",
    src: "/lovable-uploads/4089050e-e0a8-4630-9c75-511673fd035d.png",
    alt: "Session 2 - Interactive session",
    title: "Hands-on Financial Exercises",
    caption: "Group interactive session comparing 50/30/20 budgeting rule with smart investing habits.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
  },
  {
    id: "loc2-4",
    type: "image",
    src: "/lovable-uploads/0665f9c3-339d-4e49-bfc4-d6d00b95d8e6.png",
    alt: "Session 2 - Group discussion",
    title: "Strategy & Roth IRA Planning",
    caption: "Exploring tax-advantaged accounts like Roth IRAs and simple index portfolio allocations.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
  },
  {
    id: "loc2-v1",
    type: "video",
    src: "https://files.catbox.moe/b7vufo.MOV",
    alt: "Session 2 Video 1",
    title: "Risk Analysis Lecture",
    caption: "Live video highlight explaining risk vs. reward trade-offs and market volatility.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
  },
  {
    id: "loc2-v2",
    type: "video",
    src: "https://files.catbox.moe/o5monx.MOV",
    alt: "Session 2 Video 2",
    title: "Interactive Student Q&A",
    caption: "Live video answering student questions regarding index funds and high-yield savings.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
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

  const totalLocalCount = localSession1Media.length + localSession2Media.length;
  const totalIndiaCount =
    doonSchoolMedia.length + sriGirdharMedia.length + ramKrishnaMedia.length;
  const totalItemsCount = totalLocalCount + totalIndiaCount;

  const renderMediaGrid = (items: MediaItem[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 shadow-xs hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200"
        >
          {item.type === "image" ? (
            <div
              onClick={() => openLightbox(items, idx)}
              className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-900 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-200 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 rounded-full bg-black/75 text-white backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </span>
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] bg-black overflow-hidden group">
              <video
                src={item.src}
                controls
                preload="metadata"
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => openLightbox(items, idx)}
                aria-label="Expand video in theater mode"
                className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-black/70 hover:bg-black/90 text-white backdrop-blur-sm transition-all cursor-pointer"
                title="Expand to Fullscreen Theater"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-manrope line-clamp-1 mb-1">
                {item.title}
              </h4>
              {item.caption && (
                <p className="text-xs text-slate-600 dark:text-zinc-400 font-medium line-clamp-2 leading-relaxed mb-3">
                  {item.caption}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-zinc-500">
              <span className="truncate max-w-[200px]">{item.location}</span>
              {item.type === "image" ? (
                <button
                  onClick={() => openLightbox(items, idx)}
                  className="text-emerald-700 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  <span>Expand</span>
                </button>
              ) : (
                <span className="text-emerald-700 dark:text-emerald-400 inline-flex items-center gap-1 shrink-0 font-bold">
                  <Play className="w-2.5 h-2.5 fill-current" /> Video
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation & Header */}
        <button
          onClick={() => navigate("/")}
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold font-manrope tracking-tight text-slate-900 dark:text-white mb-3">
            Workshop Gallery
          </h1>
          <p className="text-base text-slate-600 dark:text-zinc-400 max-w-2xl font-medium">
            Documenting student financial literacy workshops across Minnesota and partner classrooms in India.
          </p>
        </div>

        {/* Region Segmented Switcher */}
        <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200/80 dark:border-white/10">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "all"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800"
            }`}
          >
            <span>All Workshops</span>
            <span className="text-[10px] tabular-nums opacity-70">({totalItemsCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("local");
              const el = document.getElementById("local");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "local"
                ? "bg-emerald-800 text-white dark:bg-emerald-700"
                : "bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800"
            }`}
          >
            <span>Minnesota (Local)</span>
            <span className="text-[10px] tabular-nums opacity-70">({totalLocalCount})</span>
          </button>

          <button
            onClick={() => {
              setActiveTab("india");
              const el = document.getElementById("india");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === "india"
                ? "bg-emerald-800 text-white dark:bg-emerald-700"
                : "bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-800"
            }`}
          >
            <span>India (International)</span>
            <span className="text-[10px] tabular-nums opacity-70">({totalIndiaCount})</span>
          </button>

          <div className="ml-auto text-xs text-slate-500 dark:text-zinc-400 font-medium hidden md:flex items-center gap-2">
            <span>Jump to:</span>
            <a href="#doon-school" className="hover:text-emerald-700 dark:hover:text-emerald-400 underline">
              Doon Public School
            </a>
            <span>•</span>
            <a href="#session-1" className="hover:text-emerald-700 dark:hover:text-emerald-400 underline">
              Session 1
            </a>
            <span>•</span>
            <a href="#session-2" className="hover:text-emerald-700 dark:hover:text-emerald-400 underline">
              Session 2
            </a>
          </div>
        </div>

        {/* ======================================================== */}
        {/* INDIA OUTREACH & SCHOOLS */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "india") && (
          <section id="india" className="mb-20 scroll-mt-28">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-manrope text-slate-900 dark:text-white tracking-tight">
                India Educational Outreach
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 font-medium">
                Senior secondary auditoriums and rural classroom sessions delivered across Panchkula and Patna.
              </p>
            </div>

            {/* School 1: Doon Public School (FEATURED WORKSHOP) */}
            <div
              id="doon-school"
              className="mb-16 scroll-mt-28 border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-zinc-950 p-6 sm:p-8 rounded-2xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/80 dark:border-white/10">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-zinc-400 mb-1">
                    <span className="font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                      CBSE Affiliated Senior Secondary
                    </span>
                    <span>•</span>
                    <span>Tuesday, September 8, 2026</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-manrope text-slate-900 dark:text-white">
                    Doon Public School
                  </h3>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Sector - 21, Panchkula, Haryana, India • Classes XI & XII (250+ Students)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium mt-3 max-w-3xl leading-relaxed">
                    Financial Literacy Programme: Empowering Young Minds with Essential Money Skills — In Collaboration with Spendora. Presentation covering risk-return curves, compounding math, and custodial accounts delivered to senior secondary students in the school auditorium.
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    onClick={() => openLightbox(doonSchoolMedia, 0)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-800 dark:bg-emerald-700 hover:bg-emerald-900 dark:hover:bg-emerald-600 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>View All 8 Items Fullscreen</span>
                  </button>
                </div>
              </div>

              {renderMediaGrid(doonSchoolMedia)}
            </div>

            {/* School 2: Sri Girdhar Techno School */}
            <div id="indian-school" className="mb-16 scroll-mt-28 pt-8 border-t border-slate-200/80 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                    Rural Outreach Partner • India
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Sri Girdhar Techno School
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    7 Classroom Photos & 5 Interactive Workshop Videos
                  </p>
                </div>
                <button
                  onClick={() => openLightbox(sriGirdharMedia, 0)}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline self-start sm:self-auto cursor-pointer"
                >
                  View in Fullscreen →
                </button>
              </div>

              {renderMediaGrid(sriGirdharMedia)}
            </div>

            {/* School 3: Ram Krishna Dwarika School */}
            <div id="ram-krishna-school" className="scroll-mt-28 pt-8 border-t border-slate-200/80 dark:border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                    Patna, Bihar, India
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-manrope text-slate-900 dark:text-white">
                    Ram Krishna Dwarika School
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    2 Classroom Photos
                  </p>
                </div>
                <button
                  onClick={() => openLightbox(ramKrishnaMedia, 0)}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline self-start sm:self-auto cursor-pointer"
                >
                  View in Fullscreen →
                </button>
              </div>

              {renderMediaGrid(ramKrishnaMedia)}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* LOCAL WORKSHOPS (MINNESOTA) */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "local") && (
          <section id="local" className="mb-20 scroll-mt-28 pt-8 border-t border-slate-200/80 dark:border-white/10">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-manrope text-slate-900 dark:text-white tracking-tight">
                Minnesota Community Workshops
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 font-medium">
                In-person sessions conducted at the R.H. Stafford Library in Woodbury, MN for local middle and high school students.
              </p>
            </div>

            {/* Session 1 */}
            <div id="session-1" className="mb-14 scroll-mt-28">
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">
                    Session 1: Introduction to Investing
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    R.H. Stafford Library • 8 Photos
                  </p>
                </div>
                <button
                  onClick={() => openLightbox(localSession1Media, 0)}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  Fullscreen →
                </button>
              </div>
              {renderMediaGrid(localSession1Media)}
            </div>

            {/* Session 2 */}
            <div id="session-2" className="scroll-mt-28 pt-6 border-t border-slate-100 dark:border-white/5">
              <div className="flex items-center justify-between gap-3 mb-5 pb-3 border-b border-slate-100 dark:border-white/5">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">
                    Session 2: Saving vs. Investing & Practical Budgeting
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    R.H. Stafford Library • 4 Photos & 2 Live Videos
                  </p>
                </div>
                <button
                  onClick={() => openLightbox(localSession2Media, 0)}
                  className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  Fullscreen →
                </button>
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
            <Link to="/#contact" className="hover:text-emerald-700 dark:hover:text-white underline">
              Contact Team
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
              <div className="text-[11px] text-zinc-400 font-medium mt-1.5">
                {lightboxState.items[lightboxState.currentIndex].location}
                {lightboxState.items[lightboxState.currentIndex].date && ` • ${lightboxState.items[lightboxState.currentIndex].date}`}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
