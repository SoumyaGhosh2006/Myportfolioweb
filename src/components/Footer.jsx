import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Terminal, Sparkles } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/10 bg-[#070913]/90 relative z-10 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand & Status */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center font-mono text-xs font-bold text-indigo-300">
                SG
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">Soumya Ghosh</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Open for Internship
                </span>
              </div>
              <p className="text-xs text-slate-400">Full Stack Developer · AI/ML Engineer · KIIT '28</p>
            </div>
          </div>

          {/* Center: System Telemetry */}
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              All Conduits Operational
            </span>
            <span className="hidden sm:inline-block">·</span>
            <span className="hidden sm:inline-block">React 19 + Vite</span>
          </div>

          {/* Right: Back to Top & Socials */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl glass-pill text-slate-400 hover:text-white hover:border-indigo-400/50 transition-colors flex items-center gap-1 text-xs"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Soumya Ghosh. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Engineered with high ownership, glassmorphism & continuous data conduits.
          </span>
        </div>
      </div>
    </footer>
  );
}
