import { useEffect } from "react";
import { ArrowLeft, ChevronDown, Video, Image as ImageIcon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { window.scrollTo(0, 0); document.title = 'Workshop Gallery | Spendora'; }, []);
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.replace('#', ''));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 150);
  }, [location.hash]);

  const day1Photos = [
    { src: "/lovable-uploads/857218ea-0cf3-4f24-8242-23e038e71457.png", alt: "Students learning about investing origins" },
    { src: "/lovable-uploads/672fa77a-f981-49c2-b3ad-9ad462f1fb41.png", alt: "Presenter explaining financial charts" },
    { src: "/lovable-uploads/43ffa40d-8361-401a-a4ef-2251c466a8f4.png", alt: "Interactive discussion about investments" },
    { src: "/lovable-uploads/94b78fc9-f062-40b5-8e2e-977da26afeda.png", alt: "Setting up investment accounts" },
    { src: "/lovable-uploads/a9c673d3-410d-4593-a415-f9eaa6efbe74.png", alt: "Learning key economic terms" },
    { src: "/lovable-uploads/682cf84a-b680-4189-93ca-96be9f9ece99.png", alt: "Spendora's mission presentation" },
    { src: "/lovable-uploads/9937f5f7-ec84-4a99-8719-715f1a743b92.png", alt: "Workshop conclusion" },
    { src: "/lovable-uploads/eabd20b0-ff60-4809-b6ca-6ef2878b3576.png", alt: "Learning about compound interest" },
  ];
  const day2Photos = [
    { src: "/lovable-uploads/1ee41063-a95d-4cb9-bcfd-ed9961525b86.png", alt: "Day 2 - Saving vs Investing" },
    { src: "/lovable-uploads/7695d299-bbc3-48ce-a41e-954300708ffa.png", alt: "Day 2 - Students engaged" },
    { src: "/lovable-uploads/4089050e-e0a8-4630-9c75-511673fd035d.png", alt: "Day 2 - Interactive session" },
    { src: "/lovable-uploads/0665f9c3-339d-4e49-bfc4-d6d00b95d8e6.png", alt: "Day 2 - Group discussion" },
  ];
  const day2Videos = [
    { src: "https://files.catbox.moe/b7vufo.MOV", alt: "Day 2 Video 1" },
    { src: "https://files.catbox.moe/o5monx.MOV", alt: "Day 2 Video 2" },
  ];
  const indianSchoolPhotos = [
    { src: "/lovable-uploads/indian-school-1.jpg", alt: "Teaching 300+ students at Sri Girdhar Techno School" },
    { src: "/lovable-uploads/indian-school-2.jpg", alt: "Students learning financial concepts" },
    { src: "/lovable-uploads/indian-school-3.jpg", alt: "Interactive presentation" },
    { src: "/lovable-uploads/indian-school-4.jpg", alt: "Engaged students" },
    { src: "/lovable-uploads/indian-school-5.jpg", alt: "Full classroom" },
    { src: "/lovable-uploads/indian-school-6.jpg", alt: "Financial literacy in progress" },
    { src: "/lovable-uploads/indian-school-7.jpg", alt: "Students participating" },
  ];
  const indianSchoolVideos = [
    { src: "/lovable-uploads/indian-school-video-1.mov", alt: "Indian School Video 1" },
    { src: "https://files.catbox.moe/my1k56.MOV", alt: "Indian School Video 2" },
    { src: "https://files.catbox.moe/xxvohu.MOV", alt: "Indian School Video 3" },
    { src: "https://files.catbox.moe/p5qi4y.MOV", alt: "Indian School Video 4" },
    { src: "https://files.catbox.moe/mz2ov5.MOV", alt: "Indian School Video 5" },
  ];
  const ramKrishnaPhotos = [
    { src: "/lovable-uploads/ram-krishna-school-1.jpg", alt: "Teaching at Ram Krishna Dwarika School" },
    { src: "/lovable-uploads/ram-krishna-school-2.jpg", alt: "Students learning at Ram Krishna School" },
  ];

  const renderGrid = (photos: {src:string;alt:string}[], videos: {src:string;alt:string}[] = []) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
      {photos.map((p, i) => (
        <div key={`p-${i}`} className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-zinc-950"><img src={p.src} alt={p.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" /></div>
          <div className="p-3 flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-400"><ImageIcon className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-[#52b788]" /><span className="truncate">{p.alt}</span></div>
        </div>
      ))}
      {videos.map((v, i) => (
        <div key={`v-${i}`} className="overflow-hidden rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
          <div className="aspect-[4/3] bg-black"><video src={v.src} controls preload="metadata" className="w-full h-full object-cover" /></div>
          <div className="p-3 flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-zinc-400"><Video className="w-3.5 h-3.5 text-emerald-600 dark:text-[#52b788] shrink-0" /><span className="truncate">{v.alt}</span></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-black font-manrope tracking-tight text-slate-900 dark:text-white mb-3">Workshop <span className="text-emerald-700 dark:text-[#52b788]">Gallery</span></h1>
          <p className="text-slate-600 dark:text-zinc-400 font-medium">Photos and video highlights from our workshops</p>
        </div>
        <div className="space-y-6">
          <Collapsible defaultOpen className="border border-slate-200 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-black shadow-md">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4"><div className="bg-emerald-700 dark:bg-[#2d6a4f] text-white px-4 py-2 rounded-xl font-extrabold text-sm font-manrope">DAY 1</div><div><h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">Introduction to Investing</h3><p className="text-xs font-medium text-slate-500 dark:text-zinc-400">Photos from Day 1</p></div></div>
              <ChevronDown className="h-5 w-5 text-slate-500 dark:text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>{renderGrid(day1Photos)}</CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen className="border border-slate-200 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-black shadow-md">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4"><div className="bg-emerald-700 dark:bg-[#2d6a4f] text-white px-4 py-2 rounded-xl font-extrabold text-sm font-manrope">DAY 2</div><div><h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">Saving vs Investing</h3><p className="text-xs font-medium text-slate-500 dark:text-zinc-400">Photos & videos from Day 2</p></div></div>
              <ChevronDown className="h-5 w-5 text-slate-500 dark:text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>{renderGrid(day2Photos, day2Videos)}</CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen id="indian-school" className="border border-emerald-300 dark:border-[#40916c]/30 rounded-2xl p-6 bg-emerald-50/40 dark:bg-zinc-900/50 shadow-md">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4"><div className="bg-emerald-700 dark:bg-[#2d6a4f] text-white px-4 py-2 rounded-xl font-extrabold text-sm font-manrope">300+ STUDENTS</div><div><h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">Indian School Workshop</h3><p className="text-xs font-medium text-slate-500 dark:text-zinc-400">Sri Girdhar Techno School</p></div></div>
              <ChevronDown className="h-5 w-5 text-slate-500 dark:text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>{renderGrid(indianSchoolPhotos, indianSchoolVideos)}</CollapsibleContent>
          </Collapsible>
          <Collapsible defaultOpen id="ram-krishna-school" className="border border-slate-200 dark:border-white/10 rounded-2xl p-6 bg-white dark:bg-black shadow-md">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4"><div className="bg-slate-200 dark:bg-white/10 text-slate-800 dark:text-white px-4 py-2 rounded-xl font-extrabold text-sm font-manrope">RAM KRISHNA</div><div><h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">Ram Krishna Dwarika School</h3><p className="text-xs font-medium text-slate-500 dark:text-zinc-400">Financial Literacy Workshop</p></div></div>
              <ChevronDown className="h-5 w-5 text-slate-500 dark:text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent>{renderGrid(ramKrishnaPhotos)}</CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
