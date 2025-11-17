import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = () => {
  const scrollRef = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Initialize Locomotive Scroll with optimized settings
    scrollRef.current = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      smoothMobile: false, // Disable on mobile for better performance
      lerp: 0.08, // Lower value = less delay (default is 0.1)
      multiplier: 1.0, // Scroll speed multiplier
      class: 'is-inview',
      scrollFromAnywhere: true,
      tablet: {
        smooth: false,
      },
      smartphone: {
        smooth: false,
      },
    });

    // Update on window resize
    const handleResize = () => {
      scrollRef.current?.update();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      scrollRef.current?.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
