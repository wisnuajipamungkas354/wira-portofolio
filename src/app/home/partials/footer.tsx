"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6 rounded-2xl mx-auto flex max-w-6xl bg-neutral-950 flex-col items-center gap-8 mb-[117px]">
      {/* Left Text */}
      <div className="flex flex-between w-full ">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold max-w-[281px] md:text-display-lg">
            LET’S DISCUSS YOUR IDEAS
          </h3>
        </div>

        {/* logo */}
        <div className="mt-4 flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="Company Logo"
            width={32}
            height={32}
          />
          <p className="font-semibold text-2xl">Your Company Name</p>
        </div>
      </div>

      <div className="border-1 border-neutral-800 w-full" />

      {/* Navigation */}
      <div className="flex justify-between w-full">
        <nav className="flex flex-wrap justify-center gap-4 text-sm text-gray-400 md:justify-start">
          <Link href="#about" className="hover:text-white">
            About
          </Link>
          <Link href="#service" className="hover:text-white">
            Service
          </Link>
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#testimonials" className="hover:text-white">
            Testimonials
          </Link>
          <Link href="#faq" className="hover:text-white">
            FAQ
          </Link>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:opacity-80" aria-label="Facebook">
            <Image
              src="/icons/facebook-icon.svg"
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="#" className="hover:opacity-80" aria-label="LinkedIn">
            <Image
              src="/icons/linkedin-icon.svg"
              alt="LinkedIn"
              width={40}
              height={40}
            />
          </Link>
          <Link href="#" className="hover:opacity-80" aria-label="Instagram">
            <Image
              src="/icons/instagram-icon.svg"
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link href="#" className="hover:opacity-80" aria-label="TikTok">
            <Image
              src="/icons/tiktok-icon.svg"
              alt="TikTok"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
