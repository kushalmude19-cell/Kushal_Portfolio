import React, { useState } from 'react';
import { Cpu, Database, Network, Sparkles, CheckCircle2, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { architectureTiers } from '../data/specs';

export default function TechSpecs() {
  const [selectedTier, setSelectedTier] = useState('frontend');

  const getTierIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Network':
        return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />;
      default:
        return <Cpu className="w-5 h-5 text-sky-400" />;
    }
  };

  const currentTierData = architectureTiers.find((t) => t.id === selectedTier) || architectureTiers[0];

  return (
    <section id="specs" className="py-24 relative bg-[#0B0F17] scroll-mt-20">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs text-sky-400 font-semibold tracking-wider uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>HARDWARE & SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Enterprise Capability Matrix
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-xl">
              Audited performance SLAs across frontend rendering cores, distributed databases, high-concurrency event buses, and autonomous neural pipelines.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#111827]/70 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-left font-mono">
              <div className="text-[10px] text-gray-400 uppercase tracking-wider">Matrix Status</div>
              <div className="text-xs font-semibold text-emerald-400">All Nodes Green (Zero Bottlenecks)</div>
            </div>
          </div>
        </div>

        {/* 4 Architecture Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {architectureTiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <button
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative group active:scale-[0.98] ${
                  isSelected
                    ? 'bg-[#111827] border-sky-400/60 shadow-[0_0_30px_rgba(56,189,248,0.15)] ring-1 ring-sky-400/30'
                    : 'bg-[#111827]/50 border-white/8 hover:border-white/20 hover:bg-[#111827]/80'
                }`}
              >
                {/* Active indicator bar */}
                {isSelected && (
                  <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:scale-105 transition-transform">
                    {getTierIcon(tier.iconName)}
                  </div>
                  <span className="font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-400">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
                  {tier.category}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                  {tier.subtitle}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span
                    className={`font-mono text-[11px] font-semibold ${
                      tier.isExperimental
                        ? 'text-sky-400 animate-pulse'
                        : 'text-emerald-400'
                    }`}
                  >
                    {tier.status}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-gray-600'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Inspector Drawer for Selected Tier */}
        <div className="rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  {currentTierData.badge}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  Runtime Target: V8 Engine & Node.js Cluster
                </span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {currentTierData.category}
              </h3>
              <p className="text-gray-300 text-sm mt-1">
                {currentTierData.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 font-mono text-xs bg-black/40 px-4 py-3 rounded-xl border border-white/5">
              <Activity className="w-4 h-4 text-sky-400" />
              <div>
                <span className="text-gray-400">Telemetry SLA Benchmark: </span>
                <span className="text-emerald-400 font-bold">
                  {currentTierData.benchmark}
                </span>
              </div>
            </div>
          </div>

          {/* Skill / Capability Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTierData.skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/[0.02] border border-white/8 hover:border-sky-500/30 hover:bg-white/[0.04] transition-all duration-200 group flex items-start justify-between"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1 rounded-md bg-emerald-500/10 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-white group-hover:text-sky-300 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="font-mono text-xs text-gray-400 mt-1">
                      {skill.metric}
                    </p>
                  </div>
                </div>

                <span className="font-mono text-[11px] font-semibold text-gray-400 px-2 py-0.5 rounded bg-white/5 whitespace-nowrap ml-2">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>

          {/* Experimental Note if Tier 4 */}
          {currentTierData.isExperimental && (
            <div className="mt-6 p-4 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-sky-400 shrink-0" />
              <p className="text-xs sm:text-sm text-sky-200">
                <strong className="text-white">v3.0 R&D Notice:</strong> Machine Learning pipelines are constantly updated with latest transformer architectures, quantization experiments, and autonomous agent loops.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
