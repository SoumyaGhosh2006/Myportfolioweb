import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Zap, Layers, Activity } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto obsidian-card p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-xl obsidian-pill text-zinc-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-medium bg-white/[0.06] text-zinc-300 border border-white/10">
              {project.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-md text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
              {project.status}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Impact Highlight Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-white/[0.06] text-sky-400 flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
              Engineering Metric / Impact
            </span>
            <span className="text-xs sm:text-sm font-bold text-zinc-100">
              {project.impact}
            </span>
          </div>
        </div>

        {/* Metrics Grid if available */}
        {project.metrics && (
          <div className="mb-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/40 border border-white/[0.06]">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">{m.label}</span>
                <span className="text-sm font-mono font-bold text-zinc-100 block my-0.5">{m.value}</span>
                <span className="text-[10px] text-zinc-500 line-clamp-1">{m.note}</span>
              </div>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">
            Overview & Problem Domain
          </h4>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-bold">
            Core Technical Implementations
          </h4>
          <ul className="space-y-2.5">
            {project.keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Specs Breakdown */}
        {project.architectureDetails && (
          <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 mb-3.5 flex items-center gap-2 font-bold">
              <Layers className="w-4 h-4 text-sky-400" />
              Detailed Multi-Tier Architecture
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {Object.entries(project.architectureDetails).map(([key, val], idx) => (
                <div key={idx} className="p-3 rounded-xl bg-black/30 border border-white/[0.06]">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1 font-semibold">
                    {key}
                  </span>
                  <span className="text-zinc-200 leading-relaxed">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stack Tags */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-lg text-xs font-mono obsidian-pill text-zinc-300"
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
            className="px-4 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs flex items-center gap-2 hover:bg-zinc-200 transition-all shadow-sm"
          >
            <Github className="w-4 h-4 text-zinc-950" />
            <span>View on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl obsidian-pill text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
