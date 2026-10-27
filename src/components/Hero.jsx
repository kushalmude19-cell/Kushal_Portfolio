import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, ExternalLink, Mail, ArrowUpRight, Cpu, Layers, Terminal, Activity, CheckCircle2 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Hero() {
  const titles = [
    {
      main: 'CREATIVE',
      sub: 'DEVELOPER',
      category: 'SYSTEM ARCHITECTURE',
      badge: 'MERN • NEXT.JS • AI',
      headline: 'Architecting Scalable Web & Multimodal AI Platforms',
      desc: 'Building resilient full-stack systems, distributed cloud backends, and streaming generative AI pipelines with meticulous engineering craft.',
      metricLabel: 'Academic Rigor',
      metricVal: '9.55 CGPA • SPPU Pune',
      techHighlights: ['React 19', 'Next.js 15', 'Python', 'Tailwind']
    },
    {
      main: 'FULL STACK',
      sub: 'ENGINEER',
      category: 'PRODUCTION SERVICES',
      badge: 'ENTERPRISE ARCHITECTURE',
      headline: 'Tamper-Proof Digital Platforms & Cloud Verification',
      desc: 'Engineered Metrica for the Ministry of Consumer Affairs (DoCA PS 26036) — featuring GIS auditing, automated scheduling, and cryptographic verification.',
      metricLabel: 'GovTech Release',
      metricVal: '100% Audit Trust • DoCA',
      techHighlights: ['Prisma ORM', 'Supabase', 'Node.js', 'PostgreSQL']
    },
    {
      main: 'SCALABLE',
      sub: 'SYSTEMS',
      category: 'REALTIME & AI ENGINES',
      badge: 'GEMINI API & WEBSOCKETS',
      headline: 'Intelligent Reasoning & Sub-50ms Multiplayer Sync',
      desc: 'Orchestrating Google Gemini API integrations for contextual document intelligence, combined with low-latency WebSocket arena game loops.',
      metricLabel: 'State Protocol',
      metricVal: '< 50ms Latency Benchmark',
      techHighlights: ['Gemini API', 'Socket.io', 'MongoDB', 'C++']
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle smoothly every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-12 bg-[#05070B] overflow-hidden border-b border-white/5">
      {/* Background Studio Lighting & Subtle Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-gradient-to-b from-sky-500/10 via-white/[0.02] to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">

        {/* ========================================================================= */}
        {/* 1. LEFT COLUMN: Monospace Greeting + Massive Kinetic Typographic Title     */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          {/* Monospace Greeting Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 tracking-wider uppercase mb-5 sm:mb-7 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>HI, I'M KUSHAL RUPSING MUDE</span>
          </div>

          {/* Kinetic Changing Headline */}
          <div className="min-h-[110px] sm:min-h-[140px] lg:min-h-[170px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="select-none"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-none">
                  {titles[currentIndex].main}
                </h1>
                <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-zinc-300 via-zinc-400 to-zinc-500 leading-none mt-1 sm:mt-2">
                  {titles[currentIndex].sub}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Interactive Indicators */}
          <div className="hidden lg:flex flex-col gap-3 mt-12">
            <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-500 tracking-wider uppercase">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
              </motion.div>
              <span>Scroll To Scrub Timeline</span>
            </div>

            {/* Quick Micro Status Indicator */}
            <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Available for Roles & Internships • 2026</span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CENTER COLUMN: Studio-Lit Portrait with 3D Parallax Tilt                */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex items-center justify-center relative order-1 lg:order-2">
          {/* Radial Studio Spotlight Halo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[280px] sm:w-[360px] lg:w-[420px] h-[280px] sm:h-[360px] lg:h-[420px] rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-transparent blur-[80px]" />
          </div>

          {/* Portrait Container with 3D Parallax Tilt */}
          <TiltCard
            maxTilt={10}
            glare={true}
            className="w-[220px] sm:w-[280px] lg:w-[320px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-zinc-950/80 group"
          >
            {/* Top glass gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070B] via-transparent to-transparent opacity-80 z-10 pointer-events-none" />

            <img
              src="/profile.jpg"
              alt="Kushal Rupsing Mude"
              className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80';
              }}
            />

            {/* Bottom Floating Status Pill on Portrait */}
            <div className="absolute bottom-3 inset-x-3 z-20 flex items-center justify-between px-3 py-1.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Available for Roles
              </span>
              <span className="text-zinc-500">SPPU, Pune</span>
            </div>
          </TiltCard>
        </div>

        {/* ========================================================================= */}
        {/* 3. RIGHT COLUMN: Polished Glass HUD Telemetry Card & Dual Action CTAs      */}
        {/* ========================================================================= */}
        <div className="lg:col-span-4 flex flex-col items-center lg:items-start order-3 w-full">
          <TiltCard
            maxTilt={7}
            glare={true}
            className="w-full rounded-3xl bg-zinc-950/75 border border-white/10 p-6 sm:p-7 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] group hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
          >
            {/* Top Cyan Accent Line */}
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60" />

            {/* Card Header */}
            <div>
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-2 font-mono text-[11px] font-bold text-cyan-400 tracking-wider uppercase"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>// {titles[currentIndex].category}</span>
                  </motion.div>
                </AnimatePresence>

                <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/8 text-zinc-400">
                  {titles[currentIndex].badge}
                </span>
              </div>

              {/* Dynamic Headline */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug mb-2.5"
                >
                  {titles[currentIndex].headline}
                </motion.h3>
              </AnimatePresence>

              {/* Dynamic Synopsis Paragraph */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal mb-5"
                >
                  {titles[currentIndex].desc}
                </motion.p>
              </AnimatePresence>

              {/* Telemetry Metric Pill Row */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between mb-5"
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-mono text-[11px] text-zinc-400 uppercase">
                      {titles[currentIndex].metricLabel}:
                    </span>
                  </div>
                  <span className="font-mono text-xs font-bold text-cyan-300">
                    {titles[currentIndex].metricVal}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {titles[currentIndex].techHighlights.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono text-zinc-300 bg-white/[0.03] border border-white/8"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 pt-4 border-t border-white/5">
              <a
                href="#modules"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 text-xs font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-200 active:scale-95 group"
              >
                <span>See Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/30 text-white text-xs font-semibold backdrop-blur-md transition-all duration-200 active:scale-95"
              >
                <span>Contact Kushal</span>
              </a>
            </div>
          </TiltCard>

          {/* Mobile scrub timeline hint */}
          <div className="lg:hidden flex items-center gap-2 mt-6 font-mono text-[10px] text-zinc-500 uppercase tracking-wider">
            <ArrowDown className="w-3 h-3 text-cyan-400 animate-bounce" />
            <span>Scroll to Explore Architecture</span>
          </div>
        </div>

      </div>
    </section>
  );
}
