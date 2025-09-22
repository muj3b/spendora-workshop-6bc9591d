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
    // Center robot in the middle of the viewport
    <div 
      className="fixed inset-0 z-30 pointer-events-none overflow-hidden flex items-center justify-center"
      style={{
        opacity: finalOpacity,
        transform: `scale(${scale}) translateY(${parallaxY}px)`,
        transition: 'opacity 1s ease-out, transform 0.3s ease-out'
      }}
    >
      {/* Robot Spline Scene centered with mouse tracking */}
      <div className="relative opacity-80">
        <div 
          className={`transform-gpu origin-center transition-transform duration-200 ease-out ${
            isMobile ? 'scale-[0.8]' : 'scale-[1.2]'
          }`}
          style={{
            transform: `
              scale(${isMobile ? 0.8 : 1.2}) 
              rotateX(${mousePosition.y * 15}deg) 
              rotateY(${mousePosition.x * 12}deg)
            `,
            transformStyle: 'preserve-3d'
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className={`${isMobile ? 'w-[400px] h-[400px]' : 'w-[600px] h-[600px]'}`}
          />
        </div>
      </div>
      
      {/* Gradient overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
    </div>
  );
};