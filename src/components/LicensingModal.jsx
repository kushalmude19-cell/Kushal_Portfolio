import React, { useState } from 'react';
import { Check, Mail, Send, X, Copy, CheckCircle2, Sparkles, Shield, Rocket } from 'lucide-react';
import { pricingTiers } from '../data/specs';

export default function LicensingModal({ isOpen, onClose, defaultTierId }) {
  const [selectedTier, setSelectedTier] = useState(defaultTierId || 'enterprise');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = 'kushalmude19@gmail.com';

  const currentTier = pricingTiers.find((t) => t.id === selectedTier) || pricingTiers[1];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2800);
  };

  return (
    <div>
      {/* SaaS Pricing Section on the page */}
      <section id="pricing" className="py-24 relative bg-[#0B0F17] scroll-mt-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase mb-3">
              <Rocket className="w-4 h-4 text-sky-400" />
              <span>DEPLOYMENT & LICENSING TIERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Transparent Deployment Plans
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Engineered like an enterprise SaaS agreement. Ready for immediate integration into your engineering sprint, full-time engineering org, or advisory board.
            </p>
          </div>

          {/* 3-Tier Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier) => {
              const isEnterprise = tier.highlighted;
              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 relative ${
                    isEnterprise
                      ? 'bg-[#111827] border-2 border-sky-400/80 shadow-[0_0_35px_rgba(56,189,248,0.2)] ring-1 ring-sky-400/30'
                      : 'bg-[#111827]/60 border border-white/8 hover:border-white/20'
                  }`}
                >
                  {isEnterprise && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 text-gray-950 text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    {!isEnterprise && (
                      <span className="inline-block font-mono text-[11px] font-semibold text-gray-400 px-2.5 py-0.5 rounded bg-white/5 mb-3">
                        {tier.badge}
                      </span>
                    )}

                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 mb-6 leading-relaxed">
                      {tier.tagline}
                    </p>

                    <div className="flex items-baseline gap-2 pb-6 mb-6 border-b border-white/10">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        {tier.price}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {tier.frequency}
                      </span>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-3 mb-8">
                      <div className="text-[11px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                        SLA Inclusions:
                      </div>
                      {tier.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedTier(tier.id);
                      if (onClose) onClose(); // reset
                      // trigger modal open
                      window.dispatchEvent(
                        new CustomEvent('open-licensing-modal', { detail: tier.id })
                      );
                    }}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 active:scale-95 ${
                      isEnterprise
                        ? 'bg-sky-400 hover:bg-sky-300 text-gray-950 shadow-[0_0_20px_rgba(56,189,248,0.3)]'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    {tier.ctaText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Deployment Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl bg-[#111827] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 relative max-h-[95vh] overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Deployment Request Logged!
                </h3>
                <p className="text-sm text-gray-300 max-w-sm mx-auto mb-6">
                  Thank you! Your dispatch token has been routed to Kushal's primary communication channel. Expect an SLA response within &lt;6 hours.
                </p>
                <div className="font-mono text-xs text-sky-400 bg-sky-500/10 py-2 px-4 rounded-lg inline-block border border-sky-500/20">
                  REF: SASC-DEPLOY-{Math.floor(100000 + Math.random() * 900000)}
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                    SLA DEPLOYMENT FORM
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-1">
                  Initiate Engineer Deployment
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 mb-6">
                  Selected Tier:{' '}
                  <span className="text-sky-300 font-semibold">{currentTier.name}</span>{' '}
                  ({currentTier.subject})
                </p>

                {/* Tier Selector Pills inside modal */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {pricingTiers.map((t) => (
                    <button
                      type="button"
                      key={t.id}
                      onClick={() => setSelectedTier(t.id)}
                      className={`py-2 px-2.5 rounded-lg text-xs font-mono transition-all text-center ${
                        selectedTier === t.id
                          ? 'bg-sky-500 text-gray-950 font-bold shadow-md'
                          : 'bg-white/5 text-gray-400 hover:text-white border border-white/5'
                      }`}
                    >
                      {t.name.replace(' Tier', '')}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Name / Org *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Sarah Connor / Cyberdyne AI"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="s.connor@cyberdyne.io"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Project Objective / Scope
                    </label>
                    <textarea
                      rows={3}
                      placeholder={`Tell me about your tech stack, goals, or role expectations for ${currentTier.name}...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#0B0F17] border border-white/10 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 justify-between">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-xs text-gray-400 hover:text-sky-300 flex items-center gap-1.5 py-1"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400 font-mono">Email Copied to Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="font-mono">Direct: {contactEmail}</span>
                        </>
                      )}
                    </button>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-sky-400 hover:bg-sky-300 text-gray-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Dispatch</span>
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
