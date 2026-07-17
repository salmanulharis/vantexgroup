import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map, Network, Settings, TrendingUp, Plus, Minus } from "lucide-react";

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
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="py-16 md:py-24 bg-[#F5F2EB] text-[#071120] relative overflow-hidden"
    >
      {/* Subtle noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="label-overline">Methodology</span>
            <h2 className="heading-editorial">
              Business Growth Process
            </h2>
            <div className="w-12 h-px bg-[#C9A14A]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5"
          >
            <p className="text-[#1E293B]/80 text-sm font-light leading-relaxed">
              We follow a structured 5-step growth process, turning strategic vision into tangible value.
            </p>
          </motion.div>
        </div>

        {/* Desktop timeline & content layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-16 items-start pt-6">
          {/* Left Side: Accordion Selector */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`py-4 px-6 cursor-pointer border-l-2 transition-all duration-300 ${
                  activeStep === idx
                    ? "border-[#C9A14A] bg-[#FAF9F6]/80"
                    : "border-transparent hover:border-[#071120]/30 hover:bg-[#FAF9F6]/20"
                }`}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setActiveStep(idx);
                  }
                }}
              >
                <div className="flex items-center gap-4">
                  <span className={`text-xs font-bold font-sans ${activeStep === idx ? "text-[#9A7428]" : "text-[#071120]/55"}`}>
                    {step.phase}
                  </span>
                  <h3 className={`text-base tracking-wider uppercase font-semibold ${activeStep === idx ? "text-[#071120]" : "text-[#071120]/70"}`}>
                    {step.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Detailed Card display */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-12 border border-[#071120]/5 relative min-h-[300px] flex flex-col justify-center">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              if (activeStep !== idx) return null;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#C9A14A]/10 text-[#9A7428] flex items-center justify-center">
                      <Icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#9A7428] tracking-wider uppercase">Phase {step.phase}</span>
                      <h4 className="heading-sub font-normal text-2xl">{step.title}</h4>
                    </div>
                  </div>
                  <p className="text-[#1E293B]/80 leading-relaxed font-light text-[15px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Accordion Timeline */}
        <div className="lg:hidden divide-y divide-[#071120]/10 border-t border-b border-[#071120]/10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isOpen = activeStep === idx;

            return (
              <div key={idx} className="py-5">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setActiveStep(isOpen ? -1 : idx)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-[#9A7428]">{step.phase}</span>
                    <h3 className="text-base tracking-wider uppercase font-semibold text-[#071120]">
                      {step.title}
                    </h3>
                  </div>
                  <div>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-8 space-y-4">
                        <div className="flex items-center gap-3 text-[#9A7428]">
                          <Icon className="w-4 h-4 stroke-[1.5]" />
                          <span className="text-[10px] font-bold uppercase tracking-wider">Phase {step.phase} Details</span>
                        </div>
                        <p className="text-xs text-[#1E293B]/80 leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
