'use client';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { skillsData } from '@/constants/mockData';
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react';

export function SkillsSection() {
  // Map skill names to their corresponding PNG icons and dimensions
  const getIconConfig = (skillName: string) => {
    switch (skillName) {
      case 'HTML':
        return { src: '/icons/html-icon.svg', width: 25, height: 35 };
      case 'CSS':
        return { src: '/icons/css-icon.svg', width: 25, height: 35 };
      case 'JavaScript':
        return { src: '/icons/js-icon.svg', width: 35, height: 35 };
      case 'React':
        return { src: '/icons/react-icon.svg', width: 35, height: 44 };
      default:
        return { src: '', width: 25, height: 35 };
    }
  };

  let swiperRef = useSwiper();

  const handlePrev = () => {
    if (swiperRef) {
      swiperRef.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef) {
      swiperRef.slideNext();
    }
  };

  return (
    <section
      id='skills'
      className='w-full px-3 py-20 bg-gradient-to-b from-white to-[#ffedf8]'
    >
      <div className='custom-container'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-2 text-center w-full mb-6 mx-auto'
          style={{ maxWidth: '847px' }}
        >
          <h2
            className='text-4xl font-bold text-gray-900 mb-2 font-montserrat'
            style={{
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '56px',
              letterSpacing: '-0.03em',
            }}
          >
            {skillsData.title}
          </h2>
          <p
            className='text-gray-600 mx-auto font-montserrat'
            style={{
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '30px',
              letterSpacing: '-0.03em',
            }}
          >
            {skillsData.subtitle}
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div
          className='flex flex-col items-center gap-6'
        >
          <Swiper 
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          onSwiper={(swiper) => {
            swiperRef = swiper;
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper w-[95%] md:w-[90%] lg:w-[80%]" >
            {skillsData.skills.map((skill, index) => {
              const { src, width, height } = getIconConfig(skill.name);

              return (
                <SwiperSlide
                  key={index}
                  className={`flex flex-col items-center p-5 md:p-8 lg:p-10 text-center cursor-pointer rounded-full max-h-[24rem] ${
                    index % 2 === 0
                      ? 'bg-[#F3B64C]'
                      : 'bg-white border border-[#D5D7DA]'
                  }`}
                >
                  {/* Skill Icon */}
                  <div
                    className={`rounded-full flex-center mb-3 mx-auto ${
                      index % 2 === 0 ? 'bg-white' : 'bg-[#F5F5F5]'
                    }`}
                    style={{ width: '60px', height: '60px' }}
                  >
                    {src && (
                      <div
                        className='flex items-center justify-center'
                        style={{ width, height }}
                      >
                        <Image
                          src={src}
                          alt={`${skill.name} icon`}
                          width={width}
                          height={height}
                          className='object-contain'
                        />
                      </div>
                    )}
                  </div>

                  {/* Skill Name */}
                  <h3
                    className='font-semibold text-gray-900 mb-2 font-montserrat'
                    style={{
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '30px',
                    }}
                  >
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p
                    className='text-[#252B37] text-sm leading-relaxed font-poppins'
                    style={{
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '30px',
                    }}
                  >
                    {skill.description}
                  </p>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* Navigation Arrows */}
          <div className='flex items-center gap-3'>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center justify-center border border-[#D5D7DA] rounded-full hover:shadow-lg transition-shadow duration-300'
              style={{ width: '45.33px', height: '45.33px' }}
              onClick={handlePrev}
            >
              <ChevronLeft className='w-6 h-6 text-[#A4A7AE]' />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center justify-center border border-[#D5D7DA] rounded-full hover:shadow-lg transition-shadow duration-300'
              style={{ width: '45.33px', height: '45.33px' }}
              onClick={handleNext}
            >
              <ChevronRight className='w-6 h-6 text-[#0A0D12]' />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
