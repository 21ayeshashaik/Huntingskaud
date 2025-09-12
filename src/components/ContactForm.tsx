"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";

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

const ContactComponent: React.FC = () => {
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

  // Input handler
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (
      !/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email)
    )
      newErrors.email = "Enter a valid email";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.roleToHire.trim()) newErrors.roleToHire = "Role is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long";

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
        setSubmitted(false);
      }
    } catch {
      setErrors({ form: "Server error. Please try again later." });
      setSubmitted(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col md:flex-row items-stretch"
      style={{ minHeight: "calc(100vh - 90px)" }}
    >
     
      <div className="w-full md:w-1/2 bg-[#007BFF] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <header className="mb-6 md:mb-8">
            <h1 className="text-white font-bold text-[28px] leading-none">
              Have a Question?
            </h1>
            <p className="text-white mt-1 font-semibold text-[20px]">
              We are just a message away
            </p>
          </header>

          {submitted && (
            <div className="bg-green-600/20 border border-green-500 text-green-200 px-4 py-2 rounded-md mb-4">
              Your request has been sent successfully!
            </div>
          )}
          {errors.form && (
            <div className="bg-red-600/20 border border-red-500 text-red-200 px-4 py-2 rounded-md mb-4">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  disabled={isLoading}
                  className={`w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 focus:outline-none focus:border-white transition ${
                    errors.firstName ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-300 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  disabled={isLoading}
                  className={`w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 focus:outline-none focus:border-white transition ${
                    errors.email ? "border-red-500" : "border-white/30"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mt-4 mb-4">
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                disabled={isLoading}
                className={`w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 focus:outline-none focus:border-white transition ${
                  errors.company ? "border-red-500" : "border-white/30"
                }`}
              />
              {errors.company && (
                <p className="text-red-300 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div className="mb-4">
              <input
                name="roleToHire"
                value={formData.roleToHire}
                onChange={handleInputChange}
                placeholder="Role to hire"
                disabled={isLoading}
                className={`w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 focus:outline-none focus:border-white transition ${
                  errors.roleToHire ? "border-red-500" : "border-white/30"
                }`}
              />
              {errors.roleToHire && (
                <p className="text-red-300 text-sm mt-1">{errors.roleToHire}</p>
              )}
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                placeholder="Message"
                disabled={isLoading}
                className={`w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 focus:outline-none focus:border-white transition resize-none ${
                  errors.message ? "border-red-500" : "border-white/30"
                }`}
              />
              {errors.message && (
                <p className="text-red-300 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="mt-2 flex items-center gap-4">
              <button
                type="submit"
                disabled={isLoading}
                className="group relative px-8 py-3 rounded-full bg-white text-[#007BFF] font-medium overflow-hidden transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  {isLoading ? "Sending..." : "Send Request"}
                </span>

               
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out">
                  <FiArrowUpRight
                    className="text-[#007BFF] transition-transform duration-300 group-hover:rotate-45"
                    size={16}
                  />
                </div>

               
                <style jsx>{`
                  .group:hover span {
                    transform: translateX(-16px);
                    transition: transform 0.3s ease;
                  }
                `}</style>
              </button>
            </div>
          </form>
        </div>
      </div>

      
      <div
        className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundImage: `url('images/contactus.jpg')`,
          padding: "1.5rem",
        }}
      >
        <div className="absolute inset-0 bg-black/50 block md:hidden"></div>
        <div className="hidden md:block absolute inset-0">
          <div
            className="absolute top-1/2 left-[32%] transform -translate-x-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-sm border border-white/10"
            style={{ width: "600px", height: "500px", borderRadius: "20px" }}
          ></div>
        </div>

        <div className="w-full max-w-md text-white relative z-10">
          <h2 className="mb-6 font-semibold text-[28px]">Contact Us</h2>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin size={20} />
              <div>
                <p>A-101/2, First Floor, Okhla Industrial</p>
                <p>Area, Phase II, New Delhi – 110024</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail size={20} />
              <div>
                <a
                  href="mailto:info@huntingskuad.com"
                  className="hover:underline"
                >
                  info@huntingskuad.com
                </a>
                <br />
                <a
                  href="mailto:growth@huntingskuad.com"
                  className="hover:underline"
                >
                  growth@huntingskuad.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone size={20} />
              <p>+91-7827550145</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactComponent;
