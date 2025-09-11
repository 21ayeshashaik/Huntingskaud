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
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`flex flex-col lg:flex-row justify-between items-start gap-y-10 lg:gap-x-12 py-10 px-5 sm:px-8 md:px-16 lg:px-20 xl:px-28 2xl:px-40 transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Left Side */}
      <div className="lg:w-5/12 max-w-[600px] space-y-6">
        <h2
          className={`${montserrat.className} font-bold text-[#3D3D3D]`}
          style={{
            fontSize: "clamp(1.5rem, 2.5vw, 2.5rem)", // responsive: ~24px → 40px
            lineHeight: "clamp(2rem, 3vw, 3rem)", // responsive line height
          }}
        >
          We built the recruitment partner we always wished we had, so you don’t have to search alone.
        </h2>
      </div>

      {/* Right Side */}
      <div className="lg:w-6/12 max-w-[750px] space-y-6">
        <p
          className={`${dmSans.className} text-[#7F7F7F]`}
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.125rem)", // 16px → 18px
            lineHeight: "clamp(1.5rem, 2vw, 2.2rem)", // 24px → 35px
          }}
        >
          At Hunting Skuad, we began with a vision to redefine recruitment. Too often, hiring felt transactional, slow, and misaligned with what businesses and professionals truly needed. We wanted to change that by creating a people-first, innovation-driven approach that goes beyond filling roles.
        </p>
        <p
          className={`${dmSans.className} text-[#7F7F7F]`}
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.125rem)",
            lineHeight: "clamp(1.5rem, 2vw, 2.2rem)",
          }}
        >
          Our mission has always been clear: to empower careers and elevate businesses. We connect ambitious startups and enterprises with leaders and professionals who make a real difference. By combining speed, precision, and deep industry understanding, we ensure companies build strong teams while professionals find meaningful opportunities.
        </p>
        <p
          className={`${dmSans.className} text-[#7F7F7F]`}
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.125rem)",
            lineHeight: "clamp(1.5rem, 2vw, 2.2rem)",
          }}
        >
          Because at the end of the day, great teams build great organizations. Behind every breakthrough product, every market expansion, and every success story are people who dream, create, and deliver together—and we’re here to make those connections possible.
        </p>
      </div>
    </section>
  );
}
