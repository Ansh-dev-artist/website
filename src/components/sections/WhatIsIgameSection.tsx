'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DownloadButton from '@/components/ui/DownloadButton';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg border border-gray-800 hover:border-brand-blue/50 transition-all duration-300"
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center bg-brand-blue/20 rounded-lg">
        <Image
          src={icon}
          width={24}
          height={24}
          alt={title}
          className="text-brand-blue"
        />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
};

export default function WhatIsIgameSection() {
  const features = [
    {
      icon: "https://ext.same-assets.com/875528577/1756781622.webp",
      title: "Real-time Monitoring",
      description: "Track CPU/GPU performance, temperatures, and clock speeds in real-time with minimal resource usage."
    },
    {
      icon: "https://ext.same-assets.com/875528577/3325548339.webp",
      title: "RGB Lighting Control",
      description: "Customize your gaming rig with advanced RGB lighting effects synchronized with your gameplay."
    },
    {
      icon: "https://ext.same-assets.com/875528577/2626577437.webp",
      title: "Game Optimization",
      description: "Automatically adjust settings for optimal performance with one-click game optimizations."
    },
    {
      icon: "https://ext.same-assets.com/875528577/3811682723.webp",
      title: "Hardware Integration",
      description: "Seamless integration with Colorful iGame hardware series for maximum performance and control."
    }
  ];

  return (
    <section id="what-is-igame" className="relative py-20 px-6 md:px-16 lg:px-24 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-900/20 via-transparent to-transparent opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white glow-text">
            What is iGame Center?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            iGame Center is Colorful's flagship gaming software ecosystem, designed to enhance your gaming experience with cutting-edge monitoring, optimization, and customization tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index + 1}
            />
          ))}
        </div>

        {/* Software UI Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 relative bg-gradient-to-b from-brand-blue/5 to-transparent p-6 rounded-xl"
        >
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl border border-gray-800">
            <Image
              src="https://ext.same-assets.com/875528577/3835276244.webp"
              alt="iGame Center Dashboard"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h4 className="text-white font-bold text-2xl mb-2">Powerful Dashboard</h4>
              <p className="text-gray-300 max-w-lg">Access all your hardware data and customization options in one sleek, intuitive interface designed for gamers.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <DownloadButton size="lg" text="Download iGame Center" />
          <p className="mt-4 text-gray-400">Available for Windows 10/11 • Compatible with all iGame hardware</p>
        </motion.div>
      </div>
    </section>
  );
}
