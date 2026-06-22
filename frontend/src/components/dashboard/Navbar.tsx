'use client';

import React from 'react';
import { Search, Sun, Moon, Bell, Menu } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (mode: boolean) => void;
  setIsMobileOpen: (open: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode, setIsMobileOpen }: NavbarProps) {
  return (
    <header className="h-[70px] border-b px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30 backdrop-blur-md bg-[#060c07]/80 border-slate-900/80 text-slate-200">
      <div className="flex items-center gap-3">
        <button 
          type="button" 
          onClick={() => setIsMobileOpen(true)}
          className="xl:hidden p-2 rounded-lg bg-slate-900 text-slate-400 border border-slate-800"
        >
          <Menu className="w-4 h-4" />
        </button>
        <div className="text-xs font-mono font-medium tracking-wide">
          <span className="text-slate-500">Dashboard</span>
          <span className="text-slate-700 mx-2">/</span>
          <span className="text-emerald-400 font-semibold">Crop Analysis</span>
        </div>
      </div>

      {/* Central Search Area */}
      <div className="hidden md:flex items-center gap-2 w-full max-w-sm bg-slate-950 border border-slate-900 rounded-xl px-3 py-1.5 focus-within:border-emerald-500/30 transition-all">
        <Search className="w-3.5 h-3.5 text-slate-600" />
        <input 
          type="text" 
          placeholder="Search Analysis..."
          className="w-full bg-transparent text-xs outline-none text-slate-300 placeholder:text-slate-700"
        />
      </div>

      {/* Action Utilities */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-xl border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-slate-200 transition-colors"
        >
          {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
        
        <div className="relative">
          <button type="button" className="p-2 rounded-xl border border-slate-900 bg-slate-950/40 text-slate-400 hover:text-slate-200 transition-colors">
            <Bell className="w-4 h-4" />
          </button>
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full" />
        </div>

        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 border border-emerald-400/20" />
      </div>
    </header>
  );
}