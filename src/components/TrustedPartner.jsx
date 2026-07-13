import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, BarChart4, Network } from "lucide-react";

export default function TrustedPartner() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Strategic Advisory",
      description: "Providing long-term guidance and corporate leadership frameworks.",
    },
    {
      icon: Compass,
      title: "Structured Expansion",
      description: "Navigating complex market development and expansion routes.",
    },
    {
      icon: Network,
      title: "Business Partnerships",
      description: "Creating key alignments between institutions and enterprises.",
    },
    {
      icon: BarChart4,
      title: "Venture Growth",
      description: "Facilitating future investment networks and growth opportunities.",
    },
  ];

  return (
    <section id="trusted-partner" className="py-32 bg-[#FAF9F6] border-b border-slate-100 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Heading and Paragraphs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-6 space-y-6 will-change-transform"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
              Trusted Partner
            </span>
            
            <h2 className="text-3xl md:text-5xl font-black font-heading text-primary-navy tracking-tight leading-[1.1]">
              A Trusted Partner for Long-Term Corporate Growth
            </h2>
            
            <div className="h-[2px] w-16 bg-accent-gold rounded-full" />
            
            <p className="text-base md:text-lg text-slate-800 font-semibold leading-relaxed">
              Our focus is not limited to a single industry. We work with businesses, entrepreneurs, healthcare organizations, and growth-oriented enterprises seeking structured expansion and strategic direction.
            </p>
            
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              From market development and business partnerships to future investment opportunities and venture growth, we help organizations navigate their next stage of evolution. We bridge gaps between potential and realization, ensuring that strategic partnerships are formed on solid foundations.
            </p>
          </motion.div>

          {/* Right Column: Grid of Icon Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.03 }}
                  className="p-8 rounded-2xl bg-white border border-slate-200/50 lg:hover:border-accent-gold/25 lg:hover:shadow-[0_8px_20px_-10px_rgba(7,17,32,0.03)] transition-all duration-300 group flex flex-col justify-between h-56 will-change-transform"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#071120] text-white flex items-center justify-center mb-6 lg:group-hover:bg-accent-gold lg:group-hover:text-primary-navy transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-primary-navy tracking-tight mb-2 font-heading">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
