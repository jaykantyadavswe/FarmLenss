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
  MessageSquare 
} from 'lucide-react';

export default function FarmLensHero() {
  return (
    <div className="relative min-h-screen bg-[#060c07] text-slate-100 overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Background Decorative Grids and Light Orbs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />
      
      {/* Gradient Glowing Orbs */}
      <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 text-center">
        
        {/* Announcement Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-medium backdrop-blur-md mb-8">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 animate-spin [animation-duration:10s]" />
          <span>Next-Gen Agricultural Intelligence Platform</span>
          <span className="w-1 h-1 rounded-full bg-emerald-500" />
          <span className="text-emerald-500 flex items-center gap-0.5 cursor-pointer hover:underline font-semibold">
            v2.0 Live <ArrowRight className="w-3 h-3 inline" />
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
        <p className="text-base sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          Upload a crop image and receive instant AI-powered diagnosis, treatment recommendations, prevention strategies, and expert farming guidance.
        </p>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button 
            type="button"
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-medium text-white shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
          >
            <Upload className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span>Start Free Analysis</span>
          </button>
          
          <button 
            type="button"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl font-medium text-slate-300 transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
          >
            <Play className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
            <span>Watch Demo</span>
          </button>
        </div>

        {/* Interactive Dashboard Mockup Area */}
        <div className="relative mt-12 mx-auto max-w-6xl rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur opacity-30 pointer-events-none" />
          
          {/* Main Dashboard Layout */}
          <div className="relative rounded-xl border border-slate-800 bg-[#0a0f0b] overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[520px] text-left">
            
            {/* Left Panel: Image Upload & Diagnosis Output */}
            <div className="lg:col-span-7 p-6 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">Analysis Engine Live</span>
                  </div>
                  <span className="text-xs text-slate-500">Terminal ID: FL-902</span>
                </div>
                
                {/* File Upload Simulation */}
                <div className="border border-dashed border-emerald-500/30 rounded-xl bg-emerald-950/10 p-8 text-center flex flex-col items-center justify-center group cursor-pointer hover:bg-emerald-950/20 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-emerald-400" />
                  </div>
                  <p className="text-sm font-medium text-slate-300 mb-1">tomato_leaf_blight_scan.jpg</p>
                  <p className="text-xs text-slate-500">Image uploaded successfully (2.4 MB)</p>
                </div>
              </div>

              {/* Live Diagnosis Widget */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wide bg-amber-400/10 px-2 py-0.5 rounded">High Probability</span>
                    <h4 className="text-lg font-bold text-white mt-1.5">Early Tomato Blight Detected</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400">Confidence Score</span>
                    <div className="text-xl font-mono font-bold text-emerald-400">98.4%</div>
                  </div>
                </div>
                <div className="space-y-2 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Pathogen: Alternaria solani fungal spores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Action Plan: Apply copper-based fungicide treatments to prevent cellular structural spread.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Panel: AI Copilot Conversational Chat */}
            <div className="lg:col-span-5 p-6 bg-slate-950/50 flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 pb-4 border-b border-slate-900">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">FarmLens Copilot</h4>
                    <p className="text-[10px] text-emerald-400 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" /> Online & Monitoring
                    </p>
                  </div>
                </div>

                {/* AI Chat History Simulation */}
                <div className="space-y-4 mt-4 text-xs">
                  <div className="flex gap-2.5 max-w-[85%]">
                    <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl text-slate-300">
                      How fast can early blight destroy my entire tomato plot if left untreated?
                    </div>
                  </div>
                  
                  <div className="flex gap-2.5 max-w-[90%] ml-auto flex-row-reverse">
                    <div className="bg-emerald-950/40 border border-emerald-800/40 p-3 rounded-xl text-slate-200">
                      <p className="font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Copilot
                      </p>
                      Early blight can cause severe defoliation within 7–14 days in hot, humid conditions, reducing your harvest yield by up to 50%. Isolate infected plants and reduce overhead irrigation immediately.
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Input Field Container */}
              <div className="relative">
                <input 
                  type="text" 
                  disabled 
                  placeholder="Ask advisor about prevention protocols..." 
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl py-3 pl-4 pr-10 text-xs text-slate-400 cursor-not-allowed focus:outline-none"
                />
                <MessageSquare className="w-4 h-4 text-slate-500 absolute right-3 top-3.5" />
              </div>
            </div>
          </div>

          {/* FLOATING FEATURE BADGES */}
          {/* Badge 1: AI Diagnosis */}
          <div className="absolute -top-6 -left-4 sm:left-10 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md animate-bounce [animation-duration:6s]">
            <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <Bot className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Engine</p>
              <p className="text-xs font-semibold text-white">AI Diagnosis</p>
            </div>
          </div>

          {/* Badge 2: 95% Accuracy */}
          <div className="absolute top-1/4 -right-4 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl shadow-2xl hidden sm:flex items-center gap-2.5 backdrop-blur-md">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Verified</p>
              <p className="text-xs font-semibold text-white">95% Accuracy</p>
            </div>
          </div>

          {/* Badge 3: Instant Reports */}
          <div className="absolute -bottom-5 -left-2 sm:left-1/4 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
              <Activity className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Delivery</p>
              <p className="text-xs font-semibold text-white">Instant Reports</p>
            </div>
          </div>

          {/* Badge 4: Smart Recommendations */}
          <div className="absolute bottom-12 -right-6 bg-slate-900/90 border border-slate-800 px-4 py-2.5 rounded-xl shadow-2xl hidden md:flex items-center gap-2.5 backdrop-blur-md">
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <Zap className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] uppercase text-slate-500 font-bold tracking-wider">Actionable</p>
              <p className="text-xs font-semibold text-white">Smart Recommendations</p>
            </div>
          </div>

        </div>

        {/* TRUST INDICATORS SECTION */}
        <div className="mt-28 pt-10 border-t border-slate-900/60 max-w-5xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-8">
            Empowering Precision Agricultural Infrastructure at Scale
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center">
            
            <div className="p-5 rounded-xl bg-slate-950/30 border border-slate-900/50 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">10,000+</div>
              <div className="text-xs text-slate-400 font-medium">Farmers & Agribusinesses</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/30 border border-slate-900/50 backdrop-blur-sm relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-0.5 text-[9px] text-emerald-400 font-mono font-bold uppercase tracking-wider"> Live Tracked </div>
              <div className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight mb-1">50,000+</div>
              <div className="text-xs text-slate-400 font-medium">Crop Analyses Completed</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-950/30 border border-slate-900/50 backdrop-blur-sm">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1">95%</div>
              <div className="text-xs text-slate-400 font-medium">Accuracy Percentage Verified</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}