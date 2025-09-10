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
      className={`w-full flex justify-center px-4 py-8 sm:py-12 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div
        className="
         bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] 
          rounded-[40px] sm:rounded-[40px] 
          flex flex-col items-center justify-center text-center
          w-full max-w-[1000px] 
          px-4 sm:px-8 md:px-12
          py-8 sm:py-12 md:py-16
        "
      >
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-bold text-[#007BFF]
            text-[22px] sm:text-[28px] md:text-[32px] 
            leading-snug sm:leading-[100%] mb-4`}
        >
          Fueling Growth with Tech and Leadership Expertise
        </h2>

        {/* Paragraph */}
        <p
          className={`${dmSans.className} text-[#3D3D3D]
            text-[14px] sm:text-[16px] md:text-[18px] 
            leading-[24px] sm:leading-[28px] md:leading-[32px] 
            max-w-4xl`}
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
