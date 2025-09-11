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
      className={`bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)]
        min-h-[calc(100vh-90px)] flex items-center w-full transition-opacity duration-700 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/images/about1.jpg"
            alt="Hire Smarter"
            width={600}
            height={465}
            className="rounded-[20px] sm:rounded-[30px] object-cover w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left mt-8 md:mt-0 lg:mt-0">
          {/* Heading */}
          <h1
            className={`${montserrat.className} text-[28px] sm:text-[34px] lg:text-[38px] font-bold leading-[120%] text-[#252525] mb-4`}
          >
            Hire Faster, Hire Smarter
          </h1>

          {/* Small Image */}
          <div className="mb-4 flex justify-center md:justify-start">
            <Image
              src="/images/hirefast2.png"
              alt="Hire Smarter"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>

          {/* Paragraph */}
          <p
            className={`${dmSans.className} mt-10 sm:mt-0 md:mt-10 lg:mt-0 text-[15px] sm:text-[16px] lg:text-[18px] leading-relaxed text-[#909090] mb-6 sm:mb-8`}
          >
            We deliver recruitment solutions tailored to your growth stage.
            Whether you’re hiring engineers at scale or searching for your next
            CXO, we bring speed, expertise, and a network you can trust.
          </p>

          {/* Button */}
          <div className="flex gap-2 items-center justify-center md:justify-start group">
            <button
            onClick={() => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
              className={`${dmSans.className} w-[150px] sm:w-[163px] h-[44px] sm:h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}
            >
              Request Talent
            </button>
            <div
            onClick={() => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }}
              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
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
