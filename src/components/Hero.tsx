"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { HelpCircle } from "lucide-react";

const blogs = [
  {
    date: "Aug 2024",
    title: "Luxury Market Growth",
    desc: "Analysis of the surging high-end residential sector in emerging financial hubs.",
    img: "/prop/p1.webp",
  },
  {
    date: "July 2024",
    title: "Commercial Shift",
    desc: "How hybrid work models are reshaping the commercial real estate landscape globally.",
    img: "/prop/p3.webp",
  },
];

const teamMembers = [
  {
    name: "MARCUS STERLING",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "ELENA ROSSI",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "DAVID CHEN",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
  },
  {
    name: "SARAH JENKINS",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600",
  },
];

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
    <div className="w-full bg-[#fff] text-[#222222] antialiased">
      {/* 
        HERO SECTION WITH HORIZONTAL SCROLL PANNING
        Height: 300vh creates the scroll runway needed to pan horizontally.
      */}
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
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
            {/* Logo Mark */}
            <div className="mb-4 flex flex-col items-center">
              <img src="logoBlack.svg" />
              <p className="tracking-[0.4em] text-[#333333]">PROPERTIES</p>
              <div className="mt-3 h-[2px] w-12 bg-gray-800" />
            </div>

            {/* Subtitle */}
            <p className="max-w-xl text-sm leading-relaxed text-[#333333] sm:text-lg opacity-[70%]">
              Discover premium properties, smart investments, and modern living
              opportunities designed for comfort, luxury, and long-term value.
            </p>
          </div>
        </div>
      </section>

      {/* 
        ABOUT SECTION
        Normal page content that scrolls naturally after hero lock releases.
      */}
      <section className="relative z-20 min-h-screen bg-[#f4f5f7] px-6 py-24 md:px-16 lg:px-24 flex items-center">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text Content */}
            <div className="space-y-6">
              {/* Tag Header */}
              <div className="flex items-center space-x-2">
                <div className="flex h-9 w-9 items-center justify-center bg-[#8E8B82] text-white">
                  <Building2 className="h-4 w-4" />
                </div>
                <span className="text-sm font-bold tracking-widest text-[#8E8B82] uppercase">
                  Introduction
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl leading-tight">
                ABOUT OUR <br />
                <span className="text-[#8E8B82]">REAL ESTATE COMPANY</span>
              </h2>

              {/* Description */}
              <p className="max-w-lg text-sm leading-relaxed text-[#333333] sm:text-lg opacity-[80%]">
                We specialize in residential, commercial, and investment
                properties with a commitment to quality service, trusted
                partnerships, and customer satisfaction. Our portfolio spans the
                globe's most prestigious locations.
              </p>

              {/* Button */}
              <button className="bg-[#2a2d32] px-8 py-3.5 text-xs font-bold tracking-widest text-white uppercase transition-colors hover:bg-black">
                Our Story
              </button>
            </div>

            {/* Image Block */}
            <div className="relative">
              <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full bg-gray-200/80" />
              <div className="overflow-hidden shadow-2xl">
                <img
                  src="/prop/p2.webp"
                  alt="Luxury Villa Property"
                  className="h-[450px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: OUR VISION AND MISSION */}
      <section className="max-w-7xl w-full mx-auto px-6 py-12 min-h-screen flex items-center justify center">
        <div className="flex gap-12 items-start flex-col md:flex-row">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-neutral-400"></span>
              <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                Forward Thinking
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-none tracking-tight leading-tight">
              Our Vision <br />
              <span className="text-[#8E8B82]">And Mission</span>
            </h2>

            <div className="border-l-2 border-[#8E8B82] pl-4 py-1">
              <p className="text-neutral-600 text-sm md:text-lg leading-relaxed opacity-[80%]">
                Our vision is to create inspiring living spaces, while our
                mission is to deliver innovative, sustainable, and valuable real
                estate solutions that stand the test of time.
              </p>
            </div>
          </div>

          {/* Right Grid Section */}
          <div className="w-full flex flex-col sm:flex-row gap-8 justify-center items-center">
            <div className="w-full sm:w-64 md:w-72 md:w-72 flex flex-col gap-8 mt-8">
              <div className="h-54 sm:h-62 f-full rounded-sm overflow-hidden shadow-sm">
                <img
                  src="/prop/p3.webp"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="bg-[#333333]/10 text-neutral-800 p-8">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">
                  Sustainability
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Integrating eco-friendly practices into every development to
                  ensure a greener future for our communities.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-64 md:w-72 md:w-72 flex flex-col gap-8">
              <div className="bg-[#333333] text-white p-8">
                <h3 className="text-xl font-bold uppercase tracking-wider mb-3">
                  Innovation
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Leveraging cutting-edge architecture and technology to
                  redefine modern living experiences.
                </p>
              </div>
              <div className="h-54 sm:h-62 f-full  rounded-sm overflow-hidden shadow-sm">
                <img
                  src="/prop/p4.webp"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: REAL ESTATE MARKET INSIGHTS */}
      <section className="bg-[#f5f5f5] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#8E8B82] block">
                Analytical Excellence
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold uppercase leading-none tracking-tight leading-tight">
                Real Estate <br />
                <span className="text-[#8E8B82]">Market Insights</span>
              </h2>
              <p className="text-neutral-600 text-sm md:text-lg leading-relaxed max-w-xl text-[#333333]/80">
                The property market continues to grow with increasing demand for
                modern homes, strategic locations, and smart investment
                opportunities.
              </p>
            </div>

            {/* Carousel Navigation Buttons */}
            <div className="flex gap-2">
              <button
                aria-label="Previous slide"
                className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-neutral-700 hover:bg-neutral-100 transition"
              >
                &#8592;
              </button>
              <button
                aria-label="Next slide"
                className="w-10 h-10 bg-[#2c2d2e] flex items-center justify-center text-white hover:bg-neutral-800 transition"
              >
                &#8594;
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card  */}
            {blogs.map((it, k) => (
              <div
                className="bg-white p-6 rounded-sm flex flex-col justify-between shadow-sm"
                key={k}
              >
                <div>
                  <div className="relative h-48 w-full mb-6 rounded-sm overflow-hidden">
                    <img src={it.img} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block mb-2">
                    {it.date}
                  </span>
                  <h3 className="text-lg font-extrabold uppercase tracking-wide mb-3">
                    {it.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed mb-6">
                    {it.desc}
                  </p>
                </div>
                <a
                  href="#"
                  className="text-xs font-bold uppercase tracking-wider text-neutral-800 underline underline-offset-4 hover:text-neutral-500 transition"
                >
                  Read More
                </a>
              </div>
            ))}

            {/* Card 3 - Quarterly Report Callout */}
            <div className="bg-[#2c2d2e] text-white p-8 rounded-sm flex flex-col justify-between">
              <div className="space-y-4 pt-4">
                <h3 className="text-2xl font-extrabold uppercase tracking-wider leading-snug">
                  Quarterly <br />
                  Market Report
                </h3>
                <p className="text-neutral-300 text-xs leading-relaxed">
                  Detailed statistics on property yields, capital appreciation,
                  and emerging hotspots for 2024.
                </p>
              </div>
              <div className="pt-8">
                <button className="bg-white text-neutral-900 text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-neutral-200 transition">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex justify-center items-center">
        <div className="max-w-7xl w-full py-12">
          <p className="text-xs uppercase tracking-widest text-[#8E8B82] font-semibold mb-2 text-center">
            THE EXPERTS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-12 uppercase text-gray-900 text-center">
            MEET OUR <span className="text-[#8E8B82]">TEAM</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-sm font-bold tracking-wider text-gray-900 uppercase">
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex min-h-screen justify-center">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl w-full px-6">
          <div className="min-w-[50%]">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-8 h-[2px] bg-[#8E8B82]"></span>
                <p className="text-sm uppercase tracking-widest text-[#8E8B82] font-semibold">
                  GET IN TOUCH
                </p>
              </div>
              <h2 className="text-5xl font-extrabold tracking-tight text-[#333333] mb-4">
                Enquire Now
              </h2>
              <p className="text-[#333333]/80 text-base leading-relaxed max-w-md">
                Our experts are here to help you find your perfect property.
                Whether you're looking for a luxury residence or a strategic
                investment, we're ready to guide you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center text-[#8E8B82]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8E8B82] font-semibold">
                    PHONE
                  </p>
                  <p className="text-base text-[#333333]">+971 4 000 0000</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center text-[#8E8B82]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8E8B82] font-semibold">
                    EMAIL
                  </p>
                  <p className="text-base text-[#333333]">
                    concierge@yelmasproperties.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#F5F5F5] flex items-center justify-center text-[#8E8B82]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#8E8B82] font-semibold">
                    OFFICE
                  </p>
                  <p className="text-base text-[#333333]">
                    Marina Gate II, Dubai Marina, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex min-w-[50%] w-full justify-center items-start">
            <div className="bg-[#F9F9FB] p-8 md:p-10 border border-[#EBEBF2]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      placeholder="+971 50 000 0000"
                      className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold tracking-wider text-[#8E8B82] uppercase">
                    MESSAGE
                  </label>
                  <textarea
                    rows={3}
                    placeholder="How can we help you find your dream home?"
                    className="w-full pt-4 bg-transparent border-b border-[#333333]/20 pb-2 text-base text-gray-800 placeholder-gray-300 focus:outline-none focus:border-gray-800 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#333333] hover:bg-black text-white font-bold tracking-widest px-8 py-4 transition-colors uppercase"
                >
                  SUBMIT ENQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full bg-[#333333] text-white font-sans">
        {/* UPPER CTA SECTION */}
        <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center flex flex-col items-center">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-300 font-medium mb-3">
            Let's Build Your
          </span>

          <h2 className="text-4xl sm:text-8xl font-bold tracking-tight mb-6">
            Future Together
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base max-w-lg leading-relaxed mb-8">
            Thank you for exploring our real estate Profile. Contact us today to
            find your dream property or next investment opportunity.
          </p>

          {/* CTA BUTTON */}
          <a
            href="#contact"
            className="bg-white text-neutral-900 font-bold text-xs uppercase tracking-widest px-8 py-4 mb-8 hover:bg-neutral-200 transition-colors duration-200"
          >
            Get In Touch
          </a>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-5 text-neutral-300">
            <a href="#" className="hover:text-white transition-colors">
              {/* <Instagram size={18} /> */}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {/* <Linkedin size={18} /> */}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {/* <Facebook size={18} /> */}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <HelpCircle size={18} />
            </a>
          </div>
        </section>

        {/* DIVIDER LINE */}
        <div className="max-w-6xl mx-auto px-6">
          <hr className="border-neutral-600 my-0" />
        </div>

        {/* LOWER FOOTER SECTION */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            {/* BRAND / LOGO COLUMN */}
            <img className="w-40" src="/logoWhite.svg" />

            {/* QUICK LINKS */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li>
                  <a href="#properties" className="hover:text-white transition">
                    Properties
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* LOCATIONS */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Locations
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li>Dubai Marina, UAE</li>
                <li>Mayfair, London</li>
                <li>Manhattan, NYC</li>
              </ul>
            </div>

            {/* INQUIRIES */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white">
                Inquiries
              </h4>
              <ul className="space-y-2 text-xs text-neutral-300">
                <li>
                  <a
                    href="mailto:hello@yelmasproperties.com"
                    className="hover:text-white transition"
                  >
                    hello@yelmasproperties.com
                  </a>
                </li>
                <li>+971 4 000 0000</li>
              </ul>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-16 text-center text-[10px] uppercase tracking-widest text-neutral-400">
            © 2024 YELMAS PROPERTIES. ALL RIGHTS RESERVED.
          </div>
        </section>
      </footer>
    </div>
  );
}
