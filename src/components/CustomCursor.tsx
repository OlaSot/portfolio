import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const cursorX = useRef(0);
  const cursorY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    const animate = () => {
      cursorX.current += (mouseX.current - cursorX.current) * 0.15;
      cursorY.current += (mouseY.current - cursorY.current) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cursorX.current - 12}px, ${cursorY.current - 12}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX.current - 2}px, ${mouseY.current - 2}px)`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(animate);

    const hoverElements = document.querySelectorAll('a, button, .hoverable');
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', () => setIsHovered(true));
      el.addEventListener('mouseleave', () => setIsHovered(false));
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', () => setIsHovered(true));
        el.removeEventListener('mouseleave', () => setIsHovered(false));
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-6 h-6 bg-purple-300 rounded-full pointer-events-none z-50 transition-colors duration-200 ${
          isHovered ? 'scale-150 bg-purple-400' : ''
        }`}
        style={{ willChange: 'transform' }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1 h-1 bg-purple-600 rounded-full pointer-events-none z-50"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
