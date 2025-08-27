'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

import { faqData } from '@/constants/mockData';

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id='faq' className='py-20 bg-[#F5F5F5]'>
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
            className='font-montserrat font-bold text-[#0A0D12] tracking-[-0.03em] mb-6'
            style={{ fontSize: 40, lineHeight: '56px' }}
          >
            {faqData.title}
          </h2>
          <p
            className='font-montserrat font-medium text-[#0A0D12] tracking-[-0.03em] mx-auto'
            style={{ fontSize: 16, lineHeight: '30px' }}
          >
            {faqData.subtitle}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className='mx-auto max-w-[1200px] space-y-5'>
          {faqData.faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='pb-5 border-b border-[#D5D7DA]'
            >
              {/* FAQ Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className='w-full py-0 text-left'
              >
                <div className='flex items-center justify-between gap-[51px]'>
                  <span className='font-montserrat font-semibold tracking-[-0.03em] text-[#0A0D12] text-[24px] leading-[36px] w-[32px] text-center'>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className='font-montserrat font-semibold tracking-[-0.03em] text-[#0A0D12] text-[24px] leading-[36px] flex-1'>
                    {faq.question}
                  </h3>

                  <div className='flex-shrink-0'>
                    {openFAQ === faq.id ? (
                      <div className='w-12 h-12 rounded-full bg-[#B76080] flex items-center justify-center'>
                        <Plus className='w-6 h-6 text-white' />
                      </div>
                    ) : (
                      <div className='w-12 h-12 rounded-full border border-[#D5D7DA] bg-white flex items-center justify-center'>
                        <Minus className='w-6 h-6 text-[#0A0D12]' />
                      </div>
                    )}
                  </div>
                </div>
              </button>

              {/* FAQ Answer */}
              <AnimatePresence>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className='overflow-hidden'
                  >
                    <div
                      className='pt-3 text-[#414651] font-montserrat font-medium tracking-[-0.03em]'
                      style={{ fontSize: 16, lineHeight: '30px' }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
