"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "600"] });

interface ContactFormData {
  firstName: string;
  email: string;
  company: string;
  roleToHire: string;
  message: string;
}

const TeamContactComponent: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    email: "",
    company: "",
    roleToHire: "",
    message: "",
  });
  

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Left Side - Image Section (hidden on mobile) */}
      <div className="relative w-full lg:w-1/2 min-h-[600px] hidden lg:block overflow-hidden">
          <Image
            src="/images/contactus2.jpg"
            alt="Contact Us"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover z-0"
          />
        
        {/* Text Content */}
        <div className="absolute bottom-12 left-8 z-20 text-white max-w-lg">
          <h1
            className={`${montserrat.className} font-bold text-[32px] leading-[100%] mb-4`}
          >
            Let&apos;s Build Your Team
            <br />
            Together
          </h1>
          <p
            className={`${dmSans.className} text-[18px] leading-[31px] text-[#87CEEB]`}
          >
            Or reach out directly to us via email or phone
          </p>
        </div>
      </div>

      {/* Right Side - Form Section (always visible) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-12">
        <div className="max-w-md mx-auto w-full">
          <h2
            className={`${montserrat.className} font-bold text-[28px] sm:text-[32px] leading-[100%] mb-2 text-gray-900`}
          >
            Have a Question ?
          </h2>
          <p
            className={`${montserrat.className} font-normal text-[24px] sm:text-[32px] leading-[100%] text-[#007BFF] mb-8`}
          >
            We are Just a Message Away
          </p>
          <form onSubmit={handleSubmit} className="space-y-2 w-full">
            {/* First Row - Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleInputChange}
                className={`${dmSans.className} text-[16px] sm:text-[18px] border-b-2 border-gray-300 bg-transparent placeholder-gray-500 py-3 px-0 focus:border-blue-500 focus:outline-none w-full`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className={`${dmSans.className} text-[16px] sm:text-[18px] border-b-2 border-gray-300 bg-transparent placeholder-gray-500 py-3 px-0 focus:border-blue-500 focus:outline-none w-full`}
              />
            </div>
            {/* Company - full width */}
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className={`${dmSans.className} text-[16px] sm:text-[18px] border-b-2 border-gray-300 bg-transparent placeholder-gray-500 py-3 px-0 focus:border-blue-500 focus:outline-none w-full`}
              />
            </div>
            {/* Role to hire - full width */}
            <div>
              <input
                type="text"
                name="roleToHire"
                placeholder="Role to hire"
                value={formData.roleToHire}
                onChange={handleInputChange}
                className={`${dmSans.className} text-[16px] sm:text-[18px] border-b-2 border-gray-300 bg-transparent placeholder-gray-500 py-3 px-0 focus:border-blue-500 focus:outline-none w-full`}
              />
            </div>
            {/* Message */}
            <textarea
              name="message"
              placeholder="Message"
              rows={2}
              value={formData.message}
              onChange={handleInputChange}
              className={`${dmSans.className} text-[16px] sm:text-[18px] border-b-2 border-gray-300 bg-transparent placeholder-gray-500 py-3 px-0 focus:border-blue-500 focus:outline-none resize-none w-full`}
            />
            {/* Submit Button */}
            <button
              type="submit"
              className={`${montserrat.className} font-normal text-[16px] text-[#007BFF]`}
              style={{
                width: 212,
                height: 48,
                borderRadius: 50,
                borderWidth: 1,
                borderColor: "#FFFFFF",
                backgroundColor: "#FFFFFF",
                padding: "10px",
                gap: "10px",
                opacity: 1,
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f0f0f0";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FFFFFF";
              }}
            >
              Send Request
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamContactComponent;
