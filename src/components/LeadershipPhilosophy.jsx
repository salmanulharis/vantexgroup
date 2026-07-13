import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function LeadershipPhilosophy() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative py-36 bg-[#071120] text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-navy/30 via-[#071120] to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        
        {/* Editorial Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
          transition={{ duration: isMobile ? 0.45 : 0.6 }}
          className="flex justify-center text-accent-gold"
        >
          <Quote className="w-16 h-16 stroke-[1.25]" />
        </motion.div>

        {/* Content quote block */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
          transition={{ duration: isMobile ? 0.45 : 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
            Philosophy
          </span>
          
          <h2 className="text-xl sm:text-2xl md:text-4xl font-medium font-heading italic leading-relaxed text-slate-100 max-w-3xl mx-auto px-4">
            "Lasting success is built through strong partnerships, disciplined execution, and a clear vision for the future."
          </h2>

          <div className="h-[1.5px] w-12 bg-accent-gold mx-auto mt-8" />

          <div className="space-y-1">
            <p className="text-xs font-bold tracking-[0.2em] text-slate-100 font-heading uppercase">
              VANTEX GROUP
            </p>
            <p className="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-semibold">
              Corporate Governance & Growth Creed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
