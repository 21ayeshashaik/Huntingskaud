"use client";

import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HireSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-4 py-12 px-6 md:px-24">
      {/* Left Content */}
      <div className="md:w-5/12 max-w-[800px] space-y-3 relative z-10">
        <h2
          className={`${montserrat.className} font-bold text-[28px] md:text-[32px] leading-[40px] md:leading-[48px] text-[#3D3D3D]`}
        >
          Your Next Big Career Move Starts Here
        </h2>
        <p
          className={`${dmSans.className} text-[16px] md:text-[18px] leading-[28px] md:leading-[35px] text-[#7F7F7F]`}
        >
          We help ambitious professionals find meaningful opportunities in fast-growing startups and innovative enterprises.
        </p>

        <ul className={`${dmSans.className} space-y-2 text-[#7F7F7F]`}>
          <li>• Proven success with 100+ startups and enterprises</li>
          <li>• Expertise across technology and leadership roles</li>
          <li>• Flexible engagement models: contingency, RPO, or executive search</li>
          <li>• Dedicated recruiters who understand startup culture and challenges</li>
        </ul>

        <div className="flex gap-0 items-center group">
          <button
            className={`${dmSans.className} w-[163px] h-[48px] bg-[#007BFF] text-white rounded-full px-4 py-2 flex items-center justify-center gap-2 hover:bg-blue-600 transition`}
          >
            Submit your CV
          </button>
          <div
            className="w-10 h-10 rounded-full border-[1.5px] border-[#007BFF] flex items-center justify-center cursor-pointer transition-all duration-300
                      group-hover:bg-[#007BFF] group-hover:text-white"
          >
            <FiArrowUpRight
              className="transition-transform duration-300 text-[#007BFF] group-hover:rotate-45 group-hover:text-white"
              size={24}
            />
          </div>
        </div>
      </div>

      {/* Right Box - Hidden on small screens */}
      <div className="hidden md:flex justify-center md:w-7/12 relative z-10">
        <Image
          src="/images/submitcv.png"
          alt="Hire Smarter"
          width={500}
          height={600}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
}
