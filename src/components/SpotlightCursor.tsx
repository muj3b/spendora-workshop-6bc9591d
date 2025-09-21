import { useEffect, useRef, useState } from "react";

// Global cursor spotlight overlay + nearest-element highlight + liquid glass positional glow
const SpotlightCursor = () => {
  const rafRef = useRef<number | null>(null);
  const [pos, setPos] = useState({ x: -1, y: -1 });
  const [isDark, setIsDark] = useState<boolean>(
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );
  const lastTargetRef = useRef<HTMLElement | null>(null);
  const candidatesRef = useRef<NodeListOf<HTMLElement> | null>(null);

  useEffect(() => {
    const updateCandidates = () => {
      candidatesRef.current = document.querySelectorAll<HTMLElement>(
        '[data-spotlight], button, a, .liquid-glass-surface, [role="button"], .card, .nav-link'
      );
    };
    updateCandidates();

    // Observe DOM changes (and theme changes on <html>)
    const domObserver = new MutationObserver((mut) => {
      updateCandidates();
      // Watch for theme toggle
      const html = document.documentElement;
      setIsDark(html.classList.contains("dark"));
    });
    domObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class"],
    });

    const setGlowOnEl = (el: HTMLElement, clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      const px = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      const py = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      el.style.setProperty("--gx", `${px * 100}%`);
      el.style.setProperty("--gy", `${py * 100}%`);
    };

    const onMove = (clientX: number, clientY: number) => {
      setPos({ x: clientX, y: clientY });
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const elList = candidatesRef.current;
        if (!elList || elList.length === 0) return;
        let best: { el: HTMLElement; d: number } | null = null;
        for (const el of Array.from(elList)) {
          const rect = el.getBoundingClientRect();
          if (rect.width === 0 && rect.height === 0) continue;
          const cx = rect.left + rect.width / 2;
          const cy = rect.top + rect.height / 2;
          const dx = cx - clientX;
          const dy = cy - clientY;
          const d = Math.hypot(dx, dy);
          if (!best || d < best.d) best = { el, d };
        }
        if (best) {
          // Update classes and glow variables
          if (best.el !== lastTargetRef.current) {
            lastTargetRef.current?.classList.remove("spotlight-target");
            best.el.classList.add("spotlight-target");
            lastTargetRef.current = best.el;
          }
          setGlowOnEl(best.el, clientX, clientY);
        }
      });
    };

    const handleMouse = (e: MouseEvent) => onMove(e.clientX, e.clientY);
    const handleTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) onMove(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("touchmove", handleTouch, { passive: true });
    window.addEventListener("resize", () => updateCandidates());

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("touchmove", handleTouch);
      domObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Add particle trail effect
  useEffect(() => {
    const particles: HTMLDivElement[] = [];
    const maxParticles = 20;
    
    const createParticle = (x: number, y: number) => {
      if (particles.length >= maxParticles) return;
      
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 3px;
        height: 3px;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 999;
        animation: particle-fade 1s ease-out forwards;
      `;
      
      document.body.appendChild(particle);
      particles.push(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
        const index = particles.indexOf(particle);
        if (index > -1) particles.splice(index, 1);
      }, 1000);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() < 0.3) {
        createParticle(e.clientX + Math.random() * 10 - 5, e.clientY + Math.random() * 10 - 5);
      }
    };

    // Add particle animation CSS
    if (!document.getElementById('particle-styles')) {
      const style = document.createElement('style');
      style.id = 'particle-styles';
      style.textContent = `
        @keyframes particle-fade {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3) translateY(-20px); }
        }
      `;
      document.head.appendChild(style);
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      particles.forEach(p => p.parentNode?.removeChild(p));
    };
  }, []);

  const spotlightColor = "rgba(255, 255, 255, 0.4)";

  const style = {
    background: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, ${spotlightColor}, transparent 70%)`,
    mixBlendMode: "screen" as const,
    filter: "saturate(130%)",
  } as React.CSSProperties;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 transition-[background] duration-150"
      style={style}
    />
  );
};

export default SpotlightCursor;