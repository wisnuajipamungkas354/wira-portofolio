'use client';

import Navbar from '@/components/sections/Navbar';
import { AboutSection } from '@/components/sections/AboutSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { Footer } from '@/components/sections/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

export default function HomePage() {
  return (
    <main className='max-h-screen'>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ComparisonSection />
      <ProjectsSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
