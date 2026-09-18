import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project, onTag, compact = false }: { project: Project; onTag?: (tag: string) => void; compact?: boolean }) {
  const tagClass = "rounded-full border border-[#00DD88]/30 bg-[#00DD88]/10 px-3 py-1.5 text-xs font-medium text-[#00DD88] transition-colors hover:bg-[#00DD88]/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00DD88]";
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[24px] bg-[#0a0b0d] shadow-[0_18px_45px_-30px_rgba(0,0,0,0.4)]">
      <Link href={`/projects/${project.id}`} aria-label={`View ${project.title} case study`} className="group relative block aspect-[16/10] overflow-hidden bg-[#e9e9e9]">
        {project.mockup ? <Image src={project.mockup} alt={`${project.title} app mockup${project.id === 4 ? " — earlier Freso concept" : ""}`} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 400px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" unoptimized /> : project.gallery ? (
          <div className="absolute inset-0 flex justify-center gap-4 bg-[#eeeaf4] p-4">
            {project.gallery.map((shot) => <div key={shot.src} className="relative h-full w-[42%]"><Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 768px) 40vw, 240px" className="object-contain" unoptimized /></div>)}
          </div>
        ) : project.cover ? <Image src={project.cover} alt={project.title} fill sizes="(max-width: 768px) 100vw, 600px" className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" unoptimized /> : <div className="absolute inset-0 flex flex-col justify-between bg-[#e4eee8] p-6 text-[#174a36]"><span className="text-xs font-semibold uppercase tracking-widest">{project.tags[0]} / {project.tags[1]}</span><span className="font-['Instrument_Serif',Georgia,serif] text-5xl italic leading-tight">{project.id === 11 ? "Knowledge, connected." : "Data into decisions."}</span><span className="text-xs">Industry experience · {project.contributor}</span></div>}
      </Link>
      <div className="flex flex-1 flex-col p-6">
        {project.id === 4 && <p className="mb-2 text-xs text-white/60">Mockup · Earlier Freso concept</p>}
        {!compact && <p className="mb-3 text-xs font-medium text-white/60">{project.category} · {project.status}</p>}
        <h3 className="text-2xl font-semibold tracking-tight text-white"><Link href={`/projects/${project.id}`} className="hover:text-[#00DD88]">{project.title}</Link></h3>
        {!compact && <p className="mb-5 mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>}
        <div className="mb-5 mt-3 flex flex-wrap gap-2" aria-label={`${project.title} tags`}>
          {(compact ? project.tags.slice(0, 2) : project.tags).map((tag) => onTag ? (
            <button key={tag} type="button" onClick={() => onTag(tag)} className={tagClass}>{tag}</button>
          ) : (
            <Link key={tag} href={`/projects?tag=${encodeURIComponent(tag)}`} className={tagClass}>{tag}</Link>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-white/15 pt-5">
          <div><p className="text-2xl font-semibold text-[#00DD88]">{project.highlight.value}</p><p className="mt-1 text-xs leading-relaxed text-white/65">{project.highlight.label}</p></div>
          <Link href={`/projects/${project.id}`} aria-label={`Read ${project.title} case study`} className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-white hover:text-[#00DD88]">Case study <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </div>
    </article>
  );
}
