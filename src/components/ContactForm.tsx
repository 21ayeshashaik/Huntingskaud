"use client";
import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.roleToHire.trim()) newErrors.roleToHire = "Role is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col md:flex-row items-stretch"
      style={{ minHeight: "calc(100vh - 90px)" }} // keeps it below navbar
    >
      {/* LEFT: Form */}
      <div className="w-full md:w-1/2 bg-[#007BFF] flex items-center justify-center p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24">
        {/* form wrapper — allow form width to grow on large screens so fields don't stretch vertically */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <header className="mb-6 md:mb-8">
            <h1
              className="text-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 700,
                fontSize: "28px",
                lineHeight: "1",
              }}
            >
              Have a Question?
            </h1>
            <p
              className="text-white mt-1"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
              }}
            >
              We are just a message away
            </p>
          </header>

          <form onSubmit={handleSubmit} className="w-full">
            {/* Grid: fixed gaps between fields (gap-y = vertical gap, gap-x = horizontal gap). */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First name"
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition"
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
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition"
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Full width fields use consistent bottom margin (mb-4) — keeps vertical rhythm fixed */}
            <div className="mt-4 mb-4">
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition"
              />
              {errors.company && <p className="text-red-300 text-sm mt-1">{errors.company}</p>}
            </div>

            <div className="mb-4">
              <input
                name="roleToHire"
                value={formData.roleToHire}
                onChange={handleInputChange}
                placeholder="Role to hire"
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition"
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
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition resize-none"
              />
              {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 rounded-full bg-white text-[#007BFF] hover:scale-105 transition transform"
                style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 500 }}
              >
                Send Request
              </button>

              {submitted && (
                <p className="text-green-200 mt-3">✅ Your request has been sent successfully!</p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT: Contact info / background */}
      <div
        className="w-full md:w-1/2 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('images/contactus.jpg')`,
          padding: "1.5rem", // keeps padding consistent with left (you can replace with tailwind classes if preferred)
        }}
      >
        <div className="w-full max-w-md text-white">
          <h2
            className="mb-6"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 28 }}
          >
            Contact Us
          </h2>

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
                <a href="mailto:info@huntingskuad.com" className="hover:underline">
                  info@huntingskuad.com
                </a>
                <br />
                <a href="mailto:growth@huntingskuad.com" className="hover:underline">
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
