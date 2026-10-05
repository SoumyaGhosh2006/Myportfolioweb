import React, { useState } from 'react';
import { skillsTrackA, skillsTrackB, allSkillCategories } from '../data/portfolioData';
import ArchitectureTree from './ArchitectureTree';
import { 
  Layers, Globe, Zap, Server, Cpu, Radio, Code, Terminal, Coffee, 
  FileCode, Share2, Database, Workflow, Boxes, RefreshCw, LineChart, 
  BarChart3, Sparkles, Cloud, Image, Activity, GitCommit, SlidersHorizontal, 
  MoveHorizontal, Network, Eye
} from 'lucide-react';

const iconMap = {
  Layers, Globe, Zap, Server, Cpu, Radio, Code, Terminal, Coffee, 
  FileCode, Share2, Database, Workflow, Boxes, ZapFast: Zap, RefreshCw, 
  LineChart, BarChart3, Sparkles, Cloud, Image, Activity, GitCommit
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState('both'); // 'conveyor', 'tree', 'both'
  const [hoveredSkill, setHoveredSkill] = useState(null);

  // Filter helper
  const filterSkills = (list) => {
    if (activeCategory === 'all') return list;
    return list.filter(item => {
      if (activeCategory === 'frontend') return item.category === 'frontend' || item.category === 'language';
      if (activeCategory === 'backend') return item.category === 'backend' || item.category === 'architecture' || item.category === 'realtime';
      if (activeCategory === 'database') return item.category === 'database';
      if (activeCategory === 'ai') return item.category === 'ai';
      if (activeCategory === 'devops') return item.category === 'devops';
      if (activeCategory === 'core') return item.category === 'core' || item.category === 'language';
      return true;
    });
  };

  const filteredTrackA = filterSkills(skillsTrackA);
  const filteredTrackB = filterSkills(skillsTrackB);

  // Render Skill Pill
  const renderSkillPill = (skill, index, track) => {
    const Icon = iconMap[skill.icon] || Code;
    const isHovered = hoveredSkill?.name === skill.name;
    const isMatch = activeCategory === 'all' || 
      (activeCategory === 'frontend' && (skill.category === 'frontend' || skill.category === 'language')) ||
      (activeCategory === 'backend' && (skill.category === 'backend' || skill.category === 'architecture' || skill.category === 'realtime')) ||
      (activeCategory === 'database' && skill.category === 'database') ||
      (activeCategory === 'ai' && skill.category === 'ai') ||
      (activeCategory === 'devops' && skill.category === 'devops') ||
      (activeCategory === 'core' && (skill.category === 'core' || skill.category === 'language'));

    return (
      <div
        key={`${track}-${skill.name}-${index}`}
        onMouseEnter={() => setHoveredSkill(skill)}
        onMouseLeave={() => setHoveredSkill(null)}
        onClick={() => setHoveredSkill(skill)}
        className={`px-5 py-3 rounded-2xl cursor-pointer transition-all duration-300 flex items-center gap-3 shrink-0 select-none ${
          isMatch
            ? 'glass-panel hover:bg-slate-800/90 hover:border-indigo-400/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:scale-105'
            : 'opacity-40 glass-panel border-white/5'
        }`}
      >
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-400 shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-white tracking-tight">
              {skill.name}
            </span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/5">
              {skill.level}
            </span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono capitalize">
            {skill.category}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Hardware-Accelerated Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 80% 40%, rgba(99, 102, 241, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 70%, rgba(6, 182, 212, 0.1) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-indigo-400" />
            Skills & System Conduits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Technical Stack & <span className="text-gradient-indigo">Architecture Flow</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Continuous moving conveyor belts for full-stack & AI technologies, coupled with an interactive data-flow tree showing how data moves across micro-tiers.
          </p>
        </div>

        {/* View Mode Switcher & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 p-1 rounded-2xl glass-panel border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setViewMode('conveyor')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                viewMode === 'conveyor'
                  ? 'bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <MoveHorizontal className="w-3.5 h-3.5" />
              <span>Conveyor Belt</span>
            </button>
            <button
              onClick={() => setViewMode('tree')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                viewMode === 'tree'
                  ? 'bg-gradient-to-r from-cyan-500 to-indigo-500 text-white shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Data-Flow Tree</span>
            </button>
            <button
              onClick={() => setViewMode('both')}
              className={`hidden sm:flex px-4 py-2 rounded-xl text-xs font-semibold transition-all items-center gap-1.5 ${
                viewMode === 'both'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Combined View</span>
            </button>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 w-full md:w-auto">
            {allSkillCategories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white border border-indigo-400 shadow-sm shadow-indigo-500/30 font-semibold'
                      : 'glass-pill text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. DUAL-TRACK MOVING CONVEYOR BELT (Skills Section) */}
        {(viewMode === 'conveyor' || viewMode === 'both') && (
          <div className="mb-14">
            {/* Belt Status & Instructions */}
            <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-2 font-mono">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
                <span>Hardware-Accelerated 60FPS Stream</span>
              </span>
              <span className="hidden sm:inline-block">Hover on any skill pill to pause the conveyor</span>
            </div>

            {/* Conveyor Belt Wrapper with Edge Fades */}
            <div className="relative w-full overflow-hidden marquee-group py-3 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              {/* Gradient edge fades for seamless infinite illusion */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#070913] via-[#070913]/90 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#070913] via-[#070913]/90 to-transparent z-20 pointer-events-none" />

              {/* Track A: Languages & Full-Stack (Flows Left) */}
              <div className="mb-4">
                <div className="flex items-center gap-2 px-4 mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Track A · Left Stream
                  </span>
                  <span className="text-xs text-slate-400">Languages & Full-Stack Technologies</span>
                </div>
                <div className="animate-marquee-left flex gap-4">
                  {/* Render 3 copies to guarantee infinite continuous loop with zero blank spaces */}
                  {filteredTrackA.concat(filteredTrackA, filteredTrackA).map((skill, idx) => 
                    renderSkillPill(skill, idx, 'A')
                  )}
                </div>
              </div>

              {/* Track B: Databases, AI/ML & Core (Flows Right) */}
              <div>
                <div className="flex items-center gap-2 px-4 mb-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    Track B · Right Stream
                  </span>
                  <span className="text-xs text-slate-400">Databases, AI/ML, Cloud & Core Computing</span>
                </div>
                <div className="animate-marquee-right flex gap-4">
                  {/* Render 3 copies to guarantee infinite continuous loop with zero blank spaces */}
                  {filteredTrackB.concat(filteredTrackB, filteredTrackB).map((skill, idx) => 
                    renderSkillPill(skill, idx, 'B')
                  )}
                </div>
              </div>
            </div>

            {/* Hovered Skill Inspector */}
            {hoveredSkill && (
              <div className="mt-4 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex items-center justify-between animate-in fade-in duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{hoveredSkill.name}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {hoveredSkill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">{hoveredSkill.desc}</p>
                  </div>
                </div>
                <button
                  onClick={() => setHoveredSkill(null)}
                  className="text-xs text-slate-400 hover:text-white px-2 py-1"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        )}

        {/* 2. DOTTED DATA-FLOW ARCHITECTURE TREE */}
        {(viewMode === 'tree' || viewMode === 'both') && (
          <div className="animate-in fade-in duration-300">
            <ArchitectureTree />
          </div>
        )}
      </div>
    </section>
  );
}
