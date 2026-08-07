import { useEffect } from "react";
import { ArrowLeft, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OnlineBusiness = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Online Business & E-Commerce | Spendora'; }, []);

  const paragraphs = [
    "Starting an online business in high school is more accessible than ever thanks to modern tools and digital platforms. From e-commerce stores and dropshipping to digital services and content creation, the internet offers endless opportunities.",
    "E-commerce allows you to sell products online to a global audience without needing a physical storefront. Dropshipping goes one step further by allowing you to sell items without keeping inventory—when a customer buys from your store, the supplier ships it directly to them.",
    "Marketing is the fuel of any online business. Learning how to leverage organic social media content on platforms like TikTok, Instagram Reels, and YouTube Shorts can generate thousands of views and sales without spending money on ads.",
    "Key fundamentals of building a digital business include identifying a target audience, creating a compelling value proposition, providing great customer service, and analyzing your analytics to optimize performance.",
    "Starting early gives you a massive advantage. Even if your first venture doesn't make millions, the skills you learn in marketing, web design, customer acquisition, and money management will stay with you forever."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 text-purple-700 dark:text-purple-400 text-xs font-bold mb-4"><Store className="w-3.5 h-3.5" /> Digital Entrepreneurship</div>
          <h1 className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">Online Business & <span className="text-emerald-700 dark:text-[#52b788]">E-Commerce</span></h1>
        </div>
        <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl space-y-6 text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
          {paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </div>
    </div>
  );
};

export default OnlineBusiness;
