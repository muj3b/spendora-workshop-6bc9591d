import { useEffect } from "react";
import { ArrowLeft, Coins } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CryptoNFTs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Crypto & NFTs | Spendora';
  }, []);

  const paragraphs = [
    "Cryptocurrency and Web3 technologies represent a fundamental shift in how digital ownership and financial transactions work across the internet.",
    "At the core of cryptocurrency is Blockchain technology—a decentralized, immutable ledger that records transactions across a network of computers. Unlike traditional money, cryptocurrencies like Bitcoin and Ethereum operate without a central bank or government controlling them.",
    "NFTs (Non-Fungible Tokens) are unique digital tokens stored on a blockchain that prove ownership of a specific item, such as digital art, collectibles, domain names, or in-game assets.",
    "While digital assets offer exciting technological innovations and high potential returns, they are also highly volatile and carry significant risk. Understanding security, cold wallets, smart contracts, and risk management is crucial before investing.",
    "Learning the mechanics of blockchain technology helps you understand where digital finance and web technology are heading in the future."
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold">
            <Coins className="w-3.5 h-3.5" />
            <span>Digital Assets</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Crypto & <span className="gradient-text-primary">NFTs</span>
          </h1>
        </div>

        {/* Hero Image Asset */}
        <div className="rounded-3xl overflow-hidden mb-10 border border-border/80 image-outline shadow-md">
          <img src="/images/crypto.jpg" alt="Crypto and blockchain digital asset artwork" className="w-full h-[280px] sm:h-[360px] object-cover" />
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

export default CryptoNFTs;