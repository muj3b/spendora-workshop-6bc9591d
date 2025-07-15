
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
  transitionType?: 'welcome' | 'fade';
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, transitionType = 'fade' }) => {
  const [isLoaded, setIsLoaded] = useState(true); // Always start loaded

  return (
    <>
      {/* Page Content - Always visible now */}
      <div className="opacity-100 transform translate-y-0">
        {children}
      </div>
    </>
  );
};

export default PageTransition;
