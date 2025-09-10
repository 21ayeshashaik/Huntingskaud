"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

const images = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
  "/images/about4.jpg",
  "/images/about5.jpg",
];

export default function GrowthPartnersSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<null | HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // Animate only once
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] pt-10 pb-6 w-full transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Centered Text */}
      <div className="max-w-7xl mx-auto mb-12 px-4 text-center">
        <h1
          className={`${montserrat.className} font-bold text-[28px] lg:text-[40px] leading-[120%] text-[#23272A] mb-1`}
        >
          We Are More Than Recruiters
        </h1>
        <div
          className={`${montserrat.className} italic font-normal text-[28px] lg:text-[40px] leading-[120%] text-[#007BFF] mb-5`}
        >
          We’re Growth Partners
        </div>
        <div
          className={`${dmSans.className} text-[16px] md:text-[18px] font-normal text-[#909090] leading-[28px] md:leading-[31px] max-w-3xl mx-auto`}
        >
          We don’t just fill roles—we help build the teams that power innovation
          and growth. At Hunting Skaud, every hire is about creating lasting
          impact for both people and businesses.
        </div>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="overflow-hidden relative">
        <div className="flex gap-4 animate-scroll">
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Team pic ${idx + 1}`}
                width={400}
                height={300}
                className="rounded-[20px] md:rounded-[30px] object-cover w-[180px] h-[130px] sm:w-[220px] sm:h-[160px] md:w-[300px] md:h-[220px] lg:w-[300px] lg:h-[220px]"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation for infinite scroll */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite; /* slowed for smoother look */
          width: max-content;
        }
      `}</style>
    </section>
  );
}
