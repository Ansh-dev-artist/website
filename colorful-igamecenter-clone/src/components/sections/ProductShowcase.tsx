'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductProps {
  name: string;
  image: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const products: ProductProps[] = [
  {
    name: "iGame Vulcan",
    image: "https://ext.same-assets.com/875528577/2863472243.webp",
    description: "The flagship graphics card featuring advanced cooling and RGB lighting for ultimate performance.",
    specs: [
      { label: "GPU", value: "RTX 4080 SUPER" },
      { label: "Memory", value: "16GB GDDR6X" },
      { label: "Cooling", value: "Triple Fan" },
      { label: "RGB", value: "Custom iGame Sync" }
    ]
  },
  {
    name: "iGame Ultra",
    image: "https://ext.same-assets.com/875528577/2323761462.webp",
    description: "Performance-focused with enhanced thermal design and customizable RGB effects.",
    specs: [
      { label: "GPU", value: "RTX 4070 Ti" },
      { label: "Memory", value: "12GB GDDR6X" },
      { label: "Cooling", value: "Dual Fan + Vapor Chamber" },
      { label: "RGB", value: "Ultra Lighting" }
    ]
  },
  {
    name: "iGame Neptune",
    image: "https://ext.same-assets.com/875528577/3271752462.webp",
    description: "Water-cooled excellence with integrated AIO solution for extreme overclocking potential.",
    specs: [
      { label: "GPU", value: "RTX 4090" },
      { label: "Memory", value: "24GB GDDR6X" },
      { label: "Cooling", value: "360mm AIO Liquid" },
      { label: "RGB", value: "Neptune Wave RGB" }
    ]
  },
  {
    name: "iGame Advanced",
    image: "https://ext.same-assets.com/875528577/3124276355.webp",
    description: "Balanced design for mainstream gamers with excellent cooling-to-noise ratio.",
    specs: [
      { label: "GPU", value: "RTX 4060 Ti" },
      { label: "Memory", value: "8GB GDDR6" },
      { label: "Cooling", value: "Dual Fan" },
      { label: "RGB", value: "Edge RGB Lighting" }
    ]
  }
];

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section id="product-showcase" className="relative py-20 px-6 md:px-16 lg:px-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-900/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-900/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-white glow-text">
            iGame Product Series
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Discover our premium lineup of iGame graphics cards, designed for performance, aesthetics, and seamless integration with iGame Center.
          </p>
        </motion.div>

        {/* Product selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {products.map((product, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-4 rounded-lg transition-all duration-300 overflow-hidden group ${
                activeProduct === index
                  ? 'border-2 border-brand-blue shadow-lg shadow-brand-blue/20'
                  : 'border border-gray-800 hover:border-gray-700'
              }`}
              onClick={() => setActiveProduct(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
              <div className="relative z-10 text-center">
                <h3 className={`font-orbitron font-bold mb-2 transition-colors duration-300 ${
                  activeProduct === index ? 'text-brand-blue' : 'text-white group-hover:text-brand-blue/80'
                }`}>
                  {product.name}
                </h3>
                <div className="h-[100px] relative mx-auto flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={180}
                    height={100}
                    className="object-contain max-h-[100px] transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Selected product details */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800 shadow-xl">
            <div className="absolute -top-4 -right-4 bg-brand-blue text-black font-bold py-2 px-4 rounded-lg z-10 shadow-lg">
              Featured
            </div>
            <div className="flex justify-center mb-8">
              <Image
                src={products[activeProduct].image}
                alt={products[activeProduct].name}
                width={400}
                height={250}
                className="object-contain max-h-[250px]"
              />
            </div>
            <h3 className="text-3xl font-orbitron font-bold mb-4 text-white text-center">
              {products[activeProduct].name}
            </h3>
            <p className="text-gray-300 mb-6 text-center">
              {products[activeProduct].description}
            </p>
            <div className="flex justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-8 rounded-full font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
            <h4 className="text-2xl font-orbitron font-bold mb-6 text-white">
              Specifications
            </h4>
            <div className="space-y-6">
              {products[activeProduct].specs.map((spec, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.random() * 40 + 60}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-xl font-bold mb-4 text-white">
                Compatible with iGame Center
              </h4>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">RGB Control</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">Performance Monitor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-300">One-Click OC</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
