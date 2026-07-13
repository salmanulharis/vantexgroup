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
    <section className="bg-[#FAF9F6] text-[#071120] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24 border-t border-[#071120]/10">
          
          {/* Left Panel: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="label-overline">Get Started</span>
            <h2 className="heading-editorial">
              Ready to Accelerate Your Enterprise Value?
            </h2>
            <p className="paragraph-editorial max-w-lg">
              Partner with Vantex Group to explore structured expansion paths, navigate investment landscapes, and secure strategic growth relationships.
            </p>
          </motion.div>

          {/* Right Panel: Call to action options */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4 w-full"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full btn-editorial justify-between group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="w-full btn-editorial-gold justify-between group"
            >
              <span className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
