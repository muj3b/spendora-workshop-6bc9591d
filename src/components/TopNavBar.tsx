import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, Instagram, X, ArrowRight, Sun, Moon } from "lucide-react";
import SearchBar from "./SearchBar";
import { useTheme } from "@/contexts/ThemeContext";

const TopNavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const mainNav = [
    { label: "Workshop", href: "/#workshop-schedule" },
    { label: "About", href: "/#about-spendora" },
    { label: "Gallery", href: "/gallery" },
    { label: "Donate", href: "/donate" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [menuOpen]);

  return (
    <>
      <div className="gradient-blur" />
      <header className={`fixed top-0 left-0 w-full z-50 px-4 transition-all duration-500 ease-in-out ${scrolled ? 'pt-3' : 'pt-4 md:pt-6'}`}>
        <nav className={`mx-auto flex items-center justify-between backdrop-blur-xl rounded-full transition-all duration-500 ease-in-out ${
          scrolled 
            ? 'max-w-2xl sm:max-w-3xl px-5 py-2 bg-white/95 dark:bg-black/90 border border-slate-300 dark:border-white/20 shadow-2xl' 
            : 'max-w-5xl px-6 py-3.5 bg-white/80 dark:bg-black/70 border border-slate-200/80 dark:border-white/10 shadow-lg'
        }`}>
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <img src="/logo-icon.png" alt="Spendora" className={`w-auto group-hover:scale-105 transition-all duration-300 ${scrolled ? 'h-7' : 'h-8'}`} />
            <span className="text-base sm:text-lg font-extrabold font-manrope tracking-tight text-slate-900 dark:text-white">Spendora</span>
          </Link>

          {/* Full Nav Links — Hide on scroll for clean compact bar */}
          <div className={`hidden md:flex items-center gap-7 transition-all duration-300 ${scrolled ? 'opacity-0 pointer-events-none hidden' : 'opacity-100'}`}>
            {mainNav.map((item) => (
              item.href.startsWith('/') && !item.href.includes('#') ? (
                <Link key={item.label} to={item.href} className="text-sm font-semibold text-slate-600 hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-white transition-colors">{item.label}</Link>
              ) : (
                <a key={item.label} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-emerald-700 dark:text-zinc-400 dark:hover:text-white transition-colors">{item.label}</a>
              )
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search — Hide on scroll to prevent crowding */}
            {!scrolled && <SearchBar />}
            
            {/* Theme Toggle Button — Hide on scroll to keep bar minimal */}
            {!scrolled && (
              <button 
                onClick={toggleTheme} 
                aria-label="Toggle dark mode"
                className="p-1.5 rounded-full text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-slate-700" />}
              </button>
            )}

            {/* Always visible Sign Up button */}
            <button
              onClick={() => window.open('https://forms.gle/JWCVyGcfN5UKiwqHA', '_blank')}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-emerald-800 dark:bg-white/10 hover:bg-emerald-900 dark:hover:bg-white/20 px-4 py-1.5 transition-all active:scale-95 shadow-md"
            >
              <span className="relative z-10 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white">
                Sign Up <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>

            {/* Hamburger Menu Trigger */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              aria-label="Open menu"
              className="p-1.5 text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Hamburger Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          <div className="absolute inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-screen w-[300px] sm:w-[380px] bg-white dark:bg-black border-l border-slate-200 dark:border-white/10 overflow-y-auto shadow-2xl">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex items-center gap-2.5">
                    <img src="/logo-icon.png" alt="Spendora" className="h-7 w-auto" />
                    <span className="font-extrabold text-lg text-slate-900 dark:text-white font-manrope">Spendora</span>
                  </div>
                  <button onClick={() => setMenuOpen(false)} className="text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white"><X className="h-5 w-5" /></button>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest mb-3">Navigate</h4>
                    <div className="space-y-1">
                      {mainNav.map((item) => (
                        item.href.startsWith('/') && !item.href.includes('#') ? (
                          <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all">{item.label}</Link>
                        ) : (
                          <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all">{item.label}</a>
                        )
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest mb-3">Topics</h4>
                    <div className="space-y-1">
                      <Link to="/stock-markets" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all">Stock Markets</Link>
                      <Link to="/budgeting" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all">Budgeting</Link>
                      <Link to="/online-business" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all">Online Business</Link>
                      <Link to="/crypto-nfts" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all">Crypto & NFTs</Link>
                    </div>
                  </div>

                  {/* Mode Switcher in Menu */}
                  <div className="pt-2">
                    <h4 className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest mb-3">Appearance</h4>
                    <button
                      onClick={toggleTheme}
                      className="w-full flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 font-medium text-sm hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                    >
                      <span className="flex items-center gap-2">
                        {theme === 'dark' ? <Moon className="h-4 w-4 text-emerald-400" /> : <Sun className="h-4 w-4 text-amber-500" />}
                        {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                      </span>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-bold uppercase tracking-wider">
                        Switch
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-slate-200 dark:border-white/10">
                <button onClick={() => { window.open('https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', '_blank'); setMenuOpen(false); }} className="w-full py-3 px-4 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 rounded-lg text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2">
                  <Instagram className="h-4 w-4" /> Follow on Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavBar;
