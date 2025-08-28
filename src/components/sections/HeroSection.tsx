'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Mic } from 'lucide-react';

import { heroData } from '@/constants/mockData';

export function HeroSection() {
  // Order matches the Figma preview: JS, CSS3, HTML5, React
  const techIcons = [
    { src: '/icons/js-icon.svg', alt: 'JavaScript' },
    { src: '/icons/css-icon.svg', alt: 'CSS3' },
    { src: '/icons/html-icon.svg', alt: 'HTML5' },
    { src: '/icons/react-icon.svg', alt: 'React' },
  ];

  return (
    <section className='flex justify-center w-full h-[120vh] lg:h-[850px] bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: "url('/images/bg-hero.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      <div className='pointer-events-none absolute inset-0 w-full h-[120vh] lg:h-[850px] bg-[rgba(165,56,96,0.94)] md:bg-[rgba(165,56,96,0.94)]' />

      {/* DESKTOP VERSION */}
      <div className='relative m-auto hidden lg:block'>

        {/* ----------- Actor Image Center ------------- */}
        <div className='absolute z-20 pointer-events-none block'
          style={{
            bottom: -132,
            left: '50%',
            transform: 'translateX(-50%) translateY(50%)',
            width: 500,
            height: 700,
          }} >
            <Image
              src='/images/profil.png'
              alt='Portrait hero'
              width={500}
              height={700}
              priority
              className='select-none'
            />
        </div>

        {/* ----------- BACKGROUND TEXT ---------------- */}
        <div className='absolute z-10'
          style={{ 
            left: 0, 
            top: -50,
            transform: 'translateX(-50%) translateY(-50%)',
            width: 658, 
            height: 398, 
          }} >
          <div style={{
              fontFamily: 'var(--font-anton)',
              color: '#F3B64C',
              letterSpacing: '-0.02em',
              textAlign: 'center',
            }} >
            <div style={{ fontSize: 170, lineHeight: '228px', fontWeight: 400 }} >
              FRONTEND
            </div>
            <div style={{ fontSize: 160, lineHeight: '205px', fontWeight: 400 }} >
              DEVELOPER
            </div>
          </div>
        </div>
        <div className='absolute pointer-events-none'
          style={{
            left: -370,
            top: -225,
            width: 202,
            height: 142,
            zIndex: 20,
            transform: 'rotate(-13deg) translateY(-50%)',
          }} >
          <div style={{
              fontFamily: 'var(--font-bonheur)',
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              fontSize: 113.23,
              lineHeight: '142px',
              fontWeight: 400,
            }} >
            Junior
          </div>
        </div>


        {/* Availability pill (Figma spec) - Desktop only */}
        <motion.div initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='absolute left-1/2 -translate-x-1/2 z-30 items-center gap-[6px] rounded-full border hidden lg:flex'
          style={{
            top: -265,
            width: 185,
            height: 38,
            padding: '4px 16px',
            background: '#860D39',
            borderColor: '#B76080',
          }}>
          <span className='inline-block rounded-full' style={{ width: 16, height: 16, background: '#E26190' }} />
          <span className='text-white text-sm font-semibold tracking-[-0.03em]'>
            {heroData.availability}
          </span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='absolute text-center text-white/70 z-40 pointer-events-none'
          style={{
            left: 'calc(50% - 125px/2 + 0.5px)',
            bottom: -350,
            translateY: '50%',
            width: 125,
            height: 30,
          }}
        >
          <div className='text-base font-semibold leading-[30px] mb-2'>
            Scroll Down
          </div>
          <ChevronDown className='w-6 h-6 mx-auto animate-bounce' />
        </motion.div>

        {/* ----------- TECH ICONS ------------- */}
        <div className='absolute flex flex-col items-center justify-center gap-3 w-22 h-80 rounded-full border'
            style={{ 
              left: -700,
              top: -300,
              borderColor: '#B76080'
            }} >
            {techIcons.map((icon) => (
              <div
                key={icon.src}
                className='flex-center w-16 h-16 rounded-full border'
                style={{ borderColor: '#B76080' }}
              >
                <Image src={icon.src} alt={icon.alt} width={30} height={30} />
              </div>
            ))}
        </div>


        {/* ------------ Introduction Block -------------- */}
        <div className='absolute'
          style={{
            left: -700,
            top: 88,
            width: '361px',
            height: '429px',
            gap: '25px',
          }} >
            {/* Mic Icon */}
            <div className='absolute w-12 h-12'
              style={{
                left: '0px',
                top: '0px',
                padding: '2px 2px',
                gap: '8px',
                border: '1px solid #B76080',
                borderRadius: '9999px',
              }}
            >
              <Mic className='w-8 h-8 text-white mx-auto mt-3 translate-y-[-20%]' />
            </div>


            {/* Hi, I'm Edwin Anderson */}
            <div className='absolute'
              style={{
                left: '0px',
                top: '56px',
                width: '361px',
                height: '30px',
                fontFamily: 'var(--font-montserrat)',
                color: '#FFFFFF',
                fontSize: '18px',
                lineHeight: '30px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }} >
              Hi, I&apos;m Edwin Anderson
            </div>

            {/* Description */}
            <div className='absolute'
              style={{
                left: 0,
                top: 94,
                width: 500,
                fontFamily: 'var(--font-montserrat)',
                color: '#FFFFFF',
                fontSize: '18px',
                lineHeight: '35px',
                fontWeight: 500,
              }} >
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </div>
        </div>


        {/* Right-side stats & CTA per Figma */}
        <motion.div initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='relative' >
          <div className='absolute z-30 flex flex-col items-start'
            style={{ 
              left: 400, 
              top: -260, 
              width: 222, 
              height: 568, 
              gap: 20 
            }} >
            <div className='flex flex-col w-full'>
              {heroData.stats.map((s, i) => (
                <div key={s.label} className='w-full'>
                  <div className='text-white font-bold leading-[60px]'
                    style={{ fontSize: 48 }} >
                    {s.value}
                  </div>
                  <div className='text-white font-semibold text-sm leading-[30px] mb-3'>
                    {s.label}
                  </div>
                  {i < heroData.stats.length - 1 && (
                    <div className='h-px w-full'
                      style={{ background: '#B76080' }}
                    />
                  )}
                </div>
              ))}
            </div>

            <a href='#contact'
              className='inline-flex items-center justify-between rounded-full'
              style={{
                width: 222,
                height: 56,
                padding: '8px 8px 8px 16px',
                background: '#F3B64C',
              }}
            >
              <span className='text-[#0A0D12] text-base font-semibold'>
                Contact Me
              </span>
              <span
                className='flex-center rounded-full'
                style={{ width: 36, height: 36, background: '#0A0D12' }}
              >
                <ArrowRight className='w-5 h-5 text-white' />
              </span>
            </a>
          </div>
        </motion.div>


        {/* --------- Vector 1 - Clip path group from Figma ----------- */}
        <div className='absolute block pointer-events-none'
          style={{
            right: 200,
            top: -120,
            zIndex: 8,
            width: 200,
          }} >
          <Image src='/images/Vector.webp'
            alt='Decorative vector 1'
            width={166}
            height={166}
            className='object-contain' />
        </div>

        {/* --------- Vector 2 - Clip path group from Figma ----------- */}
        <div className='absolute block pointer-events-none'
          style={{
            left: 150,
            top: 180,
            zIndex: 8,
            width: 200,
            transform: 'rotate(-35deg)'
          }} >
          <Image src='/images/Vector.webp'
            alt='Decorative vector 1'
            width={166}
            height={166}
            className='object-contain' />
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className='relative lg:hidden w-full flex flex-col gap-5'
       style={{
        top: 100,
        left: 0,
       }} >

        {/* ------------ Introduction Block -------------- */}
        <div className='w-full flex flex-col gap-4 px-2'>
            {/* Mic Icon */}
            <div className='w-10 h-10'
              style={{
                left: '0px',
                top: '0px',
                padding: '2px 2px',
                gap: '8px',
                border: '1px solid #B76080',
                borderRadius: '9999px',
              }}
            >
              <Mic className='w-6 h-6 text-white mx-auto mt-3 translate-y-[-20%]' />
            </div>


            {/* Hi, I'm Edwin Anderson */}
            <div className=''
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: '#FFFFFF',
                fontSize: '20px',
                lineHeight: '30px',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }} >
              Hi, I&apos;m Edwin Anderson
            </div>

            {/* Description */}
            <div className=''
              style={{
                fontFamily: 'var(--font-montserrat)',
                color: '#FFFFFF',
                fontSize: '18px',
                lineHeight: '35px',
              }} >
              a frontend developer passionate about creating seamless digital
              experiences that are fast, responsive, and user-friendly.
            </div>
        </div>


        {/* Right-side stats & CTA per Figma */}
        <motion.div initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex flex-col px-2'>
            <div className='grid grid-cols-2 w-full'>
              {heroData.stats.map((s, i) => (
                <div key={s.label} className='w-full'>
                  <div className='text-white font-bold leading-[60px]'
                    style={{ fontSize: 48 }} >
                    {s.value}
                  </div>
                  <div className='text-white font-semibold text-sm leading-[30px] mb-3'>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a href='#contact' className='inline-flex items-center justify-between rounded-full'
              style={{
                padding: '8px 8px 8px 16px',
                background: '#F3B64C',
              }} >
              <span className='text-[#0A0D12] text-base font-semibold'>
                Contact Me
              </span>
              <span
                className='flex-center rounded-full'
                style={{ width: 36, height: 36, background: '#0A0D12' }}
              >
                <ArrowRight className='w-5 h-5 text-white' />
              </span>
            </a>
        </motion.div>

        {/* Availability pill (Figma spec) - Desktop only */}
        <motion.div initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className='gap-[6px] rounded-full border flex items-center mx-auto mt-6 px-2'
          style={{
            width: 185,
            height: 38,
            padding: '4px 16px',
            background: '#860D39',
            borderColor: '#B76080',
          }}>
          <span className='inline-block rounded-full' style={{ width: 16, height: 16, background: '#E26190' }} />
          <span className='text-white text-sm font-semibold tracking-[-0.03em]'>
            {heroData.availability}
          </span>
        </motion.div>

        <div className='relative bottom-0 px-2'>
          {/* ----------- Actor Image Center ------------- */}
          <div className='relative z-20 pointer-events-none block'>
              <Image
                src='/images/portrait-hero.webp'
                alt='Portrait hero'
                width={400}
                height={600}
                priority
                className='select-none'
              />
          </div>

          {/* ----------- BACKGROUND TEXT ---------------- */}
          <div className='absolute z-10 flex justify-center w-full'
            style={{ 
              left: 0, 
              top: 90, 
            }} >
            <div className='px-2'
            style={{
                fontFamily: 'var(--font-anton)',
                color: '#F3B64C',
                letterSpacing: '0.2em',
                textAlign: 'center',
              }} >
              <div style={{ fontSize: 100, lineHeight: '128px', fontWeight: 400 }} >
                FRONTEND
              </div>
              <div style={{ fontSize: 90, lineHeight: '105px', fontWeight: 400 }} >
                DEVELOPER
              </div>
            </div>
          </div>
          <div className='absolute pointer-events-none text-center w-full'
            style={{
              left: 0,
              top: 90,
              width: 202,
              height: 142,
              zIndex: 20,
              transform: 'rotate(-13deg) translateY(-50%)',
            }} >
            <div style={{
                fontFamily: 'var(--font-bonheur)',
                color: '#FFFFFF',
                letterSpacing: '-0.02em',
                fontSize: 75,
                lineHeight: '142px',
                fontWeight: 400,
              }} >
              Junior
            </div>
          </div>
        </div>

        {/* Vector 1 - Clip path group from Figma */}
        <div className='absolute block pointer-events-none'
            style={{
              left: -20,
              bottom: 350,
              zIndex: 8,
            }}
          >
          <Image
            src='/images/Vector.webp'
            alt='Decorative vector 1'
            width={100}
            height={100}
            className='object-contain'
          />
        </div>

        {/* Vector 2 - Clip path group from Figma with rotation */}
        <div
          className='absolute block pointer-events-none'
          style={{
            right: 0,
            bottom: 150,
            transform: 'rotate(100deg)',
            zIndex: 8,
          }}
        >
          <Image
            src='/images/Vector.webp'
            alt='Decorative vector 2'
            width={130}
            height={130}
            className='object-contain'
          />
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='absolute text-center text-white/70 z-40 pointer-events-none px-2'
          style={{
            left: 'calc(50% - 125px/2 + 0.5px)',
            bottom: 160,
            translateY: '50%',
            width: 125,
            height: 30,
          }}
        >
          <div className='text-base font-semibold leading-[30px] mb-2'>
            Scroll Down
          </div>
          <ChevronDown className='w-10 h-10 mx-auto animate-bounce' />
        </motion.div>
      </div>
    </section>
  );
}
