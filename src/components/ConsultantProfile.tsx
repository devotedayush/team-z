import { ArrowUpRight } from "lucide-react";

// Background and profile links: https://jaindevansh.dev/ (reviewed September 2026).
// Consulting and leadership role at Ments Services supplied by the team.
const focusAreas = [
  "Data strategy",
  "AI knowledge systems",
  "Business dashboards",
  "Workflow automation",
];

export default function ConsultantProfile() {
  return (
    <article
      id="devansh-jain"
      aria-labelledby="devansh-name"
      className="mb-10 scroll-mt-28 rounded-[30px] border border-[#00A368]/20 bg-white p-8 max-md:p-6"
    >
      <p className="mb-6 text-xs font-semibold uppercase tracking-[2px] text-[#008454]">
        Consulting &amp; project leadership
      </p>
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
        <div>
          <div className="flex items-center gap-5 max-sm:items-start">
            <div aria-hidden="true" className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#0a0b0d] text-3xl font-semibold tracking-tight text-[#00DD88]">
              DJ
            </div>
            <div>
              <h3 id="devansh-name" className="text-3xl font-semibold tracking-tight text-[#1a1a1a] max-sm:text-2xl">
                Devansh Jain
              </h3>
              <p className="mt-2 text-base font-medium leading-relaxed text-[#008454]">
                Data, AI &amp; Business Consultant
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-7 text-[#666]">
            IIT Madras alumnus · BSc Data Science &amp; Applications
            <br />
            Microsoft Azure AI-900 certified
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-[#1a1a1a]">
            <a href="https://jaindevansh.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-[#00A368]/40 underline-offset-4 hover:text-[#008454]">
              Portfolio <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/jaindevansh804" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-[#00A368]/40 underline-offset-4 hover:text-[#008454]">
              LinkedIn <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a href="https://github.com/jaindevansh804" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-[#00A368]/40 underline-offset-4 hover:text-[#008454]">
              GitHub <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed text-[#444]">
            Devansh works with Ments Services on consulting engagements and leads
            TEAMZ on selected projects, helping clients define the problem,
            choose an approach, and guide delivery.
          </p>
          <p className="mt-4 leading-relaxed text-[#666]">
            His background spans AI document intelligence, supply chain
            analytics, and business intelligence. He connects business goals
            with practical data systems and automation.
          </p>
          <ul aria-label="Devansh's areas of expertise" className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <li key={area} className="rounded-full bg-[#00A368]/[0.07] px-3 py-2 text-sm font-medium text-[#00784d]">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-[#e0e6e2] pt-6">
        <h4 className="text-lg font-semibold tracking-tight">Experience Devansh brings to the team</h4>
        <p className="mt-2 text-sm leading-relaxed text-[#666]">Selected prior experience from his personal portfolio—not projects delivered by Ments Services. Outcomes below are reported by Devansh.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-[#f3f6f4] p-5">
            <p className="text-3xl font-semibold tracking-tight text-[#008454]">30%</p>
            <h5 className="mt-2 font-semibold">Reported efficiency gain</h5>
            <p className="mt-2 text-sm leading-relaxed text-[#666]">RAG-based chatbot for a Government of India engagement, connecting document intelligence with research workflows.</p>
          </div>
          <div className="rounded-2xl bg-[#f3f6f4] p-5">
            <p className="text-3xl font-semibold tracking-tight text-[#008454]">20%</p>
            <h5 className="mt-2 font-semibold">Reported inventory-turnover improvement</h5>
            <p className="mt-2 text-sm leading-relaxed text-[#666]">FMCG supply-chain analytics experience, relevant to inventory planning and operational decision-making.</p>
          </div>
        </div>
        <details className="mt-4 border-b border-[#e0e6e2] py-3">
          <summary className="cursor-pointer py-2 text-sm font-medium">More background &amp; source</summary>
          <p className="mt-2 text-sm leading-7 text-[#666]">His portfolio also lists engagements involving MOSPI and DPIIT, third place in the IIT Madras Generative AI Challenge, and an Azure AI-900 score of 900/1000. These are individual credentials, not organisational endorsements or guarantees of future results.</p>
          <a href="https://jaindevansh.dev/" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[#008454] underline underline-offset-4">Source: Devansh's portfolio <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
        </details>
      </div>
    </article>
  );
}
