'use client';

import React from 'react';
import { 
  LayoutDashboard, 
  ScanLine, 
  History, 
  FileBarChart2, 
  Settings, 
  Bot, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldAlert, 
//   Pills, 
  Send, 
  Image as ImageIcon,
  ChevronRight,
  Maximize2
} from 'lucide-react';

export default function FarmLensShowcase() {
  return (
    <section className="relative bg-[#060c07] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Decorative Structural Grid and Glowing Ambiance */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse [animation-duration:10s]" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3 h-3 animate-spin [animation-duration:15s]" />
            Live Platform Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-4">
            The Operating System for Modern Agronomy
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A real-time look into the integrated diagnostics workflow—fusing computer vision with conversational intelligence.
          </p>
        </div>

        {/* BROWSER/MACBOOK MOCKUP FRAME */}
        <div className="relative rounded-2xl border border-slate-800/80 bg-slate-950/40 p-2 sm:p-3 backdrop-blur-xl shadow-[0_0_60px_rgba(0,0,0,0.8)] max-w-6xl mx-auto group">
          {/* Subtle Outer Neon Frame Aura */}
          <div className="absolute -inset-px bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-transparent rounded-2xl opacity-100 transition-opacity pointer-events-none" />
          
          {/* Browser Window Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f0b] border border-slate-800 border-b-0 rounded-t-xl">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/40 border border-red-600/30" />
              <span className="w-3 h-3 rounded-full bg-amber-500/40 border border-amber-600/30" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/40 border border-emerald-600/30" />
              <span className="ml-4 text-[11px] font-mono text-slate-500 bg-slate-900 px-3 py-0.5 rounded border border-slate-800/60 hidden sm:inline-block">
                app.farmlens.ai/analysis/scan_9024
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 transition-colors" />
            </div>
          </div>

          {/* SAAS DASHBOARD CORE CONTAINER */}
          <div className="relative rounded-b-xl border border-slate-800 bg-[#070b07] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[620px] text-left text-sm">
            
            {/* 1. LEFT SIDEBAR (Span 2) */}
            <div className="md:col-span-2 bg-[#090e09] border-b md:border-b-0 md:border-r border-slate-800/80 p-4 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                {/* Micro Brand Tag */}
                <div className="flex items-center gap-2 px-2 font-bold text-white text-base tracking-tight">
                  <span className="text-xl">🌾</span>
                  <span>FarmLens</span>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1">
                  {[
                    { label: 'Dashboard', icon: LayoutDashboard, active: false },
                    { label: 'New Analysis', icon: ScanLine, active: true },
                    { label: 'History', icon: History, active: false },
                    { label: 'Reports', icon: FileBarChart2, active: false },
                    { label: 'Settings', icon: Settings, active: false },
                  ].map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={idx}
                        type="button"
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-medium text-xs tracking-wide transition-all ${
                          item.active 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${item.active ? 'text-emerald-400' : 'text-slate-500'}`} />
                          <span>{item.label}</span>
                        </div>
                        {item.active && <ChevronRight className="w-3 h-3 text-emerald-400" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* User Identity Mock */}
              <div className="border-t border-slate-900 pt-3 flex items-center gap-3 px-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-xs font-bold text-white font-mono shadow-inner">
                  FD
                </div>
                <div className="hidden lg:block truncate">
                  <p className="text-xs font-semibold text-slate-200 truncate">Fields West Plot</p>
                  <p className="text-[10px] text-slate-500 truncate">ID: premium_tier</p>
                </div>
              </div>
            </div>

            {/* 2. CENTER PANEL: AI CROP ANALYSIS CHAT INTERFACE (Span 6) */}
            <div className="md:col-span-6 p-4 lg:p-6 flex flex-col justify-between bg-slate-950/20 border-b md:border-b-0 md:border-r border-slate-800/80 min-h-[400px]">
              
              {/* Feed Content Area */}
              <div className="space-y-6 overflow-y-auto max-h-[480px] pr-1">
                
                {/* Node Message 1: System Upload Preview */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                    <ImageIcon className="w-4 h-4 text-slate-400" />
                  </div>
                  <div className="space-y-2 w-full">
                    <span className="text-[11px] font-mono text-slate-500">Inspections Terminal • 10:42 AM</span>
                    <div className="border border-slate-800 rounded-xl bg-slate-900/40 p-3 max-w-sm relative group/img overflow-hidden">
                      {/* Fake Image Asset Mesh Overlay */}
                      <div className="aspect-[4/3] rounded-lg bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-slate-900 to-slate-950 border border-slate-800 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#10b981_25%,transparent_25%),linear-gradient(-45deg,#10b981_25%,transparent_25%)] bg-[size:10px_10px]" />
                        <ScanLine className="w-8 h-8 text-amber-500/60 animate-pulse mb-2 z-10" />
                        <span className="text-xs text-slate-300 font-medium font-mono z-10">solanum_lycopersicum_leaf.jpg</span>
                        <span className="text-[10px] text-slate-500 font-mono z-10">Target region: Leaf quadrant 3-B</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Node Message 2: System Generated Diagnosis */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="space-y-1.5 max-w-[85%]">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3" /> FarmLens Engine
                    </span>
                    <div className="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl text-slate-300 leading-relaxed text-xs">
                      I have finalized scanning your uploaded image[cite: 37, 40]. Structural cell deformation and brown concentric rings with surrounding chlorotic halos indicate a confirmed presence of **Tomato Early Blight** (*Alternaria solani*).
                    </div>
                  </div>
                </div>

                {/* Node Message 3: Follow-up Conversation */}
                <div className="flex gap-3 flex-row-reverse text-right">
                  <div className="space-y-1.5 max-w-[85%]">
                    <span className="text-[11px] font-mono text-slate-500 block">Operator</span>
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-300 text-xs text-left">
                      Will this spread via irrigation splash water, and should I strip the lower third leaves now?
                    </div>
                  </div>
                </div>

                {/* Node Message 4: Follow-up Response */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="space-y-1.5 max-w-[85%]">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1 font-semibold">
                      <Sparkles className="w-3 h-3" /> FarmLens Engine
                    </span>
                    <div className="bg-emerald-950/20 border border-emerald-900/40 p-4 rounded-xl text-slate-300 leading-relaxed text-xs">
                      Yes, *Alternaria solani* spores propagate rapidly through dew, rain, and overhead sprinkler irrigation splashes. Stripping the lower infected leaves is highly effective to cut off localized ascending spore pathways.
                    </div>
                  </div>
                </div>

              </div>

              {/* Follow-up Interactive Input Bar */}
              <div className="mt-4 relative">
                <input 
                  type="text" 
                  disabled 
                  placeholder="Ask advisor about soil containment variables..." 
                  className="w-full bg-slate-900/60 border border-slate-800/80 rounded-xl py-3 pl-4 pr-12 text-xs text-slate-400 cursor-not-allowed focus:outline-none"
                />
                <button type="button" className="absolute right-2.5 top-2 w-7 h-7 bg-emerald-950 border border-emerald-800/40 rounded-lg flex items-center justify-center text-emerald-500">
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* 3. RIGHT PANEL: DIAGNOSTICS & PRESCRIPTION MATRIX (Span 4) */}
            <div className="md:col-span-4 p-5 lg:p-6 bg-[#090e09]/40 flex flex-col justify-between gap-6">
              <div className="space-y-5">
                
                {/* Upper Module: Disease Summary Heading */}
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 block mb-1">Telemetry Output</span>
                  <h3 className="text-base font-bold text-slate-200">Tomato Early Blight</h3>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">Vector Code: ALT-SOL-2026</p>
                </div>

                {/* Score Widget Metrics */}
                <div className="bg-slate-900/60 border border-slate-800/80 rounded-xl p-4 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium">Confidence Score</span>
                    <span className="text-2xl font-mono font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      98.4%
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>

                {/* Tactical Protocols Breakdown */}
                <div className="space-y-3.5">
                  {/* Treatment Segment */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Immediate Treatment Plan</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-5">
                      Apply systemic Chlorothalonil or copper octanoate compounds within 24 hours across affected patch zones[cite: 38].
                    </p>
                  </div>

                  {/* Prevention Segment */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-400">
                      <ShieldAlert className="w-3.5 h-3.5" />
                      <span>Prevention Guidance</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed pl-5">
                      Implement strict drip line feeds to keep foliage dry. Enforce a minimum 2-year non-solanaceous crop rotation.
                    </p>
                  </div>

                  {/* Medicine Recommendations Segment */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                      {/* <Pills className="w-3.5 h-3.5" /> */}
                      <span>Medicine Recommendations</span>
                    </div>
                    <div className="pl-5 pt-1 flex flex-wrap gap-1.5">
                      {['Liquid Copper', 'Mancozeb F40', 'Daconil'].map((med, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-300">
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Actions Card Container */}
              <div className="pt-4 border-t border-slate-900">
                <button type="button" className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg text-xs font-semibold text-slate-300 transition-all text-center">
                  Export Analytical PDF Report
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}