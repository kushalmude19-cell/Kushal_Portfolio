import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  MapPin, 
  Sparkles, 
  Award, 
  Terminal, 
  Cpu, 
  Layers, 
  Code2, 
  CheckCircle2, 
  ArrowUpRight,
  Landmark,
  School
} from 'lucide-react';
import TiltCard from './TiltCard';
import profilePhoto from '../assets/profile.jpg';

export default function AboutSection() {
  const educationList = [
    {
      degree: 'Bachelor of Engineering (B.E.) in Computer Engineering',
      institution: 'Sinhgad College of Engineering, Vadgaon (BK) — SPPU, Pune',
      metrics: 'CGPA: 9.55 (First Year) • 9.18 (Sem 3)',
      duration: '2024 – 2028',
      status: 'Currently Pursuing (3rd Year)',
      badge: 'SPPU Pune',
      icon: Landmark,
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      degree: 'Higher Secondary Education (12th HSC Science)',
      institution: 'Fergusson College — Pune, Maharashtra',
      metrics: 'Scored 90.33% with distinction',
      duration: '2022 – 2024',
      status: 'Completed',
      badge: 'HSC Science',
      icon: GraduationCap,
      accent: 'border-sky-500/30 text-sky-400 bg-sky-500/10'
    },
    {
      degree: 'Secondary School Certificate (10th SSC)',
      institution: 'Swa. Rambhau Kosalge Vidhyalaya — Mahagaon, Maharashtra',
      metrics: 'Scored 89.40% across foundational sciences',
      duration: 'Completed 2022',
      status: 'Completed',
      badge: 'SSC Board',
      icon: School,
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    }
  ];

  const highlights = [
    {
      icon: Layers,
      title: 'Full-Stack Architecture',
      desc: 'Scalable MERN & Next.js systems with SSR, robust REST/GraphQL APIs, and Prisma/Mongoose ORMs.'
    },
    {
      icon: Cpu,
      title: 'Multimodal AI & ML',
      desc: 'Real-time Google Gemini API pipelines, PyTorch neural models, and sub-50ms streaming token inference.'
    },
    {
      icon: Terminal,
      title: 'Core CS Rigor',
      desc: 'Solid mastery of Data Structures, Algorithms in C++, OOP, Database Internals, OS, and Networks.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#05070B] scroll-mt-16 border-t border-white/5 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300 tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>// 01 / THE TECH & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Kushal Mude</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
            Passionate software craftsman bridging modern reactive interfaces with low-latency backend systems and generative AI.
          </p>
        </div>

        {/* Bento Grid: 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-12">
          
          {/* ========================================================================= */}
          {/* Bento Card 1: Studio Profile & Academic Snapshot (5 cols on lg)           */}
          {/* ========================================================================= */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 h-full"
          >
            <TiltCard
              maxTilt={7}
              glare={true}
              className="h-full rounded-3xl bg-zinc-950/70 border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              {/* Top gradient glow line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

              <div>
                {/* Photo & Live Indicator */}
                <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-900 border border-white/10">
                  <img 
                    src={profilePhoto} 
                    alt="Kushal Rupsing Mude" 
                    className="w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                  
                  {/* Status Badges Overlay */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      OPEN TO ROLES • 2026
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                    <span className="flex items-center gap-1 text-zinc-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      Pune, Maharashtra
                    </span>
                    <span className="text-zinc-500">IST (UTC+5:30)</span>
                  </div>
                </div>

                {/* Bio summary */}
                <h3 className="text-xl font-bold text-white mb-2">
                  Kushal Rupsing Mude
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  Undergraduate in Computer Engineering at Sinhgad College of Engineering (SPPU). Obsessed with clean architectures, high-performance web tooling, and bridging generative AI into production web applications.
                </p>
              </div>

              {/* Academic Highlights 2x2 Grid */}
              <div className="grid grid-cols-2 gap-2.5 pt-4 border-t border-white/5">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">First Year SPPU</div>
                  <div className="text-base sm:text-lg font-black text-cyan-400">9.55 CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Sem 3 SPPU</div>
                  <div className="text-base sm:text-lg font-black text-sky-400">9.18 CGPA</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">12th HSC (Fergusson)</div>
                  <div className="text-base sm:text-lg font-black text-emerald-400">90.33%</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">10th SSC (Board)</div>
                  <div className="text-base sm:text-lg font-black text-white">89.40%</div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ========================================================================= */}
          {/* Bento Card 2: Engineering Philosophy & Technical Pillars (7 cols on lg)   */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Story Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl bg-zinc-950/70 border border-white/10 p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl group hover:border-cyan-500/30 transition-all duration-300 shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                  // ENGINEERING PHILOSOPHY
                </span>
                <span className="text-[11px] font-mono text-zinc-500">MERN • NEXT.JS • AI</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                Turning Complex Architectural Challenges into Resilient, Production-Ready Platforms
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                <p>
                  From architecting tamper-evident verification ledgers for GovTech (<strong className="text-cyan-300">Metrica</strong>) to building multi-agent AI interfaces (<strong className="text-sky-300">Antarctic AI</strong>) and zero-latency real-time code arenas (<strong className="text-white">Code Among Us</strong>), I focus on engineering systems that are secure, scalable, and delightful to interact with.
                </p>
                <p className="text-zinc-400">
                  I combine strong foundational CS fundamentals (algorithms, data structures, network protocols, memory management) with bleeding-edge modern tooling to ship fast, responsive, and robust digital products.
                </p>
              </div>
            </motion.div>

            {/* 3 Micro-Spec Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    className="p-5 rounded-2xl bg-zinc-950/60 border border-white/8 hover:border-cyan-400/30 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* ACADEMIC MILESTONES TIMELINE (Education cards in sleek dark bento style) */}
        {/* ========================================================================= */}
        <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5">
            <div>
              <span className="text-[11px] font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                // ACADEMIC TIMELINE & EXCELLENCE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Formal Education & Credentials
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Consistently 89%+ Throughout Academic Career</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {educationList.map((edu, idx) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-cyan-400/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${edu.accent}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-zinc-300">
                        {edu.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-zinc-400 mb-3">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5">
                    <div className="text-xs font-mono font-semibold text-cyan-400">
                      {edu.metrics}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 mt-1">
                      <span>{edu.duration}</span>
                      <span className="text-emerald-400">{edu.status}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
