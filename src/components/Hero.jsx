import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Shield, TrendingUp, Users } from "lucide-react";

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
      icon: Shield,
      value: "15+",
      label: "Years of Trust",
      description: "Proven track record of advisory excellence",
    },
    {
      icon: Users,
      value: "120+",
      label: "Strategic Alliances",
      description: "Connecting organizations and opportunities",
    },
    {
      icon: TrendingUp,
      value: "2.4B+",
      label: "Value Created",
      description: "Driving growth & portfolio optimization",
    },
    {
      icon: Globe,
      value: "15+",
      label: "Markets Expanded",
      description: "Navigating cross-border growth",
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
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary-navy rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent-gold/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-slate-800 rounded-full blur-[128px]" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full flex flex-col justify-between h-full">
        {/* Hero Text Section */}
        <div className="max-w-4xl mt-8">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-accent-gold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse" />
            Empowering Enterprise Vision
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.45 : 0.8, delay: isMobile ? 0.05 : 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight font-heading leading-[1.1] mb-6"
          >
            BUILDING BUSINESSES. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-white to-accent-gold bg-300% animate-gradient">
              CREATING VALUE.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: isMobile ? 0.1 : 0.2 }}
            className="text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-3xl"
          >
            We partner with organizations to accelerate growth, unlock opportunities, and build sustainable long-term value through strategic advisory, business development, partnerships, and expansion initiatives.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.55 : 0.8, delay: isMobile ? 0.15 : 0.3 }}
            className="flex flex-wrap gap-4 mb-20"
          >
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-accent-gold text-primary-navy font-bold tracking-wide hover:bg-white transition-all duration-300 shadow-lg hover:shadow-accent-gold/25 group gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              onClick={(e) => handleScrollTo(e, "services")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold tracking-wide hover:bg-white/5 hover:border-white/50 transition-colors"
            >
              Our Services
            </a>
          </motion.div>
        </div>

        {/* Hero Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.6 : 1, delay: isMobile ? 0.2 : 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative group overflow-hidden p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent-gold/50 transition-all duration-500 hover:translate-y-[-4px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2.5 rounded-lg bg-accent-gold/10 text-accent-gold group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="text-3xl font-extrabold text-white mb-1 group-hover:text-accent-gold transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-slate-100 mb-1 tracking-wide">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-normal">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
