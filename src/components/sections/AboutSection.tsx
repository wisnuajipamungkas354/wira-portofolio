'use client';

import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

import { aboutData } from '@/constants/mockData';

export function AboutSection() {
  const iconNameByKey: Record<string, string> = {
    settings: 'twemoji:gear',
    palette: 'twemoji:artist-palette',
    smartphone: 'twemoji:mobile-phone',
  };

  return (
    <section id='about' className='bg-white'>
      <div className='w-full mx-auto'>
        {/* Main Quote - Figma spacing/typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex items-center justify-center min-h-[292px] px-6 py-16 md:px-[120px] md:py-[80px]'
        >
          <blockquote className='mx-auto max-w-[892px] text-center text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.02em] font-medium text-[#0A0D12]'>
            {aboutData.quote.split('clean, responsive code')[0]}
            <span className='bg-gradient-to-r from-[#F39CB5] to-[#E26190] bg-clip-text text-transparent'>
              clean, responsive code
            </span>
            {aboutData.quote.split('clean, responsive code')[1]}
          </blockquote>
        </motion.div>

        {/* Development Principles - Figma layout */}
        <div className='grid lg:grid-cols-3 px-3 py-16 md:px-[30px] md:py-[80px] gap-3 md:gap-4'>
          {aboutData.principles.map((principle, index) => (
            <div key={principle.title} className='flex items-center gap-[40px]'>
              {/* Column content */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`px-5 py-8 flex flex-col items-start gap-4 w-full ${
                  index === 0 ? '' : 'border-l-0 border-b-2 lg:border-l-2 lg:border-b-0 border-[#D5D7DA]'
                }`}
              >
                {/* Icon circle */}
                <div
                  className='flex items-center justify-center w-[63px] h-[63px] rounded-full'
                  style={{ border: '1.3125px solid #D5D7DA' }}
                >
                  <Icon
                    icon={
                      iconNameByKey[principle.icon] ||
                      'twemoji:large-blue-circle'
                    }
                    width={32}
                    height={36}
                  />
                </div>

                {/* Text block */}
                <div className='flex flex-col items-start gap-2 w-full lg:w-[346.67px] lg:min-h-[140px]'>
                  <h3 className='text-[#0A0D12] font-bold tracking-[-0.02em] text-[20px] leading-[32px]'>
                    {principle.title}
                  </h3>
                  <p className='text-[#0A0D12] text-[16px] leading-[30px] tracking-[-0.03em]'>
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
