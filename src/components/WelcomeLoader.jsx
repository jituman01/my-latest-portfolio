'use client';
import React, { useEffect, useState } from 'react';

const WelcomeLoader = ({ onComplete }) => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onComplete, 1000); 
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <h1 className="relative text-xl md:text-2xl uppercase tracking-[0.2em] text-gray-800">
        LET'S BUILD TOGETHER

        
        <span className="absolute inset-0 text-white bg-clip-text bg-gradient-to-r from-transparent via-white to-transparent opacity-80 animate-[shimmer_2.5s_linear_infinite]"
          style={{
            backgroundImage: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}
        >
          LET'S BUILD TOGETHER
        </span>
      </h1>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};

export default WelcomeLoader;