import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Link,
  Milestone,
  TrendingUp,
  Award,
  Users,
  Maximize,
  Compass,
} from "lucide-react";

const advantages = [
  {
    icon: Brain,
    title: "Strategic Thinking",
    description: "We analyze market signals and business models to chart paths of high-probability growth.",
  },
  {
    icon: Link,
    title: "Long-Term Partnerships",
    description: "We co-create sustainable value, staying aligned with our partners through every phase.",
  },
  {
    icon: Milestone,
    title: "Cross-Industry Expertise",
    description: "Our advisors bring diverse insights, cross-pollinating strategies across various fields.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Oriented Approach",
    description: "Every plan we execute is benchmarked on creating long-term value and capital growth.",
  },
  {
    icon: Award,
    title: "Execution Excellence",
    description: "We bridge the gap between planning and execution with disciplined, hands-on oversight.",
  },
  {
    icon: Users,
    title: "Relationship Driven",
    description: "Lasting success is co-constructed through trust, transparency, and deep relationships.",
  },
  {
    icon: Maximize,
    title: "Scalable Solutions",
    description: "We build systems and processes designed to support rapid expansion and operational load.",
  },
  {
    icon: Compass,
    title: "Future-Focused Advisory",
    description: "Anticipating market trends and positioning organizations to capitalize on upcoming cycles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-32 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
            Our Edge
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-primary-navy tracking-tight leading-[1.1] mt-3">
            WHY PARTNER WITH VANTEX
          </h2>
          <div className="h-[2px] w-16 bg-accent-gold rounded-full mt-4" />
        </div>

        {/* Feature Grid (Rebuilt as a clean McKinsey-style corporate grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 overflow-hidden rounded-2xl border border-slate-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.04 }}
                className="p-8 bg-white hover:bg-slate-50/50 transition-all duration-300 group flex flex-col justify-between min-h-64"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-primary-navy/5 text-primary-navy flex items-center justify-center mb-6 group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <h3 className="text-sm font-bold text-primary-navy tracking-tight mb-2 font-heading">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {adv.description}
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
