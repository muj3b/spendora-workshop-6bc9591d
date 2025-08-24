import { useState, useEffect, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
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
import { Menu, MoreHorizontal, Moon, Sun, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavMenuContent } from "./NavMenuContent";

const TopNavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isShrunken, setIsShrunken] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY.current && scrollY > 100) {
      setIsShrunken(true);
    } else if (scrollY < lastScrollY.current && scrollY < 50) {
      setIsShrunken(false);
    }
    lastScrollY.current = scrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const mainNav = [
    { label: "Home", href: "/#top" },
    { label: "Features", href: "/#features" },
    { label: "About Spendora", href: "/#about-spendora" },
    { label: "Workshop Schedule", href: "/#workshop-schedule" },
    { label: "Meet The Team", href: "/#meet-the-team" },
  ];

  const linkCls = (href: string) =>
    `px-3 py-2 rounded-lg text-sm md:text-base text-foreground/90 hover:text-foreground hover:bg-foreground/5 transition-colors duration-200 hover-scale ${
      location.hash && href.endsWith(location.hash) ? "font-semibold" : ""
    }`;

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out",
      isShrunken ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto px-3 sm:px-6">
        <div className={cn(
          "liquid-glass-surface rounded-2xl px-4 py-3 flex items-center justify-between shadow-medium transition-all duration-500 ease-in-out",
          isShrunken ? "backdrop-blur-xl bg-background/20" : "backdrop-blur-lg bg-background/10"
        )} data-liquid>
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <Button asChild variant="liquid" size="sm" className="rounded-xl font-bold" data-spotlight>
              <Link to="/">Spendora</Link>
            </Button>
          </div>

          {/* Center: Main nav (hide when shrunken) */}
          <nav className={cn(
            "flex items-center gap-1 transition-all duration-500 ease-in-out",
            isShrunken ? "opacity-0 scale-95 pointer-events-none hidden" : "opacity-100 scale-100"
          )} aria-label="Primary">
            {mainNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={linkCls(item.href)}
                data-spotlight
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            {/* Hamburger Menu (visible when shrunken) */}
            <div className={cn(
              "transition-all duration-500 ease-in-out",
              isShrunken ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none hidden"
            )}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="liquid" size="sm" aria-label="Menu" className="rounded-xl" data-spotlight>
                    <Menu className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-menu rounded-xl" sideOffset={8}>
                  <NavMenuContent isHamburger={true} />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* More dropdown (visible when not shrunken) */}
            <div className={cn(
              "transition-all duration-500 ease-in-out",
              isShrunken ? "opacity-0 scale-95 pointer-events-none hidden" : "opacity-100 scale-100"
            )}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="liquid" size="sm" aria-label="More" className="rounded-xl" data-spotlight>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass-menu rounded-xl" sideOffset={8}>
                  <NavMenuContent />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Theme toggle */}
            <Button
              variant="liquid"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-xl"
              data-spotlight
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 text-foreground" />
              ) : (
                <Sun className="h-4 w-4 text-foreground" />
              )}
            </Button>

            {/* Instagram */}
            <Button
              variant="liquid"
              size="icon"
              onClick={() => window.open('https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', '_blank')}
              aria-label="Follow us on Instagram"
              className="rounded-xl"
              data-spotlight
            >
              <Instagram className="h-4 w-4 text-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;