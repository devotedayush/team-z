import StartProjectButton from "./StartProjectButton";

const options = [
  { title: "Discovery workshop", description: "A written scope, technical approach, and build estimate. The workshop fee is credited toward a subsequent build; scope and credit terms are agreed in your proposal.", label: "Discuss a workshop", service: "Data & Business Consulting", context: "Paid discovery workshop with build credit" },
  { title: "One small pilot", description: "One useful prototype, dashboard, store improvement, or automation. Agree scope, price, and success criteria upfront—then review before expanding.", label: "Scope a pilot", service: "Not sure yet — help me plan", context: "Small paid pilot with an agreed scope" },
];

export default function GettingStartedSection() {
  return (
    <section id="start-small" className="mx-auto w-full max-w-[1240px] scroll-mt-28 px-4 pb-16">
      <div className="grid gap-10 rounded-[32px] bg-[#0a0b0d] p-10 text-white md:grid-cols-2 lg:gap-16 lg:p-14 max-sm:p-6">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[2px] text-[#00DD88]">Start with a conversation</p>
          <h2 className="text-[clamp(2rem,4vw,3.2rem)] font-semibold leading-[1.08] tracking-tight">Big plans.<br /><span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#00DD88]">Small first step.</span></h2>
          <p className="mt-5 max-w-sm leading-relaxed text-white/70">Tell us what you're working on. Let's find a useful next step together.</p>
        </div>
        <div className="self-center">
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#00DD88]">20 minutes · Free</p>
            <h3 className="text-xl font-semibold">A discovery call. No commitment.</h3>
            <StartProjectButton label="Request a free call" initialService="Not sure yet — help me plan" inquiryContext="Free 20-minute discovery call" className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-[#00DD88] px-6 py-3.5 text-sm font-semibold text-[#0a0a0a] hover:bg-[#00c87c]" />
          </div>
          <p className="mb-3 text-xs text-white/60">Want to go a little further?</p>
          {options.map((option) => (
            <details key={option.title} className="group border-t border-white/20 py-4 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium [&::-webkit-details-marker]:hidden">{option.title}<span className="flex items-center gap-4"><span className="text-xs text-white/55">Paid</span><span aria-hidden="true" className="text-xl text-[#00DD88] group-open:rotate-45">+</span></span></summary>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{option.description}</p>
              <StartProjectButton label={option.label} initialService={option.service} inquiryContext={option.context} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#00DD88]" />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
