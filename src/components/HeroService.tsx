"use client";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection() {
  return (
    <section className="bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 lg:px-12">
        
        {/* Left Image - hidden on small screens */}
        <div className="hidden md:flex-shrink-0 md:block">
          <Image
            src="/images/service_side.png"
            alt="Hire Smarter"
            width={550}
            height={450}
            className="rounded-[30px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          {/* Icon above heading */}
          <div className="flex-shrink-0 mb-4">
            <Image
              src="/images/hirefast2.png"
              alt="Hire Smarter"
              width={100}
              height={100}
              className="rounded-[30px] object-cover"
            />
          </div>

          {/* Heading with mixed styles */}
          <h1 className="text-[38px] lg:text-[38px] xl:text-[42px] 2xl:text-[48px] leading-[100%] mb-6">
            <span className={`${montserrat.className} font-bold text-[#252525]`}>
              Your Partner in Building{" "}
            </span>
            <span className={`${montserrat.className} italic font-normal text-[#007BFF]`}>
              Winning Teams
            </span>
          </h1>

          {/* Paragraph */}
          <p className={`${dmSans.className} text-[18px] lg:text-[19px] xl:text-[20px] 2xl:text-[21px] leading-[36px] lg:leading-[38px] xl:leading-[40px] 2xl:leading-[42px] text-[#909090] mb-8`}>
            We combine deep startup expertise, leadership insights, and a
            research-driven approach to connect businesses with professionals
            who don't just fit roles but strengthen organizations.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            {/* Hire Talent Button */}
            <div className="flex items-center group w-full sm:w-auto gap-0 transition-all duration-700 ease-in-out hover:gap-3">
              <div className="relative overflow-hidden">
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${dmSans.className} w-[180px] h-[45px] sm:h-[46px] md:h-[47px] lg:h-[48px] xl:h-[50px] 2xl:h-[52px] bg-[#007BFF] text-white rounded-full flex items-center justify-center gap-0 hover:bg-blue-500 transition-all duration-300 hover:shadow-lg`}
                >
                  Hire Talent
                </button>
              </div>
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

            {/* Join Talent Pool Button */}
            <div className="flex items-center group w-full sm:w-auto gap-0 transition-all duration-700 ease-in-out hover:gap-3">
              <div className="relative overflow-hidden">
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`${montserrat.className} w-full sm:w-[200px] h-[45px] sm:h-[46px] md:h-[47px] lg:h-[48px] xl:h-[50px] 2xl:h-[52px] border border-[#007BFF] text-[#007BFF] rounded-full px-4 py-2 text-[14px] sm:text-[15px] md:text-[15px] lg:text-[16px] xl:text-[17px] 2xl:text-[18px] font-medium hover:bg-[#007BFF] hover:text-white transition-all duration-400 whitespace-nowrap hover:shadow-lg`}
                >
                  Join Our Talent Pool
                </button>
              </div>
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
    </section>
  );
}