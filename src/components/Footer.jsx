import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#071120] text-slate-400 border-t border-slate-900/60 py-20 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="flex items-center gap-3 group">
              <div className="w-9 h-9 flex items-center justify-center">
                <Logo className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wider text-white font-heading leading-none">
                  VANTEX
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-accent-gold mt-1 leading-none">
                  Group
                </span>
              </div>
            </a>
            <p className="text-xs leading-relaxed max-w-sm font-normal">
              An enterprise-grade growth advisory group co-creating sustainable value and connecting capital, strategy, and execution.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-400 flex items-center justify-center hover:bg-accent-gold hover:text-primary-navy transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 text-slate-400 flex items-center justify-center hover:bg-accent-gold hover:text-primary-navy transition-colors duration-300"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[10px] font-bold text-white tracking-[0.25em] uppercase">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-normal">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-accent-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-accent-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-accent-gold transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleScrollTo(e, "why-choose-us")} className="hover:text-accent-gold transition-colors">
                  Why Vantex
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold text-white tracking-[0.25em] uppercase">
              Core Practices
            </h4>
            <ul className="space-y-3 text-xs font-normal">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-accent-gold transition-colors">
                  Strategic Advisory
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-accent-gold transition-colors">
                  Business Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-accent-gold transition-colors">
                  Market Expansion
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-accent-gold transition-colors">
                  Healthcare Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-3 space-y-5 text-xs leading-relaxed font-normal">
            <h4 className="text-[10px] font-bold text-white tracking-[0.25em] uppercase">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                <span>
                  Ernahikal Arcade, Near Kottakkal Municipality, Kottakkal, India
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:info@vantegroup.org" className="hover:text-accent-gold transition-colors">
                  info@vantegroup.org
                </a>
              </li>
              <li className="flex gap-2.5">
                <Phone className="w-3.5 h-3.5 text-accent-gold flex-shrink-0 mt-0.5" />
                <a href="tel:+919946430289" className="hover:text-accent-gold transition-colors">
                  +91 99464 30289
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900/60 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] gap-4 font-normal">
          <p>
            © {new Date().getFullYear()} Vantex Group (Vantegroup.org). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
