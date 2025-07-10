
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import WordByWordText from "@/components/WordByWordText";

const StockMarkets = () => {
  const navigate = useNavigate();

  const articleText = `To begin we need to talk about what a stock is. A stock is a small part of a company that you own. Whenever you buy a stock that means you now own a share of that specific company. For example when you buy a share of apple you now own a small part of apple.

Now you might be wondering how you buy and sell these stocks to make money. Well, look no further, it's as easy as getting an app like robinhood which you use to buy stocks. You ideally buy low and try to sell high to make a profit. Prices go up and down every second and this is known as the stock market.

For example if you bought 20 shares of apple at $250 a share(so 5000) and the stock jumped to $270(now investment is worth $5400) you would have made $400.

Companies sell stocks because they want to raise money which is called capital because this capital allows them to grow as a company, build products, or even hire people. In return the investors(you) make money if the company does well.

If a company makes more money and is doing well that can make the stock price go up and help you make profit. However on the other hand if it loses money or has problems inside the company or with a product the price might go down. Some main causes of prices changes are the news, economy, launch of new products, and trends.

Now the bigger word for all of this is called investing. Investing means using your money to try and make more money over time. Stocks are what we have been talking about and is one way to invest but other places you can invest your money include crypto, bonds or even real estate.

People invest all the time for different reasons but major reasons include wanting to build wealth over time, or saving for big things like retirement or college. However this is not sunshine and flowers and there are risks of investing.

Stock prices can and do drop if a company doesn't do well and this means you could lose money. In addition some companies don't do well and this is why most people research about a company and its products before buying shares.

To reduce this risk most people spread their money out by owning multiple different types of stocks and this is known as diversifying.

Learning about stocks will help you understand money and how these companies work and the earlier you learn the better prepared you will be in the future and you can start earning money way easier.`;

  return (
    <PageTransition transitionType="fade">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                🚧 Page Under Construction
              </h2>
              <p className="text-yellow-700 dark:text-yellow-300">
                This page is still being worked on. We're adding more content and features to make your learning experience even better!
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Stock Markets & Investing
            </h1>

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <WordByWordText 
                text={articleText}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                delay={100}
                wordDelay={200}
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default StockMarkets;
