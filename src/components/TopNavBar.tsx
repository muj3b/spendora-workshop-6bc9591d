import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { Menu, MoreHorizontal, Moon, Sun, Instagram, X } from "lucide-react";
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

  const linkCls = (href: string) =>
    `px-4 py-2 rounded-3xl text-sm text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn ${
      location.hash && href.endsWith(location.hash) ? "bg-foreground/12 font-medium" : ""
    }`;

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className={`transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
        scrolled 
          ? 'mx-4 mt-2' 
          : 'container mx-auto px-4 mt-4'
      }`}>
        <div className={`liquid-glass-surface transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-medium bg-background/40 backdrop-blur-md ${
          scrolled 
            ? 'rounded-full px-4 py-2 w-auto ml-auto mr-0 max-w-fit transform scale-90' 
            : 'rounded-3xl px-6 py-3 transform scale-100'
        }`}>
          
          {/* Expanded state - when at top */}
          {!scrolled && (
            <div className="flex items-center justify-between w-full transition-opacity duration-500 ease-out">
              {/* Brand */}
              <Button asChild variant="liquid" size="sm" className="rounded-full px-4" data-liquid>
                <Link to="/">Spendora</Link>
              </Button>

              {/* Main nav */}
              <nav className="hidden md:flex items-center gap-2" aria-label="Primary">
                {mainNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={linkCls(item.href)}
                    data-liquid
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <SearchBar />
                <Button
                  variant="liquid"
                  size="icon"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="rounded-full"
                  data-liquid
                >
                  {theme === "light" ? (
                    <Moon className="h-4 w-4" />
                  ) : (
                    <Sun className="h-4 w-4" />
                  )}
                </Button>
                
                <Button
                  variant="liquid"
                  size="icon"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Menu"
                  className="rounded-full"
                  data-liquid
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Collapsed state - when scrolled */}
          {scrolled && (
            <div className="flex items-center gap-3 transition-opacity duration-500 ease-out">
              <Button asChild variant="liquid" size="sm" className="rounded-full px-3 text-xs" data-liquid>
                <Link to="/">S</Link>
              </Button>
              
              <Button
                variant="liquid"
                size="icon"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-full h-8 w-8"
                data-liquid
              >
                {theme === "light" ? (
                  <Moon className="h-3 w-3" />
                ) : (
                  <Sun className="h-3 w-3" />
                )}
              </Button>
              
              <Button
                variant="liquid"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
                className="rounded-full h-8 w-8"
                data-liquid
              >
                <Menu className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay Menu */}
          {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 liquid-glass-surface rounded-3xl p-6 w-80 shadow-large animate-dynamic-island-pop">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Menu</h3>
              <Button
                variant="liquid"
                size="icon"
                onClick={() => setMenuOpen(false)}
                className="rounded-full"
                data-liquid
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground/60">Navigate</h4>
                {mainNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                    data-liquid
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground/60">Explore</h4>
                <Link
                  to="/gallery"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Workshop Gallery
                </Link>
                <Link
                  to="/success-stories"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Success Stories
                </Link>
                <Link
                  to="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Support Our Mission
                </Link>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-foreground/60">Workshop Topics</h4>
                <Link
                  to="/stock-markets"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Stock Markets & Investing
                </Link>
                <Link
                  to="/budgeting"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Budgeting & Finance
                </Link>
                <Link
                  to="/online-business"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Online Business
                </Link>
                <Link
                  to="/crypto-nfts"
                  onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 rounded-2xl text-foreground/90 hover:text-foreground hover:bg-foreground/8 transition-all duration-300 liquid-glass-btn"
                  data-liquid
                >
                  Crypto & NFTs
                </Link>
              </div>

              <div className="pt-4 border-t border-foreground/10">
                <Button
                  variant="liquid"
                  size="sm"
                  onClick={() => window.open('https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', '_blank')}
                  className="w-full rounded-2xl"
                  data-liquid
                >
                  <Instagram className="h-4 w-4 mr-2" />
                  Follow on Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default TopNavBar;
