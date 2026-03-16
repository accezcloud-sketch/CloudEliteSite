"use client";

import Script from "next/script";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function ContactForm() {
  const { locale, dict } = useLocale();

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
          {dict.contact.formTitle}
        </h3>

        {/* Hidden Salesforce Fields */}
        <input type="hidden" name="oid" value="00D41000002kA0p" />
        <input
          type="hidden"
          name="retURL"
          value={`https://cloudelite.co/${locale}/thankyou/`}
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
              {dict.contact.firstName}
            </label>
            <input
              id="first_name"
              maxLength={40}
              name="first_name"
              type="text"
              placeholder={dict.contact.firstNamePlaceholder}
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last_name"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              {dict.contact.lastName}
            </label>
            <input
              id="last_name"
              maxLength={80}
              name="last_name"
              type="text"
              placeholder={dict.contact.lastNamePlaceholder}
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
          >
            {dict.contact.workEmail}
          </label>
          <input
            id="email"
            maxLength={80}
            name="email"
            type="email"
            placeholder={dict.contact.emailPlaceholder}
            className={inputClass}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="company"
            className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
          >
            {dict.contact.company}
          </label>
          <input
            id="company"
            maxLength={40}
            name="company"
            type="text"
            placeholder={dict.contact.companyPlaceholder}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              {dict.contact.mobile}
            </label>
            <input
              id="mobile"
              maxLength={40}
              name="mobile"
              type="tel"
              placeholder={dict.contact.mobilePlaceholder}
              className={inputClass}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
            >
              {dict.contact.city}
            </label>
            <input
              id="city"
              maxLength={40}
              name="city"
              type="text"
              placeholder={dict.contact.cityPlaceholder}
              className={inputClass}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="Description"
            className="block text-[0.82rem] font-semibold text-navy mb-1.5 tracking-wide"
          >
            {dict.contact.projectLabel}
          </label>
          <textarea
            id="Description"
            maxLength={3000}
            name="description"
            rows={4}
            placeholder={dict.contact.projectPlaceholder}
            className={`${inputClass} resize-y min-h-[110px]`}
          />
        </div>

        <button
          type="submit"
          name="submit"
          className="w-full py-4 font-body text-base font-semibold text-white bg-linear-to-br from-sf-blue to-sf-blue-dark border-none rounded-[10px] cursor-pointer transition-all duration-300 shadow-[0_4px_20px_rgba(0,161,224,0.25)] mt-2 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,161,224,0.35)]"
        >
          {dict.contact.submit}
        </button>
      </form>
    </>
  );
}
