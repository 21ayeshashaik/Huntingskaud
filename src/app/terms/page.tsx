// app/terms-and-conditions/page.tsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Header";
import ScrollTimeline from "@/components/ScrollTimeline";

const TermsAndConditions = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <ScrollTimeline />
      <div className="min-h-screen bg-sky-100 text-gray-800 flex flex-col items-center font-sans pt-1">
        <div className="w-full max-w-3xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 bg-white rounded-2xl shadow-lg mt-8 sm:mt-12 relative">
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute left-4 top-4 px-4 py-2 rounded-lg bg-sky-600 text-white text-sm sm:text-base font-medium hover:bg-sky-700 transition"
        >
          ← Back
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold text-sky-700 mb-4 text-center">
          Terms & Conditions
        </h1>
        <p className="mb-4 sm:mb-6 text-base sm:text-lg text-sky-700 text-center">
          Effective Date: September 11, 2025
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6 sm:mt-8">
          1. Introduction
        </h2>
        <p className="mb-4">
          This Agreement (“Terms”) governs your use of the hunting squad job portal and related services. By visiting or using the portal, applicants, employers, and visitors agree to comply with these Terms. Continued use constitutes acceptance of all clauses herein.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          2. Eligibility & Registration
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Registration is required for job applications and employer listings.</li>
          <li>You must provide accurate and up-to-date registration information.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          3. Candidate Responsibilities
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Applicants must truthfully complete profiles and submit genuine documents.</li>
          <li>Misrepresentation or submitting false information leads to immediate termination and possible legal action.</li>
          <li>Candidates are responsible for the confidentiality of login data.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          4. Employer Responsibilities
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Employers must accurately describe job offers, including roles, requirements, and remuneration.</li>
          <li>Employers are required to provide the wage stated; failure may result in action or removal.</li>
          <li>Employer profiles and job postings must comply with applicable employment laws.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          5. Intellectual Property
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>All portal content, design, trademarks, and code remain © hunting squad company or licensors.</li>
          <li>Unauthorised copying, extraction, or derivative works are prohibited.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          6. Conduct & Communication
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Users must maintain professional, respectful communication at all times.</li>
          <li>Abusive, illegal, or unethical behavior may result in account suspension or removal.</li>
          <li>Direct contact with other users should comply with site policies.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          7. Payment Terms
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Employers are obligated to pay agreed fees and wages promptly.</li>
          <li>Delayed payments can trigger reporting and legal procedures.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          8. Privacy Policy
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Personal information is processed in accordance with the portal&apos;s privacy policy.</li>
          <li>Do not share confidential user data except as permitted for recruitment and employment.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          9. Limitation of Liability
        </h2>
        <p className="mb-4">
          The hunting squad company is not liable for third-party actions, unfulfilled job offers, or damages arising from site use. Users accept responsibility for their decisions and interactions.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          10. Enforcement and Dispute Resolution
        </h2>
        <ul className="list-disc ml-5 mb-4">
          <li>Breach of terms may result in account suspension, removal, or legal action.</li>
          <li>Disputes are resolved per the platform’s policies and Indian law.</li>
          <li>Complaints will be responded to within 72 business hours.</li>
        </ul>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          11. Amendments
        </h2>
        <p className="mb-4">
          These Terms and Conditions may change. Updates take effect upon posting. Continued use indicates acceptance.
        </p>

        <h2 className="text-lg sm:text-xl font-semibold text-sky-500 mb-2 mt-6">
          Contact Us
        </h2>
        <p>
          For legal, job-related, or technical inquiries, email:{" "}
          <a
            href="mailto:support@huntingsquad.com"
            className="text-sky-700 underline break-all"
          >
            support@huntingsquad.com
          </a>
        </p>
        </div>
      </div>
    </>
  );
};

export default TermsAndConditions;
