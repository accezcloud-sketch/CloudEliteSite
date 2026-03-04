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
            <p className="text-[0.88rem] leading-[1.7] max-w-[300px] mb-5">
              Certified Salesforce® Consulting Partner delivering end-to-end
              cloud solutions that drive business transformation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/cloudelite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-sf-blue/20 hover:border-sf-blue/30"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://x.com/Cloud_Elite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-sf-blue/20 hover:border-sf-blue/30"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066729921541"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-sf-blue/20 hover:border-sf-blue/30"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://wa.me/18444603371"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 hover:bg-sf-blue/20 hover:border-sf-blue/30"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
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
