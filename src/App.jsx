import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import FloatingSkillStage from './components/FloatingSkillStage';
import CertificatesSection from './components/CertificatesSection';
import TechSpecs from './components/TechSpecs';
import ResumeSection from './components/ResumeSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SpotlightCursor from './components/SpotlightCursor';

export default function App() {
  const [toastMessage, setToastMessage] = useState('');

  // Silky smooth scroll velocity progress tracking
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-[#F9FAFB] flex flex-col selection:bg-cyan-500/30 selection:text-cyan-300 relative w-full max-w-full overflow-x-hidden">
      {/* Top Silky Laser Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-500 origin-left z-50 pointer-events-none shadow-[0_0_12px_rgba(6,182,212,0.8)]"
      />

      {/* Ambient Mouse Spotlight Light Follower */}
      <SpotlightCursor />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-6 z-50 bg-zinc-900/90 border border-cyan-500/50 text-white px-4 py-3 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="font-mono text-xs">{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar with Scrollspy & Mobile Bottom Dock */}
      <Navbar />

      {/* Main Content with bottom padding to comfortably clear mobile bottom dock */}
      <main className="flex-1 pb-20 md:pb-0">
        {/* Flagship Hero 3-column studio layout */}
        <Hero />

        {/* Featured Engineering Projects */}
        <ProjectsSection />

        {/* Interactive Competency Stack Pill Cloud */}
        <FloatingSkillStage />

        {/* Tabbed Certificates & Hackathon Accreditations */}
        <CertificatesSection />

        {/* Technical Architecture SLA Specs */}
        <div id="specs">
          <TechSpecs />
        </div>

        {/* Dedicated Resume & Academic Credentials */}
        <ResumeSection />

        {/* About Me & Academic Education Bento Grid */}
        <AboutSection />

        {/* Live Dispatch Terminal Contact Form */}
        <ContactSection />
      </main>

      {/* Massive Typographic Display Footer */}
      <Footer />
    </div>
  );
}
