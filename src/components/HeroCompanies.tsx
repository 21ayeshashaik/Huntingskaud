"use client";

import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "400"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "400", style: "normal" });

export default function HeroSection() {
  return (
    <section className="bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] relative w-full bg-white">
      <div className="relative mx-auto max-w-7xl py-20 px-4 sm:px-6 lg:px-20 xl:px-24 2xl:px-32 h-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16 2xl:gap-20">
        {/* Left Content */}
        <div className="max-w-2xl text-center lg:text-left xl:max-w-3xl 2xl:max-w-4xl">
          <h1
            className={`${montserrat.className} text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] xl:text-[38px] leading-tight text-gray-900`}
          >
            <span className="font-bold not-italic block mb-1">
              Why Companies Choose
            </span>
            <span className="font-normal italic text-[#007BFF] block">
              Hunting Skuad
            </span>
          </h1>

          <p
            className={`${dmSans.className} font-normal not-italic text-base sm:text-lg md:text-[18px] lg:text-md xl:text-xl 2xl:text-2xl leading-relaxed text-[#909090] max-w-md mx-auto lg:mx-0 mt-4 sm:mt-6`}
          >
            We combine deep startup expertise, leadership insights, and a
            research-driven approach to connect businesses with professionals
            who don&apos;t just fit roles but strengthen organizations.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            {/* Hire Talent Button */}
            <div className="flex items-center group w-full sm:w-auto">
              <div className="relative overflow-hidden">
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${dmSans.className} w-[165px] h-[45px] sm:h-[46px] md:h-[47px] lg:h-[48px] xl:h-[50px] 2xl:h-[52px] bg-[#007BFF] text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                >
                  Hire Talent
                </button>
              </div>
              <div className="ml-2 flex-shrink-0">
                <div
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-11 2xl:h-11 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out group-hover:bg-[#007BFF] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:translate-x-2"
                >
                  <FiArrowUpRight
                    className="text-[#007BFF] group-hover:text-white transition-all duration-700 ease-in-out group-hover:rotate-45 group-hover:scale-125"
                    size={18}
                  />
                </div>
              </div>
            </div>

            {/* Join Talent Pool Button */}
            <div className="flex items-center group w-full sm:w-auto">
              <div className="relative overflow-hidden">
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${montserrat.className} w-full sm:w-[200px] h-[45px] sm:h-[46px] md:h-[47px] lg:h-[48px] xl:h-[50px] 2xl:h-[52px] border border-[#007BFF] text-[#007BFF] rounded-full px-4 py-2 text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-medium hover:bg-[#007BFF] hover:text-white transition-all duration-400 whitespace-nowrap hover:shadow-lg hover:scale-[1.02]`}
                >
                  Join Our Talent Pool
                </button>
              </div>
              <div className="ml-2 flex-shrink-0">
                <div
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 xl:w-11 xl:h-11 2xl:w-11 2xl:h-11 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out group-hover:bg-[#007BFF] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:translate-x-2"
                >
                  <FiArrowUpRight
                    className="text-[#007BFF] group-hover:text-white transition-all duration-700 ease-in-out group-hover:rotate-45 group-hover:scale-125"
                    size={18}
                  />
                </div>
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
            className="object-contain w-[80%] sm:w-[70%] md:w-[60%] lg:w-[700px] xl:w-[560px] 2xl:w-[600px] h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}