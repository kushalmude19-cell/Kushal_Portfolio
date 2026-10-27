import React, { useState, useEffect } from 'react';
import { Mail, Clock, ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socials = [
    { label: 'GitHub', href: 'https://github.com/kushalmude19-cell', icon: GithubIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kushal-mude-a1363a350', icon: LinkedinIcon },
    { label: 'Email', href: 'mailto:kushalmude19@gmail.com', icon: Mail }
  ];

  return (
    <footer className="border-t border-white/5 bg-[#030508] relative z-10 pt-16 pb-36 md:pb-16 overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      
      {/* Ambient bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Info Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/5">
          {/* Status & Base */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8 text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Roles & Internships • 2026</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8 text-xs font-mono text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>SPPU, Pune, India</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/8 text-xs font-mono text-cyan-300">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{istTime || '11:30:00 PM'} IST</span>
            </div>
          </div>

          {/* Social Icons & Back to top */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white border border-white/8 hover:border-cyan-400/30 transition-all active:scale-95"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 transition-all active:scale-95 ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MASSIVE TYPOGRAPHIC DISPLAY WORDMARK (Matching Reference Video 00:15)     */}
        {/* ========================================================================= */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <h2 className="text-[18vw] sm:text-[17vw] lg:text-[16vw] font-black tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 via-white/10 to-transparent">
            KUSHAL
          </h2>
          <div className="text-[10px] sm:text-xs font-mono text-zinc-500 tracking-[0.25em] uppercase -mt-2 sm:-mt-4">
            Kushal Rupsing Mude • Software Engineer
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-[11px] font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Kushal Rupsing Mude. Sinhgad College of Engineering (SPPU).
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React 19 & Tailwind</span>
            <span>•</span>
            <span className="text-cyan-400">Cinematic Studio Edition</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
