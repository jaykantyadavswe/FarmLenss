'use client';

import React from 'react';
import { ShieldAlert, CheckCircle, ArrowUpRight, FileText, Download, Store } from 'lucide-react';

export default function RightPanel() {
  return (
    <section className="col-span-1 lg:col-span-4 p-4 sm:p-6 space-y-4 max-h-[calc(100vh-70px)] overflow-y-auto bg-slate-950/20">
      <div className="flex items-center justify-between pb-2 border-b border-slate-900/60">
        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
          Structured Data Summary
        </span>
        <span className="text-[10px] font-mono text-slate-600">ID: #FL-94</span>
      </div>

      {/* Card 1: Main Metric Overview */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono text-slate-500 block uppercase">Disease</span>
            <h4 className="text-sm font-bold text-white tracking-tight mt-0.5">Fall Armyworm</h4>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-mono text-slate-500 block uppercase">Confidence</span>
            <span className="text-xs font-bold text-emerald-400 font-mono block mt-0.5">94%</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-900/60 text-xs">
          <div>
            <span className="text-[10px] font-mono text-slate-600 block">Severity</span>
            <span className="text-amber-400 font-semibold inline-flex items-center gap-1 mt-0.5">
              <ShieldAlert className="w-3 h-3" /> Medium
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-slate-600 block">Status</span>
            <span className="text-emerald-400 font-semibold inline-flex items-center gap-1 mt-0.5">
              <CheckCircle className="w-3 h-3" /> Detected
            </span>
          </div>
        </div>
      </div>

      {/* Card 2: Cause */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4 space-y-1.5">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block">Cause</span>
        <p className="text-xs text-slate-400 leading-relaxed">
          Spodoptera frugiperda larvae feeding on corn leaves.
        </p>
      </div>

      {/* Card 3: Recommended Treatment */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4 space-y-2.5">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block">Recommended Treatment</span>
        <div className="space-y-1.5 text-xs text-slate-300">
          {['Emamectin Benzoate', 'Chlorantraniliprole'].map((treatment, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-900/60">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{treatment}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 4: Prevention Tips */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4 space-y-2.5">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block">Prevention Tips</span>
        <div className="space-y-1.5 text-xs text-slate-300">
          {['Weekly field monitoring', 'Remove infected plants', 'Use pheromone traps'].map((tip, idx) => (
            <div key={idx} className="flex items-center gap-2 bg-slate-950 p-2 rounded-lg border border-slate-900/60">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card 5: Recommended Medicines */}
      <div className="bg-slate-950/40 border border-slate-900 rounded-xl p-4 space-y-2.5">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wide block">Recommended Medicines</span>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {['Coragen', 'Proclaim', 'Neem Oil'].map((med, idx) => (
            <div key={idx} className="p-2 bg-slate-950 rounded-lg border border-slate-900/80 font-medium text-slate-400 text-center">
              {med}
            </div>
          ))}
        </div>
      </div>

      {/* Card 6: Quick Actions */}
      <div className="space-y-2 pt-2">
        <button type="button" className="w-full flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 transition-colors">
          <span className="flex items-center gap-2"><FileText className="w-4 h-4 text-slate-500" /> View Full Report</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
        </button>
        <button type="button" className="w-full flex items-center justify-between p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl text-xs font-semibold text-slate-300 transition-colors">
          <span className="flex items-center gap-2"><Download className="w-4 h-4 text-slate-500" /> Download PDF</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
        </button>
        <button type="button" className="w-full flex items-center justify-between p-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 rounded-xl text-xs font-bold text-emerald-400 transition-all">
          <span className="flex items-center gap-2"><Store className="w-4 h-4" /> Find Nearby Shops</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </section>
  );
}