import { useEffect } from "react";
import { ArrowLeft, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WordByWordText from "@/components/WordByWordText";

const OnlineBusiness = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Online Business & E-Commerce | Spendora'; }, []);

  const paragraphs = [
    "You've seen people your age selling sneakers or jewelry on TikTok. The question is how. Most of them don't have a store. They sell online.",
    "An online business is just selling something through the internet. Social media made that a lot easier. You still have to pick a product, find customers, and not lose money on ads. Putting a link in your bio isn't a business by itself.",
    "Dropshipping is one way people start. You don't keep inventory. Someone orders from your store, you send the order to a supplier, and they ship it. A lot of people use Shopify, grab products from AliExpress or CJ Dropshipping, then run Instagram or TikTok ads. You keep the difference between what you charge and what the supplier charges. Sounds easy. The people who actually make money spend a lot of time on product research and ads.",
    "TikTok Shop is the other big one. You sell inside the app, in a video or a livestream. Pick something that looks good on camera, post about it, and people can buy without leaving TikTok. TikTok handles the payment. You still have to post a lot and keep up with what's trending.",
    "Ads matter. Instagram, Facebook, Google. You look at what worked, change what didn't, and try again. Nobody's just lucky at this.",
    "It's competitive and trends move fast. The useful part is you learn product research, branding, customer service, and marketing. That stuff shows up later even if you never run a store.",
    "At Spendora we walk through how people actually set this up. Finding a product, building a store, getting customers, taking payment. Then you can decide if you even want to try it."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-white/5 border border-purple-200 dark:border-white/10 text-purple-700 dark:text-purple-400 text-xs font-bold mb-4"><Store className="w-3.5 h-3.5" /> Selling online</div>
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
