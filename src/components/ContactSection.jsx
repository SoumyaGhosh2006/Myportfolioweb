import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, Phone, MapPin, Copy, Check, 
  Clock, MessageSquare, ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live Kolkata Time Clock
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
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ['#6366f1', '#06b6d4']
    });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Hardware-Accelerated Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.12) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-indigo-400" />
            Fast Connect Hub
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Let's Build Something <span className="text-gradient-indigo">Scalable Together</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Actively seeking a <span className="text-white font-semibold">Summer 2027 Software Engineering Internship</span>. Open to engineering roles, hackathon collaborations, and system architectural discussions.
          </p>
        </div>

        {/* Clean, Centered Direct Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {/* Email Card */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 relative group flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Email Address</span>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="text-sm sm:text-base font-bold text-white hover:text-indigo-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.email, 'email')}
              className="p-2.5 rounded-xl glass-pill text-slate-300 hover:text-white transition-colors"
              title="Copy email to clipboard"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone & WhatsApp Card */}
          <div className="glass-panel glass-panel-hover p-6 rounded-3xl border border-white/10 relative group flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Phone & WhatsApp</span>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(personalInfo.phone, 'phone')}
              className="p-2.5 rounded-xl glass-pill text-slate-300 hover:text-white transition-colors"
              title="Copy phone number to clipboard"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Lower Row: Location Clock & Social Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Live Kolkata Location & Time Clock */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-bold text-white">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                IST (UTC+5:30)
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mt-2">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Local Time:</span>
              <span className="text-slate-200 font-bold text-sm tracking-wider">{currentTime || '08:30:00 PM'}</span>
            </div>
          </div>

          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl glass-panel glass-panel-hover flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:text-white group-hover:bg-white/10 transition-colors">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Code Repositories</span>
                <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">GitHub Profile</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* LinkedIn Card */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl glass-panel glass-panel-hover flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/25 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Professional Network</span>
                <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">LinkedIn Profile</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
