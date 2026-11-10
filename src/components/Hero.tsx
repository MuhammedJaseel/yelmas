"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection(): React.JSX.Element {
  // Target container for tracking scroll distance of the hero section
  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Hook into vertical scroll position inside heroContainerRef
  const { scrollYProgress } = useScroll({
    target: heroContainerRef,
    offset: ["start start", "end end"],
  });

  // Map vertical scroll (0 to 1) to horizontal translation of skyline background (-0% to -50%)
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={heroContainerRef} className="relative h-[300vh] w-full">
      {/* Sticky viewport frame (fixed during the 300vh scroll) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* <div className="sticky top-0 h-screen w-full overflow-hidden bg-gradient-to-b from-[#f0f4f8] to-[#e4e9f0]"> */}
        {/* Moving Background (Skyline Silhouette) */}
        <motion.div
          style={{ x: backgroundX }}
          className="absolute bottom-0 left-0 h-[100%] w-[200%] pointer-events-none opacity-60 flex"
        >
          <img src="/heroBG.webp" className="h-full object-cover" />
          <img src="/heroBG.webp" className="h-full object-cover" />
        </motion.div>

        {/* Centered Brand Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-between px-4 text-center">
          <div className="h-18 sm:h-25 w-[94%] flex justify-between items-center">
            <div className="flex">
              <a
                href="#about"
                className="text-[#333333] text-xs sm:text-sm font-semibold p-2 cursor-pointer"
              >
                ABOUT
              </a>
              <a
                href="#teams"
                className="text-[#333333] text-xs sm:text-sm font-semibold p-2 cursor-pointer"
              >
                TEAM
              </a>
              <a
                href="#contact"
                className="text-[#333333] text-xs sm:text-sm font-semibold p-2 cursor-pointer"
              >
                CONTACT US
              </a>
            </div>
            <div>
              <a
                href="#contact"
                className="text-[#333333] text-xs sm:text-sm font-semibold p-2 cursor-pointer"
              >
                ENQUIRY
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            {/* Logo Mark */}
            <div className="mb-4 flex flex-col items-center">
              <img src="logoBlack.svg" className="w-38 sm:w-46" />
              <p className="tracking-[0.4em] text-[#333333] text-sm sm:text-base">
                PROPERTIES
              </p>
              <div className="mt-3 h-[2px] w-12 bg-gray-800" />
            </div>

            {/* Subtitle */}
            <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-lg opacity-[70%]">
              Discover premium properties, smart investments, and modern living
              opportunities designed for comfort, luxury, and long-term value.
            </p>
          </div>
          <div className="h-25" />
        </div>
      </div>
    </section>
  );
}
