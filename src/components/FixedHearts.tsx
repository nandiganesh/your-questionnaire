import { useState, useEffect } from 'react';

export default function FixedHearts() {
  const [hearts, setHearts] = useState<{ id: number; left: number; top: number; size: number; rotate: number }[]>([]);

  useEffect(() => {
    // Generate 35 scattered fixed hearts
    const newHearts = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 94 + 3, // 3% to 97%
      top: Math.random() * 94 + 3, // 3% to 97%
      size: 10 + Math.random() * 12, // 10px to 22px
      rotate: -30 + Math.random() * 60, // -30deg to 30deg
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          style={{
            position: 'absolute',
            top: `${heart.top}%`,
            left: `${heart.left}%`,
            opacity: 0.25,
          }}
        >
          <svg 
            width={heart.size} 
            height={heart.size} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="black" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            style={{ transform: `rotate(${heart.rotate}deg)` }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </div>
      ))}
    </div>
  );
}
