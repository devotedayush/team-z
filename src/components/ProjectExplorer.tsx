"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { projects, projectTags } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const categories = ["All projects", "Industry projects", "Side projects"] as const;

export default function ProjectExplorer({ initialTag = "" }: { initialTag?: string }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("All projects");
  const [tag, setTag] = useState(projectTags.includes(initialTag) ? initialTag : "");
  const search = query.trim().toLowerCase();
  const filtered = projects.filter((project) =>
    (category === "All projects" || project.category === category) &&
    (!tag || project.tags.includes(tag)) &&
    (!search || [project.title, project.description, project.status, ...project.tags].join(" ").toLowerCase().includes(search))
  );
  const selectTag = (value: string) => { setTag(value); };
  const clearFilters = () => { setQuery(""); setCategory("All projects"); setTag(""); };

  return (
    <>
      <div className="mb-8 space-y-5 rounded-3xl border border-[#e0e0e0] bg-white p-5 max-md:p-4">
        <div aria-label="Project category" className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${category === item ? "bg-[#0a0b0d] text-white" : "bg-[#f2f2f4] text-[#555] hover:bg-[#e6e6e8]"}`}>{item}</button>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_260px]">
          <div>
            <label htmlFor="project-search" className="mb-2 block text-sm font-medium text-[#444]">Search projects or tags</label>
            <div className="relative"><Search aria-hidden="true" className="pointer-events-none absolute left-3 top-3.5 h-4 w-4 text-[#777]" /><input id="project-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Shopify, logistics, SEO…" className="w-full rounded-xl border border-[#d7d7d7] bg-white py-3 pl-10 pr-3 text-sm text-[#222] outline-none focus:border-[#008454] focus:ring-1 focus:ring-[#008454]" /></div>
          </div>
          <div><label htmlFor="project-tag" className="mb-2 block text-sm font-medium text-[#444]">Filter by tag</label><select id="project-tag" value={tag} onChange={(event) => selectTag(event.target.value)} className="w-full rounded-xl border border-[#d7d7d7] bg-white px-3 py-3 text-sm text-[#222] focus:border-[#008454]"><option value="">All tags</option>{projectTags.map((item) => <option key={item} value={item}>{item}</option>)}</select></div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p aria-live="polite" role="status" className="text-[#666]">{filtered.length} {filtered.length === 1 ? "project" : "projects"}{tag ? ` · ${tag}` : ""}</p>
          {(query || tag || category !== "All projects") && <button type="button" onClick={clearFilters} className="font-semibold text-[#008454] underline underline-offset-4">Clear filters</button>}
        </div>
      </div>
      {filtered.length ? (
        <div className="grid grid-cols-2 gap-7 max-md:grid-cols-1" aria-label="Project results">{filtered.map((project) => <ProjectCard key={project.id} project={project} onTag={selectTag} />)}</div>
      ) : (
        <div className="rounded-3xl border border-dashed border-[#ccc] px-6 py-16 text-center"><h2 className="text-xl font-semibold">No projects match these filters.</h2><p className="mt-2 text-[#666]">Try another service, technology, or project name.</p><button type="button" onClick={clearFilters} className="mt-5 rounded-full bg-[#0a0b0d] px-5 py-3 text-sm font-semibold text-white">Show all categories</button></div>
      )}
    </>
  );
}
