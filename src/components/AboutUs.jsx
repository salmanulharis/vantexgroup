import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, BookmarkCheck } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative select-none">
      {/* Background visual element */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 space-y-8 will-change-transform"
          >
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-heading text-primary-navy tracking-tight leading-[1.1]">
                WHO WE ARE
              </h2>
              <div className="h-[2px] w-16 bg-accent-gold rounded-full" />
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-normal">
              <p className="text-slate-900 font-semibold text-base md:text-lg">
                We are a growth-focused advisory group dedicated to helping businesses identify opportunities, strengthen market presence, develop strategic partnerships, and create scalable systems for long-term success.
              </p>
              <p>
                Our approach combines practical execution, business intelligence, relationship-driven growth, and strategic thinking to support sustainable expansion across industries.
              </p>
              <p>
                We believe that lasting success is built through strong partnerships, disciplined execution, and a clear vision for the future. We work hand-in-hand with our clients, treating their targets as our own.
              </p>
            </div>
            
            {/* Value Checkmark List (Minimal styling) */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100">
              {[
                "Practical Execution",
                "Business Intelligence",
                "Relationship-Driven Growth",
                "Strategic Thinking",
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-4 h-4 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold">
                    <BookmarkCheck className="w-2.5 h-2.5" />
                  </div>
                  <span className="text-xs font-bold tracking-wide text-primary-navy uppercase">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mission and Vision */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-8">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="p-8 rounded-2xl bg-white border-l-4 border-accent-gold shadow-[0_10px_25px_-12px_rgba(7,17,32,0.04)] relative overflow-hidden group border border-slate-100 lg:hover:bg-slate-50/50 transition-all duration-300 will-change-transform"
            >
              <div className="flex items-start gap-5">
                <div className="p-2.5 rounded-xl bg-accent-gold/5 text-accent-gold mt-1">
                  <Eye className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary-navy mb-2.5 font-heading">
                    OUR VISION
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                    To build a trusted business advisory and investment ecosystem that connects entrepreneurs, organizations, opportunities, and capital to create long-term value and sustainable growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -40px 0px" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
              className="p-8 rounded-2xl bg-white border-l-4 border-primary-navy shadow-[0_10px_25px_-12px_rgba(7,17,32,0.04)] relative overflow-hidden group border border-slate-100 lg:hover:bg-slate-50/50 transition-all duration-300 will-change-transform"
            >
              <div className="flex items-start gap-5">
                <div className="p-2.5 rounded-xl bg-primary-navy/5 text-primary-navy mt-1">
                  <Target className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary-navy mb-2.5 font-heading">
                    OUR MISSION
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-normal">
                    To empower businesses through strategic advisory, growth partnerships, business development, and future-focused expansion initiatives.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
