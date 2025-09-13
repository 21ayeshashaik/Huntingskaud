"use client";

import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { useState, useEffect } from "react";

const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

export default function GrowthPartners() {
  const [height, setHeight] = useState("720px"); // increased mobile height

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1280) { // xl breakpoint
        setHeight("560px");
      } else if (window.innerWidth >= 1024) { // lg breakpoint
        setHeight("600px"); // slightly bigger than xl for lg screens
      } else {
        setHeight("720px"); // larger height for mobile
      }
    }

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      className="w-full bg-[#221C49] py-16 px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24"
      style={{ minHeight: height, paddingTop: "12px", paddingBottom: "12px" }}
    >
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 xl:gap-x-20 2xl:gap-x-32 items-center h-full">
        {/* Left Side */}
        <div>
          <h2
            className={`${montserrat.className} text-[34px] sm:text-[38px] lg:text-[40px] leading-[50px] sm:leading-[54px] lg:leading-[56px] font-bold text-[#FFFFFF] mb-6`}
          >
            Trusted by ambitious businesses worldwide
          </h2>

          <p
            className={`${dmSans.className} text-[18px] sm:text-[20px] leading-[38px] text-[#E0E0E0] mb-10 max-w-lg`}
          >
            From fast-growing startups to established enterprises, companies choose Hunting Skuad to find leaders and teams that power innovation and scale. With speed, precision, and a people-first approach, we’ve built a reputation for delivering talent that makes a difference.
          </p>

          {/* Counts */}
          <div className="flex flex-wrap gap-x-14 gap-y-8 mt-14 xl:mt-16">
            <div>
              <p
                className={`${dmSans.className} text-[38px] sm:text-[44px] italic font-semibold text-[#007BFF] leading-none`}
              >
                10K+
              </p>
              <p
                className={`${dmSans.className} text-[14px] lg:text-[18px] leading-[20px] font-normal text-[#FFFFFF]`}
              >
                Professionals
              </p>
            </div>

            <div>
              <p
                className={`${dmSans.className} text-[38px] sm:text-[44px] italic font-semibold text-[#007BFF] leading-none`}
              >
                200+
              </p>
              <p
                className={`${dmSans.className} text-[14px] lg:text-[18px] leading-[20px] font-normal text-[#FFFFFF]`}
              >
                Business Partnered
              </p>
            </div>

            <div>
              <p
                className={`${dmSans.className} text-[38px] sm:text-[44px] italic font-semibold text-[#007BFF] leading-none`}
              >
                10+
              </p>
              <p
                className={`${dmSans.className} text-[14px] lg:text-[18px] leading-[20px] font-normal text-[#FFFFFF]`}
              >
                Sector Jobs
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Hidden below lg */}
        <div className="hidden lg:flex justify-center lg:justify-end relative z-10 max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] h-[600px]">
          <Image
            src="/images/world2.png"
            alt="Growth Partners"
            fill
            className="object-contain rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
