"use client";

import Link from "next/link";
import { useLocale } from "@/lib/i18n/LocaleContext";

export default function ThankYou() {
  const { locale, dict } = useLocale();

  return (
    <section className="min-h-screen flex items-center justify-center bg-off-white px-6">
      <div className="text-center max-w-lg">
        <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-navy leading-[1.2] mb-4">
          {dict.thankyou.title}
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-8">
          {dict.thankyou.description}
        </p>
        <Link
          href={`/${locale}/`}
          className="inline-flex items-center gap-2 bg-linear-to-br from-sf-blue to-sf-blue-dark text-white font-body text-base font-semibold px-8 py-4 rounded-[10px] no-underline transition-all duration-300 shadow-[0_4px_20px_rgba(0,161,224,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,161,224,0.4)]"
        >
          {dict.thankyou.back}
        </Link>
      </div>
    </section>
  );
}
