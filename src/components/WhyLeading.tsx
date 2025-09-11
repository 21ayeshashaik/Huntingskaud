"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`relative py-16 sm:py-20 md:py-24 lg:py-28 xl:py-32 bg-white transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-[#3D3D3D] text-center mb-6 sm:mb-8 leading-snug`}
        >
          Why Leading Startups & Enterprises Trust Us
        </h2>

        {/* Subtext */}
        <div className="flex flex-col items-center justify-center h-full mb-10 sm:mb-14 px-2 sm:px-6">
          <p
            className={`${dmSans.className} text-base sm:text-lg md:text-xl lg:text-[20px] text-center font-normal leading-relaxed max-w-2xl text-[#7F7F7F]`}
          >
            With over 100 clients served, we combine startup agility, leadership
            expertise, and data-driven insights to deliver the right talent—
            fast and reliably.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F5F5F5] rounded-[20px] py-8 px-6 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-5 rounded-full bg-white flex items-center justify-center shadow-md">
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
                className={`${montserrat.className} font-semibold text-lg sm:text-xl md:text-lg lg:text-xl text-[#3D3D3D] leading-7 mb-3`}
              >
                {card.title}
              </h3>

              {/* Description */}
              <p
                className={`${dmSans.className} text-sm sm:text-base lg:text-[15px] font-normal text-[#7F7F7F] leading-6`}
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
