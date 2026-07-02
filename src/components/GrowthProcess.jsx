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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="process" className="py-28 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">
            Methodology
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-navy tracking-tight leading-tight mt-3">
            BUSINESS GROWTH PROCESS
          </h2>
          <div className="h-1 w-20 bg-accent-gold rounded-full mt-4" />
          <p className="text-slate-600 mt-6 text-base max-w-xl">
            We follow a structured 5-step growth process, turning strategic vision into tangible value.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Horizontal Line */}
          <div className="absolute top-[52px] left-[5%] right-[5%] h-0.5 bg-slate-100 -z-10" />
          
          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
                  transition={{ duration: isMobile ? 0.35 : 0.6, delay: isMobile ? index * 0.05 : index * 0.15 }}
                  className="flex flex-col items-center text-center px-4 group"
                >
                  {/* Step bubble */}
                  <div className="w-[104px] h-[104px] rounded-full bg-white border-2 border-slate-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-accent-gold transition-all duration-300 relative">
                    <div className="w-[88px] h-[88px] rounded-full bg-slate-50 flex items-center justify-center text-primary-navy group-hover:bg-primary-navy group-hover:text-white transition-colors duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    {/* Small number badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent-gold text-primary-navy font-bold text-xs flex items-center justify-center shadow-md">
                      {step.phase}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-primary-navy mb-2 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal max-w-[200px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden relative space-y-12 pl-8 before:content-[''] before:absolute before:left-3 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-100">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isMobile ? -10 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: isMobile ? "-20px" : "-50px" }}
                transition={{ duration: isMobile ? 0.35 : 0.6, delay: isMobile ? index * 0.05 : index * 0.1 }}
                className="relative group"
              >
                {/* Step bubble */}
                <div className="absolute -left-11 top-0 w-8 h-8 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-sm group-hover:border-accent-gold transition-colors">
                  <Icon className="w-4 h-4 text-primary-navy group-hover:text-accent-gold transition-colors" />
                </div>
                
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-accent-gold uppercase tracking-wider bg-accent-gold/10 px-2 py-0.5 rounded">
                    Phase {step.phase}
                  </span>
                  <h3 className="text-lg font-bold text-primary-navy tracking-wide">
                    {step.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed font-normal max-w-lg">
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
