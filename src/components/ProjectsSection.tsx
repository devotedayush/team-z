import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <section id="work" className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-4 pb-20">
      <div className="mb-10 flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008454]">Selected projects</p>
          <h2 className="text-[2.9rem] font-semibold leading-[1.1] tracking-tight text-[#1a1a1a] max-md:text-[2.1rem]">Built for real <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#00A368]">businesses.</span></h2>
        </div>
        <Link href="/projects" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#1a1a1a] hover:text-[#008454]">Explore all projects <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} compact />)}</div>
    </section>
  );
}
