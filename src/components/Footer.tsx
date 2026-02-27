import Image from "next/image";
import { footerLinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 pt-15 pb-7.5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 pb-10 border-b border-white/[0.06] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-7.5">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <Image src="/logo.png" alt="CloudElite logo" width={140} height={40} className="h-10 w-auto" />
            </a>
            <p className="text-[0.88rem] leading-[1.7] max-w-[300px]">
              Certified Salesforce® Consulting Partner delivering end-to-end
              cloud solutions that drive business transformation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[0.8rem] font-semibold tracking-[2px] uppercase text-white mb-4.5">
              Services
            </h4>
            <ul className="list-none">
              {footerLinks.services.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-gray-300 no-underline transition-colors duration-300 hover:text-sf-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[0.8rem] font-semibold tracking-[2px] uppercase text-white mb-4.5">
              Company
            </h4>
            <ul className="list-none">
              {footerLinks.company.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-gray-300 no-underline transition-colors duration-300 hover:text-sf-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[0.8rem] font-semibold tracking-[2px] uppercase text-white mb-4.5">
              Resources
            </h4>
            <ul className="list-none">
              {footerLinks.resources.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-[0.88rem] text-gray-300 no-underline transition-colors duration-300 hover:text-sf-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 text-[0.82rem] max-md:flex-col max-md:gap-2 max-md:text-center">
          <p className="text-gray-500">
            © 2026 CloudElite. All rights reserved.
          </p>
          <p className="text-gray-500">
            Salesforce® is a registered trademark of Salesforce, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
