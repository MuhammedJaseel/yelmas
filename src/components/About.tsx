import { Building2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      className="relative z-20 min-h-screen bg-[#f4f5f7] px-6 py-24 md:px-16 lg:px-24 flex items-center"
      id="about"
    >
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
  );
}
