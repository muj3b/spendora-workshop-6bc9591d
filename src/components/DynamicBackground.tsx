import { useEffect, useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const DynamicBackground = () => {
  const { theme } = useTheme();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ 
        x: e.clientX / window.innerWidth, 
        y: e.clientY / window.innerHeight 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const gradientStyle = {
    background: theme === 'dark' 
      ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
         hsl(220 70% 8% / 0.8) 0%, 
         hsl(210 70% 4% / 0.9) 30%, 
         hsl(200 50% 2% / 1) 60%)`
      : `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
         hsl(210 40% 98% / 0.8) 0%, 
         hsl(220 40% 96% / 0.9) 30%, 
         hsl(230 30% 94% / 1) 60%)`,
    transform: `translateY(${scrollY * 0.3}px)`,
    transition: 'background 0.3s ease-out, transform 0.1s ease-out',
  };

  return (
    <div 
      className="fixed inset-0 -z-10"
      style={gradientStyle}
    >
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{
            background: 'linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))',
            left: `${20 + mousePos.x * 10}%`,
            top: `${10 + mousePos.y * 10}%`,
            transform: `rotate(${scrollY * 0.1}deg)`,
            transition: 'all 0.6s ease-out',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 blur-2xl"
          style={{
            background: 'linear-gradient(-45deg, hsl(var(--accent)), hsl(var(--primary)))',
            right: `${15 + mousePos.x * 8}%`,
            bottom: `${20 + mousePos.y * 12}%`,
            transform: `rotate(${-scrollY * 0.08}deg)`,
            transition: 'all 0.8s ease-out',
          }}
        />
      </div>
    </div>
  );
};

export default DynamicBackground;