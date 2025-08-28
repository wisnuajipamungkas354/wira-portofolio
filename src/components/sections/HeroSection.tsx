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
    <section
      id='home'
      className='flex flex-row justify-center min-w-[100vw]'
    >
      <div className='relative bg-cover bg-center bg-no-repeat h-[850px] mx-auto'
      style={{
        backgroundImage: "url('/images/bg-hero.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Overlay color - different for mobile vs desktop */}
      <div
        className='pointer-events-none absolute inset-0 bg-[rgba(165,56,96,0.94)] md:bg-[rgba(165,56,96,0.94)]'
      />
      {/* Center portrait image */}
      <div
        className='absolute z-10 pointer-events-none hidden lg:block'
        style={{
          bottom: -97,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 500,
          height: 700,
        }}
      >
        <Image
          src='/images/portrait-hero.png'
          alt='Portrait hero'
          width={500}
          height={700}
          priority
          className='select-none'
        />
      </div>

      {/* Big background title */}
      <div
        className='absolute hidden lg:block'
        style={{ left: '23%', top: 200, width: 658, height: 398, zIndex: 9 }}
      >
        <div
          style={{
            fontFamily: 'var(--font-anton)',
            color: '#F3B64C',
            letterSpacing: '-0.02em',
            textAlign: 'center',
          }}
        >
          <div
            style={{ fontSize: 170, lineHeight: '228px', fontWeight: 400 }}
          >
            FRONTEND
          </div>
          <div
            style={{ fontSize: 160, lineHeight: '205px', fontWeight: 400 }}
          >
            DEVELOPER
          </div>
        </div>
      </div>

      {/* Junior script label */}
      <div
        className='absolute hidden lg:block pointer-events-none'
        style={{
          left: '18%',
          top: 155,
          width: 202,
          height: 142,
          zIndex: 31,
          transform: 'rotate(-12.34deg)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-bonheur)',
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            fontSize: 113.23,
            lineHeight: '142px',
            fontWeight: 400,
          }}
        >
          Junior
        </div>
      </div>

      {/* Availability pill (Figma spec) - Desktop only */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className='absolute left-1/2 -translate-x-1/2 z-30 items-center gap-[6px] rounded-full border hidden lg:flex'
        style={{
          top: 140,
          width: 195,
          height: 38,
          padding: '4px 16px',
          background: '#860D39',
          borderColor: '#B76080',
        }}
      >
        <span
          className='inline-block rounded-full'
          style={{ width: 16, height: 16, background: '#E26190' }}
        />
        <span className='text-white text-sm font-semibold tracking-[-0.03em]'>
          {heroData.availability}
        </span>
      </motion.div>

      {/* Vertical tech stack - desktop only */}
      <div
        className='absolute z-30 hidden lg:flex'
        style={{ left: '5%', top: 107.57 }}
      >
        <div
          className='flex flex-col items-center justify-center gap-4 w-20 h-72 rounded-full border'
          style={{ borderColor: '#B76080'}}
        >
          {techIcons.map((icon) => (
            <div
              key={icon.src}
              className='flex-center w-[50px] h-[50px] rounded-full border'
              style={{ borderColor: '#B76080' }}
            >
              <Image src={icon.src} alt={icon.alt} width={26} height={26} />
            </div>
          ))}
        </div>
      </div>

      {/* Subtitle content block per Figma (mic + text) */}
      <div
        className='absolute z-30 hidden lg:flex flex-col gap-[14px]'
        style={{ left: '5%', bottom: '70px', width: 451, height: 221 }}
      >
        <div
          className='flex-center w-[55px] h-[55px] rounded-full border'
          style={{ borderColor: '#B76080' }}
        >
          <Mic className='w-[20px] h-[35px] text-white' />
        </div>
        <h2 className='text-white font-bold text-xl leading-[34px]'>
          {heroData.name}
        </h2>
        <p className='text-white/95 text-base leading-8'>{heroData.subtitle}</p>
      </div>

      {/* Right-side stats & CTA per Figma */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='relative'
      >
        <div
          className='absolute z-30 hidden lg:flex flex-col items-start'
          style={{ right: '6%', top: 237, width: 222, height: 568, gap: 20 }}
        >
          <div className='flex flex-col w-full'>
            {heroData.stats.map((s, i) => (
              <div key={s.label} className='w-full'>
                <div
                  className='text-white font-bold leading-[60px]'
                  style={{ fontSize: 48 }}
                >
                  {s.value}
                </div>
                <div className='text-white font-semibold text-sm leading-[30px] mb-3'>
                  {s.label}
                </div>
                {i < heroData.stats.length - 1 && (
                  <div
                    className='h-px w-full'
                    style={{ background: '#B76080' }}
                  />
                )}
              </div>
            ))}
          </div>

          <a
            href='#contact'
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

      {/* Decorative vectors from Figma */}
      {/* Vector 1 - Clip path group from Figma */}
      <div
        className='absolute block pointer-events-none'
        style={{
          left: '304px',
          right: '65.9%',
          top: '395px',

          zIndex: 8,
        }}
      >
        <Image
          src='/images/Vector.png'
          alt='Decorative vector 1'
          width={166}
          height={166}
          className='object-contain'
        />
      </div>

      {/* Vector 2 - Clip path group from Figma with rotation */}
      <div
        className='absolute block pointer-events-none'
        style={{
          left: '60%',
          top: '625px',

          transform: 'rotate(59.14deg)',
          zIndex: 8,
        }}
      >
        <Image
          src='/images/Vector.png'
          alt='Decorative vector 2'
          width={166}
          height={166}
          className='object-contain'
        />
      </div>

      {/* Mobile Hero Content - Exact Figma Layout */}
      <div className='md:hidden relative z-20'>
        {/* Mobile Frame Container */}
        <div
          className='relative mx-auto'
          style={{
            width: '393px',
            height: '1028px',
            background: '#A53F65',
          }}
        >
          {/* Available for Hire Pill */}
          <div
            className='absolute'
            style={{
              left: 'calc(50% - 180px/2 + 0.5px)',
              top: '555px',
              width: '180px',
              height: '32px',
              padding: '4px 16px',
              gap: '6px',
              background: '#860D39',
              border: '1px solid #B76080',
              borderRadius: '9999px',
            }}
          >
            <div className='flex items-center gap-2'>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  background: '#E26190',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-montserrat)',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  lineHeight: '24px',
                  fontWeight: 600,
                  letterSpacing: '-0.03em',
                  height: '24px',
                  flex: 1,
                  whiteSpace: 'nowrap',
                }}
              >
                Available for Hire
              </span>
            </div>
          </div>

          {/* Junior Text */}
          <div
            className='absolute'
            style={{
              left: '17px',
              top: '624px',
              width: '116px',
              height: '81px',
              fontFamily: 'var(--font-bonheur)',
              color: '#FFFFFF',
              fontSize: '64.5855px',
              lineHeight: '81px',
              letterSpacing: '-0.02em',
              fontWeight: 400,
              transform: 'rotate(-12.34deg)',
              zIndex: 10,
            }}
          >
            Junior
          </div>

          {/* Main Title Block */}
          <div
            className='absolute'
            style={{
              left: '18px',
              top: '652px',
              width: '357.1px',
              height: '218.94px',
            }}
          >
            {/* FRONTEND */}
            <div
              className='absolute'
              style={{
                left: 'calc(50% - 357px/2)',
                top: '0px',
                width: '357px',
                height: '126px',
                fontFamily: 'var(--font-anton)',
                color: '#F3B64C',
                fontSize: '102px',
                lineHeight: '125px',
                textAlign: 'center',
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              FRONTEND
            </div>
            {/* DEVELOPER */}
            <div
              className='absolute'
              style={{
                left: 'calc(50% - 357px/2 + 0.1px)',
                top: '105.94px',
                width: '357px',
                height: '113px',
                fontFamily: 'var(--font-anton)',
                color: '#F3B64C',
                fontSize: '92px',
                lineHeight: '113px',
                textAlign: 'center',
                letterSpacing: '-0.02em',
                fontWeight: 400,
              }}
            >
              DEVELOPER
            </div>
          </div>

          {/* Portrait Image */}
          <div
            className='absolute'
            style={{
              left: 'calc(50% - 375px/2 + 10px)',
              top: '576px',
              width: '375px',
              height: '452px',
            }}
          >
            <Image
              src='/images/portrait-hero.png'
              alt='Portrait hero mobile'
              width={375}
              height={452}
              priority
              className='w-full h-full object-cover'
            />
          </div>

          {/* Introduction Block */}
          <div
            className='absolute'
            style={{
              left: '16px',
              top: '88px',
              width: '361px',
              height: '429px',
              gap: '25px',
            }}
          >
            {/* Mic and Text */}
            <div
              className='absolute'
              style={{
                left: '0px',
                top: '0px',
                width: '361px',
                height: '178px',
                gap: '8px',
              }}
            >
              {/* Mic Icon */}
              <div
                className='absolute'
                style={{
                  left: '0px',
                  top: '0px',
                  width: '48px',
                  height: '48px',
                  padding: '2px 5px',
                  gap: '8px',
                  border: '1px solid #B76080',
                  borderRadius: '9999px',
                }}
              >
                <Mic className='w-[14px] h-[20px] text-white mx-auto mt-3' />
              </div>
              {/* Hi, I'm Edwin Anderson */}
              <div
                className='absolute'
                style={{
                  left: '0px',
                  top: '56px',
                  width: '361px',
                  height: '30px',
                  fontFamily: 'var(--font-montserrat)',
                  color: '#FFFFFF',
                  fontSize: '16px',
                  lineHeight: '30px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                }}
              >
                Hi, I&apos;m Edwin Anderson
              </div>
              {/* Description */}
              <div
                className='absolute'
                style={{
                  left: '0px',
                  top: '94px',
                  width: '361px',
                  height: '84px',
                  fontFamily: 'var(--font-montserrat)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  lineHeight: '28px',
                  fontWeight: 500,
                }}
              >
                a frontend developer passionate about creating seamless digital
                experiences that are fast, responsive, and user-friendly.
              </div>
            </div>

            {/* Stats Block */}
            <div
              className='absolute'
              style={{
                left: '0px',
                top: '203px',
                width: '361px',
                height: '226px',
                gap: '20px',
              }}
            >
              {/* First Row Stats */}
              <div
                className='absolute'
                style={{
                  left: '0px',
                  top: '0px',
                  width: '361px',
                  height: '69px',
                }}
              >
                {/* 2+ Years Experience */}
                <div
                  className='absolute'
                  style={{
                    left: '0px',
                    top: '0px',
                    width: '120.33px',
                    height: '69px',
                    gap: '3px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '32px',
                      lineHeight: '42px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    2+
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      lineHeight: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Years Experience
                  </div>
                </div>
                {/* Divider */}
                <div
                  className='absolute'
                  style={{
                    left: '180.67px',
                    top: '34.5px',
                    width: '60.67px',
                    height: '0px',
                    border: '1px solid #B76080',
                    transform: 'rotate(-90deg)',
                  }}
                />
                {/* 99% Client Satisfaction */}
                <div
                  className='absolute'
                  style={{
                    left: '240.67px',
                    top: '0px',
                    width: '120.33px',
                    height: '69px',
                    gap: '3px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '32px',
                      lineHeight: '42px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    99%
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      lineHeight: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Client Satisfaction
                  </div>
                </div>
              </div>

              {/* Second Row Stats */}
              <div
                className='absolute'
                style={{
                  left: '0px',
                  top: '89px',
                  width: '361px',
                  height: '69px',
                }}
              >
                {/* 3 Project Delivered */}
                <div
                  className='absolute'
                  style={{
                    left: '0px',
                    top: '0px',
                    width: '120.33px',
                    height: '69px',
                    gap: '3px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '32px',
                      lineHeight: '42px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    3
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      lineHeight: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Project Delivered
                  </div>
                </div>
                {/* Divider */}
                <div
                  className='absolute'
                  style={{
                    left: '180.67px',
                    top: '34.5px',
                    width: '60.67px',
                    height: '0px',
                    border: '1px solid #B76080',
                    transform: 'rotate(-90deg)',
                  }}
                />
                {/* 50 Clients Worldwide */}
                <div
                  className='absolute'
                  style={{
                    left: '240.67px',
                    top: '0px',
                    width: '120.33px',
                    height: '69px',
                    gap: '3px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '32px',
                      lineHeight: '42px',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    50
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#FFFFFF',
                      fontSize: '12px',
                      lineHeight: '24px',
                      fontWeight: 600,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    Clients Worldwide
                  </div>
                </div>
              </div>

              {/* Contact Me Button */}
              <div
                className='absolute'
                style={{
                  left: '0px',
                  top: '178px',
                  width: '361px',
                  height: '48px',
                  padding: '8px 8px 8px 16px',
                  gap: '8px',
                  background: '#F3B64C',
                  borderRadius: '100px',
                }}
              >
                <div className='flex items-center justify-between w-full'>
                  <span
                    style={{
                      fontFamily: 'var(--font-montserrat)',
                      color: '#0A0D12',
                      fontSize: '14px',
                      lineHeight: '28px',
                      fontWeight: 600,
                    }}
                  >
                    Contact Me
                  </span>
                  <div
                    className='flex items-center justify-center'
                    style={{
                      width: '36px',
                      height: '36px',
                      background: '#0A0D12',
                      borderRadius: '100px',
                      padding: '8px',
                    }}
                  >
                    <ArrowRight className='w-5 h-5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Vectors */}
          {/* Vector 1 - Left side */}
          <div
            className='absolute'
            style={{
              left: '-28px',
              top: '726px',
              width: '90.98px',
              height: '90.98px',
            }}
          >
            <div
              className='absolute'
              style={{
                left: '-7.13%',
                bottom: '22.15%',
                transform: 'rotate(15deg)',
              }}
            >
              <Image
                src='/images/Vector.png'
                alt='Decorative vector 1'
                width={91}
                height={91}
                className='object-contain'
              />
            </div>
          </div>

          {/* Vector 2 - Right side */}
          <div
            className='absolute'
            style={{
              left: '292px',
              top: '871px',
              width: '99px',
              height: '99px',
            }}
          >
            <div
              className='absolute'
              style={{
                left: '74.3%',
                right: '0.51%',
                top: '84.73%',
                bottom: '5.64%',
              }}
            >
              <Image
                src='/images/Vector.png'
                alt='Decorative vector 2'
                width={99}
                height={99}
                className='object-contain'
              />
            </div>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className='pt-32 pb-16 relative z-10 hidden md:block min-w-[100vw] h-[850px]'>
        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='absolute text-center text-white/70 z-40 pointer-events-none hidden md:block'
          style={{
            left: 'calc(50% - 125px/2 + 0.5px)',
            bottom: 50,
            width: 125,
            height: 30,
          }}
        >
          <div className='text-base font-semibold leading-[30px] mb-2'>
            Scroll Down
          </div>
          <ChevronDown className='w-6 h-6 mx-auto animate-bounce' />
        </motion.div>

        {/* Mobile Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className='md:hidden absolute text-center text-white/70 z-40 pointer-events-none'
          style={{
            left: 'calc(50% - 93px/2)',
            top: '980px',
            width: '93px',
            height: '24px',
          }}
        >
          <div
            className='text-xs font-semibold leading-6 tracking-[-0.03em]'
            style={{
              fontFamily: 'var(--font-montserrat)',
              color: '#FFFFFF',
              fontSize: '12px',
              lineHeight: '24px',
              fontWeight: 600,
              letterSpacing: '-0.03em',
            }}
          >
            Scroll Down
          </div>
          <div className='w-5 h-5 mx-auto mt-1'>
            <div className='w-full h-full border border-white rounded-full relative'>
              <div className='absolute w-1 h-2 border-l border-white left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
