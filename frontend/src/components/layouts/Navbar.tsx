'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  ChevronRight, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export default function FarmLensNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('Features');

  // 1. Monitor layout scrolling position to alternate backdrop opacity styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Dashboard Preview", href: "#dashboard", badge: "New" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled 
        ? 'bg-[#060c07]/80 backdrop-blur-md border-slate-900/80 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3.5' 
        : 'bg-transparent border-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          
          {/* LEFT BLOCK: branding & premium logo vector */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="flex items-center gap-2.5 font-bold text-white text-lg tracking-tight select-none group"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 group-hover:border-emerald-500/50 flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                <Sprout className="w-4.5 h-4.5 text-emerald-400 group-hover:scale-105 transition-transform" />
              </div>
              <span className="bg-gradient-to-b from-white to-slate-200 bg-clip-text text-transparent group-hover:text-white transition-colors">
                FarmLens
              </span>
            </a>
          </div>

          {/* CENTER BLOCK: desktop navigation link matrix layout */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-950/20 border border-slate-900/40 p-1.5 rounded-full backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.label)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 flex items-center gap-1.5 group select-none ${
                    isActive 
                      ? 'text-white' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {/* Active highlight pill sliding visual simulation overlay */}
                  {isActive && (
                    <span className="absolute inset-0 bg-slate-900 border border-slate-800/60 rounded-full -z-10 shadow-inner" />
                  )}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono font-bold uppercase tracking-wider scale-95">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </div>

          {/* RIGHT BLOCK: configuration metrics, buttons & toggles mapping */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Soft Theme Toggle Anchor */}
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-9 h-9 rounded-xl border border-slate-900/60 hover:border-slate-800 bg-slate-950/40 text-slate-400 hover:text-slate-200 flex items-center justify-center transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Toggle visual theme state"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Ghost Login Mechanism */}
            <a 
              href="#login"
              className="text-xs font-semibold text-slate-400 hover:text-white transition-colors px-3 py-2 cursor-pointer"
            >
              Log in
            </a>

            {/* High-Impact Glowing Emerald Button Trigger */}
            <a
              href="#get-started"
              className="relative inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 font-semibold text-xs text-[#060c07] shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.4)] transition-all cursor-pointer group active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* MOBILE TOGGLE DRAWER HAMBURGER TRIGGER BUTTON */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-9 h-9 rounded-xl border border-slate-900 bg-slate-950/40 text-slate-400 flex items-center justify-center transition-all"
              aria-label="Toggle theme viewport"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-9 h-9 rounded-xl border border-slate-900 bg-slate-950 text-slate-300 flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Toggle main menu navigation grid"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* GLASSMORPHISM MOBILE DROPDOWN SCREEN LAYER OVERLAY */}
      <div className={`lg:hidden fixed inset-x-4 top-20 z-50 transition-all duration-300 origin-top ${
        isMobileMenuOpen 
          ? 'opacity-100 scale-100 pointer-events-auto' 
          : 'opacity-0 scale-95 pointer-events-none'
      }`}>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/90 backdrop-blur-2xl p-5 shadow-2xl space-y-6">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.label);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all ${
                    isActive 
                      ? 'bg-slate-900/60 text-emerald-400 font-semibold' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/30'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{link.label}</span>
                    {link.badge && (
                      <span className="text-[8px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-1 py-0.2 rounded">
                        {link.badge}
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-30" />
                </a>
              );
            })}
          </div>

          {/* Mobile CTA Trigger Button Actions Group */}
          <div className="pt-4 border-t border-slate-900 flex flex-col gap-3">
            <a
              href="#login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-center text-xs font-semibold text-slate-300 transition-all"
            >
              Log in to Terminal
            </a>
            <a
              href="#get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-center text-xs font-bold text-[#060c07] shadow-xl transition-all flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 fill-[#060c07]/20" />
              <span>Initialize Free Account</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}