"use client";

import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function RecruitmentJourney() {
  return (
    <section className="relative w-full py-6 sm:py-10 lg:py-10 bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Heading */}
        <h1 className="mb-4">
          <span
            className={`${montserrat.className} font-bold not-italic text-[#252525] block text-2xl sm:text-4xl md:text-4xl lg:text-5xl leading-tight`}
          >
            A Recruitment Journey
          </span>
          <span
            className={`${montserrat.className} font-normal italic text-[#007BFF] block text-xl sm:text-3xl md:text-4xl lg:text-5xl`}
          >
            That Delivers
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className={`${dmSans.className} text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] leading-relaxed sm:leading-[1.7] text-[#909090] max-w-6xl mx-auto`}
        >
          We help ambitious companies hire faster by delivering curated
          technology professionals and trusted leaders—from engineers to CXOs—
          driving growth with speed, precision, and long-term impact.
        </p>

        {/* Buttons */}
        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          {/* Hire Talent */}
          <div className="flex gap-2 items-center group">
            <button
              className={`${dmSans.className} w-[150px] sm:w-[163px] h-[45px] sm:h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}
            >
              Hire Talent
            </button>
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                group-hover:bg-[#007BFF] group-hover:text-white"
            >
              <FiArrowUpRight
                className="transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white"
                size={22}
              />
            </div>
          </div>

          {/* Join Talent Pool */}
          <div className="flex gap-2 items-center group">
            <button
              className={`${montserrat.className} rounded-full border border-[#007BFF] text-[#007BFF] px-5 sm:px-6 py-2 text-base sm:text-lg font-medium hover:bg-blue-50 transition`}
            >
              Join Our Talent Pool
            </button>
            <div
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                group-hover:bg-[#007BFF] group-hover:text-white"
            >
              <FiArrowUpRight
                className="transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white"
                size={22}
              />
            </div>
          </div>
        </div>

        {/* World Map + Overlays */}
        <div className="relative mt-6 sm:mt-12 lg:mt-12 flex justify-center">
          <Image
            src="/images/world3.png"
            alt="World Map"
            width={1000}
            height={500}
            className="object-contain max-w-full h-auto"
            priority
          />

          {/* Overlay 1 */}
          <div className="absolute left-2 sm:left-10 bottom-6 sm:bottom-16 lg:bottom-28 w-[90px] sm:w-[130px] md:w-[160px]">
            <Image
              src="/images/hired.png"
              alt="You're Hired"
              width={160}
              height={80}
              className="object-contain w-full h-auto"
            />
          </div>

          {/* Overlay 2 */}
          <div className="absolute right-2 sm:right-10 bottom-8 sm:bottom-20 lg:bottom-32 w-[90px] sm:w-[130px] md:w-[160px]">
            <Image
              src="/images/jobavail.png"
              alt="Job Available"
              width={160}
              height={80}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
