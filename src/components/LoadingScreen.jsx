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
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="fixed inset-0 z-50 bg-[#071120] flex flex-col items-center justify-center select-none"
        >
          <div className="flex flex-col items-center max-w-xs space-y-8">
            {/* Elegant Logo Zoom */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="w-16 h-16 flex items-center justify-center"
            >
              <Logo className="w-full h-full object-contain" />
            </motion.div>

            {/* Typography block */}
            <motion.div 
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-center space-y-1.5"
            >
              <h1 className="text-xl font-bold tracking-[0.25em] text-white font-heading">
                VANTEX
              </h1>
              <p className="text-[10px] uppercase tracking-[0.4em] text-accent-gold font-semibold">
                BUILDING VALUE
              </p>
            </motion.div>

            {/* Minimalist precise progress line */}
            <div className="w-40 h-[1.5px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-accent-gold to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
