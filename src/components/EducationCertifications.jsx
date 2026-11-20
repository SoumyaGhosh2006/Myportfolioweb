import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Building2, TrendingUp } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
            Academics & Simulation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Education & <span className="text-gradient-silver">Enterprise Foundations</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Computer science engineering foundations at KIIT University alongside enterprise software simulation.
          </p>
        </div>

        {/* 2-Card Desktop Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Degree Card */}
          <div className="obsidian-card obsidian-card-hover p-6 sm:p-7 rounded-3xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                  Undergraduate Program
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {education.status}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    {education.degree}
                  </h3>
                  <h4 className="text-sm font-medium text-zinc-400 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    {education.institution}
                  </h4>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2.5 flex items-center gap-1.5 font-semibold">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
                  Key Coursework
                </h5>
                <div className="flex flex-wrap gap-1.5 text-xs">
                  {education.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/[0.06] text-zinc-300 font-mono text-[11px]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Bhubaneswar, Odisha</span>
              <span className="text-zinc-300 font-medium">{education.period}</span>
            </div>
          </div>

          {/* Certification Card */}
          <div className="obsidian-card obsidian-card-hover p-6 sm:p-7 rounded-3xl border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.08]">
                  Virtual Work Simulation
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Verified
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                    {certifications[0].title}
                  </h3>
                  <h4 className="text-sm font-medium text-zinc-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-sky-400" />
                    {certifications[0].issuer}
                  </h4>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {certifications[0].description}
              </p>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {certifications[0].skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Financial Engineering</span>
              <span className="text-zinc-300 font-medium">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
