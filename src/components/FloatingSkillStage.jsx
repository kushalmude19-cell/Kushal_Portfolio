import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  Database, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  BrainCircuit,
  Wrench,
  Globe
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    id: 'all',
    label: 'All Technologies'
  },
  {
    id: 'languages',
    label: 'Languages',
    icon: Code2
  },
  {
    id: 'web',
    label: 'Web & Full-Stack',
    icon: Globe
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    icon: BrainCircuit
  },
  {
    id: 'tools',
    label: 'Tools & Core CS',
    icon: Wrench
  }
];

const SKILLS = [
  // Languages
  { name: 'Python', category: 'languages', tag: 'Core & AI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'C++', category: 'languages', tag: 'Systems & DSA', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'JavaScript (ES6+)', category: 'languages', tag: 'Frontend & Node', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'SQL', category: 'languages', tag: 'Relational DB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'HTML5', category: 'languages', tag: 'Semantic Web', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', category: 'languages', tag: 'Styling Engine', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },

  // Web & Full-Stack
  { name: 'React.js', category: 'web', tag: 'Components & Hooks', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js (App Router)', category: 'web', tag: 'Full-Stack SSR', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', category: 'web', tag: 'Async Runtime', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', category: 'web', tag: 'RESTful APIs', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'MongoDB', category: 'web', tag: 'NoSQL Document Store', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind CSS', category: 'web', tag: 'Utility Architecture', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },

  // AI & ML
  { name: 'Google Gemini API', category: 'ai', tag: 'Multimodal LLM', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg' },
  { name: 'PyTorch', category: 'ai', tag: 'Deep Learning', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
  { name: 'Scikit-learn', category: 'ai', tag: 'Machine Learning', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },

  // Developer Tools & Core CS
  { name: 'Git', category: 'tools', tag: 'Version Control', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', category: 'tools', tag: 'CI/CD & Collaboration', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
  { name: 'Supabase', category: 'tools', tag: 'Auth & PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'OOP', category: 'tools', tag: 'Design Patterns', icon: Layers },
  { name: 'DBMS', category: 'tools', tag: 'ACID & Indexing', icon: Database },
  { name: 'Operating Systems', category: 'tools', tag: 'Processes & Memory', icon: Terminal },
  { name: 'Computer Networks', category: 'tools', tag: 'TCP/IP & WebSockets', icon: Cpu }
];

const DETAILED_SPECS = [
  {
    title: 'Languages',
    badge: 'Core Syntax',
    desc: 'Performant computation and algorithmic rigor',
    skills: ['Python', 'C++', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Web & Full-Stack',
    badge: 'MERN & Beyond',
    desc: 'High-availability frontend and scalable backends',
    skills: ['React.js', 'Next.js (App Router)', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS']
  },
  {
    title: 'AI & Machine Learning',
    badge: 'Neural Systems',
    desc: 'Predictive modeling, deep learning and generative AI',
    skills: ['Google Gemini API', 'PyTorch', 'Scikit-learn']
  },
  {
    title: 'Developer Tools & Core CS',
    badge: 'Infrastructure & Theory',
    desc: 'Foundational computer engineering knowledge',
    skills: ['Git', 'GitHub', 'Supabase', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks']
  }
];

export default function FloatingSkillStage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-[#05070B] scroll-mt-16 border-t border-white/5 overflow-hidden">
      {/* Studio Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching video convention */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-cyan-400 tracking-wider uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>// TECHNICAL STACK</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Technologies I Work With
          </h2>

          <p className="mt-3 text-xs sm:text-base text-zinc-400">
            Full-stack expertise across modern reactive web development, artificial intelligence, and core computer systems.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-zinc-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/8 hover:border-white/20'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Pill Cloud (Studio-Lit Pill Badges) */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3.5 mb-16 max-w-5xl mx-auto"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  key={skill.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative flex items-center gap-2.5 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-2xl bg-zinc-950/80 border border-white/10 hover:border-cyan-400/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] backdrop-blur-md cursor-pointer transition-all duration-300"
                >
                  {/* Skill icon or logo */}
                  {skill.logo ? (
                    <img 
                      src={skill.logo} 
                      alt={skill.name} 
                      className={`w-4 h-4 sm:w-5 sm:h-5 object-contain ${skill.invert ? 'filter invert' : ''}`}
                    />
                  ) : Icon ? (
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  ) : null}

                  {/* Skill Name */}
                  <span className="text-xs sm:text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Micro-tag */}
                  <span className="hidden sm:inline-block text-[10px] font-mono text-zinc-500 group-hover:text-cyan-400 transition-colors pl-1 border-l border-white/10">
                    {skill.tag}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4 Architectural Category Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DETAILED_SPECS.map((spec, idx) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="p-5 rounded-2xl bg-zinc-950/60 border border-white/8 hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {spec.title}
                  </h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    {spec.badge}
                  </span>
                </div>

                <p className="text-[11px] text-zinc-400 mb-4 leading-relaxed">
                  {spec.desc}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {spec.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-mono px-2 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300 hover:border-cyan-400/40 hover:text-white transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-zinc-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
