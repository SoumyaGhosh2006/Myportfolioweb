import React, { useState } from 'react';
import { architectureTreeNodes } from '../data/portfolioData';
import { Network, Sparkles, Zap, ArrowRight, Play, Info, Layers, CheckCircle } from 'lucide-react';

export default function ArchitectureTree() {
  const [selectedPipeline, setSelectedPipeline] = useState('all');
  const [activeNode, setActiveNode] = useState(null);

  const pipelines = [
    {
      id: 'all',
      name: 'Full System Topology',
      subtitle: 'Complete end-to-end data pipeline',
      activeNodes: ['c1', 'c2', 'c3', 'g1', 'g2', 'g3', 'i1', 'i2', 'i3', 'i4', 'p1', 'p2', 'p3', 'p4', 'e1', 'e2', 'e3'],
      color: 'indigo'
    },
    {
      id: 'schooldesk',
      name: 'SchoolDesk Voice AI Flow',
      subtitle: 'Voice audio -> Whisper -> Groq 70B -> KaTeX & CSV',
      activeNodes: ['c2', 'g1', 'i2', 'i1', 'i4', 'p1', 'e2'],
      color: 'cyan'
    },
    {
      id: 'kstop',
      name: 'K-Stop Realtime ERP Flow',
      subtitle: 'QR Passes & Attendance -> Socket.io -> Redis -> Prisma',
      activeNodes: ['c1', 'c3', 'g2', 'g3', 'p2', 'p1', 'e1', 'e2'],
      color: 'emerald'
    },
    {
      id: 'glamgo',
      name: 'GLAMGO Sub-Second Sync',
      subtitle: 'Client Storefront -> Supabase Realtime Stream -> Edge',
      activeNodes: ['c1', 'p3', 'p1', 'e1'],
      color: 'purple'
    }
  ];

  const currentPipeline = pipelines.find(p => p.id === selectedPipeline) || pipelines[0];

  return (
    <div className="w-full glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-2">
            <Network className="w-3.5 h-3.5 text-cyan-400" />
            Live Data Flow Architecture
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Animated System Architecture Tree
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Data packets stream along dotted conduits connecting interfaces, async gateways, AI models, and real-time stores.
          </p>
        </div>

        {/* Pipeline Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {pipelines.map((pipe) => {
            const isSelected = selectedPipeline === pipe.id;
            return (
              <button
                key={pipe.id}
                onClick={() => {
                  setSelectedPipeline(pipe.id);
                  setActiveNode(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20 font-semibold'
                    : 'glass-pill text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Zap className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-cyan-400'}`} />
                <span>{pipe.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Pipeline Info Bar */}
      <div className="mb-8 px-4 py-2.5 rounded-xl bg-slate-900/60 border border-white/5 flex items-center justify-between text-xs text-slate-300 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-slate-400">Active Pipeline:</span>
          <span className="text-indigo-300 font-semibold">{currentPipeline.subtitle}</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-400">
          <span>Click any node to inspect data layer</span>
        </div>
      </div>

      {/* SVG Connecting Flow Lines & Moving Data Dots */}
      <div className="relative overflow-x-auto pb-4">
        <div className="min-w-[780px] lg:min-w-full">
          {/* Animated Connecting SVG Canvas */}
          <div className="relative">


            {/* Tier Columns Tree Flow (A -> B -> C -> D -> E) */}
            <div className="grid grid-cols-5 gap-3 lg:gap-4 relative z-10">
              {architectureTreeNodes.map((tier, tierIdx) => (
                <div key={tier.id} className="flex flex-col">
                  {/* Tier Title Header */}
                  <div className="text-center mb-4">
                    <div className="inline-block px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold uppercase tracking-wider bg-slate-800/80 text-indigo-300 border border-white/10 shadow-sm mb-1">
                      Tier {String.fromCharCode(65 + tierIdx)}
                    </div>
                    <h4 className="text-xs font-bold text-slate-200 line-clamp-1">
                      {tier.title.split('. ')[1] || tier.title}
                    </h4>
                  </div>

                  {/* Nodes in this Tier */}
                  <div className="flex flex-col gap-3">
                    {tier.nodes.map((node) => {
                      const isActive = currentPipeline.activeNodes.includes(node.id);
                      const isInspected = activeNode?.id === node.id;

                      return (
                        <div
                          key={node.id}
                          onClick={() => setActiveNode(node)}
                          className={`p-3 rounded-2xl cursor-pointer transition-all duration-300 relative group ${
                            isInspected
                              ? 'bg-indigo-600/30 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-[1.03]'
                              : isActive
                              ? 'glass-panel border-indigo-500/40 hover:border-cyan-400 hover:shadow-lg hover:shadow-indigo-500/20'
                              : 'bg-slate-900/30 border border-white/5 opacity-40 hover:opacity-80'
                          }`}
                        >
                          {/* Animated Dotted Flow Indicator on Active Nodes */}
                          {isActive && (
                            <div className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                            </div>
                          )}

                          <div className="text-xs font-bold text-white mb-1 group-hover:text-indigo-200 transition-colors">
                            {node.name}
                          </div>
                          <div className="text-[11px] text-slate-400 line-clamp-2 leading-tight">
                            {node.desc}
                          </div>

                          {/* Pulsing micro-status */}
                          {isActive && (
                            <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] text-cyan-300 font-mono">
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                Streaming
                              </span>
                              <ArrowRight className="w-3 h-3 text-cyan-400/70" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>

      {/* Node Inspector Drawer */}
      {activeNode && (
        <div className="mt-6 p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-200">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0">
              <Info className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h5 className="text-sm font-bold text-white">{activeNode.name}</h5>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-500/20 text-cyan-300">
                  Inspected Node
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">{activeNode.desc}</p>
            </div>
          </div>
          <button
            onClick={() => setActiveNode(null)}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Close Inspector
          </button>
        </div>
      )}
    </div>
  );
}
