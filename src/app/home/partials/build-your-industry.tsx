"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

const industries = [
  {
    key: "fintech",
    label: "Fintech",
    description:
      "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: "/images/byd1.png",
  },
  {
    key: "ecommerce",
    label: "E-Commerce",
    description:
      "Custom e-commerce platforms with seamless checkout and robust scalability — optimized for global digital storefronts.",
    image: "/images/byd1.png",
  },
  {
    key: "healthcare",
    label: "Healthcare",
    description:
      "HIPAA-compliant software solutions for health records, telemedicine, and secure patient portals.",
    image: "/images/byd1.png",
  },
];

export default function IndustrySection() {
  return (
    <section
      className="bg-black text-white px-6 py-16 md:px-20"
      id="industries"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Built for Your Industry
        </h2>
        <p className="text-muted-foreground max-w-xl mb-10">
          We’ve helped companies across industries launch smarter, faster, and
          more securely.
        </p>

        <Tabs
          defaultValue="fintech"
          className="flex flex-col md:flex-row gap-10"
        >
          {/* Custom Vertical Tab (LEFT) */}
          <TabsList className="flex md:flex-col md:w-1/4 gap-2 bg-transparent p-0 items-start">
            {industries.map((industry) => (
              <TabsTrigger
                key={industry.key}
                value={industry.key}
                className={cn(
                  "w-full justify-start text-left rounded-full border-l-2 pl-4 py-2 transition-all",
                  "data-[state=active]:border-orange-500 data-[state=active]:text-white",
                  "data-[state=inactive]:border-transparent data-[state=inactive]:text-muted-foreground"
                )}
              >
                {industry.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Right content */}
          <div className="md:w-3/4 space-y-6">
            {industries.map((industry) => (
              <TabsContent
                key={industry.key}
                value={industry.key}
                className="space-y-6"
              >
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg max-w-2xl"
                >
                  {industry.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-xl"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.label}
                      fill
                      className="object-cover"
                    />
                  </AspectRatio>
                </motion.div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
