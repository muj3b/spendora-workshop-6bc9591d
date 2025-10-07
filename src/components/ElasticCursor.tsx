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
    // Find all interactive elements
    const selectors = [
      'button',
      'a',
      '[role="button"]',
      '.liquid-glass-surface',
      '.card',
      '.nav-link',
      '[data-spotlight]',
      'input',
      'textarea',
      'select',
      '[data-sticky]'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));

    elements.forEach((el) => {
      const element = el as HTMLElement;
      
      // Skip if already marked as sticky
      if (element.hasAttribute('data-sticky-bound')) return;
      element.setAttribute('data-sticky-bound', 'true');
      element.setAttribute('data-sticky', '');
      
      // Create sticky area
      let area = element.querySelector('[data-sticky-area]') as HTMLElement;
      if (!area) {
        area = document.createElement('div');
        area.setAttribute('data-sticky-area', '');
        area.style.cssText = 'position: absolute; inset: 0; pointer-events: none; z-index: 1;';
        
        // Ensure element can contain the area
        const computedStyle = window.getComputedStyle(element);
        if (computedStyle.position === 'static') {
          element.style.position = 'relative';
        }
        element.appendChild(area);
      }

      const onPointerOver = () => {
        this.active = true;
        this.target = area;
        element.classList.add('is-bubbled');
      };

      const onPointerOut = () => {
        this.active = false;
        this.target = null;
        element.classList.remove('is-bubbled');
      };

      element.addEventListener('pointerenter', onPointerOver, { passive: true });
      element.addEventListener('pointerleave', onPointerOut, { passive: true });

      const moveX = gsap.quickTo(element, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      const moveY = gsap.quickTo(element, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

      const onPointerMove = (ev: PointerEvent) => {
        const { clientX, clientY } = ev;
        const rect = element.getBoundingClientRect();
        const dx = clientX - (rect.left + rect.width / 2);
        const dy = clientY - (rect.top + rect.height / 2);
        moveX(dx * 0.2);
        moveY(dy * 0.2);
      };

      const onPointerLeaveReset = () => {
        moveX(0);
        moveY(0);
      };

      element.addEventListener('pointermove', onPointerMove, { passive: true });
      element.addEventListener('pointerleave', onPointerLeaveReset, { passive: true });

      this.cleanups.push(() => {
        element.removeEventListener('pointerenter', onPointerOver);
        element.removeEventListener('pointerleave', onPointerOut);
        element.removeEventListener('pointermove', onPointerMove);
        element.removeEventListener('pointerleave', onPointerLeaveReset);
        element.removeAttribute('data-sticky-bound');
      });
    });
  }

  moveTo(x: number, y: number) {
    if (this.active && this.target) {
      const rect = this.target.getBoundingClientRect();
      const cx = rect.x + rect.width / 2;
      const cy = rect.y + rect.height / 2;
      const dx = x - cx;
      const dy = y - cy;

      this.pos.aim.x = cx + dx * 0.15;
      this.pos.aim.y = cy + dy * 0.15;
      this.size.aim = 2;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const dist = Math.sqrt(dx * dx + dy * dy) * 0.01;
      gsap.set(this.node, { rotate: angle });
      gsap.to(this.node, {
        scaleX: this.size.aim + Math.pow(Math.min(dist, 0.6), 3) * 3,
        scaleY: this.size.aim - Math.pow(Math.min(dist, 0.3), 3) * 3,
        duration: 0.5,
        ease: 'power4.out',
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
