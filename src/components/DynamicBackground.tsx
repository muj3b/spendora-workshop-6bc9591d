import { useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const DynamicBackground = () => {
  const { theme } = useTheme();
  const bgRef = useRef<HTMLDivElement | null>(null);
  const primaryShapeRef = useRef<HTMLDivElement | null>(null);
  const secondaryShapeRef = useRef<HTMLDivElement | null>(null);
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });
  const scrollRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const finePointerRef = useRef(true);

  useEffect(() => {
    finePointerRef.current = window.matchMedia('(pointer: fine)').matches;

    const updateStyles = () => {
      const bg = bgRef.current;
      if (!bg) return;

      const { x, y } = mousePosRef.current;
      const scrollY = scrollRef.current;

      const gradient = theme === 'dark'
        ? `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
           hsl(220 70% 8% / 0.8) 0%, 
           hsl(210 70% 4% / 0.9) 30%, 
           hsl(200 50% 2% / 1) 60%)`
        : `radial-gradient(circle at ${x * 100}% ${y * 100}%, 
           hsl(210 40% 98% / 0.8) 0%, 
           hsl(220 40% 96% / 0.9) 30%, 
           hsl(230 30% 94% / 1) 60%)`;

      bg.style.background = gradient;
      bg.style.transform = `translateY(${scrollY * 0.3}px)`;

      if (primaryShapeRef.current) {
        primaryShapeRef.current.style.left = `${20 + x * 10}%`;
        primaryShapeRef.current.style.top = `${10 + y * 10}%`;
        primaryShapeRef.current.style.transform = `rotate(${scrollY * 0.1}deg)`;
      }

      if (secondaryShapeRef.current) {
        secondaryShapeRef.current.style.right = `${15 + x * 8}%`;
        secondaryShapeRef.current.style.bottom = `${20 + y * 12}%`;
        secondaryShapeRef.current.style.transform = `rotate(${-scrollY * 0.08}deg)`;
      }
    };

    const scheduleUpdate = () => {
      if (rafRef.current) return;
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        updateStyles();
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!finePointerRef.current) return;
      mousePosRef.current = { 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      };
      scheduleUpdate();
    };

    const handleScroll = () => {
      scrollRef.current = window.scrollY;
      scheduleUpdate();
    };

    scheduleUpdate();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [theme]);

  return (
    <div 
      ref={bgRef}
      className="fixed inset-0 -z-10 transition-[background,transform] duration-150"
    >
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          ref={primaryShapeRef}
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))',
          }}
        />
        <div 
          ref={secondaryShapeRef}
          className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl"
          style={{
            background: 'linear-gradient(-45deg, hsl(var(--accent)), hsl(var(--primary)))',
          }}
        />
      </div>
    </div>
  );
};

export default DynamicBackground;
