import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, CornerDownLeft, RefreshCw, CheckCircle2 } from 'lucide-react';
import { personalInfo, projects } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Soumya Ghosh — Infrastructure & Systems CLI [Version 2.4.0]' },
    { type: 'system', text: 'Type "help" or click any shortcut chip to run commands.' },
    { type: 'cmd', text: 'curl -I https://api.inkflow.dev/v1/transform' },
    { 
      type: 'res', 
      text: 'HTTP/2 200 OK\nx-response-time: 84ms\nx-ratelimit-remaining: 480/500\nx-signature-verified: true (HMAC-SHA256)\nserver: uvicorn/fastapi (async motor pool)' 
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const bottomRef = useRef(null);

  const commands = {
    help: () => [
      'Available commands:',
      '  projects      List production projects and key metrics',
      '  skills        Display core backend & systems competencies',
      '  curl inkflow  Simulate high-throughput API latency & HMAC security',
      '  curl kstop    Simulate 4-stage leave QR gate verification workflow',
      '  metrics       Display system telemetry & benchmarks',
      '  contact       Output direct contact & repository links',
      '  clear         Clear the terminal screen'
    ].join('\n'),

    projects: () => [
      'FLAGSHIP PROJECTS:',
      '  [1] InkFlow             FastAPI · Python · Motor · Razorpay · Sentry (<100ms API latency)',
      '  [2] K-Stop              React · PostgreSQL · Prisma · Socket.IO (4 user personas, 4-stage leave)',
      '  [3] GLAMGO              React · Supabase Realtime (2-source resilient sync, offline fallback)',
      '  [4] Goblin Nature Bingo React · FastAPI · Groq Vision LPUs (offline-first 2,250 quest space)'
    ].join('\n'),

    skills: () => [
      'TECHNICAL STACK:',
      '  Languages:    Python, JavaScript (ES6+), TypeScript, Java, C, SQL',
      '  Backend:      FastAPI, Node.js, Express.js, RESTful APIs, Socket.IO, Pydantic',
      '  Databases:    PostgreSQL, Prisma ORM, MongoDB (Motor async), Supabase Realtime',
      '  Security:     HMAC-SHA256, Razorpay API, JWT Auth, RBAC, Rate Limiting (429)',
      '  DevOps/Infra: Docker, GitHub Actions (CI/CD), Sentry, Linux, AWS (basics)'
    ].join('\n'),

    'curl inkflow': () => [
      'GET /v1/transform HTTP/2',
      'Host: api.inkflow.dev',
      'Authorization: Bearer [REDACTED]',
      'x-razorpay-signature: a4f8e9... (HMAC-SHA256 valid)',
      '',
      'HTTP/2 200 OK',
      '{',
      '  "status": "success",',
      '  "latency_ms": 78.4,',
      '  "pool_connections_active": 12,',
      '  "tier_quota_remaining": 940,',
      '  "sentry_trace_id": "4b7e882a10c9"' ,
      '}'
    ].join('\n'),

    'curl kstop': () => [
      'POST /v1/gate-pass/verify HTTP/1.1',
      'Host: kstop.kiit.ac.in',
      '',
      'HTTP/1.1 200 OK',
      '{',
      '  "workflow_stage": "QR_GATE_VERIFIED",',
      '  "approvals": ["PARENT_APPROVED", "MENTOR_APPROVED"],',
      '  "otp_bruteforce_defense": "0_FAILED_ATTEMPTS (MAX_5)",',
      '  "timestamp": "' + new Date().toISOString() + '"',
      '}'
    ].join('\n'),

    metrics: () => [
      'SYSTEM BENCHMARKS & TELEMETRY:',
      '  • InkFlow p95 Latency:          < 100ms under pooled async load',
      '  • Razorpay Webhook Security:    100% HMAC-SHA256 signature verification',
      '  • K-Stop OTP Defense:           5-attempt brute-force throttling, 10-min TTL',
      '  • Goblin Bingo Bandwidth:       Client Canvas downscaled to <300KB JPEG',
      '  • Open Source Milestone:        Hacktoberfest 2026 Official Completionist'
    ].join('\n'),

    contact: () => [
      'DIRECT CHANNELS:',
      `  • Email:    ${personalInfo.email}`,
      `  • Phone:    ${personalInfo.phone}`,
      `  • Location: ${personalInfo.location} (IST)`,
      `  • GitHub:   ${personalInfo.github}`,
      `  • LinkedIn: ${personalInfo.linkedin}`,
      `  • LeetCode: ${personalInfo.leetcode}`
    ].join('\n'),

    clear: () => null
  };

  const handleRunCommand = (cmdStr) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    if (raw === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const handler = commands[raw];
    let responseText = '';
    if (handler) {
      responseText = handler();
    } else {
      responseText = `Command not recognized: "${raw}". Type "help" for a list of valid commands.`;
    }

    setHistory(prev => [
      ...prev,
      { type: 'cmd', text: cmdStr },
      { type: 'res', text: responseText }
    ]);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRunCommand(inputVal);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const quickChips = ['help', 'projects', 'curl inkflow', 'curl kstop', 'metrics', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium obsidian-pill text-zinc-300 mb-3">
            <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
            Interactive System Console
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            CLI <span className="text-gradient-silver">Sandbox & Telemetry</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Run simulated API queries, verify cryptographic verification pipelines, or inspect production telemetry directly.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl terminal-surface border border-white/10 overflow-hidden shadow-2xl">
          {/* Top Bar with Window Controls */}
          <div className="px-4 py-3 bg-[#0C0E14] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 text-xs font-mono text-zinc-400 hidden sm:inline">
                soumya@kiit-server:~ (zsh)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Connected
              </span>
              <button
                onClick={() => setHistory([])}
                className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                title="Clear screen"
              >
                <RefreshCw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Terminal Screen Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 max-h-[380px] overflow-y-auto space-y-3">
            {history.map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === 'system' && (
                  <div className="text-zinc-500">{item.text}</div>
                )}
                {item.type === 'cmd' && (
                  <div className="flex items-center gap-2 text-zinc-100 font-semibold">
                    <span className="text-sky-400">➜</span>
                    <span className="text-zinc-500">~</span>
                    <span>{item.text}</span>
                  </div>
                )}
                {item.type === 'res' && (
                  <pre className="text-zinc-400 whitespace-pre-wrap pl-4 border-l border-white/10 mt-1">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Quick Command Chips */}
          <div className="px-4 py-2.5 bg-[#090B10] border-t border-white/[0.06] flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            <span className="text-[11px] font-mono text-zinc-500 uppercase mr-1 shrink-0">Chips:</span>
            {quickChips.map((chip) => (
              <button
                key={chip}
                onClick={() => handleRunCommand(chip)}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] hover:bg-white/[0.09] text-zinc-300 border border-white/[0.08] hover:border-white/20 transition-all shrink-0"
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleSubmit} className="p-3 bg-[#0C0E14] border-t border-white/[0.08] flex items-center gap-2">
            <div className="flex items-center gap-2 text-sky-400 font-mono text-xs sm:text-sm pl-2">
              <span>➜</span>
              <span className="text-zinc-500">~</span>
            </div>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type 'help' or command..."
              className="flex-1 bg-transparent border-none text-zinc-100 placeholder:text-zinc-600 font-mono text-xs sm:text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-200 text-xs font-mono transition-colors flex items-center gap-1"
            >
              <span>Run</span>
              <CornerDownLeft className="w-3 h-3" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
