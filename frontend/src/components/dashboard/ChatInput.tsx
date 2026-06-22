'use client';

import React from 'react';
import { Image as ImageIcon, Mic, Send } from 'lucide-react';

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (msg: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ChatInput({ inputMessage, setInputMessage, onSubmit }: ChatInputProps) {
  return (
    <div className="p-4 border-t bg-[#060c07] border-slate-900">
      <form onSubmit={onSubmit} className="max-w-3xl mx-auto relative bg-slate-950 border border-slate-900 rounded-xl p-1 focus-within:border-emerald-500/20 transition-all">
        <div className="flex items-center gap-1">
          <button type="button" className="p-2 text-slate-600 hover:text-slate-400 rounded-lg transition-colors" title="Upload Image">
            <ImageIcon className="w-4 h-4" />
          </button>
          <button type="button" className="p-2 text-slate-600 hover:text-slate-400 rounded-lg transition-colors" title="Voice Input">
            <Mic className="w-4 h-4" />
          </button>

          <input 
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about your crop..."
            className="w-full bg-transparent text-xs outline-none py-2 px-2 text-slate-300 placeholder:text-slate-700"
          />

          <button 
            type="submit"
            className="p-2 bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 rounded-lg transition-colors cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
      <div className="text-center text-[10px] text-slate-700 font-mono mt-2 select-none">
        Drag and drop support active for crop imagery matrices.
      </div>
    </div>
  );
}