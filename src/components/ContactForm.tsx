"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-gray-100 rounded-[20px] p-11 shadow-[0_8px_40px_rgba(11,29,58,0.06)] flex flex-col items-center justify-center min-h-[400px] text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="font-display text-2xl font-semibold text-navy mb-3">
          Thank You!
        </h3>
        <p className="text-gray-500 text-base">
          We&apos;ve received your request and will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-gray-100 rounded-[20px] p-11 shadow-[0_8px_40px_rgba(11,29,58,0.06)] max-md:p-7"
    >
      <h3 className="font-display text-2xl font-semibold text-navy mb-6">
        Request a Free Consultation
      </h3>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        <div className="mb-4">
          <label className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide">
            First Name
          </label>
          <input
            type="text"
            placeholder="John"
            className="w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Doe"
            className="w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide">
          Work Email
        </label>
        <input
          type="email"
          placeholder="john@company.com"
          className="w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide">
          Company
        </label>
        <input
          type="text"
          placeholder="Your company name"
          className="w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white"
        />
      </div>

      <div className="mb-4">
        <label className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide">
          What Salesforce® solution are you interested in?
        </label>
        <select defaultValue="" className="w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white">
          <option value="" disabled>
            Select a service
          </option>
          <option>Sales Cloud</option>
          <option>Service Cloud</option>
          <option>Marketing Cloud</option>
          <option>Experience Cloud</option>
          <option>Integration &amp; Migration</option>
          <option>Custom Development</option>
          <option>Not sure — need guidance</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide">
          Tell us about your project
        </label>
        <textarea
          placeholder="Briefly describe your goals and challenges..."
          className="w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 resize-y min-h-[110px] focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white"
        />
      </div>

      <button
        type="submit"
        className="w-full py-4 font-body text-base font-semibold text-white bg-linear-to-br from-sf-blue to-sf-blue-dark border-none rounded-[10px] cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(0,161,224,0.25)] mt-2 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,161,224,0.35)]"
      >
        Submit Request →
      </button>
    </form>
  );
}
