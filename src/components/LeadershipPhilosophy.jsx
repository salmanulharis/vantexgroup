import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function LeadershipPhilosophy() {
  return (
    <section
      className="py-20 md:py-32 bg-[#FAF9F6] text-[#071120] overflow-hidden relative select-none"
    >
      {/* Editorial Watermark Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#071120]" />
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-[#071120]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        
        {/* Large Decorative Quote Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 0.05, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center text-[#9A7428] will-change-transform pointer-events-none select-none"
        >
          <Quote className="w-24 h-24 stroke-[1]" />
        </motion.div>

        {/* Content quote block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="space-y-6 will-change-transform"
        >
          <span className="label-overline">
            Philosophy
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light font-heading italic leading-relaxed text-[#071120] max-w-3xl mx-auto px-4">
            "Lasting success is built through strong partnerships, disciplined execution, and a clear vision for the future."
          </h2>

          <div className="h-px w-10 bg-[#C9A14A] mx-auto mt-8" />

          <div className="space-y-1">
            <p className="text-[10px] font-bold tracking-[0.25em] text-[#071120] font-sans uppercase">
              VANTEX GROUP
            </p>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#1E293B]/65 font-semibold">
              Corporate Governance & Growth Creed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
