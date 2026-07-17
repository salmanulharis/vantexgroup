import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";

const LinkedInIcon = ({ className = "w-4 h-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
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
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
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
    <footer className="bg-[#071120] text-[#FAF9F6]/65 border-t border-[#FAF9F6]/5 py-12 md:py-20 select-none">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="flex items-center gap-3 group">
              <div className="w-8 h-8 flex items-center justify-center">
                <Logo className="w-full h-full object-contain" variant="dark" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-light tracking-[0.18em] text-white font-heading">
                  VANTEX
                </span>
                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#D4B066] mt-0.5">
                  Group
                </span>
              </div>
            </a>
            <p className="text-xs leading-relaxed max-w-xs font-light">
              An enterprise-grade growth advisory group co-creating sustainable value and connecting capital, strategy, and execution.
            </p>
            {/* Social media links hidden for now
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 text-white/65 flex items-center justify-center hover:border-[#D4B066] hover:text-[#D4B066] transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/10 text-white/65 flex items-center justify-center hover:border-[#D4B066] hover:text-[#D4B066] transition-all duration-300"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            */}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-[10px] font-bold text-white tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#home" onClick={(e) => handleScrollTo(e, "home")} className="hover:text-[#D4B066] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleScrollTo(e, "about")} className="hover:text-[#D4B066] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-[#D4B066] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" onClick={(e) => handleScrollTo(e, "why-choose-us")} className="hover:text-[#D4B066] transition-colors">
                  Why Vantex
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] font-bold text-white tracking-widest uppercase">
              Core Practices
            </h4>
            <ul className="space-y-3 text-xs font-light">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-[#D4B066] transition-colors">
                  Strategic Advisory
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-[#D4B066] transition-colors">
                  Business Development
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-[#D4B066] transition-colors">
                  Market Expansion
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, "services")} className="hover:text-[#D4B066] transition-colors">
                  Healthcare Advisory
                </a>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div className="lg:col-span-3 space-y-5 text-xs leading-relaxed font-light">
            <h4 className="text-[10px] font-bold text-white tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#D4B066] flex-shrink-0 mt-0.5" />
                <span>
                  Ernahikal Arcade, Near Kottakkal Municipality, Kottakkal, India
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-3.5 h-3.5 text-[#D4B066] flex-shrink-0 mt-0.5" />
                <a href="mailto:info@vantexgroup.org" className="hover:text-[#D4B066] transition-colors">
                  info@vantexgroup.org
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="w-3.5 h-3.5 text-[#D4B066] flex-shrink-0 mt-0.5" />
                <a href="tel:+919946430289" className="hover:text-[#D4B066] transition-colors">
                  +91 99464 30289
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-[10px] gap-4 font-light">
          <p>
            © {new Date().getFullYear()} Vantex Group (Vantegroup.org). All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
