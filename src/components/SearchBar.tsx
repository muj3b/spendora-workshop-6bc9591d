import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface SearchResult {
  title: string;
  content: string;
  url: string;
  type: 'page' | 'section';
}

const SearchBar = () => {
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
    { title: 'About Spendora', content: 'Learn about our mission and impact', url: '/#about-spendora', type: 'section' },
    { title: 'Workshop Schedule', content: 'Upcoming workshop dates and times', url: '/#workshop-schedule', type: 'section' },
    { title: 'Meet The Team', content: 'Get to know the Spendora team', url: '/#meet-the-team', type: 'section' },
  ];

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleResultClick = (url: string) => {
    if (url.startsWith('/#')) {
      const element = document.querySelector(url.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = url;
    }
    setIsOpen(false);
    setQuery('');
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
        <kbd className="text-xs bg-muted px-1.5 py-0.5 rounded">Ctrl+K</kbd>
      </Button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] bg-background/80 backdrop-blur-sm">
          <div className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg px-4">
            <Card className="liquid-glass-surface shadow-2xl animate-scale-in" data-liquid>
              <CardContent className="p-0">
                <div className="flex items-center border-b px-4 py-3">
                  <Search className="h-5 w-5 text-muted-foreground mr-3" />
                  <Input
                    placeholder="Search workshops, topics, or pages..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border-0 bg-transparent focus-visible:ring-0 text-base"
                    autoFocus
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
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

                {query.length >= 2 && results.length === 0 && (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    No results found for "{query}"
                  </div>
                )}

                {query.length < 2 && (
                  <div className="px-4 py-8 text-center text-muted-foreground">
                    Type at least 2 characters to search
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