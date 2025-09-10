"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const cards = [
  {
    img: "/images/access.png",
    title: "Access to Exclusive Roles",
    desc: "Discover handpicked opportunities you won’t find on public job boards",
  },
  {
    img: "/images/support.png",
    title: "Supportive Process",
    desc: "Get clear updates, honest feedback, and guidance at every stage",
  },
  {
    img: "/images/leadership.png",
    title: "Leadership Opportunities",
    desc: "Explore career paths from engineers to CXOs, across India and beyond.",
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
      className={`py-12 sm:py-16 bg-white transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-semibold text-2xl sm:text-3xl md:text-[32px] text-[#3D3D3D] text-center mb-3 leading-snug`}
        >
          What Sets Us Apart for Professionals
        </h2>
        <p
          className={`${dmSans.className} text-base sm:text-lg md:text-[18px] text-center font-normal leading-relaxed mb-10 sm:mb-11 text-[#7F7F7F]`}
        >
          Discover exclusive roles, receive transparent support, and explore both
          tech and leadership career paths.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-center items-stretch">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-[#EEEEEE] rounded-2xl w-full max-w-[395px] h-auto py-8 px-6 shadow-sm"
            >
              {/* Icon + Title */}
              <div className="flex flex-col items-start gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={36}
                    height={36}
                    className="object-contain sm:w-10 sm:h-10"
                  />
                </div>
                <h3
                  className={`${montserrat.className} font-semibold text-lg sm:text-xl text-[#3D3D3D] leading-[28px] text-start`}
                >
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`${dmSans.className} text-sm sm:text-base md:text-[16px] font-normal text-[#7F7F7F] leading-relaxed text-left`}
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
