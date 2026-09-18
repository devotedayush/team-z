"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 mb-20 flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[3rem] font-semibold leading-[1.1] mb-6 tracking-[-1px]"
        >
          Driven by passion, <br/>
          defined by{" "}
          <span className="font-['Instrument_Serif',Georgia,serif] font-normal italic tracking-normal text-[#00A368]">
            excellence
          </span>
          .
        </motion.h2>
      </div>
      <div className="flex-1">
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-lg text-[#555] leading-relaxed mb-6"
        >
          At Ments Services, we start with the people using your software and the
          problem your business needs to solve.
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-[#555] leading-relaxed"
        >
          Our delivery team, TEAMZ, brings design, engineering, and AI together
          to turn that understanding into practical tools, from your first
          prototype to a product your business can rely on.
        </motion.p>
      </div>
    </section>
  );
}
