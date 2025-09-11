"use client";

import React, { useState, useEffect, useRef } from "react";
import { Montserrat, DM_Sans } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700", "600"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

const cards = [
  {
    title: "Tech Recruitment",
    text: "We build strong technology teams, hiring engineers, data scientists, DevOps, architects, and product managers—ensuring speed, precision, and cultural alignment for startups and enterprises.",
    icon: "/images/leadership.png",
  },
  {
    title: "Executive Search",
    text: "We deliver leadership talent including Directors, VPs, and CXOs. Each search is research-driven, tailored to your needs, and focused on long-term organizational success.",
    icon: "/images/access.png",
  },
  {
    title: "Resource Process Outsourcing",
    text: "Our RPO model provides scalable, cost-efficient hiring support. We manage or supplement recruitment functions with expertise, tools, and process discipline to boost efficiency.",
    icon: "/images/resourse.png",
  },
  {
    title: "Start-Up Accelerators",
    text: "We design lean recruitment solutions for startups, from pre-seed to Series funding. Our approach helps founders attract top talent quickly without overspending resources.",
    icon: "/images/deep.png",
  },
  {
    title: "Talent Mapping",
    text: "We analyze talent landscapes, identify where top professionals reside, and deliver insights to plan future hiring strategies effectively, supporting smarter workforce growth.",
    icon: "/images/talent.png",
  },
  {
    title: "Diversity & Inclusion",
    text: "We help organizations build inclusive, innovative teams by promoting diversity in hiring—driving creativity, stronger performance, and long-term competitive advantage.",
    icon: "/images/diversity.png",
  },
];

export default function WhyCompanies() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Track if mobile view (below lg)
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint 1024px
      if (window.innerWidth >= 1024) {
        setCurrentSlide(0);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Intersection Observer for fade-in animation
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

  const maxSlide = cards.length - 1;

  const handlePrev = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentSlide((prev) => Math.min(prev + 1, maxSlide));
  //const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section
      ref={ref}
      className={`relative w-full bg-white py-20 px-4 sm:px-6 lg:px-12 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        {/* Left Side - 2 columns on lg+ */}
        <div className="lg:col-span-2 max-w-md mx-auto lg:mx-0">
          <h2
            className={`${montserrat.className} text-[28px] sm:text-[32px] leading-[40px] sm:leading-[48px] font-bold text-gray-900`}
          >
            Expertise Across the Hiring Spectrum
          </h2>
          <p
            className={`${dmSans.className} mt-6 text-[16px] sm:text-[18px] leading-[28px] text-[#7F7F7F] max-w-[350px] sm:max-w-full`}
          >
            Whether you need engineers, leaders, or market insights, we deliver recruitment solutions that fuel long-term growth.
          </p>

          {/* Carousel navigation visible only on mobile */}
          {isMobile && (
            <div className="flex gap-3 mt-8">
              <button
                onClick={handlePrev}
                disabled={currentSlide === 0}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#007BFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentSlide === maxSlide}
                aria-label="Next"
                className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#007BFF]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Right Side */}
       <div
  className={`lg:col-span-3 ${
    isMobile ? "overflow-hidden relative" : "grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
  }`}
>

        {isMobile ? (
  <>
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 90}vw)`, width: `${cards.length * 90}vw` }}
    >
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex-shrink-0 bg-[#EEEEEE] rounded-[20px] p-6 flex flex-col items-start min-h-auto mx-2"
          style={{ width: "90vw" }}
        >
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow">
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>

                    <h3
                      className={`${montserrat.className} text-[16px] sm:text-[18px] leading-[36px] font-semibold text-[#3D3D3D]`}
                    >
                      {card.title}
                    </h3>

                    <p
                      className={`${dmSans.className} mt-2 text-[15px] sm:text-[16px] leading-[26px] text-[#7F7F7F]`}
                    >
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Dots navigation */}
              <div className="flex justify-center mt-8 space-x-3">
                {cards.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-[#007BFF]" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Grid layout for large/lg screens */}
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[#EEEEEE] rounded-[20px] p-6 flex flex-col items-start min-h-auto"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>

                  <h3
                    className={`${montserrat.className} text-[18px] leading-[36px] font-semibold text-[#3D3D3D]`}
                  >
                    {card.title}
                  </h3>

                  <p
                    className={`${dmSans.className} mt-2 text-[16px] leading-[26px] text-[#7F7F7F]`}
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
