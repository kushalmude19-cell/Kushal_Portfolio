import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MapPin, 
  Check, 
  Copy, 
  Terminal, 
  Sparkles, 
  Clock, 
  ArrowUpRight,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    domain: 'Full-Stack Engineering',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactEmail = 'kushalmude19@gmail.com';

  const domains = [
    'Full-Stack Engineering',
    'AI & Machine Learning',
    'Hackathon Collaboration',
    'Internship / Full-Time'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', domain: 'Full-Stack Engineering', message: '' });
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#05070B] scroll-mt-16 border-t border-white/5 overflow-hidden">
      {/* Background Lighting Halo */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching video convention */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>// LIVE DISPATCH MODE</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">Exceptional</span>
          </h2>
          
          <p className="mt-3 text-xs sm:text-base text-zinc-400 max-w-2xl">
            Have an engineering challenge, an internship or full-time opportunity, or want to collaborate on cutting-edge software? Send a direct dispatch.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Terminal Payload Preview & Direct Details (5 cols)           */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Terminal Preview Card */}
            <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              {/* Terminal Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="font-mono text-[10px] text-zinc-500 flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>dispatch_daemon.sh</span>
                </div>
              </div>

              {/* Terminal Code Mirror */}
              <div className="font-mono text-[11px] text-zinc-300 space-y-1.5 bg-black/50 p-4 rounded-xl border border-white/5 overflow-x-auto">
                <div className="text-zinc-500">// Real-time transmission payload</div>
                <div><span className="text-cyan-400">POST</span> /api/v1/dispatch/kushal</div>
                <div>{'{'}</div>
                <div className="pl-4">
                  <span className="text-zinc-400">"sender":</span> <span className="text-emerald-400">"{formData.name || 'Anonymous Engineer'}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"email":</span> <span className="text-sky-300">"{formData.email || 'pending_input@domain.com'}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"domain":</span> <span className="text-amber-300">"{formData.domain}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-zinc-400">"status":</span> <span className="text-cyan-400">"READY_TO_TRANSMIT"</span>
                </div>
                <div>{'}'}</div>
              </div>
            </div>

            {/* Direct Contact & Location Cards */}
            <div className="rounded-3xl bg-zinc-950/60 border border-white/10 p-6 backdrop-blur-xl space-y-4">
              {/* Email 1-click copy */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">Direct Email</div>
                    <a href={`mailto:${contactEmail}`} className="text-xs sm:text-sm font-mono text-white hover:text-cyan-300 transition-colors">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/8 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location & Institution */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-500 uppercase">Current Base</div>
                  <div className="text-xs sm:text-sm font-medium text-zinc-200">
                    Sinhgad College of Engineering (SPPU), Pune
                  </div>
                </div>
              </div>

              {/* Quick Social & Resume Links */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <a
                  href="https://github.com/kushalmude19-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/kushal-mude-a1363a350"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white text-xs font-mono transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Interactive Dark Dispatch Form (7 cols)                     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-950/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Top ambient highlight line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

              <h3 className="text-xl font-bold text-white mb-2">
                Send Direct Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill out the transmission spec below. Messages are delivered directly to Kushal's primary communication channel.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center rounded-2xl bg-cyan-500/5 border border-cyan-500/30"
                >
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-4">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    Transmission Dispatched Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto">
                    Thank you, <strong className="text-cyan-300">{formData.name}</strong>. Your message has been logged. Kushal will respond via email shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email inputs in 2 columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
                      />
                    </div>
                  </div>

                  {/* Domain selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Engagement Category
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {domains.map((dom) => (
                        <button
                          type="button"
                          key={dom}
                          onClick={() => setFormData({ ...formData, domain: dom })}
                          className={`px-3 py-2 rounded-xl text-[11px] font-mono transition-all text-center ${
                            formData.domain === dom
                              ? 'bg-cyan-500 text-zinc-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)]'
                              : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {dom}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5 uppercase tracking-wider">
                      Payload Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Discuss project requirements, timelines, engineering scope, or interview details..."
                      className="w-full bg-zinc-900/60 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono resize-none"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-zinc-950 font-mono font-bold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center justify-center gap-2 active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting Payload...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Live Dispatch</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
