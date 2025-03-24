'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TabProps {
  isActive: boolean;
  title: string;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ isActive, title, onClick }) => {
  return (
    <div
      className={`cursor-pointer transition-all duration-300 px-6 py-2 rounded-full ${
        isActive ? 'bg-white/10 border border-white/30 text-white' : 'text-gray-400'
      } hover:text-white text-center`}
      onClick={onClick}
    >
      <p>{title}</p>
    </div>
  );
};

const ThirdSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContents = [
    {
      title: "DIYer is Gamer",
      subtitle: "Zero Performance Loss丨Full Monitoring",
      description: "Monitoring the frame number of games and recording the performance and power loss, generating real-time intelligent game record reports with time division."
    },
    {
      title: "DIYer helping Gamer",
      subtitle: "Colorlight project | for independent gaming creator",
      description: "Intelligent data analysis of game performance under computer configuration. Provide assistance to users and developers."
    }
  ];

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
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 text-white glow-text">
              {tabContents[activeTab].title}
            </h2>
            <h4 className="text-xl font-bold mb-4 text-white">
              {activeTab === 1 ? (
                <span className="border-b border-white inline-block pb-1">
                  <a href="#" className="text-brand-blue hover:underline">Colorlight project</a> | for independent gaming creator
                </span>
              ) : (
                <span className="border-b border-white inline-block pb-1">
                  {tabContents[activeTab].subtitle}
                </span>
              )}
            </h4>
            <p className="text-white/90 max-w-2xl">
              {tabContents[activeTab].description}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mt-8">
            <Tab
              isActive={activeTab === 0}
              title="Game Monitor"
              onClick={() => setActiveTab(0)}
            />
            <Tab
              isActive={activeTab === 1}
              title="Game Analysis"
              onClick={() => setActiveTab(1)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
