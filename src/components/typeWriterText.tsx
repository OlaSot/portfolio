'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterTextProps {
  text?: string;
  delay?: number;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text = '',
  delay = 0,
  className = '',
}) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    if (!text) return;

    setVisibleText('');
    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        // защита от выхода за пределы строки
        if (i < text.length) {
          const char = text.charAt(i); // безопасно получаем символ
          setVisibleText((prev) => prev + char);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 80);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{visibleText}</span>;
};

export default TypewriterText;
