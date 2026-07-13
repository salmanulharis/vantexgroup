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
    <section id="contact" className="py-32 bg-white relative select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 space-y-8 will-change-transform"
          >
            <div className="space-y-3">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-accent-gold block">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-heading text-primary-navy tracking-tight leading-[1.1]">
                CONTACT US
              </h2>
              <div className="h-[2px] w-16 bg-accent-gold rounded-full" />
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                Connect with our advisory board to discuss investment strategies, regional expansion plans, or corporate advisory requirements.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-4">
              
              {/* Address card */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/50 lg:hover:border-slate-300 lg:hover:shadow-[0_4px_12px_rgba(7,17,32,0.02)] transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary-navy tracking-widest uppercase mb-1 font-heading">
                    Corporate Office
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Vantex Group, Ernahikal Arcade,<br />
                    Near Kottakkal Municipality, Kottakkal,<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/50 lg:hover:border-slate-300 lg:hover:shadow-[0_4px_12px_rgba(7,17,32,0.02)] transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary-navy tracking-widest uppercase mb-1 font-heading">
                    Electronic Mail
                  </h4>
                  <p className="text-xs text-slate-600 font-semibold">
                    info@vantegroup.org
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/50 lg:hover:border-slate-300 lg:hover:shadow-[0_4px_12px_rgba(7,17,32,0.02)] transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary-navy tracking-widest uppercase mb-1 font-heading">
                    Phone Number
                  </h4>
                  <p className="text-xs text-slate-600 font-semibold">
                    <a href="tel:+919946430289" className="lg:hover:text-accent-gold transition-colors">
                      +91 99464 30289
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 p-6 rounded-2xl bg-white border border-slate-200/50 lg:hover:border-slate-300 lg:hover:shadow-[0_4px_12px_rgba(7,17,32,0.02)] transition-all duration-300">
                <div className="w-9 h-9 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-primary-navy tracking-widest uppercase mb-1 font-heading">
                    Operating Hours
                  </h4>
                  <p className="text-xs text-slate-600 font-normal">
                    Monday – Friday: 9:00 AM – 6:00 PM (IST)
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Placeholder */}
            <div className="relative h-60 rounded-2xl overflow-hidden bg-[#071120] border border-slate-800 shadow-sm flex flex-col items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
              <div className="absolute top-0 right-0 p-3 bg-white/5 border-b border-l border-white/10 rounded-bl-xl text-accent-gold text-[9px] font-bold uppercase tracking-wider">
                Geographic Coordinate
              </div>
              <div className="relative z-10 space-y-4">
                <div className="w-10 h-10 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center mx-auto border border-accent-gold/25 animate-pulse">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1 font-heading">
                    Ernahikal Arcade, Kottakkal
                  </h5>
                  <p className="text-[10px] text-slate-400 font-normal">
                    Latitude: 10.9968° N | Longitude: 76.0125° E
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kottakkal+Municipality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] font-bold text-accent-gold uppercase tracking-wider lg:hover:text-white transition-colors gap-1 border-b border-accent-gold/30 pb-0.5 lg:hover:border-white"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="lg:col-span-7 bg-[#FAF9F6] border border-slate-200/60 p-8 md:p-10 rounded-3xl will-change-transform"
          >
            {/* Header Form */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-primary-navy mb-2 font-heading tracking-tight">
                Send a Message
              </h3>
              <p className="text-slate-500 text-xs">
                Fill in the details below. Our corporate relations coordinator will reach out to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[9px] font-bold uppercase tracking-widest text-primary-navy block">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/70 text-slate-800 text-xs focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all font-normal"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[9px] font-bold uppercase tracking-widest text-primary-navy block">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/70 text-slate-800 text-xs focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all font-normal"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-[9px] font-bold uppercase tracking-widest text-primary-navy block">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/70 text-slate-800 text-xs focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all font-normal"
                    placeholder="Venture name"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-[9px] font-bold uppercase tracking-widest text-primary-navy block">
                    Interested Service
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/70 text-slate-800 text-xs focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all font-normal appearance-none cursor-pointer"
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
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-[9px] font-bold uppercase tracking-widest text-primary-navy block">
                  Brief Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-200/70 text-slate-800 text-xs focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold/20 transition-all resize-none font-normal"
                  placeholder="Explain your goals or requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full inline-flex items-center justify-center px-6 py-4 rounded-full bg-primary-navy text-white text-xs font-bold uppercase tracking-widest lg:hover:bg-accent-gold lg:hover:text-primary-navy transition-all duration-300 disabled:opacity-75 disabled:cursor-not-allowed group gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Request...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-accent-gold" />
                    Message Dispatched Successfully!
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
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
