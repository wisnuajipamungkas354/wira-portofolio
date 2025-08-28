'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { contactData } from '@/constants/mockData';
import Modal from '../modals/Modal';

export function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalSuccess, setIsModalSuccess] = useState(false);

  const [formData, setFormData] = useState({
    senderEmail: '',
    senderName: '',
    contentMessage: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Pesan berhasil dikirim!');
        // Reset form setelah pengiriman berhasil
        setFormData({
          senderEmail: '',
          senderName: '',
          contentMessage: ''
        });
        setIsModalSuccess(true);
        setIsModalOpen(true);
      } else {
        console.log('Gagal');
        setIsModalSuccess(false);
        setIsModalOpen(true);
      }
    } catch (e) {
      setIsModalSuccess(false);
      setIsModalOpen(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id='contact' className='py-20 bg-white'>
      <div className='custom-container'>
        <div className='flex flex-col gap-54 lg:flex-row justify-center items-start lg:gap-12 isolate'>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='flex flex-col items-start gap-10 w-full lg:max-w-[540px]'
          >
            <div className='flex flex-col items-start gap-2 w-full'>
              <h2
                className='font-montserrat font-bold text-[#0A0D12] tracking-[-0.03em]'
                style={{ fontSize: 40, lineHeight: '56px' }}
              >
                {contactData.title}
              </h2>
              <p
                className='font-montserrat font-medium text-[#0A0D12] tracking-[-0.03em]'
                style={{ fontSize: 16, lineHeight: '30px' }}
              >
                {contactData.subtitle}
              </p>
            </div>

            {/* Portfolio Images */}
            <div className='grid grid-cols-3 justify-center lg:items-start gap-3 lg:gap-5 w-full lg:max-w-[466px]'>
              <Image
                src='/images/bg-hero.png'
                alt='Portfolio sample 1'
                width={142}
                height={142}
                className='rounded-xl object-cover'
              />
              <Image
                src='/images/bg-hero.png'
                alt='Portfolio sample 2'
                width={142}
                height={142}
                className='rounded-xl object-cover'
              />
              <Image
                src='/images/bg-hero.png'
                alt='Portfolio sample 3'
                width={142}
                height={142}
                className='rounded-xl object-cover'
              />
            </div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='relative w-full lg:max-w-[612px]'
          >
            {/* Top Illustration */}
              <Image
                src='/images/image-cs.png'
                alt='Character leaning on the form'
                width={192}
                height={170}
                className='absolute -top-40 left-1/2 -translate-x-1/2 z-10'
                priority
              />

            <div className='bg-white rounded-3xl shadow-[0_0_28px_rgba(197,197,197,0.25)] p-8'>
              <form onSubmit={handleSubmit} className='space-y-5'>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor='senderName'
                    className='block font-montserrat font-bold text-[14px] leading-[28px] text-[#0A0D12] mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='senderName'
                    name='senderName'
                    value={formData.senderName}
                    onChange={handleChange}
                    required
                    className='w-full h-12 px-4 border border-[#D5D7DA] rounded-[12px] text-[16px] leading-[30px] text-[#535862] placeholder-[#535862] focus:ring-2 focus:ring-primary-200 focus:border-transparent transition-all duration-300'
                    placeholder='Enter your name'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor='senderEmail'
                    className='block font-montserrat font-bold text-[14px] leading-[28px] text-[#0A0D12] mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='senderEmail'
                    name='senderEmail'
                    value={formData.senderEmail}
                    onChange={handleChange}
                    required
                    className='w-full h-12 px-4 border border-[#D5D7DA] rounded-[12px] text-[16px] leading-[30px] text-[#535862] placeholder-[#535862] focus:ring-2 focus:ring-primary-200 focus:border-transparent transition-all duration-300'
                    placeholder='Enter your email'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor='contentMessage'
                    className='block font-montserrat font-bold text-[14px] leading-[28px] text-[#0A0D12] mb-1'
                  >
                    Message
                  </label>
                  <textarea
                    id='contentMessage'
                    name='contentMessage'
                    value={formData.contentMessage}
                    onChange={handleChange}
                    required
                    minLength={5}
                    rows={5}
                    className='w-full h-[134px] px-4 py-2 border border-[#D5D7DA] rounded-[12px] text-[16px] leading-[30px] text-[#535862] placeholder-[#535862] focus:ring-2 focus:ring-primary-200 focus:border-transparent transition-all duration-300 resize-none'
                    placeholder='Enter your message'
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type='submit'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className='w-full h-12 bg-[#B76080] text-white rounded-full font-montserrat font-bold text-[14px] leading-[28px] hover:opacity-95 transition-colors duration-300'
                >
                  {contactData.ctaText}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        isSuccess={isModalSuccess}
      />
    </section>
  );
}
