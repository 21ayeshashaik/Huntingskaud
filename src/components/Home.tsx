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
      <div className="relative mx-auto h-full flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pb-16 sm:pb-18 md:pb-20 lg:pb-22 xl:pb-24 2xl:pb-28">
        <div className="w-full max-w-xl lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
          {/* Main Heading */}
          <h1 className={`${montserrat.className} text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] xl:text-[38px] 2xl:text-[44px] leading-[110%] md:leading-[100%] lg:leading-[105%] xl:leading-[100%] 2xl:leading-[95%] text-gray-900`}>
            <span className="font-bold not-italic block">Connecting Startups with</span>
            <span className="font-normal italic text-blue-600 block">Tech & Leadership Talent</span>
          </h1>

          {/* Description Text */}
          <p className={`${dmSans.className} mt-3 sm:mt-4 md:mt-5 lg:mt-5 xl:mt-6 2xl:mt-7 text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[16px] xl:text-[17px] 2xl:text-[19px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[28px] xl:leading-[30px] 2xl:leading-[32px] max-w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl`}>
            We help ambitious startups and enterprises scale faster by delivering top technology professionals and trusted executive leaders. From engineers to C-suite, our mission is to empower careers and elevate businesses through meaningful placements.
          </p>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-7 2xl:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-5 xl:gap-6 2xl:gap-7 flex-wrap">
            
            {/* Hire Talent Button */}
            <div className="flex gap-0 items-center group w-full sm:w-auto">
              <button onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }} className={`${dmSans.className} w-[140px] sm:w-[150px] md:w-[160px] lg:w-[165px] xl:w-[175px] 2xl:w-[185px] h-[42px] sm:h-[44px] md:h-[46px] lg:h-[47px] xl:h-[49px] 2xl:h-[51px] bg-[#007BFF] text-white rounded-full flex items-center justify-center gap-2 hover:bg-blue-600 transition text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] font-medium`}>
                Hire Talent
              </button>
              <div onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-[#007BFF] group-hover:text-white ml-2">
                <FiArrowUpRight className="text-[#007BFF] group-hover:text-white group-hover:rotate-45 transition-transform duration-300" size={18} />
              </div>
            </div>

            {/* Join Talent Pool Button */}
            <div className="flex gap-0 items-center group w-full sm:w-auto">
              <button onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }} className={`${montserrat.className} w-[140px]h-[42px] sm:h-[44px] md:h-[46px] lg:h-[47px] xl:h-[49px] 2xl:h-[51px] border border-[#007BFF] text-[#007BFF] rounded-full px-4 py-2 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[17px] font-medium hover:bg-blue-50 transition whitespace-nowrap`}>
                Join Our Talent Pool
              </button>
              <div onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }} className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-[#007BFF] group-hover:text-white ml-2">
                <FiArrowUpRight className="text-[#007BFF] group-hover:text-white group-hover:rotate-45 transition-transform duration-300" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee - Fixed positioning */}
      <div className="absolute bottom-0 left-0 right-0 w-full bg-[#007BFF] py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3 2xl:py-4 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16 bg-gradient-to-r from-[#007BFF] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16 bg-gradient-to-l from-[#007BFF] to-transparent z-10"></div>
        <div className={`flex items-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10 whitespace-nowrap ${montserrat.className} text-white`} style={{ fontWeight: 600, fontStyle: "italic", fontSize: "clamp(13px, 2.2vw, 26px)", animation: "scroll-x 25s linear infinite", minWidth: "200%" }}>
          <span>Enterprises served</span>
          <span>&bull;</span>
          <span>24-hour turnaround for initial shortlist</span>
          <span>&bull;</span>
          <span>Expertise spanning engineering to leadership</span>
          <span>&bull;</span>
          <span className="ml-6 sm:ml-8 md:ml-10 lg:ml-12 xl:ml-14 2xl:ml-16">Enterprises served</span>
          <span>&bull;</span>
          <span>24-hour turnaround for initial shortlist</span>
          <span>&bull;</span>
          <span>Expertise spanning engineering to leadership</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}