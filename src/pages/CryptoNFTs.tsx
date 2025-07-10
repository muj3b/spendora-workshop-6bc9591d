import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import WordByWordText from "@/components/WordByWordText";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

const CryptoNFTs = () => {
  const navigate = useNavigate();

  const cryptoText = `There always seems to be another coin out there. From figures like KSI to Logan Paul it really does look like anyone can just make a crypto these days, and somehow people still buy them and get surprised when they lose their entire investment. As a general rule of thumb, if everyone in the world is calling it a meme coin then you can't be too surprised that it isn't a great asset.

But the thing is, crypto wasn't always like this and it really still isn't (assuming you know what you're doing). In the wake of the 2008 recession, leaders and innovators from the tech and finance field were looking for ways to detach from the modern financial system. 
"Why should a single authority be granted the right to control the entire global economy?"
"Why should poor decisions by these big players be able to ruin hundreds of millions of lives?" "Why can't people have any control over the system?"
Cryptocurrencies were meant to be the solution to this problem. The word crypto (κρυπτός) is a Greek root for hidden. Think of cryptids, creatures like bigfoot that only really exist in myth but aren't observable to the layman i.e. hidden.

The first major crypto was developed by a person under the alias of Satoshi Nakamoto. To this day their true identity remains unknown. On October 31st of 2008 they published the Bitcoin whitepaper. In crypto terms, a whitepaper is essentially the blueprint of a crypto. It lays out its fundamental principles, technical architecture, and the problem it's trying to solve. The whitepaper was titled "Bitcoin: A Peer-to-Peer Electronic Cash System." It introduced a decentralized system that allowed people to transfer assets directly without relying on banks, governments, or any central authority.
The real game changer, however, was blockchain. Blockchain is a public, distributed ledger that records every transaction through encryption. Once a transaction is recorded on the blockchain, it's there forever. No way to manipulate it or cheat it. Its encryption also marked it as a reliable method for private transactions. There isn't necessarily a way to track crypto payments. This has unfortunately made crypto popular amongst extremist and criminal groups but in some cases private payment can still be beneficial.
The blockchain model solved the double-spending problem. In digital transactions, theoretically, you can copy data and at that point what stops someone from copying a digital dollar and spending it twice? Traditional systems rely on centralized oversight (ie banks) to prevent this. Bitcoin instead uses consensus mechanisms where the entire network is made to agree whether a transaction is valid or not. If enough nodes say it's valid it'll go through. That lets way less fraud slip through the cracks.
Bitcoin, however, took time to get the reach it has today. In its early years Bitcoin was super obscure and traded on small internet forums for a few dollars. Cents even. I'm sure many of you have seen the meme of the guy telling people to spend $1 to buy bitcoin in 2009. It truly was a different time. Another famous bitcoin moment was its first transaction.  A man paid 10,000 Bitcoin for two pizzas ($40 worth of pizza). Today, he could probably buy the entire domino's franchise with that. Over time, more cryptos started to pop up. Ethereum came along and introduced smart contracts which are automated, programmable agreements that run on the blockchain. This greatly expanded the cryptosphere, from decentralized finance (DeFi) to NFTs and DAOs (essentially decentralized investment venture capital firms). The crypto space has since grown into a secondary financial marketplace. However, with all these uses some still view crypto as just being a more unstable version of a stock which leaves a lot to be desired. 
In present day crypto is gaining more credibility with many banks, companies, and even El Salvador accepting it as legal tender. At the same time ,however, meme coins, celebrity scams, and rug pulls dominate the headlines. It's super easy to look at crypto and just see that layer, and it's even easier to end up being one of those people being scammed in this market but with the deep dive we at spendora will go into, we hope you learn to see crypto as more than a meme.`;

  return (
    <PageTransition transitionType="fade">
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Button>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Crypto + NFTs
            </h1>

            {/* Resizable Split Layout */}
            <ResizablePanelGroup direction="horizontal" className="min-h-[600px] rounded-lg border">
              {/* Left Side - What is Crypto */}
              <ResizablePanel defaultSize={60} minSize={30}>
                <div className="h-full p-8 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
                  <h2 className="text-3xl font-bold text-orange-800 dark:text-orange-200 mb-6">
                    What is Crypto?
                  </h2>
                  
                  <div className="prose prose-lg max-w-none dark:prose-invert overflow-y-auto max-h-[500px]">
                    <WordByWordText 
                      text={cryptoText}
                      className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
                      delay={100}
                      wordDelay={200}
                    />
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle />
              
              {/* Right Side - NFTs */}
              <ResizablePanel defaultSize={40} minSize={30}>
                <div className="h-full p-8 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-purple-800 dark:text-purple-200 mb-6">
                      NFTs
                    </h2>
                    
                    <div className="bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-700 rounded-lg p-8">
                      <h3 className="text-2xl font-semibold text-purple-700 dark:text-purple-300 mb-4">
                        🎨 Coming Soon
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 text-lg">
                        We're working on creating comprehensive content about NFTs, digital ownership, and the creative economy in the blockchain space.
                      </p>
                    </div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default CryptoNFTs;