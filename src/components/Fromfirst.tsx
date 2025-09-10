"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const cards = [
  {
    title: "Discover",
    text: "We begin by understanding your unique requirements and leveraging our network to identify the most relevant, high-quality candidates.",
    icon: "/images/journey1.png",
  },
  {
    title: "Engage",
    text: "We maintain transparent communication, ensuring candidates remain , informed, and aligned with your company’s culture.",
    icon: "/images/ethical.png",
  },
  {
    title: "Consult",
    text: "We share actionable market insights and expert guidance, empowering candidates and future-focused hiring decisions.",
    icon: "/images/tech.png",
  },
  {
    title: "Review",
    text: "We implement feedback loops, consistently refining our process to improve accuracy, efficiency, and deliver stronger, more effective recruitment outcomes every time.",
    icon: "/images/eye.png",
  },
  {
    title: "Finalize",
    text: "We achieve lasting placements by aligning ambition with opportunity, ensuring the right talent strengthens growth, culture, and organizational success seamlessly.",
    icon: "/images/deep.png",
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
      className={`py-16 bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <h2
        className={`${montserrat.className} font-semibold text-[28px] sm:text-[32px] text-[#3D3D3D] text-center mb-6 leading-[1.4]`}
      >
        Why Startups & Enterprises Trust Us
      </h2>
      <p
        className={`${dmSans.className} text-[16px] sm:text-[18px] text-center font-normal leading-[1.8] mb-14 text-[#7F7F7F] max-w-3xl mx-auto`}
      >
        At Hunting Skuad, we combine startup agility, deep expertise, and
        transparent practices to deliver precise, lasting placements. Clients
        trust us for speed, insight, and partnerships that drive meaningful
        growth.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col h-full py-8 px-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon + Title */}
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

            {/* Description */}
            <p
              className={`${dmSans.className} text-[15px] sm:text-[16px] font-normal text-[#7F7F7F] leading-[1.6] flex-grow`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
