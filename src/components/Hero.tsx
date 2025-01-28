'use client';

import { motion } from 'framer-motion';
import { Music } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/api/placeholder/1920/1080" // Replace with your actual group image
          alt="Knights Khayal performing"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Music className="w-12 h-12 mx-auto mb-6 text-purple-300" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6 text-glow"
        >
          Knights Khayal
          <span className="block text-purple-300 text-3xl md:text-4xl mt-4">
            Where Dreams Take Flight Through Melody
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto glassmorphism p-6 rounded-lg"
        >
          Experience the magic of Bollywood and Indian classical music reimagined 
          through our unique fusion performances and mesmerizing arrangements.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <button className="bg-purple-900/80 hover:bg-purple-800 px-8 py-3 rounded-full 
                         transition-all hover:scale-105 inline-flex items-center
                         glassmorphism border border-purple-400/30">
            Watch Our Performances
          </button>
          <button className="bg-transparent px-8 py-3 rounded-full 
                         transition-all hover:scale-105 inline-flex items-center
                         border border-purple-400/30 hover:border-purple-400/50">
            Book Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;