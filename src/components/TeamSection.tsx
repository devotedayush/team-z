import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  { name: "Ayushman Singh", role: "Project Manager", credential: "Project planning & delivery", description: "Coordinates scope, milestones, and client feedback, keeping the team aligned from planning through handover.", image: "/images/team/ayushman-profile.jpeg" },
  { name: "Shrishti", role: "Project Manager", credential: "Engineering graduate", description: "Connects client requirements with the delivery team, coordinating reviews, communication, and project follow-through.", image: "/images/team/shrishti-profile.png" },
  { name: "Rajkamal Kaushal", role: "Backend Developer", credential: "3 years of experience", description: "Builds the backend systems and integrations that power your product, with a focus on reliable day-to-day operation.", image: "/images/team/rajkamal-profile.jpeg" },
  { name: "Shriyash", role: "App Developer", credential: "8 years of experience", description: "Builds production-grade mobile software, with apps used by thousands of people every day.", image: "/images/team/shiryash-profile.jpeg" },
  { name: "Naveen", role: "UI/UX Designer", credential: "5 years of experience", description: "Turns requirements into clear user journeys, interfaces, and prototypes for your team to review before development.", image: "/images/team/Naveen-profile.jpeg" },
  { name: "Devansh Jain", role: "Data, AI & Business Consultant", credential: "IIT Madras alumnus · Azure AI-900 certified", description: "Advises on data strategy, AI systems, and business analytics, and leads selected projects with the delivery team.", image: null },
];

export default function TeamSection() {
  return (
    <section id="team" className="mx-auto mb-16 w-full max-w-[1240px] scroll-mt-28 px-4">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div><p className="mb-3 text-xs font-semibold uppercase tracking-[2px] text-[#008454]">The people you'll work with</p><h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">Meet the <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#00A368]">team.</span></h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-[#666]">A dedicated project manager, with designers, developers, and consultants involved where your project needs them.</p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <article key={member.name} id={member.name === "Devansh Jain" ? "devansh-jain" : undefined} className="flex scroll-mt-28 flex-col overflow-hidden rounded-[24px] border border-[#e0e5e2] bg-white">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#e6eee9]">
              {member.image ? <Image src={member.image} alt={member.name} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 400px" className="object-cover object-[center_30%]" unoptimized /> : <div aria-hidden="true" className="flex h-full items-center justify-center bg-[#163d30] font-['Instrument_Serif',Georgia,serif] text-8xl italic text-[#83e5b4]">DJ</div>}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-2xl font-semibold tracking-tight">{member.name}</h3>
              <p className="mt-1 font-medium text-[#008454]">{member.role}</p>
              <p className="mt-3 text-xs font-medium leading-relaxed text-[#777]">{member.credential}</p>
              <p className="mt-3 text-sm leading-6 text-[#555]">{member.description}</p>
              {member.name === "Naveen" && <a href="https://behance.com/codenaveen" target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex min-h-11 items-center pt-4 text-sm font-semibold text-[#008454] underline underline-offset-4">Behance portfolio ↗</a>}
              {member.name === "Devansh Jain" && <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 pt-4 text-sm font-semibold text-[#008454]"><Link href="/projects?tag=Team%20Experience" className="py-2 underline underline-offset-4">Selected experience ↗</Link><a href="https://jaindevansh.dev/" target="_blank" rel="noopener noreferrer" className="py-2 underline underline-offset-4">Portfolio ↗</a></div>}
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#008454]/15 bg-[#e9f1ed] px-6 py-5"><div><p className="font-semibold text-[#174a36]">An 11-person team, built to deliver.</p><p className="mt-1 text-sm leading-relaxed text-[#555]">Five additional developers work alongside the project managers, designers, and specialists featured here.</p></div><Link href="/projects" className="py-2 text-sm font-semibold text-[#008454] underline underline-offset-4">Explore our projects ↗</Link></div>
    </section>
  );
}
