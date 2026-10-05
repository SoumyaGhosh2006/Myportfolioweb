import React from 'react';
import { experience } from '../data/portfolioData';
import { Briefcase, Trophy, Award, Calendar, MapPin, Terminal, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export default function ExperienceSection() {
  const hackathons = [
    {
      name: "Smart India Hackathon 2025 (SIH25)",
      category: "National Level Collegiate Hackathon",
      desc: "Engineered scalable governance solutions under time constraints, addressing real citizen and student public service challenges.",
      badge: "National Finalist / Participant",
      color: "from-amber-500/20 to-orange-500/20",
      accent: "text-amber-400",
      border: "border-amber-500/30"
    },
    {
      name: "ETHackathon",
      category: "Web3 & Decentralized Architecture",
      desc: "Architected decentralized workflows and trustless verification pipelines exploring high-throughput state transitions.",
      badge: "Web3 Innovation",
      color: "from-purple-500/20 to-indigo-500/20",
      accent: "text-purple-400",
      border: "border-purple-500/30"
    },
    {
      name: "GDG Organised Hackathons",
      category: "Google Developer Groups Ecosystem",
      desc: "Prototyped modern cloud and full-stack solutions leveraging Google developer technologies and modern APIs.",
      badge: "Cloud & Dev",
      color: "from-blue-500/20 to-cyan-500/20",
      accent: "text-cyan-400",
      border: "border-cyan-500/30"
    },
    {
      name: "Lablab.ai Global AI Challenges",
      category: "Generative AI & LLM Systems",
      desc: "Competed in high-velocity international hackathons building autonomous agent prototypes, speech pipelines, and multi-modal apps.",
      badge: "Global AI Track",
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      border: "border-emerald-500/30"
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5 text-indigo-400" />
            Experience & Hackathons
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Hands-on Engineering & <span className="text-gradient-indigo">Competitive Arena</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Leading club web infrastructure within KIIT University and competing in 5+ premier national and global hackathons to build rapid, high-impact prototypes.
          </p>
        </div>

        {/* Experience & Hackathon Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Cyber Security Corps Society Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Campus Society Leadership
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Web Developer
              </h3>
              <h4 className="text-sm font-semibold text-indigo-300 mb-4">
                Cyber Security Corps Society, KIIT
              </h4>

              <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-6 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  Aug 2024 – Present
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  KIIT University, Bhubaneswar
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Directly contributing to society-wide web infrastructure, portals, and student-led technical initiatives. Collaborating with security enthusiasts on frontend safety, access control, and seamless deployment workflows.
              </p>

              <div className="pt-4 border-t border-white/10">
                <h5 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Key Responsibilities & Impact
                </h5>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Maintaining and optimizing society web applications and portal portals.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Engineering responsive, secure web tools for campus events and technical workshops.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                    <span>Fostering peer collaboration and knowledge transfer among engineering batches.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Competitive Drive Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-950/40 to-slate-900/40">
              <div className="flex items-center gap-3 mb-2">
                <Flame className="w-5 h-5 text-amber-400" />
                <h4 className="text-sm font-bold text-white">Rapid Prototyping Under Pressure</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Hackathons test an engineer's true capability: converting ambiguous problem statements into working, scalable architectures within 24–48 hours without compromising on core code stability.
              </p>
            </div>
          </div>

          {/* Right: Hackathon Arena Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-400" />
                Hackathon Track Record (5+ Events)
              </h3>
              <span className="text-xs font-mono text-slate-400">SIH25 · ETHackathon · GDG · Lablab · Unstop</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hackathons.map((hack, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono font-semibold ${hack.color} ${hack.accent} border ${hack.border}`}>
                        {hack.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                      {hack.name}
                    </h4>
                    <span className="text-[11px] font-mono text-slate-400 block mb-2.5">
                      {hack.category}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {hack.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </span>
                    <span>24–48hr Sprint</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
