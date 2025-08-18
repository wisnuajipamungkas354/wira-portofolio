"use client";

// import ContactForm from './home/partials/contact-form';
// import FAQ from './home/partials/faq';
// import Footer from './home/partials/footer';
// import Hero from './home/partials/hero';
// import ImpactStatistics from './home/partials/impact-statistics';
// import Projects from './home/partials/projects';
// import ScrollUp from './home/partials/scroll-up';
// import Services from './home/partials/services';
// import ServicesProcess from './home/partials/services-process';
// import Testimonials from './home/partials/testimonials';

// import TrustedBy from './home/partials/trusted-by';
// import UseCaseTabs from './home/partials/usecase-tabs';

import Navbar from "@/app/home/partials/navbar";

import AchievementsSection from "./home/partials/achievements-section";
import IndustrySection from "./home/partials/build-your-industry";
import ContactUsSection from "./home/partials/contact-us-section";
import FaqSection from "./home/partials/faq-section";
import Footer from "./home/partials/footer";
import Hero from "./home/partials/hero";
import { ItSolutionSection } from "./home/partials/it-solution";
import ProfesionalWork from "./home/partials/profesional-work";
import ProjectShowcase from "./home/partials/project-showcase";
import SelectedWork from "./home/partials/selected-work";
import TestimonialSection from "./home/partials/TestimonialSection";
import TrustedBy from "./home/partials/trusted-by";

const Home = () => {
  return (
    <div className="bg-base-black min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <AchievementsSection />
      <ProfesionalWork />
      <ItSolutionSection />
      <IndustrySection />
      <SelectedWork />
      <TestimonialSection />
      <FaqSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

export default Home;
