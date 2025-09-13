"use client";

import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "400"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] h-[calc(100vh-80px)] overflow-hidden">
      {/* Right-side Hero Image */}
      <div
        className="hidden lg:block absolute top-[8%] right-[3%] h-[75%] w-[38%] xl:h-[80%] xl:w-[40%] 2xl:h-[82%] 2xl:w-[42%] bg-no-repeat bg-contain bg-right-center"
        style={{ backgroundImage: `url(/images/hero_bg.png)` }}
      />

      {/* Content Container */}
      <div className="relative pt-6 sm:pt-8 md:pt-6 lg:pt-6 xl:pt-7 2xl:pt-8 mx-auto h-full flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14 2xl:px-16 pb-14 sm:pb-16 md:pb-16 lg:pb-18 xl:pb-20 2xl:pb-24">
        <div className="w-full max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl space-y-6 sm:space-y-5 md:space-y-4">
          {/* Main Heading */}
          <h1
            className={`${montserrat.className} text-[28px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[38px] 2xl:text-[44px] leading-[120%] sm:leading-[115%] md:leading-[110%] lg:leading-[105%] xl:leading-[100%] 2xl:leading-[95%] text-gray-900`}
          >
            <span className="font-bold not-italic block mb-0 sm:mb-0 md:mb-2 lg:mb-2 ">
              Connecting Startups with
            </span>
            <span className="font-normal italic text-blue-600 block">
              Tech & Leadership Talent
            </span>
          </h1>

          {/* Description Text */}
          <p
            className={`${dmSans.className} text-gray-700 text-[15px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px] leading-[26px] sm:leading-[28px] md:leading-[28px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px] max-w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl`}
          >
            We help ambitious startups and enterprises scale faster by delivering
            top technology professionals and trusted executive leaders. From
            engineers to C-suite, our mission is to empower careers and elevate
            businesses through meaningful placements.
          </p>

          {/* Action Buttons */}
          {/* Action Buttons */}
<div className="flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 gap-x-3 sm:gap-x-4 md:gap-x-5 lg:gap-x-5 xl:gap-x-6 2xl:gap-x-8 flex-wrap pt-2">
  {/* Hire Talent Button */}
  <div className="flex items-center group w-full sm:w-auto gap-0 transition-all duration-700 ease-in-out hover:gap-3">
    <button
      onClick={() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }}
      className={`${dmSans.className} w-full sm:w-[150px] md:w-[160px] lg:w-[165px] xl:w-[175px] 2xl:w-[185px] h-[45px] sm:h-[46px] md:h-[47px] lg:h-[48px] xl:h-[50px] 2xl:h-[52px] bg-[#007BFF] text-white rounded-full flex items-center justify-center gap-0 hover:bg-blue-500 transition-all duration-300 hover:shadow-lg`}
    >
      Hire Talent
    </button>
    <div
      onClick={() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }}
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-11 2xl:h-11 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-500 ease-out group-hover:bg-[#007BFF] group-hover:text-white group-hover:ml-0"
    >
      <FiArrowUpRight
        className="text-[#007BFF] group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-45"
        size={18}
      />
    </div>
  </div>

  {/* Join Talent Pool Button */}
  <div className="flex items-center group w-full sm:w-auto gap-0 transition-all duration-700 ease-in-out hover:gap-3">
    <button
      onClick={() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }}
      className={`${montserrat.className} w-full sm:w-[220px] h-[45px] sm:h-[46px] md:h-[47px] lg:h-[48px] xl:h-[50px] 2xl:h-[52px] border border-[#007BFF] text-[#007BFF] rounded-full px-4 py-2 text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-medium hover:bg-[#007BFF] hover:text-white transition-all duration-400 whitespace-nowrap hover:shadow-lg`}
    >
      Join Our Talent Pool
    </button>

    <div
      onClick={() => {
        const element = document.getElementById("contact");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }}
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-11 2xl:h-11 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out group-hover:bg-[#007BFF] group-hover:text-white"
    >
      <FiArrowUpRight
        className="text-[#007BFF] group-hover:text-white transition-all duration-700 ease-in-out group-hover:rotate-45"
        size={18}
      />
    </div>
  </div>
</div>

        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-[#007BFF] py-2 sm:py-3 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 bg-gradient-to-r from-[#007BFF] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 bg-gradient-to-l from-[#007BFF] to-transparent z-10"></div>
        <div
          className={`flex items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16 whitespace-nowrap ${montserrat.className} text-white`}
          style={{
            fontWeight: 600,
            fontStyle: "italic",
            fontSize: "clamp(13px, 2.2vw, 26px)",
            animation: "scroll-x 25s linear infinite",
            minWidth: "200%",
          }}
        >
          <span>Enterprises served</span>
          <span>&bull;</span>
          <span>24-hour turnaround for initial shortlist</span>
          <span>&bull;</span>
          <span>Expertise spanning engineering to leadership</span>
          <span>&bull;</span>
          <span className="ml-10 sm:ml-12 md:ml-14 lg:ml-16">
            Enterprises served
          </span>
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