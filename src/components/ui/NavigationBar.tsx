'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import DownloadButton from './DownloadButton';
import { scrollToElementBySelector } from '@/lib/smoothScroll';

interface NavItem {
  label: string;
  href: string;
}

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // Prevent hydration issues
  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Update active section based on scroll position
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 100; // Offset to trigger slightly early

      // Find all section elements with proper IDs
      const sections = [
        document.querySelector('#section1'),
        document.querySelector('#what-is-igame'),
        document.querySelector('#product-showcase'),
        document.querySelector('#section2'),
        document.querySelector('#section3'),
        document.querySelector('#section4')
      ];

      // Find the current active section
      let currentActive = 0;
      sections.forEach((section, index) => {
        if (!section) return;

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + section.getBoundingClientRect().height;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentActive = index;
        }
      });

      if (currentActive !== activeItem) {
        setActiveItem(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollSpy);

    // Initial check
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, [activeItem]);

  if (!mounted) return null;

  const navItems: NavItem[] = [
    { label: 'Home', href: '#section1' },
    { label: 'iGame Center', href: '#what-is-igame' },
    { label: 'Product Series', href: '#product-showcase' },
    { label: 'Features', href: '#section2' },
    { label: 'Monitoring', href: '#section3' },
    { label: 'Community', href: '#section4' }
  ];

  const handleNavClick = (index: number) => {
    setActiveItem(index);
    const sectionSelector = navItems[index].href;

    // Use our custom smooth scroll with a larger duration for smoother effect
    scrollToElementBySelector(sectionSelector, 1000, 80);

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-gradient-to-b from-black/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button onClick={() => handleNavClick(0)} className="cursor-pointer">
              <div className="relative h-10 w-32">
                <Image
                  src="https://ext.same-assets.com/875528577/259348630.webp"
                  alt="Colorful Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-black/40 rounded-full p-1.5 backdrop-blur-md shadow-md border border-gray-800/30">
            {navItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                onHoverStart={() => setHoverIndex(idx)}
                onHoverEnd={() => setHoverIndex(null)}
              >
                <button
                  onClick={() => handleNavClick(idx)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    activeItem === idx
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {activeItem === idx && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full z-0 shadow-glow"
                      initial={false}
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>

                {/* Hover tooltip preview */}
                <AnimatePresence>
                  {hoverIndex === idx && idx !== activeItem && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/80 backdrop-blur-md p-2 rounded-md shadow-lg"
                      style={{ width: 'max-content' }}
                    >
                      <div className="text-xs text-white whitespace-nowrap">Go to {item.label}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Download Button */}
          <div className="hidden md:block">
            <DownloadButton size="md" text="Download" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute top-0 left-0 w-6 h-0.5 bg-current rounded-full"
                  animate={{
                    rotate: mobileMenuOpen ? 45 : 0,
                    y: mobileMenuOpen ? 8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-2.5 left-0 w-6 h-0.5 bg-current rounded-full"
                  animate={{
                    opacity: mobileMenuOpen ? 0 : 1,
                    x: mobileMenuOpen ? 20 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute top-5 left-0 w-6 h-0.5 bg-current rounded-full"
                  animate={{
                    rotate: mobileMenuOpen ? -45 : 0,
                    y: mobileMenuOpen ? -8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <button
                    className={`${
                      activeItem === idx ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
                    } block w-full px-3 py-3 rounded-md text-base font-medium text-left`}
                    onClick={() => handleNavClick(idx)}
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4 px-3"
              >
                <DownloadButton size="md" className="w-full py-2.5" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
