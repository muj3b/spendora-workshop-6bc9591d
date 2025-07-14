import React, { useState, useEffect, useCallback, useMemo } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  transitionType?: 'welcome' | 'fade';
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, transitionType = 'welcome' }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('start');

  // Memoize the check for whether welcome was already seen
  const hasSeenWelcome = useMemo(() => sessionStorage.getItem('hasSeenWelcome'), []);

  const skipToLoaded = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const markWelcomeSeen = useCallback(() => {
    sessionStorage.setItem('hasSeenWelcome', 'true');
  }, []);

  useEffect(() => {
    if (transitionType === 'welcome') {
      if (hasSeenWelcome) {
        // Skip welcome animation, just fade in immediately
        skipToLoaded();
        return;
      }

      // Mark that we've shown the welcome animation
      markWelcomeSeen();

      // Optimized welcome animation with fewer phases
      const phase1Timer = setTimeout(() => setAnimationPhase('rise'), 200);
      const phase2Timer = setTimeout(() => setAnimationPhase('expand'), 800);
      const phase3Timer = setTimeout(() => {
        setAnimationPhase('welcome');
        setShowWelcome(true);
      }, 1400);
      const phase4Timer = setTimeout(() => {
        setShowWelcome(false);
        setAnimationPhase('done');
        setIsLoaded(true);
      }, 2600);

      return () => {
        clearTimeout(phase1Timer);
        clearTimeout(phase2Timer);
        clearTimeout(phase3Timer);
        clearTimeout(phase4Timer);
      };
    } else {
      // Immediate load for non-welcome transitions
      skipToLoaded();
    }
  }, [transitionType, hasSeenWelcome, skipToLoaded, markWelcomeSeen]);

  const getDropletStyles = () => {
    switch (animationPhase) {
      case 'start':
        return 'bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full opacity-80';
      case 'rise':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-90';
      case 'expand':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-150 rounded-none opacity-100';
      case 'welcome':
        return 'top-0 left-0 w-full h-full scale-150 rounded-none opacity-100';
      case 'done':
        return 'top-0 left-0 w-full h-full scale-150 rounded-none opacity-0';
      default:
        return '';
    }
  };

  const getTransitionDuration = () => {
    switch (animationPhase) {
      case 'start':
        return 'duration-200';
      case 'rise':
        return 'duration-[800ms]';
      case 'expand':
        return 'duration-[800ms]';
      case 'welcome':
        return 'duration-500';
      case 'done':
        return 'duration-[1400ms]';
      default:
        return 'duration-700';
    }
  };

  return (
    <>
      {/* Welcome Animation */}
      {transitionType === 'welcome' && !sessionStorage.getItem('hasSeenWelcome') && (
        <div 
          className={`fixed inset-0 z-50 pointer-events-none transition-all ease-in-out ${
            animationPhase === 'done' 
              ? 'opacity-0' 
              : 'opacity-100'
          }`}
        >
          <div 
            className={`absolute bg-gradient-to-t from-blue-500 via-blue-600 to-purple-600 transition-all ease-in-out ${getDropletStyles()} ${getTransitionDuration()}`}
            style={{
              filter: animationPhase === 'rise' ? 'blur(1px)' : 'blur(0px)',
              boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
            }}
          />
        </div>
      )}

      {/* Welcome Text */}
      {showWelcome && transitionType === 'welcome' && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-fade-in">
            Welcome
          </h1>
        </div>
      )}

      {/* Page Content */}
      <div 
        className={`transition-all duration-500 ease-out ${
          isLoaded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
