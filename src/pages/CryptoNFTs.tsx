import { useEffect } from "react";
import { ArrowLeft, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";
import WordByWordText from "@/components/WordByWordText";

const CryptoNFTs = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Crypto & NFTs | Spendora'; }, []);

  const cryptoParagraphs = [
    "There always seems to be another coin out there. From figures like KSI to Logan Paul it really does look like anyone can just make a crypto these days, and somehow people still buy them and get surprised when they lose their entire investment. As a general rule of thumb, if everyone in the world is calling it a meme coin then you can't be too surprised that it isn't a great asset.",
    "But the thing is, crypto wasn't always like this and it really still isn't (assuming you know what you're doing). In the wake of the 2008 recession, leaders and innovators from the tech and finance field were looking for ways to detach from the modern financial system. \"Why should a single authority be granted the right to control the entire global economy?\" \"Why should poor decisions by these big players be able to ruin hundreds of millions of lives?\" \"Why can't people have any control over the system?\" Cryptocurrencies were meant to be the solution to this problem. The word crypto (κρυπτός) is a Greek root for hidden. Think of cryptids, creatures like bigfoot that only really exist in myth but aren't observable to the layman i.e. hidden.",
    "The first major crypto was developed by a person under the alias of Satoshi Nakamoto. To this day their true identity remains unknown. On October 31st of 2008 they published the Bitcoin whitepaper. In crypto terms, a whitepaper is essentially the blueprint of a crypto. It lays out its fundamental principles, technical architecture, and the problem it's trying to solve. The whitepaper was titled \"Bitcoin: A Peer-to-Peer Electronic Cash System.\" It introduced a decentralized system that allowed people to transfer assets directly without relying on banks, governments, or any central authority.",
    "The real game changer, however, was blockchain. Blockchain is a public, distributed ledger that records every transaction through encryption. Once a transaction is recorded on the blockchain, it's there forever. No way to manipulate it or cheat it. Its encryption also marked it as a reliable method for private transactions. There isn't necessarily a way to track crypto payments. This has unfortunately made crypto popular amongst extremist and criminal groups but in some cases private payment can still be beneficial.",
    "The blockchain model solved the double-spending problem. In digital transactions, theoretically, you can copy data and at that point what stops someone from copying a digital dollar and spending it twice? Traditional systems rely on centralized oversight (ie banks) to prevent this. Bitcoin instead uses consensus mechanisms where the entire network is made to agree whether a transaction is valid or not. If enough nodes say it's valid it'll go through. That lets way less fraud slip through the cracks.",
    "Bitcoin, however, took time to get the reach it has today. In its early years Bitcoin was super obscure and traded on small internet forums for a few dollars. Cents even. I'm sure many of you have seen the meme of the guy telling people to spend $1 to buy bitcoin in 2009. It truly was a different time. Another famous bitcoin moment was its first transaction. A man paid 10,000 Bitcoin for two pizzas ($40 worth of pizza). Today, he could probably buy the entire domino's franchise with that. Over time, more cryptos started to pop up. Ethereum came along and introduced smart contracts which are automated, programmable agreements that run on the blockchain. This greatly expanded the cryptosphere, from decentralized finance (DeFi) to NFTs and DAOs (essentially decentralized investment venture capital firms). The crypto space has since grown into a secondary financial marketplace. However, with all these uses some still view crypto as just being a more unstable version of a stock which leaves a lot to be desired.",
    "In present day crypto is gaining more credibility with many banks, companies, and even El Salvador accepting it as legal tender. At the same time, however, meme coins, celebrity scams, and rug pulls dominate the headlines. It's super easy to look at crypto and just see that layer, and it's even easier to end up being one of those people being scammed in this market but with the deep dive we at spendora will go into, we hope you learn to see crypto as more than a meme."
  ];

  const nftParagraphs = [
    "You've probably seen those expensive digital art pieces that sell for thousands of dollars and wondered \"Why would anyone pay real money for a JPEG?\" Well, NFTs are way more than just digital pictures—they're like digital certificates of ownership that prove you own something unique on the blockchain.",
    "Think of NFTs like trading cards, but digital. Just like how a rare Pokemon card has value because it's authentic and limited, NFTs use blockchain technology to prove that your digital item is the \"real deal\" and not just a copy. When you buy an NFT, you're not just buying the image—you're buying proof that you own the original version.",
    "NFTs exploded in popularity when digital artists started selling their work for crazy amounts. Some collections like Bored Ape Yacht Club or CryptoPunks became status symbols, kind of like owning expensive sneakers or designer clothes, but in the digital world. People would use them as profile pictures to show off their digital wealth.",
    "But NFTs aren't just about art. They can represent ownership of anything digital: music, videos, game items, virtual real estate, or even access passes to exclusive events. Some creators use NFTs to sell concert tickets, grant access to private Discord servers, or give holders special privileges.",
    "The NFT market is extremely volatile and risky. Prices can crash overnight, and many projects end up being worthless. However, understanding NFTs helps you grasp how digital ownership might work in the future, especially as we move toward more virtual and online experiences.",
    "At Spendora, we'll break down how NFTs actually work, what gives them value, and how to spot potential scams in this space. You'll learn to think critically about digital assets and understand this technology without getting caught up in the hype."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-white/5 border border-amber-200 dark:border-white/10 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4"><Coins className="w-3.5 h-3.5" /> Digital Assets</div>
          <h1 className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">Crypto & <span className="text-emerald-700 dark:text-[#52b788]">NFTs</span></h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-white/10">What is Crypto?</h2>
            <WordByWordText paragraphs={cryptoParagraphs} delay={100} wordDelay={150} />
          </div>
          <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-200 dark:border-white/10">NFTs (Non-Fungible Tokens)</h2>
            <WordByWordText paragraphs={nftParagraphs} delay={300} wordDelay={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoNFTs;