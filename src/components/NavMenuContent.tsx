import { Link } from "react-router-dom";
import {
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const mainNav = [
  { label: "Home", href: "/#top" },
  { label: "Features", href: "/#features" },
  { label: "About Spendora", href: "/#about-spendora" },
  { label: "Workshop Schedule", href: "/#workshop-schedule" },
  { label: "Meet The Team", href: "/#meet-the-team" },
];

export const NavMenuContent = ({ isHamburger = false }) => (
  <>
    {isHamburger && (
      <>
        <DropdownMenuLabel>Navigation</DropdownMenuLabel>
        {mainNav.map((item) => (
          <DropdownMenuItem key={item.label} asChild>
            <a href={item.href} data-spotlight>
              {item.label}
            </a>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
      </>
    )}
    <DropdownMenuLabel>Explore</DropdownMenuLabel>
    <DropdownMenuItem asChild>
      <Link to="/gallery" data-spotlight>
        Workshop Gallery
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/quiz" data-spotlight>
        Financial Literacy Quiz
      </Link>
    </DropdownMenuItem>
    <DropdownMenuItem asChild>
      <Link to="/resources" data-spotlight>
        Financial Resources
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
  </>
);
