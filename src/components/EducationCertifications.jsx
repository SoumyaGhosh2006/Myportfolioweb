import React from 'react';
import { education, certifications } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2, Building2, TrendingUp, Code2 } from 'lucide-react';

export default function EducationCertifications() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
            Academics & Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Education & <span className="text-gradient-indigo">Industry Simulation</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Rigorous computer science fundamentals at KIIT University alongside practical software engineering simulations modeled after enterprise banking pipelines.
          </p>
        </div>

        {/* Education & Certification Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Degree Program
                </span>
                <span className="text-xs font-mono text-cyan-300">
                  {education.status}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {education.degree}
                  </h3>
                  <h4 className="text-sm font-semibold text-indigo-300 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    {education.institution}
                  </h4>
                  <span className="text-xs font-mono text-slate-400 mt-1 block">
                    Batch 2024 – 2028 · 5th Semester
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Pursuing rigorous training in core computer systems, algorithmic efficiency, distributed networks, and modern software engineering paradigms.
              </p>

              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-bold">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                  Relevant Core Coursework
                </h5>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {education.coursework.map((course, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-xl bg-slate-900/50 border border-white/5 text-slate-300 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-indigo-400 shrink-0" />
                      <span className="line-clamp-1">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Bhubaneswar, Odisha</span>
              <span className="text-emerald-400 font-medium">In Progress</span>
            </div>
          </div>

          {/* Certification Card: Citi Technology Simulation */}
          <div className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border border-white/10 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Enterprise Simulation
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  Verified
                </span>
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {certifications[0].title}
                  </h3>
                  <h4 className="text-sm font-semibold text-emerald-300 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    {certifications[0].issuer}
                  </h4>
                  <span className="text-xs font-mono text-slate-400 mt-1 block">
                    Enterprise Engineering Simulation
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {certifications[0].description}
              </p>

              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5 font-bold">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  Key Skills & Implemented Competencies
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {certifications[0].skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-xl text-xs font-medium glass-pill text-emerald-300 border border-emerald-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Financial Systems & JavaFX</span>
              <span className="text-emerald-400 font-semibold">Completed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
