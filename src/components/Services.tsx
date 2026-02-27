"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { services } from "@/lib/constants";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const headerRef = useScrollAnimation<HTMLDivElement>();
  const gridRef = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <section className="py-25" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <div ref={headerRef} className="text-center mb-15 animate-on-scroll">
          <div className="font-body text-xs font-semibold tracking-[3px] uppercase text-sf-blue mb-3">
            What We Do
          </div>
          <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-navy leading-[1.2] mb-5">
            End-to-End Salesforce® Solutions
          </h2>
          <p className="text-[1.1rem] text-gray-500 leading-[1.7] max-w-[600px] mx-auto">
            From strategy to implementation, we deliver certified expertise
            across the full Salesforce® ecosystem.
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
