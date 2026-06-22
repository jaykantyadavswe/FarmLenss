'use client';

import React, { useState } from 'react';
import { 
  Send, 
//   Twitter, 
//   Linkedin, 
//   Github, 
  Sprout, 
  ArrowUpRight, 
  Globe, 
  Heart 
} from 'lucide-react';

export default function FarmLensFooter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const footerLinks = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#", badge: null },
        { label: "Pricing", href: "#", badge: null },
        { label: "AI Analysis", href: "#", badge: "Live" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#", badge: null },
        { label: "Blog", href: "#", badge: null },
        { label: "Help Center", href: "#", badge: null }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#", badge: null },
        { label: "Contact", href: "#", badge: null },
        { label: "Careers", href: "#", badge: "Hiring" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#", badge: null },
        { label: "Terms of Service", href: "#", badge: null }
      ]
    }
  ];

  return (
    <footer className="relative bg-[#060c07] text-slate-400 pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-900/80 overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-300">
      
      {/* Structural Backdrop Mesh Grid and Ambient Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2012_1px,transparent_1px),linear-gradient(to_bottom,#0f2012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_100%,#000_80%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* UPPER PANEL: CORE LOGO & LINKS STRUCTURE */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Brand Presentation & Newsletter Module */}
          <div className="md:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* FarmLens Logo */}
              <div className="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight select-none">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <Sprout className="w-4 h-4 text-emerald-400" />
                </div>
                <span>FarmLens</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm">
                Next-generation computer vision and agronomy intelligence infrastructure built to isolate plant pathogens and secure global agriculture yields.
              </p>
            </div>

            {/* Newsletter Segment */}
            <div className="space-y-3 pt-4">
              <label htmlFor="footer-email" className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-300 block">
                Subscribe to Agronomy Briefing
              </label>
              
              {submitted ? (
                <div className="text-xs font-medium text-emerald-400 bg-emerald-950/20 border border-emerald-900/40 px-3 py-2.5 rounded-xl max-w-sm">
                  ✓ Successfully subscribed to telemetry alerts.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="relative max-w-sm">
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter operator email..."
                    className="w-full bg-slate-950 border border-slate-800/80 rounded-xl py-2.5 pl-3.5 pr-12 text-xs text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                  />
                  <button 
                    type="submit" 
                    className="absolute right-1.5 top-1.5 w-7 h-7 bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/20 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
                    aria-label="Submit newsletter subscription"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Nav Links Navigation Matrix mapping */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((group, groupIdx) => (
              <div key={groupIdx} className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
                  {group.title}
                </h3>
                <ul className="space-y-2.5">
                  {group.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a 
                        href={link.href}
                        className="text-xs sm:text-sm text-slate-500 hover:text-slate-200 transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="text-[9px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1.5 py-0.2 rounded">
                            {link.badge}
                          </span>
                        )}
                        {group.title === "Resources" && (
                          <ArrowUpRight className="w-3 h-3 text-slate-700 group-hover:text-slate-400 transition-colors opacity-0 group-hover:opacity-100" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* LOWER PANEL: METADATA & SYSTEM ASSURANCE RIGGING */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Copyright Metadata block */}
          <div className="text-slate-600 font-mono text-[11px] order-2 sm:order-1">
            &copy; {new Date().getFullYear()} FarmLens AI Technologies, Inc. All rights reserved.
          </div>

          {/* Social vectors & localization shortcuts */}
          <div className="flex items-center gap-6 order-1 sm:order-2">
            
            {/* Social Icons List */}
            {/* <div className="flex items-center gap-4">
              {[
                // { icon: Twitter, label: "Twitter Profile", href: "#" },
                // { icon: Linkedin, label: "LinkedIn Company Profile", href: "#" },
                { icon: Github, label: "GitHub Open Source Orgs", href: "#" }
              ].map((social, sIdx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={sIdx}
                    href={social.href}
                    aria-label={social.label}
                    className="w-8 h-8 rounded-lg bg-slate-950/40 border border-slate-900 hover:border-slate-800 text-slate-500 hover:text-slate-300 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div> */}

            {/* Fake Micro Localization Selector */}
            <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono text-slate-600 bg-slate-950/30 border border-slate-900 px-2.5 py-1 rounded-lg">
              <Globe className="w-3 h-3 text-slate-600" />
              <span>US-EN</span>
            </div>

          </div>

        </div>

        {/* Attribution Subtext Indicator */}
        <div className="mt-6 text-center text-[10px] font-mono text-slate-700/60 flex items-center justify-center gap-1">
          <span>Engineered with care for global food security</span>
          <Heart className="w-2.5 h-2.5 text-emerald-800/40 fill-emerald-800/20" />
        </div>

      </div>
    </footer>
  );
}