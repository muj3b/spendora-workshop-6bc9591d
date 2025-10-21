import { useEffect, useRef } from 'react';

const ParallaxScrolling = () => {
  const elementsRef = useRef<HTMLElement[]>([]);
  const rafIdRef = useRef<number>();
  const tickingRef = useRef(false);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    elementsRef.current = Array.from(elements);

    const handleScroll = () => {
      if (!tickingRef.current) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;

          elementsRef.current.forEach((element) => {
            const speed = element.dataset.parallax ? parseFloat(element.dataset.parallax) : 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px) translateZ(0)`;
          });
          
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!tickingRef.current) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          const mouseX = e.clientX / window.innerWidth - 0.5;
          const mouseY = e.clientY / window.innerHeight - 0.5;

          elementsRef.current.forEach((element) => {
            if (element.dataset.parallax === 'mouse') {
              const translateX = mouseX * 20;
              const translateY = mouseY * 20;
              element.style.transform = `translate(${translateX}px, ${translateY}px) translateZ(0)`;
            }
          });
          
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, []);

  return null;
};

export default ParallaxScrolling;