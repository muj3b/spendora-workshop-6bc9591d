import { useEffect, useRef } from 'react';

const ParallaxScrolling = () => {
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-parallax]') as NodeListOf<HTMLElement>;
    elementsRef.current = Array.from(elements);

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      elementsRef.current.forEach((element, index) => {
        const speed = element.dataset.parallax ? parseFloat(element.dataset.parallax) : 0.5;
        const yPos = -(scrolled * speed);
        
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      elementsRef.current.forEach((element) => {
        if (element.dataset.parallax === 'mouse') {
          const translateX = mouseX * 20;
          const translateY = mouseY * 20;
          element.style.transform = `translate(${translateX}px, ${translateY}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default ParallaxScrolling;