"use client";

import Link from "next/link";
import BrandLogo from "./BrandLogo";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/seo";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Careers", href: `mailto:${CONTACT_EMAIL}` },
    { label: "Insights", href: "/blog" },
  ],
  services: [
    { label: "Web Development", href: "/#services" },
    { label: "App Development", href: "/#services" },
    { label: "Product Design & Branding", href: "/#services" },
    { label: "AI Automation", href: "/#services" },
    { label: "Data & Business Consulting", href: "/#services" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-screen bg-[#0a0b0d] text-white pt-24 pb-12 px-[60px] max-md:px-5 max-md:pt-16">
      <div className="max-w-[1240px] mx-auto flex justify-between items-start flex-wrap gap-10 max-md:flex-col">
        <div>
          <Link href="/" aria-label="Ments Services home" className="mb-5 inline-flex">
            <BrandLogo />
          </Link>
          <p className="mb-8 max-w-[340px] text-sm leading-relaxed text-white/60">
            The technology services team at Ments.
            <br />
            Built and delivered by <Link href="/about#team" className="text-white/85 underline underline-offset-4 hover:text-[#00DD88]">TEAMZ</Link>.
          </p>
          <h2 className="text-[3rem] leading-[1.1] mb-[30px] font-semibold max-md:text-[2rem]">
            Let&apos;s discuss
            <br />
            your project.
          </h2>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#00DD88] text-[#1a1a1a] px-8 py-4 rounded-[30px] font-semibold transition-transform duration-200 hover:scale-105"
          >
            Chat on WhatsApp
          </Link>
        </div>

        <div className="flex gap-[60px] max-md:flex-col max-md:gap-[30px]">
          <div>
            <h4 className="text-[#888] mb-5 font-medium text-[0.9rem] uppercase tracking-[1px]">
              Company
            </h4>
            <ul className="list-none">
              {footerLinks.company.map((link) => (
                <li key={link.label} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-white text-base transition-colors duration-200 hover:text-[#00DD88]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#888] mb-5 font-medium text-[0.9rem] uppercase tracking-[1px]">
              Services
            </h4>
            <ul className="list-none">
              {footerLinks.services.map((link) => (
                <li key={link.label} className="mb-3">
                  <Link
                    href={link.href}
                    className="text-white text-base transition-colors duration-200 hover:text-[#00DD88]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto mt-[60px] pt-[30px] border-t border-white/10 flex justify-between items-center text-[#666] text-[0.9rem] max-md:flex-col max-md:gap-4 max-md:text-center">
        <div>
          <p>&copy; 2026 Ments Services. All rights reserved.</p>
          <p className="mt-1">Part of <Link href="https://ments.app" className="hover:text-white transition-colors">Ments</Link>. Technology delivered by TEAMZ.</p>
        </div>
        <p>Privacy Policy &bull; Terms of Service</p>
      </div>
    </footer>
  );
}
