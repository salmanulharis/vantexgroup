import React from "react";
import { motion } from "framer-motion";
import { BookmarkCheck, Eye, Target } from "lucide-react";

export default function AboutUs() {
  const values = [
    "Practical Execution",
    "Business Intelligence",
    "Relationship-Driven Growth",
    "Strategic Thinking",
  ];

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-[#FAF9F6] text-[#071120] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Asymmetric main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Stat Overview */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="label-overline">About Us</span>
            <h2 className="heading-editorial">
              Who We Are
            </h2>
            <div className="w-12 h-px bg-[#C9A14A]" />
            <p className="text-[#071120] font-normal text-base md:text-lg leading-relaxed">
              We are a growth-focused advisory group dedicated to helping businesses identify opportunities, strengthen market presence, and create scalable systems.
            </p>
          </motion.div>

          {/* Right Column: Detailed Narrative & Core Beliefs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 space-y-8 lg:pl-6"
          >
            <div className="space-y-6 paragraph-editorial">
              <p>
                Our approach combines practical execution, business intelligence, relationship-driven growth, and strategic thinking to support sustainable expansion across industries.
              </p>
              <p>
                We believe that lasting success is built through strong partnerships, disciplined execution, and a clear vision for the future. We work hand-in-hand with our clients, treating their targets as our own.
              </p>
            </div>

            {/* Core Values Tag Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-[#071120]/5">
              {values.map((val, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#C9A14A]/10 flex items-center justify-center text-[#C9A14A]">
                    <BookmarkCheck className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider text-[#071120] uppercase">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Vision & Mission Row: Dual blocks separated by a vertical hairline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 pt-12 mt-12 md:pt-20 md:mt-20 border-t border-[#071120]/5">
          
          {/* Vision Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#C9A14A]/10 text-[#C9A14A]">
                <Eye className="w-4 h-4 stroke-[1.5]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#071120]">
                Our Vision
              </h3>
            </div>
            <p className="text-[17px] font-heading font-light italic text-[#071120]/80 leading-relaxed">
              To build a trusted business advisory and investment ecosystem that connects entrepreneurs, organizations, opportunities, and capital to create long-term value and sustainable growth.
            </p>
          </motion.div>

          {/* Mission Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-4 md:border-l md:border-[#071120]/5 md:pl-16"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#071120]/5 text-[#071120]">
                <Target className="w-4 h-4 stroke-[1.5]" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#071120]">
                Our Mission
              </h3>
            </div>
            <p className="text-[17px] font-heading font-light italic text-[#071120]/80 leading-relaxed">
              To empower businesses through strategic advisory, growth partnerships, business development, and future-focused expansion initiatives.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
