import React from 'react';
import { ExternalLink, Terminal, ChevronRight, Activity, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function ProjectCard({ project, index, onInspect }) {
  const projectNumber = `0${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="h-full"
    >
      <TiltCard
        maxTilt={8}
        glare={true}
        className="h-full rounded-3xl bg-zinc-950/80 border border-white/10 hover:border-cyan-400/50 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] backdrop-blur-xl flex flex-col justify-between overflow-hidden transition-all duration-300 group"
      >
        {/* Top ambient highlight line on hover */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="flex flex-col flex-1">
          {/* Project Header Bar */}
          <div className="p-5 pb-3 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                // PROJECT {projectNumber}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase">
                {project.category}
              </span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{project.status}</span>
            </div>
          </div>

          {/* Cover Image Preview */}
          {project.image && (
            <div
              onClick={() => onInspect?.(project)}
              className="w-full aspect-video sm:h-48 overflow-hidden relative cursor-pointer bg-zinc-900 border-b border-white/5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Hover overlay hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-950/90 border border-cyan-400/50 text-cyan-300 font-mono text-xs backdrop-blur-md shadow-xl">
                  <Terminal className="w-3.5 h-3.5" />
                  Inspect Architecture
                </span>
              </div>
            </div>
          )}

          {/* Card Body */}
          <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-[10px] text-zinc-500 px-2 py-0.5 rounded bg-white/[0.03] border border-white/5">
                  {project.version}
                </span>
              </div>

              <h3 
                onClick={() => onInspect?.(project)}
                className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2 cursor-pointer"
              >
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed mb-3">
                {project.tagline}
              </p>

              <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                {project.description}
              </p>
            </div>

            <div>
              {/* Performance Metric Box */}
              {project.metric && (
                <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-cyan-500/20 flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                    <Activity className="w-3.5 h-3.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                      {project.metric.label}
                    </div>
                    <div className="font-mono text-xs font-bold text-cyan-400 truncate">
                      {project.metric.value}
                    </div>
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/[0.03] text-zinc-300 border border-white/8 group-hover:border-cyan-400/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="p-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2 bg-white/[0.01]">
          <button
            onClick={() => onInspect?.(project)}
            className="flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-400 hover:text-cyan-300 transition-colors py-1 focus:outline-none"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Source code for ${project.title}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold font-mono transition-colors active:scale-95"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-sky-400 hover:from-cyan-400 hover:to-sky-300 text-zinc-950 text-xs font-bold font-mono transition-all active:scale-95 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
