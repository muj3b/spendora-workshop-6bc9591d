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
        // Proper mouse tracking for robot head
        const rect = window.innerWidth;
        const height = window.innerHeight;
        const x = (e.clientX / rect - 0.5) * 2; // -1 to 1
        const y = (e.clientY / height - 0.5) * 2; // -1 to 1
        setMousePosition({ 
          x: x * 0.8, // Good sensitivity
          y: y * 0.6  // Good sensitivity
        });
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
    // Position robot lower to accommodate text at top and buttons at body level
    <div 
      className="fixed top-64 left-1/2 transform -translate-x-1/3 w-full h-screen z-30 pointer-events-none overflow-hidden"
      style={{
        opacity: finalOpacity,
        transform: `translateX(calc(-33.333333% - 60px)) scale(${scale}) translateY(${parallaxY}px)`,
        transition: 'opacity 1s ease-out, transform 0.3s ease-out'
      }}
    >
      {/* Robot Spline Scene positioned lower with mouse tracking */}
      <div className="absolute top-0 inset-x-0 h-full opacity-80">
        <div 
          className={`absolute inset-0 transform-gpu origin-center flex items-start justify-center transition-transform duration-200 ease-out ${
            isMobile ? 'scale-[0.7] -translate-y-8' : 'scale-[1.1] -translate-y-16'
          }`}
          style={{
            transform: `
              scale(${isMobile ? 0.7 : 1.1}) 
              translateY(${isMobile ? -32 : -64}px) 
              rotateX(${mousePosition.y * 15}deg) 
              rotateY(${mousePosition.x * 12}deg)
            `,
            transformStyle: 'preserve-3d'
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className={`w-full ${isMobile ? 'h-[80vh] max-w-lg' : 'h-[100vh] max-w-6xl'}`}
          />
        </div>
      </div>
      
      {/* Gradient overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
    </div>
  );
};