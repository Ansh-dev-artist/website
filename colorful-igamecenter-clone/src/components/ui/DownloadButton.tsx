'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';

interface DownloadButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function DownloadButton({
  className = '',
  size = 'md',
  text = 'Download'
}: DownloadButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Determine sizes based on the size prop
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };

  // Animation for the pulse effect
  const pulseAnimation = {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 0 0 rgba(59, 130, 246, 0.4)',
      '0 0 0 10px rgba(59, 130, 246, 0)',
      '0 0 0 0 rgba(59, 130, 246, 0)',
    ],
  };

  const handleClick = () => {
    setIsClicked(true);
    // Simulate download action
    setTimeout(() => {
      setIsClicked(false);
      alert('Starting download...');
    }, 1000);
  };

  return (
    <div className="relative">
      {/* Background glow effect */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full opacity-70 blur-md"
        animate={isHovered ? { opacity: 0.9 } : { opacity: 0.5 }}
        transition={{ duration: 0.3 }}
      />

      {/* Animated circles around the button when hovered */}
      {isHovered && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.4, 1.8],
              borderWidth: [0, 2, 0],
              borderColor: ['rgba(99, 102, 241, 0.8)', 'rgba(99, 102, 241, 0.4)', 'rgba(99, 102, 241, 0)']
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeOut"
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full"
            initial={{ opacity: 0, scale: 1 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [1, 1.2, 1.6],
              borderWidth: [0, 2, 0],
              borderColor: ['rgba(168, 85, 247, 0.8)', 'rgba(168, 85, 247, 0.4)', 'rgba(168, 85, 247, 0)']
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              delay: 0.3,
              ease: "easeOut"
            }}
          />
        </>
      )}

      {/* Main button */}
      <motion.div
        className="relative"
        initial={{ scale: 1 }}
        animate={isClicked ? { scale: 0.95 } : { scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <Button
          onClick={handleClick}
          className={`
            relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200
            text-white font-medium rounded-full shadow-lg
            border-2 border-white/20
            ${sizeStyles[size]}
            ${className}
          `}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-blue-700 rounded-full opacity-0"
            animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <span className="relative flex items-center justify-center">
            {isClicked ? (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                className="flex items-center"
              >
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </motion.div>
            ) : (
              <>
                {text}
                <motion.span
                  className="ml-2 inline-block"
                  animate={{
                    x: isHovered ? [0, 5, 0] : 0,
                    opacity: isHovered ? [0.5, 1, 0.5] : 1
                  }}
                  transition={{
                    repeat: isHovered ? Infinity : 0,
                    duration: 1.2
                  }}
                >
                  →
                </motion.span>
              </>
            )}
          </span>
        </Button>
      </motion.div>

      {/* Radial glow effect on hover */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)' }}
          animate={{ boxShadow: '0 0 20px 10px rgba(59, 130, 246, 0.3)' }}
          exit={{ boxShadow: '0 0 0 0 rgba(59, 130, 246, 0)' }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  );
}
