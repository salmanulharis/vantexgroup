import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function CTA() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-to-r from-slate-900 via-primary-navy to-slate-900 text-white relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-accent-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -10 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
            transition={{ duration: isMobile ? 0.45 : 0.8 }}
            className="lg:col-span-8 space-y-4"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-gold">
              Get Started
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading tracking-tight leading-tight">
              Ready to Accelerate Your Enterprise Value?
            </h2>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl font-normal leading-relaxed">
              Partner with Vantex Group to explore structured expansion paths, navigate investment landscapes, and secure strategic growth relationships.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
            transition={{ duration: isMobile ? 0.45 : 0.8 }}
            className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-start lg:items-stretch"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-gold text-primary-navy font-bold tracking-wide hover:bg-white transition-all duration-300 shadow-md hover:shadow-lg gap-2 text-center"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-semibold tracking-wide hover:bg-white/5 hover:border-white/50 transition-colors gap-2 text-center"
            >
              <CalendarDays className="w-5 h-5 text-accent-gold" />
              Schedule a Consultation
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
