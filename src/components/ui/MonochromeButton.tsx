'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MonochromeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  glitchEffect?: boolean;
}

const MonochromeButton = ({
  children,
  onClick,
  className = '',
  size = 'md',
  glitchEffect = true,
}: MonochromeButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Size variants
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8 md:py-6 md:px-10',
  };

  // Glitch effect frames for the text - used directly in the animation
  const glitchAnimation = {
    x: [0, -1, 1, -1, 0],
    y: [0, 1, -1, 0, 0],
    opacity: [1, 0.9, 0.95, 0.85, 1],
  };

  // Animated gradient options
  const gradientAnimation = {
    backgroundImage: [
      'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))',
      'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.15))',
      'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))'
    ]
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative">
      {/* Pulse effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/10"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Main button */}
      <motion.button
        className={cn(
          "relative overflow-hidden rounded-full border border-white/30 bg-black text-white",
          "transition-all duration-300 shadow-lg backdrop-blur-sm",
          "focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black",
          sizeClasses[size],
          className
        )}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onTapStart={() => setIsPressed(true)}
        onTap={() => {
          setTimeout(() => setIsPressed(false), 150);
        }}
        onTapCancel={() => setIsPressed(false)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleClick}
      >
        {/* Button background effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10"
          animate={isHovered ? gradientAnimation : { backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.1))' }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />

        {/* Scan line effect */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
          >
            <motion.div
              className="h-[1px] w-full bg-white/70"
              initial={{ y: -100 }}
              animate={{ y: 100 }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "linear"
              }}
            />
          </motion.div>
        )}

        {/* Button text with optional glitch effect */}
        <motion.span
          className="relative z-10 font-medium tracking-wide flex items-center justify-center"
          animate={isHovered && glitchEffect ? glitchAnimation : { x: 0, y: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            repeat: isHovered && glitchEffect ? Infinity : 0,
            repeatType: "mirror"
          }}
        >
          {children}

          {/* Arrow indicator */}
          <motion.span
            className="ml-2 inline-block"
            animate={isHovered ? { x: [0, 4, 0], opacity: [1, 0.7, 1] } : { x: 0, opacity: 1 }}
            transition={{
              repeat: isHovered ? Infinity : 0,
              duration: 1.5
            }}
          >
            →
          </motion.span>
        </motion.span>

        {/* Pressed flash effect */}
        {isPressed && (
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>

      {/* Bottom highlight */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[1px] rounded-full bg-white/50"
        initial={{ opacity: 0.2, width: "80%", left: "10%" }}
        animate={isHovered ?
          { opacity: [0.2, 0.5, 0.2], width: ["80%", "100%", "80%"], left: ["10%", "0%", "10%"] } :
          { opacity: 0.2, width: "80%", left: "10%" }
        }
        style={{
          boxShadow: isHovered ? "0 0 10px 1px rgba(255,255,255,0.5)" : "none"
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      />
    </div>
  );
};

export default MonochromeButton;
