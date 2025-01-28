'use client';

import { motion, Variants } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const chevronVariants: Variants = {
  animate: {
    x: [0, 5, 0],
    transition: {
      repeat: Infinity,
      duration: 1.5,
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl md:text-7xl font-bold mb-6"
        >
          Experience the Magic of{' '}
          <span className="block text-purple-300">Indian Music</span>
        </motion.h1>

        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
        >
          A fusion of classical Bollywood melodies with contemporary arrangements
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button
            className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full
                     transition-transform hover:scale-105 inline-flex items-center
                     group"
          >
            Upcoming Shows
            <motion.span
              variants={chevronVariants}
              animate="animate"
            >
              <ChevronRight className="ml-2" />
            </motion.span>
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce">
            <ChevronRight className="rotate-90 w-8 h-8" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;