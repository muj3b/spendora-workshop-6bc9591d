import { Instagram, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-slate-100 dark:bg-black border-t border-slate-200 dark:border-zinc-900 pt-20 pb-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-5">
            <img src="/logo-icon.png" alt="Spendora" className="h-8 w-auto" />
            <span className="text-2xl font-extrabold font-manrope tracking-tight text-slate-900 dark:text-white">Spendora</span>
          </div>
          <p className="text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed text-sm font-medium">
            A free financial education workshop created and run by East Ridge High School students. We teach practical investing, budgeting, and money management.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5">Navigation</h4>
          <ul className="space-y-3 text-slate-600 dark:text-zinc-400 text-sm font-medium">
            <li><Link to="/" className="hover:text-slate-900 dark:hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/gallery" className="hover:text-slate-900 dark:hover:text-white transition-colors">Workshop Gallery</Link></li>
            <li><Link to="/audiobook" className="hover:text-slate-900 dark:hover:text-white transition-colors">Audio Course</Link></li>
            <li><a href="/#partners" className="hover:text-slate-900 dark:hover:text-white transition-colors">Partners</a></li>
            <li><a href="/#press" className="hover:text-slate-900 dark:hover:text-white transition-colors">Press Coverage</a></li>
            <li><Link to="/donate" className="hover:text-slate-900 dark:hover:text-white transition-colors">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-5">Topics</h4>
          <ul className="space-y-3 text-slate-600 dark:text-zinc-400 text-sm font-medium">
            <li><Link to="/stock-markets" className="hover:text-slate-900 dark:hover:text-white transition-colors">Stock Markets</Link></li>
            <li><Link to="/budgeting" className="hover:text-slate-900 dark:hover:text-white transition-colors">Budgeting</Link></li>
            <li><Link to="/online-business" className="hover:text-slate-900 dark:hover:text-white transition-colors">Online Business</Link></li>
            <li><Link to="/crypto-nfts" className="hover:text-slate-900 dark:hover:text-white transition-colors">Crypto & NFTs</Link></li>
          </ul>
        </div>
      </div>

      {/* Prominent Instagram Spotlight */}
      <div className="max-w-5xl mx-auto px-6 mb-16">
        <a
          href="https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 hover:border-pink-500/40 dark:hover:border-pink-500/40 transition-all shadow-xs cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-pink-500/10 dark:bg-pink-500/15 text-pink-600 dark:text-pink-400 shrink-0">
              <Instagram className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Official Social Media
              </div>
              <div className="text-base font-extrabold text-slate-900 dark:text-white font-manrope">
                @spendora.erhs on Instagram
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 mt-0.5">
                Workshop highlights, student updates, and financial tips from East Ridge High School.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors shrink-0">
            <span>Follow on Instagram</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>
      </div>

      {/* Registration CTA */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold font-manrope mb-3 tracking-tight text-slate-900 dark:text-white">
          Join our next workshop
        </h2>
        <p className="text-base text-slate-600 dark:text-zinc-400 mb-8 font-medium">
          Free admission for all high school and middle school students.
        </p>
        <button
          onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
          className="px-8 py-4 rounded-full bg-emerald-700 hover:bg-emerald-800 dark:bg-[#2d6a4f] dark:hover:bg-[#1b4332] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
        >
          <span>Sign Up on Google Forms</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Copyright row */}
      <div className="max-w-5xl mx-auto px-6 border-t border-slate-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-slate-500 dark:text-zinc-500 text-xs font-medium">
        <p>&copy; 2026 Spendora. A student-led project founded at East Ridge High School.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 dark:hover:text-white flex items-center gap-1.5 font-semibold transition-colors"
          >
            <Instagram className="w-4 h-4 text-pink-500" />
            <span>@spendora.erhs</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
