'use client';

import React, { useEffect, useRef, useState } from 'react';

const ScanningPhoto: React.FC = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  const [status, setStatus] = useState<'scanning' | 'match'>('scanning');
  const [scanStarted, setScanStarted] = useState(false);

  useEffect(() => {
    const statusTimer = setTimeout(() => {
      setStatus('match');
      setScanStarted(true);
    }, 3000);

    return () => clearTimeout(statusTimer);
  }, []);
useEffect(() => {
  if (!scanStarted) return;

  const duration = 10000;
  const pauseDuration = 3000;
  let direction: 'down' | 'up' = 'down';
  let startTime = performance.now();
  let isPaused = false;

  const animate = (time: number) => {
    const elapsed = time - startTime;

    if (isPaused) return;

    let progress = Math.min(elapsed / duration, 1);
    if (direction === 'up') {
      progress = 1 - progress;
    }

    const heightPercent = 100 - progress * 100;

    if (overlayRef.current) {
      overlayRef.current.style.clipPath = `inset(0 0 ${heightPercent}% 0)`;
    }

    if (scanLineRef.current) {
      scanLineRef.current.style.top = `${progress * 100}%`;
    }

    if (elapsed < duration) {
      requestAnimationFrame(animate);
    } else {
      // Пауза в конце движения
      isPaused = true;
      setTimeout(() => {
        direction = direction === 'down' ? 'up' : 'down';
        startTime = performance.now();
        isPaused = false;
        requestAnimationFrame(animate);
      }, pauseDuration);
    }
  };

  requestAnimationFrame(animate);
}, [scanStarted]);
  return (
    <div className="relative w-full max-w-[500px] aspect-square rounded-xl border border-[#00ffc3]/30 overflow-hidden shadow-[0_0_20px_#00ffc333] group transition-all duration-700">
      {/* Финальное фото */}
      <img
        alt="Olha"
        src="/me/glitch.png"
        className="w-full h-full object-cover"
      />

      {/* Фото до сканирования */}
      <div
        ref={overlayRef}
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{ clipPath: 'inset(0 0 100% 0)' }}
      >
        <img
          src="/me/color.jpg"
          alt="Glitch"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Сканирующая линия */}
      {scanStarted && (
        <div
          ref={scanLineRef}
          className="absolute left-0 w-full h-1 bg-[#00ffc3] opacity-60 z-20 animate-pulse"
          style={{ top: '0%' }}
        />
      )}

      {/* Надпись */}
      <div className="absolute top-2 left-2 text-xs font-mono text-[#00ffc3]/80 bg-black/60 px-2 py-1 rounded z-30 transition-all duration-500">
        {status === 'scanning' ? 'SCANNING...' : 'MATCH FOUND'}
      </div>
    </div>
  );
};

export default ScanningPhoto;
