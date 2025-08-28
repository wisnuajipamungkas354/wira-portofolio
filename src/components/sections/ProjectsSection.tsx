'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

import { projectsData } from '@/constants/mockData';

export function ProjectsSection() {
  return (
    <section
      id='projects'
      className='bg-white flex flex-col items-center px-6 md:px-18 py-[80px] gap-[48px]'
    >
      {/* Header */}
      <div className='w-full max-w-[1200px] flex flex-col lg:flex-row justify-between items-center gap-5'>
        {/* Title and Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col items-start gap-2 w-full lg:w-3/5'
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
            {projectsData.title.split('Code Accuracy')[0]}
            <span className='text-[#A53860]'>Code Accuracy</span>
            {projectsData.title.split('Code Accuracy')[1]}
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
            {projectsData.subtitle}
          </p>
        </motion.div>

        {/* See All Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className='flex flex-row justify-between lg:justify-center items-center px-2 py-2 pl-4 gap-2 w-full h-20 lg:w-[156px] lg:h-[56px] border border-[#D5D7DA] rounded-[100px]'
        >
          <span
            className='text-[#0A0D12] font-montserrat text-2xl lg:text-base'
            style={{
              fontWeight: 600,
              lineHeight: '30px',
            }}
          >
            See All
          </span>
          <div className='flex items-center justify-center w-12 h-12 lg:w-9 lg:h-9 bg-[#0A0D12] rounded-[100px]'>
            <ArrowRight className='w-7 h-7 text-white' />
          </div>
        </motion.button>
      </div>

      {/* Projects Grid */}
      <div className='w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {projectsData.projects.map((project, index) => (
          <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
          <a href={project.url} className='flex flex-col items-start'>
                {/* Image Container */}
                <div className='relative flex flex-row items-center p-4 gap-2 w-full h-[346.67px] bg-[#F5F5F5] rounded-[20px]'>
                  {/* Portfolio Image */}
                  <div className='w-full h-[314.67px] bg-gray-300 rounded-lg flex-1' />

                  {/* Best Portfolio Label */}
                  <div className='absolute w-[97px] h-[29px] left-[-9px] top-[28px] transform -scale-x-100'>
                    <div className='w-[97px] h-[21px] bg-[#F3B64C] rounded-l-[178.63px] flex items-center justify-center'>
                      <span
                        className='text-[#0A0D12] font-montserrat transform scale-x-[-1]'
                        style={{
                          fontWeight: 600,
                          fontSize: '12px',
                          lineHeight: '24px',
                          letterSpacing: '-0.03em',
                        }}
                      >
                        Best Portfolio
                      </span>
                    </div>
                  </div>
                </div>

              
              {/* Info Container */}
              <div className='flex flex-row justify-between items-center p-4 gap-6 w-full h-[118px] bg-[#F5F5F5] rounded-[20px]'>
                {/* Text Container */}
                <div className='flex flex-col items-start gap-3 mx-auto w-full h-[86px]'>
                  {/* Portfolio Title */}
                  <h3
                    className='text-[#0A0D12] font-montserrat'
                    style={{
                      fontWeight: 700,
                      fontSize: '18px',
                      lineHeight: '32px',
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Divider Line */}
                  <div className='w-full h-px border border-[#D5D7DA]' />

                  {/* Portfolio Description */}
                  <p
                    className='text-[#535862] font-montserrat'
                    style={{
                      fontWeight: 500,
                      fontSize: '16px',
                      lineHeight: '30px',
                      letterSpacing: '-0.03em',
                    }}
                  >
                    {project.category}
                  </p>
                </div>

                {/* Button Container */}
                <div className='flex items-center justify-center mx-auto w-11 h-9 bg-[#B76080] rounded-full'>
                  <ArrowRight className='w-5 h-5 text-white' />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
