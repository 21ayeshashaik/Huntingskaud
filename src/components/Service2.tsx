"use client";
import React, { useEffect, useState, useRef } from "react";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function GrowthSection() {
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
      className={`w-full flex justify-center px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 
        py-8 sm:py-12 md:py-16 lg:py-20 
        transition-opacity duration-700 ease-out transform 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <div
        className="
          bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] 
          rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[48px]
          flex flex-col items-center justify-center text-center
          w-full max-w-[1200px] 
          px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 
          py-8 sm:py-12 md:py-16 lg:py-20
        "
      >
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-bold text-[#007BFF]
            text-[20px] sm:text-[26px] md:text-[32px] lg:text-[34px] xl:text-[32px]
            leading-tight mb-4 sm:mb-6`}
        >
          Fueling Growth with Tech and Leadership Expertise
        </h2>

        {/* Paragraph */}
        <p
          className={`${dmSans.className} text-[#3D3D3D]
            text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[18px]
            leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px] xl:leading-[36px]
            max-w-3xl sm:max-w-4xl lg:max-w-5xl`}
        >
          With proven expertise across technology and leadership hiring, we
          empower organizations to scale faster and smarter. Our research-driven,
          ethical approach ensures long-term success for both businesses and
          professionals.
        </p>
      </div>
    </section>
  );
}
