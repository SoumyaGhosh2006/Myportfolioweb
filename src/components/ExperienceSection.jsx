import React from 'react';
import { experience } from '../data/portfolioData';
import { Trophy, Calendar, MapPin, CheckCircle2, GitPullRequest, Shield } from 'lucide-react';

export default function ExperienceSection() {
  const iconMap = {
    0: Shield,
    1: GitPullRequest,
    2: Trophy
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-3">
            <Trophy className="w-3.5 h-3.5 text-sky-400" />
            Track Record & Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Experience & <span className="text-gradient-silver">Open Source</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Campus leadership, open-source distinctions, and high-velocity hackathon sprints under tight production constraints.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6">
          {experience.map((item, idx) => {
            const Icon = iconMap[idx] || Trophy;
            return (
              <div
                key={idx}
                className="obsidian-card obsidian-card-hover p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative group"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                          {item.type}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-zinc-400">
                        {item.organization}
                      </h4>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-start">
                    <span className="px-3 py-1 rounded-xl text-xs font-mono font-semibold text-zinc-300 bg-white/[0.04] border border-white/[0.08]">
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.06]">
                  <ul className="space-y-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
