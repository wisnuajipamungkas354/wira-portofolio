"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

type Faq = { id: string; q: string; a: string };

export function FaqPreview({ items }: { items: Faq[] }) {
  return (
    <div className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((it) => (
          <AccordionItem
            key={it.id}
            value={it.id}
            className="border-b border-white/10"
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
