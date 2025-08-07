import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="custom-container flex flex-wrap items-center gap-7 overflow-hidden pt-30.5 md:pt-31.25">
      {/* left */}
      <div className="z-20 flex-[4.4] basis-80">
        <div className="flex max-w-[653px] flex-col gap-10">
          <h1 className="text-display-lg text-neutral-25 md:text-display-3xl leading-tight font-semibold md:font-bold">
            Your Tech Partner for{" "}
            <span className="text-primary-200">Smarter Growth</span>
          </h1>
          <p className="text-md font-semibold md:text-xl md:font-semibold">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <Button asChild className="flex h-11 w-full px-16 md:h-12 md:w-fit">
            <Link href="#contact">Lets Talk</Link>
          </Button>
        </div>
      </div>

      {/* right */}
      <div className="flex-[5.6] basis-80 md:absolute md:top-1/2 md:right-0 md:h-[747px] md:w-[747px] md:-translate-y-[420px]">
        <div>
          <Image
            src="/images/hero-image.png"
            alt="hero-image"
            width={747}
            height={747}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
