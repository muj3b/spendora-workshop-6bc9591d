import { useEffect, useRef } from "react";

// Global cursor spotlight overlay + nearest-element highlight + liquid glass positional glow
const SpotlightCursor = () => {
  const rafRef = useRef<number | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const lastTargetRef = useRef<HTMLElement | null>(null);
  const candidatesRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const prefersFinePointer = typeof window !== "undefined" ? window.matchMedia("(pointer: fine)").matches : false;

  const spotlightColor = "rgba(255, 255, 255, 0.4)";
  const glowColor = "rgba(255, 255, 255, 0.8)";

  useEffect(() => {
    if (!prefersFinePointer) return;

    const updateCandidates = () => {
      candidatesRef.current = document.querySelectorAll<HTMLElement>(
        '[data-spotlight], button, a, .liquid-glass-surface, [role="button"], .card, .nav-link'
      );
    };
    updateCandidates();

    const domObserver = new MutationObserver(() => {
      updateCandidates();
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

    const updateOverlay = (clientX: number, clientY: number) => {
      if (!overlayRef.current) return;
      overlayRef.current.style.background = `radial-gradient(100px circle at ${clientX}px ${clientY}px, ${glowColor}, ${spotlightColor} 40%, transparent 70%)`;
    };

    const onMove = (clientX: number, clientY: number) => {
      updateOverlay(clientX, clientY);
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

    window.addEventListener("mousemove", handleMouse, { passive: true });
    window.addEventListener("resize", () => updateCandidates());

    return () => {
      window.removeEventListener("mousemove", handleMouse);
      domObserver.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [glowColor, prefersFinePointer, spotlightColor]);

  if (!prefersFinePointer) return null;

  return (
    <div
      ref={overlayRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition-[background] duration-150"
      style={{ background: "transparent", mixBlendMode: "screen", filter: "blur(0.5px)" }}
    />
  );
};

export default SpotlightCursor;
