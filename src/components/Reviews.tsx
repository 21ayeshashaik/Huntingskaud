"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "700"] });

interface Testimonial {
  text: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "This platform transformed the way our team collaborates and delivers projects efficiently.",
    name: "Aarav Mehta",
    role: "CEO @TechSphere",
  },
  {
    text: "An intuitive solution that saved us countless hours and boosted overall productivity.",
    name: "Priya Sharma",
    role: "Product Manager @Innova Labs",
  },
  {
    text: "The attention to detail and customer support made our onboarding experience seamless.",
    name: "Rohit Verma",
    role: "Founder @NextGen Solutions",
  },
  {
    text: "A game changer for startups looking to scale without adding complexity.",
    name: "Sneha Kapoor",
    role: "CTO @CloudNova",
  },
];

const TestimonialSection: React.FC = () => {
  const [page, setPage] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // Handle responsive slides
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1536) setVisibleSlides(4); // 2xl → 4 cards
      else if (width >= 1280) setVisibleSlides(3); // xl → 3 cards
      else if (width >= 1024) setVisibleSlides(3); // lg → 3 cards
      else if (width >= 768) setVisibleSlides(2); // md → 2 cards
      else setVisibleSlides(1); // sm → 1 card
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  // Max pages = total cards - visibleSlides
  const maxPage = Math.max(testimonials.length - visibleSlides, 0);

  const handlePrev = useCallback(() => {
    setPage((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setPage((prev) => Math.min(prev + 1, maxPage));
  }, [maxPage]);

  // Reset page if screen resizes
  useEffect(() => {
    setPage((prev) => Math.min(prev, maxPage));
  }, [visibleSlides, maxPage]);

  // Intersection animation
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

  // Keyboard arrows
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!visible) return;
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, handleNext, handlePrev]);

  return (
    <section
      ref={ref}
      className={`py-16 px-6 sm:px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-22 bg-white w-full transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-8 items-start">
        {/* Left Section */}
        <div>
          <h2
            className={`${montserrat.className} font-bold text-[28px] sm:text-[32px] leading-[40px] sm:leading-[48px] text-[#3D3D3D] mb-4`}
          >
            What Our Partners Say
          </h2>
          <p
            className={`${dmSans.className} text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#7F7F7F] max-w-sm`}
          >
            Real stories from the companies and professionals who’ve trusted us
            to shape their teams and careers.
          </p>

          {/* Arrow Controls */}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handlePrev}
              disabled={page === 0}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50"
            >
              <FiArrowUpRight
                className="text-[#007BFF]"
                size={20}
                style={{ transform: "rotate(225deg)" }}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={page >= maxPage}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50"
            >
              <FiArrowUpRight
                className="text-[#007BFF]"
                size={20}
                style={{ transform: "rotate(45deg)" }}
              />
            </button>
          </div>
        </div>

        {/* Right Section - Slider */}
        <div className="overflow-hidden relative select-none">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${page * (100 / visibleSlides)}%)`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-white px-5 sm:px-6 md:px-8 py-6 sm:py-7 rounded-2xl shadow-md"
                style={{
                  flex: `0 0 ${100 / visibleSlides}%`,
                  maxWidth: `${100 / visibleSlides}%`,
                }}
              >
                <div className="flex space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/Star.png"
                      alt="star"
                      width={20}
                      height={20}
                      unoptimized
                    />
                  ))}
                </div>
                <p
                  className={`${dmSans.className} text-[15px] sm:text-[16px] leading-[26px] text-[#7F7F7F] mb-6`}
                >
                  {t.text}
                </p>
                <div>
                  <div
                    className={`${dmSans.className} font-bold text-[#3D3D3D] text-[16px] mb-1`}
                  >
                    {t.name}
                  </div>
                  <div
                    className={`${dmSans.className} text-[#7F7F7F] text-[14px]`}
                  >
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
