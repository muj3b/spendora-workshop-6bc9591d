import { useState, useEffect, useCallback } from "react";
import { 
  ArrowLeft, 
  Video, 
  Image as ImageIcon, 
  Handshake, 
  ArrowRight, 
  MapPin, 
  Globe, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Sparkles, 
  ExternalLink,
  Calendar,
  School,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

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
    caption: "Official presentation screen: 'Financial Literacy Programme: Empowering Young Minds with Essential Money Skills — In Collaboration with Spendora for Classes XI & XII' (Sept 8, 2026).",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Auditorium Slide",
  },
  {
    id: "doon-v1",
    type: "video",
    src: "https://files.catbox.moe/v6lsc0.mp4",
    alt: "Doon Public School Workshop Video Highlights",
    title: "Auditorium Workshop Live Video",
    caption: "Live video highlight of senior secondary students gathered in the auditorium during the Spendora financial literacy workshop.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Live Video Highlight",
  },
  {
    id: "doon-2",
    type: "image",
    src: "/lovable-uploads/doon-school-2.jpg",
    alt: "Full Auditorium Session at Doon Public School",
    title: "Senior Secondary Auditorium Gathering",
    caption: "Over 250+ students in Classes XI & XII attending the interactive financial literacy seminar.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Auditorium View",
  },
  {
    id: "doon-3",
    type: "image",
    src: "/lovable-uploads/doon-school-3.jpg",
    alt: "Student Q&A with Microphone",
    title: "Active Student Discussion & Q&A",
    caption: "Student sharing thoughts with a microphone during the interactive question & answer segment.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Student Q&A",
  },
  {
    id: "doon-4",
    type: "image",
    src: "/lovable-uploads/doon-school-4.jpg",
    alt: "Students reviewing Risk Tolerance chart",
    title: "Understanding Risk Tolerance",
    caption: "Senior secondary students following along as the presenter breaks down risk vs. return curves.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Risk Analysis",
  },
  {
    id: "doon-5",
    type: "image",
    src: "/lovable-uploads/doon-school-5.jpg",
    alt: "Auditorium Audience Engaged",
    title: "Engaged High School Audience",
    caption: "Students actively taking notes and listening to modern investment and budgeting concepts.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Audience",
  },
  {
    id: "doon-6",
    type: "image",
    src: "/lovable-uploads/doon-school-6.jpg",
    alt: "Classes XI and XII at Doon Public School",
    title: "Classes XI & XII Workshop",
    caption: "Full auditorium view highlighting student participation in practical personal finance lessons.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Auditorium",
  },
  {
    id: "doon-7",
    type: "image",
    src: "/lovable-uploads/doon-school-7.jpg",
    alt: "Presentation delivery to senior students",
    title: "Financial Programme Delivery",
    caption: "Presenting foundational concepts of compound growth, smart saving, and long-term financial planning.",
    section: "india",
    schoolOrSession: "Doon Public School",
    location: "Sector 21, Panchkula, Haryana, India",
    date: "Sept 8, 2026",
    badge: "Lecture",
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
    badge: "Classroom",
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
    badge: "Classroom",
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
    badge: "Discussion",
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
    badge: "Classroom",
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
    badge: "Classroom",
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
    badge: "Outreach",
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
    badge: "Classroom",
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
    location: "Rural India",
    badge: "Video 1",
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
    badge: "Video 2",
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
    badge: "Video 3",
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
    badge: "Video 4",
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
    badge: "Video 5",
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
    location: "Patna, Bihar, India",
    badge: "Classroom",
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
    location: "Patna, Bihar, India",
    badge: "Classroom",
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
    location: "R.H. Stafford Library, Woodbury, MN",
    badge: "Workshop",
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
    badge: "Charts",
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
    badge: "Discussion",
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
    badge: "Hands-on",
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
    badge: "Education",
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
    badge: "Overview",
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
    badge: "Wrap-up",
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
    badge: "Compounding",
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
    badge: "Framework",
  },
  {
    id: "loc2-2",
    type: "image",
    src: "/lovable-uploads/7695d299-bbc3-48ce-a41e-954300708ffa.png",
    alt: "Session 2 - Students engaged",
    title: "Budgeting Case Studies",
    caption: "Students working through real-world scenarios on budgeting teen income and saving goals.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
    badge: "Discussion",
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
    badge: "Hands-on",
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
    badge: "Planning",
  },
  {
    id: "loc2-v1",
    type: "video",
    src: "https://files.catbox.moe/b7vufo.MOV",
    alt: "Session 2 Video 1",
    title: "Workshop Lecture & Risk Analysis",
    caption: "Live video highlight of the presenter explaining risk vs. reward trade-offs to attendees.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
    badge: "Video 1",
  },
  {
    id: "loc2-v2",
    type: "video",
    src: "https://files.catbox.moe/o5monx.MOV",
    alt: "Session 2 Video 2",
    title: "Workshop Q&A & Student Feedback",
    caption: "Live video highlight answering student questions regarding index funds and high-yield savings.",
    section: "local",
    schoolOrSession: "Session 2: Saving vs Investing",
    location: "R.H. Stafford Library, Woodbury, MN",
    badge: "Video 2",
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

  // Set document title & scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Workshop Gallery | Spendora";
  }, []);

  // Handle URL hash navigation
  useEffect(() => {
    if (!location.hash) return;
    const hash = location.hash.replace("#", "");

    // Switch tabs automatically based on hash
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

  // Keyboard navigation for Lightbox
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

  // Render a clean, intuitive media grid with click-to-expand lightbox
  const renderMediaGrid = (items: MediaItem[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {item.type === "image" ? (
            <div
              onClick={() => openLightbox(items, idx)}
              className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-zinc-950 cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 text-white text-xs font-bold backdrop-blur-md shadow-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#52b788]" /> Click to Expand
                </span>
              </div>
              {item.badge && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-white tracking-wide flex items-center gap-1 shadow-sm">
                  <ImageIcon className="w-3 h-3 text-[#52b788]" />
                  <span>{item.badge}</span>
                </div>
              )}
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
                className="absolute top-3 right-3 p-1.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur-md opacity-80 hover:opacity-100 transition-all cursor-pointer"
                title="Expand to Fullscreen Theater"
              >
                <Maximize2 className="w-3.5 h-3.5 text-[#52b788]" />
              </button>
              {item.badge && (
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-bold text-white tracking-wide flex items-center gap-1 shadow-sm pointer-events-none">
                  <Video className="w-3 h-3 text-[#52b788]" />
                  <span>{item.badge}</span>
                </div>
              )}
            </div>
          )}

          <div className="p-4 flex-1 flex flex-col justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-manrope line-clamp-1 mb-1 group-hover:text-emerald-700 dark:group-hover:text-[#52b788] transition-colors">
                {item.title}
              </h4>
              {item.caption && (
                <p className="text-xs text-slate-600 dark:text-zinc-400 font-medium line-clamp-2 leading-relaxed mb-3">
                  {item.caption}
                </p>
              )}
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-semibold text-slate-500 dark:text-zinc-500">
              <span className="truncate max-w-[180px]">{item.location}</span>
              {item.type === "image" ? (
                <button
                  onClick={() => openLightbox(items, idx)}
                  className="text-emerald-700 dark:text-[#52b788] hover:underline inline-flex items-center gap-1 shrink-0 cursor-pointer"
                >
                  Expand <Maximize2 className="w-3 h-3" />
                </button>
              ) : (
                <span className="text-emerald-700 dark:text-[#52b788] inline-flex items-center gap-1 shrink-0">
                  <Play className="w-3 h-3 fill-current" /> Video
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

        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-white/5 border border-emerald-200 dark:border-white/10 text-emerald-800 dark:text-[#52b788] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Visual Archive & Highlights
          </div>
          <h1 className="text-4xl sm:text-6xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-3">
            Workshop <span className="text-emerald-700 dark:text-[#52b788]">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            Explore verified photos and video recordings from our student workshops in Minnesota and classrooms across India.
          </p>
        </div>

        {/* Quick Partners Banner */}
        <div
          id="partners"
          className="mb-10 p-5 sm:p-6 rounded-2xl border border-emerald-200/80 dark:border-emerald-800/40 bg-emerald-50/60 dark:bg-emerald-950/20 backdrop-blur-md"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-[#52b788] mb-1">
                <Handshake className="w-4 h-4" /> Global Outreach & Verified Collaborations
              </div>
              <p className="text-sm text-slate-700 dark:text-zinc-300 font-medium">
                Our educational outreach spans local Minnesota workshops, verified Indian schools (
                <span className="font-bold text-slate-900 dark:text-white">Doon Public School</span>,{" "}
                <span className="font-bold text-slate-900 dark:text-white">Sri Girdhar Techno</span> &{" "}
                <span className="font-bold text-slate-900 dark:text-white">Ram Krishna Dwarika</span>), and the{" "}
                <span className="font-bold text-slate-900 dark:text-white">Spendora Nigeria</span> mobile app partnership.
              </p>
            </div>
            <a
              href="/#partners"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-[#52b788] transition-colors shrink-0 shadow-xs"
            >
              <span>View All Partners</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Section Navigation Tabs (Local vs India vs All) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => {
              setActiveTab("all");
            }}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              activeTab === "all"
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md scale-105"
                : "bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
            }`}
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>All Workshops</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 font-extrabold">
              {totalItemsCount}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab("local");
              const el = document.getElementById("local");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              activeTab === "local"
                ? "bg-emerald-700 text-white dark:bg-[#2d6a4f] shadow-md scale-105"
                : "bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
            }`}
          >
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Local (Minnesota)</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-current font-extrabold">
              {totalLocalCount}
            </span>
          </button>

          <button
            onClick={() => {
              setActiveTab("india");
              const el = document.getElementById("india");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer ${
              activeTab === "india"
                ? "bg-emerald-700 text-white dark:bg-[#2d6a4f] shadow-md scale-105"
                : "bg-slate-100 dark:bg-zinc-800/80 text-slate-700 dark:text-zinc-300 hover:bg-slate-200 dark:hover:bg-zinc-700"
            }`}
          >
            <Globe className="w-4 h-4 text-emerald-400" />
            <span>India (International)</span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-current font-extrabold">
              {totalIndiaCount}
            </span>
          </button>
        </div>

        {/* Quick jump anchor bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-500 dark:text-zinc-400 mb-12">
          <span className="text-slate-400 dark:text-zinc-500">Quick jump:</span>
          {(activeTab === "all" || activeTab === "local") && (
            <>
              <a
                href="#session-1"
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/70 hover:text-emerald-700 dark:hover:text-[#52b788] transition-colors"
              >
                Session 1: Intro to Investing
              </a>
              <a
                href="#session-2"
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/70 hover:text-emerald-700 dark:hover:text-[#52b788] transition-colors"
              >
                Session 2: Saving vs Investing
              </a>
            </>
          )}
          {(activeTab === "all" || activeTab === "india") && (
            <>
              <a
                href="#doon-school"
                className="px-3 py-1 rounded-lg bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-[#52b788] hover:underline font-bold transition-colors"
              >
                ⭐ Doon Public School (Today)
              </a>
              <a
                href="#indian-school"
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/70 hover:text-emerald-700 dark:hover:text-[#52b788] transition-colors"
              >
                Sri Girdhar Techno
              </a>
              <a
                href="#ram-krishna-school"
                className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-zinc-800/70 hover:text-emerald-700 dark:hover:text-[#52b788] transition-colors"
              >
                Ram Krishna Dwarika
              </a>
            </>
          )}
        </div>

        {/* ======================================================== */}
        {/* SECTION 1: LOCAL WORKSHOPS (MINNESOTA) */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "local") && (
          <section id="local" className="mb-20 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-8 border-b-2 border-slate-200 dark:border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-[#52b788] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" /> Section 1 • Minnesota, USA
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-manrope text-slate-900 dark:text-white tracking-tight">
                  Local Community Workshops
                </h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 font-medium">
                  In-person sessions conducted at the R.H. Stafford Library in Woodbury, MN for local middle and high school students.
                </p>
              </div>
              <div className="text-xs font-bold text-slate-500 dark:text-zinc-400 shrink-0">
                12 Photos • 2 Workshop Videos
              </div>
            </div>

            {/* Session 1 */}
            <div id="session-1" className="mb-14 scroll-mt-28">
              <div className="flex items-center justify-between gap-3 mb-6 p-4 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-700 dark:bg-[#2d6a4f] text-white text-xs font-black font-manrope">
                    SESSION 1
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">
                      Introduction to Investing
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      R.H. Stafford Library • 8 Photos
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => openLightbox(localSession1Media, 0)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-[#52b788] hover:underline cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Browse Fullscreen
                </button>
              </div>
              {renderMediaGrid(localSession1Media)}
            </div>

            {/* Session 2 */}
            <div id="session-2" className="scroll-mt-28">
              <div className="flex items-center justify-between gap-3 mb-6 p-4 rounded-xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-emerald-700 dark:bg-[#2d6a4f] text-white text-xs font-black font-manrope">
                    SESSION 2
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">
                      Saving vs. Investing & Practical Budgeting
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400">
                      R.H. Stafford Library • 4 Photos & 2 Live Videos
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => openLightbox(localSession2Media, 0)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-[#52b788] hover:underline cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> Browse Fullscreen
                </button>
              </div>
              {renderMediaGrid(localSession2Media)}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECTION 2: INDIA EDUCATIONAL OUTREACH (INTERNATIONAL) */}
        {/* ======================================================== */}
        {(activeTab === "all" || activeTab === "india") && (
          <section id="india" className="mb-16 scroll-mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 mb-8 border-b-2 border-emerald-300 dark:border-emerald-800/60">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-800 dark:text-[#52b788] text-xs font-extrabold uppercase tracking-wider mb-2">
                  <Globe className="w-3.5 h-3.5" /> Section 2 • India (International Outreach)
                </div>
                <h2 className="text-3xl sm:text-4xl font-black font-manrope text-slate-900 dark:text-white tracking-tight">
                  India School Workshops
                </h2>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 font-medium">
                  Verified educational workshops delivered in senior secondary auditoriums and rural classrooms across India.
                </p>
              </div>
              <div className="text-xs font-bold text-slate-500 dark:text-zinc-400 shrink-0">
                3 Partner Schools • 16 Photos • 6 Videos
              </div>
            </div>

            {/* School 1: Doon Public School (FEATURED / TODAY'S WORKSHOP) */}
            <div
              id="doon-school"
              className="mb-14 scroll-mt-28 p-6 sm:p-8 rounded-3xl border-2 border-emerald-400/80 dark:border-[#40916c]/50 bg-gradient-to-b from-emerald-50/70 via-white to-emerald-50/30 dark:from-emerald-950/30 dark:via-black dark:to-zinc-900/60 shadow-lg"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-emerald-200/80 dark:border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-600 dark:bg-emerald-500 text-white text-[11px] font-black uppercase tracking-wider shadow-sm animate-pulse">
                      ⭐ Today's Workshop • Sept 8, 2026
                    </span>
                    <span className="px-3 py-1 rounded-full bg-slate-200/80 dark:bg-white/10 text-slate-700 dark:text-zinc-300 text-[11px] font-bold">
                      CBSE Affiliated Senior Secondary
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-manrope text-slate-900 dark:text-white">
                    Doon Public School
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 dark:text-zinc-400 mt-1 font-medium">
                    <span className="flex items-center gap-1 font-semibold text-slate-900 dark:text-zinc-200">
                      <School className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Sector - 21, Panchkula, Haryana
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788]" /> Tuesday, September 08, 2026
                    </span>
                    <span>•</span>
                    <span className="font-semibold text-emerald-700 dark:text-[#52b788]">
                      Classes XI & XII (250+ Students)
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium mt-3 max-w-3xl">
                    <span className="font-bold text-slate-900 dark:text-white">Programme:</span> Financial Literacy Programme: Empowering Young Minds with Essential Money Skills — In Collaboration with Spendora. Covering risk tolerance curves, compounding, and student portfolio building in the school auditorium.
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => openLightbox(doonSchoolMedia, 0)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" /> View 8 Items Fullscreen
                  </button>
                </div>
              </div>

              {renderMediaGrid(doonSchoolMedia)}
            </div>

            {/* School 2: Sri Girdhar Techno School */}
            <div
              id="indian-school"
              className="mb-14 scroll-mt-28 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-slate-100 dark:border-white/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/40 text-purple-800 dark:text-purple-300 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                    <School className="w-3.5 h-3.5" /> Rural Classroom Outreach
                  </div>
                  <h3 className="text-2xl font-black font-manrope text-slate-900 dark:text-white">
                    Sri Girdhar Techno School
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium mt-1">
                    Rural India • 7 Classroom Photos & 5 Interactive Workshop Videos
                  </p>
                </div>
                <button
                  onClick={() => openLightbox(sriGirdharMedia, 0)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> View 12 Items Fullscreen
                </button>
              </div>

              {renderMediaGrid(sriGirdharMedia)}
            </div>

            {/* School 3: Ram Krishna Dwarika School */}
            <div
              id="ram-krishna-school"
              className="scroll-mt-28 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-black shadow-md"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-white/10">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-[11px] font-extrabold uppercase tracking-wider mb-2">
                    <School className="w-3.5 h-3.5" /> High School Workshop
                  </div>
                  <h3 className="text-2xl font-black font-manrope text-slate-900 dark:text-white">
                    Ram Krishna Dwarika School
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-medium mt-1">
                    Patna, Bihar, India • 2 Classroom Photos
                  </p>
                </div>
                <button
                  onClick={() => openLightbox(ramKrishnaMedia, 0)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 text-xs font-bold transition-all shrink-0 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> View Fullscreen
                </button>
              </div>

              {renderMediaGrid(ramKrishnaMedia)}
            </div>
          </section>
        )}

        {/* Footer CTA back to Home & Partners */}
        <div className="mt-16 text-center border-t border-slate-200 dark:border-white/10 pt-10">
          <p className="text-sm font-semibold text-slate-600 dark:text-zinc-400 mb-4">
            Want to bring Spendora's free financial literacy workshops to your school or community?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => navigate("/#contact")}
              className="px-6 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 dark:bg-[#2d6a4f] dark:hover:bg-[#40916c] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              Request a Workshop
            </button>
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 font-bold text-sm hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* INTERACTIVE FULLSCREEN LIGHTBOX MODAL */}
      {/* ======================================================== */}
      {lightboxState && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-4 sm:p-6"
          onClick={closeLightbox}
        >
          {/* Top Bar: Counter, Title & Close */}
          <div
            className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between text-white z-10 bg-gradient-to-b from-black/80 to-transparent"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/15 backdrop-blur-md">
                {lightboxState.currentIndex + 1} of {lightboxState.items.length}
              </span>
              <span className="text-sm font-extrabold text-[#52b788] hidden sm:inline">
                {lightboxState.items[lightboxState.currentIndex].schoolOrSession}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={lightboxState.items[lightboxState.currentIndex].src}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Open original file"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightboxItem();
            }}
            aria-label="Previous item"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightboxItem();
            }}
            aria-label="Next item"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/25 text-white backdrop-blur-md transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Media Preview Container */}
          <div
            className="relative max-w-5xl w-full max-h-[88vh] flex flex-col items-center justify-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxState.items[lightboxState.currentIndex].type === "image" ? (
              <img
                src={lightboxState.items[lightboxState.currentIndex].src}
                alt={lightboxState.items[lightboxState.currentIndex].alt}
                className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-full object-contain rounded-xl shadow-2xl animate-fade-in"
              />
            ) : (
              <video
                key={lightboxState.items[lightboxState.currentIndex].src}
                src={lightboxState.items[lightboxState.currentIndex].src}
                controls
                autoPlay
                className="max-h-[72vh] sm:max-h-[76vh] w-auto max-w-full rounded-xl shadow-2xl bg-black"
              />
            )}

            {/* Bottom Caption */}
            <div className="w-full max-w-3xl mt-4 text-center px-4">
              <h3 className="text-base sm:text-lg font-bold text-white font-manrope">
                {lightboxState.items[lightboxState.currentIndex].title}
              </h3>
              {lightboxState.items[lightboxState.currentIndex].caption && (
                <p className="text-xs sm:text-sm text-zinc-300 font-medium mt-1 leading-relaxed">
                  {lightboxState.items[lightboxState.currentIndex].caption}
                </p>
              )}
              <div className="flex items-center justify-center gap-3 text-[11px] text-zinc-400 font-semibold mt-2">
                <span>{lightboxState.items[lightboxState.currentIndex].location}</span>
                {lightboxState.items[lightboxState.currentIndex].date && (
                  <>
                    <span>•</span>
                    <span className="text-[#52b788]">
                      {lightboxState.items[lightboxState.currentIndex].date}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
