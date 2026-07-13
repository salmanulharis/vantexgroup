import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
          exit={{ 
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 bg-[#071120] flex flex-col items-center justify-center select-none will-change-transform"
        >
          {/* Subtle light ambient glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,161,74,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="flex flex-col items-center space-y-6 relative z-10">
            {/* Logo transition */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 flex items-center justify-center"
            >
              <Logo className="w-full h-full object-contain" />
            </motion.div>

            {/* Typography brand */}
            <motion.div 
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center space-y-2"
            >
              <h1 className="text-xl font-light tracking-[0.25em] text-white font-heading">
                VANTEX
              </h1>
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#C9A14A] font-semibold">
                Building Value
              </p>
            </motion.div>

            {/* Micro loading line */}
            <div className="w-24 h-[1px] bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#C9A14A] to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
