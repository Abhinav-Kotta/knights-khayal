'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Music } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: Instagram,
  },
  {
    name: 'Facebook',
    href: '#',
    icon: Facebook,
  },
  {
    name: 'YouTube',
    href: '#',
    icon: Youtube,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-2"
          >
            <Music className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold">Knights Khayal</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex space-x-6"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-purple-300 hover:text-white transition-colors"
                >
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <Icon className="h-6 w-6" />
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex space-x-6"
          >
            {['home', 'members', 'performances', 'contact'].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-purple-300 hover:text-white transition-colors capitalize"
              >
                {item}
              </Link>
            ))}
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center text-sm text-purple-300"
          >
            <p className="mb-2">
              For bookings and inquiries, contact us at:{' '}
              <a href="mailto:contact@knightskhayal.com" className="hover:text-white">
                contact@knightskhayal.com
              </a>
            </p>
            <p>&copy; {currentYear} Knights Khayal. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;