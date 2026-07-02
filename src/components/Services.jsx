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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: isMobile
        ? { type: "tween", ease: "easeOut", duration: 0.3 }
        : { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section id="services" className="py-28 bg-slate-950 text-white relative">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary-navy/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20 text-left">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-accent-gold">
            Our Offerings
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-3 tracking-tight">
            CORE SERVICES
          </h2>
          <div className="h-1.5 w-24 bg-accent-gold rounded-full mt-5 mb-6" />
          <p className="text-lg text-slate-300 font-normal leading-relaxed">
            We deliver actionable strategies and hands-on execution frameworks designed to accelerate institutional growth and unlock multi-dimensional enterprise value.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: isMobile ? "-15px" : "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-gold/40 hover:bg-white/[0.08] transition-all duration-300 hover:translate-y-[-4px] flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 text-accent-gold flex items-center justify-center mb-6 group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
                
                {/* Visual Accent Corner indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-transparent group-hover:bg-accent-gold transition-colors duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
