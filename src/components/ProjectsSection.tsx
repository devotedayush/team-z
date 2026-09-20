import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/projects";

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
      <div className="featured-project-stack">
        {featuredProjects.map((project, index) => (
          <article key={project.id} className="featured-project-card" style={{ "--card-index": index } as CSSProperties}>
            <Link href={`/projects/${project.id}`} aria-label={`View ${project.title} case study`} className="featured-project-image relative block overflow-hidden bg-[#0a0b0d]">
              {project.gallery ? (
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-[#e9e5ef] p-6">
                  {project.gallery.map((shot) => <div key={shot.src} className="relative h-full w-[40%]"><Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 767px) 36vw, 230px" className="object-contain" /></div>)}
                </div>
              ) : (
                <Image src={project.mockup || project.cover} alt={`${project.title} product mockup`} fill sizes="(max-width: 767px) 100vw, 600px" className="object-cover object-left" />
              )}
            </Link>
            <div className="flex flex-col justify-center p-7 text-white md:p-10 lg:p-14">
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-white/50">0{index + 1} / Selected work</p>
              <h3 className="text-3xl font-semibold tracking-tight md:text-4xl"><Link href={`/projects/${project.id}`}>{project.title}</Link></h3>
              <div className="my-4 flex flex-wrap gap-2">{project.tags.slice(0, 2).map((tag) => <Link key={tag} href={`/projects?tag=${encodeURIComponent(tag)}`} className="rounded-full border border-[#00DD88]/30 px-3 py-1 text-xs text-[#00DD88] hover:bg-[#00DD88]/10">{tag}</Link>)}</div>
              <p className="text-3xl font-semibold text-[#00DD88]">{project.highlight.value}</p>
              <p className="mt-1 text-sm text-white/65">{project.highlight.label}</p>
              <Link href={`/projects/${project.id}`} className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a0b0d] hover:bg-[#00DD88]">View case study <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
