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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="why-choose-us" className="py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">
            Our Edge
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-navy tracking-tight leading-tight mt-3">
            WHY PARTNER WITH VANTEX
          </h2>
          <div className="h-1 w-20 bg-accent-gold rounded-full mt-4" />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) => {
            const Icon = adv.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
                transition={{ duration: isMobile ? 0.35 : 0.6, delay: isMobile ? index * 0.03 : index * 0.05 }}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent-gold/40 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary-navy/5 text-primary-navy flex items-center justify-center mb-5 group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-primary-navy mb-2 tracking-wide">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
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
