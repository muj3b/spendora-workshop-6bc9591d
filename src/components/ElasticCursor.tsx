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
  private resetDelay: number | null = null;

  constructor(el: HTMLElement) {
    this.node = el;
    this.pos = {
      prev: vec2(-100, -100),
      now: vec2(-100, -100),
      aim: vec2(-100, -100),
      ease: 0.16
    };
    this.size = {
      prev: 1,
      now: 1,
      aim: 1,
      ease: 0.16
    };
    this.active = false;
    this.target = null;
    this.cleanups = [];
  }

  bindEvents() {
    // Target all interactive elements
    const selectors = [
      'button:not([disabled])',
      'a[href]',
      'input[type="button"]',
      'input[type="submit"]',
      '[role="button"]',
      '.nav-link',
      '[data-interactive]'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((el) => {
      const element = el as HTMLElement;
      
      // Skip if already bound
      if (element.hasAttribute('data-sticky-bound')) return;
      
      // Skip elements that are too large (likely containers, not buttons)
      const rect = element.getBoundingClientRect();
      if (rect.width > 400 || rect.height > 150) return;
      
      // Skip invisible elements
      if (rect.width === 0 || rect.height === 0) return;
      
      element.setAttribute('data-sticky-bound', 'true');
      
      // Store original position for magnetic effect
      const originalTransform = element.style.transform;
      
      const onPointerEnter = (ev: PointerEvent) => {
        if (this.isTransitioning) return;

        const rect = element.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;

        this.active = true;
        this.target = element;
        this.isTransitioning = true;
        element.classList.add('is-bubbled');

        this.targetRect = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        };

        this.updateFillState();

        setTimeout(() => {
          this.isTransitioning = false;
        }, 150);
      };

      const onPointerLeave = () => {
        this.resetCursorState();
        element.classList.remove('is-bubbled');

        // Reset element position quickly so it doesn't stay stretched
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.25,
          ease: 'power2.out'
        });
      };

      const moveX = gsap.quickTo(element, 'x', { 
        duration: 0.45, 
        ease: 'power2.out'
      });
      const moveY = gsap.quickTo(element, 'y', { 
        duration: 0.45, 
        ease: 'power2.out'
      });

      const onPointerMove = (ev: PointerEvent) => {
        if (!this.active || this.target !== element) return;
        
        const rect = element.getBoundingClientRect();
        
        // Update target rect for precise positioning
        this.targetRect = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          width: rect.width,
          height: rect.height
        };
        
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate offset from center
        const dx = ev.clientX - centerX;
        const dy = ev.clientY - centerY;
        
        // Subtle magnetic pull
        moveX(dx * 0.08);
        moveY(dy * 0.08);
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
  isTransitioning: boolean = false;

  updateFillState() {
    if (this.active && this.target && this.targetRect) {
      const scaleX = this.targetRect.width / 24;
      const scaleY = this.targetRect.height / 24;
      const borderRadius = Math.min(this.targetRect.width, this.targetRect.height) * 0.2;
      
      gsap.to(this.node, {
        scaleX: scaleX,
        scaleY: scaleY,
        borderRadius: `${borderRadius}px`,
        rotation: 0,
        duration: 0.22,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }
  }

  moveTo(x: number, y: number) {
    if (this.active && this.target && this.targetRect) {
      // Center cursor on the target element
      this.pos.aim.x = this.targetRect.x;
      this.pos.aim.y = this.targetRect.y;
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
      y: this.pos.now.y,
      force3D: true
    });

    // Subtle stretch without spinning
    if (!this.active) {
      const dist = Math.sqrt(diff.x ** 2 + diff.y ** 2) * 0.035;
      gsap.set(this.node, {
        rotation: 0,
        scaleX: this.size.now + Math.min(dist, 0.5),
        scaleY: this.size.now - Math.min(dist, 0.15),
        borderRadius: '50%',
        force3D: true
      });
    }
  }

  resetCursorState() {
    this.active = false;
    this.target = null;
    this.targetRect = null;
    this.isTransitioning = false;

    if (this.resetDelay) {
      window.clearTimeout(this.resetDelay);
    }

    this.resetDelay = window.setTimeout(() => {
      gsap.to(this.node, {
        scaleX: 1,
        scaleY: 1,
        rotation: 0,
        borderRadius: '50%',
        duration: 0.18,
        ease: 'power2.out',
        overwrite: true
      });
    }, 0);
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
    // Skip custom cursor on touch devices for performance and native feel
    if (!window.matchMedia('(pointer: fine)').matches) return;

    if (!bubbleRef.current) return;

    const controller = new ElasticCursorController(bubbleRef.current);
    controllerRef.current = controller;

    controller.bindEvents();

    let rebindTimer: number | null = null;
    const observer = new MutationObserver(() => {
      if (rebindTimer) {
        clearTimeout(rebindTimer);
      }

      rebindTimer = window.setTimeout(() => {
        controller.active = false;
        controller.target = null;
        controller.targetRect = null;
        controller.isTransitioning = false;

        gsap.to(controller.node, {
          scaleX: 1,
          scaleY: 1,
          borderRadius: '50%',
          duration: 0.2,
          ease: 'power2.out',
          overwrite: true
        });

        controller.cleanup();
        controller.bindEvents();
      }, 100);
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    const onMouseMove = (e: MouseEvent) => {
      controller.moveTo(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    const onMouseDown = () => controller.resetCursorState();
    window.addEventListener('mousedown', onMouseDown);

    const animate = () => {
      controller.update();
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      controller.cleanup();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (rebindTimer) {
        clearTimeout(rebindTimer);
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
