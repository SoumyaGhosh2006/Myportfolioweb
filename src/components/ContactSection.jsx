import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Mail, Phone, MapPin, Send, Copy, Check, 
  Clock, MessageSquare, Sparkles, CheckCircle2, ArrowUpRight 
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive send
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 }
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Hardware-Accelerated Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background: 'radial-gradient(circle at 40% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Telemetry */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 relative group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
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
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="glass-panel p-6 rounded-3xl border border-white/10 relative group">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
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

            {/* Social Channels Quick Links */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <span className="text-xs font-bold text-white">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl glass-panel glass-panel-hover flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  <span className="text-xs font-bold text-white">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Glassmorphic Interactive Message Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Have an opening, opportunity, or interesting challenge? Reach out directly.
            </p>

            {isSubmitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-center animate-in zoom-in-95 duration-200">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out! I will respond promptly to your email at <strong className="text-emerald-300">{personalInfo.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Hiring Manager / Engineer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs sm:text-sm placeholder:text-slate-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs sm:text-sm placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Summer 2027 Internship Opportunity"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs sm:text-sm placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Share details about the role, project, or technical question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-white text-xs sm:text-sm placeholder:text-slate-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
