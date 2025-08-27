'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Image from 'next/image';

import { comparisonData } from '@/constants/mockData';

export function ComparisonSection() {
  return (
    <section
      id='comparison'
      className='bg-white flex flex-col items-center px-6 md:px-[120px] py-[80px] gap-2'
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='w-full max-w-[1200px] flex flex-col items-center gap-2 text-center'
      >
        <h2
          className='text-[#0A0D12] font-montserrat'
          style={{
            fontWeight: 700,
            fontSize: '40px',
            lineHeight: '56px',
            letterSpacing: '-0.03em',
          }}
        >
          {comparisonData.title}
        </h2>
        <p
          className='text-[#0A0D12] font-montserrat'
          style={{
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '30px',
            letterSpacing: '-0.03em',
          }}
        >
          {comparisonData.subtitle}
        </p>
      </motion.div>

      {/* Cards wrapper to control width and rounding like Figma frame */}
      <div className='w-full rounded-full flex flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-6'>
        {/* With Me Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-1/4 rounded-[16px] bg-[#F3B64C] p-8 md:p-[16px] flex flex-col items-center gap-8'
          style={{ width: 588, minHeight: 620 }}
        >
          {/* Title + Avatar */}
          <div className='flex flex-col items-center gap-6'>
            <div
              className='text-[#0A0D12] font-montserrat'
              style={{ fontWeight: 700, fontSize: 18, lineHeight: '32px' }}
            >
              {comparisonData.withMe.title}
            </div>
            <div className='relative w-[100px] h-[100px] rounded-full bg-[#B76080] overflow-hidden'>
              <Image
                src='/images/Image-portrait.png'
                alt='Profile'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Strengths List */}
          <div className='flex flex-col gap-6'>
            {comparisonData.withMe.strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='flex items-center justify-center gap-3'
              >
                <span className='flex items-center justify-center w-6 h-6'>
                  <Check className='w-6 h-6 text-[#0A0D12]' />
                </span>
                <span
                  className='text-[#0A0D12] font-montserrat'
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: '32px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Another Talent Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='rounded-[16px] bg-white border border-[#D5D7DA] p-8 md:p-[32px] flex flex-col items-center gap-8'
          style={{ width: 588, minHeight: 620 }}
        >
          {/* Title + Avatar */}
          <div className='flex flex-col items-center gap-6'>
            <div
              className='text-[#0A0D12] font-montserrat text-center'
              style={{
                fontWeight: 600,
                fontSize: 18,
                lineHeight: '32px',
                letterSpacing: '-0.03em',
              }}
            >
              {comparisonData.anotherTalent.title}
            </div>
            <div className='relative w-[100px] h-[100px] rounded-full bg-[#D5D7DA] overflow-hidden'>
              <Image
                src='/images/default-portrait.png'
                alt='Generic Profile'
                fill
                className='object-cover'
              />
            </div>
          </div>

          {/* Weaknesses List */}
          <div className='flex flex-col gap-6'>
            {comparisonData.anotherTalent.weaknesses.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className='flex items-center justify-center gap-3'
              >
                <span className='flex items-center justify-center w-6 h-6'>
                  <X className='w-6 h-6 text-[#E5352D]' />
                </span>
                <span
                  className='text-[#0A0D12] font-montserrat'
                  style={{
                    fontWeight: 600,
                    fontSize: 18,
                    lineHeight: '32px',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
