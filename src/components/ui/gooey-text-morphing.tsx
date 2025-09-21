"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 0.8,
  cooldownTime = 0.6,
  className,
  textClassName
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const animationRef = React.useRef<number>();
  const stateRef = React.useRef({
    textIndex: 0,
    morph: 0,
    cooldown: cooldownTime,
    lastTime: performance.now()
  });

  React.useEffect(() => {
    // Initialize text content immediately
    if (text1Ref.current && text2Ref.current && texts.length > 0) {
      text1Ref.current.textContent = texts[0];
      text2Ref.current.textContent = texts[1] || texts[0];
      text1Ref.current.style.opacity = "100%";
      text2Ref.current.style.opacity = "0%";
      text1Ref.current.style.filter = "";
      text2Ref.current.style.filter = "";
    }

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        // Clamp values to prevent extreme effects
        const blur2 = Math.max(0, Math.min(100, 8 / Math.max(fraction, 0.1) - 8));
        const opacity2 = Math.max(0, Math.min(100, Math.pow(fraction, 0.4) * 100));
        
        const blur1 = Math.max(0, Math.min(100, 8 / Math.max(1 - fraction, 0.1) - 8));
        const opacity1 = Math.max(0, Math.min(100, Math.pow(1 - fraction, 0.4) * 100));

        text2Ref.current.style.filter = `blur(${blur2}px)`;
        text2Ref.current.style.opacity = `${opacity2}%`;
        text1Ref.current.style.filter = `blur(${blur1}px)`;
        text1Ref.current.style.opacity = `${opacity1}%`;
      }
    };

    const doCooldown = () => {
      stateRef.current.morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      stateRef.current.morph -= stateRef.current.cooldown;
      stateRef.current.cooldown = 0;
      let fraction = stateRef.current.morph / morphTime;

      if (fraction > 1) {
        stateRef.current.cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    const animate = (currentTime: number) => {
      const state = stateRef.current;
      const dt = Math.min((currentTime - state.lastTime) / 1000, 1/30); // Cap at 30fps for stability
      state.lastTime = currentTime;

      const shouldIncrementIndex = state.cooldown > 0;
      state.cooldown -= dt;

      if (state.cooldown <= 0) {
        if (shouldIncrementIndex) {
          state.textIndex = (state.textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[state.textIndex];
            text2Ref.current.textContent = texts[(state.textIndex + 1) % texts.length];
          }
        }
        doMorph();
      } else {
        doCooldown();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    stateRef.current.lastTime = performance.now();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="gooey-threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="flex items-center justify-center relative"
        style={{ filter: "url(#gooey-threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inline-block select-none text-center whitespace-nowrap",
            "text-foreground will-change-transform",
            textClassName || "text-6xl md:text-[60pt]"
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inline-block select-none text-center whitespace-nowrap",
            "text-foreground will-change-transform",
            textClassName || "text-6xl md:text-[60pt]"
          )}
        />
      </div>
    </div>
  );
}