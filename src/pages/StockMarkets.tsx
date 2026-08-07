import { useEffect } from "react";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StockMarkets = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Stock Markets & Investing | Spendora'; }, []);

  const paragraphs = [
    "To begin we need to talk about what a stock is. A stock is a small part of a company that you own. Whenever you buy a stock that means you now own a share of that specific company. For example when you buy a share of apple you now own a small part of apple.",
    "Now you might be wondering how you buy and sell these stocks to make money. Well, look no further, it's as easy as getting an app like robinhood which you use to buy stocks. You ideally buy low and try to sell high to make a profit. Prices go up and down every second and this is known as the stock market.",
    "For example if you bought 20 shares of apple at $250 a share(so 5000) and the stock jumped to $270(now investment is worth $5400) you would have made $400.",
    "Companies sell stocks because they want to raise money which is called capital because this capital allows them to grow as a company, build products, or even hire people. In return the investors(you) make money if the company does well.",
    "If a company makes more money and is doing well that can make the stock price go up and help you make profit. However on the other hand if it loses money or has problems inside the company or with a product the price might go down. Some main causes of prices changes are the news, economy, launch of new products, and trends.",
    "Now the bigger word for all of this is called investing. Investing means using your money to try and make more money over time. Stocks are what we have been talking about and is one way to invest but other places you can invest your money include crypto, bonds or even real estate.",
    "People invest all the time for different reasons but major reasons include wanting to build wealth over time, or saving for big things like retirement or college. However this is not sunshine and flowers and there are risks of investing.",
    "Stock prices can and do drop if a company doesn't do well and this means you could lose money. In addition some companies don't do well and this is why most people research about a company and its products before buying shares.",
    "To reduce this risk most people spread their money out by owning multiple different types of stocks and this is known as diversifying.",
    "Learning about stocks will help you understand money and how these companies work and the earlier you learn the better prepared you will be in the future and you can start earning money way easier."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-blue-700 dark:text-blue-400 text-xs font-bold mb-4"><TrendingUp className="w-3.5 h-3.5" /> Market Fundamentals</div>
          <h1 className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">Stock Markets & <span className="text-emerald-700 dark:text-[#52b788]">Investing</span></h1>
        </div>
        <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl space-y-6 text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
          {paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </div>
    </div>
  );
};

export default StockMarkets;
