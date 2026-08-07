import { useEffect } from "react";
import { ArrowLeft, ChevronDown, Video, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Workshop Gallery | Spendora';
    const desc = 'Photos and videos from Spendora financial literacy workshops: Day 1, Day 2, Indian School, and Ram Krishna School highlights.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement('meta'); meta.setAttribute('name','description'); document.head.appendChild(meta); }
    meta.setAttribute('content', desc);
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.setAttribute('rel','canonical'); document.head.appendChild(link); }
    link.setAttribute('href', window.location.origin + '/gallery');
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 150);
    }
  }, [location.hash]);

  const day1Photos = [
    { src: "/lovable-uploads/857218ea-0cf3-4f24-8242-23e038e71457.png", alt: "Students learning about investing origins" },
    { src: "/lovable-uploads/672fa77a-f981-49c2-b3ad-9ad462f1fb41.png", alt: "Presenter explaining financial charts" },
    { src: "/lovable-uploads/43ffa40d-8361-401a-a4ef-2251c466a8f4.png", alt: "Interactive discussion about investments" },
    { src: "/lovable-uploads/94b78fc9-f062-40b5-8e2e-977da26afeda.png", alt: "Setting up investment accounts" },
    { src: "/lovable-uploads/a9c673d3-410d-4593-a415-f9eaa6efbe74.png", alt: "Learning key economic terms" },
    { src: "/lovable-uploads/682cf84a-b680-4189-93ca-96be9f9ece99.png", alt: "Spendora's mission presentation" },
    { src: "/lovable-uploads/9937f5f7-ec84-4a99-8719-715f1a743b92.png", alt: "Workshop conclusion" },
    { src: "/lovable-uploads/eabd20b0-ff60-4809-b6ca-6ef2878b3576.png", alt: "Learning about compound interest" }
  ];

  const day2Photos = [
    { src: "/lovable-uploads/1ee41063-a95d-4cb9-bcfd-ed9961525b86.png", alt: "Day 2 - Saving vs Investing presentation" },
    { src: "/lovable-uploads/7695d299-bbc3-48ce-a41e-954300708ffa.png", alt: "Day 2 - Students engaged in learning" },
    { src: "/lovable-uploads/4089050e-e0a8-4630-9c75-511673fd035d.png", alt: "Day 2 - Interactive workshop session" },
    { src: "/lovable-uploads/0665f9c3-339d-4e49-bfc4-d6d00b95d8e6.png", alt: "Day 2 - Group discussion on financial concepts" }
  ];

  const day2Videos = [
    { src: "https://files.catbox.moe/b7vufo.MOV", alt: "Day 2 Workshop Video 1" },
    { src: "https://files.catbox.moe/o5monx.MOV", alt: "Day 2 Workshop Video 2" }
  ];

  const indianSchoolPhotos = [
    { src: "/lovable-uploads/indian-school-1.jpg", alt: "Teaching 300+ students at Sri Girdhar Techno School" },
    { src: "/lovable-uploads/indian-school-2.jpg", alt: "Students learning financial concepts" },
    { src: "/lovable-uploads/indian-school-3.jpg", alt: "Interactive presentation on development stages" },
    { src: "/lovable-uploads/indian-school-4.jpg", alt: "Engaged students during workshop session" },
    { src: "/lovable-uploads/indian-school-5.jpg", alt: "Full classroom of attentive students" },
    { src: "/lovable-uploads/indian-school-6.jpg", alt: "Financial literacy workshop in progress" },
    { src: "/lovable-uploads/indian-school-7.jpg", alt: "Students participating in financial education" }
  ];

  const indianSchoolVideos = [
    { src: "/lovable-uploads/indian-school-video-1.mov", alt: "Indian School Workshop Video 1" },
    { src: "https://files.catbox.moe/my1k56.MOV", alt: "Indian School Workshop Video 2" },
    { src: "https://files.catbox.moe/xxvohu.MOV", alt: "Indian School Workshop Video 3" },
    { src: "https://files.catbox.moe/p5qi4y.MOV", alt: "Indian School Workshop Video 4" },
    { src: "https://files.catbox.moe/mz2ov5.MOV", alt: "Indian School Workshop Video 5" }
  ];

  const ramKrishnaSchoolPhotos = [
    { src: "/lovable-uploads/ram-krishna-school-1.jpg", alt: "Teaching at Ram Krishna Dwarika School" },
    { src: "/lovable-uploads/ram-krishna-school-2.jpg", alt: "Students learning financial concepts at Ram Krishna Dwarika School" }
  ];

  const renderMediaGrid = (photos: {src: string; alt: string}[], videos: {src: string; alt: string}[] = []) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pt-6">
      {photos.map((photo, index) => (
        <div key={`photo-${index}`} className="group relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm hover:shadow-md transition-all">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 image-outline" loading="lazy" />
          </div>
          <div className="p-3.5 bg-card/90 backdrop-blur-sm border-t border-border/40 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <ImageIcon className="w-3.5 h-3.5 text-primary shrink-0" />
            <span className="truncate">{photo.alt}</span>
          </div>
        </div>
      ))}
      {videos.map((video, index) => (
        <div key={`video-${index}`} className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
          <div className="relative aspect-[4/3] bg-black">
            <video src={video.src} controls preload="metadata" className="w-full h-full object-cover" />
          </div>
          <div className="p-3.5 bg-card/90 backdrop-blur-sm border-t border-border/40 flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Video className="w-3.5 h-3.5 text-red-500 shrink-0" />
            <span className="truncate">{video.alt}</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>

        <div className="text-center mb-12 space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Workshop <span className="gradient-text-primary">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Photos and video highlights from our student financial literacy workshops
          </p>
        </div>

        <div className="space-y-6">
          {/* Day 1 */}
          <Collapsible defaultOpen className="border border-border/60 rounded-3xl p-6 bg-card/60 backdrop-blur-md shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-2xl font-bold text-sm sm:text-base shadow-xs">DAY 1</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Introduction to Investing</h3>
                  <p className="text-xs text-muted-foreground">Photos from Day 1 session</p>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {renderMediaGrid(day1Photos)}
            </CollapsibleContent>
          </Collapsible>

          {/* Day 2 */}
          <Collapsible defaultOpen className="border border-border/60 rounded-3xl p-6 bg-card/60 backdrop-blur-md shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-2xl font-bold text-sm sm:text-base shadow-xs">DAY 2</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Saving vs Investing</h3>
                  <p className="text-xs text-muted-foreground">Photos and videos from Day 2 session</p>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {renderMediaGrid(day2Photos, day2Videos)}
            </CollapsibleContent>
          </Collapsible>

          {/* Indian School (300+ Students) */}
          <Collapsible defaultOpen id="indian-school" className="border border-amber-500/30 rounded-3xl p-6 bg-amber-500/5 backdrop-blur-md shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-2 rounded-2xl font-bold text-sm sm:text-base shadow-xs">INDIAN SCHOOL</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">300+ Students Workshop</h3>
                  <p className="text-xs text-muted-foreground font-medium">Sri Girdhar Techno School — Photos & Videos</p>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {renderMediaGrid(indianSchoolPhotos, indianSchoolVideos)}
            </CollapsibleContent>
          </Collapsible>

          {/* Ram Krishna School */}
          <Collapsible id="ram-krishna-school" className="border border-border/60 rounded-3xl p-6 bg-card/60 backdrop-blur-md shadow-sm">
            <CollapsibleTrigger className="flex items-center justify-between w-full text-left group cursor-pointer select-none">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-2xl font-bold text-sm sm:text-base shadow-xs">RAM KRISHNA SCHOOL</div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Financial Literacy Workshop</h3>
                  <p className="text-xs text-muted-foreground">Ram Krishna Dwarika School</p>
                </div>
              </div>
              <ChevronDown className="h-5 w-5 text-muted-foreground group-data-[state=open]:rotate-180 transition-transform duration-200" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {renderMediaGrid(ramKrishnaSchoolPhotos)}
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md space-y-4 shadow-sm">
          <h3 className="text-2xl font-bold text-foreground">
            Join Us for Our Next Workshop!
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Be part of our growing community of students learning essential financial skills. 
            Sign up now to secure your spot for our upcoming sessions.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-base sm:text-lg font-bold shadow-md bg-primary text-primary-foreground"
            onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
          >
            Reserve Your Spot - It's Free! 🚀
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
