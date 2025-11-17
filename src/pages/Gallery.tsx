
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";

const Gallery = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // SEO
    document.title = 'Workshop Gallery | Spendora';
    const desc = 'Photos and videos from Spendora financial literacy workshops: Day 1 and Day 2 highlights.';
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

  const renderMediaGrid = (photos, videos = []) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {photos.map((photo, index) => (
        <div key={`photo-${index}`} className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/90 shadow-lg">
          <img src={photo.src} alt={photo.alt} className="w-full h-64 object-cover" loading="lazy" />
          <div className="p-4"><p className="text-sm text-muted-foreground">{photo.alt}</p></div>
        </div>
      ))}
      {videos.map((video, index) => (
        <div key={`video-${index}`} className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/90 shadow-lg">
          <video src={video.src} controls preload="metadata" className="w-full h-64 object-cover" />
          <div className="p-4"><p className="text-sm text-muted-foreground">{video.alt}</p></div>
        </div>
      ))}
    </div>
  );

  return (
    <PageTransition>
      <div className="min-h-screen liquid-page transition-colors duration-300">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="flex items-center gap-2 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4" />Back to Home
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-display mb-4 gradient-text-primary">Workshop Gallery</h1>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">Highlights from our financial literacy workshops</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <Collapsible defaultOpen className="border rounded-lg p-6 liquid-glass-surface">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold text-xl">DAY 1</div>
                  <span className="text-lg font-semibold">Introduction to Investing</span>
                </div>
                <ChevronDown className="h-5 w-5 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                {renderMediaGrid(day1Photos)}
              </CollapsibleContent>
            </Collapsible>

            <Collapsible defaultOpen className="border rounded-lg p-6 liquid-glass-surface">
              <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-xl font-bold text-xl">DAY 2</div>
                  <span className="text-lg font-semibold">Saving vs Investing</span>
                </div>
                <ChevronDown className="h-5 w-5 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-6">
                {renderMediaGrid(day2Photos, day2Videos)}
              </CollapsibleContent>
            </Collapsible>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Collapsible id="indian-school" className="border rounded-lg p-6 liquid-glass-surface transition-all duration-300">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                  <div className="flex flex-col gap-3">
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-xl font-bold text-xl transition-all duration-300">INDIAN SCHOOL</div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold transition-colors duration-300">300+ Students Workshop</span>
                      <span className="text-sm text-muted-foreground">Sri Girdhar Techno School</span>
                      <span className="text-xs text-primary mt-2 group-hover:underline">Click to view photos & videos →</span>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-6">
                  {renderMediaGrid(indianSchoolPhotos, indianSchoolVideos)}
                </CollapsibleContent>
              </Collapsible>

              <Collapsible id="ram-krishna-school" className="border rounded-lg p-6 liquid-glass-surface transition-all duration-300">
                <CollapsibleTrigger className="flex items-center justify-between w-full text-left group">
                  <div className="flex flex-col gap-3">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold text-xl transition-all duration-300">RAM KRISHNA SCHOOL</div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold transition-colors duration-300">Financial Literacy Workshop</span>
                      <span className="text-sm text-muted-foreground">Ram Krishna Dwarika School</span>
                      <span className="text-xs text-primary mt-2 group-hover:underline">Click to view photos →</span>
                    </div>
                  </div>
                  <ChevronDown className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-6">
                  {renderMediaGrid(ramKrishnaSchoolPhotos)}
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>

          {/* Footer Section */}
          <div className="text-center mt-16 py-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Us for Our Next Workshop!
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Be part of our growing community of students learning essential financial skills. 
              Sign up now to secure your spot for our upcoming sessions.
            </p>
            <Button
              size="lg"
              className="px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
            >
              Reserve Your Spot - It's Free! 🚀
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Gallery;
