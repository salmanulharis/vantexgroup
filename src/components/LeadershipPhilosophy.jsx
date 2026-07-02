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
    <section className="relative py-28 bg-slate-950 text-white overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary-navy/40 via-slate-950 to-black pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        {/* Giant Quote Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
          transition={{ duration: isMobile ? 0.45 : 0.8 }}
          className="flex justify-center mb-6 text-accent-gold"
        >
          <Quote className="w-20 h-20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
          transition={{ duration: isMobile ? 0.45 : 0.8 }}
          className="space-y-8"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
            Philosophy
          </span>
          
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium font-heading italic leading-snug text-slate-100 max-w-4xl mx-auto">
            "Lasting success is built through strong partnerships, disciplined execution, and a clear vision for the future."
          </h2>

          <div className="h-0.5 w-16 bg-accent-gold mx-auto mt-6" />

          <div className="space-y-1">
            <p className="text-base font-bold tracking-wider text-slate-100 font-heading">
              VANTEX GROUP
            </p>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              Corporate Governance & Growth Creed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
