import { useEffect, useState } from 'react';

const AutoHideNavigation = () => {
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer: NodeJS.Timeout;

    const resetIdleTimer = () => {
      setLastActivity(Date.now());
      setIsIdle(false);
      clearTimeout(idleTimer);
      
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, 3000); // 3 seconds of inactivity
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      document.addEventListener(event, resetIdleTimer, true);
    });

    resetIdleTimer(); // Initialize timer

    return () => {
      clearTimeout(idleTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetIdleTimer, true);
      });
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('header');
    if (navbar) {
      if (isIdle) {
        navbar.style.transform = 'translateY(-100%)';
        navbar.style.transition = 'transform 0.3s ease-out';
      } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.transition = 'transform 0.3s ease-out';
      }
    }
  }, [isIdle]);

  return null;
};

export default AutoHideNavigation;