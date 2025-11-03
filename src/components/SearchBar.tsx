import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  title: string;
  content: string;
  url: string;
  type: 'page' | 'section';
}

const SearchBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const searchData: SearchResult[] = [
    // Main Pages
    { title: 'Home', content: 'Financial literacy workshops for high school students', url: '/', type: 'page' },
    { title: 'Stock Markets & Investing', content: 'Learn trading, portfolio management, market analysis, and investment strategies', url: '/stock-markets', type: 'page' },
    { title: 'Budgeting & Finance', content: 'Personal finance, money management, saving strategies, and expense tracking', url: '/budgeting', type: 'page' },
    { title: 'Online Business', content: 'Entrepreneurship, e-commerce, digital marketing, and business planning', url: '/online-business', type: 'page' },
    { title: 'Crypto & NFTs', content: 'Cryptocurrency basics, blockchain technology, NFT markets, and digital assets', url: '/crypto-nfts', type: 'page' },
    { title: 'Workshop Gallery', content: 'Photos and highlights from past workshops and student events', url: '/gallery', type: 'page' },
    { title: 'Donate', content: 'Support our mission and help fund free workshops for students', url: '/donate', type: 'page' },

    // Home Page Sections
    { title: 'About Spendora', content: 'Mission, impact, and goals for financial education in schools', url: '/#about-spendora', type: 'section' },
    { title: 'Workshop Schedule', content: 'Upcoming dates, times, registration, and event calendar', url: '/#workshop-schedule', type: 'section' },
    { title: 'Meet the Team', content: 'Student entrepreneurs leading Spendora workshops and founders', url: '/#meet-the-team', type: 'section' },
    { title: 'Meet the Founders', content: 'Student entrepreneurs leading Spendora workshops', url: '/#meet-the-team', type: 'section' },

    // Social Links & External
    { title: 'Instagram', content: 'Follow us on Instagram @spendora.erhs for updates and workshop photos', url: 'https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', type: 'page' },
    { title: 'Social Media', content: 'Connect with Spendora on social platforms and stay updated', url: 'https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', type: 'page' },
    { title: 'Registration Form', content: 'Sign up for the free workshop using our Google Form', url: 'https://forms.gle/JWCVyGcfN5UKiwqHA', type: 'page' },
    { title: 'Google Forms Signup', content: 'Register for Spendora workshops through our form', url: 'https://forms.gle/JWCVyGcfN5UKiwqHA', type: 'page' },
    { title: 'R.H. Stafford Library', content: 'Workshop location and directions on Google Maps', url: 'https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc', type: 'page' },
    { title: 'Location', content: 'Find the workshop venue at R.H. Stafford Library', url: 'https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc', type: 'page' },

    // Topics & Keywords
    { title: 'Financial Literacy', content: 'Essential money skills, financial planning, and economic education', url: '/', type: 'page' },
    { title: 'Investment Education', content: 'Stocks, bonds, ETFs, mutual funds, and portfolio building', url: '/stock-markets', type: 'page' },
    { title: 'Trading Basics', content: 'Day trading, swing trading, technical analysis, and market research', url: '/stock-markets', type: 'page' },
    { title: 'Budgeting Tools', content: 'Budget planning, expense tracking, savings goals, and financial apps', url: '/budgeting', type: 'page' },
    { title: 'Saving Money', content: 'Smart spending, cost reduction, emergency funds, and wealth building', url: '/budgeting', type: 'page' },
    { title: 'Starting a Business', content: 'Business ideas, startup costs, marketing strategies, and scaling', url: '/online-business', type: 'page' },
    { title: 'Digital Marketing', content: 'Social media, SEO, content creation, and online advertising', url: '/online-business', type: 'page' },
    { title: 'Cryptocurrency', content: 'Bitcoin, Ethereum, altcoins, wallets, and crypto investing', url: '/crypto-nfts', type: 'page' },
    { title: 'NFT Marketplace', content: 'Digital art, collectibles, minting, and NFT trading platforms', url: '/crypto-nfts', type: 'page' },
    { title: 'Blockchain Technology', content: 'Decentralized systems, smart contracts, and Web3 education', url: '/crypto-nfts', type: 'page' },

    // Actions & Features
    { title: 'Register for Workshop', content: 'Sign up for free financial literacy workshops and events', url: '/#workshop-schedule', type: 'section' },
    { title: 'Contact Us', content: 'Get in touch with the Spendora team for questions or partnerships', url: '/#meet-the-team', type: 'section' },
    { title: 'Support Our Cause', content: 'Make a donation to help provide free education to students', url: '/donate', type: 'page' },
    { title: 'Event Timer', content: 'Countdown to next workshop event and live event information', url: '/#workshop-schedule', type: 'section' },
    { title: 'Free Workshop', content: 'Completely free financial literacy education for students', url: '/', type: 'page' },
    { title: 'High School Students', content: 'Workshops designed by students for students at East Ridge High School', url: '/', type: 'page' },
    { title: 'Student-Led', content: 'Peer-to-peer financial education led by motivated student entrepreneurs', url: '/#meet-the-team', type: 'section' },
  ];

  // Popular/default results to show when no query
  const popularResults = [
    searchData.find(item => item.title === 'Stock Markets & Investing')!,
    searchData.find(item => item.title === 'Budgeting & Finance')!,
    searchData.find(item => item.title === 'Online Business')!,
    searchData.find(item => item.title === 'Crypto & NFTs')!,
    searchData.find(item => item.title === 'Workshop Schedule')!,
    searchData.find(item => item.title === 'Workshop Gallery')!,
  ];

  useEffect(() => {
    if (query.length < 1) {
      setResults(popularResults);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = (url: string) => {
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else if (url.startsWith('/#')) {
      const sectionId = url.substring(2);
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      navigate(url);
    }
    setIsOpen(false);
    setQuery('');
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const searchModal = isOpen ? createPortal(
    <div
      className="fixed inset-0 z-[10000] animate-fade-in"
      onClick={handleClose}
      style={{
        margin: 0,
        padding: 0,
        background: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <div className="fixed inset-0 flex items-center justify-center px-4">
        <Card
          className="w-full max-w-3xl shadow-2xl border animate-scale-in liquid-glass-surface"
          onClick={(e) => e.stopPropagation()}
          style={{
            borderRadius: '1.5rem',
          }}
        >
          <CardContent className="p-0">
            {/* Search Input Header */}
            <div className="flex items-center border-b px-6 py-5" style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))',
            }}>
              <Search className="h-6 w-6 text-muted-foreground mr-4 flex-shrink-0" />
              <Input
                placeholder="Search workshops, topics, pages..."
                value={query}
                onChange={handleInputChange}
                className="border-0 bg-transparent focus-visible:ring-0 text-lg placeholder:text-muted-foreground/60 h-auto py-0"
                autoFocus
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="ml-3 h-10 w-10 hover:bg-accent rounded-full flex-shrink-0 transition-all duration-200"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Results Section */}
            {results.length > 0 && (
              <div className="max-h-[65vh] overflow-y-auto">
                {query.length === 0 && (
                  <div className="px-6 py-3 text-xs font-semibold text-muted-foreground border-b uppercase tracking-wider"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))',
                    }}
                  >
                    Popular Results
                  </div>
                )}
                {results.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.url)}
                    className="w-full text-left px-6 py-5 hover:bg-accent/30 active:bg-accent/50 transition-all duration-200 border-b last:border-b-0 group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-base group-hover:text-primary transition-colors line-clamp-1 mb-2">
                          {result.title}
                        </div>
                        <div className="text-sm text-muted-foreground line-clamp-2">
                          {result.content}
                        </div>
                      </div>
                      <div className="text-[11px] font-medium text-muted-foreground/70 px-3 py-1.5 rounded-full uppercase tracking-wider flex-shrink-0"
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(8px)',
                        }}
                      >
                        {result.type}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* No Results */}
            {query.length >= 1 && results.length === 0 && (
              <div className="px-6 py-16 text-center">
                <Search className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-muted-foreground font-semibold text-lg mb-2">No results found for "{query}"</p>
                <p className="text-sm text-muted-foreground/60">Try searching for something else</p>
              </div>
            )}

            {/* Footer hint */}
            <div className="px-6 py-3 text-xs text-muted-foreground/60 border-t flex items-center justify-between"
              style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))',
              }}
            >
              <span className="font-medium">Press ESC to close</span>
              <span className="hidden sm:inline">Use ↑↓ to navigate results</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      {/* Search Trigger Button */}
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 text-muted-foreground hover:bg-accent/50 transition-colors"
      >
        <Search className="h-4 w-4" />
        <span>Search...</span>
        <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">
          {navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl+K'}
        </kbd>
      </Button>

      {searchModal}
    </>
  );
};

export default SearchBar;