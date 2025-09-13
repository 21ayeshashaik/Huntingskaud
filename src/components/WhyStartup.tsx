"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const cards = [
  {
    title: "Deep Startup Focus",
    text: "We understand the DNA of startups, where agility and speed are crucial. We adapt to your journey.",
    icon: "/images/deep.png",
  },
  {
    title: "Tech + Leadership Expertise",
    text: "From SDEs to CTOs, from product leaders to non–tech CXOs, we cover the full spectrum of hiring needs.",
    icon: "/images/tech.png",
  },
  {
    title: "Speed + Precision",
    text: "Our structured process enables us to deliver a curated shortlist in just 24 hours, balancing urgency with quality.",
    icon: "/images/speed.png",
  },
  {
    title: "Partnership Mindset",
    text: "We work as an extension of your team, focused on your business goals rather than just filling roles.",
    icon: "/images/partnership.png",
  },
  {
    title: "Research-Driven Approach",
    text: "Every search is backed by talent mapping, market intelligence, and data–driven insights.",
    icon: "/images/research.png",
  },
  {
    title: "Integrity",
    text: "Integrity drives our approach. Clients trust us for clear communication, fair practices, and lasting relationships.",
    icon: "/images/tech2.png",
  },
];

export default function ValuesSection() {
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
      className={`py-12 sm:py-16 lg:py-20 bg-white max-w-7xl mx-auto 
      px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-24
      transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <h2
        className={`${montserrat.className} font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#3D3D3D] text-center mb-6 leading-[1.4]`}
      >
        Why Startups & Enterprises Trust Us
      </h2>
      <p
        className={`${dmSans.className} text-[15px] sm:text-[16px] lg:text-[18px] text-center font-normal leading-[1.8] mb-10 sm:mb-14 text-[#7F7F7F] max-w-5xl mx-auto`}
      >
        At Hunting Skuad, we combine startup agility, deep expertise, and
        transparent practices to deliver precise, lasting placements. Clients
        trust us for speed, insight, and partnerships that drive meaningful
        growth.
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col bg-[#EEEEEE] h-full py-8 px-6 rounded-[25px] hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col items-start gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3
                className={`${montserrat.className} font-semibold text-[18px] sm:text-[20px] text-[#3D3D3D] leading-[1.4]`}
              >
                {card.title}
              </h3>
            </div>
            <p
              className={`${dmSans.className} text-[15px] sm:text-[16px] text-[#7F7F7F] leading-[1.6] flex-grow`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
