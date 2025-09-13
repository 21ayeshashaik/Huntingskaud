// app/privacy-policy/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Header";
import ScrollTimeline from "@/components/ScrollTimeline";

const PrivacyPolicy = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <ScrollTimeline />
      <div className="min-h-screen bg-sky-100 text-gray-800 flex flex-col items-center font-sans">
        <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-white rounded-2xl shadow-lg mt-8 sm:mt-12 relative">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 px-4 py-2 rounded-lg bg-sky-600 text-white text-sm sm:text-base font-medium hover:bg-sky-700 transition"
        >
          ← Back
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-4 text-center">
          Privacy Policy
        </h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-sky-700 text-center">
          Effective Date: September 11, 2025
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6 sm:mt-8">
          1. Introduction
        </h2>
        <p className="mb-4">
          This Privacy Policy explains how Hunting Squad Company (“we”, “us”, “our”) collects, uses, discloses, and protects your personal information when you use our job portal and related services.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          2. Information We Collect
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Personal Identification data: name, email, address, phone number</li>
          <li>Application details: CVs, job history, education, certifications</li>
          <li>Profile assets: profile photos, social media links</li>
          <li>Technical data: IP address, browser info, device info, cookies</li>
          <li>Usage data: site navigation, clicks, times, interactions</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          3. How We Use Your Data
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>To process and manage job applications and recruitment</li>
          <li>To verify identities and maintain secure access</li>
          <li>To personalize your user experience and improve our services</li>
          <li>To communicate important updates, notifications, or offers</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          4. Data Sharing & Disclosure
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>With employers, for job application matching and hiring purposes</li>
          <li>With authorized service providers (such as hosting, analytics, security tools)</li>
          <li>With third parties if required by law, regulation, or judicial proceeding</li>
          <li>With your consent, to specific external platforms or partners</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          5. Data Retention
        </h2>
        <p className="mb-4">
          Personal data is retained only as long as needed to fulfil job application, employment, and legal obligations. Data is securely deleted or anonymized after retention periods expire.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          6. Security of Information
        </h2>
        <p className="mb-4">
          We implement industry-standard physical, procedural, and electronic safeguards to protect your information. No security system is infallible, but we regularly review and update our processes to maintain protection.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          7. Your Rights
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Access: Request a copy of your personal data</li>
          <li>Correction: Request updates or corrections to your personal data</li>
          <li>Deletion: Request erasure of your data, under applicable law</li>
          <li>Objection: Limit or object to certain processing activities</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          8. Third-Party Links & Integrations
        </h2>
        <p className="mb-4">
          Our site may contain external links (e.g., LinkedIn) and third-party integrations. This Privacy Policy does not cover external sites; please review their own privacy notices.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          9. Changes to Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Significant changes will be communicated via the site or by email. Last reviewed date will be displayed at the top.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          Contact Us
        </h2>
        <p>
          For privacy concerns, access/account requests, or complaints, contact:{" "}
          <a href="mailto:privacy@huntingsquad.com" className="text-sky-700 underline break-all">
            privacy@huntingsquad.com
          </a>
        </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
