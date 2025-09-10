"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection() {
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
      className={`bg-[linear-gradient(90deg,#e8f6ff,#e5f6fe,#e4f5ff,#e7f5fe,#e1f3ff)] w-full py-24 bg-white transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 lg:px-12">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/about1.jpg" // replace with your actual image path
            alt="Hire Smarter"
            width={600}
            height={465}
            className="rounded-[30px] object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-start max-w-xl">
          {/* Heading */}
          <h1
            className={`${montserrat.className} text-[40px] font-bold leading-[100%] text-[#252525] mb-6`}
          >
            Hire Faster, Hire Smarter
          </h1>

          <div className="flex-shrink-0 mb-4">
            <Image
              src="/images/hirefast2.png" // replace with your actual image path
              alt="Hire Smarter"
              width={100}
              height={100}
              className="rounded-[30px] object-cover"
            />
          </div>

          {/* Paragraph */}
          <p
            className={`${dmSans.className} text-[18px] leading-[36px] text-[#909090] mb-8`}
          >
            We deliver recruitment solutions tailored to your growth stage.
            Whether you’re hiring engineers at scale or searching for your next
            CXO, we bring speed, expertise, and a network you can trust.
          </p>

          {/* Button */}
          <div className="flex gap-0 items-center group">
            <button
              className={`${dmSans.className} w-[163px] h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}
            >
              Request Talent
            </button>
            <div
              className={`w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                group-hover:bg-[#007BFF] group-hover:text-white`}
            >
              <FiArrowUpRight
                className={`transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white`}
                size={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
