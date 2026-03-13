"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocale } from "@/lib/i18n/LocaleContext";
import ContactForm from "./ContactForm";

export default function Contact() {
  const infoRef = useScrollAnimation<HTMLDivElement>();
  const formRef = useScrollAnimation<HTMLDivElement>();
  const { dict } = useLocale();

  return (
    <section className="py-25 bg-off-white" id="contact">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[1fr_1.2fr] gap-15 items-start max-lg:grid-cols-1">
          {/* Info */}
          <div ref={infoRef} className="pt-5 animate-on-scroll">
            <div className="font-body text-xs font-semibold tracking-[3px] uppercase text-sf-blue mb-3">
              {dict.contact.label}
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-navy leading-[1.2] mb-5">
              {dict.contact.title}
            </h2>
            <p className="text-[1.1rem] text-gray-500 leading-[1.7] max-w-[600px] mb-9">
              {dict.contact.description}
            </p>

            <div className="flex gap-4 items-start mb-6">
              <div className="w-11 h-11 min-w-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-lg">
                📧
              </div>
              <div>
                <h4 className="text-[0.88rem] font-semibold text-navy mb-0.5">
                  {dict.contact.emailLabel}
                </h4>
                <p className="text-[0.88rem] text-gray-500">
                  {dict.contact.email}
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start mb-6">
              <div className="w-11 h-11 min-w-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-lg">
                🕐
              </div>
              <div>
                <h4 className="text-[0.88rem] font-semibold text-navy mb-0.5">
                  {dict.contact.hoursLabel}
                </h4>
                <p className="text-[0.88rem] text-gray-500">
                  {dict.contact.hours}
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-sf-blue/[0.08] border border-sf-blue/15 rounded-lg px-4 py-2.5 mt-5">
              <span className="text-[0.82rem] font-semibold text-sf-blue">
                {dict.contact.certBadge}
              </span>
            </div>
          </div>

          {/* Form */}
          <div ref={formRef} className="animate-on-scroll">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
