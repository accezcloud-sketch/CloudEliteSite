"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocale } from "@/lib/i18n/LocaleContext";
import StatBox from "./StatBox";
import FeatureCard from "./FeatureCard";

export default function WhySection() {
  const leftRef = useScrollAnimation<HTMLDivElement>();
  const rightRef = useScrollAnimation<HTMLDivElement>();
  const { dict } = useLocale();

  const stats = [
    { number: dict.why.stat1, label: dict.why.stat1Label },
    { number: dict.why.stat2, label: dict.why.stat2Label },
    { number: dict.why.stat3, label: dict.why.stat3Label },
    { number: dict.why.stat4, label: dict.why.stat4Label },
  ];

  const features = [
    {
      icon: "👤",
      title: dict.why.feature1Title,
      description: dict.why.feature1Desc,
    },
    {
      icon: "🏅",
      title: dict.why.feature2Title,
      description: dict.why.feature2Desc,
    },
    {
      icon: "📈",
      title: dict.why.feature3Title,
      description: dict.why.feature3Desc,
    },
    {
      icon: "📊",
      title: dict.why.feature4Title,
      description: dict.why.feature4Desc,
    },
  ];

  return (
    <section
      className="why-radial relative py-25 bg-navy overflow-hidden"
      id="why"
    >
      <div className="relative max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 gap-20 items-center max-lg:grid-cols-1 max-lg:gap-12">
          {/* Left */}
          <div ref={leftRef} className="animate-on-scroll">
            <div className="font-body text-xs font-semibold tracking-[3px] uppercase text-accent mb-3">
              {dict.why.label}
            </div>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-semibold text-white leading-[1.2] mb-5">
              {dict.why.title1}
              <br />
              {dict.why.title2}
            </h2>
            <p className="text-[1.1rem] text-gray-300 leading-[1.7] max-w-[600px] mb-9">
              {dict.why.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <StatBox key={stat.label} {...stat} />
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="flex flex-col gap-5 animate-on-scroll">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
