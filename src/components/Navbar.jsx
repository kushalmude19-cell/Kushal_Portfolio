import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, FolderGit2, Cpu, Award, FileText, User, Send, Download } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home', icon: Home, shortLabel: 'Home' },
    { label: 'Projects', href: '#modules', id: 'modules', icon: FolderGit2, shortLabel: 'Projects' },
    { label: 'Skills', href: '#skills', id: 'skills', icon: Cpu, shortLabel: 'Skills' },
    { label: 'Certificates', href: '#certificates', id: 'certificates', icon: Award, shortLabel: 'Certs' },
    { label: 'Resume', href: '#resume', id: 'resume', icon: FileText, shortLabel: 'Resume' },
    { label: 'About Me', href: '#about', id: 'about', icon: User, shortLabel: 'About' },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Send, shortLabel: 'Contact' },
  ];

  // Scrollspy: Automatically track which section is currently active in viewport
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. If user scrolled near bottom, activate Contact
      if (windowHeight + scrollY >= documentHeight - 140) {
        setActiveTab('Contact');
        return;
      }

      // 2. Scan sections from bottom to top
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Threshold of 220px accounts for sticky navbar + comfortable reading area
          if (rect.top <= 220) {
            setActiveTab(link.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setActiveTab(link.label);
    const element = document.getElementById(link.id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. TOP STICKY HEADER (Desktop & Mobile)                                   */}
      {/* ========================================================================= */}
      <header className="sticky top-0 left-0 right-0 z-40 bg-[#0A0D14]/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, navLinks[0])}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-base sm:text-lg group-hover:scale-105 group-hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
              KM
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm sm:text-base font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                  Kushal Mude
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available
                </span>
              </div>
              <span className="text-[11px] text-zinc-400 font-medium">
                MERN • AI • Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeTab === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                    isActive
                      ? 'text-cyan-400 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:text-cyan-300'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.9)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Top Quick Action: 1-Tap Resume Download */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Kushal_Rupsing_Mude_Resume.pdf"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-[0_0_12px_rgba(6,182,212,0.2)] active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MOBILE DYNAMIC ISLAND / FLOATING BOTTOM DOCK                           */}
      {/* Optimized for 1-handed thumb reach zone on smartphones                     */}
      {/* ========================================================================= */}
      <nav
        aria-label="Mobile Navigation"
        className="md:hidden fixed bottom-4 inset-x-0 mx-auto z-50 w-[95%] max-w-[420px] pointer-events-auto"
      >
        <div className="relative p-1.5 rounded-full bg-zinc-950/85 backdrop-blur-2xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(6,182,212,0.18)] flex items-center justify-between">
          {navLinks.map((link) => {
            const isActive = activeTab === link.label;
            const Icon = link.icon;

            return (
              <motion.button
                key={link.label}
                onClick={(e) => handleNavClick(e, link)}
                whileTap={{ scale: 0.85 }}
                className="relative flex flex-col items-center justify-center py-2 px-2.5 rounded-full transition-colors flex-1"
                aria-label={link.label}
              >
                {/* Active Glowing Pill Background */}
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveDockPill"
                    className="absolute inset-0 bg-gradient-to-b from-cyan-500/25 to-cyan-500/10 border border-cyan-400/40 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.35)]"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                )}

                {/* Icon */}
                <Icon
                  className={`w-4 h-4 relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-cyan-300 scale-110' : 'text-zinc-400'
                  }`}
                />

                {/* Tiny Micro-Label on Active */}
                <span
                  className={`text-[9px] font-mono mt-0.5 relative z-10 tracking-tight transition-all duration-200 truncate max-w-[42px] ${
                    isActive ? 'text-cyan-300 font-bold scale-100' : 'text-zinc-500 font-normal scale-95'
                  }`}
                >
                  {link.shortLabel}
                </span>

                {/* Active Dot */}
                {isActive && (
                  <motion.span
                    layoutId="mobileActiveDockDot"
                    className="absolute -bottom-0.5 w-1 h-1 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,1)]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </nav>
    </>
  );
}
