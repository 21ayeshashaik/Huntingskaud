"use client";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "500"] });
// Use DM Sans for body/link text to avoid additional font loader

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 xl:px-20 py-12 sm:py-16 lg:py-20 
                      grid grid-cols-1 md:grid-cols-[320px_1fr_1fr] gap-y-10 md:gap-y-0 md:gap-x-16 lg:gap-x-20 items-start">

        {/* Logo + Description */}
        <div className="flex flex-col max-w-[320px]">
          {/* Logo */}
          <div className="relative w-[200px] h-[180px] sm:w-[220px] sm:h-[200px] mb-2 -mt-6 sm:-mt-10">
            <Image
              src="/images/logo.png"
              alt="Hunting Skaud logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Description */}
          <p
            className={`${dmSans.className} text-[14px] text-[#7F7F7F] leading-[22px]`}
          >
            At Hunting Skuad, we are architects of career success and business growth.
            Established with a vision to redefine recruitment, we bring a
            people-centric, innovative, and ethical approach to talent acquisition.
          </p>
        </div>

        {/* Quick Links + Services */}
        <div className="grid grid-cols-2 gap-x-8 sm:gap-x-10 lg:gap-x-16">
          <div>
            <h4
              className={`${montserrat.className} text-[15px] font-semibold text-[#3D3D3D] mb-3`}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col space-y-2 sm:space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Our Advantage", href: "/advantages" },
                { label: "Our Process", href: "/process" },
                { label: "Contact Us", href: "/contact" },
              ].map(({ label, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className={`${dmSans.className} text-[14px] text-[#7F7F7F] leading-[22px] hover:text-[#007BFF] transition`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className={`${montserrat.className} text-[15px] font-semibold text-[#3D3D3D] mb-3`}
            >
              Services
            </h4>
            <ul className="flex flex-col space-y-2 sm:space-y-3">
              {[
                { label: "Tech Recruitment", href: "/services/tech-recruitment" },
                { label: "Executive Search", href: "/services/executive-search" },
                { label: "Resource Process Outsourcing", href: "/services/rpo" },
                { label: "Start-Up Accelerators", href: "/services/startup-accelerators" },
                { label: "Talent Mapping", href: "/services/talent-mapping" },
                { label: "Diversity & Inclusion", href: "/services/diversity-inclusion" },
              ].map(({ label, href }, i) => (
                <li key={i}>
                  <a
                    href={href}
                    className={`${dmSans.className} text-[14px] text-[#7F7F7F] leading-[22px] hover:text-[#007BFF] transition`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h4
            className={`${montserrat.className} text-[15px] font-semibold text-[#3D3D3D] mb-3`}
          >
            Contact Us
          </h4>
          <ul className="flex flex-col space-y-3">
            {/* Phone */}
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mt-1 text-[#007BFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.27 1.05l-1.6 1.6a16 16 0 006.36 6.36l1.6-1.6a1 1 0 011.05-.27l3.3 1.1a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 6V5z"
                />
              </svg>
              <a
                href="tel:+917827550145"
                className={`${dmSans.className} text-[14px] text-[#7F7F7F] leading-[22px] hover:underline`}
              >
                +91-7827550145
              </a>
            </li>

            {/* Email */}
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mt-1 text-[#007BFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a
                href="mailto:info@huntingskaud.com"
                className={`${dmSans.className} text-[14px] text-[#7F7F7F] leading-[22px] hover:underline`}
              >
                info@huntingskaud.com
              </a>
            </li>

            {/* Location */}
            <li className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mt-1 text-[#007BFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 22s8-4.5 8-12a8 8 0 10-16 0c0 7.5 8 12 8 12z"
                />
              </svg>
              <address
                className={`${dmSans.className} text-[14px] text-[#7F7F7F] leading-[22px] not-italic`}
              >
                A-101/2, First Floor, Okhla Industrial Area, Phase II, New Delhi – 110024
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-3 px-6 lg:px-12 xl:px-20 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-2">
        <span className={`${dmSans.className} text-[13px] text-[#7F7F7F]`}>
          All Rights Reserved ©2025 Hunting Skaud
        </span>
        <span className={`${dmSans.className} text-[13px] text-[#007BFF] flex gap-3`}>
          <a href="/privacy-policy" className="underline hover:text-[#3D3D3D] transition">
            Privacy Policy
          </a>
          |
          <a href="/terms" className="underline hover:text-[#3D3D3D] transition">
            Terms &amp; Conditions
          </a>
        </span>
      </div>
    </footer>
  );
}
