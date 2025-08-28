'use client';
import { motion, useScroll, useTransform } from 'framer-motion'; // Ganti motion/react jadi framer-motion
import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

import { navigationData } from '@/constants/navigation-data';
// import { header, li } from 'motion/react-client'; // Ini tidak perlu diimpor langsung dari motion/react-client

const Navbar = () => {
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'] // 100% transparent when scrolling
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(0px)'] // No blur when scrolling
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0,0,0,0)', '0 0 0 rgba(0,0,0,0)'] // No shadow when scrolling
  );

  return (
    <motion.header
      style={{ background, backdropFilter: backdropBlur, boxShadow, zIndex: 50 }}
      className='fixed top-0 w-full'
    >
      <div className='custom-container flex-between h-16 md:h-21'>
        <div />
        {/* navlink (hidden; replaced by centered pill on md+) */}
        <nav className='hidden'>
          <ul className='flex items-center gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link
                  href={data.href}
                  className='hover:text-primary-200 hover:decoration-primary-200 active:text-primary-200 active:decoration-primary-200 md:text-md p-4 font-normal transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4 active:underline active:underline-offset-4'
                >
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div />

        {/* Old hamburger removed; mobile menu handled in pill below */}
      </div>
      {/* Centered pill nav (desktop/tablet) */}
      <div className='absolute left-1/2 -translate-x-1/2 top-8 hidden md:flex h-12 w-[553px] items-center justify-center rounded-full bg-black/20 px-6 backdrop-blur-[20px]'>
        <ul className='flex items-center gap-6'>
          {navigationData.map((data) => (
            <li key={data.label}>
              <Link
                href={data.href}
                className='hover:text-primary-200 hover:decoration-primary-200 active:text-primary-200 active:decoration-primary-200 md:text-md py-2 font-normal transition-all duration-300 ease-in-out hover:underline hover:underline-offset-4 active:underline active:underline-offset-4'
              >
                {data.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile pill (Edwin + hamburger) */}
      <div className='absolute left-1/2 -translate-x-1/2 top-4 flex h-12 w-[361px] max-w-[calc(100%-32px)] items-center justify-between rounded-full bg-black/20 px-4 backdrop-blur-[20px] md:hidden'>
        <span className='text-white font-semibold'>Edwin</span>
        <Sheet>
          <SheetTrigger asChild>
            <Menu className='cursor-pointer' />
          </SheetTrigger>
          <SheetContent
            side='center'
            overlayClassName='bg-transparent'
            className='absolute left-1/2 top-[19px] z-[60] h-[812px] w-[361px] -translate-x-1/2 rounded-2xl bg-black/20 p-4 backdrop-blur-[20px]'
          >
            <div className='mb-4 mt-2'>
              <span className='text-white text-lg font-semibold'>Edwin</span>
            </div>
            <nav>
              <ul className='mt-1 flex flex-col gap-4'>
                {navigationData.map((data) => (
                  <li key={data.label}>
                    <SheetClose asChild>
                      <Link
                        href={data.href}
                        className='block py-2 text-lg font-normal text-white transition-colors hover:text-primary-200'
                      >
                        {data.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};
export default Navbar;
