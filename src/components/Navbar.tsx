"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] transition-all duration-300 backdrop-blur-[20px] ${
        scrolled ? "bg-navy/97" : "bg-navy/92"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 py-4">
        <a href="/" className="flex items-center gap-2.5 no-underline">
          <Image src="/logo.png" alt="CloudElite logo" width={140} height={40} className="h-10 w-auto" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          <li>
            <a
              href="/#services"
              className="text-sm font-medium text-gray-300 no-underline transition-colors duration-300 tracking-wide hover:text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/#why"
              className="text-sm font-medium text-gray-300 no-underline transition-colors duration-300 tracking-wide hover:text-white"
            >
              Why Us
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-sm font-medium text-gray-300 no-underline transition-colors duration-300 tracking-wide hover:text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="text-sm font-medium text-gray-300 no-underline transition-colors duration-300 tracking-wide hover:text-white"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="bg-linear-to-br from-sf-blue to-sf-blue-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(0,161,224,0.35)]"
            >
              Get Started
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-white rounded-sm my-[5px]" />
          <span className="block w-6 h-0.5 bg-white rounded-sm my-[5px]" />
          <span className="block w-6 h-0.5 bg-white rounded-sm my-[5px]" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col absolute top-full left-0 right-0 bg-navy/97 px-6 py-6 gap-4 border-b border-white/[0.06]">
          <a
            href="/#services"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-300 no-underline hover:text-white"
          >
            Services
          </a>
          <a
            href="/#why"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-300 no-underline hover:text-white"
          >
            Why Us
          </a>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-300 no-underline hover:text-white"
          >
            Contact
          </a>
          <a
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium text-gray-300 no-underline hover:text-white"
          >
            Blog
          </a>
          <a
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-linear-to-br from-sf-blue to-sf-blue-dark text-white px-6 py-2.5 rounded-lg font-semibold text-sm no-underline text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
