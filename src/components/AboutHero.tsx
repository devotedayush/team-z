"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-[160px] max-md:px-4 max-md:pb-10 max-md:pt-[120px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-4 flex items-center gap-2.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#00DD88]" />
          <span className="text-[0.8rem] font-semibold uppercase tracking-[2px] text-[#00A368]">
            About Ments Services
          </span>
        </div>

        <h1 className="max-w-[920px] text-[4rem] font-semibold leading-[1.04] tracking-[-2px] text-[#1a1a1a] max-md:text-[2.5rem]">
          Your partners in{" "}
          <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            building.
          </span>
        </h1>

        <p className="mt-6 max-w-[640px] text-[1.15rem] leading-[1.6] text-[#555] max-md:text-base">
          We bring project management, design, engineering, and AI expertise together to build software around your business—with clear ownership at every step.
        </p>
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#008454]/20 bg-white px-4 py-2 text-xs font-medium text-[#00784d]">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#00A368]" />
          Ments · Incubated at IIT Madras
        </p>
        <p className="mt-4 text-sm leading-relaxed text-[#666]">
          Ments Services is part of Ments. TEAMZ is our delivery team.
        </p>
      </motion.div>
    </section>
  );
}
