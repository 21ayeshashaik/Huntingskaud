"use client";
import React, { useEffect, useState, useRef } from "react";
import { Montserrat, DM_Sans } from "next/font/google";
import Image from "next/image";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "600"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

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
      className={`relative w-full bg-white py-20 sm:px-12 px-6 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start relative z-20">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <h2
            className={`${montserrat.className} text-[28px] sm:text-[32px] leading-[38px] sm:leading-[48px] font-bold text-gray-900`}
          >
            Why Companies <br /> Choose Us
          </h2>
          <p
            className={`${dmSans.className} mt-6 max-w-[380px] text-[16px] sm:text-[18px] leading-[28px] sm:leading-[35px] text-[#7F7F7F]`}
          >
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters.
          </p>
        </div>

        {/* Right Side */}
        {/* Mobile - Carousel */}
        <div className="lg:hidden col-span-3 w-full">
          <Swiper
            modules={[Pagination]}
            pagination={{ 
              clickable: true,
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active'
            }}
            spaceBetween={20}
            slidesPerView={1}
            className="mb-12" // Increased from mb-6 to mb-12 for more gap
          >
            {cards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative bg-[#EEEEEE] rounded-[20px] p-6 flex flex-col items-start shadow-md mb-8">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 shadow">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <h3
                    className={`${montserrat.className} text-[16px] sm:text-[18px] leading-[28px] font-semibold text-[#3D3D3D]`}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`${dmSans.className} mt-2 text-[14px] sm:text-[15px] leading-[20px] text-[#7F7F7F]`}
                  >
                    {card.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Additional spacing below pagination - increased from h-6 to h-12 */}
          <div className="h-12"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:col-span-3 sm:grid-cols-2 gap-6 z-100">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative bg-[#EEEEEE] rounded-[20px] p-6 flex flex-col items-start shadow-md"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-2 shadow">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <h3
                className={`${montserrat.className} text-[18px] leading-[28px] font-semibold text-[#3D3D3D]`}
              >
                {card.title}
              </h3>
              <p
                className={`${dmSans.className} mt-2 text-[15px] leading-[22px] text-[#7F7F7F]`}
              >
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background image at the bottom left */}
      <div className="absolute bottom-12 left-0 w-[400px] sm:w-[500px] lg:w-[550px] h-[220px] sm:h-[280px] z-10 hidden md:block">
        <Image
          src="/images/world.png"
          alt="Background"
          fill
          className="object-cover opacity-70"
        />
      </div>
    </section>
  );
}