// components/ContactSection.tsx
import React from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const contactDetails = [
  {
    icon: (
      <span className="bg-white rounded-full p-3 flex items-center justify-center drop-shadow-md">
        <Image src="/images/email.png" alt="Email Icon" width={32} height={32} />
      </span>
    ),
    title: "Email Support",
    details: (
      <div>
        <div>info@huntingskuad.com</div>
        <div>growth@huntingskuad.com</div>
      </div>
    ),
  },
  {
    icon: (
      <span className="bg-white rounded-full p-3 flex items-center justify-center drop-shadow-md">
        <Image src="/images/call.png" alt="Phone Icon" width={32} height={32} />
      </span>
    ),
    title: "Call Us Directly",
    details: <div>+91-7827550145</div>,
  },
  {
    icon: (
      <span className="bg-white rounded-full p-3 flex items-center justify-center drop-shadow-md">
        <Image src="/images/visit.png" alt="Location Icon" width={32} height={32} />
      </span>
    ),
    title: "Visit Our Office",
    details: (
      <div>
        A-101/2, First Floor, Okhla Industrial Area, Phase II, New Delhi - 110024
      </div>
    ),
  },
];

const ContactSection: React.FC = () => (
  <section className="w-full flex flex-col items-start py-18 bg-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
    {/* Heading aligned to left */}
    <h2
      className={`${montserrat.className} mb-10 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#252525] tracking-tight max-w-4xl`}
    >
      We’d love to hear from you
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
      {contactDetails.map((c, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start gap-4 bg-[#eee] p-6 sm:p-8 rounded-2xl shadow-sm h-full min-h-[280px]"
        >
          {c.icon}
          <div
            className={`${montserrat.className} font-semibold text-lg sm:text-xl text-gray-800`}
          >
            {c.title}
          </div>
          <div
            className={`${dmSans.className} text-base sm:text-lg font-normal text-[#7F7F7F] leading-relaxed select-text`}
          >
            {c.details}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ContactSection;
