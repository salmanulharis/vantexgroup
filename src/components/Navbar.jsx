import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Why Vantex", href: "#why-choose-us" },
  { name: "Industries", href: "#industries" },
  { name: "Our Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#071120]/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group select-none"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <div className="w-8 h-8 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
              <Logo className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-light tracking-[0.18em] font-heading text-[#071120]">
                VANTEX
              </span>
              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#9A7428] mt-0.5">
                Group
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`text-[10.5px] font-semibold uppercase tracking-widest transition-all duration-300 relative py-1 link-underline ${
                    isActive ? "text-[#9A7428] font-bold" : "text-[#071120]/75 hover:text-[#071120]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#C9A14A]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Link (Desktop) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className="inline-flex items-center gap-1.5 text-[10.5px] font-semibold tracking-widest uppercase border-b border-[#071120]/20 pb-0.5 hover:border-[#071120] transition-colors"
            >
              Get in Touch
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1 focus:outline-none text-[#071120]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#FAF9F6] z-50 lg:hidden flex flex-col justify-between p-8"
          >
            {/* Header in overlay */}
            <div className="flex justify-between items-center pb-6 border-b border-[#071120]/5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8">
                  <Logo className="w-full h-full object-contain" />
                </div>
                <span className="text-lg font-light tracking-[0.18em] font-heading text-[#071120]">
                  VANTEX
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#071120]"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links - Large Cormorant display list */}
            <nav className="flex flex-col justify-center space-y-4 my-auto">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`text-3xl font-light font-heading tracking-wide py-2 ${
                      isActive ? "text-[#9A7428]" : "text-[#071120]"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </nav>

            {/* CTA in mobile overlay */}
            <div className="border-t border-[#071120]/5 pt-6">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="w-full text-center btn-editorial justify-center"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
