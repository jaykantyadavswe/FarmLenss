'use client';

import React, { useEffect, useState } from 'react';
import { 
  Scan, 
  ShieldCheck, 
  Users, 
  Sprout, 
  TrendingUp, 
  Sparkles 
} from 'lucide-react';

interface StatItem {
  targetNumber: number;
  suffix: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  glowColor: string;
  accentText: string;
}

export default function FarmLensStats() {
  const stats: StatItem[] = [
    {
      targetNumber: 10000,
      suffix: "+",
      icon: Scan,
      title: "Crop Analyses",
      description: "High-resolution molecular scans executed with zero latency across distributed farm grids.",
      glowColor: "group-hover:bg-emerald-500/10",
      accentText: "text-emerald-400"
    },
    {
      targetNumber: 95,
      suffix: "%",
      icon: ShieldCheck,
      title: "Detection Accuracy",
      description: "Neural network pattern recognition precision verified by certified agronomy institutions.",
      glowColor: "group-hover:bg-teal-500/10",
      accentText: "text-teal-400"
    },
    {
      targetNumber: 5000,
      suffix: "+",
      icon: Users,
      title: "Farmers Assisted",
      description: "Empowering individual smallholders and industrial enterprises globally.",
      glowColor: "group-hover:bg-amber-500/10",
      accentText: "text-amber-400"
    },
    {
      targetNumber: 50,
      suffix: "+",
      icon: Sprout,
      title: "Supported Crop Types",
      description: "Comprehensive diagnostic profiles covering major grains, tubers, and cash crops.",
      glowColor: "group-hover:bg-purple-500/10",
      accentText: "text-purple-400"
    }
  ];

  // Client-side visual counter increment simulation
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out quad function for smooth deceleration
      const easeProgress = progress * (2 - progress);

      const nextCounts = stats.map(stat => 
        Math.floor(easeProgress * stat.targetNumber)
      );

      setCounts(nextCounts);

      if (frame >= totalFrames) {
        setCounts(stats.map(s => s.targetNumber));
        clearInterval(timer);
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  // Helper to format numbers with commas
  const formatNum = (num: number) => num.toLocaleString();

  return (
    <section className="relative bg-[#060c07] text-slate-100 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Background Mesh Overlay and Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Core Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative Copy */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
              Platform Telemetry
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 leading-tight">
              Validated Metric Infrastructure
            </h2>
            
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Our automated network consistently monitors field dynamics, confirming high accuracy benchmarks that support crop yields worldwide.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 border border-slate-900 bg-slate-950/40 px-3 py-2 rounded-xl">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
                <span>Live Data Sync: Active</span>
              </div>
            </div>
          </div>

          {/* Right Block: 4-Card Responsive Metric Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={idx}
                  className="group relative rounded-2xl border border-slate-800/80 bg-slate-950/30 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between min-h-[200px]"
                >
                  {/* Dynamic Radial Hover Back-glow */}
                  <div className={`absolute -inset-px rounded-2xl transition-colors duration-500 pointer-events-none ${stat.glowColor}`} style={{ maskImage: 'radial-gradient(circle at 20% 20%, white, transparent 65%)', WebkitMaskImage: 'radial-gradient(circle at 20% 20%, white, transparent 65%)' }} />

                  {/* Header: Icon Component */}
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/20 group-hover:bg-emerald-950/10 flex items-center justify-center transition-all duration-300 mb-4 relative z-10">
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>

                  {/* Number & Text Stack */}
                  <div className="relative z-10 mt-auto">
                    <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-1.5 font-mono flex items-baseline">
                      <span className={`bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent`}>
                        {formatNum(counts[idx])}
                      </span>
                      <span className={stat.accentText}>{stat.suffix}</span>
                    </div>
                    
                    <h3 className="text-sm font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">
                      {stat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                      {stat.description}
                    </p>
                  </div>

                  {/* Micro Baseline Accent Border Line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent absolute bottom-0 left-0 group-hover:via-emerald-500/20 transition-all duration-500" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}