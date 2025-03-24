'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

const FourthSection = () => {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-black/70 z-0"></div>

      {/* Background Gaming Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/875528577/2866288088.webp"
          alt="Gaming Background"
          fill
          className="object-cover opacity-20"
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

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-8 text-white glow-text">
            Contact us
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                <span className="border-b border-white pb-1">Bug Hunting Plan:</span>
              </h3>
              <p className="text-white/90 max-w-2xl">
                By submitting explicit bugs, users will be rewarded with iGame points. Furthermore, those who submit "serious" and "complicated" bugs will be rewarded with physical hardware!
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">
                <span className="border-b border-white pb-1">Senior Product Manager Seeking Plan:</span>
              </h3>
              <p className="text-white/90 max-w-2xl">
                We will read every opinion and idea for the improvement of iGame Center, and those who put forward excellent opinions or ideas will be rewarded!
              </p>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <Button
              className="bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-2 h-auto"
              onClick={() => alert('Submit Bug Modal')}
            >
              Submit Bug
            </Button>
            <Button
              className="bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-2 h-auto"
              onClick={() => alert('Submit Opinion Modal')}
            >
              Submit Opinion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
