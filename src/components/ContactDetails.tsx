// components/ContactSection.tsx
import React from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const contactDetails = [
  {
    icon: (
      <span className="bg-white rounded-full p-3 flex items-center justify-center">
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
      <span className="bg-white rounded-full p-3 flex items-center justify-center">
        <Image src="/images/call.png" alt="Phone Icon" width={32} height={32} />
      </span>
    ),
    title: "Call Us Directly",
    details: <div>+91-7827550145</div>,
  },
  {
    icon: (
      <span className="bg-white rounded-full p-3 flex items-center justify-center">
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
  <section className="w-full flex flex-col items-start py-16 bg-white px-6 lg:px-24">
    {/* Heading aligned to left */}
    <h2
      className={`${montserrat.className} mb-12 text-[32px] font-bold leading-[100%] text-[#252525]`}
    >
      We’d love to hear from you
    </h2>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
      {contactDetails.map((c, idx) => (
        <div
          key={idx}
          className="flex flex-col items-start gap-4 bg-[#eee] p-8 rounded-[20px] shadow-sm h-[302px]"
        >
          {c.icon}
          <div
            className={`${montserrat.className} font-semibold text-lg text-gray-800`}
          >
            {c.title}
          </div>
          <div
            className={`${dmSans.className}`}
            style={{
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "18px",
              lineHeight: "35px",
              letterSpacing: "0%",
              color: "#7F7F7F",
            }}
          >
            {c.details}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ContactSection;
