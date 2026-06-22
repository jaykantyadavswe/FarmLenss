'use client';

import React from 'react';
import { Sprout, Plus, LayoutDashboard, ScanLine, History, FileBarChart, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentViewState: string;
  setViewState: (state: 'empty' | 'loading' | 'chat' | 'error') => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  currentViewState,
  setViewState,
  isMobileOpen,
  setIsMobileOpen
}: SidebarProps) {
  const menuItems = [
    { label: 'Dashboard', icon: LayoutDashboard },
    { label: 'Crop Analysis', icon: ScanLine },
    { label: 'History', icon: History, count: 4 },
    { label: 'Reports', icon: FileBarChart },
    { label: 'Settings', icon: Settings }
  ];

  const historicalAnalyses = [
    { title: 'Fall Armyworm Detection', id: 'chat' },
    { title: 'Tomato Leaf Curl Virus', id: 'tomato' },
    { title: 'Wheat Rust Analysis', id: 'wheat' },
    { title: 'Rice Blast Disease', id: 'rice' }
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-40 w-[280px] border-r flex flex-col justify-between p-4 transition-transform duration-300 bg-[#070d08] border-emerald-950 xl:translate-x-0 ${
      isMobileOpen ? 'translate-x-0' : '-translate-x-full xl:translate-x-0'
    }`}>
      <div className="space-y-6">
        {/* Brand Logo */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 font-bold tracking-tight text-white select-none">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
              <Sprout className="w-4.5 h-4.5 text-emerald-400" />
            </div>
            <span className="text-lg font-bold text-white">FarmLens</span>
          </div>
        </div>

        {/* Primary Action Button */}
        <button
          type="button"
          onClick={() => setViewState('empty')}
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-xs font-bold text-[#060c07] shadow-lg shadow-emerald-500/10 transition-all group"
        >
          <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
          <span>New Analysis</span>
        </button>

        {/* Primary Navigation */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveTab(item.label)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  isActive 
                    ? 'bg-slate-900 text-white border border-slate-800/80 shadow-inner' 
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span>{item.label}</span>
                </div>
                {item.count && (
                  <span className="text-[10px] px-1.5 py-0.2 font-mono rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* History Section Component Breakdown */}
        <div className="pt-4 border-t border-slate-900/60 space-y-2.5">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 block px-1">
            Previous Analyses
          </span>
          <div className="space-y-1">
            {historicalAnalyses.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setViewState('chat')}
                className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs truncate font-medium block transition-colors ${
                  item.id === 'chat' && currentViewState === 'chat'
                    ? 'text-emerald-400 bg-emerald-950/20 border border-emerald-900/30'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* User Card Area */}
      <div className="p-3 rounded-xl border bg-slate-950 border-slate-900 flex items-center justify-between">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold font-mono text-emerald-400">
            JP
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold truncate text-slate-200">JP</p>
            <span className="text-[9px] font-mono font-bold text-emerald-500 tracking-wide uppercase bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/10">
              Free Plan
            </span>
          </div>
        </div>
        <button 
          type="button"
          onClick={() => setViewState('error')}
          className="p-1.5 text-slate-500 hover:text-red-400 rounded-lg transition-colors"
          title="Logout / Trigger Error View"
        >
          <LogOut className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}