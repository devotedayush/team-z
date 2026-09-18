import Link from "next/link";

const stages = [
  { title: "Discovery", output: "An agreed problem, scope & proposal", detail: "Together, we define deliverables, exclusions, milestones, and what counts as complete. You approve the scope, estimate, and approach before development begins, so everyone knows what to expect." },
  { title: "Design", output: "Workflows & a prototype to review", detail: "Review the key journeys and screens before development. Your feedback helps shape what we build, with design deliverables matched to the project scope." },
  { title: "Development", output: "Milestones, demos & testing", detail: "Work is organised into agreed milestones, with demonstrations and testing so you can review progress and give feedback along the way." },
  { title: "Launch", output: "Deployment, documentation & handover", detail: "We prepare the agreed release and hand over your custom code, designs, documentation, and project access. Hosting and publishing use client-owned accounts, with provider fees paid by you." },
  { title: "Support", output: "Optional monthly maintenance", detail: "Keep us involved through a monthly retainer sized to your needs. Coverage, response expectations, and pricing are agreed upfront; additional features are scoped separately." },
];

const questions = [
  { question: "Who owns the code?", answer: "You own the custom code, designs, and deliverables we create for your project. We hand over the repositories, documentation, and relevant access so you can continue with us or another team. Your business data stays yours. Third-party software and open-source components remain subject to their own licences; handover terms are documented in your agreement." },
  { question: "Who manages hosting and running costs?", answer: "Your hosting, backend, domain, and service accounts stay in your control. You pay the providers' charges, including usage-based API costs. We help with setup and deployment within the agreed scope; ongoing management can be covered by a monthly retainer. We identify expected running costs during planning." },
  { question: "Are app-store publishing fees included?", answer: "App-store developer accounts and any publishing or platform fees are paid by you, separately from our development fee. Apps are published under your accounts, with submission assistance included where agreed in the project scope." },
  { question: "What if requirements change?", answer: "We carefully plan the scope, deliverables, and acceptance criteria together to reduce surprises. If your needs change, your project manager reviews the request with you. Any change to cost or timeline is agreed in writing before the additional work starts." },
  { question: "How does support after launch work?", answer: "Ongoing support is available through an optional monthly retainer tailored to your product and budget. We agree the maintenance tasks, covered fixes, response expectations, and monthly fee upfront. New features are estimated separately unless included in your plan. Any support included in the original build is stated explicitly in the proposal." },
  { question: "Who will I speak to?", answer: "You have a dedicated project manager as your main point of contact for progress, feedback, questions, and scope decisions. Your UI/UX designer, developers, or consultants join relevant reviews when their input is needed. You get direct access to the right expertise without having to coordinate the whole team yourself." },
];

export default function WorkingTogether({ compact = false }: { compact?: boolean }) {
  return (
    <section id="how-we-work" className="mx-auto mb-16 w-full max-w-[1240px] scroll-mt-28 px-4">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008454]">How we work</p>
          <h2 className="text-[clamp(2rem,4vw,2.9rem)] font-semibold leading-tight tracking-tight">Clear steps. <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#00A368]">Tangible progress.</span></h2>
        </div>
        {compact && <Link href="/about#working-faq" className="py-3 text-sm font-semibold text-[#008454] underline underline-offset-4">Ownership, hosting & support ↗</Link>}
      </div>
      <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {stages.map((stage, index) => (
          <li key={stage.title} className="rounded-2xl border border-[#dce2de] bg-white p-5">
            <span aria-hidden="true" className="text-xs font-semibold text-[#008454]">0{index + 1}</span>
            <h3 className="mt-3 text-lg font-semibold">{stage.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#666]">{stage.output}</p>
            {!compact && <details className="mt-3"><summary className="cursor-pointer py-2 text-xs font-semibold text-[#008454]">What to expect</summary><p className="mt-2 text-sm leading-relaxed text-[#666]">{stage.detail}</p></details>}
          </li>
        ))}
      </ol>
      {!compact && <div id="working-faq" className="mt-12 grid scroll-mt-28 gap-6 lg:grid-cols-[0.65fr_1.35fr]">
        <div><h3 className="text-2xl font-semibold tracking-tight">Before we begin.</h3><p className="mt-3 max-w-xs text-sm leading-relaxed text-[#666]">Practical details, agreed in writing. Your project proposal sets the specific terms.</p></div>
        <div>{questions.map((item) => <details key={item.question} className="border-b border-[#d8dfda] py-3"><summary className="cursor-pointer py-3 pr-3 font-medium">{item.question}</summary><p className="max-w-2xl pb-4 text-sm leading-7 text-[#666]">{item.answer}</p></details>)}</div>
      </div>}
    </section>
  );
}
