import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  TrendingUp,
  Wallet,
  Store,
  Coins,
  Camera,
  Headphones,
  Award,
  Heart,
  Newspaper,
  Handshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface SearchItem {
  id: string;
  title: string;
  category: "Topics & Guides" | "Workshops & Gallery" | "Audiobook Course" | "Quick Links";
  description: string;
  url: string;
  isExternal?: boolean;
  icon: typeof Search;
}

const searchDatabase: SearchItem[] = [
  // Topics
  {
    id: "topic-stocks",
    title: "Stock Markets & Investing Guide",
    category: "Topics & Guides",
    description: "What shares are, how to read charts, and understanding long term index funds.",
    url: "/stock-markets",
    icon: TrendingUp,
  },
  {
    id: "topic-budgeting",
    title: "Personal Finance & Budgeting Guide",
    category: "Topics & Guides",
    description: "The 50/30/20 rule, setting up bank accounts, and preventing impulse spending.",
    url: "/budgeting",
    icon: Wallet,
  },
  {
    id: "topic-ecommerce",
    title: "Online Business & Digital Ventures",
    category: "Topics & Guides",
    description: "Dropshipping, TikTok Shop, reselling, and internet business models.",
    url: "/online-business",
    icon: Store,
  },
  {
    id: "topic-crypto",
    title: "Crypto & NFTs Explained",
    category: "Topics & Guides",
    description: "Blockchain fundamentals, digital wallets, and avoiding speculative hype.",
    url: "/crypto-nfts",
    icon: Coins,
  },
  // Workshops & Gallery
  {
    id: "gal-doon",
    title: "Doon Public School Workshop (Panchkula)",
    category: "Workshops & Gallery",
    description: "Auditorium seminar photos and video for Classes XI & XII in India.",
    url: "/gallery#doon-school",
    icon: Camera,
  },
  {
    id: "gal-local-1",
    title: "Session 1: Intro to Investing (Woodbury)",
    category: "Workshops & Gallery",
    description: "Library workshop covering market origins, charts, and custodial accounts.",
    url: "/gallery#session-1",
    icon: Camera,
  },
  {
    id: "gal-local-2",
    title: "Session 2: Saving vs Investing (Woodbury)",
    category: "Workshops & Gallery",
    description: "Budgeting case studies, Roth IRAs, and risk-reward discussions.",
    url: "/gallery#session-2",
    icon: Camera,
  },
  {
    id: "gal-girdhar",
    title: "Sri Girdhar Techno School (Rural India)",
    category: "Workshops & Gallery",
    description: "7 classroom photos and 5 interactive workshop videos.",
    url: "/gallery#indian-school",
    icon: Camera,
  },
  {
    id: "gal-ramkrishna",
    title: "Ram Krishna Dwarika School (Patna)",
    category: "Workshops & Gallery",
    description: "High school classroom seminar photos on money fundamentals.",
    url: "/gallery#ram-krishna-school",
    icon: Camera,
  },
  // Audiobook Course
  {
    id: "audio-course",
    title: "The Spendora Audio Course (8 Modules)",
    category: "Audiobook Course",
    description: "Listen to all 8 chapters with synchronized word-by-word live transcripts.",
    url: "/audiobook",
    icon: Headphones,
  },
  {
    id: "audio-sat",
    title: "Take the Spendora SAT Assessment",
    category: "Audiobook Course",
    description: "20-question review test to earn your verified Money Ready Certificate.",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdJvM6bC8ZzR9k1F2l3m4n5o6p7q8r9s0t/viewform",
    isExternal: true,
    icon: Award,
  },
  // Quick Links
  {
    id: "quick-signup",
    title: "Reserve a Free Workshop Seat",
    category: "Quick Links",
    description: "Sign up via Google Forms for our next library session.",
    url: "https://forms.gle/JWCVyGcfN5UKiwqHA",
    isExternal: true,
    icon: Sparkles,
  },
  {
    id: "quick-donate",
    title: "Support Spendora (Donations)",
    category: "Quick Links",
    description: "Help us keep all supplies, workbooks, and workshops 100% free for students.",
    url: "/donate",
    icon: Heart,
  },
  {
    id: "quick-press",
    title: "Woodbury News Net Article",
    category: "Quick Links",
    description: "Read the featured article on East Ridge students creating Spendora.",
    url: "/#press",
    icon: Newspaper,
  },
  {
    id: "quick-partners",
    title: "Partners & Collaborations",
    category: "Quick Links",
    description: "Explore our network including Spendora Nigeria and partner schools.",
    url: "/#partners",
    icon: Handshake,
  },
];

interface CommandSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandSearchModal = ({ isOpen, onClose }: CommandSearchModalProps) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    if (!query.trim()) return searchDatabase.slice(0, 8);
    const q = query.toLowerCase();
    return searchDatabase.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    );
  }, [query]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev === 0 ? Math.max(0, filteredItems.length - 1) : prev - 1
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        const item = filteredItems[selectedIndex];
        if (item) {
          if (item.isExternal) {
            window.open(item.url, "_blank");
          } else {
            navigate(item.url);
          }
          onClose();
        }
      }
    },
    [isOpen, filteredItems, selectedIndex, navigate, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-white/10 overflow-hidden z-10 animate-fade-up">
        {/* Search Header Input */}
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-white/10">
          <Search className="w-5 h-5 text-slate-400 dark:text-zinc-500 shrink-0" />
          <input
            type="text"
            placeholder="Search topics, workshops, audio chapters, test..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full px-3 py-4 bg-transparent text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-zinc-500 focus:outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="ml-2 text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 hover:bg-slate-200"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-slate-500 dark:text-zinc-400">
              No matching pages or workshops found for "{query}".
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    if (item.isExternal) {
                      window.open(item.url, "_blank");
                    } else {
                      navigate(item.url);
                    }
                    onClose();
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-white"
                      : "text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-900"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold font-manrope truncate">
                          {item.title}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.2 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400 shrink-0">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 ml-2 transition-transform ${
                      isSelected ? "translate-x-0.5 opacity-100" : "opacity-30"
                    }`}
                  />
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-zinc-900/60 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[11px] font-medium text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-3">
            <span>
              Use <kbd className="px-1 py-0.5 rounded bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">↑</kbd> <kbd className="px-1 py-0.5 rounded bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">↓</kbd> to navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700">↵</kbd> to select
            </span>
          </div>
          <span className="text-emerald-700 dark:text-[#52b788] font-semibold">
            Spendora Fast Jump
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommandSearchModal;
