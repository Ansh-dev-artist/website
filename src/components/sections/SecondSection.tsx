'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FeatureProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const FeatureTab: React.FC<FeatureProps> = ({ isActive, title, onClick }) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-300 border-b-2 ${isActive ? 'border-brand-blue text-white' : 'border-transparent text-gray-400'} hover:text-white`}
      onClick={onClick}
    >
      <p className="mx-auto py-2">{title}</p>
    </div>
  );
};

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: 'Deep Scene Lighting',
      description: 'Light source from the case emits a space of energy, creating the finest immersive gaming environment. New lighting modes "the immersive gaming mode" and the exclusive "iGame mode" are launched.'
    },
    {
      title: 'Device Detection and Upgrading',
      description: 'Detection of user\'s device accessories offering a clear understanding of the performance parameters, with intelligent reminders for device updates and recommendations based on actual use.'
    },
    {
      title: 'Intelligent Service',
      description: 'Intelligent detection and switching for the full range of iGame devices, experience the exclusive software service, swiftly reading driver version updates with just one click, and intelligent computing for the game performance of the devices.'
    },
    {
      title: 'Real-time Monitoring',
      description: 'Tailored for iGame players. The on-screen display provides performance monitoring and will control the temperature and performance load of your devices. Choose between the simple mode, the fun mode, or other modes.'
    }
  ];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>

      {/* Background Gaming Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://ext.same-assets.com/875528577/1446454131.webp"
          alt="Gaming Background"
          fill
          className="object-cover opacity-30"
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

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-8 text-white glow-text">
            High Light
          </h2>

          <div className="bg-black/50 p-6 backdrop-blur-sm rounded-lg">
            <div className="mb-6">
              <h5 className="text-xl font-bold mb-3 text-white border-b border-white inline-block pb-2">
                {features[activeTab].title}
              </h5>
              <p className="text-white/90">
                {activeTab === 0 ? (
                  <>
                    Light source from the case emits a space of energy, creating the finest immersive gaming environment.
                    New lighting modes <span className="neon-text-red">"the immersive gaming mode"</span> and the exclusive
                    <span className="neon-text-blue"> "iGame mode" </span> are launched.
                  </>
                ) : (
                  features[activeTab].description
                )}
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-8">
              <FeatureTab
                isActive={activeTab === 0}
                title="Scene Lighting"
                onClick={() => setActiveTab(0)}
              />
              <FeatureTab
                isActive={activeTab === 1}
                title="Detection & Upgradation"
                onClick={() => setActiveTab(1)}
              />
              <FeatureTab
                isActive={activeTab === 2}
                title="Intelligent Service"
                onClick={() => setActiveTab(2)}
              />
              <FeatureTab
                isActive={activeTab === 3}
                title="Real-time Monitoring"
                onClick={() => setActiveTab(3)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
