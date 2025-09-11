"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { motion } from "framer-motion";

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
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          className={`${montserrat.className} font-semibold text-2xl sm:text-3xl md:text-[32px] lg:text-[34px] xl:text-[34px] text-[#3D3D3D] text-center mb-4 leading-snug`}
        >
          What Sets Us Apart for Professionals
        </h2>
        <p
          className={`${dmSans.className} text-base sm:text-lg md:text-[18px] lg:text-[20px] text-center font-normal leading-relaxed mb-12 sm:mb-14 text-[#7F7F7F]`}
        >
          Discover exclusive roles, receive transparent support, and explore both
          tech and leadership career paths.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 justify-center items-stretch">
          {cards.map((card, i) => (
            <motion.div
  key={card.title}
  initial={{ opacity: 0, y: 40 }}
  animate={visible ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: i * 0.2 }}
  whileHover={{ scale: 1.05 }}
  className="flex flex-col bg-[#F5F5F5] rounded-2xl w-full max-w-[320px] md:max-w-[300px] lg:max-w-[320px] xl:max-w-[340px] h-auto py-8 px-6 shadow-sm hover:shadow-lg transition-all duration-300 mx-auto"
>

              {/* Icon + Title */}
              <div className="flex flex-col items-start gap-4 mb-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={40}
                    height={40}
                    className="object-contain sm:w-10 sm:h-10"
                  />
                </div>
                <h3
                  className={`${montserrat.className} font-semibold text-lg sm:text-xl md:text-[20px] lg:text-[22px] text-[#3D3D3D] leading-snug text-start`}
                >
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className={`${dmSans.className} text-sm sm:text-base md:text-[16px] lg:text-[17px] font-normal text-[#7F7F7F] leading-relaxed text-left`}
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
