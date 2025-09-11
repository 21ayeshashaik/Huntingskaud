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
      className={`bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] pt-10 pb-10 w-full transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Centered Text */}
      <div className="max-w-7xl mx-auto mb-14 px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`${montserrat.className} font-bold text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[120%] text-[#23272A] mb-2`}
        >
          We Are More Than Recruiters
        </h1>
        <div
          className={`${montserrat.className} italic font-normal text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] leading-[120%] text-[#007BFF] mb-6`}
        >
          We’re Growth Partners
        </div>
        <p
          className={`${dmSans.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#909090] leading-[22px] sm:leading-[26px] md:leading-[28px] lg:leading-[31px] max-w-4xl mx-auto`}
        >
          We don’t just fill roles—we help build the teams that power innovation
          and growth. At Hunting Skaud, every hire is about creating lasting
          impact for both people and businesses.
        </p>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="overflow-hidden relative max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 whitespace-nowrap animate-scroll">
          {[...images, ...images].map((src, idx) => (
            <div key={idx} className="flex-shrink-0">
              <Image
                src={src}
                alt={`Team pic ${idx + 1}`}
                width={400}
                height={300}
                className="rounded-[20px] md:rounded-[30px] object-cover 
                  w-[140px] h-[100px] sm:w-[180px] sm:h-[130px] 
                  md:w-[240px] md:h-[180px] lg:w-[300px] lg:h-[220px]
                  xl:w-[340px] xl:h-[250px]"
                priority={idx < images.length} // prioritize first set of images
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
          animation: scroll 25s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
