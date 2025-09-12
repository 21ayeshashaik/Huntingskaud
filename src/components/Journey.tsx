"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });

interface Step {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  { id: "step1", number: "01", title: "Deep Startup Focus", description: "We understand the DNA of startups, where agility and speed are crucial. We adapt to your journey.", icon: "/images/journey1.png" },
  { id: "step2", number: "02", title: "Engage", description: "We maintain constant communication with candidates, ensuring they remain motivated and informed.", icon: "/images/journey2.png" },
  { id: "step3", number: "03", title: "Consult", description: "We advise both clients and candidates, sharing market insights and guiding decision-making.", icon: "/images/journey3.png" },
  { id: "step4", number: "04", title: "Review", description: "We incorporate feedback to refine our process and improve results continuously.", icon: "/images/journey4.png" },
  { id: "step5", number: "05", title: "Deliver", description: "We close the loop with successful placements that align with your goals.", icon: "/images/journey5.png" },
];

const RecruitmentJourney: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [lineHeight, setLineHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.getBoundingClientRect().top;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollY = windowHeight - containerTop;
      let progress = Math.max(0, Math.min(1, scrollY / containerHeight));

      // smooth curve: starts slower, still reaches 1
      progress = Math.pow(progress, 0.7);

      const stepIndex = Math.floor(progress * steps.length);
      setActiveStep(Math.min(stepIndex, steps.length - 1));

      setLineHeight(progress * containerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const safeContainerHeight = containerRef.current?.offsetHeight ?? 0;
  const topPosition = Math.min(lineHeight, safeContainerHeight);

  return (
    <div className="w-full py-12 px-4 sm:px-6 md:py-16 lg:px-20 xl:px-32 2xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 xl:gap-32">

          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10">
            <h2
              className={`${montserrat.className} font-bold leading-tight text-[#3D3D3D]`}
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2rem)" }}
            >
              A Recruitment Journey That Delivers
            </h2>
            <p
              className={`${dmSans.className} text-[#7F7F7F] leading-relaxed max-w-full sm:max-w-lg lg:max-w-md xl:max-w-lg`}
              style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
            >
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
            </p>
            <div className="rounded-[30px] overflow-hidden max-w-full max-h-[384px]">
              <Image
                src="/images/journey_side.jpg"
                alt="Interview"
                width={576}
                height={384}
                className="w-full h-auto object-cover rounded-[30px]"
                priority
              />
            </div>
          </div>

          {/* Right Timeline */}
          <div ref={containerRef} className="relative px-6 sm:px-10 lg:px-0">
             {/* Timeline vertical line aligned with icons */}
<div className="absolute top-0 bottom-0 left-0 flex justify-center"
     style={{ width: '56px' /* matches max icon width (w-14 = 56px) */ }}>
 <div
    className="w-px h-full sm:left-[45%] left-[75%] border-l border-dashed"
    style={{
      borderColor: "#D3D3D3",
      transform: 'translateX(-50%)',
     // left: '65%', // Shift line more left inside container on small
      position: 'absolute',
    }}
  />
  {/* Active blue line */}
  <div
    className="absolute sm:left-[70%] lg:left-[50%] left-[70%] top-0 w-px border-l-2 border-dashed transition-all duration-800 ease-out"
    style={{
      borderColor: "#007BFF",
      height: `${lineHeight}px`,
   //   left: '50%',
      transform: 'translateX(-50%)',
    }}
  />

  {/* Start dot */}
  {/* Start dot */}
{stepRefs.current[0] && (
  <div
    className="absolute sm:left-[70%] lg:left-[50%] left-[70%] w-3 h-3 bg-blue-500 rounded-full transition-all duration-300 ease-out"
    style={{
      top: `${stepRefs.current[0].offsetTop + stepRefs.current[0].offsetHeight / 2 - 30}px`, // 8+8 shifted upward
      transform: 'translateX(-50%)',
    }}
  />
)}


  {/* End dot */}
  <div
    className="absolute w-3 h-3 sm:left-[70%] lg:left-[50%] left-[70%]  bg-blue-500 rounded-full transition-all duration-300 ease-out"
    style={{
      top: `${topPosition}px`,
      //left: '50%',
      transform: 'translateX(-50%)',
    }}
  />
</div>

            {/* Steps */}
            <div className="space-y-12 sm:space-y-14 lg:space-y-16">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className={`relative flex items-start space-x-5 sm:space-x-7 transition-all duration-500 ${
                    index <= activeStep ? "opacity-100" : "opacity-60"
                  }`}
                >
                  {/* Step icon */}
                  <div
                    className={`relative flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
                      index <= activeStep ? "bg-blue-500 shadow-lg scale-110" : "bg-gray-200"
                    }`}
                    style={{
                      width: "clamp(48px, 4vw, 56px)",
                      height: "clamp(48px, 4vw, 56px)",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={32}
                      height={32}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-cover"
                      priority
                    />
                  </div>

                  {/* Step content */}
                  <div
                    className={`flex-1 p-4 sm:p-6 rounded-lg transition-all duration-500 transform ${
                      index <= activeStep ? "bg-gray-100 translate-x-0" : "bg-white translate-x-4"
                    }`}
                  >
                    <span
                      className={`${montserrat.className} font-bold mb-3 block`}
                      style={{
                        fontSize: "clamp(1.25rem, 2vw, 1.875rem)",
                        color: index <= activeStep ? "#007BFF" : "#D3D3D3",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className={`${montserrat.className} font-semibold mb-3 text-[#3D3D3D]`}
                      style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`${dmSans.className} leading-relaxed text-[#7F7F7F]`}
                      style={{ fontSize: "clamp(0.875rem, 1vw, 1rem)" }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecruitmentJourney;
