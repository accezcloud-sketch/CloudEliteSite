"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLocale } from "@/lib/i18n/LocaleContext";
import FloatingCard from "./FloatingCard";

export default function Hero() {
  const ref = useScrollAnimation<HTMLDivElement>();
  const { locale, dict } = useLocale();

  return (
    <section className="hero-radials hero-grain relative min-h-screen flex items-center bg-navy overflow-hidden">
      <div className="hero-grid" />

      <div className="relative z-[2] max-w-[1200px] mx-auto px-6 pt-[120px] pb-20 grid grid-cols-[1.1fr_0.9fr] gap-15 items-center max-lg:grid-cols-1">
        {/* Left */}
        <div ref={ref} className="animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-sf-blue/10 border border-sf-blue/25 rounded-full px-4.5 py-2 mb-7 animate-pulse-ring">
            <div className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-[0.8rem] font-semibold tracking-[1.5px] uppercase text-sf-blue">
              {dict.hero.badge}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,5vw,3.8rem)] font-bold text-white leading-[1.15] mb-6">
            {dict.hero.titleStart}
            <em className="not-italic bg-linear-to-br from-sf-blue to-accent bg-clip-text text-transparent">
              {dict.hero.titleHighlight}
            </em>
          </h1>

          <p className="text-[1.15rem] text-gray-300 leading-[1.8] mb-10 max-w-[520px]">
            {dict.hero.description}
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href={`/${locale}/#contact`}
              className="inline-flex items-center gap-2 bg-linear-to-br from-sf-blue to-sf-blue-dark text-white font-body text-base font-semibold px-8 py-4 border-none rounded-[10px] no-underline transition-all duration-300 shadow-[0_4px_20px_rgba(0,161,224,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,161,224,0.4)]"
            >
              {dict.hero.cta}
            </a>
            <a
              href={`/${locale}/#services`}
              className="inline-flex items-center gap-2 bg-transparent text-gray-300 font-body text-base font-medium px-8 py-4 border border-white/15 rounded-[10px] no-underline transition-all duration-300 hover:border-white/35 hover:text-white hover:bg-white/[0.04]"
            >
              {dict.hero.explore}
            </a>
          </div>
        </div>

        {/* Right - floating cards */}
        <div className="relative h-[420px] animate-fade-in max-lg:hidden">
          <FloatingCard
            icon="☁️"
            title={dict.hero.card1Title}
            description={dict.hero.card1Desc}
            colorClass="bg-sf-blue/15"
            animationClass="animate-float"
            className="top-0 right-0 w-[280px]"
          />
          <FloatingCard
            icon="⚡"
            title={dict.hero.card2Title}
            description={dict.hero.card2Desc}
            colorClass="bg-accent/15"
            animationClass="animate-float-delayed-1"
            className="top-[140px] left-0 w-[250px]"
          />
          <FloatingCard
            icon="📊"
            title={dict.hero.card3Title}
            description={dict.hero.card3Desc}
            colorClass="bg-gold/15"
            animationClass="animate-float-delayed-2"
            className="bottom-0 right-10 w-[260px]"
          />
        </div>
      </div>
    </section>
  );
}
