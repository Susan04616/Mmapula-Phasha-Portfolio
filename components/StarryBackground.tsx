
import React, { useEffect, useState } from 'react';

interface StarryBackgroundProps {
  isDarkMode: boolean;
}

const StarryBackground: React.FC<StarryBackgroundProps> = ({ isDarkMode }) => {
  const [stars, setStars] = useState<Array<{id: number, top: string, left: string, size: string, duration: string, delay: string, opacity: number}>>([]);

  useEffect(() => {
    // Generate static twinkling stars
    const newStars = Array.from({ length: 70 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 3 + 2}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.3
    }));
    setStars(newStars);
  }, []);

  const starColor = isDarkMode ? '#ffffff' : '#94a3b8'; // White vs Slate-400

  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full animate-twinkle transition-colors duration-300"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            opacity: star.opacity,
            backgroundColor: starColor
          }}
        />
      ))}
      
      <style>{`
        @keyframes twinkle {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; box-shadow: 0 0 4px ${isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(148, 163, 184, 0.5)'}; }
        }
        .animate-twinkle {
          animation-name: twinkle;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default StarryBackground;
