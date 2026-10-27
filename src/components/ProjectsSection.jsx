import React, { useState, useMemo, useEffect } from 'react';
import { Search, Layers, Terminal, X, ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects, PROJECT_CATEGORIES } from '../data/projects';
import ProjectCard from './ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All Modules');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectingProject, setInspectingProject] = useState(null);

  // Keyboard shortcut listener to go back / close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setInspectingProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter projects dynamically
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === 'All Modules' || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.tagline.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="modules" className="py-20 lg:py-28 relative bg-[#05070B] scroll-mt-16 border-t border-white/5 overflow-hidden">
      {/* Studio Radial Background Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header matching video convention */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>// PORTFOLIO WORK</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Featured Engineering Projects
            </h2>
            
            <p className="mt-3 text-xs sm:text-base text-zinc-400 max-w-2xl">
              Production platforms built with high-availability architectures, real-time protocols, and intelligent multimodal agents.
            </p>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>3 Production Releases Live</span>
          </div>
        </div>

        {/* Filter Controls: Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-zinc-950 font-bold shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/8 hover:border-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stack, keyword, title..."
              className="w-full bg-zinc-950/80 border border-white/10 rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onInspect={(proj) => setInspectingProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-3xl border border-white/5 bg-zinc-950/50 p-8">
            <Layers className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white mb-1">No Projects Found</h3>
            <p className="text-sm text-zinc-400 max-w-sm mx-auto mb-4">
              No deployed projects matched your filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All Modules');
                setSearchQuery('');
              }}
              className="px-4 py-2 text-xs font-mono font-semibold rounded-xl bg-white/10 hover:bg-white/15 text-white"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Architectural Inspection Modal */}
        <AnimatePresence>
          {inspectingProject && (
            <div
              onClick={() => setInspectingProject(null)}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-[#090D14] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setInspectingProject(null)}
                        className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer transition-colors"
                        title="Close window (Esc)"
                      />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="hidden sm:flex items-center gap-1.5 font-mono text-[11px] text-zinc-400 bg-black/50 px-2.5 py-1 rounded-md border border-white/5">
                      <Terminal className="w-3 h-3 text-cyan-400" />
                      <span>kushal@portfolio: ~/projects/{inspectingProject.id}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setInspectingProject(null)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-mono font-semibold transition-all group"
                      title="Go back (Esc)"
                    >
                      <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                      <span>Back (Esc)</span>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {inspectingProject.version}
                  </span>
                  <span className="font-mono text-xs text-zinc-400">
                    {inspectingProject.category}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">
                  {inspectingProject.title}
                </h3>
                <p className="text-sm text-zinc-300 font-medium mb-6">
                  {inspectingProject.tagline}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-2">
                    System Architecture Synopsis
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed bg-black/40 p-4 rounded-2xl border border-white/5">
                    {inspectingProject.description}
                  </p>
                </div>

                {/* Telemetry specs */}
                {inspectingProject.architectureSpecs && (
                  <div className="mb-6">
                    <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-3">
                      Engineered Telemetry Specs
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {inspectingProject.architectureSpecs.map((spec, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white/[0.02] border border-white/8 flex items-center justify-between font-mono text-xs"
                        >
                          <span className="text-zinc-400">{spec.key}:</span>
                          <span className="text-cyan-400 font-semibold">{spec.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2.5">
                    Component Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {inspectingProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-zinc-200 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-white/10">
                  <button
                    onClick={() => setInspectingProject(null)}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Back to Projects</span>
                  </button>
                  <div className="flex items-center gap-3 justify-end">
                    {inspectingProject.githubUrl && (
                      <a
                        href={inspectingProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                    {inspectingProject.demoUrl && (
                      <a
                        href={inspectingProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-zinc-950 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
