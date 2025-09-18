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
    { title: 'Stock Markets & Investing', content: 'Learn the fundamentals of stock market investing', url: '/stock-markets', type: 'page' },
    { title: 'Budgeting & Finance', content: 'Master personal budgeting and financial planning', url: '/budgeting', type: 'page' },
    { title: 'Online Business', content: 'Start and grow your online business', url: '/online-business', type: 'page' },
    { title: 'Crypto & NFTs', content: 'Understanding cryptocurrency and NFT markets', url: '/crypto-nfts', type: 'page' },
    { title: 'Workshop Gallery', content: 'Photos and highlights from our workshops', url: '/gallery', type: 'page' },
    { title: 'Success Stories', content: 'Real student transformations and achievements', url: '/success-stories', type: 'page' },
    { title: 'Donate', content: 'Support our mission and help fund workshops', url: '/donate', type: 'page' },
    { title: 'About Spendora', content: 'Learn about our mission and impact', url: '/#about-spendora', type: 'section' },
    { title: 'Workshop Schedule', content: 'Upcoming workshop dates and times', url: '/#workshop-schedule', type: 'section' },
    { title: 'Meet The Team', content: 'Get to know the Spendora team', url: '/#meet-the-team', type: 'section' },
    { title: 'Financial Literacy', content: 'Learn essential money management skills', url: '/', type: 'page' },
    { title: 'Investment Basics', content: 'Understanding stocks, bonds, and market fundamentals', url: '/stock-markets', type: 'page' },
    { title: 'Entrepreneurship', content: 'Starting your own business and building wealth', url: '/online-business', type: 'page' },
    { title: 'Digital Assets', content: 'Cryptocurrency, blockchain, and NFT education', url: '/crypto-nfts', type: 'page' },
    { title: 'Money Management', content: 'Budgeting, saving, and spending wisely', url: '/budgeting', type: 'page' },
    { title: 'Workshop Registration', content: 'Sign up for free financial literacy workshops', url: '/', type: 'page' },
  ];

  useEffect(() => {
    if (query.length < 1) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8); // Limit to 8 results for better UX

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
        className="liquid-glass-btn hidden md:flex items-center gap-2 text-muted-foreground"
        data-liquid
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
          className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
            <Card 
              className="liquid-glass-surface shadow-2xl animate-scale-in" 
              data-liquid
              onClick={(e) => e.stopPropagation()}
            >
              <CardContent className="p-0">
                <div className="flex items-center border-b px-4 py-3">
                  <Search className="h-5 w-5 text-muted-foreground mr-3" />
                  <Input
                    placeholder="Search workshops, topics, or pages..."
                    value={query}
                    onChange={handleInputChange}
                    className="border-0 bg-transparent focus-visible:ring-0 text-base"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleClose}
                    className="ml-2 h-8 w-8"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                {results.length > 0 && (
                  <div className="max-h-80 overflow-y-auto">
                    {results.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result.url)}
                        className="w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors border-b last:border-b-0 liquid-glass-btn"
                        data-liquid
                      >
                        <div className="font-medium text-sm">{result.title}</div>
                        <div className="text-xs text-muted-foreground mt-1">{result.content}</div>
                        <div className="text-xs text-primary mt-1 opacity-60">
                          {result.type === 'page' ? 'Page' : 'Section'}
                        </div>
                      </button>
                    ))}
                  </div>
                )}

                {query.length >= 1 && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    No results found for "{query}"
                  </div>
                )}

                {query.length < 1 && (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    <div className="space-y-2">
                      <p>Start typing to search...</p>
                      <div className="text-xs opacity-60">
                        Try: "stocks", "budgeting", "crypto", "business"
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;