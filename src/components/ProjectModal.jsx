import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Zap, Shield, Sparkles, Terminal, Layers, ArrowRight } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl glass-pill text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              {project.status}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-slate-300 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Impact Highlight Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 to-cyan-950/60 border border-cyan-500/30 flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider block font-bold">
              Engineering Metric / Impact
            </span>
            <span className="text-sm font-bold text-white">
              {project.impact}
            </span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Overview & Problem Domain
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Resume Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
            Core Technical Implementations
          </h4>
          <ul className="space-y-2.5">
            {project.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Specs Breakdown */}
        {project.architectureDetails && (
          <div className="mb-6 p-4 rounded-2xl bg-slate-900/60 border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-300 mb-3 flex items-center gap-1.5 font-bold">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              Detailed Multi-Tier Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(project.architectureDetails).map(([key, val], idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-800/40 border border-white/5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase block mb-0.5">
                    {key}
                  </span>
                  <span className="text-slate-200 font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stack Tags */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-xl text-xs font-medium glass-pill text-indigo-300 border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.02]"
          >
            <Github className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl glass-pill text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
