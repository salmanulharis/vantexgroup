import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const stats = [
    {
      value: "5+",
      label: "Years of Experience",
      description: "Building businesses through strategy and partnerships.",
    },
    {
      value: "1000+",
      label: "Stakeholder Engagements",
      description: "Collaborating with organizations, communities, and leaders.",
    },
    {
      value: "30+",
      label: "Leadership Meetings",
      description: "Engaging directly with founders and institutional executives.",
    },
    {
      value: "Vision",
      label: "Tomorrow's Enterprises",
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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-36 pb-20 flex flex-col justify-center overflow-hidden bg-[#FAF9F6] text-[#071120]"
    >
      {/* Editorial lighting and lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft lighting glow */}
        <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[radial-gradient(circle_at_top_right,rgba(201,161,74,0.04)_0%,transparent_75%)]" />
        {/* Subtle grid line accent */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#071120]/[0.03] hidden lg:block" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 w-full flex-grow flex flex-col justify-between">
        
        {/* Hero split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center my-auto">
          
          {/* Left Column: Heading & Paragraph */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8 text-left"
          >
            <motion.div variants={itemVariants}>
              <span className="label-overline">
                Empowering Enterprise Vision
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="heading-display text-transparent bg-clip-text bg-gradient-to-br from-[#071120] via-[#0A192F] to-[#1E293B]"
            >
              Building businesses.<br />
              <span className="font-light italic text-[#C9A14A]">Creating value.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="paragraph-editorial max-w-lg"
            >
              We partner with organizations to accelerate growth, unlock opportunities, and build sustainable long-term value through strategic advisory, partnerships, and expansion initiatives.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 items-center"
            >
              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, "contact")}
                className="btn-editorial-gold"
              >
                Get in Touch
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, "services")}
                className="btn-editorial-text"
              >
                Our Services
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Typographic statistics vertical stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="lg:col-span-5 grid grid-cols-2 lg:grid-cols-1 gap-6 lg:gap-8 border-t lg:border-t-0 lg:border-l border-[#071120]/10 pt-8 lg:pt-0 lg:pl-12"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-light text-[#C9A14A] font-heading leading-none mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold text-[#071120] uppercase tracking-wider mb-1.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#1E293B]/70 leading-relaxed font-light">
                    {stat.description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center items-center gap-3 pt-8 lg:pt-0 select-none cursor-pointer"
          onClick={(e) => handleScrollTo(e, "trusted-partner")}
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#071120]/40 font-medium">Scroll to explore</span>
          <div className="w-[1px] h-8 bg-[#071120]/10 relative overflow-hidden">
            <motion.div
              animate={{ y: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-1/2 bg-[#C9A14A]"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
