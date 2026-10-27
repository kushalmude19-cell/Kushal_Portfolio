import React, { useState } from 'react';
import { FileText, Download, ExternalLink, GraduationCap, Code2, Award, Briefcase, CheckCircle2, Eye, Sparkles } from 'lucide-react';

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState('overview');

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
    <section id="resume" className="py-24 relative bg-[#0A0D14] scroll-mt-20 border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
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

          {/* Right Column: Embedded Interactive PDF (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="rounded-2xl border border-white/10 bg-zinc-950/80 shadow-2xl overflow-hidden relative group">
              {/* Top preview toolbar */}
              <div className="px-4 py-3 bg-zinc-900/90 border-b border-white/8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-xs text-zinc-400">resume.pdf (Single Page ATS Format)</span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                    title="Open full view"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download="Kushal_Rupsing_Mude_Resume.pdf"
                    className="p-1.5 text-zinc-400 hover:text-cyan-400 transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Embedded Frame */}
              <div className="relative w-full h-[680px] bg-zinc-900 flex flex-col items-center justify-center">
                <iframe
                  src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
                  title="Kushal Rupsing Mude Resume"
                  className="w-full h-full border-none"
                />

                {/* Fallback overlay if browser blocks embedded PDF on mobile */}
                <noscript>
                  <div className="p-6 text-center">
                    <p className="text-zinc-400 text-sm mb-4">Your browser does not support embedded PDF viewing.</p>
                    <a
                      href="/resume.pdf"
                      download
                      className="px-4 py-2 bg-cyan-500 text-black text-xs font-bold rounded-lg"
                    >
                      Download PDF
                    </a>
                  </div>
                </noscript>
              </div>

              {/* Bottom Quick-Bar inside Preview */}
              <div className="px-5 py-3.5 bg-zinc-900/90 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Single-Page Verified • Top ATS Compliance</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/resume.pdf"
                    download="Kushal_Rupsing_Mude_Resume.pdf"
                    className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
                  >
                    Click to Download (.PDF)
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
