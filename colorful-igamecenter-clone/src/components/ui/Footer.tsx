'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'iGame Vulcan', href: '#' },
        { name: 'iGame Ultra', href: '#' },
        { name: 'iGame Neptune', href: '#' },
        { name: 'iGame Advanced', href: '#' },
        { name: 'View All Products', href: '#' }
      ]
    },
    {
      title: 'Software',
      links: [
        { name: 'iGame Center', href: '#' },
        { name: 'RGB Control', href: '#' },
        { name: 'Hardware Monitor', href: '#' },
        { name: 'Game Optimizer', href: '#' },
        { name: 'Drivers & Support', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'FAQ', href: '#' },
        { name: 'Contact Us', href: '#' },
        { name: 'Bug Reports', href: '#' },
        { name: 'User Guides', href: '#' },
        { name: 'Warranty Info', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Colorful', href: '#' },
        { name: 'News', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Partners', href: '#' },
        { name: 'Privacy Policy', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: 'https://ext.same-assets.com/875528577/2834723581.svg', href: '#' },
    { name: 'Facebook', icon: 'https://ext.same-assets.com/875528577/1657241256.svg', href: '#' },
    { name: 'YouTube', icon: 'https://ext.same-assets.com/875528577/3127455142.svg', href: '#' },
    { name: 'Instagram', icon: 'https://ext.same-assets.com/875528577/3623572452.svg', href: '#' },
    { name: 'Discord', icon: 'https://ext.same-assets.com/875528577/2875426172.svg', href: '#' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-5 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              src="https://ext.same-assets.com/875528577/259348630.webp"
              alt="Colorful Logo"
              width={150}
              height={50}
              className="h-10 w-auto"
            />
            <p className="text-gray-400 text-sm">
              Colorful Technology Company Limited is a professional provider of graphics cards, motherboards and high-performance storage solutions.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={`${item.name} link`}
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="w-5 h-5 fill-current"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-4">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(0, 2).map((group, groupIdx) => (
                <div key={groupIdx} className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              {footerLinks.slice(2, 4).map((group, groupIdx) => (
                <div key={groupIdx} className="mt-12 md:mt-0">
                  <h3 className="text-sm font-bold text-white tracking-wider uppercase mb-4">{group.title}</h3>
                  <ul className="space-y-3">
                    {group.links.map((link, linkIdx) => (
                      <li key={linkIdx}>
                        <Link
                          href={link.href}
                          className="text-base text-gray-400 hover:text-white transition-colors duration-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
              &copy; {currentYear} Colorful Technology Co., Ltd. All rights reserved.
            </p>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            <p>All trademarks are property of their respective owners. NVIDIA, GeForce, and RTX are registered trademarks of NVIDIA Corporation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
