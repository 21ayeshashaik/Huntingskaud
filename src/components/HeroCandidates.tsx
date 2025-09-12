"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={` bg-gradient-to-br from-sky-200 to-purple-100 
      w-full min-h-[calc(100vh-90px)] flex items-center transition-opacity duration-700 ease-out transform 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-0">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/contactus2.jpg"
            alt="Hire Smarter"
            width={600}
            height={465}
            className="rounded-[20px] lg:rounded-[30px] object-cover w-full h-auto"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start max-w-xl md:w-1/2 text-left mt-6 md:mt-0">
          {/* Heading */}
          <h1
            className={`${montserrat.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[36px] font-bold leading-tight text-[#252525] mb-4 sm:mb-6`}
          >
            Your Next Big Career Move Starts Here
          </h1>

          {/* Paragraph */}
          <p
            className={`${dmSans.className} text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#909090] mb-6 sm:mb-8`}
          >
            We connect ambitious professionals with meaningful opportunities in
            startups and enterprises. Whether you’re looking to grow your career
            in technology or leadership, we help you find roles that truly
            matter.
          </p>

          {/* Button */}
          <div className="flex items-center group w-full sm:w-auto gap-0 transition-all duration-700 ease-in-out hover:gap-4">
            <button
            onClick={() => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
              className={`${dmSans.className} w-[150px] sm:w-[163px] h-[44px] sm:h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-500 transition transition-all duration-400 whitespace-nowrap hover:shadow-lg hover:scale-[1.02]`}
            >
              Submit Your CV
            </button>
            <div
            onClick={() => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
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
    </section>
  );
}
