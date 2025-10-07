import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Vec2 {
  x: number;
  y: number;
  clone(): Vec2;
  sub(other: Vec2): Vec2;
  copy(other: Vec2): void;
  lerp(other: Vec2, t: number): void;
}

const vec2 = (x: number, y: number): Vec2 => ({
  x,
  y,
  clone() {
    return vec2(this.x, this.y);
  },
  sub(other: Vec2) {
    return vec2(this.x - other.x, this.y - other.y);
  },
  copy(other: Vec2) {
    this.x = other.x;
    this.y = other.y;
  },
  lerp(other: Vec2, t: number) {
    this.x += (other.x - this.x) * t;
    this.y += (other.y - this.y) * t;
  }
});

class ElasticCursorController {
  node: HTMLElement;
  pos: {
    prev: Vec2;
    now: Vec2;
    aim: Vec2;
    ease: number;
  };
  size: {
    prev: number;
    now: number;
    aim: number;
    ease: number;
  };
  active: boolean;
  target: HTMLElement | null;
  cleanups: (() => void)[];

  constructor(el: HTMLElement) {
    this.node = el;
    this.pos = {
      prev: vec2(-100, -100),
      now: vec2(-100, -100),
      aim: vec2(-100, -100),
      ease: 0.1
    };
    this.size = {
      prev: 1,
      now: 1,
      aim: 1,
      ease: 0.1
    };
    this.active = false;
    this.target = null;
    this.cleanups = [];
  }

  bindEvents() {
    // Only target actual clickable elements - be very selective
    const selectors = [
      'button:not([disabled])',
      'a[href]',
      'input[type="button"]',
      'input[type="submit"]',
      '[role="button"]:not(.card):not(.liquid-glass-surface)'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((el) => {
      const element = el as HTMLElement;
      
      // Skip if already bound or if it's a parent container
      if (element.hasAttribute('data-sticky-bound')) return;
      
      // Skip elements that are too large (likely containers, not buttons)
      const rect = element.getBoundingClientRect();
      if (rect.width > 300 || rect.height > 100) return;
      
      element.setAttribute('data-sticky-bound', 'true');
      
      // Store original position for magnetic effect
      const originalTransform = element.style.transform;
      
      const onPointerEnter = (ev: PointerEvent) => {
        this.active = true;
        this.target = element;
        element.classList.add('is-bubbled');
        
        // Get element center
        const rect = element.getBoundingClientRect();
        this.targetRect = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        };
      };

      const onPointerLeave = () => {
        this.active = false;
        this.target = null;
        element.classList.remove('is-bubbled');
        
        // Reset element position with smooth animation
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.5)'
        });
      };

      const moveX = gsap.quickTo(element, 'x', { 
        duration: 0.8, 
        ease: 'power3.out'
      });
      const moveY = gsap.quickTo(element, 'y', { 
        duration: 0.8, 
        ease: 'power3.out'
      });

      const onPointerMove = (ev: PointerEvent) => {
        if (!this.active || this.target !== element) return;
        
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate offset from center
        const dx = ev.clientX - centerX;
        const dy = ev.clientY - centerY;
        
        // Subtle magnetic pull (reduced intensity)
        moveX(dx * 0.15);
        moveY(dy * 0.15);
      };

      element.addEventListener('pointerenter', onPointerEnter, { passive: true });
      element.addEventListener('pointerleave', onPointerLeave, { passive: true });
      element.addEventListener('pointermove', onPointerMove, { passive: true });

      this.cleanups.push(() => {
        element.removeEventListener('pointerenter', onPointerEnter);
        element.removeEventListener('pointerleave', onPointerLeave);
        element.removeEventListener('pointermove', onPointerMove);
        element.removeAttribute('data-sticky-bound');
        element.style.transform = originalTransform;
      });
    });
  }

  targetRect: { x: number; y: number; width: number; height: number } | null = null;

  moveTo(x: number, y: number) {
    if (this.active && this.target && this.targetRect) {
      // Magnetic pull towards element center
      const dx = x - this.targetRect.x;
      const dy = y - this.targetRect.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Smooth interpolation towards target
      this.pos.aim.x = this.targetRect.x + dx * 0.3;
      this.pos.aim.y = this.targetRect.y + dy * 0.3;
      
      // Scale cursor to match button size
      const avgSize = (this.targetRect.width + this.targetRect.height) / 2;
      this.size.aim = Math.max(avgSize / 24, 2.5);

      // Rotate towards movement direction
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const normalizedDist = Math.min(distance / 100, 1);
      
      gsap.to(this.node, {
        rotate: angle,
        scaleX: this.size.aim * (1 + normalizedDist * 0.3),
        scaleY: this.size.aim * (1 - normalizedDist * 0.15),
        duration: 0.4,
        ease: 'power2.out',
        overwrite: true
      });
    } else {
      this.pos.aim.x = x;
      this.pos.aim.y = y;
      this.size.aim = 1;
    }
  }

  update() {
    this.pos.now.lerp(this.pos.aim, this.pos.ease);
    this.size.now = gsap.utils.interpolate(this.size.now, this.size.aim, this.size.ease);

    const diff = this.pos.now.clone().sub(this.pos.prev);
    this.pos.prev.copy(this.pos.now);
    this.size.prev = this.size.now;

    gsap.set(this.node, {
      x: this.pos.now.x,
      y: this.pos.now.y
    });

    if (!this.active) {
      const ang = Math.atan2(diff.y, diff.x) * (180 / Math.PI);
      const dist = Math.sqrt(diff.x ** 2 + diff.y ** 2) * 0.04;
      gsap.set(this.node, {
        rotate: ang,
        scaleX: this.size.now + Math.min(dist, 1),
        scaleY: this.size.now - Math.min(dist, 0.3)
      });
    }
  }

  cleanup() {
    this.cleanups.forEach(fn => fn());
    this.cleanups = [];
  }
}

export const ElasticCursor = () => {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const controllerRef = useRef<ElasticCursorController | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!bubbleRef.current) return;

    const controller = new ElasticCursorController(bubbleRef.current);
    controllerRef.current = controller;

    // Initial bind
    controller.bindEvents();

    // Rebind on DOM changes to catch dynamically added elements
    const observer = new MutationObserver(() => {
      controller.cleanup();
      controller.bindEvents();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    const onMouseMove = (e: MouseEvent) => {
      controller.moveTo(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      controller.update();
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      controller.cleanup();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bubbleRef}
      className="elastic-bubble"
      style={{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        position: 'fixed',
        top: 0,
        left: 0,
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        mixBlendMode: 'difference',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
};
