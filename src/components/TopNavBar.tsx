import { useState, useEffect, useCallback } from "react";
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
  const lastScrollY = React.useRef(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > lastScrollY.current && scrollY > 50) {
      setIsShrunken(true);
    } else {
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
    <header className={cn("fixed top-0 inset-x-0 z-50 transition-all duration-300", isShrunken ? "py-1" : "py-3")}>
      <div className="container mx-auto px-3 sm:px-6">
        <div className="liquid-glass-surface rounded-2xl px-3 sm:px-4 py-2.5 flex items-center justify-between shadow-medium transition-all duration-300">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <Button asChild variant="liquid" size="sm" className="rounded-xl" data-spotlight>
              <Link to="/">Spendora</Link>
            </Button>
          </div>

          {/* Center: Main nav (hide on very small screens) */}
          <nav className={cn("hidden md:flex items-center gap-1", isShrunken && "hidden")} aria-label="Primary">
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
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Hamburger Menu (visible when shrunken) */}
            <div className={cn(!isShrunken && "hidden")}>
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
            <div className={cn(isShrunken && "hidden")}>
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
