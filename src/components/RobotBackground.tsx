import React from 'react';
import { SplineScene } from '@/components/ui/spline-scene';
import { Spotlight } from '@/components/ui/spotlight';

export const RobotBackground = () => {
  return (
    // Confine the robot to the hero area only and place behind content
    <div className="absolute top-0 inset-x-0 h-[60vh] md:h-[70vh] z-0 pointer-events-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-30"
        fill="white"
      />
      
      {/* Robot Spline Scene (slightly scaled and lifted to avoid zoomed-in feel) */}
      <div className="absolute inset-0 opacity-70 overflow-hidden">
        <div className="absolute inset-0 transform-gpu scale-[0.85] -translate-y-6 origin-top">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
      
      {/* Gradient overlay to ensure readability and fade into page content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background/80 pointer-events-none" />
    </div>
  );
};
