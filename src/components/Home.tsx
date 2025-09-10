"use client";

import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "400"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
  return (
    <section
      className="relative w-full bg-[#eff6ff]"
      style={{
        height: "calc(100vh - 90px)",
        minHeight: "600px", // Ensure minimum height on small screens
      }}
    >
      {/* Background Image - Hidden on mobile, visible on larger screens */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(/images/hero_bg.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          top: "-120px",
    
        }}
      />

      {/* Content */}
     
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-start pb-10 pt-20">

        <div className="max-w-2xl w-full">
          <h1
            className={`${montserrat.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[110%] md:leading-[100%] tracking-[0%] text-gray-900`}
          >
            <span className="font-bold not-italic block">
              Connecting Startups with
            </span>
            <span className="font-normal italic text-blue-600 block">
              Tech & Leadership Talent
            </span>
          </h1>

          <p
            className={`${dmSans.className} font-normal not-italic text-[16px] sm:text-[17px] md:text-[18px] leading-[28px] sm:leading-[30px] md:leading-[31px] tracking-[0%] text-[#909090] max-w-lg mt-4 sm:mt-6`}
          >
            We help ambitious startups and enterprises scale faster by delivering
            top technology professionals and trusted executive leaders. From
            engineers to C-suite, our mission is to empower careers and elevate
            businesses through meaningful placements
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {/* Hire Talent */}
            <div className="flex gap-0 items-center group w-full sm:w-auto">
              <button className={`${dmSans.className} w-[163px] h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}>
                Hire Talent
              </button>
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                  group-hover:bg-[#007BFF] group-hover:text-white ml-2`}
              >
                <FiArrowUpRight
                  className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
                  size={20}
                />
              </div>
            </div>

            {/* Join Talent Pool */}
            <div className="flex gap-0 items-center group w-full sm:w-auto">
              <button className={`${montserrat.className} rounded-full border border-[#007BFF] text-[#007BFF] px-6 py-2 text-lg font-medium hover:bg-blue-50 transition`}>
                Join Our Talent Pool
              </button>
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                  group-hover:bg-[#007BFF] group-hover:text-white ml-2`}
              >
                <FiArrowUpRight
                  className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-[#007BFF] py-3 sm:py-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#007BFF] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#007BFF] to-transparent z-10"></div>

        <div
          className={`flex items-center gap-6 sm:gap-8 md:gap-12 whitespace-nowrap ${montserrat.className} text-white`}
          style={{
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: "clamp(16px, 4vw, 25px)",
            animation: "scroll-x 20s linear infinite",
            minWidth: "200%",
          }}
        >
          <span>Enterprises served</span>
          <span>&bull;</span>
          <span>24-hour turnaround for initial shortlist</span>
          <span>&bull;</span>
          <span>Expertise spanning engineering to leadership</span>
          <span>&bull;</span>
          <span className="ml-8 sm:ml-16">Enterprises served</span>
          <span>&bull;</span>
          <span>24-hour turnaround for initial shortlist</span>
          <span>&bull;</span>
          <span>Expertise spanning engineering to leadership</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}