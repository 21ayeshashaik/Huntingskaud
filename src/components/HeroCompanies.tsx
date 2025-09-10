"use client";

import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "400"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
  return (
    <section className="bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] relative w-full bg-white">
      <div className="relative mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-20 h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left">
          <h1
            className={`${montserrat.className} text-3xl sm:text-4xl md:text-5xl lg:text-[40px] leading-tight text-gray-900`}
          >
            <span className="font-bold not-italic block mb-2">
              Why Companies Choose
            </span>
            <span className="font-normal italic text-[#007BFF] block">
              Hunting Skuad
            </span>
          </h1>

          <p
            className={`${dmSans.className} font-normal not-italic text-base sm:text-lg md:text-[18px] leading-relaxed text-[#909090] max-w-lg mt-4 sm:mt-6 mx-auto lg:mx-0`}
          >
            We combine deep startup expertise, leadership insights, and a
            research-driven approach to connect businesses with professionals
            who don’t just fit roles but strengthen organizations.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            {/* Hire Talent */}
            <div className="flex gap-0 items-center group">
              <button className="rounded-full bg-[#007BFF] text-white px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium hover:bg-[#007BFF]/90 transition">
                Hire Talent
              </button>
              <div
                className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                  group-hover:bg-[#007BFF] group-hover:text-white`}
              >
                <FiArrowUpRight
                  className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
                  size={22}
                />
              </div>
            </div>

            {/* Join Talent Pool */}
            <div className="flex gap-0 items-center group">
              <button className="rounded-full border border-[#007BFF] text-[#007BFF] px-5 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-medium hover:bg-blue-50 transition">
                Join Our Talent Pool
              </button>
              <div
                className={`w-9 sm:w-10 h-9 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                  group-hover:bg-[#007BFF] group-hover:text-white`}
              >
                <FiArrowUpRight
                  className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
                  size={22}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
          <Image
            src="/images/whycompanies.png"
            alt="Hunting Skuad Illustration"
            width={500}
            height={400}
            className="object-contain w-[80%] sm:w-[70%] md:w-[60%] lg:w-[500px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
