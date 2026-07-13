import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTA() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 bg-gradient-to-br from-[#0A192F] to-[#071120] text-white relative overflow-hidden select-none">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-8 space-y-5 will-change-transform"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tight leading-[1.1]">
              Ready to Accelerate Your Enterprise Value?
            </h2>
            <p className="text-slate-300 text-sm md:text-base max-w-xl font-normal leading-relaxed">
              Partner with Vantex Group to explore structured expansion paths, navigate investment landscapes, and secure strategic growth relationships.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-start lg:items-stretch will-change-transform"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-accent-gold text-[#071120] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg gap-2 text-center cursor-pointer"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-6 py-4 rounded-full bg-transparent border border-white/15 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-colors gap-2 text-center cursor-pointer"
            >
              <CalendarDays className="w-4 h-4 text-accent-gold" />
              Schedule a Consultation
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
