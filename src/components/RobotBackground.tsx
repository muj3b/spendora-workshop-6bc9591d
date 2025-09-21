import React, { useEffect, useState } from 'react';
import { SplineScene } from '@/components/ui/spline-scene';

export const RobotBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Fade in on mount
    const timer = setTimeout(() => {
      setHasAnimatedIn(true);
    }, 100);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        // More responsive mouse following
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({ x: x * 0.8, y: y * 0.6 }); // Increased intensity
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, [isMobile]);

  // Calculate opacity based on scroll and initial animation
  const baseOpacity = hasAnimatedIn ? 1 : 0;
  const scrollOpacity = Math.max(0, 1 - scrollY / 300);
  const finalOpacity = baseOpacity * scrollOpacity;
  
  const scale = Math.max(0.8, 1 - scrollY / 1000); // Bigger robot
  const parallaxY = scrollY * 0.2;

  return (
    // Position robot at the top of the page, behind all content
    <div 
      className="fixed top-24 inset-x-0 h-screen z-0 pointer-events-none overflow-hidden"
      style={{
        opacity: finalOpacity,
        transform: `scale(${scale}) translateY(${parallaxY}px)`,
        transition: 'opacity 1s ease-out, transform 0.3s ease-out'
      }}
    >
      {/* Robot Spline Scene positioned at top with mouse tracking */}
      <div className="absolute top-0 inset-x-0 h-full opacity-80">
        <div 
          className={`absolute inset-0 transform-gpu origin-top flex items-start justify-center transition-transform duration-200 ease-out ${
            isMobile ? 'scale-[0.5] -translate-y-24' : 'scale-[0.8] -translate-y-12'
          }`}
          style={{
            transform: `
              scale(${isMobile ? 0.5 : 0.8}) 
              translateY(${isMobile ? -96 : -48}px) 
              rotateX(${mousePosition.y * 12}deg) 
              rotateY(${mousePosition.x * 15}deg)
            `,
            transformStyle: 'preserve-3d'
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className={`w-full ${isMobile ? 'h-[70vh] max-w-md' : 'h-[90vh] max-w-5xl'}`}
          />
        </div>
      </div>
      
      {/* Gradient overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 pointer-events-none" />
    </div>
  );
};
