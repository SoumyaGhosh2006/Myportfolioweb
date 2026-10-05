import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Cpu, Server, Sparkles, Shield, Rocket, CheckCircle2, MapPin, GraduationCap, Target } from 'lucide-react';

export default function About() {
  const pillars = [
    {
      icon: Server,
      title: "Enterprise Systems & Scale",
      description: "Designing end-to-end architectures that survive real-world chaos. Replacing manual, fragile workflows with high-concurrency systems like K-Stop for 30,000+ campus users.",
      accent: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20"
    },
    {
      icon: Sparkles,
      title: "Applied AI & Voice Pipelines",
      description: "Harnessing Whisper audio transcription and constrained LLM pipelines (Groq Llama 3 70B) with strict JSON-schema validation and KaTeX rendering to eliminate hallucinations.",
      accent: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: Cpu,
      title: "Real-Time & High Performance",
      description: "Pushing sub-second propagation speeds via Redis pub/sub, Socket.io, and Supabase Realtime, backed by relational data modeling (PostgreSQL / Prisma) and technical SEO.",
      accent: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  const highlights = [
    { label: "Institution", value: "KIIT University, Bhubaneswar", icon: GraduationCap },
    { label: "Base Location", value: "Kolkata, India", icon: MapPin },
    { label: "Target Goal", value: "Summer 2027 Internship (IBM / Product Teams)", icon: Target },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Rocket className="w-3.5 h-3.5 text-indigo-400" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Building Systems That Deliver <span className="text-gradient-indigo">Measurable Impact</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            I don't just write code; I take complete ownership of the problem domain. From government school bookkeeping to university-wide ERP automation, I engineer reliable software that solves real operational bottlenecks.
          </p>
        </div>

        {/* Narrative & Philosophy Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-indigo-400" />
              Ownership & Efficiency as Non-Negotiables
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              {personalInfo.bio}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              My engineering approach is driven by the conviction that automated systems should genuinely eliminate manual work rather than merely digitize bureaucracy. In every project, whether designing role-based security in <span className="text-indigo-300 font-medium">K-Stop</span> or speech-to-CSV accounting in <span className="text-cyan-300 font-medium">SchoolDesk</span>, I focus on intuitive ergonomics, robust data consistency, and architectural elegance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10">
              {highlights.map((h, i) => {
                const IconComponent = h.icon;
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-[11px] uppercase tracking-wider text-slate-400 font-mono flex items-center gap-1.5">
                      <IconComponent className="w-3.5 h-3.5 text-indigo-400" />
                      {h.label}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100">
                      {h.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Metrics / Mindset Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold">
                  01
                </div>
                <h4 className="text-base font-bold text-white">Full SDLC Execution</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Evolutionary prototyping, schema migrations with Prisma, automated testing, and CI/CD pipelines deployed to Vercel and Render.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold">
                  02
                </div>
                <h4 className="text-base font-bold text-white">Pragmatic AI Integration</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Applying foundation models (Groq Llama 3 70B, Whisper) with JSON schemas and vector math so outputs are strictly audit-ready and deterministic.
              </p>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                  03
                </div>
                <h4 className="text-base font-bold text-white">High Team Synergy</h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Active member in Cyber Security Corps Society and 5+ hackathons; clear communicator, collaborative teammate, and fast learner.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border border-white/10 relative group"
              >
                <div className={`w-12 h-12 rounded-2xl ${p.bg} ${p.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${p.accent}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
