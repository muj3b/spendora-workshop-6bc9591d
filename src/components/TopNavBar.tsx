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

const TopNavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

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
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container mx-auto px-3 sm:px-6">
        <div className="mt-3 liquid-glass-surface rounded-2xl px-3 sm:px-4 py-2.5 flex items-center justify-between shadow-medium">
          {/* Left: Brand */}
          <div className="flex items-center gap-2">
            <Button asChild variant="liquid" size="sm" className="rounded-xl" data-spotlight>
              <Link to="/">Spendora</Link>
            </Button>
          </div>

          {/* Center: Main nav (hide on very small screens) */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
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
            {/* More dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="liquid" size="sm" aria-label="More" className="rounded-xl" data-spotlight>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-menu rounded-xl" sideOffset={8}>
                <DropdownMenuLabel>Explore</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" data-spotlight>
                    Workshop Gallery
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/success" data-spotlight>
                    Success Stories
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/donate" data-spotlight>
                    Support Our Mission
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Workshop Topics</DropdownMenuLabel>
                <DropdownMenuItem asChild>
                  <Link to="/stock-markets" data-spotlight>
                    Stock Markets & Investing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/budgeting" data-spotlight>
                    Budgeting & Finance
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/online-business" data-spotlight>
                    Online Business
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/crypto-nfts" data-spotlight>
                    Crypto & NFTs
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
