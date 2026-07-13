import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Link2,
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
    icon: Link2,
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
    <section
      id="why-choose-us"
      className="py-16 md:py-24 bg-[#F5F2EB] text-[#071120] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16 text-left">
          <span className="label-overline mb-4">Our Edge</span>
          <h2 className="heading-editorial">
            Why Partner with Vantex
          </h2>
          <div className="w-12 h-px bg-[#C9A14A] mt-5" />
        </div>

        {/* Typographic Asymmetric Grid (Using thin hairlines instead of card borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -40px 0px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                className="group space-y-4 text-left flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Styled minimalist icon container */}
                  <div className="w-7 h-7 bg-[#071120]/5 text-[#071120]/70 flex items-center justify-center group-hover:bg-[#C9A14A] group-hover:text-[#FAF9F6] transition-colors duration-300">
                    <Icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-[15px] font-bold uppercase tracking-wider text-[#071120]">
                      {adv.title}
                    </h3>
                    <p className="text-[12.5px] text-[#1E293B]/70 leading-relaxed font-light">
                      {adv.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
