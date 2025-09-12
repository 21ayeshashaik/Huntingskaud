"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Montserrat, DM_Sans } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";

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
  form?: string;
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
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.roleToHire.trim()) newErrors.roleToHire = "Role is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setSubmitted(false);
      return;
    }
    setIsLoading(true);
    setSubmitted(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          email: "",
          company: "",
          roleToHire: "",
          message: "",
        });
        setErrors({});
      } else {
        setErrors({ form: result.message || "Submission failed" });
      }
    } catch {
      setErrors({ form: "Server error. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-90px)] bg-white">
     
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
          <h1
            className={`${montserrat.className} font-bold text-[26px] sm:text-[32px] leading-tight mb-3`}
          >
            Let&apos;s Build Your Team <br /> Together
          </h1>
          <p
            className={`${dmSans.className} text-[15px] sm:text-[18px] leading-[26px] text-[#87CEEB]`}
          >
            Or reach out directly to us via email or phone
          </p>
        </div>
      </div>

     
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 md:py-10">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
          <h2
            className={`${montserrat.className} font-bold text-[24px] sm:text-[28px] mb-1 text-gray-900`}
          >
            Have a Question?
          </h2>
          <p
            className={`${montserrat.className} font-normal text-[18px] sm:text-[24px] text-[#007BFF] mb-6`}
          >
            We are Just a Message Away
          </p>

          {submitted && (
            <p className="mt-4 text-green-600 font-medium">
              Form submitted successfully!
            </p>
          )}
          {errors.form && (
            <p className="mt-4 text-red-600 font-medium">{errors.form}</p>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-3 sm:space-y-4 w-full"
            noValidate
          >
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`${
                    dmSans.className
                  } w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={isLoading}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`${
                    dmSans.className
                  } w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  disabled={isLoading}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

          
            <div>
              <input
                type="text"
                name="company"
                placeholder="Company"
                value={formData.company}
                onChange={handleInputChange}
                className={`${
                  dmSans.className
                } w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                  errors.company ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isLoading}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>

            
            <div>
              <input
                type="text"
                name="roleToHire"
                placeholder="Role to hire"
                value={formData.roleToHire}
                onChange={handleInputChange}
                className={`${
                  dmSans.className
                } w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none ${
                  errors.roleToHire ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isLoading}
              />
              {errors.roleToHire && (
                <p className="text-red-500 text-xs mt-1">{errors.roleToHire}</p>
              )}
            </div>

          
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows={2}
                value={formData.message}
                onChange={handleInputChange}
                className={`${
                  dmSans.className
                } w-full border-b-2 bg-transparent py-2 text-[15px] sm:text-[16px] placeholder-gray-500 focus:border-blue-500 focus:outline-none resize-none ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                disabled={isLoading}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

          
            <button
              type="submit"
              disabled={isLoading}
              className={`${montserrat.className} relative overflow-hidden group font-medium text-[15px] text-[#007BFF] w-[200px] h-[45px] rounded-full border border-gray-300 bg-white shadow transition-all duration-300 hover:bg-[#007BFF] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white`}
            >
              <span className="absolute inset-0 bg-blue-50 scale-0 group-active:scale-150 transition-transform duration-500 rounded-full" />
              <span className="relative z-10 flex items-center justify-center">
                {isLoading ? "Sending..." : "Send Request"}
                <FiArrowUpRight className="ml-2" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamContactComponent;
