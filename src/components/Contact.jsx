import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Send, CheckCircle, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "Strategic Advisory",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", company: "", service: "Strategic Advisory", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-[#FAF9F6] text-[#071120] relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Info & Coordinate map locator */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-4">
              <span className="label-overline">Get in Touch</span>
              <h2 className="heading-editorial">
                Contact Us
              </h2>
              <div className="w-12 h-px bg-[#C9A14A]" />
              <p className="text-[#1E293B]/80 text-sm font-light leading-relaxed">
                Connect with our advisory board to discuss investment strategies, regional expansion plans, or corporate advisory requirements.
              </p>
            </div>

            {/* Contact details list — Typographic list (No cards!) */}
            <div className="space-y-6 pt-6 border-t border-[#071120]/5">
              
              {/* Address detail */}
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 text-[#9A7428] flex-shrink-0 mt-0.5">
                  <MapPin className="w-full h-full stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#071120]/55 uppercase tracking-widest mb-1.5 font-sans">
                    Corporate Office
                  </h4>
                  <p className="text-xs text-[#1E293B] leading-relaxed font-light">
                    Vantex Group, Ernahikal Arcade,<br />
                    Near Kottakkal Municipality, Kottakkal,<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 text-[#9A7428] flex-shrink-0 mt-0.5">
                  <Mail className="w-full h-full stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#071120]/55 uppercase tracking-widest mb-1.5 font-sans">
                    Electronic Mail
                  </h4>
                  <a href="mailto:info@vantegroup.org" className="text-xs text-[#071120] font-medium link-underline">
                    info@vantegroup.org
                  </a>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 text-[#9A7428] flex-shrink-0 mt-0.5">
                  <Phone className="w-full h-full stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#071120]/55 uppercase tracking-widest mb-1.5 font-sans">
                    Phone Number
                  </h4>
                  <a href="tel:+919946430289" className="text-xs text-[#071120] font-medium link-underline">
                    +91 99464 30289
                  </a>
                </div>
              </div>

              {/* Hours detail */}
              <div className="flex gap-4 items-start">
                <div className="w-5 h-5 text-[#9A7428] flex-shrink-0 mt-0.5">
                  <Clock className="w-full h-full stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-[#071120]/55 uppercase tracking-widest mb-1.5 font-sans">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-[#1E293B] font-light">
                    Monday – Friday: 9:00 AM – 6:00 PM (IST)
                  </p>
                </div>
              </div>

            </div>

            {/* Architectural Koordinaten Display (Map locator) */}
            <div className="relative h-44 bg-[#071120] flex flex-col items-center justify-center p-6 text-center select-none">
              {/* Subtle line background */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:20px_20px]" />
              <div className="relative z-10 space-y-3">
                <MapPin className="w-5 h-5 text-[#D4B066] mx-auto stroke-[1.5]" />
                <div>
                  <h5 className="text-[10px] font-bold text-[#FAF9F6] uppercase tracking-widest mb-0.5">
                    Ernahikal Arcade, Kottakkal
                  </h5>
                  <p className="text-[9px] text-[#FAF9F6]/60">
                    10.9968° N | 76.0125° E
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kottakkal+Municipality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[8.5px] font-bold text-[#D4B066] uppercase tracking-wider hover:text-white transition-colors border-b border-[#D4B066]/30 pb-0.5"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 bg-[#F5F2EB] p-8 md:p-12"
          >
            <div className="mb-10">
              <h3 className="text-2xl font-light font-heading text-[#071120] mb-2">
                Send a Message
              </h3>
              <p className="text-[#1E293B]/80 text-xs font-light">
                Fill in the details below. Our corporate relations coordinator will reach out to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-widest text-[#071120]/60 block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-editorial"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-[#071120]/60 block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-editorial"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Company Name */}
                <div className="space-y-1">
                  <label htmlFor="company" className="text-[9px] font-bold uppercase tracking-widest text-[#071120]/60 block">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-editorial"
                    placeholder="Venture name"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-1 relative">
                  <label htmlFor="service" className="text-[9px] font-bold uppercase tracking-widest text-[#071120]/60 block">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="input-editorial cursor-pointer appearance-none"
                  >
                    <option value="Strategic Advisory">Strategic Advisory</option>
                    <option value="Business Development">Business Development</option>
                    <option value="Market Expansion">Market Expansion</option>
                    <option value="Healthcare Advisory">Healthcare Advisory</option>
                    <option value="Partnership Development">Partnership Development</option>
                    <option value="Capital & Growth Partnerships">Capital & Growth Partnerships</option>
                    <option value="Venture Development">Venture Development</option>
                    <option value="Project Development & Execution">Project Development & Execution</option>
                  </select>
                  <div className="absolute right-0 bottom-2 pointer-events-none text-xs text-[#071120]/55">
                    ▼
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-widest text-[#071120]/60 block">
                  Brief Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="input-editorial resize-none"
                  placeholder="Explain your goals or requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full btn-editorial justify-between group"
              >
                {isSubmitting ? (
                  <>
                    <span>Processing Request...</span>
                    <svg className="animate-spin h-4 w-4 text-[#071120]" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </>
                ) : isSubmitted ? (
                  <>
                    <span>Message Dispatched</span>
                    <CheckCircle className="w-4 h-4 text-[#9A7428]" />
                  </>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
