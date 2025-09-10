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
      className={`w-full py-12 sm:py-16 lg:py-24 bg-white transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 lg:gap-12 px-4 sm:px-6 lg:px-12">
        {/* Left Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/images/contactus2.jpg" // replace with your actual image path
            alt="Hire Smarter"
            width={600}
            height={465}
            className="rounded-[20px] sm:rounded-[30px] object-cover w-full max-w-[500px] h-auto"
            priority
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
          {/* Heading */}
          <h1
            className={`${montserrat.className} font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-snug text-[#252525] mb-4 sm:mb-6`}
          >
            Your Next Big Career Move Starts Here
          </h1>

          {/* Paragraph */}
          <p
            className={`${dmSans.className} text-base sm:text-lg md:text-[18px] leading-relaxed text-[#909090] mb-6 sm:mb-8`}
          >
            We connect ambitious professionals with meaningful opportunities in startups and enterprises. Whether you’re looking to grow your career in technology or leadership, we help you find roles that truly matter.
          </p>

          {/* Button */}
          <div className="flex gap-2 items-center group">
            <button
              className={`${dmSans.className} bg-[#007BFF] text-white rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium hover:bg-blue-600 transition`}
            >
              Submit Your CV
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
    </section>
  );
}
