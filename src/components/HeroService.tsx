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
        <div className="flex flex-col items-start max-w-xl">
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
          <h1 className="text-[40px] leading-[100%] mb-6">
            <span className={`${montserrat.className} font-bold text-[#252525]`}>
              Your Partner in Building{" "}
            </span>
            <span className={`${montserrat.className} italic font-normal text-[#007BFF]`}>
              Winning Teams
            </span>
          </h1>

          {/* Paragraph */}
          <p className={`${dmSans.className} text-[18px] leading-[36px] text-[#909090] mb-8`}>
            We combine deep startup expertise, leadership insights, and a
            research-driven approach to connect businesses with professionals
            who don’t just fit roles but strengthen organizations.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 items-center">
            {/* Hire Talent */}
            <div className="flex gap-0 items-center group">
              <button
                className={`${dmSans.className} w-[163px] h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}
              >
                Hire Talent
              </button>
              <div
                className={`w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                  group-hover:bg-[#007BFF] group-hover:text-white`}
              >
                <FiArrowUpRight
                  className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
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
                  className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
                  size={24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
