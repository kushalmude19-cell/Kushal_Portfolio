import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  GraduationCap, 
  Code2, 
  Award, 
  CheckCircle2, 
  Eye, 
  Sparkles,
  Smartphone,
  Monitor,
  Maximize2
} from 'lucide-react';

export default function ResumeSection() {
  const [viewMode, setViewMode] = useState('ats'); // 'ats' | 'pdf'

  const technicalSkills = [
    {
      category: 'Languages',
      items: ['Python', 'C++', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
    },
    {
      category: 'Web & Full-Stack',
      items: ['React.js', 'Next.js (App Router)', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
    },
    {
      category: 'AI & Machine Learning',
      items: ['Google Gemini API', 'PyTorch', 'Scikit-learn']
    },
    {
      category: 'Developer Tools & Core',
      items: ['Git', 'GitHub', 'Supabase', 'OOP', 'DBMS', 'OS', 'Computer Networks']
    }
  ];

  const hackathons = [
    { name: 'Smart India Hackathon / DoCA Track (2026)', role: 'Team Kushal-Mangal • PS 26036' },
    { name: 'Velora Hackathon (2026)', role: 'Team Fourtified Minds • Code Among Us' },
    { name: 'AI for Bharat Hackathon (2026)', role: 'Team Bit Beast • Comic Forge' }
  ];

  return (
    <section id="resume" className="py-20 lg:py-24 relative bg-[#0A0D14] scroll-mt-20 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-cyan-400 font-semibold tracking-wider uppercase mb-2">
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>VERIFIED CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Resume & Academic Credentials
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              ATS-optimized single-page engineering resume covering degree coursework at SPPU, core technologies, and shipped hackathon architectures.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 text-xs font-semibold text-zinc-300 transition-all active:scale-95 group"
            >
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Open in New Tab</span>
            </a>

            <a
              href="/resume.pdf"
              download="Kushal_Rupsing_Mude_Resume.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-black text-xs font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all active:scale-95 group"
            >
              <Download className="w-4 h-4 text-black group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Grid: Quick Overview + Embedded Interactive PDF */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Snapshot Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/8 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Education & Academics</h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Savitribai Phule Pune University</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-zinc-200 font-semibold">
                    Bachelor of Engineering (B.E.) in Computer Engineering
                  </div>
                  <div className="text-zinc-400 text-[11px] mt-0.5">
                    Sinhgad College of Engineering, Vadgaon (BK), Pune
                  </div>
                  <div className="inline-flex items-center gap-2 mt-2 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/8 text-[11px] font-mono text-cyan-300">
                    <span>Currently in Third Year</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-400">First Year CGPA:</span>
                  <span className="text-cyan-400 font-bold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                    9.55
                  </span>
                </div>
                <div className="flex items-center justify-between font-mono text-[11px]">
                  <span className="text-zinc-400">Third Semester:</span>
                  <span className="text-sky-400 font-bold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    9.18
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Skills Snapshot */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/8 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Technical Skills Summary</h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Industry Core Competencies</p>
                </div>
              </div>

              <div className="space-y-3.5">
                {technicalSkills.map((group) => (
                  <div key={group.category}>
                    <div className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider mb-1.5">
                      {group.category}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/8 text-[11px] font-mono text-zinc-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hackathons Snapshot */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-white/8 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Hackathon & Team Track</h3>
                  <p className="text-[11px] text-zinc-400 font-mono">Collaborative Building</p>
                </div>
              </div>

              <div className="space-y-2 mt-2">
                {hackathons.map((h) => (
                  <div key={h.name} className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-zinc-200">{h.name}</span>
                    <span className="text-[11px] text-zinc-500 font-mono">{h.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Document & Direct Viewer (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/90 shadow-2xl overflow-hidden relative flex flex-col">
              
              {/* Top preview toolbar with view mode switcher */}
              <div className="px-4 py-3 bg-zinc-900/90 border-b border-white/8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-zinc-300 font-medium">resume.pdf</span>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center p-1 rounded-xl bg-zinc-950/80 border border-white/10 text-[11px] font-mono">
                  <button
                    onClick={() => setViewMode('ats')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                      viewMode === 'ats'
                        ? 'bg-cyan-500 text-black font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Interactive ATS</span>
                  </button>
                  <button
                    onClick={() => setViewMode('pdf')}
                    className={`hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-lg transition-all ${
                      viewMode === 'pdf'
                        ? 'bg-cyan-500 text-black font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Raw PDF</span>
                  </button>
                </div>

                {/* Quick Action Icons */}
                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                    title="Open full PDF in new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Kushal_Rupsing_Mude_Resume.pdf"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    title="Download PDF"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Document Container */}
              <div className="relative w-full h-[640px] sm:h-[720px] bg-zinc-950 overflow-y-auto p-3 sm:p-6 flex flex-col items-center">
                
                {viewMode === 'ats' ? (
                  /* ========================================================= */
                  /* INTERACTIVE ATS RESUME DOCUMENT SHEET (Mobile + Desktop)   */
                  /* ========================================================= */
                  <div className="w-full max-w-2xl bg-white text-slate-800 rounded-xl shadow-2xl p-5 sm:p-8 font-sans border border-slate-200 text-[11px] sm:text-xs leading-normal">
                    
                    {/* Header */}
                    <div className="text-center pb-3 border-b border-slate-200 mb-3">
                      <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                        KUSHAL RUPSING MUDE
                      </h1>
                      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-600 mt-1.5 text-[10px] sm:text-[11px]">
                        <span>Pune, Maharashtra</span>
                        <span>•</span>
                        <a href="mailto:kushalmude19@gmail.com" className="text-sky-600 hover:underline">
                          kushalmude19@gmail.com
                        </a>
                        <span>•</span>
                        <span>+91 7498362685</span>
                        <span>•</span>
                        <a href="https://www.linkedin.com/in/kushal-mude-a1363a350" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">
                          LinkedIn
                        </a>
                        <span>•</span>
                        <a href="https://github.com/kushalmude19-cell" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-semibold">
                          GitHub
                        </a>
                      </div>
                    </div>

                    {/* EDUCATION */}
                    <div className="mb-4">
                      <h2 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
                        EDUCATION
                      </h2>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                        <span className="font-bold text-slate-900">
                          Bachelor of Engineering (B.E.) in Computer Engineering
                        </span>
                        <span className="text-slate-600 text-[10px] sm:text-xs font-medium">
                          Currently in Third Year
                        </span>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-slate-600 mt-0.5">
                        <span>Sinhgad College of Engineering, Vadgaon (BK) — SPPU</span>
                        <span className="font-semibold text-sky-700">
                          CGPA: 9.55 (FE) | 9.18 (Sem 3)
                        </span>
                      </div>
                    </div>

                    {/* TECHNICAL SKILLS */}
                    <div className="mb-4">
                      <h2 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
                        TECHNICAL SKILLS
                      </h2>
                      <ul className="space-y-1 text-slate-700">
                        <li>
                          <strong className="text-slate-900">Languages:</strong> Python, C++, JavaScript (ES6+), SQL, HTML5, CSS3
                        </li>
                        <li>
                          <strong className="text-slate-900">Web & Full-Stack:</strong> React.js, Next.js (App Router), Node.js, Express.js, MongoDB, Tailwind CSS
                        </li>
                        <li>
                          <strong className="text-slate-900">AI & Machine Learning:</strong> Google Gemini API, PyTorch, Scikit-learn
                        </li>
                        <li>
                          <strong className="text-slate-900">Developer Tools & Core:</strong> Git, GitHub, Supabase, OOP, DBMS, OS, Computer Networks
                        </li>
                      </ul>
                    </div>

                    {/* PROJECTS */}
                    <div className="mb-4">
                      <h2 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
                        PROJECTS
                      </h2>
                      
                      {/* Project 1: Metrica */}
                      <div className="mb-3">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <span className="font-bold text-slate-900">
                            Metrica – Digital Instrument Trust & Verification Platform
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-semibold">
                            GovTech & Enterprise
                          </span>
                        </div>
                        <div className="text-[10px] text-sky-700 font-medium italic mb-1">
                          Next.js 15, React 19, TypeScript, Prisma ORM, Supabase / PostgreSQL, Leaflet GIS, Tailwind CSS, Zod
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                          <li>Engineered an automated lifecycle audit & verification system for Department of Consumer Affairs (DoCA, PS 26036).</li>
                          <li>Designed tamper-proof digital certificates, cryptographic QR auditing, and interactive GIS mapping.</li>
                          <li>Implemented secure role-based access control (RBAC) and robust PostgreSQL database schemas with Prisma ORM.</li>
                        </ul>
                      </div>

                      {/* Project 2: Antarctic AI */}
                      <div className="mb-3">
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <span className="font-bold text-slate-900">
                            Antarctic AI (POLARIS-X) – Multimodal Intelligence Assistant
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-semibold">
                            AI & Gemini API
                          </span>
                        </div>
                        <div className="text-[10px] text-sky-700 font-medium italic mb-1">
                          Google Gemini API, Python, React.js, Node.js, Express.js, MongoDB, Tailwind CSS
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                          <li>Built an intelligent multimodal reasoning assistant integrating Google Gemini API with custom data parsing pipelines.</li>
                          <li>Engineered streaming query architecture achieving low-latency first-token responses (&lt;80ms) across multi-turn sessions.</li>
                          <li>Developed high-performance backend microservices for contextual document query parsing and memory storage.</li>
                        </ul>
                      </div>

                      {/* Project 3: Code Among Us */}
                      <div>
                        <div className="flex flex-wrap items-baseline justify-between gap-1">
                          <span className="font-bold text-slate-900">
                            Code Among Us (CodeMongUs) – Multiplayer Real-Time Arena
                          </span>
                          <span className="text-[10px] font-mono px-1.5 py-0.5 bg-slate-100 rounded text-slate-700 font-semibold">
                            Multiplayer & Real-Time
                          </span>
                        </div>
                        <div className="text-[10px] text-sky-700 font-medium italic mb-1">
                          React.js, Node.js, Express.js, Socket.io, Monaco Code Editor, Tailwind CSS
                        </div>
                        <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                          <li>Created a real-time multiplayer coding platform inspired by Among Us, fusing social deduction with competitive coding.</li>
                          <li>Integrated Monaco Editor for in-browser syntax evaluation, live execution, and bi-directional real-time room sync via Socket.io.</li>
                          <li>Optimized event broadcasting to handle concurrent player actions with sub-50ms latency.</li>
                        </ul>
                      </div>
                    </div>

                    {/* HACKATHON EXPERIENCE & LEADERSHIP */}
                    <div className="mb-4">
                      <h2 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
                        HACKATHON EXPERIENCE & LEADERSHIP
                      </h2>
                      <div className="space-y-2 text-slate-700">
                        <div>
                          <div className="font-semibold text-slate-900">
                            Smart India Hackathon / DoCA Track (2026) <span className="font-normal text-slate-600">| Team: Kushal-Mangal</span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-slate-600 pl-1">
                            • Selected for Problem Statement 26036 (Department of Consumer Affairs); led full-stack system architecture and deployment for Metrica.
                          </p>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            Velora Hackathon (2026) <span className="font-normal text-slate-600">| Team: Fourtified Minds</span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-slate-600 pl-1">
                            • Developed 'Code Among Us'; architected game logic and real-time state synchronization under 24-hr constraints.
                          </p>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">
                            AI for Bharat Hackathon (2026) <span className="font-normal text-slate-600">| Team: Bit Beast</span>
                          </div>
                          <p className="text-[10px] sm:text-[11px] text-slate-600 pl-1">
                            • Built 'Comic Forge' — text-to-comic multimodal prototype generating visual storytelling scenes with AI models.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CERTIFICATIONS */}
                    <div>
                      <h2 className="text-[11px] sm:text-xs font-bold text-slate-900 uppercase tracking-wider pb-1 border-b border-slate-300 mb-2">
                        CERTIFICATIONS
                      </h2>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700 text-[10px] sm:text-[11px]">
                        <li>Certificate of Participation — Smart India Hackathon / DoCA Track</li>
                        <li>Certificate of Participation — Velora Hackathon (Team Fourtified Minds)</li>
                        <li>Certificate of Participation — AI for Bharat Hackathon (Team Bit Beast)</li>
                      </ul>
                    </div>

                  </div>
                ) : (
                  /* ========================================================= */
                  /* NATIVE PDF IFRAME (Desktop) WITH MOBILE SAFEGUARD         */
                  /* ========================================================= */
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    <iframe
                      src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                      title="Kushal Rupsing Mude Resume"
                      className="w-full h-full border-none rounded-lg hidden sm:block"
                    />

                    {/* Mobile fallback banner if someone toggles to PDF on a phone */}
                    <div className="sm:hidden flex flex-col items-center justify-center text-center p-6 bg-zinc-900 rounded-xl border border-white/10 max-w-sm">
                      <FileText className="w-12 h-12 text-cyan-400 mb-3" />
                      <h4 className="text-base font-bold text-white mb-1">Direct PDF Viewer</h4>
                      <p className="text-xs text-zinc-400 mb-4">
                        Mobile browsers require opening or downloading the PDF directly.
                      </p>
                      <div className="flex flex-col w-full gap-2">
                        <a
                          href="/resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 text-black font-bold text-xs flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Open PDF in Browser</span>
                        </a>
                        <button
                          onClick={() => setViewMode('ats')}
                          className="w-full py-2 px-4 rounded-xl bg-white/5 border border-white/10 text-zinc-300 text-xs font-semibold"
                        >
                          Switch to Interactive ATS View
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Quick-Bar inside Preview */}
              <div className="px-5 py-3.5 bg-zinc-900/90 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Mobile & ATS Single-Page Verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Kushal_Rupsing_Mude_Resume.pdf"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Click to Download (.PDF)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

