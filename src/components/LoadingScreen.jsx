import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center max-w-xs space-y-6">
            {/* Logo animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="w-20 h-20 flex items-center justify-center"
            >
              <Logo className="w-full h-full object-contain" />
            </motion.div>

            {/* Brand text */}
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold tracking-widest text-white font-heading">
                VANTEX GROUP
              </h1>
              <p className="text-xs uppercase tracking-[0.35em] text-accent-gold">
                Building Value
              </p>
            </div>

            {/* Progress line loader */}
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
                className="absolute top-0 bottom-0 w-1/2 bg-accent-gold"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
