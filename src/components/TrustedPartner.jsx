import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Compass, Network, BarChart4 } from "lucide-react";

export default function TrustedPartner() {
  const capabilities = [
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
    <section
      id="trusted-partner"
      className="py-16 md:py-24 bg-[#FAF9F6] text-[#071120] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Visual separator rule */}
        <div className="w-full h-px bg-[#071120]/5 mb-10 md:mb-16" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Big Manifesto Quote */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="label-overline">Trusted Partner</span>
            <h2 className="heading-editorial leading-tight">
              A Trusted Partner for Long-Term Corporate Growth
            </h2>
            <blockquote className="italic font-heading text-xl text-[#9A7428] max-w-sm pt-4 leading-relaxed">
              "We bridge gaps between potential and realization, ensuring that strategic partnerships are formed on solid foundations."
            </blockquote>
          </motion.div>

          {/* Right Column: Dynamic Editorial Prose + Capabilities Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 space-y-12 lg:pl-6"
          >
            <div className="space-y-6 paragraph-editorial">
              <p className="font-normal text-[#071120]">
                Our focus is not limited to a single industry. We work with businesses, entrepreneurs, healthcare organizations, and growth-oriented enterprises seeking structured expansion and strategic direction.
              </p>
              <p>
                From market development and business partnerships to future investment opportunities and venture growth, we help organizations navigate their next stage of evolution. We treat our clients' targets as our own.
              </p>
            </div>

            {/* Capabilities Layout — Clean list with hairline borders (No cards!) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-[#071120]/5">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-none bg-[#C9A14A]/10 text-[#9A7428] flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 stroke-[1.5]" />
                      </div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#071120]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[12.5px] text-[#1E293B]/80 leading-relaxed font-light pl-8">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
