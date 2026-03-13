"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocale } from "@/lib/i18n/LocaleContext";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>(0.1);
  const { dict } = useLocale();

  const services = [
    {
      icon: "💼",
      title: dict.services.salesCloud,
      description: dict.services.salesCloudDesc,
      iconBg: "bg-sf-blue/10",
      iconColor: "text-sf-blue",
    },
    {
      icon: "🔧",
      title: dict.services.serviceCloud,
      description: dict.services.serviceCloudDesc,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: "📣",
      title: dict.services.marketingCloud,
      description: dict.services.marketingCloudDesc,
      iconBg: "bg-gold/10",
      iconColor: "text-gold",
    },
    {
      icon: "🌐",
      title: dict.services.experienceCloud,
      description: dict.services.experienceCloudDesc,
      iconBg: "bg-[#8A63D2]/10",
      iconColor: "text-[#8A63D2]",
    },
    {
      icon: "🔄",
      title: dict.services.integration,
      description: dict.services.integrationDesc,
      iconBg: "bg-[#E85A5A]/10",
      iconColor: "text-[#E85A5A]",
    },
    {
      icon: "⚙️",
      title: dict.services.customDev,
      description: dict.services.customDevDesc,
      iconBg: "bg-sf-blue/10",
      iconColor: "text-sf-blue",
    },
  ];

  return (
    <section className="py-25" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-15 animate-on-scroll">
          <div className="font-body text-xs font-semibold tracking-[3px] uppercase text-sf-blue mb-3">
            {dict.services.label}
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-navy leading-[1.2] mb-5">
            {dict.services.title}
          </h2>
          <p className="text-[1.1rem] text-gray-500 leading-[1.7] max-w-[600px] mx-auto">
            {dict.services.description}
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-3 gap-6 animate-on-scroll max-lg:grid-cols-2 max-md:grid-cols-1"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
