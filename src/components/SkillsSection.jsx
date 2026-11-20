import React, { useState } from 'react';
import { marqueeSkills, technicalSkills } from '../data/portfolioData';
import { 
  SlidersHorizontal, Code2, Server, Database, ShieldCheck, 
  Terminal, Cpu, Sparkles, CheckCircle2 
} from 'lucide-react';

export default function SkillsSection() {
  const [selectedDomain, setSelectedDomain] = useState('backend');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const domains = [
    { id: 'backend', label: 'Backend & Systems', icon: Server, items: technicalSkills.backend },
    { id: 'languages', label: 'Languages', icon: Code2, items: technicalSkills.languages },
    { id: 'databases', label: 'Databases & Storage', icon: Database, items: technicalSkills.databases },
    { id: 'security', label: 'Security & Payments', icon: ShieldCheck, items: technicalSkills.security },
    { id: 'devops', label: 'DevOps & Reliability', icon: Terminal, items: technicalSkills.devops },
    { id: 'coreCs', label: 'Core CS Foundations', icon: Cpu, items: technicalSkills.coreCs },
    { id: 'aiData', label: 'AI & Data Pipelines', icon: Sparkles, items: technicalSkills.aiData }
  ];

  const currentDomain = domains.find(d => d.id === selectedDomain) || domains[0];

  const track1 = marqueeSkills.slice(0, 9);
  const track2 = marqueeSkills.slice(9);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-3">
            <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
            Technical Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Skills & <span className="text-gradient-silver">Systems Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            Hardware-accelerated continuous stack tape alongside a classified technical domain breakdown.
          </p>
        </div>

        {/* 1. DUAL-TRACK HARDWARE-ACCELERATED CONVEYOR BELT */}
        <div className="mb-14">
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 px-2 font-mono">
            <span className="flex items-center gap-2 text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              60 FPS Hardware-Accelerated Stream
            </span>
            <span className="hidden sm:inline-block">Hover over any badge to pause</span>
          </div>

          <div className="relative w-full overflow-hidden marquee-group py-4 rounded-3xl obsidian-card border border-white/[0.08] shadow-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#08090C] via-[#08090C]/90 to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#08090C] via-[#08090C]/90 to-transparent z-20 pointer-events-none" />

            {/* Track 1: Leftward */}
            <div className="mb-3.5">
              <div className="animate-marquee-left flex gap-3">
                {track1.concat(track1, track1, track1).map((s, idx) => (
                  <div
                    key={`t1-${s.name}-${idx}`}
                    onMouseEnter={() => setHoveredSkill(s)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="px-4 py-2.5 rounded-xl obsidian-pill flex items-center gap-2.5 shrink-0 hover:border-white/20 transition-all select-none cursor-default"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-200">{s.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-white/[0.03]">
                      {s.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Track 2: Rightward */}
            <div>
              <div className="animate-marquee-right flex gap-3">
                {track2.concat(track2, track2, track2).map((s, idx) => (
                  <div
                    key={`t2-${s.name}-${idx}`}
                    onMouseEnter={() => setHoveredSkill(s)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="px-4 py-2.5 rounded-xl obsidian-pill flex items-center gap-2.5 shrink-0 hover:border-white/20 transition-all select-none cursor-default"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-zinc-200">{s.name}</span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-white/[0.03]">
                      {s.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. CLASSIFIED DOMAIN BREAKDOWN TABS */}
        <div>
          {/* Domain Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-8">
            {domains.map((dom) => {
              const Icon = dom.icon;
              const isSelected = selectedDomain === dom.id;
              return (
                <button
                  key={dom.id}
                  onClick={() => setSelectedDomain(dom.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-white text-zinc-950 font-semibold shadow-md'
                      : 'obsidian-pill text-zinc-400 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{dom.label}</span>
                </button>
              );
            })}
          </div>

          {/* Domain Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentDomain.items.map((item, idx) => (
              <div
                key={idx}
                className="obsidian-card obsidian-card-hover p-4 sm:p-5 rounded-2xl border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {item.name}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white/[0.05] text-zinc-300 border border-white/[0.06]">
                      {item.level}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
