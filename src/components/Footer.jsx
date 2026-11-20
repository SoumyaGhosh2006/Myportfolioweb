import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#07080B] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-zinc-200">
              SG
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-sm text-zinc-100">Soumya Ghosh</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                  CSE · KIIT '28
                </span>
              </div>
              <p className="text-xs text-zinc-500 font-mono">Full Stack & Systems Engineering</p>
            </div>
          </div>

          {/* Center Telemetry */}
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              All Conduits Operational
            </span>
            <span>·</span>
            <span>React 19 + Vite</span>
          </div>

          {/* Right Links & Back to Top */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg obsidian-pill text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg obsidian-pill text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg obsidian-pill text-zinc-400 hover:text-white transition-colors"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center text-xs text-zinc-600 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono">
          <span>© {new Date().getFullYear()} Soumya Ghosh.</span>
          <span>Engineered with high ownership, obsidian architecture & zero slop.</span>
        </div>
      </div>
    </footer>
  );
}
