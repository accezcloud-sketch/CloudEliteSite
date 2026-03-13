"use client";

import { useLocale } from "@/lib/i18n/LocaleContext";

export default function TrustBar() {
  const { dict } = useLocale();

  const trustItems = [
    { icon: "🏆", label: dict.trust.certifiedPartner },
    { icon: "✓", label: dict.trust.certifiedPersonnel },
    { icon: "🔒", label: dict.trust.security },
    { icon: "🌍", label: dict.trust.globalDelivery },
  ];

  return (
    <div className="bg-off-white border-t border-b border-gray-100 py-9">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-12 flex-wrap max-md:gap-6">
          {trustItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2.5 text-[0.85rem] font-medium text-gray-500"
            >
              <div className="w-9 h-9 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-base">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
