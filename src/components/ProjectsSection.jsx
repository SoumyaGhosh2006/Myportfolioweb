import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, ExternalLink, Zap, ShieldCheck, 
  ArrowUpRight, Sparkles, Layers, Terminal, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTabMap, setActiveTabMap] = useState({
    schooldesk: 'overview',
    'k-stop': 'overview',
    glamgo: 'overview'
  });

  const setCardTab = (projectId, tab) => {
    setActiveTabMap(prev => ({ ...prev, [projectId]: tab }));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Hardware-Accelerated Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 25% 30%, rgba(99, 102, 241, 0.1) 0%, transparent 60%), radial-gradient(circle at 75% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-indigo-400" />
            Key Projects & Systems
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Enterprise Platforms & <span className="text-gradient-indigo">Intelligent Solutions</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            High-ownership projects engineered to solve tangible operational challenges: cutting school bookkeeping overhead, automating university campus workflows, and executing sub-second catalog synchronizations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const currentTab = activeTabMap[project.id] || 'overview';

            return (
              <div
                key={project.id}
                className="glass-panel glass-panel-hover rounded-3xl border border-white/10 flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Subtle top accent gradient */}
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-600" />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  {/* Card Header & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.status}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-medium text-cyan-300/90 mb-4 line-clamp-1">
                    {project.subtitle}
                  </p>

                  {/* Impact Highlight Badge */}
                  <div className="mb-5 p-3 rounded-2xl bg-slate-900/80 border border-white/5 flex items-start gap-2.5">
                    <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-200 leading-snug">
                      {project.impact}
                    </span>
                  </div>

                  {/* Tab Selector on Card */}
                  <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-900/60 border border-white/5 mb-4 text-xs font-medium">
                    <button
                      onClick={() => setCardTab(project.id, 'overview')}
                      className={`flex-1 py-1 rounded-lg transition-all ${
                        currentTab === 'overview'
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Overview
                    </button>
                    <button
                      onClick={() => setCardTab(project.id, 'specs')}
                      className={`flex-1 py-1 rounded-lg transition-all ${
                        currentTab === 'specs'
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Key Features
                    </button>
                  </div>

                  {/* Tab Content */}
                  <div className="flex-1 mb-6">
                    {currentTab === 'overview' ? (
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>
                    ) : (
                      <ul className="space-y-2 text-xs text-slate-300">
                        {project.keyPoints.slice(0, 3).map((pt, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2 line-clamp-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/5 mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 5).map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-indigo-500/10 text-indigo-300">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 sm:p-6 bg-slate-900/40 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 px-4 py-2.5 rounded-xl glass-pill text-xs font-semibold text-white hover:border-cyan-400/50 hover:bg-white/10 transition-all flex items-center justify-center gap-1.5 group/btn"
                  >
                    <span>Architecture Deep Dive</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub Repository for ${project.title}`}
                    className="w-10 h-10 rounded-xl glass-pill flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-400/50 transition-colors shrink-0"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Dive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
