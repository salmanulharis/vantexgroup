import React from "react";
import { motion } from "framer-motion";
import { Search, Map, Network, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    phase: "01",
    title: "Discover",
    icon: Search,
    description: "In-depth landscape research and business intelligence to identify growth opportunities.",
  },
  {
    phase: "02",
    title: "Strategy",
    icon: Map,
    description: "Formulating tailored expansion roadmaps, advisory structures, and goals.",
  },
  {
    phase: "03",
    title: "Partnership",
    icon: Network,
    description: "Aligning capital, connecting stakeholders, and building growth partnerships.",
  },
  {
    phase: "04",
    title: "Execution",
    icon: Settings,
    description: "Disciplined hands-on execution and structured implementation of projects.",
  },
  {
    phase: "05",
    title: "Growth",
    icon: TrendingUp,
    description: "Realizing long-term value, market presence, and sustainable operations.",
  },
];

export default function GrowthProcess() {
  return (
    <section id="process" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
            Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-primary-navy tracking-tight leading-[1.1] mt-3">
            BUSINESS GROWTH PROCESS
          </h2>
          <div className="h-[2px] w-16 bg-accent-gold rounded-full mt-4" />
          <p className="text-sm md:text-base text-slate-600 mt-6 max-w-xl font-normal leading-relaxed">
            We follow a structured 5-step growth process, turning strategic vision into tangible value.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Horizontal connecting line (Sleek gold line) */}
          <div className="absolute top-[35px] left-[10%] right-[10%] h-[1.5px] bg-accent-gold/25 -z-10" />
          
          <div className="grid grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                  className="flex flex-col items-center text-center px-4 group"
                >
                  {/* Step bubble */}
                  <div className="w-[70px] h-[70px] rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent-gold transition-all duration-300 relative">
                    <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-primary-navy group-hover:bg-[#071120] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    {/* Small number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent-gold text-primary-navy font-bold text-[10px] flex items-center justify-center shadow-sm">
                      {step.phase}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-primary-navy mb-2 tracking-tight font-heading">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal max-w-[180px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative space-y-12 pl-8 before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-4 before:w-[1.5px] before:bg-slate-200">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
                className="relative group"
              >
                {/* Step bubble */}
                <div className="absolute -left-[43px] top-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-accent-gold transition-colors">
                  <Icon className="w-4 h-4 text-primary-navy group-hover:text-accent-gold transition-colors stroke-[1.5]" />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[9px] font-bold text-accent-gold uppercase tracking-widest bg-accent-gold/10 px-2 py-0.5 rounded">
                    Phase {step.phase}
                  </span>
                  <h3 className="text-base font-bold text-primary-navy tracking-tight font-heading">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-lg">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
