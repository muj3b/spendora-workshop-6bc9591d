import { useState, useEffect } from 'react';
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
    { title: 'Success Stories', content: 'Student achievements, testimonials, and real transformation stories', url: '/success-stories', type: 'page' },
    { title: 'Donate', content: 'Support our mission and help fund free workshops for students', url: '/donate', type: 'page' },
    
    // Home Page Sections
    { title: 'About Spendora', content: 'Mission, impact, and goals for financial education in schools', url: '/#about-spendora', type: 'section' },
    { title: 'Workshop Schedule', content: 'Upcoming dates, times, registration, and event calendar', url: '/#workshop-schedule', type: 'section' },
    { title: 'Meet the Founders', content: 'Student entrepreneurs leading Spendora workshops', url: '/#meet-the-team', type: 'section' },
    
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
    
    // Actions
    { title: 'Register for Workshop', content: 'Sign up for free financial literacy workshops and events', url: '/#workshop-schedule', type: 'section' },
    { title: 'Contact Us', content: 'Get in touch with the Spendora team for questions or partnerships', url: '/#meet-the-team', type: 'section' },
    { title: 'Support Our Cause', content: 'Make a donation to help provide free education to students', url: '/donate', type: 'page' },
  ];

  // Popular/default results to show when no query
  const popularResults = [
    searchData.find(item => item.title === 'Stock Markets & Investing')!,
    searchData.find(item => item.title === 'Budgeting & Finance')!,
    searchData.find(item => item.title === 'Online Business')!,
    searchData.find(item => item.title === 'Crypto & NFTs')!,
    searchData.find(item => item.title === 'Workshop Schedule')!,
    searchData.find(item => item.title === 'Success Stories')!,
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
    if (url.startsWith('/#')) {
      // Handle section navigation
      const sectionId = url.substring(2); // Remove '/#'
      if (window.location.pathname !== '/') {
        // Navigate to home first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Handle page navigation
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

      {/* Search Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={handleClose}
        >
          <div className="fixed top-[15%] left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
            <Card 
              className="shadow-2xl border-2 animate-scale-in bg-background/95 backdrop-blur-xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-0">
                {/* Search Input Header */}
                <div className="flex items-center border-b px-4 py-4 bg-muted/30">
                  <Search className="h-5 w-5 text-muted-foreground mr-3 flex-shrink-0" />
                  <Input
                    placeholder="Search workshops, topics, pages..."
                    value={query}
                    onChange={handleInputChange}
                    className="border-0 bg-transparent focus-visible:ring-0 text-base placeholder:text-muted-foreground/60"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="ml-2 h-8 w-8 hover:bg-muted/50 rounded-full flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {/* Results Section */}
                {results.length > 0 && (
                  <div className="max-h-[60vh] overflow-y-auto">
                    {query.length === 0 && (
                      <div className="px-4 py-2 text-xs font-medium text-muted-foreground bg-muted/20 border-b">
                        Popular Results
                      </div>
                    )}
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.url)}
                        className="w-full text-left px-5 py-4 hover:bg-accent/50 active:bg-accent transition-colors border-b last:border-b-0 group"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-1">
                              {result.title}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1.5 line-clamp-2">
                              {result.content}
                            </div>
                          </div>
                          <div className="text-[10px] font-medium text-muted-foreground/70 bg-muted/50 px-2 py-1 rounded-full uppercase tracking-wider flex-shrink-0">
                            {result.type}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {/* No Results */}
                {query.length >= 1 && results.length === 0 && (
                  <div className="px-4 py-12 text-center">
                    <Search className="h-12 w-12 text-muted-foreground/30 mx-auto mb-3" />
                    <p className="text-muted-foreground font-medium">No results found for "{query}"</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">Try searching for something else</p>
                  </div>
                )}

                {/* Footer hint */}
                <div className="px-4 py-2 text-[10px] text-muted-foreground/60 border-t bg-muted/10 flex items-center justify-between">
                  <span>Press ESC to close</span>
                  <span className="hidden sm:inline">Use ↑↓ to navigate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;