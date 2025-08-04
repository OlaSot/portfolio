import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    document.addEventListener('mousemove', updatePosition);
    
    const hoverElements = document.querySelectorAll('a, button, .hoverable');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-6 h-6 bg-purple-300 rounded-full pointer-events-none z-50 transition-all duration-200 ${
          isHovered ? 'scale-150 bg-purple-400' : ''
        }`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-purple-600 rounded-full pointer-events-none z-50"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;