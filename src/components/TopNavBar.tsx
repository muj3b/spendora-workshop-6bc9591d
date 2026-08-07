import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, Moon, Sun, Instagram, X } from "lucide-react";
import SearchBar from "./SearchBar";

const TopNavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const mainNav = [
    { label: "About", href: "/#about-spendora" },
    { label: "Workshops", href: "/#workshop-schedule" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const linkCls = (href: string) =>
    `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 relative ${
      location.hash && href.endsWith(location.hash) 
        ? "text-foreground font-bold" 
        : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 pointer-events-none">
        <div className={`transition-all duration-300 pointer-events-auto ${
          scrolled 
            ? 'mx-4 mt-3' 
            : 'container mx-auto px-4 mt-4'
        }`}>
          <div className={`transition-all duration-300 border border-border/60 bg-card/80 backdrop-blur-md shadow-sm ${
            scrolled 
              ? 'rounded-full px-4 py-2 w-auto ml-auto mr-0 max-w-fit' 
              : 'rounded-full px-6 py-3'
          }`}>
          
          {/* Expanded state - when at top */}
          {!scrolled && (
            <div className="flex items-center justify-between w-full">
              {/* Brand Logo */}
              <Link to="/" className="flex items-center gap-2.5 group">
                <img src="/logo-icon.png" alt="Spendora Logo" className="h-8 w-auto object-contain group-hover:scale-105 transition-transform" />
                <span className="text-xl font-black tracking-tight text-foreground">Spendora</span>
              </Link>

              {/* Main nav */}
              <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
                {mainNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={linkCls(item.href)}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <SearchBar />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="rounded-full h-9 w-9"
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
                
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Menu"
                  className="rounded-full h-9 w-9"
                >
                  {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          )}

          {/* Collapsed state - when scrolled */}
          {scrolled && (
            <div className="flex items-center gap-2.5">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo-icon.png" alt="Spendora Logo" className="h-7 w-auto object-contain" />
              </Link>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full h-8 w-8"
              >
                {theme === "light" ? (
                  <Moon className="h-3.5 w-3.5" />
                ) : (
                  <Sun className="h-3.5 w-3.5" />
                )}
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
                className="rounded-full h-8 w-8"
              >
                {menuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
              </Button>
            </div>
          )}
        </div>
      </div>
      </header>

      {/* Menu Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100]">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMenuOpen(false)}
          />
          
          <div className="absolute top-0 right-0 h-screen w-[300px] sm:w-[380px] bg-background border-l border-border shadow-2xl overflow-y-auto transform transition-transform duration-200 ease-out animate-in slide-in-from-right">
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-border/40">
                  <div className="flex items-center gap-2">
                    <img src="/logo-icon.png" alt="Spendora Logo" className="h-7 w-auto" />
                    <span className="font-extrabold text-lg text-foreground">Spendora</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-full"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Navigate</h4>
                    <div className="space-y-1">
                      {mainNav.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Topics</h4>
                    <div className="space-y-1">
                      <Link to="/stock-markets" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors">Stock Markets</Link>
                      <Link to="/budgeting" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors">Budgeting</Link>
                      <Link to="/online-business" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors">Online Business</Link>
                      <Link to="/crypto-nfts" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors">Crypto & NFTs</Link>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Explore</h4>
                    <div className="space-y-1">
                      <Link to="/gallery" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors">Gallery</Link>
                      <Link to="/donate" onClick={() => setMenuOpen(false)} className="block px-3 py-2 rounded-xl text-base font-semibold text-foreground hover:bg-muted transition-colors">Donate</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full justify-center rounded-xl font-bold gap-2"
                  onClick={() => {
                    window.open('https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', '_blank');
                    setMenuOpen(false);
                  }}
                >
                  <Instagram className="h-4 w-4" />
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopNavBar;
