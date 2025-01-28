'use client';

import { motion } from 'framer-motion';
import { Calendar, Play } from 'lucide-react';
import { Performance } from '@/types';
import Image from 'next/image';

const upcomingShows: Performance[] = [
  { 
    id: '1',
    title: 'Spring Fusion Concert',
    date: 'March 15, 2025',
    venue: 'Cultural Center',
    time: '7:00 PM',
    description: 'A blend of classical and contemporary Bollywood hits'
  },
  {
    id: '2',
    title: 'Music Festival',
    date: 'April 2, 2025',
    venue: 'City Amphitheater',
    time: '8:30 PM',
    description: 'Featuring collaborations with local artists'
  },
];

const previousPerformances: Performance[] = [
  {
    id: '3',
    title: 'Bollywood Classics Medley',
    date: 'January 2025',
    venue: 'Community Theater',
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#'
  },
  {
    id: '4',
    title: 'Fusion Night Concert',
    date: 'December 2024',
    venue: 'Music Hall',
    thumbnail: '/api/placeholder/300/200',
    videoUrl: '#'
  },
];

const Performances = () => {
  return (
    <section id="performances" className="py-20">
      {/* Upcoming Shows */}
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Upcoming Shows
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {upcomingShows.map((show) => (
            <motion.div
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
            >
              <Calendar className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-bold mb-2">{show.title}</h3>
              <p className="text-purple-300">{show.date}</p>
              <p className="text-purple-300">{show.venue}</p>
              <p className="text-purple-300">{show.time}</p>
              {show.description && (
                <p className="mt-2 text-purple-200/80">{show.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Previous Performances */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Previous Performances
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previousPerformances.map((performance) => (
            <motion.div
              key={performance.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={performance.thumbnail || '/api/placeholder/300/200'}
                alt={performance.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center 
                            opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-16 h-16" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/60">
                <h3 className="text-xl font-bold">{performance.title}</h3>
                <p className="text-purple-300">{performance.date}</p>
                <p className="text-purple-300">{performance.venue}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Performances;