import Image from "next/image";

export default function BrandLogo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-2" aria-label="Ments Services">
      <Image
        src="/images/brand/ments-green-white.svg"
        alt="Ments"
        width={844}
        height={258}
        className="h-auto w-[150px]"
        priority={priority}
      />
      <span className="border-l border-white/25 pl-3 text-[0.9rem] font-medium tracking-wide text-white">
        Services
      </span>
    </span>
  );
}
