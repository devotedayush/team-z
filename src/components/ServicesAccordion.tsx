"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Plus, ArrowUpRight } from "lucide-react";
import { servicePaths } from "@/lib/service-paths";
import StartProjectButton from "./StartProjectButton";

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="services" className="mx-auto mb-16 w-full max-w-[1240px] scroll-mt-28 px-4">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="self-start lg:sticky lg:top-28">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#008454]">How we can help</p>
          <h2 className="text-[2.9rem] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] max-md:text-[2.1rem]">What brings you <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#00A368]">here?</span></h2>
          <p className="mt-5 max-w-[340px] text-base leading-relaxed text-[#666]">Choose your starting point. We'll help with the rest.</p>
        </div>
        <div className="space-y-4">
          {servicePaths.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={service.number} className={`overflow-hidden rounded-[24px] border bg-white transition-colors ${isOpen ? "border-[#00A368]/40" : "border-[#e0e0e0]"}`}>
                <h3>
                  <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} aria-expanded={isOpen} aria-controls={`service-panel-${service.number}`} id={`service-trigger-${service.number}`} className="flex w-full items-center justify-between gap-5 p-6 text-left max-md:p-5">
                    <span>
                      <span className="mb-2 block text-xs font-medium tracking-wider text-[#008454]">{service.number}</span>
                      <span className="block text-[1.4rem] font-semibold leading-tight tracking-tight text-[#1a1a1a] max-md:text-xl">{service.title}</span>
                    </span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-transform ${isOpen ? "rotate-45 bg-[#00DD88]" : "bg-[#f2f2f4]"}`}><Plus aria-hidden="true" className="h-5 w-5" /></span>
                  </button>
                </h3>
                <div id={`service-panel-${service.number}`} role="region" aria-labelledby={`service-trigger-${service.number}`} hidden={!isOpen} className="px-6 pb-6 max-md:px-5">
                  <p className="border-t border-[#eee] pt-5 leading-relaxed text-[#555]">{service.description}</p>
                  <ul className="mt-4 grid gap-2">{service.offerings.slice(0, 3).map((item) => <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-[#444]"><Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#008454]" /><span>{item}</span></li>)}</ul>
                  <div className="mt-5 border-t border-[#eee] pt-4">
                    <div className="flex flex-col items-start gap-3">{service.proof.slice(0, 1).map((item) => <Link key={item.href} href={item.href} className="inline-flex items-center gap-1 text-sm font-medium text-[#444] underline decoration-[#00A368]/40 underline-offset-4 hover:text-[#008454]">{item.label}<ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></Link>)}</div>
                  </div>
                  <StartProjectButton label="Let's talk about this" initialService={service.title} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0a0b0d] px-5 py-3 text-sm font-semibold text-white hover:bg-[#008454]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <details className="mt-8 border-y border-[#d9ddda] py-4">
        <summary className="cursor-pointer py-2 text-sm font-medium text-[#555]">Explore our full capabilities</summary>
        <div className="mt-4 flex flex-wrap gap-2">{["Web & mobile apps", "MVPs & prototypes", "UI/UX & branding", "Shopify & e-commerce", "SEO & performance", "Business platforms", "AI & automation", "Data & business consulting", "Maintenance & support"].map((capability) => <span key={capability} className="rounded-full bg-[#f2f2f4] px-3 py-2 text-sm text-[#555]">{capability}</span>)}</div>
      </details>
    </section>
  );
}
