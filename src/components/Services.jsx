import React from "react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
    },
  };

  return (
    <section id="services" className="py-32 bg-[#071120] text-white relative select-none">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#071120] to-black pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-navy/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24 text-left">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
            Our Offerings
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-heading mt-3 tracking-tight">
            CORE SERVICES
          </h2>
          <div className="h-[2px] w-16 bg-accent-gold rounded-full mt-4" />
          <p className="text-sm md:text-base text-slate-300 font-normal leading-relaxed mt-6 max-w-xl">
            We deliver actionable strategies and hands-on execution frameworks designed to accelerate institutional growth and unlock multi-dimensional enterprise value.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group p-8 rounded-2xl bg-white/[0.01] border border-white/5 lg:hover:border-accent-gold/25 lg:hover:bg-white/[0.02] transition-all duration-300 flex flex-col justify-between min-h-64 will-change-transform"
              >
                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center mb-6 lg:group-hover:bg-accent-gold lg:group-hover:text-[#071120] transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-2.5 tracking-tight font-heading">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
                
                {/* Visual Accent Corner indicator */}
                <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-transparent lg:group-hover:bg-accent-gold transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
