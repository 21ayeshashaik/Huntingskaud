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

interface FormErrors {
  firstName?: string;
  email?: string;
  company?: string;
  roleToHire?: string;
  message?: string;
}

const TeamContactComponent: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    email: "",
    company: "",
    roleToHire: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.roleToHire.trim()) newErrors.roleToHire = "Role is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    } else setSubmitted(false);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-90px)] bg-white">
      {/* Left Side - Image */}
      <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-[calc(100vh-90px)] overflow-hidden">
        <Image
          src="/images/contactus2.jpg"
          alt="Contact Us"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-10 left-6 sm:left-10 z-20 text-white max-w-lg px-4">
          <h1 className={`${montserrat.className} font-bold text-[26px] sm:text-[32px] leading-tight mb-3`}>
            Let&apos;s Build Your Team <br /> Together
          </h1>
          <p className={`${dmSans.className} text-[15px] sm:text-[18px] leading-[26px] text-[#87CEEB]`}>
            Or reach out directly to us via email or phone
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <h2 className={`${montserrat.className} font-bold text-[24px] sm:text-[28px] mb-1 text-gray-900`}>
            Have a Question?
          </h2>
          <p className={`${montserrat.className} font-normal text-[18px] sm:text-[24px] text-[#007BFF] mb-6`}>
            We are Just a Message Away
          </p>

          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 w-full">
            {/* First Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`${dmSans.className} w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${dmSans.className} w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Company */}
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className={`${dmSans.className} w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
            </div>

            {/* Role */}
            <div>
              <input
                type="text"
                name="roleToHire"
                placeholder="Role to hire"
                value={formData.roleToHire}
                onChange={handleInputChange}
                className={`${dmSans.className} w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                  errors.roleToHire ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.roleToHire && <p className="text-red-500 text-xs mt-1">{errors.roleToHire}</p>}
            </div>

            {/* Message */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={2}
                value={formData.message}
                onChange={handleInputChange}
                className={`${dmSans.className} w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Button */}
            <button
              type="submit"
              className={`${montserrat.className} relative overflow-hidden group font-medium text-[15px] text-[#007BFF] w-[200px] h-[45px] rounded-full border border-gray-300 bg-white shadow transition-all duration-300 hover:bg-[#007BFF] hover:text-white`}
            >
              <span className="absolute inset-0 bg-blue-50 scale-0 group-active:scale-150 transition-transform duration-500 rounded-full" />
              <span className="relative z-10 flex items-center justify-center">
                Send Request
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </form>

          {submitted && <p className="mt-4 text-green-600 font-medium">✅ Form submitted successfully!</p>}
        </div>
      </div>
    </div>
  );
};

export default TeamContactComponent;
