"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ContactForm() {
  // useEffect(() => {
  //   const timestamp = () => {
  //     const response = document.getElementById(
  //       "g-recaptcha-response"
  //     ) as HTMLInputElement | null;
  //     if (response == null || response.value.trim() === "") {
  //       const captchaSettings = document.getElementsByName(
  //         "captcha_settings"
  //       )[0] as HTMLInputElement;
  //       if (captchaSettings) {
  //         const elems = JSON.parse(captchaSettings.value);
  //         elems["ts"] = JSON.stringify(new Date().getTime());
  //         captchaSettings.value = JSON.stringify(elems);
  //       }
  //     }
  //   };

  //   const interval = setInterval(timestamp, 500);
  //   return () => clearInterval(interval);
  // }, []);

  const inputClass =
    "w-full px-4 py-3.5 font-body text-[0.92rem] text-navy bg-off-white border border-gray-100 rounded-[10px] outline-none transition-all duration-300 focus:border-sf-blue focus:shadow-[0_0_0_3px_rgba(0,161,224,0.1)] focus:bg-white";

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="lazyOnload"
      />

      <form
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D41000002kA0p"
        method="POST"
        className="bg-white border border-gray-100 rounded-[20px] p-11 shadow-[0_8px_40px_rgba(11,29,58,0.06)] max-md:p-7"
      >
        <h3 className="font-display text-2xl font-semibold text-navy mb-6">
          Request a Free Consultation
        </h3>

        {/* Hidden Salesforce Fields */}
        {/* <input
          type="hidden"
          name="captcha_settings"
          value='{"keyname":"CloudEliteV2","fallback":"true","orgId":"00D41000002kA0p","ts":""}'
        /> */}
        <input type="hidden" name="oid" value="00D41000002kA0p" />
        <input
          type="hidden"
          name="retURL"
          value="https://cloudelite.co/thankyou"
        />
        <input
          type="hidden"
          name="recordType"
          id="recordType"
          value="0122M000001YhIDQA0"
        />
        <input type="hidden" name="lead_source" value="Web" />

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="mb-4">
            <label
              htmlFor="first_name"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              First Name
            </label>
            <input
              id="first_name"
              maxLength={40}
              name="first_name"
              type="text"
              placeholder="John"
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              Last Name
            </label>
            <input
              id="last_name"
              maxLength={80}
              name="last_name"
              type="text"
              placeholder="Doe"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
          >
            Work Email
          </label>
          <input
            id="email"
            maxLength={80}
            name="email"
            type="email"
            placeholder="john@company.com"
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
          >
            Company
          </label>
          <input
            id="company"
            maxLength={40}
            name="company"
            type="text"
            placeholder="Your company name"
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              Mobile
            </label>
            <input
              id="mobile"
              maxLength={40}
              name="mobile"
              type="tel"
              placeholder="+1 234 567 8900"
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              City
            </label>
            <input
              id="city"
              maxLength={40}
              name="city"
              type="text"
              placeholder="New York"
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Description"
            className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
          >
            Tell us about your project
          </label>
          <textarea
            id="Description"
            maxLength={3000}
            name="description"
            rows={4}
            placeholder="Briefly describe your goals and challenges..."
            className={`${inputClass} resize-y min-h-[110px]`}
          />
        </div>

        {/* reCAPTCHA */}
        {/* <div
          className="g-recaptcha mb-6"
          data-sitekey="6Leh2n8sAAAAAPdI5TeoZC3Ydo9t4mKnnw5JoPNI"
        /> */}

        <button
          type="submit"
          name="submit"
          className="w-full py-4 font-body text-base font-semibold text-white bg-linear-to-br from-sf-blue to-sf-blue-dark border-none rounded-[10px] cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(0,161,224,0.25)] mt-2 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,161,224,0.35)]"
        >
          Submit Request →
        </button>
      </form>
    </>
  );
}
