"use client";

import { TestimonialCard } from "@/components/TestimonialCard";
import { Marquee } from "@/components/ui/marquee";

const testimonials = [
  {
    name: "Sarah Tan",
    role: "Product Manager at Finovate",
    quote:
      "The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.",
    avatar: "/icons/Ellipse-person-1.png",
    stars: 5,
  },
  {
    name: "John Lee",
    role: "Director at Innovate Corp",
    quote:
      "A game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.",
    avatar: "/icons/Ellipse-person-1.png",
    stars: 4,
  },
  {
    name: "Emily Chen",
    role: "Marketing Head at TechBridge",
    quote:
      "The collaboration was seamless, and the team exceeded our expectations. Their expertise translated into a successful product.",
    avatar: "/icons/Ellipse-person-1.png",
    stars: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className="relative bg-black text-white px-6 py-20 md:px-20 overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          What Partners Say About Working With Us
        </h2>
        <p className="text-muted-foreground mb-12">
          Trusted voices. Real experiences. Proven results.
        </p>
      </div>

      {/* Gradient Decorations */}
      <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

      {/* Marquee */}
      <div className="relative z-10">
        <Marquee>
          {testimonials.map((item, i) => (
            <TestimonialCard
              key={i}
              name={item.name}
              role={item.role}
              quote={item.quote}
              avatar={item.avatar}
              stars={item.stars}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
