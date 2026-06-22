'use client';

import React from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Scan, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Leaf 
} from 'lucide-react';

export default function FarmLensCTA() {
  return (
    <section className="relative bg-[#060c07] text-slate-100 py-28 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* 1. STRUCTURAL BACKGROUND MESH AND AMBIENT ORBS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-25 pointer-events-none" />
      
      {/* Hyper-glowing Core Gradient Behind Content */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        
        {/* 2. FLOATING ABSTRACT AGRI-TECH ILLUSTRATIONS (Glassmorphism Cards) */}
        {/* Left Floating Node */}
        <div className="absolute left-[-8%] top-[15%] hidden xl:flex items-center gap-3 bg-slate-950/40 border border-slate-800 p-3.5 rounded-xl backdrop-blur-xl animate-bounce [animation-duration:6s] pointer-events-none shadow-2xl">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <Scan className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-[11px] font-mono text-slate-400">Pathogen Scan</p>
            <p className="text-xs font-bold text-white">Active Telemetry</p>
          </div>
        </div>

        {/* Right Floating Node */}
        <div className="absolute right-[-6%] bottom-[20%] hidden xl:flex items-center gap-3 bg-slate-950/40 border border-slate-800 p-3.5 rounded-xl backdrop-blur-xl animate-bounce [animation-duration:7s] [animation-delay:1s] pointer-events-none shadow-2xl">
          <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center">
            <Leaf className="w-4 h-4 text-teal-400" />
          </div>
          <div>
            <p className="text-[11px] font-mono text-slate-400">Health Index</p>
            <p className="text-xs font-bold text-teal-400">98.4% Precision</p>
          </div>
        </div>

        {/* 3. MAIN CONVERSION CONTAINER */}
        <div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/60 to-slate-950/20 p-8 sm:p-12 lg:p-16 backdrop-blur-2xl text-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Subtle Corner Glow Accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

          {/* Micro Ribbon Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-6 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            Instant Deployment
          </div>

          {/* Hero Headline */}
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400 max-w-3xl mx-auto mb-6 leading-[1.1]">
            Protect Your Crops With AI
          </h2>

          {/* Subheadline Text */}
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Start analyzing crop diseases instantly and receive expert recommendations in seconds.
          </p>

          {/* 4. DUAL CTA BUTTON ACTIONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto relative z-10">
            {/* Primary Action Button */}
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 font-semibold text-sm text-[#060c07] shadow-[0_4px_20px_rgba(16,185,129,0.3)] transition-all active:scale-[0.98] group shrink-0"
            >
              <span>Start Free Analysis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Secondary Action Button */}
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white font-semibold text-sm transition-all active:scale-[0.98] group"
            >
              <Calendar className="w-4 h-4 text-slate-500 group-hover:text-slate-400 transition-colors" />
              <span>Schedule Demo</span>
            </button>
          </div>

          {/* 5. LOW-FRICTION TRUST ASSURANCES */}
          <div className="mt-12 pt-8 border-t border-slate-900/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "No credit card required",
              "Instant setup setup",
              "95% Verified accuracy"
            ].map((assurance, index) => (
              <div key={index} className="flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60" />
                <span>{assurance}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}