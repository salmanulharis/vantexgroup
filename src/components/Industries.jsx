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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="industries" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">
            Sector Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-navy tracking-tight leading-tight mt-3">
            INDUSTRIES WE SUPPORT
          </h2>
          <div className="h-1 w-20 bg-accent-gold mx-auto mt-4" />
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-base">
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
                initial={{ opacity: 0, scale: isMobile ? 0.98 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
                transition={{ duration: isMobile ? 0.35 : 0.5, delay: isMobile ? index * 0.03 : index * 0.05 }}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-accent-gold/40 transition-all duration-300 text-center flex flex-col items-center group"
              >
                <div className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center mb-6 group-hover:bg-accent-gold group-hover:text-primary-navy transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-primary-navy mb-2 tracking-wide">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {ind.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
