import ProjectExplorer from "@/components/ProjectExplorer";

export default async function ProjectsPage({ searchParams }: { searchParams: Promise<{ tag?: string | string[] }> }) {
  const { tag } = await searchParams;
  return (
    <main className="mx-auto min-h-screen max-w-[1240px] px-5 pb-24 pt-[140px] max-md:px-[14px] max-md:pt-[110px]">
      <div className="mb-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008454]">Our work</p>
        <h1 className="text-[3.4rem] font-semibold leading-[1.05] tracking-tight text-[#1a1a1a] max-md:text-[2.3rem]">Industry work. <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic text-[#00A368]">Independent ideas.</span></h1>
        <p className="mt-5 max-w-[670px] text-lg leading-relaxed text-[#666] max-md:text-base">Explore production platforms and upcoming client rollouts, alongside our own products and personal projects. Search by name or choose a tag to find relevant work.</p>
      </div>
      <ProjectExplorer key={typeof tag === "string" ? tag : ""} initialTag={typeof tag === "string" ? tag : ""} />
    </main>
  );
}
