import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, BarChart4, Network } from "lucide-react";

export default function TrustedPartner() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const features = [
    {
      icon: ShieldCheck,
      title: "Strategic Advisory",
      description: "Providing long-term guidance and corporate leadership frameworks.",
    },
    {
      icon: Compass,
      title: "Structured Expansion",
      description: "Navigating complex market development and expansion routes.",
    },
    {
      icon: Network,
      title: "Business Partnerships",
      description: "Creating key alignments between institutions and enterprises.",
    },
    {
      icon: BarChart4,
      title: "Venture Growth",
      description: "Facilitating future investment networks and growth opportunities.",
    },
  ];

  return (
    <section id="trusted-partner" className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -10 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
            transition={{ duration: isMobile ? 0.45 : 0.8 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-semibold uppercase tracking-wider">
              Trusted Partner
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-navy tracking-tight leading-tight">
              A Trusted Partner for Long-Term Corporate Growth
            </h2>
            
            <div className="h-1 w-20 bg-accent-gold rounded-full" />
            
            <p className="text-lg text-slate-700 font-medium leading-relaxed">
              Our focus is not limited to a single industry. We work with businesses, entrepreneurs, healthcare organizations, and growth-oriented enterprises seeking structured expansion and strategic direction.
            </p>
            
            <p className="text-base text-slate-600 leading-relaxed">
              From market development and business partnerships to future investment opportunities and venture growth, we help organizations navigate their next stage of evolution. We bridge gaps between potential and realization, ensuring that strategic partnerships are formed on solid foundations.
            </p>
          </motion.div>

          {/* Right Column: Grid of Icon Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
                  transition={{ duration: isMobile ? 0.35 : 0.6, delay: isMobile ? index * 0.05 : index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-5 group-hover:bg-accent-gold group-hover:text-primary-navy transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
