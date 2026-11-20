import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { FolderGit2, ChevronRight, Zap, ShieldCheck, Activity, Terminal } from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-sky-400" />
            Featured Engineering
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Systems & <span className="text-gradient-silver">Production Architectures</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            High-concurrency backend services, cryptographic verification workflows, and offline-first vision applications built for real-world resilience.
          </p>
        </div>

        {/* 2x2 High-Density Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {projects.map((project) => (
            <div
              key={project.id}
              className="obsidian-card obsidian-card-hover rounded-3xl border border-white/[0.08] flex flex-col justify-between overflow-hidden relative group"
            >
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                {/* Header Meta: Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {project.badge || project.status}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-zinc-100 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-zinc-400 mb-4 line-clamp-1">
                  {project.subtitle}
                </p>

                {/* Impact Highlight Banner */}
                <div className="mb-4 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-zinc-200 leading-snug line-clamp-2">
                    {project.impact}
                  </span>
                </div>

                {/* Concise Summary */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-5 flex-1">
                  {project.description}
                </p>

                {/* Key Metrics Grid */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-white/[0.06]">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="p-2 rounded-lg bg-black/40 border border-white/[0.04]">
                        <span className="text-[10px] font-mono text-zinc-500 block uppercase">{m.label}</span>
                        <span className="text-xs font-mono font-semibold text-zinc-200">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Chips */}
                <div className="pt-3 border-t border-white/[0.06] mb-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Footer */}
              <div className="p-4 sm:p-5 bg-white/[0.01] border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-zinc-200 hover:text-white border border-white/[0.08] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>Architecture Deep Dive</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub for ${project.title}`}
                  className="w-9 h-9 rounded-xl obsidian-pill flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/30 transition-colors shrink-0"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Complete Architecture Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
