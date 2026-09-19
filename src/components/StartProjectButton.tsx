"use client";

import { ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/seo";

export default function StartProjectButton({
  label = "Start a project",
  initialService,
  inquiryContext,
  className = "group mt-7 inline-flex items-center gap-2 rounded-full bg-[#00DD88] px-7 py-3 font-semibold text-[#0a0a0a] transition-all duration-300 hover:-translate-y-0.5",
}: {
  label?: string;
  initialService?: string;
  inquiryContext?: string;
  className?: string;
}) {
  const url = new URL(WHATSAPP_URL);
  const context = inquiryContext || initialService;
  if (context) url.searchParams.set("text", `Hi Ments Services, I'd like to discuss: ${context}.`);

  return (
    <>
      <a href={url.toString()} target="_blank" rel="noopener noreferrer" aria-label={`${label} on WhatsApp`} className={className}>
        {label}
        <ArrowUpRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </>
  );
}
