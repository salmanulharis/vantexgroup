import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, BookmarkCheck } from "lucide-react";

export default function AboutUs() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="about" className="py-28 bg-white overflow-hidden relative">
      {/* Background visual element */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
            transition={{ duration: isMobile ? 0.45 : 0.8 }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-navy tracking-tight leading-tight">
                WHO WE ARE
              </h2>
              <div className="h-1 w-20 bg-accent-gold rounded-full" />
            </div>

            <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              <p className="text-slate-800 font-semibold">
                We are a growth-focused advisory group dedicated to helping businesses identify opportunities, strengthen market presence, develop strategic partnerships, and create scalable systems for long-term success.
              </p>
              <p>
                Our approach combines practical execution, business intelligence, relationship-driven growth, and strategic thinking to support sustainable expansion across industries.
              </p>
              <p>
                We believe that lasting success is built through strong partnerships, disciplined execution, and a clear vision for the future. We work hand-in-hand with our clients, treating their targets as our own.
              </p>
            </div>
            
            {/* Value Checkmark List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Practical Execution",
                "Business Intelligence",
                "Relationship-Driven Growth",
                "Strategic Thinking",
              ].map((value, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-gold/20 flex items-center justify-center text-accent-gold">
                    <BookmarkCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mission and Vision Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-8">
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 10 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
              transition={{ duration: isMobile ? 0.45 : 0.8 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-primary-navy text-white shadow-xl relative overflow-hidden group border border-slate-800"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-accent-gold/10 text-accent-gold mt-1">
                  <Eye className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-accent-gold mb-3 font-heading">
                    OUR VISION
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    To build a trusted business advisory and investment ecosystem that connects entrepreneurs, organizations, opportunities, and capital to create long-term value and sustainable growth.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: isMobile ? 10 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
              transition={{ duration: isMobile ? 0.45 : 0.8, delay: isMobile ? 0.05 : 0.2 }}
              className="p-8 rounded-2xl bg-white text-slate-800 shadow-lg border border-slate-100 hover:border-slate-200 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-500" />
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary-navy/5 text-primary-navy mt-1">
                  <Target className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-primary-navy mb-3 font-heading">
                    OUR MISSION
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
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
