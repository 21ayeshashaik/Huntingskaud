"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const cards = [
  {
    img: "/images/people.svg",
    title: "People-Centric",
    desc: "We put people first—understanding aspirations, culture, and potential before anything else.",
  },
  {
    img: "/images/innovative.svg",
    title: "Innovative",
    desc: "We bring fresh thinking, data-driven insights, and agile processes to solve hiring challenges faster and better.",
  },
  {
    img: "/images/ethical.svg",
    title: "Ethical",
    desc: "We believe trust is everything. Transparency, integrity, and fairness guide all our partnerships.",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-semibold text-[28px] sm:text-[32px] text-[#3D3D3D] text-center mb-3 leading-[40px] sm:leading-[48px]`}
        >
          Our Values
        </h2>
        <p
          className={`${dmSans.className} text-[16px] sm:text-[18px] text-center font-normal leading-[28px] sm:leading-[35px] mb-11 text-[#7F7F7F]`}
        >
          More than words, our values shape the way we connect talent with opportunity and help companies
          grow.
          <br className="hidden sm:block" />
          They define how we work, who we are, and the trust we build with people and businesses alike.
        </p>

        {/* Responsive Grid for all screen sizes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col bg-[#EEEEEE] rounded-[20px] py-8 px-6 shadow-md max-w-[395px] mx-auto"
            >
              <div className="flex flex-col items-start gap-2 mb-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
                <h3
                  className={`${montserrat.className} font-semibold text-[20px] text-[#3D3D3D] leading-[28px]`}
                >
                  {card.title}
                </h3>
              </div>
              <p
                className={`${dmSans.className} text-[16px] font-normal text-[#7F7F7F] leading-[26px] text-left`}
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
