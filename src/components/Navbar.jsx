import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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

    window.addEventListener("scroll", handleScroll);
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-slate-100/80 shadow-[0_2px_20px_-10px_rgba(7,17,32,0.05)] py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            <div className="w-9 h-9 transition-transform duration-300 group-hover:scale-102 flex items-center justify-center">
              <Logo className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-extrabold tracking-wider font-heading leading-none transition-colors ${
                isScrolled ? "text-primary-navy" : "text-white"
              }`}>
                VANTEX
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent-gold mt-1 leading-none">
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
                  className={`text-xs font-semibold uppercase tracking-widest transition-colors relative py-1 link-underline ${
                    isActive
                      ? isScrolled ? "text-primary-navy font-bold" : "text-accent-gold font-bold"
                      : isScrolled ? "text-slate-500 hover:text-primary-navy" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-gold"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 group gap-1.5 border ${
                isScrolled
                  ? "bg-primary-navy text-white border-primary-navy hover:bg-transparent hover:text-primary-navy"
                  : "bg-white text-primary-navy border-white hover:bg-transparent hover:text-white"
              }`}
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-1 focus:outline-none transition-colors ${
              isScrolled ? "text-primary-navy" : "text-white"
            }`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/40 backdrop-blur-sm z-40 lg:hidden"
            />
            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] max-w-[80vw] bg-white z-50 lg:hidden flex flex-col p-6 shadow-[0_0_50px_rgba(7,17,32,0.1)] border-l border-slate-100"
            >
              {/* Header inside drawer */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                <span className="font-heading font-bold text-primary-navy tracking-[0.2em] text-xs uppercase">
                  Navigation
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-slate-400 hover:text-primary-navy"
                  aria-label="Close Menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-xs font-bold uppercase tracking-widest py-3 px-4 rounded-xl transition-all ${
                        isActive
                          ? "bg-slate-50 text-accent-gold"
                          : "text-slate-600 hover:bg-slate-50 hover:text-primary-navy"
                      }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="mt-6 w-full text-center inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-accent-gold transition-colors gap-1.5"
                >
                  Get in Touch
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
