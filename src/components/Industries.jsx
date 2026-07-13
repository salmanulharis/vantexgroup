import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  HeartPulse,
  Lightbulb,
  School,
  TrendingUp,
  Globe,
  Compass,
} from "lucide-react";

const industriesList = [
  {
    icon: Building2,
    name: "Corporate Enterprises",
    desc: "Established firms looking for structured expansion models.",
  },
  {
    icon: HeartPulse,
    name: "Healthcare Organizations",
    desc: "Hospitals, clinics, and digital health initiatives.",
  },
  {
    icon: Lightbulb,
    name: "Entrepreneurs",
    desc: "Founders seeking to bridge the gap to scale and capital.",
  },
  {
    icon: School,
    name: "Institutions & Academics",
    desc: "Facilitating partnerships between public and private groups.",
  },
  {
    icon: TrendingUp,
    name: "Growth Ventures",
    desc: "Mid-stage enterprises requiring capital and strategy alignments.",
  },
  {
    icon: Globe,
    name: "Community Organizations",
    desc: "Enhancing regional impact and building long-term stakeholder networks.",
  },
  {
    icon: Compass,
    name: "General Business Sector",
    desc: "Advising cross-industry groups on operational and market strategy.",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 bg-[#FAF9F6] select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
            Sector Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-primary-navy tracking-tight leading-[1.1] mt-3">
            INDUSTRIES WE SUPPORT
          </h2>
          <div className="h-[2px] w-16 bg-accent-gold mx-auto mt-4" />
          <p className="text-sm md:text-base text-slate-600 mt-6 max-w-xl mx-auto leading-relaxed font-normal">
            We are sector-agnostic. Our advisors leverage deep operational experience to apply strategic value across a wide spectrum of industries.
          </p>
        </div>

        {/* Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {industriesList.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.03 }}
                className="p-8 rounded-2xl bg-white border border-slate-200/50 lg:hover:border-accent-gold/30 lg:hover:shadow-[0_8px_20px_-10px_rgba(7,17,32,0.03)] lg:hover:-translate-y-[3px] transition-all duration-300 text-center flex flex-col items-center group min-h-60 justify-between will-change-transform"
              >
                <div className="w-12 h-12 rounded-full bg-[#071120] text-white flex items-center justify-center mb-6 lg:group-hover:bg-accent-gold lg:group-hover:text-primary-navy transition-all duration-300">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-primary-navy mb-2 tracking-tight font-heading">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
