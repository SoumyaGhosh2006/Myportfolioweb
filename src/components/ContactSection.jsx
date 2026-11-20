import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Clock, MessageSquare, ArrowUpRight, Code2 } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            Direct Channels
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-3">
            Initiate <span className="text-gradient-silver">Contact</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Open for <strong className="text-zinc-200">Technology & Infrastructure Engineering Internships</strong>. Let's discuss systems, reliability, or open-source collaboration.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Email Card */}
          <div className="obsidian-card obsidian-card-hover p-5 sm:p-6 rounded-2xl border border-white/[0.08] relative group flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-zinc-500 block">Direct Email</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-sm sm:text-base font-semibold text-zinc-200 hover:text-white transition-colors truncate block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="p-2.5 rounded-xl obsidian-pill text-zinc-400 hover:text-white transition-colors shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="obsidian-card obsidian-card-hover p-5 sm:p-6 rounded-2xl border border-white/[0.08] relative group flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-200 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-zinc-500 block">Phone & WhatsApp</span>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-sm sm:text-base font-semibold text-zinc-200 hover:text-white transition-colors truncate block"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="p-2.5 rounded-xl obsidian-pill text-zinc-400 hover:text-white transition-colors shrink-0"
              title="Copy phone to clipboard"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Lower Row: Location Clock, GitHub, LinkedIn, LeetCode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location & Clock Card */}
          <div className="obsidian-card p-5 rounded-2xl border border-white/[0.08] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>{personalInfo.location}</span>
              </div>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                IST
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 pt-1">
              <Clock className="w-3.5 h-3.5 text-zinc-500" />
              <span className="font-bold text-zinc-100">{currentTime || '08:30:00 PM'}</span>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="obsidian-card obsidian-card-hover p-5 rounded-2xl border border-white/[0.08] flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block">Repository</span>
                <span className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">GitHub</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="obsidian-card obsidian-card-hover p-5 rounded-2xl border border-white/[0.08] flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block">Professional</span>
                <span className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">LinkedIn</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LeetCode Card */}
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="obsidian-card obsidian-card-hover p-5 rounded-2xl border border-white/[0.08] flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-500 block">Problem Solving</span>
                <span className="text-xs sm:text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">LeetCode</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
