import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Clock, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    <section id="contact" className="py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? -10 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
            transition={{ duration: isMobile ? 0.45 : 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-3">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent-gold">
                Get in Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-navy tracking-tight">
                CONTACT US
              </h2>
              <div className="h-1 w-20 bg-accent-gold rounded-full" />
              <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                Connect with our advisory board to discuss investment strategies, regional expansion plans, or corporate advisory requirements.
              </p>
            </div>

            {/* Contact details list */}
            <div className="space-y-6">
              {/* Address card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy tracking-wider uppercase mb-1">
                    Corporate Office
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Vantex Group, Ernahikal Arcade,<br />
                    Near Kottakkal Municipality, Kottakkal,<br />
                    Kerala, India
                  </p>
                </div>
              </div>

              {/* Email card */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy tracking-wider uppercase mb-1">
                    Electronic Mail
                  </h4>
                  <p className="text-sm text-slate-600 font-semibold">
                    info@vantegroup.org
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-primary-navy text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-navy tracking-wider uppercase mb-1">
                    Operating Hours
                  </h4>
                  <p className="text-sm text-slate-600 font-normal">
                    Monday – Friday: 9:00 AM – 6:00 PM (IST)
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Placeholder (Styled Premium Card) */}
            <div className="relative h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-lg flex flex-col items-center justify-center group p-6 text-center">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
              <div className="absolute top-0 right-0 p-3 bg-white/5 border-b border-l border-white/10 rounded-bl-xl text-accent-gold text-xs font-semibold uppercase tracking-wider">
                Geographic Coordinate
              </div>
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 text-accent-gold flex items-center justify-center mx-auto border border-accent-gold/30 animate-pulse">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                    Ernahikal Arcade, Kottakkal
                  </h5>
                  <p className="text-xs text-slate-400">
                    Latitude: 10.9968° N | Longitude: 76.0125° E
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=Kottakkal+Municipality"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-bold text-accent-gold hover:text-white transition-colors gap-1 border-b border-accent-gold/40 pb-0.5 hover:border-white"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isMobile ? 10 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
            transition={{ duration: isMobile ? 0.45 : 0.8 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden"
          >
            {/* Header Form */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary-navy mb-2 font-heading">
                Send a Message
              </h3>
              <p className="text-slate-500 text-sm">
                Fill in the details below. Our corporate relations coordinator will reach out to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-primary-navy">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-primary-navy">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-primary-navy">
                    Company / Organization
                  </label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-accent-gold transition-colors"
                    placeholder="Venture name"
                  />
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-primary-navy">
                    Interested Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-accent-gold transition-colors appearance-none"
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
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-primary-navy">
                  Brief Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-accent-gold transition-colors resize-none"
                  placeholder="Explain your goals or requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-navy text-white font-bold tracking-wide hover:bg-accent-gold transition-colors duration-300 disabled:opacity-75 disabled:cursor-not-allowed group gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Request...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 text-accent-gold" />
                    Message Dispatched Successfully!
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
