'use client';

import React from 'react';
import { ScanLine, RefreshCw, AlertTriangle } from 'lucide-react';

// Loading State
export function LoadingState() {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center max-w-xs mx-auto py-20 space-y-6">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-slate-900 border-t-emerald-500 animate-spin" />
      </div>
      <div className="space-y-2 font-mono text-[11px] text-slate-500">
        <p className="flex items-center gap-2 justify-center text-emerald-400">
          <RefreshCw className="w-3 h-3 animate-spin" /> Analyzing Crop Image...
        </p>
        <p className="opacity-70">Detecting Disease...</p>
        <p className="opacity-40">Generating Recommendations...</p>
      </div>
    </div>
  );
}

// Empty State
export function EmptyState({ onStart }: { onStart: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center max-w-sm mx-auto py-20 space-y-4">
      <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-900 flex items-center justify-center text-slate-700 shadow-inner">
        <ScanLine className="w-8 h-8 text-slate-600 animate-pulse" />
      </div>
      <div>
        <h3 className="text-sm font-bold text-white tracking-tight">Upload a crop image to start AI analysis.</h3>
      </div>
      <button 
        type="button" 
        onClick={onStart}
        className="px-4 py-2 bg-emerald-500 text-xs font-bold rounded-xl text-[#060c07] hover:bg-emerald-400 transition-colors"
      >
        Start New Analysis
      </button>
    </div>
  );
}

// Error State
export function ErrorState({ onReset }: { onReset: () => void }) {
  return (
    <div className="h-full flex items-center justify-center py-20 px-4">
      <div className="max-w-md bg-red-950/10 border border-red-900/30 p-6 rounded-2xl flex gap-4 items-start shadow-2xl backdrop-blur-sm">
        <div className="p-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex-shrink-0">
          <AlertTriangle className="w-5 h-5" />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-red-200">Friendly Error Card</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            We couldn't analyze this image. Please upload a clear crop photo and try again.
          </p>
          <button 
            type="button" 
            onClick={onReset}
            className="mt-2 px-3 py-1.5 bg-slate-950 hover:bg-slate-900 border border-slate-900 text-[11px] font-mono rounded-lg text-slate-300 transition-colors"
          >
            Retry Analysis Session
          </button>
        </div>
      </div>
    </div>
  );
}