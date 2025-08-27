'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { experienceData } from '@/constants/mockData';

export function ExperienceSection() {
  // Map company names to their logo files
  const getCompanyLogo = (companyName: string) => {
    switch (companyName.toLowerCase()) {
      case 'airbnb':
        return '/icons/airbnb-logo.svg';
      case 'airtasker':
        return '/icons/airtasker-logo.svg';
      case 'slack':
        return '/icons/slack-logo.svg';
      default:
        return '/icons/airbnb-logo.svg';
    }
  };

  return (
    <section
      id='experience'
      className='bg-[#0A0D12] flex flex-col items-center px-6 md:px-16 py-[80px] gap-[48px]'
    >
      {/* Header */}
      <div className='w-full max-w-[1200px] flex flex-col justify-start lg:flex-row lg:justify-between lg:items-start gap-2'>
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col items-start gap-4'
          style={{ width: 365 }}
        >
          <h2
            className='text-[#FDFDFD] font-montserrat text-left'
            style={{
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '56px',
              letterSpacing: '-0.03em',
            }}
          >
            {experienceData.title.split('Shaped Me!')[0]}
            <span className='text-[#F3B64C]'>Shaped Me</span>
            <span className='text-[#FDFDFD]'>!</span>
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className='w-full flex flex-col items-start gap-4 lg:max-w-[366px]'
        >
          <p
            className='text-[#FDFDFD] font-montserrat text-left'
            style={{
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '32px',
              letterSpacing: '-0.03em',
            }}
          >
            {experienceData.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Divider Line */}
      <div className='w-full max-w-[1200px] h-px border border-[#252B37]' />

      {/* Experience Cards */}
      <div className='w-full max-w-[1200px] flex flex-col gap-8'>
        {experienceData.experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='flex flex-col lg:flex-row justify-start lg:justify-between lg:items-start lg:gap-[98px] w-full lg:h-[150px] bg-[#0A0D12]'
          >
            {/* Left Column - Year and Role */}
            <div
              className='flex flex-col items-start gap-1 w-full lg:mx-auto lg:w-[178px]'
            >
              <span
                className='text-[#A4A7AE] font-montserrat'
                style={{
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '28px',
                }}
              >
                {experience.year}
              </span>
              <h3
                className='text-[#FDFDFD] font-montserrat'
                style={{
                  fontWeight: 700,
                  fontSize: '20px',
                  lineHeight: '34px',
                }}
              >
                {experience.role}
              </h3>
            </div>

            {/* Middle Column - Company Logo */}
            <div className='lg:mx-auto lg:w-[192px] h-[112px] border border-[#252B37] rounded-[16px] p-2'>
              <div className='w-[176px] h-[96px] bg-[#0A0D12] border border-[#252B37] rounded-[16px] p-6 flex items-center justify-center'>
                <Image
                  src={getCompanyLogo(experience.company)}
                  alt={`${experience.company} logo`}
                  width={128}
                  height={48}
                  className='object-contain'
                />
              </div>
            </div>

            {/* Right Column - Description */}
            <div className='w-full lg:mx-auto lg:w-[513px] h-[150px]'>
              <p
                className='text-[#A4A7AE] font-montserrat'
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '30px',
                  letterSpacing: '-0.03em',
                }}
              >
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
