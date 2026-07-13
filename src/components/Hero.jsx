import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Users, Briefcase, TrendingUp, Target } from "lucide-react";

export default function Hero() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const stats = [
    {
      icon: Briefcase,
      value: "5+",
      label: "Years of Industry Experience",
      description: "Building businesses through strategy and partnerships.",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Stakeholder Engagements",
      description: "Collaborating with organizations, communities, and industry leaders.",
    },
    {
      icon: TrendingUp,
      value: "30+",
      label: "Leadership Meetings",
      description: "Engaging with founders, executives, and institutional decision-makers.",
    },
    {
      icon: Target,
      value: "Vision-Driven",
      label: "Building Tomorrow’s Enterprises",
      description: "Focused on sustainable growth and long-term value.",
    },
  ];

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-40 pb-24 flex flex-col justify-center overflow-hidden bg-[#071120] text-white"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-navy rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-gold/5 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-900 rounded-full blur-[128px]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col justify-between h-full">
        {/* Hero Text Section */}
        <div className="max-w-4xl mt-4">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 8 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse" />
            Empowering Enterprise Vision
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.45 : 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight font-heading leading-[1.08] mb-8"
          >
            BUILDING BUSINESSES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-white to-accent-gold bg-[length:200%_auto] animate-gradient font-black">
              CREATING VALUE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-12 max-w-2xl"
          >
            We partner with organizations to accelerate growth, unlock opportunities, and build sustainable long-term value through strategic advisory, business development, partnerships, and expansion initiatives.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.55 : 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-24"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-gold text-primary-navy font-bold text-xs uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg shadow-accent-gold/10 hover:shadow-white/10 group gap-2"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "services")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/15 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-colors"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Rebuilt Statistics Matrix (Minimal McKinsey-like divider layout) */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-12 border-t border-white/10 pt-10"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group flex flex-col justify-between space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div className="text-accent-gold group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 font-heading tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold text-slate-100 uppercase tracking-widest mb-1.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed font-normal">
                    {stat.description}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
