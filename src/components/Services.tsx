"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

// Load fonts
const montserrat = Montserrat({ subsets: ["latin"], weight: "700" });
const dmsans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

const SERVICES = [
  {
    title: "Tech Recruitment",
    iconPath: "/images/service1.png",
    description:
      "We find top technology talent tailored to your project needs. From developers to DevOps specialists, we ensure skill fit and culture alignment.",
  },
  {
    title: "Executive Search",
    iconPath: "/images/service2.png",
    description:
      "We source high-level executives with proven experience to drive business growth and innovation in leadership roles.",
  },
  {
    title: "Resource Process Outsourcing",
    iconPath: "/images/service3.png",
    description:
      "Outsource recruitment and HR processes efficiently to scale your team while maintaining quality and compliance standards.",
  },
  {
    title: "Start-Up Accelerators",
    iconPath: "/images/service4.png",
    description:
      "We provide tailored programs and mentoring to accelerate your startup's talent acquisition and operational growth.",
  },
  {
    title: "Talent Mapping",
    iconPath: "/images/service5.png",
    description:
      "Detailed market research and talent mapping to identify top candidates for critical roles before the hiring need arises.",
  },
  {
    title: "Diversity & Inclusion",
    iconPath: "/images/service6.png",
    description:
      "We prioritize building diverse teams and inclusive hiring practices that foster innovation and company culture.",
  },
];

export default function OurServices() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const ref = useRef<null | HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          
          // Animate items with staggered delay
          SERVICES.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedItems(prev => new Set([...prev, index]));
            }, index * 150); // 150ms delay between each item
          });
          
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
      className="max-w-[1200px] mx-auto pt-12 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-full opacity-30 blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-tr from-purple-50 to-pink-100 rounded-full opacity-20 blur-lg"></div>

      {/* Heading and Paragraph */}
      <div 
        className={`flex flex-col md:flex-row md:items-start md:space-x-12 mb-8 transition-all duration-1000 ease-out transform ${
          visible 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="md:w-1/3 relative">
          <h2
            className={`${montserrat.className} text-[28px] sm:text-[32px] md:text-[36px] leading-snug text-[#3D3D3D] font-bold relative z-10`}
          >
            Our Services
            {/* Animated underline */}
           
          </h2>
        </div>
        <div 
          className={`md:w-2/3 mt-4 md:mt-0 transition-all duration-1000 ease-out transform ${
            visible 
              ? "opacity-100 translate-x-0" 
              : "opacity-0 translate-x-8"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <p
            className={`${dmsans.className} text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#7F7F7F] font-normal relative`}
          >
            We provide a range of recruitment and talent solutions to help startups and enterprises
            scale efficiently. From tech specialists to executive leaders, our team ensures you
            get the right talent quickly and reliably.
          </p>
        </div>
      </div>

      {/* Services Accordion */}
      <div 
        className={`border-t border-[#D3D3D3] transition-all duration-800 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "600ms" }}
      >
        {SERVICES.map((service, idx) => {
          const isActive = activeIndex === idx;
          const isAnimated = animatedItems.has(idx);
          
          return (
           <div 
  key={service.title} 
  ref={el => { itemRefs.current[idx] = el; }} // ✅ notice the curly braces
  className={`w-full transition-all duration-700 ease-out transform ${
    isAnimated 
      ? "opacity-100 translate-x-0 scale-100" 
      : "opacity-0 translate-x-12 scale-95"
              } hover:bg-gradient-to-r hover:from-blue-50/30 hover:to-indigo-50/30 hover:shadow-lg hover:shadow-blue-100/50 rounded-lg`}
              style={{ 
                transitionDelay: `${800 + idx * 150}ms`,
              }}
            >
              <button
                onClick={() => handleToggle(idx)}
                className={`w-full flex items-center justify-between py-6 border-t border-[#D3D3D3] focus:outline-none transition-all duration-500 md:px-4 group hover:border-blue-200 ${
                  isActive ? "bg-gradient-to-r from-blue-50/50 to-transparent" : ""
                }`}
                aria-expanded={isActive}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Image
                      src={service.iconPath}
                      alt={service.title}
                      width={40}
                      height={40}
                      className={`flex-shrink-0 transition-all duration-500 transform group-hover:scale-110 ${
                        isActive ? "opacity-40 rotate-12" : "opacity-100 group-hover:rotate-6"
                      }`}
                    />
                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 bg-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500"></div>
                  </div>
                 <span
  className={`${montserrat.className} text-[18px] sm:text-[20px] font-semibold transition-all duration-500 transform group-hover:translate-x-1 ${
    isActive 
      ? "text-gray-400" 
      : "text-[#3D3D3D] group-hover:text-[#007BFF]"
  }`}
>
  {service.title}
</span>

                </div>

                {/* Enhanced Arrow */}
                <span
                  className={`ml-auto transition-all duration-500 transform group-hover:scale-110 ${
                    isActive 
                      ? "rotate-90 text-[#007BFF]" 
                      : "group-hover:translate-x-1 group-hover:text-[#007BFF]"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#3D3D3D] group-hover:text-[#007BFF] transition-colors duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </button>

              {/* Enhanced Slide Down Description */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  isActive 
                    ? "max-h-[300px] py-4 opacity-100" 
                    : "max-h-0 py-0 opacity-0"
                }`}
              >
                <div
                  className={`${dmsans.className} ml-12 mr-4 text-[15px] sm:text-[16px] leading-[28px] text-[#007BFF] transform transition-all duration-500 ${
                    isActive 
                      ? "translate-y-0 opacity-100" 
                      : "translate-y-4 opacity-0"
                  } relative`}
                >
                  {service.description}
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-blue-200 rounded-full opacity-0 transition-all duration-1000 ${
              visible ? "animate-float" : ""
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}