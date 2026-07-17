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
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const chipVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="industries"
      className="py-16 md:py-24 bg-[#FAF9F6] text-[#071120] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4"
          >
            <span className="label-overline">Sector Expertise</span>
            <h2 className="heading-editorial">
              Industries We Support
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
              We are sector-agnostic. Our advisors leverage deep operational experience to apply strategic value across a wide spectrum of industries.
            </p>
          </motion.div>
        </div>

        {/* Typographic Chips Scatter / Flow layout (No cards) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          className="flex flex-wrap gap-3 md:gap-4 justify-start items-center"
        >
          {industriesList.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={index}
                variants={chipVariants}
                className="industry-chip group border border-[#071120]/10 hover:border-[#071120] bg-transparent hover:bg-[#071120] transition-all duration-300 py-3.5 px-6 flex items-center gap-3 cursor-default"
              >
                <div className="w-4 h-4 text-[#9A7428] flex items-center justify-center">
                  <Icon className="w-full h-full stroke-[1.5]" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#071120] group-hover:text-white transition-colors">
                    {ind.name}
                  </span>
                  <span className="block text-[10px] text-[#1E293B]/65 group-hover:text-[#FAF9F6]/75 transition-colors leading-none mt-1">
                    {ind.desc}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Subtle footer quote in block */}
        <div className="mt-10 md:mt-16 w-full h-px bg-[#071120]/5" />
        <div className="mt-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-[#071120]/30 font-medium">
          <span>Strategy transfers</span>
          <span>Domain expertise amplifies</span>
        </div>

      </div>
    </section>
  );
}
