'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { Member } from '@/types';

const members: Member[] = [
  {
    id: '1',
    name: 'Member 1',
    role: 'Lead Vocalist',
    image: '/placeholder.jpg',
    bio: 'Lead vocalist with expertise in classical Bollywood music.'
  },
  {
    id: '2',
    name: 'Member 2',
    role: 'Violinist',
    image: '/placeholder.jpg',
    bio: 'Trained in Western classical and Indian classical violin.'
  },
  {
    id: '3',
    name: 'Member 3',
    role: 'Tabla Player',
    image: '/placeholder.jpg',
    bio: 'Experienced tabla player specializing in fusion music.'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Members: React.FC = () => {
  return (
    <section id="members" className="py-20 bg-black/20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Our Artists
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {members.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-300 mb-2">{member.role}</p>
                {member.bio && (
                  <p className="text-sm text-purple-200/80">{member.bio}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Members;