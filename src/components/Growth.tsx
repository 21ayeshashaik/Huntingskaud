"use client";

import React, { useEffect, useState, useRef } from "react";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export default function GrowthPartners() {
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleLeft(true);
          observerLeft.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (leftRef.current) observerLeft.observe(leftRef.current);

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleRight(true);
          observerRight.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
    };
  }, []);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 xl:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center">
        
        {/* Left Side */}
        <div
          ref={leftRef}
          className={`transition-opacity duration-700 ease-out transform ${
            visibleLeft ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Heading */}
          <h2
            className={`${montserrat.className} text-2xl sm:text-3xl md:text-[32px] lg:text-[30px] leading-snug md:leading-[48px] font-bold text-gray-900`}
          >
            We Are More Than Recruiters <br />
            We’re Growth Partners
          </h2>

          {/* Counts */}
          <div className="mt-8 sm:mt-12 md:mt-16  flex flex-wrap gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {/* Professionals */}
            <div className="flex-1 min-w-[120px]">
              <p
                className={`${dmSans.className} text-2xl sm:text-3xl md:text-[35px] leading-[34px] italic font-semibold text-[#007BFF]`}
              >
                10K+
              </p>
              <p
                className={`${dmSans.className} text-base sm:text-lg md:text-[18px] leading-[26px] font-normal text-[#7F7F7F]`}
              >
                Professionals
              </p>
            </div>

            {/* Business Partnered */}
            <div className="flex-1 min-w-[120px]">
              <p
                className={`${dmSans.className} text-2xl sm:text-3xl md:text-[35px] leading-[34px] italic font-semibold text-[#007BFF]`}
              >
                200+
              </p>
              <p
                className={`${dmSans.className} text-base sm:text-lg md:text-[18px] leading-[26px] font-normal text-[#7F7F7F]`}
              >
                Business Partnered
              </p>
            </div>

            {/* Sector Jobs */}
            <div className="flex-1 min-w-[120px]">
              <p
                className={`${dmSans.className} text-2xl sm:text-3xl md:text-[35px] leading-[34px] italic font-semibold text-[#007BFF]`}
              >
                10+
              </p>
              <p
                className={`${dmSans.className} text-base sm:text-lg md:text-[18px] leading-[26px] font-normal text-[#7F7F7F]`}
              >
                Sector Jobs
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div
          ref={rightRef}
          className={`space-y-5 sm:space-y-6 transition-opacity duration-700 ease-out transform delay-200 ${
            visibleRight ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className={`${dmSans.className} text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed text-[#7F7F7F]`}
          >
            At Hunting Skaud, we are architects of career success and business
            growth. Established with a vision to redefine recruitment, we bring
            a people-centric, innovative, and ethical approach to talent
            acquisition.
          </p>

          <p
            className={`${dmSans.className} text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed text-[#7F7F7F]`}
          >
            Our Mission: Empowering Careers, Elevating Businesses. We focus on
            building long-term partnerships and thriving, dynamic teams.
          </p>

          <p
            className={`${dmSans.className} text-sm sm:text-base md:text-[16px] lg:text-[18px] leading-relaxed text-[#7F7F7F]`}
          >
            Our Motto: Great teams build great organizations.
          </p>
        </div>
      </div>
    </section>
  );
}
