'use client';

import React from 'react';
import { Flame } from 'lucide-react';

interface Message {
  role: 'user' | 'ai';
  text?: string;
  image?: string;
  title?: string;
  confidence?: string;
  explanation?: string;
  treatment?: string;
  prevention?: string;
}

export default function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user';

  return (
    <div className={`flex gap-4 max-w-3xl animate-slideUp ${isUser ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}>
      <div className={`w-7 h-7 rounded-lg border text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-slate-900 border-slate-800 text-slate-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
      }`}>
        {isUser ? 'U' : 'AI'}
      </div>

      <div className={`space-y-3 p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
        isUser ? 'bg-emerald-950/10 border border-emerald-900/20 text-slate-200' : 'bg-slate-950/40 border border-slate-900/60 text-slate-300'
      }`}>
        {msg.text && <p>{msg.text}</p>}
        
        {msg.image && (
          <div className="relative border border-slate-800 rounded-lg overflow-hidden max-w-xs mt-2 group">
            <div className="w-full h-40 bg-emerald-950/20 flex flex-col items-center justify-center p-4 border border-dashed border-emerald-800/40 rounded">
              <span className="text-emerald-400 text-2xl mb-1">🍃</span>
              <span className="text-xs font-mono text-slate-400">Corn leaf uploaded</span>
            </div>
          </div>
        )}

        {msg.title && (
          <div className="space-y-4 pt-1 border-t border-slate-900 mt-2">
            <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-lg border border-slate-900">
              <span className="font-bold text-white tracking-tight text-xs flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> {msg.title}
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                Confidence: {msg.confidence}
              </span>
            </div>

            <div className="space-y-2.5 font-sans text-xs">
              <div>
                <span className="font-semibold text-slate-400 block text-[11px] font-mono uppercase tracking-wider">Explanation</span>
                <p className="text-slate-400 mt-0.5">{msg.explanation}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-[11px] font-mono uppercase tracking-wider">Treatment</span>
                <p className="text-emerald-400/90 mt-0.5">{msg.treatment}</p>
              </div>
              <div>
                <span className="font-semibold text-slate-400 block text-[11px] font-mono uppercase tracking-wider">Prevention</span>
                <p className="text-slate-400 mt-0.5">{msg.prevention}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}