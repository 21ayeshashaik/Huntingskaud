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
    text: "We maintain transparent communication, ensuring candidates remain informed, and aligned with your company’s culture.",
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

function Card({
  card,
  className,
}: {
  card: typeof cards[0];
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col h-full py-8 px-6 rounded-lg hover:shadow-lg transition-shadow duration-300 ${
        className ?? ""
      }`}
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
  );
}

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
      className={`py-12 sm:py-16 lg:py-20 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Heading */}
      <h2
        className={`${montserrat.className} font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-[#3D3D3D] text-center mb-2 leading-[1.4]`}
      >
        From First Call to Final Hire
      </h2>
      <p
        className={`${dmSans.className} text-[15px] sm:text-[16px] lg:text-[18px] text-center font-normal leading-[1.8] mb-6 sm:mb-6 text-[#7F7F7F] max-w-3xl mx-auto`}
      >
        Our process is simple, effective, and repeatable—designed to build trust
        and deliver results consistently.
      </p>

      {/* Small screens (mobile): show normal cards stacked */}
      <div className="block sm:hidden space-y-6">
        {cards.map((card) => (
          <div key={card.title} className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex flex-col items-start gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3
                className={`${montserrat.className} font-semibold text-[18px] text-[#3D3D3D]`}
              >
                {card.title}
              </h3>
            </div>
            <p
              className={`${dmSans.className} text-[15px] text-[#7F7F7F] leading-[1.6]`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>

      {/* Desktop → Grid Layout */}
      <div className="hidden sm:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First row: 3 cards in grid */}
        <div className="grid grid-cols-3 gap-6 lg:gap-8 justify-items-center mb-8">
          {cards.slice(0, 3).map((card) => (
            <Card key={card.title} card={card} />
          ))}
        </div>

        {/* Second row: 2 cards centered */}
        <div className="flex justify-center gap-6 lg:gap-8">
          {cards.slice(3).map((card) => (
            <div key={card.title} className="w-full max-w-xs">
              <Card card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
