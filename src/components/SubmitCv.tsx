"use client";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400"] });

export default function HireSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between gap-y-8 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 py-12 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
      {/* Left Content */}
      <div className="w-full md:w-5/12 max-w-full sm:max-w-xl md:max-w-none space-y-3 relative z-10">
        <h2
          className={`${montserrat.className} font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[32px] xl:text-[36px] leading-[34px] sm:leading-[38px] md:leading-[42px] lg:leading-[46px] xl:leading-[50px] text-[#3D3D3D]`}
        >
          Your Next Big Career Move Starts Here
        </h2>
        <p
          className={`${dmSans.className} text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19px] xl:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[34px] xl:leading-[36px] text-[#7F7F7F]`}
        >
          We help ambitious professionals find meaningful opportunities in fast-growing startups and innovative enterprises.
        </p>

        <ul className={`${dmSans.className} space-y-2 text-[#7F7F7F] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]`}>
          <li>• Proven success with 100+ startups and enterprises</li>
          <li>• Expertise across technology and leadership roles</li>
          <li>• Flexible engagement models: contingency, RPO, or executive search</li>
          <li>• Dedicated recruiters who understand startup culture and challenges</li>
        </ul>

        <div className="flex items-center group mt-4 sm:mt-6 gap-0 transition-all duration-700 ease-in-out hover:gap-3">
  <div className="relative overflow-hidden">
    <button
      onClick={() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }}
      className={`${dmSans.className} w-[140px] sm:w-[150px] md:w-[163px] h-[40px] sm:h-[44px] md:h-[48px] bg-[#007BFF] text-white rounded-full text-sm sm:text-base md:text-lg px-4 py-2 flex items-center justify-center gap-0 hover:bg-blue-600 transition-all duration-300 hover:shadow-lg`}
    >
      Submit your CV
    </button>
  </div>
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
        className="text-[#007BFF] group-hover:text-white transition-all duration-500 ease-out group-hover:rotate-45"
        size={18}
      />
  </div>
</div>


      </div>

      {/* Right Box - Hidden below md */}
      <div className="hidden md:flex justify-center md:w-7/12 relative z-10 max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px]">
        <Image
          src="/images/submitcv.svg"
          alt="Hire Smarter"
          width={600}
          height={720}
          className="w-full h-auto object-cover rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}