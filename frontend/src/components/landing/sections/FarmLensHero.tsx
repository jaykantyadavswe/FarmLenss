'use client';

import React from 'react';
import { 
  Upload, 
  Bot, 
  ShieldCheck, 
  Sparkles, 
  Play, 
  ArrowRight, 
  Activity, 
  Zap, 
  MessageSquare ,
  ChevronRight 
} from 'lucide-react';

export default function FarmLensHero() {
  return (
    <div className="relative min-h-screen bg-[#060c07] text-slate-100 overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Background Decorative Grids and Light Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      
      {/* Gradient Glowing Orbs */}
      {/* <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" /> */}
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin [animation-duration:10s]" />
          <span>Next-Gen Agricultural Intelligence Platform</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
          <span className="text-emerald-500 flex items-center gap-0.5 cursor-pointer hover:underline font-semibold">
            Live <ArrowRight className="w-3 h-3 inline" />
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.15] mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400">
            Detect Crop Diseases 
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500">
            Before They Spread
          </span>
        </h1>

        {/* Supporting Text */}
        <p className="text-base italic sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 ">
          Upload a crop image and receive instant AI-powered diagnosis, treatment recommendations, prevention strategies, and expert farming guidance.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            type="button"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-medium text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span>Get Started</span>
            <ChevronRight className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <button 
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl font-medium text-slate-300 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
            <span>Watch Demo</span>
          </button>
        </div>

      </div>
    </div>
  );
}