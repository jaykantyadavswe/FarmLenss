'use client';

import React from 'react';
import { 
  Upload, 
  Cpu, 
  FileText, 
  MessageSquare, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge: string;
  glowColor: string;
}

export default function FarmLensProcess() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Crop Image",
      description: "Snap and upload a clear photo of your affected crop leaf or stem directly from your smartphone or drone dashboard.",
      badge: "Instant Upload",
      glowColor: "from-emerald-500/20 to-transparent"
    },
    {
      number: "02",
      icon: Cpu,
      title: "AI Analyzes Disease",
      description: "Our neural network processes cellular patterns, instantly matching them against a database of thousands of botanical pathogens.",
      badge: "95% Accuracy",
      glowColor: "from-teal-500/20 to-transparent"
    },
    {
      number: "03",
      icon: FileText,
      title: "Receive Treatment Plan",
      description: "Get immediate, localized prescriptions including organic mitigations, chemical applications, and preventative guidelines.",
      badge: "Actionable Insights",
      glowColor: "from-amber-500/20 to-transparent"
    },
    {
      number: "04",
      icon: MessageSquare,
      title: "Chat With AI Expert",
      description: "Deep-dive into your diagnosis with our agronomy copilot to adjust variables for weather, soil, and specific crop variations.",
      badge: "24/7 Consultation",
      glowColor: "from-purple-500/20 to-transparent"
    }
  ];

  return (
    <section className="relative bg-[#060c07] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Structural Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-40 pointer-events-none" />
      
      {/* Ambient Radial Background Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none animate-pulse [animation-duration:8s]" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-emerald-400 animate-spin [animation-duration:12s]" />
            Workflow Engine
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-4">
            Four Steps to Crop Recovery
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            From initial field observation to custom biochemical remedy strategies—streamlined, rapid, and fully automated by agricultural AI.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* DESKTOP CONNECTING LINE (Hidden on Mobile) */}
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-emerald-500/10 via-emerald-500/40 to-purple-500/10 hidden lg:block pointer-events-none">
            {/* Animated Laser Pulse Effect */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[shimmer_3s_infinite_linear]" style={{ backgroundSize: '200% 100%' }} />
          </div>

          {/* MOBILE CONNECTING LINE (Hidden on Desktop) */}
          <div className="absolute top-12 bottom-12 left-10 w-[2px] bg-gradient-to-b from-emerald-500/30 via-teal-500/30 to-purple-500/10 block lg:hidden pointer-events-none" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="group relative flex flex-col items-start lg:items-center text-left lg:text-center pl-20 lg:pl-0">
                  
                  {/* STEP INDICATOR NODE WITH ICON */}
                  <div className="absolute left-2 lg:left-auto lg:relative top-0 mb-6 z-20">
                    <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-emerald-500/40 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] flex items-center justify-center transition-all duration-500 relative backdrop-blur-xl">
                      
                      {/* Floating Step Number */}
                      <span className="absolute -top-2.5 -right-2.5 text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-slate-400 px-1.5 py-0.5 rounded-md">
                        {step.number}
                      </span>

                      {/* Icon */}
                      <IconComponent className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>

                    {/* Desktop Step Spacer Arrows */}
                    {index < 3 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-slate-700 hidden lg:group-hover:block pointer-events-none animate-pulse">
                        <ArrowRight className="w-4 h-4 text-emerald-500/40" />
                      </div>
                    )}
                  </div>

                  {/* VISUAL ILLUSTRATION MOCKUP CARD */}
                  <div className="w-full mt-2 rounded-2xl border border-slate-800/60 bg-slate-950/20 p-5 backdrop-blur-xl transition-all duration-300 hover:border-slate-700/80 hover:bg-slate-950/40 hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden relative">
                    {/* Interior Radial Ambient Aura on Hover */}
                    <div className={`absolute -inset-px rounded-2xl bg-gradient-to-b ${step.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} style={{ maskImage: 'radial-gradient(circle at 50% 0%, white, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at 50% 0%, white, transparent 60%)' }} />

                    <div className="relative z-10">
                      {/* Step Micro Badge */}
                      <div className="mb-4">
                        <span className="text-[10px] font-mono font-medium tracking-wider uppercase px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all">
                          {step.badge}
                        </span>
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {step.description}
                      </p>
                    </div>

                    {/* Edge Accent Decoration */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent group-hover:via-emerald-500/20 transition-all duration-500" />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Core Operational Trust Factor */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-slate-500">
            Average processing latency: <span className="text-emerald-400 font-bold">~1.4 seconds</span> per diagnostics load.
          </p>
        </div>

      </div>
    </section>
  );
}