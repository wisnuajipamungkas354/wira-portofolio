'use client';

import { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import { testimonialsData } from '@/constants/mockData';

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.98,
    transition: { duration: 0.45, ease: [0.4, 0, 1, 1] },
  }),
};

function getSafeIndex(index: number, length: number) {
  return ((index % length) + length) % length;
}

export function TestimonialsSection() {
  const testimonials = testimonialsData.testimonials;
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const index = getSafeIndex(page, testimonials.length);

  function paginate(newDirection: number) {
    setDirection(newDirection);
    setPage((p) => p + newDirection);
  }

  return (
    <section className='py-20 bg-white' id='testimonials'>
      <div className='custom-container'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16 max-w-[847px] mx-auto'
        >
          <h2
            className='font-montserrat font-bold text-[#0A0D12] mb-6 tracking-[-0.03em]'
            style={{ fontSize: 40, lineHeight: '56px' }}
          >
            {testimonialsData.title}
          </h2>
          <p
            className='font-montserrat font-medium text-[#0A0D12] tracking-[-0.03em] mx-auto'
            style={{ fontSize: 16, lineHeight: '30px' }}
          >
            {testimonialsData.subtitle}
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className=' mx-auto mb-12'>
          <div className='relative'>
            <AnimatePresence custom={direction} mode='popLayout'>
              <motion.div
                key={testimonials[index].id}
                custom={direction}
                variants={slideVariants}
                initial='enter'
                animate='center'
                exit='exit'
                className='w-[1200px] max-w-full bg-[#B76080] rounded-3xl py-8 px-10 text-white flex flex-col items-center gap-8'
              >
                {/* Rating Stars */}
                <div className='flex items-center justify-center gap-1'>
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className='w-6 h-6 fill-[#F3B64C] text-[#F3B64C]'
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className='font-montserrat font-semibold text-[24px] leading-[36px] tracking-[-0.03em] text-white text-center w-[1120px] max-w-full'>
                  &ldquo;{testimonials[index].quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className='flex flex-col items-center gap-2 w-full max-w-[546px]'>
                  {/* Avatar */}
                  <div className='w-16 h-16 rounded-full overflow-hidden'>
                    <Image
                      src={testimonials[index].author.avatar}
                      alt={testimonials[index].author.name}
                      width={64}
                      height={64}
                    />
                  </div>

                  <div className='flex flex-col items-center'>
                    <div className='font-montserrat font-semibold text-[18px] leading-[32px] text-white text-center w-full'>
                      {testimonials[index].author.name}
                    </div>
                    <div className='font-montserrat font-medium text-[16px] leading-[30px] text-white/90 text-center w-full'>
                      {testimonials[index].author.title} at{' '}
                      {testimonials[index].author.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* stacked shadows (match Figma widths/colors) */}
            <div className='-mt-4 mx-auto h-14 w-[1100px] bg-[#D4A0B3] rounded-2xl max-w-full'></div>
            <div
              className='-mt-3 mx-auto h-14 w-[1000px] rounded-2xl max-w-full'
              style={{ background: 'rgba(183, 96, 128, 0.2)' }}
            ></div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className='flex-center gap-4'>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(-1)}
            aria-label='Previous testimonial'
            className='w-12 h-12 border border-[#D5D7DA] text-[#A4A7AE] rounded-full flex-center hover:bg-gray-50 transition-colors duration-300'
          >
            <ChevronLeft className='w-6 h-6' />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(1)}
            aria-label='Next testimonial'
            className='w-12 h-12 border border-[#D5D7DA] text-[#0A0D12] rounded-full flex-center hover:bg-gray-50 transition-colors duration-300'
          >
            <ChevronRight className='w-6 h-6' />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
