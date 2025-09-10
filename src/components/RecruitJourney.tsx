"use client";

import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function RecruitmentJourney() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/bg-gradient.png"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="mb-4">
          <span
            className={`${montserrat.className} font-bold not-italic text-[#252525] block text-3xl sm:text-4xl md:text-5xl leading-tight`}
          >
            A Recruitment Journey
          </span>
          <span
            className={`${montserrat.className} font-normal italic text-[#007BFF] block text-2xl sm:text-3xl md:text-4xl`}
          >
            That Delivers
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className={`${dmSans.className} text-[16px] sm:text-[18px] md:text-[20px] leading-[1.75] text-[#909090] max-w-4xl mx-auto`}
        >
          We help ambitious companies hire faster by delivering curated
          technology professionals and trusted leaders—from engineers to
          CXOs—driving growth with speed, precision, and long-term impact.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
          {/* Hire Talent */}
          <div className="flex gap-0 items-center group">
            <button
              className={`${dmSans.className} w-[163px] h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}
            >
              Hire Talent
            </button>
            <div
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                group-hover:bg-[#007BFF] group-hover:text-white"
            >
              <FiArrowUpRight
                className="transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white"
                size={24}
              />
            </div>
          </div>

          {/* Join Our Talent Pool */}
          <div className="flex gap-0 items-center group">
            <button
              className={`${montserrat.className} rounded-full border border-[#007BFF] text-[#007BFF] px-6 py-2 text-lg font-medium hover:bg-blue-50 transition`}
            >
              Join Our Talent Pool
            </button>
            <div
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                group-hover:bg-[#007BFF] group-hover:text-white"
            >
              <FiArrowUpRight
                className="transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white"
                size={24}
              />
            </div>
          </div>
        </div>

        {/* Base Map Image */}
        <div className="relative mt-14 flex justify-center px-4 sm:px-0">
          <Image
            src="/images/world3.png"
            alt="World Map"
            width={900}
            height={400}
            className="object-contain max-w-full h-auto"
            priority
          />

          {/* Absolute Overlay 1 */}
          <div className="absolute left-4 sm:left-10 bottom-10 sm:bottom-40 w-[120px] sm:w-[160px] h-auto">
            <Image
              src="/images/hired.png"
              alt="You're Hired"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Absolute Overlay 2 */}
          <div className="absolute right-4 sm:right-10 bottom-12 sm:bottom-36 w-[120px] sm:w-[160px] h-auto">
            <Image
              src="/images/jobavail.png"
              alt="Job Available"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
