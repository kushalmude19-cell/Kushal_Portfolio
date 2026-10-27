import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield } from 'lucide-react';

export default function ProfileAvatar({ imageSrc, name = 'Kushal', role = 'SDE' }) {
  return (
    <div className="relative flex items-center justify-center p-3">
      {/* Outer Continuous Rotating Gradient Ring */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[160px] h-[160px] sm:w-[190px] h-[190px] rounded-full p-[2px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-emerald-400 opacity-70 blur-[1px]"
      />

      {/* Floating Photo Container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative w-[150px] h-[150px] sm:w-[178px] sm:h-[178px] rounded-full p-1 bg-zinc-950 border border-white/10 shadow-[0_0_35px_rgba(56,189,248,0.25)] flex items-center justify-center overflow-hidden"
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          /* High-end SVG Monogram Placeholder */
          <div className="w-full h-full rounded-full bg-gradient-to-br from-zinc-900 via-zinc-950 to-black flex flex-col items-center justify-center text-center p-3">
            <div className="w-11 h-11 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-1 shadow-inner">
              <Terminal className="w-5 h-5" />
            </div>
            <span className="font-mono text-base font-extrabold text-white tracking-wider">
              KM<span className="text-sky-400">.OS</span>
            </span>
            <span className="font-mono text-[9px] text-emerald-400 font-semibold tracking-widest uppercase">
              ● SPPU • PUNE
            </span>
          </div>
        )}
      </motion.div>
    </div>
  );
}
