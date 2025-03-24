'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import NavigationBar from '@/components/ui/NavigationBar';
import WhatIsIgameSection from '@/components/sections/WhatIsIgameSection';
import ProductShowcase from '@/components/sections/ProductShowcase';
import InteractiveFeatureTabs from '@/components/sections/InteractiveFeatureTabs';
import Footer from '@/components/ui/Footer';
import { motion } from 'framer-motion';
import { scrollToElementBySelector } from '@/lib/smoothScroll';
import HeroBackground from '@/components/ui/HeroBackground';
import MonochromeButton from '@/components/ui/MonochromeButton';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const sectionsRef = useRef<HTMLElement[]>([]);

  // Helper function to set ref
  const setRef = (index: number) => (el: HTMLElement | null) => {
    if (el) {
      sectionsRef.current[index] = el;
    }
  };

  // Handle scroll to specific section
  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(index);
  };

  // Client-side marker to prevent hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Track scroll position to update active section
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      if (typeof window === 'undefined') return;

      const pageYOffset = window.pageYOffset;
      const windowHeight = window.innerHeight;

      // Get all sections in the correct order
      const sections = [
        document.querySelector('#section1'),
        document.querySelector('#what-is-igame'),
        document.querySelector('#product-showcase'),
        document.querySelector('#section2'),
        document.querySelector('#section3'),
        document.querySelector('#section4')
      ];

      let newActiveSection = 0;
      sections.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = section.getBoundingClientRect().height;
        const threshold = windowHeight / 3;

        // If we're within the section with a threshold
        if (pageYOffset >= sectionTop - threshold &&
            pageYOffset < sectionTop + sectionHeight - threshold) {
          newActiveSection = index;
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]); // Only run this effect on the client

  // If not on client, return a minimal loader
  if (!isClient) {
    return <div className="min-h-screen bg-black"></div>;
  }

  return (
    <>
      <NavigationBar />
      <main className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* First Section - Link The World */}
        <section
          className="relative h-screen w-full snap-start overflow-hidden"
          id="section1"
          ref={setRef(0)}
        >
          {/* Dynamic Background */}
          <HeroBackground />

          {/* Main Content */}
          <div className="relative z-20 h-full flex flex-col justify-center items-start px-8 md:px-16 lg:px-24">
            <div className="w-full max-w-5xl mx-auto">
              <div className="relative">
                {/* Animated Highlight Line */}
                <motion.div
                  className="absolute -left-8 top-1/2 h-[2px] w-6 bg-blue-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />

                {/* Animated Headline */}
                <motion.h1
                  data-text="LINK THE WORLD"
                  className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-12 text-white tracking-wider text-glitch holographic-text"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  LINK THE WORLD
                </motion.h1>

                {/* Digital Corner Accents */}
                <motion.div
                  className="absolute -right-4 -top-4 w-12 h-12 border-t-2 border-r-2 border-blue-500/70"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                <motion.div
                  className="absolute -left-4 -bottom-4 w-12 h-12 border-l-2 border-b-2 border-purple-500/70"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-col space-y-4 mb-16 text-lg md:text-xl"
              >
                {/* First Link Item */}
                <motion.div
                  className="flex items-center gap-3 text-white py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  {/* Animated Icon Container */}
                  <motion.div
                    className="relative p-1 bg-black/30 backdrop-blur-sm rounded-md border border-blue-500/30"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 8px 0 rgba(59, 130, 246, 0.5)'
                    }}
                  >
                    <Image
                      src="https://ext.same-assets.com/875528577/3638224228.webp"
                      alt="Link Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-500/10 rounded-md"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                  </motion.div>
                  <span className="motion-safe:animate-text-flicker">Link Virtual Display</span>
                </motion.div>

                {/* Second Link Item */}
                <motion.div
                  className="flex items-center gap-3 text-white py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="relative p-1 bg-black/30 backdrop-blur-sm rounded-md border border-purple-500/30"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 8px 0 rgba(139, 92, 246, 0.5)'
                    }}
                  >
                    <Image
                      src="https://ext.same-assets.com/875528577/3638224228.webp"
                      alt="Link Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <motion.div
                      className="absolute inset-0 bg-purple-500/10 rounded-md"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.3 }}
                    />
                  </motion.div>
                  <span className="motion-safe:animate-text-flicker">Link Entertainment</span>
                </motion.div>

                {/* Third Link Item */}
                <motion.div
                  className="flex items-center gap-3 text-white py-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="relative p-1 bg-black/30 backdrop-blur-sm rounded-md border border-blue-400/30"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 0 8px 0 rgba(96, 165, 250, 0.5)'
                    }}
                  >
                    <Image
                      src="https://ext.same-assets.com/875528577/3638224228.webp"
                      alt="Link Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                    <motion.div
                      className="absolute inset-0 bg-blue-400/10 rounded-md"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ repeat: Infinity, duration: 2, delay: 0.6 }}
                    />
                  </motion.div>
                  <span className="motion-safe:animate-text-flicker">Link Feelings</span>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="ml-4"
              >
                <MonochromeButton
                  size="lg"
                  onClick={() => {
                    scrollToElementBySelector('#what-is-igame', 1000, 80);
                  }}
                >
                  Discover iGame Center
                </MonochromeButton>
              </motion.div>
            </div>
          </div>

          {/* HUD Elements - Decorative UI */}
          <div className="absolute top-[15%] right-[5%] z-10 w-32 h-32 opacity-30 hidden md:block">
            <div className="relative h-full w-full">
              <div className="absolute top-0 left-0 h-1 w-8 bg-blue-500" />
              <div className="absolute top-0 left-0 h-8 w-1 bg-blue-500" />
              <div className="absolute top-0 right-0 h-1 w-8 bg-purple-500" />
              <div className="absolute top-0 right-0 h-8 w-1 bg-purple-500" />
              <div className="absolute bottom-0 left-0 h-1 w-8 bg-blue-400" />
              <div className="absolute bottom-0 left-0 h-8 w-1 bg-blue-400" />
              <div className="absolute bottom-0 right-0 h-1 w-8 bg-purple-400" />
              <div className="absolute bottom-0 right-0 h-8 w-1 bg-purple-400" />
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-center"
            >
              <Image
                src="https://ext.same-assets.com/875528577/3431768213.svg"
                alt="Scroll Down"
                width={30}
                height={30}
                className="mx-auto"
              />
              <div className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Scroll</div>
            </motion.div>
          </motion.div>
        </section>

        {/* What is iGame Center Section */}
        <WhatIsIgameSection />

        {/* Product Showcase Section */}
        <ProductShowcase />

        {/* Second Section - High Light */}
        <section
          className="relative py-20 px-6 md:px-16 lg:px-24 bg-black"
          id="section2"
          ref={setRef(1)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-0"></div>

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="https://ext.same-assets.com/875528577/1446454131.webp"
              alt="Gaming Background"
              fill
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 text-white glow-text">
                High Light
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Experience the ultimate gaming environment with iGame Center's cutting-edge features and optimizations.
              </p>
            </motion.div>

            <InteractiveFeatureTabs />
          </div>
        </section>

        {/* Third Section - DIYer is Gamer */}
        <section
          className="relative py-20 px-6 md:px-16 lg:px-24 bg-black"
          id="section3"
          ref={setRef(2)}
        >
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

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-4 text-white glow-text">
                DIYer is Gamer
              </h2>
              <h4 className="text-xl font-bold mb-4 text-white">
                <span className="border-b border-white inline-block pb-1">
                  Zero Performance Loss丨Full Monitoring
                </span>
              </h4>
              <p className="text-gray-300 max-w-2xl">
                Monitoring the frame number of games and recording the performance and power loss, generating real-time intelligent game record reports with time division.
              </p>
            </motion.div>

            {/* Performance Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/30 p-6 rounded-xl border border-gray-800 backdrop-blur-sm"
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://ext.same-assets.com/875528577/1838256227.webp"
                  alt="Performance Dashboard"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">Real-time Performance Dashboard</h3>
                  <p className="text-gray-300 max-w-2xl">Monitor every aspect of your system with minimal impact on performance, from GPU temperatures to frame times.</p>
                  <div className="mt-4">
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                      Explore Performance Tools
                    </Button>
                  </div>
                </div>
              </div>

              {/* Monitoring Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {["GPU Usage", "CPU Usage", "Memory", "FPS"].map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="bg-black/60 p-4 rounded-lg border border-gray-800"
                  >
                    <h5 className="text-gray-400 text-sm mb-1">{metric}</h5>
                    <div className="text-2xl font-bold text-white">
                      {index === 0 && "78%"}
                      {index === 1 && "45%"}
                      {index === 2 && "8.2GB"}
                      {index === 3 && "144"}
                    </div>
                    <div className="w-full h-1 bg-gray-800 mt-2 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          index === 0 ? "bg-red-500" :
                          index === 1 ? "bg-yellow-500" :
                          index === 2 ? "bg-blue-500" :
                          "bg-green-500"
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: index === 0 ? "78%" : index === 1 ? "45%" : index === 2 ? "65%" : "90%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tabs */}
            <div className="flex space-x-4 mt-8">
              <div className="cursor-pointer transition-all duration-300 px-6 py-2 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 text-center">
                <p>Game Monitor</p>
              </div>
              <div className="cursor-pointer transition-all duration-300 px-6 py-2 rounded-full text-gray-400 hover:text-white text-center">
                <p>Game Analysis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Fourth Section - Contact us */}
        <section
          className="relative py-20 px-6 md:px-16 lg:px-24 bg-black"
          id="section4"
          ref={setRef(3)}
        >
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
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6 text-white glow-text">
                Contact us
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join our community and help us improve iGame Center with your feedback and bug reports.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-3 text-white">
                  <span className="border-b border-white pb-1">Bug Hunting Plan:</span>
                </h3>
                <p className="text-white/90 mb-6">
                  By submitting explicit bugs, users will be rewarded with iGame points. Furthermore, those who submit "serious" and "complicated" bugs will be rewarded with physical hardware!
                </p>
                <Button
                  className="bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-2 h-auto w-full"
                  onClick={() => alert('Submit Bug Modal')}
                >
                  Submit Bug
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
              >
                <h3 className="text-2xl font-bold mb-3 text-white">
                  <span className="border-b border-white pb-1">Senior Product Manager Seeking Plan:</span>
                </h3>
                <p className="text-white/90 mb-6">
                  We will read every opinion and idea for the improvement of iGame Center, and those who put forward excellent opinions or ideas will be rewarded!
                </p>
                <Button
                  className="bg-white/10 border border-white/30 text-white hover:bg-white/20 rounded-full px-8 py-2 h-auto w-full"
                  onClick={() => alert('Submit Opinion Modal')}
                >
                  Submit Opinion
                </Button>
              </motion.div>
            </div>

            {/* Community Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Join Our Community</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {['Discord', 'Twitter', 'YouTube', 'Reddit'].map((platform, i) => (
                  <div key={i} className="bg-black/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800 w-64 transition-transform hover:scale-105">
                    <h4 className="text-lg font-medium text-white mb-2">{platform}</h4>
                    <p className="text-gray-400 text-sm mb-4">
                      {i === 0 && "Join 50K+ gamers in our Discord community"}
                      {i === 1 && "Follow for the latest news and updates"}
                      {i === 2 && "Watch tutorials and feature highlights"}
                      {i === 3 && "Discuss and share your setups"}
                    </p>
                    <Button className="bg-gradient-to-r from-blue-600/70 to-purple-600/70 hover:from-blue-600 hover:to-purple-600 text-white rounded-full text-sm">
                      Join Now
                    </Button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Navigation Dots */}
        <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
          <div className="flex flex-col items-center gap-4">
            {/* Home */}
            <button
              onClick={() => scrollToElementBySelector('#section1', 1000, 80)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === 0
                  ? 'opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 shadow-glow'
                  : 'bg-white opacity-50 hover:opacity-75'
              }`}
              aria-label="Home Section"
            ></button>

            {/* iGame Center */}
            <button
              onClick={() => scrollToElementBySelector('#what-is-igame', 1000, 80)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === 1
                  ? 'opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 shadow-glow'
                  : 'bg-white opacity-50 hover:opacity-75'
              }`}
              aria-label="iGame Center Section"
            ></button>

            {/* Product Series */}
            <button
              onClick={() => scrollToElementBySelector('#product-showcase', 1000, 80)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === 2
                  ? 'opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 shadow-glow'
                  : 'bg-white opacity-50 hover:opacity-75'
              }`}
              aria-label="Product Showcase Section"
            ></button>

            {/* Features */}
            <button
              onClick={() => scrollToElementBySelector('#section2', 1000, 80)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === 3
                  ? 'opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 shadow-glow'
                  : 'bg-white opacity-50 hover:opacity-75'
              }`}
              aria-label="Features Section"
            ></button>

            {/* Monitoring */}
            <button
              onClick={() => scrollToElementBySelector('#section3', 1000, 80)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === 4
                  ? 'opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 shadow-glow'
                  : 'bg-white opacity-50 hover:opacity-75'
              }`}
              aria-label="Monitoring Section"
            ></button>

            {/* Community */}
            <button
              onClick={() => scrollToElementBySelector('#section4', 1000, 80)}
              className={`block w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === 5
                  ? 'opacity-100 bg-gradient-to-r from-blue-500 to-purple-500 w-4 h-4 shadow-glow'
                  : 'bg-white opacity-50 hover:opacity-75'
              }`}
              aria-label="Community Section"
            ></button>
          </div>
        </div>

        {/* Section Tooltips */}
        <div className="fixed right-16 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
          <div className="flex flex-col items-end gap-4">
            <div className={`text-white bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${activeSection === 0 ? 'opacity-100' : 'opacity-0'}`}>Link The World</div>
            <div className={`text-white bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${activeSection === 1 ? 'opacity-100' : 'opacity-0'}`}>iGame Center</div>
            <div className={`text-white bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${activeSection === 2 ? 'opacity-100' : 'opacity-0'}`}>Product Series</div>
            <div className={`text-white bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${activeSection === 3 ? 'opacity-100' : 'opacity-0'}`}>High Light</div>
            <div className={`text-white bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${activeSection === 4 ? 'opacity-100' : 'opacity-0'}`}>DIYer is Gamer</div>
            <div className={`text-white bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${activeSection === 5 ? 'opacity-100' : 'opacity-0'}`}>Contact us</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
