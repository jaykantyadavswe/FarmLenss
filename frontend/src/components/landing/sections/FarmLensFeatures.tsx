'use client';

import React from 'react';
import { 
  Scan, 
  Bot, 
  Zap, 
  ShieldCheck, 
  History, 
  FileDown, 
  MapPin, 
  CloudSun,
  ArrowUpRight
} from 'lucide-react';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  badge?: string;
  glowColor: string;
}

export default function FarmLensFeatures() {
  const features: FeatureItem[] = [
    {
      icon: Scan,
      title: "Crop Disease Detection",
      description: "Upload high-resolution field images to execute rapid, molecular-level scanning for fungal, bacterial, and viral crop pathogens.",
      badge: "95% Accuracy",
      glowColor: "group-hover:bg-emerald-500/10"
    },
    {
      icon: Bot,
      title: "AI Agriculture Assistant",
      description: "Engage with an LLM-trained agronomy copilot prepared to deliver contextual troubleshooting and real-time field data interpretation.",
      badge: "24/7 Live",
      glowColor: "group-hover:bg-purple-500/10"
    },
    {
      icon: Zap,
      title: "Instant Recommendations",
      description: "Receive targeted crop prescriptions and verified chemical or organic treatment solutions immediately upon positive diagnosis.",
      glowColor: "group-hover:bg-amber-500/10"
    },
    {
      icon: ShieldCheck,
      title: "Disease Prevention Guidance",
      description: "Deploy proactive bio-security protocols, crop rotation plans, and cultural control strategies to block seasonal outbreaks.",
      glowColor: "group-hover:bg-teal-500/10"
    },
    {
      icon: History,
      title: "Analysis History",
      description: "Log historical field inspections automatically over a chronological timeline to accurately monitor localized infection vector patterns.",
      glowColor: "group-hover:bg-blue-500/10"
    },
    {
      icon: FileDown,
      title: "PDF Reports",
      description: "Generate executive, client-ready analytical documentation complete with high-res diagnostic metadata, metrics, and compliance logs.",
      glowColor: "group-hover:bg-slate-500/10"
    },
    {
      icon: MapPin,
      title: "Nearby Agriculture Stores",
      description: "Locate certified supply storefronts, cooperative distributors, and expert advisory centers instantly via geo-referenced indexing.",
      glowColor: "group-hover:bg-red-500/10"
    },
    {
      icon: CloudSun,
      title: "Weather Insights",
      description: "Leverage localized hyper-predictive weather forecasting combined with predictive modeling to calculate future pathogen risk rates.",
      badge: "AI Powered",
      glowColor: "group-hover:bg-sky-500/10"
    }
  ];

  return (
    <section className="relative bg-[#060c07] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Decorative Grid Mesh Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-40 pointer-events-none" />
      
      {/* Dynamic Background Glow Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Core Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-400 mb-4">
            Engineered for Precision Agriculture
          </h2>
          <p className="text-base sm:text-lg text-slate-400">
            A comprehensive analytical ecosystem built to diagnose, predict, and mitigate biological threats across your entire agricultural footprint[cite: 16].
          </p>
        </div>

        {/* 8-Card Feature Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-950/30 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.08)] flex flex-col justify-between overflow-hidden"
              >
                {/* Dynamic Card Internal Radial Glow */}
                <div className={`absolute -inset-px rounded-2xl transition-colors duration-500 pointer-events-none ${feature.glowColor}`} style={{ maskImage: 'radial-gradient(circle at 50% 20%, white, transparent 60%)', WebkitMaskImage: 'radial-gradient(circle at 50% 20%, white, transparent 60%)' }} />

                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20 flex items-center justify-center transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                    </div>
                    
                    {feature.badge ? (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        {feature.badge}
                      </span>
                    ) : (
                      <ArrowUpRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    )}
                  </div>

                  {/* Feature Content */}
                  <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors duration-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-200 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Subtle Decorative Accent Baseline Accent */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent absolute bottom-0 left-0 group-hover:via-emerald-500/20 transition-all duration-500" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}