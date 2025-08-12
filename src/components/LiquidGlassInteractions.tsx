import { useEffect } from "react";

// Global Liquid Glass interaction layer
// - Hover swell (is-hovered)
// - Press bulge + ripple (is-pressed, is-rippling)
// - Pointer-based highlight via --gx/--gy and ripple center --rx/--ry
// - Scroll squish using --squish-x/--squish-y

const SELECTOR = ".liquid-glass-btn, .liquid-glass-surface, [data-liquid]";

function withinViewport(el: Element) {
  const r = (el as HTMLElement).getBoundingClientRect();
  return r.bottom > 0 && r.right > 0 && r.top < window.innerHeight && r.left < window.innerWidth;
}

export default function LiquidGlassInteractions() {
  useEffect(() => {
    let rafId: number | null = null;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let scrollCooldown: number | null = null;

    const onPointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(SELECTOR) as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const gx = ((e.clientX - rect.left) / rect.width) * 100;
      const gy = ((e.clientY - rect.top) / rect.height) * 100;
      target.style.setProperty("--gx", `${gx}%`);
      target.style.setProperty("--gy", `${gy}%`);
    };

    const onPointerEnter = (e: Event) => {
      const target = (e.target as HTMLElement)?.closest(SELECTOR) as HTMLElement | null;
      if (!target) return;
      target.classList.add("is-hovered");
    };

    const onPointerLeave = (e: Event) => {
      const target = (e.target as HTMLElement)?.closest(SELECTOR) as HTMLElement | null;
      if (!target) return;
      target.classList.remove("is-hovered");
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(SELECTOR) as HTMLElement | null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const rx = e.clientX - rect.left;
      const ry = e.clientY - rect.top;
      target.style.setProperty("--rx", `${rx}px`);
      target.style.setProperty("--ry", `${ry}px`);
      target.classList.add("is-pressed", "is-rippling");
      // remove ripple after animation
      window.setTimeout(() => target.classList.remove("is-rippling"), 750);
    };

    const onPointerUp = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(SELECTOR) as HTMLElement | null;
      if (!target) return;
      target.classList.remove("is-pressed");
    };

    const onScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const now = performance.now();
        const dy = window.scrollY - lastY;
        const dt = Math.max(1, now - lastT);
        lastY = window.scrollY;
        lastT = now;
        const v = Math.min(60, Math.max(-60, (dy / dt) * 1000)); // px/s clipped
        const mag = Math.min(0.04, Math.abs(v) * 0.0006);
        const squishY = 1 - mag;
        const squishX = 1 + mag * 0.6;
        document.querySelectorAll(SELECTOR).forEach((el) => {
          if (!withinViewport(el)) return;
          (el as HTMLElement).style.setProperty("--squish-x", `${squishX}`);
          (el as HTMLElement).style.setProperty("--squish-y", `${squishY}`);
        });

        if (scrollCooldown) window.clearTimeout(scrollCooldown);
        scrollCooldown = window.setTimeout(() => {
          document.querySelectorAll(SELECTOR).forEach((el) => {
            (el as HTMLElement).style.setProperty("--squish-x", `1`);
            (el as HTMLElement).style.setProperty("--squish-y", `1`);
          });
        }, 160);
      });
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("pointerenter", onPointerEnter, true);
    document.addEventListener("pointerleave", onPointerLeave, true);
    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("pointerup", onPointerUp, true);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (scrollCooldown) window.clearTimeout(scrollCooldown);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerenter", onPointerEnter, true);
      document.removeEventListener("pointerleave", onPointerLeave, true);
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("pointerup", onPointerUp, true);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
