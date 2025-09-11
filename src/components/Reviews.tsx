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
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
    name: "Raman",
    role: "Founder @TCS",
  },
  {
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
    name: "Raman",
    role: "Founder @TCS",
  },
  {
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
    name: "Raman",
    role: "Founder @TCS",
  },
  {
    text: "Yet preference connection unpleasant yet melancholy but end appearance. And excellence partially estimating terminated day everything.",
    name: "Raman",
    role: "Founder @TCS",
  },
];

const TestimonialSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1); // ✅ default safe value for SSR
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  // ✅ Update visible slides only on client
  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleSlides(3);
      else if (width >= 768) setVisibleSlides(2);
      else setVisibleSlides(1);
    };

    updateSlides(); // run once on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const getMaxOffset = useCallback((): number => {
    return Math.max(testimonials.length - visibleSlides, 0);
  }, [visibleSlides]);

  const handlePrev = useCallback(() => {
    setOffset((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setOffset((prev) => Math.min(prev + 1, getMaxOffset()));
  }, [getMaxOffset]);

  // ✅ Ensure offset is valid when slides change
  useEffect(() => {
    setOffset((prev) => Math.min(prev, getMaxOffset()));
  }, [visibleSlides, getMaxOffset]);

  // ✅ Fade-in animation
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

  // ✅ Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!visible) return;
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, handleNext, handlePrev]);

  const slideWidthPercent = 100 / visibleSlides;

  return (
    <section
      ref={ref}
      className={`py-14 px-20 bg-white w-full transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-0 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 items-start">
        {/* Left Section */}
        <div>
          <h2 className={`${montserrat.className} font-bold text-[32px] leading-[48px] text-[#3D3D3D] mb-2`}>
            What Our Partners Say
          </h2>
          <p className={`${dmSans.className} text-[18px] leading-[30px] text-[#7F7F7F] mb-9 max-w-sm`}>
            Real stories from the companies and professionals who’ve trusted us to shape their teams and careers.
          </p>

          {/* Arrow Controls */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={offset === 0}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50"
            >
              <FiArrowUpRight
                className="text-[#007BFF] hover:text-white"
                size={20}
                style={{ transform: "rotate(225deg)" }}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={offset >= getMaxOffset()}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50"
            >
              <FiArrowUpRight
                className="text-[#007BFF] hover:text-white"
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
            style={{ transform: `translateX(-${offset * slideWidthPercent}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="mr-6 last:mr-0 bg-white px-4 py-6 rounded-lg shadow-md"
                style={{
                  flex: `0 0 ${slideWidthPercent}%`,
                  minWidth: `${slideWidthPercent}%`,
                }}
              >
                <div className="flex space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Image key={i} src="/images/Star.png" alt="star" width={20} height={20} unoptimized />
                  ))}
                </div>
                <p className={`${dmSans.className} text-[16px] leading-[28px] text-[#7F7F7F] mb-5`}>{t.text}</p>
                <div>
                  <div className={`${dmSans.className} font-bold text-[#3D3D3D] text-[16px]`}>{t.name}</div>
                  <div className={`${dmSans.className} text-[#7F7F7F] text-[15px]`}>{t.role}</div>
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
