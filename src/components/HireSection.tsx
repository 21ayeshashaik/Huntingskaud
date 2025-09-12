"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HireSection() {
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
      className={`flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-8 py-12 px-6 sm:px-12 md:px-24 transition-opacity duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Left Content */}
      <div className="md:w-5/12 max-w-full sm:max-w-lg">
        <h2
          className={`${montserrat.className} font-bold text-[24px] sm:text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-[#3D3D3D]`}
        >
          Hire Faster. Hire Smarter.
        </h2>
        <p
          className={`${dmSans.className} text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] md:leading-[35px] text-[#7F7F7F] mt-4`}
        >
          We partner with ambitious organizations to deliver recruitment
          solutions tailored to their needs. Whether you&apos;re hiring engineers at
          scale or looking for your next CXO, we have the expertise, speed, and
          network to make it happen.
        </p>

        <ul
          className={`${dmSans.className} space-y-2 text-[#7F7F7F] mt-6 list-disc list-inside`}
        >
          <li>Proven success with 100+ startups and enterprises</li>
          <li>Expertise across technology and leadership roles</li>
          <li>Flexible engagement models: contingency, RPO, or executive search</li>
          <li>Dedicated recruiters who understand startup culture and challenges</li>
        </ul>

        <div className="flex items-center group mt-4">
          <div className="relative overflow-hidden">
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`${dmSans.className} w-[163px] h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
            >
              Request Talent
            </button>
          </div>
          <div className="ml-2 flex-shrink-0">
            <div
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-700 ease-in-out group-hover:bg-[#007BFF] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:translate-x-2"
            >
              <FiArrowUpRight
                className="transition-all duration-700 ease-in-out text-[#007BFF] group-hover:rotate-45 group-hover:text-white group-hover:scale-125"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Box */}
      <div className="hidden md:block flex-shrink-0">
        <div className="bg-[#F9F9FB] border border-[#D6D6D6] rounded-2xl w-[90vw] max-w-[450px] h-[400px] sm:h-[450px] md:h-[500px] flex justify-center items-center relative overflow-hidden">
          {/* Three dots */}
          <div className="flex space-x-2 absolute top-4 left-4 z-10">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
          </div>

          <Image
            src="/images/hirefast.png"
            alt="Hire Smarter"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-2xl"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}