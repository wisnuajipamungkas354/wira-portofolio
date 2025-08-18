"use client";
import Image from "next/image";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { faqItems } from "@/constants/help-faq-data";

const FaqSection = () => {
  return (
    <section
      className="bg-black text-white px-6 py-16 md:px-20"
      id="faq-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-between items-center mb-10">
          <h2 className="text-display-sm md:text-display-xl font-bold mb-4">
            Need Help? Start Here.
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-lg font-medium">
            Everything you need to know — all in one place.
          </p>
        </div>

        <div className="border-1 border-gray-600" />

        {/* faq accordion + card */}
        <div className="mt-8 flex flex-col md:flex-row gap-8">
          <div className="basis-80 flex-[9.8]">
            <FaqPreview items={faqItems} />
          </div>

          <div className="basis-80 flex-[0.2]">
            <div className="bg-primary-300 p-6 rounded-2xl shadow-lg">
              <h3 className="text-sm md:text-display-lg font-bold ">
                Let’s talk it through
              </h3>
              <p className="text-sm md:text-lg font-semibold text-white mb-6">
                Book a free consultation with our team.
              </p>

              <Image
                src="/images/Consultation-image.png"
                alt="Consultation"
                width={281}
                height={153}
              />
              <Button className="bg-white font-bold text-black hover:bg-primary-200 hover:text-black w-full mt-6">
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

type Faq = { id: string; q: string; a: string };

function FaqPreview({ items }: { items: Faq[] }) {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((it) => (
          <AccordionItem
            key={it.id}
            value={it.id}
            className="border-b border-white/10 md:text-display-xs font-bold"
          >
            <AccordionTrigger className="py-5 text-left text-white hover:no-underline">
              <span className="text-base">{it.q}</span>
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm text-white/70">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
