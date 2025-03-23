'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
}: OptimizedImageProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use suppressHydrationWarning to handle any hydration mismatches
  return (
    <div suppressHydrationWarning>
      {isMounted ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          className={className}
          priority={priority}
        />
      ) : (
        // Simple placeholder during SSR to avoid hydration mismatch
        <div
          className={`bg-gray-900 ${className}`}
          style={fill ? { position: 'absolute', inset: 0 } : { width: `${width}px`, height: `${height}px` }}
        />
      )}
    </div>
  );
}
