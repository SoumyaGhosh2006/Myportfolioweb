import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Copy, Check, Terminal, Code2, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Subtle Atmospheric Top Inset Radial Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(56, 189, 248, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, transparent 70%)'
        }}
      />

      {/* Cyber Grid Lines (Ultra subtle, 4% opacity) */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.04] pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black 50%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black 50%, transparent 100%)'
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full obsidian-pill mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-zinc-300">
              {personalInfo.status}
            </span>
          </div>

          {/* Primary Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
            Full Stack Developer & <br className="hidden sm:block" />
            <span className="text-gradient-silver">Systems Engineer</span>
          </h1>

          {/* Thesis Statement */}
          <p className="text-base sm:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed font-normal">
            3rd-year CS student at <strong className="text-zinc-200 font-semibold">KIIT University</strong>. I build secure backend services, CI/CD pipelines, and AI-integrated workflows with a relentless focus on reliability and monitoring.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto mb-14">
            <button
              onClick={() => scrollTo('projects')}
              className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-sm"
            >
              <span>Explore Key Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('terminal')}
              className="px-5 py-3 rounded-xl obsidian-pill text-zinc-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 transition-all hover:bg-white/[0.06]"
            >
              <Terminal className="w-4 h-4 text-sky-400" />
              <span>Launch CLI Sandbox</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-xl obsidian-pill text-zinc-400 hover:text-zinc-200 font-mono text-xs flex items-center justify-center gap-2 transition-all hover:bg-white/[0.06]"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>soumyaraab06@gmail.com</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Metrics Clean Desktop Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 w-full">
            {personalInfo.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="obsidian-card p-4 rounded-2xl border border-white/[0.08] text-left hover:border-white/20 transition-all group"
              >
                <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 mb-1 group-hover:text-white transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-zinc-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 font-mono line-clamp-1 mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
