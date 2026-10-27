import React, { useState, useEffect } from 'react';
import { ArrowRight, Terminal, Clock, Activity, ShieldCheck, Zap, Sparkles, Cpu, Database, Network, ChevronRight, Copy, Check, ExternalLink } from 'lucide-react';
import BentoCard from './BentoCard';
import ProfileAvatar from './ProfileAvatar';
import { personalProfile, systemMetrics, architectureTiers } from '../data/specs';
import { GithubIcon } from './Icons';

export default function BentoGrid({ onOpenLicensing }) {
  const [istTime, setIstTime] = useState('');
  const [livePing, setLivePing] = useState(36);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [activeStackTab, setActiveStackTab] = useState('Frontend');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    const pingTimer = setInterval(() => {
      setLivePing(Math.floor(32 + Math.random() * 8));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(pingTimer);
    };
  }, []);

  const curlCommand = 'curl -s https://kushalmude.dev/specs | jq .';
  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const stackCategories = [
    {
      name: 'Frontend',
      icon: Cpu,
      color: 'sky',
      tags: ['React 19', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Modern UI'],
      highlight: 'Component Lifecycle & Responsive State',
    },
    {
      name: 'Backend',
      icon: Network,
      color: 'indigo',
      tags: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'Socket.io', 'JWT Auth'],
      highlight: 'Sub-40ms Event Loop & High Concurrency',
    },
    {
      name: 'Databases',
      icon: Database,
      color: 'emerald',
      tags: ['MongoDB Atlas', 'MySQL', 'Mongoose', 'Git / GitHub', 'Schema Modeling'],
      highlight: 'Indexed Queries & ACID / NoSQL Hybrid',
    },
    {
      name: 'AI & Systems',
      icon: Sparkles,
      color: 'amber',
      tags: ['Google Gemini API', 'Claude Code', 'PyTorch (DL)', 'C', 'C++', 'Java'],
      highlight: '[ IN ACTIVE TRAINING / COMPILATION ]',
    },
  ];

  return (
    <div id="overview" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
      {/* 4-column Bento Grid on Desktop, 3-column on Tablet, 1-column on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* ========================================================================= */}
        {/* TILE 1: HERO BANNER (Spanning 2 cols)                                      */}
        {/* ========================================================================= */}
        <BentoCard className="md:col-span-2 lg:col-span-2 min-h-[350px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-left">
              {/* Glowing Green 'Available for Hire' badge */}
              <div className="flex items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-mono text-[11px] font-bold text-emerald-400 tracking-wider uppercase">
                    Available for SDE Intern & Dev Roles
                  </span>
                </div>
              </div>

              {/* Real Full Name & Target Role */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight mb-2">
                Kushal Rupsing Mude
              </h1>
              <p className="font-mono text-xs sm:text-sm text-sky-400 font-semibold mb-3">
                Full-Stack MERN Developer • Pursuing ML & Deep Learning
              </p>

              {/* Tagline / Subtitle */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 max-w-md">
                Crafting robust web architectures with <span className="text-zinc-200 font-medium">React, Node, Express, MongoDB</span> while engineering next-gen AI pipelines using <span className="text-sky-300 font-medium">Google Gemini API</span> and deep learning models.
              </p>
            </div>

            {/* Profile Avatar with Rotating Glowing Ring */}
            <div className="shrink-0">
              <ProfileAvatar name="Kushal Mude" />
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
            <button
              onClick={() => onOpenLicensing?.()}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-400 hover:bg-sky-300 text-zinc-950 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all active:scale-95 group"
            >
              <span>Deploy Kushal to Team</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#modules"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all active:scale-95"
            >
              <span>Explore Projects</span>
            </a>
          </div>
        </BentoCard>

        {/* ========================================================================= */}
        {/* TILE 2: TELEMETRY / TIMEZONE TILE (Spanning 1 col)                         */}
        {/* ========================================================================= */}
        <BentoCard className="col-span-1 min-h-[350px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                Base Station
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-4">
              <div className="font-mono text-2xl font-bold text-white tracking-tight">
                {istTime || '09:30:00 AM'}
              </div>
              <div className="text-xs font-mono text-emerald-400 mt-1 flex items-center gap-1.5">
                <span>SPPU, Pune, IN</span>
                <span>•</span>
                <span className="text-zinc-500">IST (UTC+5:30)</span>
              </div>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  Latency
                </span>
                <span className="text-emerald-400 font-bold">&lt;{livePing}ms P99</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                  Affiliation
                </span>
                <span className="text-sky-300 font-bold">SPPU Student</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 text-[11px] text-zinc-500 font-mono">
            Savitribai Phule Pune University
          </div>
        </BentoCard>

        {/* ========================================================================= */}
        {/* TILE 3: TERMINAL TELEMETRY / DIRECT DISPATCH TILE (Spanning 1 col)         */}
        {/* ========================================================================= */}
        <BentoCard className="col-span-1 min-h-[350px]">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                API Telemetry
              </span>
              <span className="text-[10px] font-mono text-zinc-500">specs.json</span>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-white/5 mb-3 font-mono text-[11px] leading-relaxed">
              <div className="text-zinc-500">// Machine-readable candidate specs</div>
              <div className="text-sky-400 select-all break-all py-1">
                {curlCommand}
              </div>
              <button
                onClick={handleCopyCurl}
                className="mt-2 flex items-center gap-1.5 text-zinc-400 hover:text-white text-[10px] transition-colors"
              >
                {copiedCurl ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied to clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy cURL command</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-zinc-400">Email:</span>
                <span className="text-zinc-200 font-mono text-[11px] truncate max-w-[130px]" title="kushalmude19@gmail.com">
                  kushalmude19@gmail.com
                </span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span className="text-zinc-400">Target Role:</span>
                <span className="text-emerald-400 font-semibold font-mono text-[11px]">Web Dev & ML</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">GitHub:</span>
                <a
                  href="https://github.com/kushalmude19-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-300 font-mono text-[11px] hover:underline"
                >
                  kushalmude19-cell
                </a>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between">
            <span className="font-mono text-[10px] text-zinc-500">Status: Active</span>
            <span className="font-mono text-[10px] text-emerald-400">● Open for Roles</span>
          </div>
        </BentoCard>

        {/* ========================================================================= */}
        {/* TILE 4: TECH STACK GRID (Spanning 2 cols)                                  */}
        {/* ========================================================================= */}
        <BentoCard id="tech-stack" className="md:col-span-2 lg:col-span-2 min-h-[300px]">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <span className="font-mono text-[10px] uppercase font-bold text-sky-400 tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  KUSHAL'S CORE TECH STACK
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  Engineered Skills Matrix
                </h3>
              </div>

              {/* Category tabs */}
              <div className="flex items-center gap-1 bg-black/40 p-1 rounded-xl border border-white/5 overflow-x-auto">
                {stackCategories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveStackTab(cat.name)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono font-medium whitespace-nowrap transition-all ${
                      activeStackTab === cat.name
                        ? 'bg-sky-500 text-zinc-950 font-bold'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected category content */}
            {(() => {
              const current = stackCategories.find((c) => c.name === activeStackTab) || stackCategories[0];
              const Icon = current.icon;
              return (
                <div className="p-4 rounded-xl bg-black/30 border border-white/5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-400">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white">
                        {current.name} Competency
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      {current.highlight}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/8 hover:border-sky-500/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
            <span>Verified: Languages (C, C++, Java, Python, JS) + MERN</span>
            <a href="#skills" className="text-sky-400 hover:text-sky-300 font-mono text-[11px] flex items-center gap-1">
              <span>Explore Interactive Orbit Stage</span>
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </BentoCard>

        {/* ========================================================================= */}
        {/* TILE 5: SDE REPO & CODE METRICS TILE (Spanning 2 cols)                     */}
        {/* ========================================================================= */}
        <BentoCard className="md:col-span-1 lg:col-span-2 min-h-[300px]">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[10px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                Featured Shipped Projects
              </span>
              <span className="font-mono text-[10px] text-sky-400">POLARIS-X & CodeMongUs</span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
              Antarctic AI & Code Among Us
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Combining real-time WebSockets collaborative gaming with multimodal Google Gemini API reasoning engines.
            </p>

            {/* Mini velocity blocks */}
            <div className="grid grid-cols-3 gap-2 text-center mb-4">
              <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                <div className="font-mono text-base font-bold text-sky-400">Gemini AI</div>
                <div className="text-[10px] text-zinc-400">Multimodal Agent</div>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                <div className="font-mono text-base font-bold text-emerald-400">Socket.io</div>
                <div className="text-[10px] text-zinc-400">Realtime Arena</div>
              </div>
              <div className="p-3 rounded-xl bg-black/30 border border-white/5">
                <div className="font-mono text-base font-bold text-amber-400">MERN Stack</div>
                <div className="text-[10px] text-zinc-400">MongoDB + Express</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <span className="text-zinc-500 font-mono text-[11px]">SPPU Pune • Active Student</span>
            <a
              href="https://github.com/kushalmude19-cell"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-mono text-[11px]"
            >
              <span>GitHub: @kushalmude19-cell</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </BentoCard>

      </div>
    </div>
  );
}
