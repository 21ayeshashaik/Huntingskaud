"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const cards = [
  {
    img: "/images/100+.png",
    title: "100+ Clients Served",
    desc: "Trusted by early-stage startups and established enterprises alike.",
  },
  {
    img: "/images/journey3.png",
    title: "Leadership Expertise",
    desc: "From junior to senior managers, we hire the full spectrum",
  },
  {
    img: "/images/flexible.png",
    title: "Flexible Models",
    desc: "Flexible hiring models – one-time, ongoing, or executive search",
  },
  {
    img: "/images/ethical.png",
    title: "Focus on Retention",
    desc: "Our process prioritizes cultural fit and long-term placements",
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
      className={`py-16 bg-white transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-semibold text-2xl sm:text-3xl md:text-4xl text-[#3D3D3D] text-center mb-6 leading-snug sm:leading-tight`}
        >
          Why Leading Startups & Enterprises Trust Us
        </h2>

        <div className="flex flex-col items-center justify-center h-full mb-12 px-4 sm:px-0">
          <p
            className={`${dmSans.className} text-base sm:text-lg md:text-xl text-center font-normal leading-relaxed sm:leading-relaxed max-w-2xl text-[#7F7F7F]`}
          >
            With over 100 clients served, we combine startup agility, leadership
            expertise, and data-driven insights to deliver the right talent—fast
            and reliably.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-8">
  {cards.map((card) => (
    <div
      key={card.title}
      className="bg-[#EEEEEE] rounded-[20px] flex-1 min-w-[220px] max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm h-auto py-8 px-6 text-center flex flex-col justify-start shadow-sm"
    >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white flex items-center justify-center shadow-md">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title */}
              <h3
                className={`${montserrat.className} font-semibold text-lg sm:text-xl md:text-lg text-[#3D3D3D] leading-7 mb-3`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`${dmSans.className} text-sm sm:text-base md:text-sm font-normal text-[#7F7F7F] leading-6`}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
