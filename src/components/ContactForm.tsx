"use client";
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface ContactFormData {
  firstName: string;
  email: string;
  company: string;
  roleToHire: string;
  message: string;
}

const ContactComponent: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    email: '',
    company: '',
    roleToHire: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 bg-[#007BFF] flex items-center justify-center p-8 md:p-12">
        <div className="w-full max-w-lg">
          <div className="mb-6">
            <h1
              className="text-white mb-2"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              Have a Question ?
            </h1>
            <h2
              className="text-white"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '100%',
                letterSpacing: '0%'
              }}
            >
              We are Just a Message Away
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 w-full">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      value={formData.firstName}
      onChange={handleInputChange}
      className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleInputChange}
      className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    />
  </div>

  <div>
    <input
      type="text"
      name="company"
      placeholder="Company"
      value={formData.company}
      onChange={handleInputChange}
      className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    />
  </div>

  <div>
    <input
      type="text"
      name="roleToHire"
      placeholder="Role to hire"
      value={formData.roleToHire}
      onChange={handleInputChange}
      className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    />
  </div>

  <div>
    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleInputChange}
      rows={4}
      className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/70 py-3 px-0 focus:outline-none focus:border-white transition-colors resize-none"
      style={{
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: '100%',
        letterSpacing: '0%',
      }}
    />
  </div>

  <button
    type="submit"
    className="flex items-center justify-center gap-3 bg-white text-[#007BFF] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors mt-8 w-full md:w-auto"
    style={{
      fontFamily: 'DM Sans, sans-serif',
      fontWeight: 500,
      fontSize: '16px',
    }}
  >
    Send Request
  </button>
</form>

        </div>
      </div>

      {/* Right Side - Contact Information */}
      <div
        className="w-full md:w-1/2 relative bg-cover bg-center bg-no-repeat flex items-center justify-center min-h-[400px] md:min-h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/contactus.jpg')`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white max-w-md p-8 w-full">
          <h2
            className="text-white mb-12 text-center md:text-left"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '48px',
              letterSpacing: '0%'
            }}
          >
            Contact Us
          </h2>

          <div className="space-y-8 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-start md:gap-4 items-center gap-2">
              <MapPin className="text-white flex-shrink-0" size={24} />
              <div>
                <p
                  className="text-white"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  A-101/2, First Floor, Okhla Industrial
                </p>
                <p
                  className="text-white"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Area, Phase II, New Delhi – 110024
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-4 items-center gap-2">
              <Mail className="text-white flex-shrink-0" size={24} />
              <div className="space-y-1 text-center md:text-left">
                <p
                  className="text-white"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  <a href="mailto:info@huntingskuad.com" className="hover:underline">
                    info@huntingskuad.com
                  </a>
                </p>
                <p
                  className="text-white"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  <a href="mailto:growth@huntingskuad.com" className="hover:underline">
                    growth@huntingskuad.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:gap-4 items-center gap-2 justify-center md:justify-start">
              <Phone className="text-white flex-shrink-0" size={24} />
              <p
                className="text-white"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: '18px',
                  lineHeight: '100%',
                  letterSpacing: '0%'
                }}
              >
                +91-7827550145
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
