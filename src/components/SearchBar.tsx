import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Search, X } from 'lucide-react';
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

  const searchData: SearchResult[] = useMemo(
    () => [
      { title: 'Home', content: 'Financial literacy workshops for high school students', url: '/', type: 'page' },
      { title: 'Stock Markets & Investing', content: 'Learn trading, portfolio management, market analysis, and investment strategies', url: '/stock-markets', type: 'page' },
      { title: 'Budgeting & Finance', content: 'Personal finance, money management, saving strategies, and expense tracking', url: '/budgeting', type: 'page' },
      { title: 'Online Business', content: 'Entrepreneurship, e-commerce, digital marketing, and business planning', url: '/online-business', type: 'page' },
      { title: 'Crypto & NFTs', content: 'Cryptocurrency basics, blockchain technology, NFT markets, and digital assets', url: '/crypto-nfts', type: 'page' },
      { title: 'Workshop Gallery', content: 'Photos and highlights from past workshops and student events', url: '/gallery', type: 'page' },
      { title: 'Donate', content: 'Support our mission and help fund free workshops for students', url: '/donate', type: 'page' },
      { title: 'About Spendora', content: 'Mission, impact, and goals for financial education in schools', url: '/#about-spendora', type: 'section' },
      { title: 'Workshop Schedule', content: 'Upcoming dates, times, registration, and event calendar', url: '/#workshop-schedule', type: 'section' },
      { title: 'Meet the Founders', content: 'Student entrepreneurs leading Spendora workshops', url: '/#meet-the-team', type: 'section' },
      { title: 'Instagram', content: 'Follow us on Instagram @spendora.erhs for updates', url: 'https://www.instagram.com/spendora.erhs?igsh=eTd6NmdjNjVnN3p2', type: 'page' },
      { title: 'Registration Form', content: 'Sign up for the free workshop', url: 'https://forms.gle/JWCVyGcfN5UKiwqHA', type: 'page' },
      { title: 'R.H. Stafford Library', content: 'Workshop location and directions', url: 'https://maps.app.goo.gl/cHgQRRPY8WeQq2BS7?g_st=ipc', type: 'page' },
      { title: 'Free Workshop', content: 'Completely free financial literacy education for students', url: '/', type: 'page' },
    ],
    []
  );

  const popularResults = useMemo(
    () =>
      ['Stock Markets & Investing', 'Budgeting & Finance', 'Online Business', 'Crypto & NFTs', 'Workshop Schedule', 'Workshop Gallery']
        .map(title => searchData.find(item => item.title === title))
        .filter((item): item is SearchResult => Boolean(item)),
    [searchData]
  );

  useEffect(() => {
    if (query.length < 1) { setResults(popularResults); return; }
    const loweredQuery = query.toLowerCase();
    setResults(searchData.filter(item => item.title.toLowerCase().includes(loweredQuery) || item.content.toLowerCase().includes(loweredQuery)).slice(0, 8));
  }, [query, popularResults, searchData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); setIsOpen(true); }
      if (e.key === 'Escape') { setIsOpen(false); setQuery(''); }
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
        setTimeout(() => { document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 100);
      } else {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate(url);
    }
    setIsOpen(false);
    setQuery('');
  };

  const handleClose = () => { setIsOpen(false); setQuery(''); setResults([]); };

  const searchModal = isOpen ? createPortal(
    <div className="fixed inset-0 z-[10000] bg-black/60 dark:bg-black/80 backdrop-blur-md" onClick={handleClose}>
      <div className="fixed inset-0 flex items-center justify-center px-4">
        <div className="w-full max-w-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
          {/* Input */}
          <div className="flex items-center border-b border-slate-200 dark:border-white/10 px-6 py-4">
            <Search className="h-5 w-5 text-slate-400 dark:text-zinc-500 mr-4 shrink-0" />
            <input
              placeholder="Search workshops, topics, pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-transparent text-slate-900 dark:text-white text-base sm:text-lg outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-600 font-medium"
              autoFocus
            />
            <button onClick={handleClose} className="ml-3 p-2 text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-white transition-colors"><X className="h-5 w-5" /></button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="max-h-[60vh] overflow-y-auto">
              {query.length === 0 && (
                <div className="px-6 py-2.5 text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest border-b border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-transparent">Popular Topics</div>
              )}
              {results.map((result, index) => (
                <button key={index} onClick={() => handleResultClick(result.url)} className="w-full text-left px-6 py-3.5 hover:bg-slate-100/70 dark:hover:bg-white/5 transition-all border-b border-slate-100 dark:border-white/5 last:border-b-0 group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-[#52b788] transition-colors mb-0.5 truncate text-sm sm:text-base">{result.title}</div>
                      <div className="text-xs text-slate-500 dark:text-zinc-400 truncate">{result.content}</div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-500 dark:text-zinc-500 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 uppercase tracking-wider shrink-0">{result.type}</div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {query.length >= 1 && results.length === 0 && (
            <div className="px-6 py-12 text-center">
              <Search className="h-10 w-10 text-slate-300 dark:text-zinc-800 mx-auto mb-3" />
              <p className="text-slate-700 dark:text-zinc-400 font-bold text-sm mb-1">No results for "{query}"</p>
              <p className="text-xs text-slate-400 dark:text-zinc-600">Try a different search term</p>
            </div>
          )}

          <div className="px-6 py-2.5 text-[10px] text-slate-400 dark:text-zinc-600 border-t border-slate-200 dark:border-white/5 flex items-center justify-between uppercase tracking-wider font-semibold">
            <span>Press ESC to close</span>
            <span className="hidden sm:inline">⌘K to open search</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-zinc-400 text-xs font-semibold hover:text-slate-900 dark:hover:text-zinc-200 hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors">
        <Search className="h-3.5 w-3.5" />
        <span>Search</span>
        <kbd className="text-[10px] bg-white dark:bg-white/10 px-1.5 py-0.5 rounded shadow-xs">{navigator.platform.includes('Mac') ? '⌘K' : 'Ctrl+K'}</kbd>
      </button>
      {searchModal}
    </>
  );
};

export default SearchBar;
