'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroBackgroundProps {
  className?: string;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ className = '' }) => {
  // Generate a deterministic set of particles to prevent animation flickering on rerenders
  const particles = React.useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const id = i;
      const width = Math.random() * 4 + 1;
      const height = Math.random() * 4 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const isBlue = Math.random() > 0.5;
      const color = isBlue ? '#3b82f6' : '#8b5cf6';
      const x1 = Math.random() * 100 - 50;
      const x2 = Math.random() * 100 - 50;
      const x3 = Math.random() * 100 - 50;
      const y1 = Math.random() * 100 - 50;
      const y2 = Math.random() * 100 - 50;
      const y3 = Math.random() * 100 - 50;
      const duration = Math.random() * 10 + 20;

      return { id, width, height, left, top, color, x1, x2, x3, y1, y2, y3, duration };
    });
  }, []);

  // Generate connection lines with memoization
  const connectionLines = React.useMemo(() => {
    return Array.from({ length: 10 }).map((_, i) => {
      const id = i;
      const x1 = Math.random() * 100;
      const y1 = Math.random() * 100;
      const x2 = Math.random() * 100;
      const y2 = Math.random() * 100;

      return { id, x1, y1, x2, y2 };
    });
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Grid lines overlay */}
      <div className="absolute inset-0 z-[1] opacity-10 pointer-events-none bg-grid-pattern bg-grid" />

      {/* Moving particles effect */}
      <div className="absolute inset-0 z-[2] opacity-30">
        <div className="absolute w-full h-full">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute rounded-full"
              style={{
                width: particle.width,
                height: particle.height,
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                backgroundColor: particle.color,
              }}
              animate={{
                x: [particle.x1, particle.x2, particle.x3],
                y: [particle.y1, particle.y2, particle.y3],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Connection lines (static) */}
      <div className="absolute inset-0 z-[2]">
        <svg width="100%" height="100%" className="opacity-20">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {connectionLines.map((line) => (
            <line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="url(#line-gradient)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-br from-blue-900/5 via-transparent to-purple-900/10" />

      {/* Dark overlay to ensure content readability */}
      <div className="absolute inset-0 z-[4] bg-black/60" />

      {/* Digital scan lines */}
      <motion.div
        className="absolute inset-0 z-[5] opacity-5 bg-scanline-pattern bg-scanline"
        animate={{ y: ['0%', '100%'] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
      />

      {/* Center radial highlight */}
      <div className="absolute top-1/3 left-1/2 w-[800px] h-[400px] -translate-x-1/2 z-[5] bg-gradient-radial from-blue-500/10 via-transparent to-transparent rounded-full blur-[100px]" />

      {/* Animated HUD elements */}
      <div className="absolute top-0 right-0 w-64 h-64 z-[6] opacity-10 pointer-events-none">
        <motion.div
          className="w-full h-full border-t border-r border-blue-500/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-64 h-64 z-[6] opacity-10 pointer-events-none">
        <motion.div
          className="w-full h-full border-b border-l border-purple-500/30"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>
    </div>
  );
};

export default HeroBackground;
