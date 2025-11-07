import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransitions = () => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div 
      className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-600 ease-smooth ${
        isTransitioning 
          ? 'bg-gradient-to-br from-primary/20 via-background to-primary/10 backdrop-blur-sm opacity-100' 
          : 'opacity-0'
      }`}
    >
      <div className={`absolute inset-0 transition-transform duration-600 ease-smooth ${
        isTransitioning ? 'scale-110' : 'scale-100'
      }`}>
        <div className="liquid-glass-surface h-full w-full animate-pulse" />
      </div>
    </div>
  );
};

export default PageTransitions;
