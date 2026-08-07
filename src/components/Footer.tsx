import { Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-zinc-900 pt-20 pb-10 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-6">
            <img src="/logo-icon.png" alt="Spendora" className="h-8 w-auto" />
            <span className="text-2xl font-extrabold font-manrope tracking-tight text-slate-900 dark:text-white">Spendora</span>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-xs leading-relaxed text-sm font-medium">Student-led financial literacy workshop designed to make financial education fun, accessible, and practical for the next generation.</p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-3.5 text-slate-600 dark:text-zinc-400 text-sm font-medium">
            <li><Link to="/" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Gallery</Link></li>
            <li><Link to="/donate" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Donate</Link></li>
            <li><a href="https://forms.gle/JWCVyGcfN5UKiwqHA" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Registration</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest mb-6">Topics</h4>
          <ul className="space-y-3.5 text-slate-600 dark:text-zinc-400 text-sm font-medium">
            <li><Link to="/stock-markets" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Stock Markets</Link></li>
            <li><Link to="/budgeting" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Budgeting</Link></li>
            <li><Link to="/online-business" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Online Business</Link></li>
            <li><Link to="/crypto-nfts" className="hover:text-emerald-700 dark:hover:text-white transition-colors">Crypto & NFTs</Link></li>
          </ul>
        </div>
      </div>

      {/* CTA before footer text */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h2 className="text-4xl md:text-5xl font-black font-manrope mb-4 tracking-tight text-slate-900 dark:text-white">Ready to <span className="text-emerald-700 dark:text-[#52b788]">Start?</span></h2>
        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-400 mb-8 font-medium">Reserve your free spot and start your financial literacy journey today.</p>
        <button onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')} className="shiny-cta group shadow-xl hover:scale-105 transition-all">
          <span className="relative z-10 flex items-center gap-2 text-white font-bold text-base">Sign Up Free <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" /></span>
        </button>
      </div>

      {/* Watermark */}
      <div className="flex justify-center items-center py-6 opacity-20 pointer-events-none select-none">
        <h1 className="text-[15vw] leading-none font-black font-manrope tracking-tighter text-stroke">SPENDORA</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 dark:text-zinc-500 text-[11px] font-semibold uppercase tracking-widest">
        <p>&copy; 2025 Spendora. A project by East Ridge High School students.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 dark:hover:text-zinc-300 flex items-center gap-1.5 transition-colors"><Instagram className="w-3.5 h-3.5" /> Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
