import { useEffect } from "react";
import { ArrowLeft, Coins } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CryptoNFTs = () => {
  const navigate = useNavigate();
  useEffect(() => { window.scrollTo(0, 0); document.title = 'Crypto & NFTs | Spendora'; }, []);

  const paragraphs = [
    "Cryptocurrency and Web3 technologies represent a fundamental shift in how digital ownership and financial transactions work across the internet.",
    "At the core of cryptocurrency is Blockchain technology—a decentralized, immutable ledger that records transactions across a network of computers. Unlike traditional money, cryptocurrencies like Bitcoin and Ethereum operate without a central bank or government controlling them.",
    "NFTs (Non-Fungible Tokens) are unique digital tokens stored on a blockchain that prove ownership of a specific item, such as digital art, collectibles, domain names, or in-game assets.",
    "While digital assets offer exciting technological innovations and high potential returns, they are also highly volatile and carry significant risk. Understanding security, cold wallets, smart contracts, and risk management is crucial before investing.",
    "Learning the mechanics of blockchain technology helps you understand where digital finance and web technology are heading in the future."
  ];

  return (
    <div className="relative z-10 min-h-screen pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button onClick={() => navigate('/')} className="mb-8 flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors"><ArrowLeft className="w-4 h-4" /> Back to Home</button>
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-white/5 border border-amber-200 dark:border-white/10 text-amber-700 dark:text-amber-400 text-xs font-bold mb-4"><Coins className="w-3.5 h-3.5" /> Digital Assets</div>
          <h1 className="text-4xl sm:text-5xl font-black font-manrope tracking-tight text-slate-900 dark:text-white">Crypto & <span className="text-emerald-700 dark:text-[#52b788]">NFTs</span></h1>
        </div>
        <div className="p-8 border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-xl space-y-6 text-slate-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base font-medium">
          {paragraphs.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </div>
    </div>
  );
};

export default CryptoNFTs;