import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TrustedPartner from './components/TrustedPartner.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Industries from './components/Industries.jsx';
import GrowthProcess from './components/GrowthProcess.jsx';
import LeadershipPhilosophy from './components/LeadershipPhilosophy.jsx';
import CTA from './components/CTA.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustedPartner />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Industries />
        <GrowthProcess />
        <LeadershipPhilosophy />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
