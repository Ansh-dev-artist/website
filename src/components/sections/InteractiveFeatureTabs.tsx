'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface TabContent {
  title: string;
  description: string;
  image: string;
  features: string[];
}

export default function InteractiveFeatureTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent: TabContent[] = [
    {
      title: "Scene Lighting",
      description: "Light source from the case emits a space of energy, creating the finest immersive gaming environment. New lighting modes \"the immersive gaming mode\" and the exclusive \"iGame mode\" are launched.",
      image: "https://ext.same-assets.com/875528577/3711475632.webp",
      features: [
        "16.7 million colors RGB spectrum",
        "Sync with game actions and audio",
        "Custom lighting profiles per game",
        "iGame Sync technology across devices"
      ]
    },
    {
      title: "Detection & Upgradation",
      description: "iGame Center automatically detects your hardware and software configuration, checking for optimal settings and available updates to ensure peak performance.",
      image: "https://ext.same-assets.com/875528577/2752348745.webp",
      features: [
        "Automatic driver updates",
        "System bottleneck detection",
        "Performance improvement suggestions",
        "One-click optimization"
      ]
    },
    {
      title: "Intelligent Service",
      description: "AI-powered assistance that learns from your gaming habits to provide personalized recommendations and automatic adjustments for the best experience.",
      image: "https://ext.same-assets.com/875528577/2752348745.webp",
      features: [
        "Smart power profiles",
        "Game-specific optimizations",
        "Predictive performance tuning",
        "Automatic problem resolution"
      ]
    },
    {
      title: "Real-time Monitoring",
      description: "Comprehensive hardware monitoring with minimal impact on system resources, giving you full visibility into your system's performance during gameplay.",
      image: "https://ext.same-assets.com/875528577/1487284532.webp",
      features: [
        "GPU/CPU temperature tracking",
        "Frame rate monitoring",
        "Power consumption analysis",
        "Historical performance data"
      ]
    }
  ];

  // Animation variants
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-full bg-black/50 p-6 backdrop-blur-sm rounded-lg">
      <div className="mb-6">
        <h5 className="text-xl font-bold mb-3 text-white border-b border-white inline-block pb-2">
          {tabContent[activeTab].title}
        </h5>
        <p className="text-white/90">
          {tabContent[activeTab].description}
        </p>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
          variants={tabVariants}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-lg overflow-hidden aspect-video border border-gray-800">
              <Image
                src={tabContent[activeTab].image}
                alt={tabContent[activeTab].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
              <ul className="space-y-3">
                {tabContent[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Tab Navigation */}
      <div className="grid grid-cols-4 gap-2 mt-8">
        {tabContent.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`cursor-pointer border-b-2 transition-all duration-300 py-2 ${
              activeTab === index
                ? 'border-brand-blue text-white'
                : 'border-transparent text-gray-400 hover:text-white hover:border-brand-blue/30'
            }`}
          >
            <p className="mx-auto text-sm md:text-base">{tab.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
