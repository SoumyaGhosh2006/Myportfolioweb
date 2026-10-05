import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, Copy, Check, Sparkles, Terminal, FileText, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#06b6d4', '#10b981']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Hardware-Accelerated Ambient Glowing Gradients (Zero Blur Recalculation) */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.16) 0%, rgba(6, 182, 212, 0.08) 35%, transparent 70%)'
        }}
      />

      {/* Cyber Grid Background lines */}
      <div 
        className="absolute inset-0 -z-20 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Internship Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-indigo-500/30 shadow-lg shadow-indigo-500/10 mb-8 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-medium text-slate-200">
              {personalInfo.status} · <span className="text-indigo-300 font-semibold">{personalInfo.targetCompany}</span>
            </span>
          </div>

          {/* Primary Name & Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Engineering Systems with{' '}
            <span className="text-gradient-indigo">Scale, Speed</span> &{' '}
            <span className="text-gradient-emerald">AI Intelligence</span>
          </h1>

          {/* Dynamic Role Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
            <span className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-indigo-500/15 text-indigo-300 border border-indigo-500/30 flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-indigo-400" />
              Full Stack Developer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5 shadow-sm">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              AI/ML Engineer
            </span>
            <span className="px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              MERN & Python Ecosystem
            </span>
          </div>

          {/* Core Elevator Pitch / Bio */}
          <p className="text-base sm:text-lg text-slate-300 mb-10 max-w-2xl leading-relaxed">
            3rd-year Computer Science Engineering student at <strong className="text-white font-medium">KIIT University</strong>. 
            I build zero-paper campus architectures, voice-driven AI ledgers, and real-time e-commerce platforms with complete focus and ownership.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-16">
            <button
              onClick={() => scrollTo('projects')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              <span>Explore Architecture & Projects</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={() => scrollTo('skills')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl glass-panel glass-panel-hover text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/10"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Skills & Data-Flow Tree</span>
            </button>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-5 py-3.5 rounded-2xl glass-pill text-slate-200 hover:text-white font-medium text-sm flex items-center justify-center gap-2 border border-white/10 transition-all hover:bg-white/10"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">Email Copied! ✨</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Metrics Floating Glass Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            {personalInfo.quickStats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 text-left hover:border-indigo-500/30 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-white mb-1 tracking-tight group-hover:text-indigo-300 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-[11px] sm:text-xs text-slate-400 line-clamp-1">
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
