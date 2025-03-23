'use client';

import React from 'react';
import Image from 'next/image';

const FirstSection = () => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Background Gaming Setup Image - replace with actual image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <Image
          src="https://ext.same-assets.com/875528577/3258482415.webp"
          alt="Gaming Setup Background"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Logo in top left */}
      <div className="absolute top-0 left-0 p-8 z-20">
        <Image
          src="https://ext.same-assets.com/875528577/259348630.webp"
          alt="Colorful Logo"
          width={150}
          height={50}
          className="h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-12 text-white glow-text tracking-wider">
            LINK THE WORLD
          </h1>

          <div className="flex flex-col space-y-4 mb-16 text-lg md:text-xl">
            <p className="flex items-center gap-3 text-white">
              <Image
                src="https://ext.same-assets.com/875528577/3638224228.webp"
                alt="Link Icon"
                width={24}
                height={24}
              />
              Link Virtual Display
            </p>
            <p className="flex items-center gap-3 text-white">
              <Image
                src="https://ext.same-assets.com/875528577/3638224228.webp"
                alt="Link Icon"
                width={24}
                height={24}
              />
              Link Entertainment
            </p>
            <p className="flex items-center gap-3 text-white">
              <Image
                src="https://ext.same-assets.com/875528577/3638224228.webp"
                alt="Link Icon"
                width={24}
                height={24}
              />
              Link Feelings
            </p>
          </div>
        </div>
      </div>

      {/* Stay Tuned Button */}
      <div className="absolute bottom-12 right-8 z-20 flex flex-col items-end">
        <p className="text-white mb-2 flex items-center">
          stay tuned
          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </span>
        </p>
        <a href="#" className="text-white hover:underline">Update content log*</a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <Image
          src="https://ext.same-assets.com/875528577/3431768213.svg"
          alt="Scroll Down"
          width={30}
          height={30}
        />
      </div>
    </div>
  );
};

export default FirstSection;
