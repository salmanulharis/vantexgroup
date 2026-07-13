import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Briefcase,
  Globe2,
  HeartPulse,
  Users2,
  Coins,
  Rocket,
  Network,
  GraduationCap,
  FolderKanban,
  ArrowRight,
} from "lucide-react";

const servicesList = [
  {
    icon: LineChart,
    title: "Strategic Advisory",
    description: "Providing growth-focused guidance, business insights, and expansion strategies for organizations seeking long-term value creation.",
  },
  {
    icon: Briefcase,
    title: "Business Development",
    description: "Identifying opportunities, building partnerships, and creating pathways for sustainable business growth.",
  },
  {
    icon: Globe2,
    title: "Market Expansion",
    description: "Supporting organizations in entering new markets, strengthening regional presence, and unlocking growth opportunities.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Advisory",
    description: "Supporting hospitals, clinics, healthcare organizations, and healthcare ventures through strategic planning and growth initiatives.",
  },
  {
    icon: Users2,
    title: "Partnership Development",
    description: "Facilitating strategic collaborations between businesses, institutions, entrepreneurs, and stakeholders.",
  },
  {
    icon: Coins,
    title: "Capital & Growth Partnerships",
    description: "Exploring strategic growth opportunities through partnerships, investment networks, and value-creation initiatives.",
  },
  {
    icon: Rocket,
    title: "Venture Development",
    description: "Supporting emerging businesses and growth-stage ventures through structured development and expansion planning.",
  },
  {
    icon: Network,
    title: "Community & Institutional Engagement",
    description: "Building meaningful relationships with communities, institutions, organizations, and industry stakeholders.",
  },
  {
    icon: GraduationCap,
    title: "Leadership & Capacity Building",
    description: "Developing people, teams, and organizations through training, mentoring, and growth-focused programs.",
  },
  {
    icon: FolderKanban,
    title: "Project Development & Execution",
    description: "Supporting organizations in planning, launching, and executing strategic initiatives and expansion projects.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-[#FAF9F6] text-[#071120] relative overflow-hidden"
    >
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
            <span className="label-overline">Our Offerings</span>
            <h2 className="heading-editorial">
              Core Services
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
            <p className="text-[#1E293B]/70 text-sm font-light leading-relaxed">
              We deliver actionable strategies and hands-on execution frameworks designed to accelerate institutional growth and unlock multi-dimensional enterprise value.
            </p>
          </motion.div>
        </div>

        {/* Services List Layout (Numbered rows with accordion descriptions for desktop & mobile) */}
        <div
          className="border-t border-[#071120]/10 divide-y divide-[#071120]/10"
          onMouseLeave={() => {
            if (window.matchMedia("(hover: hover)").matches) {
              setActiveIndex(null);
            }
          }}
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            const isOpen = activeIndex === index;
            const numStr = (index + 1).toString().padStart(2, "0");

            return (
              <div
                key={index}
                className="group py-6 md:py-8 cursor-pointer select-none transition-all"
                onClick={() => setActiveIndex(isOpen ? null : index)}
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    setActiveIndex(index);
                  }
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left row summary */}
                  <div className="flex items-center gap-6 md:gap-10">
                    <span className="text-[13px] font-bold text-[#C9A14A] font-sans">
                      {numStr}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 text-[#071120]/60 group-hover:text-[#C9A14A] transition-colors">
                        <Icon className="w-full h-full stroke-[1.5]" />
                      </div>
                      <h3 className="heading-sub font-normal text-lg md:text-xl group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Toggle Indicator */}
                  <div className="flex items-center gap-2 self-end md:self-auto text-xs font-semibold uppercase tracking-wider text-[#071120]/45 group-hover:text-[#C9A14A] transition-colors">
                    <span className="hidden md:inline">Details</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <ArrowRight className="w-4 h-4 stroke-[1.5]" />
                    </motion.div>
                  </div>

                </div>

                {/* Smooth Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-12 md:pl-16 pr-4 pt-4 pb-2 max-w-2xl">
                        <p className="text-[#1E293B]/70 text-[13.5px] leading-relaxed font-light">
                          {service.description}
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
