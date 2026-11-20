import React from 'react';
import { Shield, Rocket, Server, Sparkles, Cpu, GraduationCap, MapPin, Target } from 'lucide-react';

export default function About() {
  const sidebarCards = [
    {
      num: "01",
      title: "Full SDLC Execution",
      description: "Evolutionary prototyping, schema migrations with Prisma, automated testing, and CI/CD pipelines deployed to Vercel and Render.",
      color: "from-sky-500/20 to-blue-500/10",
      accent: "text-sky-400"
    },
    {
      num: "02",
      title: "Pragmatic AI Integration",
      description: "Applying foundation models (Groq Llama 3 70B, Whisper) with JSON schemas and vector math so outputs are strictly audit-ready and deterministic.",
      color: "from-blue-500/20 to-indigo-500/10",
      accent: "text-blue-400"
    },
    {
      num: "03",
      title: "High Team Synergy",
      description: "Active member in Cyber Security Corps Society and 5+ hackathons; clear communicator, collaborative teammate, and fast learner.",
      color: "from-indigo-500/20 to-sky-500/10",
      accent: "text-indigo-400"
    }
  ];

  const bottomPillars = [
    {
      icon: Server,
      title: "Enterprise Systems & Scale",
      description: "Designing end-to-end architectures that survive real-world chaos. Replacing manual, fragile workflows with high-concurrency systems like K-Stop for 30,000+ campus users.",
      accent: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
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
    { label: "Target Goal", value: "Summer 2027 Internship", icon: Target },
  ];

  return (
    <section id="about" className="py-24 sm:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-4">
            <Rocket className="w-3.5 h-3.5 text-sky-400" />
            Engineering Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Building Systems That Deliver <span className="text-gradient-silver">Measurable Impact</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            I don't just write code; I take complete ownership of the problem domain. From government school bookkeeping to university-wide ERP automation, I engineer reliable software that solves real operational bottlenecks.
          </p>
        </div>

        {/* Narrative & Philosophy Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">
          {/* Main Card (Left Column) */}
          <div className="lg:col-span-7 obsidian-card p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-sky-400" />
                Ownership & Efficiency as Non-Negotiables
              </h3>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-4">
                3rd-year Computer Science Engineering student at KIIT University (Batch 2024-28). I approach every technical challenge with complete focus and ownership, treating quality and efficiency as non-negotiable. Whether building enterprise platforms from scratch or optimizing complex workflows, I invest the time and effort needed to deliver solutions that scale seamlessly under real-world pressure.
              </p>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
                My engineering approach is driven by the conviction that automated systems should genuinely eliminate manual work rather than merely digitize bureaucracy. In every project, whether designing role-based security in <span className="text-white font-medium">K-Stop</span> or speech-to-CSV accounting in <span className="text-white font-medium">SchoolDesk</span>, I focus on intuitive ergonomics, robust data consistency, and architectural elegance.
              </p>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-white/10">
              {highlights.map((h, i) => {
                const IconComponent = h.icon;
                return (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-xs uppercase tracking-wider text-zinc-500 font-mono flex items-center gap-1.5 font-medium">
                      <IconComponent className="w-3.5 h-3.5 text-sky-400" />
                      {h.label}
                    </span>
                    <span className="text-sm font-semibold text-zinc-200">
                      {h.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar 3 Execution Cards (Right Column) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {sidebarCards.map((card, idx) => (
              <div 
                key={idx}
                className="obsidian-card obsidian-card-hover p-5 sm:p-6 rounded-3xl border border-white/10 relative overflow-hidden flex-1 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3.5 mb-2">
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${card.color} border border-white/10 flex items-center justify-center font-mono font-bold text-xs ${card.accent}`}>
                    {card.num}
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {card.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Architecture Pillars (Bottom Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bottomPillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="obsidian-card obsidian-card-hover p-6 sm:p-7 rounded-3xl border border-white/10 relative flex flex-col justify-between"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl ${p.bg} ${p.border} border flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${p.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
