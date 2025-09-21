import React from 'react';
import { SplineScene } from '@/components/ui/spline-scene';
import { Spotlight } from '@/components/ui/spotlight';

export const RobotBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-30"
        fill="white"
      />
      
      {/* Robot Spline Scene */}
      <div className="absolute inset-0 opacity-70">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      
      {/* Gradient overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background/60 pointer-events-none" />
    </div>
  );
};