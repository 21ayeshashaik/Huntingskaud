"use client";
import React, { useEffect, useState, useRef } from "react";
import { Montserrat, DM_Sans } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "600"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

const cards = [
  {
    title: "Deep Startup Focus",
    text: "We understand the DNA of startups, where agility and speed are crucial. We adapt to your journey.",
    icon: "/images/deep.svg",
  },
  {
    title: "Tech + Leadership Expertise",
    text: "From SDEs to CTOs, from product leaders to non–tech CXOs, we cover the full spectrum of hiring needs.",
    icon: "/images/tech.svg",
  },
  {
    title: "Speed + Precision",
    text: "Our structured process enables us to deliver a curated shortlist in just 24 hours, balancing urgency with quality.",
    icon: "/images/speed.svg",
  },
  {
    title: "Partnership Mindset",
    text: "We work as an extension of your team, focused on your business goals rather than just filling roles.",
    icon: "/images/patnership.svg",
  },
  {
    title: "Research-Driven Approach",
    text: "Every search is backed by talent mapping, market intelligence, and data–driven insights.",
    icon: "/images/research.svg",
  },
  {
    title: "Integrity",
    text: "Integrity drives our approach. Clients trust us for clear communication, fair practices, and lasting relationships.",
    icon: "/images/tech2.svg",
  },
];

export default function WhyCompanies() {
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
      className={`relative w-full bg-white 
        py-16 sm:py-20 lg:py-24 xl:py-28 2xl:py-36 3xl:py-40
        px-4 sm:px-10 lg:px-12 xl:px-20 2xl:px-32 3xl:px-48
        transition-opacity duration-700 ease-out transform
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <div className="mx-auto max-w-[1600px] grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 xl:gap-16 items-start relative z-20">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <h2
            className={`${montserrat.className} 
              text-[26px] sm:text-[32px] lg:text-[32px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[54px] 
              leading-tight font-bold text-gray-900`}
          >
            Why Companies <br /> Choose Us
          </h2>
          <p
            className={`${dmSans.className} 
              mt-6 max-w-[480px]
              text-[15px] sm:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] 3xl:text-[24px]
              leading-[24px] sm:leading-[28px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[38px]
              text-[#7F7F7F]`}
          >
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters.
          </p>
        </div>

        {/* Right Side - Responsive Grid */}
        <div
          className="
            lg:col-span-3 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3
            gap-6 lg:gap-8 xl:gap-10
          "
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-[#EEEEEE] rounded-[20px] 
                p-6 sm:p-7 lg:p-8 xl:p-9 2xl:p-10
                flex flex-col items-start shadow-md hover:shadow-lg transition"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 xl:w-22 xl:h-22 2xl:w-24 2xl:h-24 rounded-full bg-white flex items-center justify-center mb-3 shadow">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3
                className={`${montserrat.className} 
                  text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] 3xl:text-[26px] 
                  leading-[26px] font-semibold text-[#3D3D3D]`}
              >
                {card.title}
              </h3>
              <p
                className={`${dmSans.className} 
                  mt-2 
                  text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[20px] 
                  leading-[22px] sm:leading-[24px] lg:leading-[26px] xl:leading-[28px] 2xl:leading-[30px] 
                  text-[#7F7F7F]`}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background world map - scale + reposition for XL/2XL */}
      <div
        className="
          absolute 
          bottom-8 sm:bottom-12 lg:bottom-16 xl:bottom-20 2xl:bottom-24
          left-0 lg:left-6 xl:left-12 2xl:left-20 3xl:left-32
          w-[280px] sm:w-[380px] md:w-[480px] lg:w-[600px] xl:w-[720px] 2xl:w-[900px] 3xl:w-[1100px]
          h-[180px] sm:h-[240px] md:h-[320px] lg:h-[380px] xl:h-[460px] 2xl:h-[560px] 3xl:h-[680px]
          z-10
        "
      >
        <Image
          src="/images/world.png"
          alt="Background Map"
          fill
          className="object-contain opacity-60"
        />
      </div>
    </section>
  );
}
