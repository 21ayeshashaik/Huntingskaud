"use client";

import React, { useEffect, useState, useRef } from "react";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HireSection() {
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
      className={`flex flex-col md:flex-row justify-between gap-y-8 md:gap-x-6 py-12 px-6 md:px-24 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left Side */}
      <div className="md:w-5/12 max-w-[550px] space-y-6 md:self-start">
        <h2
          className={`${montserrat.className} font-bold text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-[#3D3D3D]`}
        >
          We built the recruitment partner we always wished we had, so you don’t have to search alone.
        </h2>
      </div>

      {/* Right Side */}
      <div className="md:w-5/12 max-w-[650px] space-y-5 md:self-start">
        <p className={`${dmSans.className} text-[16px] md:text-[18px] leading-[22px] md:leading-[35px] text-[#7F7F7F]`}>
          At Hunting Skuad, we began with a vision to redefine recruitment. Too often, hiring felt transactional, slow, and misaligned with what businesses and professionals truly needed. We wanted to change that by creating a people-first, innovation-driven approach that goes beyond filling roles.
        </p>
        <p className={`${dmSans.className} text-[16px] md:text-[18px] leading-[22px] md:leading-[35px] text-[#7F7F7F]`}>
          Our mission has always been clear: to empower careers and elevate businesses. We connect ambitious startups and enterprises with leaders and professionals who make a real difference. By combining speed, precision, and deep industry understanding, we ensure companies build strong teams while professionals find meaningful opportunities.
        </p>
        <p className={`${dmSans.className} text-[16px] md:text-[18px] leading-[22px] md:leading-[35px] text-[#7F7F7F]`}>
          Because at the end of the day, great teams build great organizations. Behind every breakthrough product, every market expansion, and every success story are people who dream, create, and deliver together—and we’re here to make those connections possible.
        </p>
      </div>
    </section>
  );
}
