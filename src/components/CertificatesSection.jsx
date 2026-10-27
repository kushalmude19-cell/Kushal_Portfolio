import React, { useState, useMemo, useEffect } from 'react';
import { Award, ExternalLink, X, ShieldCheck, PlusCircle, Check, Copy, ArrowLeft, FileText, Download, CheckCircle2 } from 'lucide-react';
import { certificates, CERTIFICATE_CATEGORIES, CERTIFICATE_TEMPLATE } from '../data/certificates';
import BentoCard from './BentoCard';

export default function CertificatesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCert, setSelectedCert] = useState(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  // Keyboard shortcut listener to go back / close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
        setShowTemplateModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCerts = useMemo(() => {
    if (activeCategory === 'all') return certificates;
    return certificates.filter((c) => c.category === activeCategory);
  }, [activeCategory]);

  const copyCertTemplate = () => {
    const templateString = `// Plug into src/data/certificates.js:\n{\n  id: '${CERTIFICATE_TEMPLATE.id}',\n  title: '${CERTIFICATE_TEMPLATE.title}',\n  issuer: '${CERTIFICATE_TEMPLATE.issuer}',\n  category: '${CERTIFICATE_TEMPLATE.category}',\n  date: '${CERTIFICATE_TEMPLATE.date}',\n  credentialId: '${CERTIFICATE_TEMPLATE.credentialId}',\n  description: '${CERTIFICATE_TEMPLATE.description}',\n  image: '${CERTIFICATE_TEMPLATE.image}'\n},`;
    navigator.clipboard.writeText(templateString);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <section id="certificates" className="py-20 relative bg-[#0A0D14] scroll-mt-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase mb-2">
              <Award className="w-4 h-4 text-sky-400" />
              <span>VERIFIED ACCREDITATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Certifications & Hackathons
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-1.5 max-w-xl">
              Authentic credentials and hackathon participation validating algorithmic problem-solving, collaborative execution, and technical leadership.
            </p>
          </div>

          {/* Action: Add custom credential */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowTemplateModal(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-sky-500/40 text-xs font-semibold text-zinc-300 transition-all active:scale-95 group"
            >
              <PlusCircle className="w-4 h-4 text-sky-400 group-hover:rotate-90 transition-transform duration-300" />
              <span>Plug In Certificate</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5'
            }`}
          >
            All Accreditations ({certificates.length})
          </button>
          {CERTIFICATE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                  : 'bg-zinc-900/60 text-zinc-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <BentoCard key={cert.id} className="flex flex-col justify-between overflow-hidden">
              <div>
                {/* Image Preview with Hover Reveal */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="w-full h-48 rounded-xl overflow-hidden mb-4 relative cursor-pointer group/img border border-white/10 bg-black/60 shadow-inner"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-contain p-2 group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-between p-3">
                    <span className="font-mono text-[10px] uppercase font-bold text-sky-300 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-sky-400/20 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span>Verified Document</span>
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-sky-500 text-zinc-950 text-[10px] font-mono font-bold shadow-md opacity-0 group-hover/img:opacity-100 transition-opacity duration-200">
                      View Certificate →
                    </span>
                  </div>
                </div>

                {/* Issuer Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="font-mono text-[11px] text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20 truncate">
                    {cert.issuer}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 shrink-0">
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Partner / Association */}
                {cert.partner && (
                  <p className="text-[11px] font-mono text-zinc-400 mb-2.5 flex items-center gap-1">
                    <span className="text-emerald-400">●</span> {cert.partner}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-zinc-500 truncate">
                  ID: {cert.credentialId}
                </span>
                <div className="flex items-center gap-2 shrink-0">
                  {cert.pdfUrl && (
                    <a
                      href={cert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-mono font-semibold transition-colors"
                      title="Open Verified PDF"
                    >
                      <FileText className="w-3.5 h-3.5 text-sky-400" />
                      <span>PDF</span>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white border border-sky-500/30 text-xs font-mono font-semibold transition-all active:scale-95"
                  >
                    <span>Inspect</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </BentoCard>
          ))}
        </div>

        {/* Laptop / Window Full Inspection Lightbox Modal */}
        {selectedCert && (
          <div
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl bg-[#0F1420] border border-white/15 rounded-2xl shadow-2xl p-5 sm:p-7 relative max-h-[92vh] overflow-y-auto"
            >
              {/* Laptop Window Titlebar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                {/* Left: Window Traffic Dots & Terminal path */}
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedCert(null)}
                      className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-colors"
                      title="Close window (Esc)"
                    />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-gray-400 bg-black/40 px-2.5 py-1 rounded-md border border-white/5">
                    <Award className="w-3 h-3 text-sky-400" />
                    <span>kushal@portfolio: ~/certificates/{selectedCert.id}</span>
                  </div>
                </div>

                {/* Right: Laptop-style Back & Close Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white border border-sky-500/30 hover:border-sky-500/50 text-xs font-semibold transition-all duration-200 group active:scale-95 shadow-[0_0_12px_rgba(56,189,248,0.15)]"
                    title="Go back to certificates (Esc)"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-x-0.5 transition-transform" />
                    <span>Back</span>
                    <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[9px] font-mono font-bold text-sky-300 bg-sky-950/60 rounded border border-sky-500/30">
                      ESC
                    </kbd>
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-white/10 hover:border-red-500/30 transition-colors"
                    aria-label="Close modal"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* High-Resolution Certificate Document View */}
              <div className="w-full rounded-xl overflow-hidden bg-black/60 border border-white/10 mb-5 flex items-center justify-center p-2 relative group">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-h-[50vh] w-auto object-contain rounded-lg shadow-2xl"
                />
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-mono border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                  <span>Full-Screen Image</span>
                </a>
              </div>

              {/* Certificate Information Breakdown */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    {selectedCert.issuer}
                  </span>
                  {selectedCert.partner && (
                    <span className="font-mono text-xs text-zinc-300 px-2.5 py-1 rounded-md bg-white/5 border border-white/10">
                      {selectedCert.partner}
                    </span>
                  )}
                  <span className="font-mono text-xs text-zinc-400">
                    Year: {selectedCert.date}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">
                    {selectedCert.title}
                  </h3>
                  {selectedCert.recipient && (
                    <p className="text-xs sm:text-sm font-medium text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Presented to: <strong>{selectedCert.recipient}</strong> • {selectedCert.institution}</span>
                    </p>
                  )}
                </div>

                <div className="bg-black/30 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-1.5">
                    Official Credential Synopsis
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                {/* Signatories & Institutional Details */}
                {selectedCert.signatories && (
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/8">
                    <h5 className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Verified Signatories & Endorsements:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                      {selectedCert.signatories.map((sig, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="text-sky-400">✓</span>
                          <span>{sig}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 mt-6 border-t border-white/10">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors active:scale-95"
                >
                  <ArrowLeft className="w-3.5 h-3.5 text-sky-400" />
                  <span>Back to Certificates</span>
                </button>
                <div className="flex items-center gap-3 justify-end">
                  {selectedCert.pdfUrl && (
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-sky-500 hover:bg-sky-400 text-zinc-950 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all active:scale-95"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Open Verified PDF Document</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plug In Certificate Modal */}
        {showTemplateModal && (
          <div
            onClick={() => setShowTemplateModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl bg-[#0F1420] border border-white/15 rounded-2xl shadow-2xl p-6 relative"
            >
              {/* Laptop Window Titlebar */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={() => setShowTemplateModal(false)} />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <button
                  onClick={() => setShowTemplateModal(false)}
                  className="flex items-center gap-1 text-xs text-sky-400 font-semibold hover:text-sky-300"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back (Esc)</span>
                </button>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Plug In Your Certificate
              </h3>
              <p className="text-xs text-zinc-400 mb-4">
                Open <code className="text-sky-300 font-mono">src/data/certificates.js</code> and paste the block below into the <code className="text-emerald-400 font-mono">certificates</code> array.
              </p>

              <pre className="p-4 rounded-xl bg-black border border-white/10 text-[11px] font-mono text-zinc-300 overflow-x-auto mb-4">
{`{
  id: 'your-credential-id',
  title: 'Your Certificate or Hackathon Win',
  issuer: 'Issuing Org / Hackathon Name',
  category: 'hackathons', // 'hackathons' | 'volunteering'
  date: '2026',
  credentialId: 'CERT-001',
  description: 'Highlight of what you achieved or built.',
  image: '/certificates/your-cert.png',
  pdfUrl: '/certificates/your-cert.pdf'
}`}
              </pre>

              <div className="flex items-center justify-between">
                <button
                  onClick={copyCertTemplate}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition-all"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowTemplateModal(false)}
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-semibold text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
