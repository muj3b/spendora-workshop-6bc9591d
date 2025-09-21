import React, { useEffect, useState } from 'react';
import { SplineScene } from '@/components/ui/spline-scene';
import { Spotlight } from '@/components/ui/spotlight';

export const RobotBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Hide robot when scrolling down past 150px (earlier for mobile)
      const threshold = isMobile ? 100 : 200;
      setIsVisible(currentScrollY < threshold);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        // Convert mouse position to normalized coordinates (-1 to 1)
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = (e.clientY / window.innerHeight) * 2 - 1;
        setMousePosition({ x: x * 0.3, y: y * 0.2 }); // Reduced intensity for subtle movement
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
    };
  }, [isMobile]);

  const opacity = Math.max(0, 1 - scrollY / 300);
  const scale = Math.max(0.7, 1 - scrollY / 1000);
  const parallaxY = scrollY * 0.3;

  if (!isVisible) return null;

  return (
    // Position robot at the top of the page, behind all content
    <div 
      className="fixed top-24 inset-x-0 h-screen z-0 pointer-events-none overflow-hidden"
      style={{
        opacity,
        transform: `scale(${scale}) translateY(${parallaxY}px)`,
        transition: 'opacity 0.3s ease-out'
      }}
    >
      <Spotlight
        className={`-top-40 left-0 md:left-60 md:-top-20 ${isMobile ? 'opacity-10' : 'opacity-20'}`}
        fill="white"
      />
      
      {/* Robot Spline Scene positioned at top with mouse tracking */}
      <div className="absolute top-0 inset-x-0 h-full opacity-60">
        <div 
          className={`absolute inset-0 transform-gpu origin-top flex items-start justify-center transition-transform duration-100 ease-out ${
            isMobile ? 'scale-[0.4] -translate-y-32' : 'scale-[0.6] -translate-y-20'
          }`}
          style={{
            transform: `
              scale(${isMobile ? 0.4 : 0.6}) 
              translateY(${isMobile ? -128 : -80}px) 
              rotateX(${mousePosition.y * 5}deg) 
              rotateY(${mousePosition.x * 8}deg)
            `,
            transformStyle: 'preserve-3d'
          }}
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className={`w-full ${isMobile ? 'h-[60vh] max-w-sm' : 'h-[80vh] max-w-4xl'}`}
          />
        </div>
      </div>
      
      {/* Gradient overlay to ensure content readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60 pointer-events-none" />
    </div>
  );
};
