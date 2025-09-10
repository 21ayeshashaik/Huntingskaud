"use client";

import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { useState,useEffect } from "react";
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

 
export default function GrowthPartners() {
  const [height, setHeight] = useState("650px");

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setHeight("560px");
      } else {
        setHeight("650px");
      }
    }

    onResize(); // Set initial height
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
     <section
      className="w-full bg-[#221C49]"
      style={{ height, paddingTop: "12px", paddingBottom: "12px" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
        {/* Left Side */}
        <div>
          {/* Heading */}
          <h2
            className={`${montserrat.className} text-[32px] leading-[48px] font-bold text-[#FFFFFF] mb-6`}
          >
            Trusted by ambitious businesses worldwide
          </h2>

          {/* Description */}
          <p
            className={`${dmSans.className} text-[16px] leading-[35px] text-[#E0E0E0] mb-10`}
          >
            From fast-growing startups to established enterprises, companies choose Hunting Skuad to find leaders and teams that power innovation and scale. With speed, precision, and a people-first approach, we’ve built a reputation for delivering talent that makes a difference.
          </p>

          {/* Counts */}
          <div className="flex gap-12 mt-12">
            <div>
              <p
                className={`${dmSans.className} text-[35px] leading-[35px] italic font-semibold text-[#007BFF]`}
              >
                10K+
              </p>
              <p
                className={`${dmSans.className} text-[12px] lg:text-[18px] leading-[20px] font-normal text-[#FFFFFF]`}
              >
                Professionals
              </p>
            </div>

            <div>
              <p
                className={`${dmSans.className} text-[35px] leading-[35px] italic font-semibold text-[#007BFF]`}
              >
                200+
              </p>
              <p
                className={`${dmSans.className} text-[12px] lg:text-[18px] leading-[20px] font-normal text-[#FFFFFF]`}
              >
                Business Partnered
              </p>
            </div>

            <div>
              <p
                className={`${dmSans.className} text-[35px] leading-[35px] italic font-semibold text-[#007BFF]`}
              >
                10+
              </p>
              <p
                className={`${dmSans.className} text-[12px] lg:text-[18px] leading-[20px] font-normal text-[#FFFFFF]`}
              >
                Sector Jobs
              </p>
            </div>
          </div>
        </div>

        
        {/* Right Side - Hidden below lg */}
<div className="hidden lg:flex justify-center lg:justify-end">
  <div className="relative w-[600px] h-[600px]">
    <Image
      src="/images/world2.png" // Replace with your actual image path
      alt="Growth Partners"
      fill
      className="object-contain"
    />
  </div>
</div>

      </div>
    </section>
  );
}
