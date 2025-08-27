'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import { footerData } from '@/constants/mockData';

export function Footer() {
  const iconMap = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    tiktok: Twitter, // Using Twitter icon for TikTok
  };

  return (
    <footer className='bg-gray-800 py-12'>
      <div className='custom-container'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='text-gray-400 text-center md:text-left'
          >
            {footerData.copyright}
          </motion.div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className='flex gap-4'
          >
            {footerData.socialLinks.map((social, index) => {
              const IconComponent =
                iconMap[social.icon as keyof typeof iconMap];

              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className='w-10 h-10 bg-gray-700 rounded-full flex-center text-gray-400 hover:bg-primary-200 hover:text-white transition-all duration-300'
                >
                  <IconComponent className='w-5 h-5' />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
