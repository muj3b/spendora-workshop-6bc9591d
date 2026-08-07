import { useEffect } from "react";
import { ArrowLeft, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WordByWordText from "@/components/WordByWordText";

const OnlineBusiness = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Online Business & E-Commerce | Spendora'; }, []);

  const paragraphs = [
    "Scrolling through TikTok or Instagram, you've probably seen countless people your age running their own businesses, selling anything from trendy sneakers to custom-made jewelry. You might have wondered, \"How exactly do they do that?\" Well, welcome to the exciting world of online business, a modern way for anyone, anywhere, to make money from their own ideas—without needing a physical store.",
    "An online business simply means selling products or services using the internet. It's grown tremendously over recent years, especially as social media platforms made it easier than ever to reach potential customers worldwide. But it's not just about putting things online and hoping they sell; there's a bit more to it than that.",
    "One of the most popular ways to get started is called dropshipping. Dropshipping is a business model where you don't actually keep any products in stock yourself. Instead, when someone orders from your store, you forward the order to a supplier (often in another country), who then ships the item directly to your customer. This means you don't need much money upfront—no warehouse, no inventory, no packaging supplies. To get started, most people open an online store on platforms like Shopify, pick trending products from suppliers on websites like AliExpress or CJ Dropshipping, and then use Instagram or TikTok ads to drive traffic to their website. When customers buy, you just keep the difference between your selling price and the supplier's price. Simple in theory—but successful dropshippers spend a lot of time researching products, competitors, and advertising strategies.",
    "Another growing model is social commerce, specifically TikTok Shop. TikTok Shop lets creators sell products directly within TikTok videos or livestreams. It's basically combining entertainment and sales into one seamless experience. To do this successfully, you'd first pick a product (something visually appealing, affordable, or uniquely trending). Then you'd create engaging, viral-worthy TikToks demonstrating or featuring your product, and finally, viewers can purchase right within the app itself. TikTok handles payments, and you just collect your earnings. Many teens have already turned simple ideas into successful businesses overnight this way, but again—it requires consistent posting, smart video content, and keeping up with trends.",
    "Selling online also means understanding digital marketing. Ads on Instagram, Facebook, and Google help target exactly who's most likely to buy from you. Successful business owners learn how to read analytics, test different marketing angles, and optimize their stores for sales. It's not random luck—it's research, careful planning, and creativity.",
    "Of course, online business has its challenges. Competition is fierce, trends change quickly, and success doesn't happen overnight. However, mastering these skills early sets you apart. You'll learn things like product research, branding, customer service, marketing, and analytics—all crucial skills no matter your future career.",
    "At Spendora, we'll guide you step-by-step through setting up your own online business. You'll see exactly how successful online entrepreneurs find products, build effective online stores, use social media to attract customers, and handle payments. We'll break it down into clear, actionable steps so you can confidently launch your own venture. Who knows—your next great business idea could be just a few clicks away."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 text-purple-700 dark:text-purple-400 text-xs font-bold mb-4"><Store className="w-3.5 h-3.5" /> Digital Entrepreneurship</div>
          <h1 className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">Online Business & <span className="text-emerald-700 dark:text-[#52b788]">E-Commerce</span></h1>
        </div>
        <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
          <WordByWordText paragraphs={paragraphs} delay={100} wordDelay={150} />
        </div>
      </div>
    </div>
  );
};

export default OnlineBusiness;
