import { useEffect } from "react";
import { ArrowLeft, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const OnlineBusiness = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Online Business & E-Commerce | Spendora';
  }, []);

  const paragraphs = [
    "Starting an online business in high school is more accessible than ever thanks to modern tools and digital platforms. From e-commerce stores and dropshipping to digital services and content creation, the internet offers endless opportunities.",
    "E-commerce allows you to sell products online to a global audience without needing a physical storefront. Dropshipping goes one step further by allowing you to sell items without keeping inventory—when a customer buys from your store, the supplier ships it directly to them.",
    "Marketing is the fuel of any online business. Learning how to leverage organic social media content on platforms like TikTok, Instagram Reels, and YouTube Shorts can generate thousands of views and sales without spending money on ads.",
    "Key fundamentals of building a digital business include identifying a target audience, creating a compelling value proposition, providing great customer service, and analyzing your analytics to optimize performance.",
    "Starting early gives you a massive advantage. Even if your first venture doesn't make millions, the skills you learn in marketing, web design, customer acquisition, and money management will stay with you forever."
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')} 
          className="mb-8 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Button>

        <div className="space-y-4 mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-semibold">
            <Store className="w-3.5 h-3.5" />
            <span>Digital Entrepreneurship</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Online Business & <span className="gradient-text-primary">E-Commerce</span>
          </h1>
        </div>

        {/* Hero Image Asset */}
        <div className="rounded-3xl overflow-hidden mb-10 border border-border/80 image-outline shadow-md">
          <img src="/images/business.jpg" alt="E-commerce digital business dashboard" className="w-full h-[280px] sm:h-[360px] object-cover" />
        </div>

        <div className="p-8 rounded-3xl border border-border/60 bg-card/60 backdrop-blur-md shadow-xs space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base text-left">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineBusiness;
