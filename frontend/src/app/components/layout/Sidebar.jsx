"use client";
import { useState } from "react";
import { History, Leaf, Plus, Settings, SquareArrowRightExit, User } from 'lucide-react';

export default function Sidebar() {
  const [history, setHistory] = useState([
    { id: 1, title: "Leaf Blight" },
    { id: 2, title: "Armyworm Detection" },
    { id: 3, title: "Yellow Leaves Issue" }
  ]);

  return (
    <aside className="flex h-screen w-72 shrink-0 flex-col bg-[#0f5a2c] p-5 text-white">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
          <Leaf className="h-6 w-6 text-lime-300" />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">FarmLens</h1>
          <p className="text-xs text-green-100/70">AI crop diagnosis</p>
        </div>
      </div>

      <button className="mb-8 flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-500 text-base font-semibold shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-400">
        <Plus className="h-5 w-5" />
        New Analysis
      </button>

      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="mb-3 flex items-center gap-2 text-sm font-medium text-green-100/80">
          <History className="h-4 w-4" />
          History
        </div>

        <div className="space-y-2">
          {history.map((item) => (
            <button
              key={item.id}
              className="w-full rounded-xl bg-white/8 px-3 py-3 text-left text-sm font-medium text-green-50 transition hover:bg-white/14"
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-1 border-t border-white/15 pt-4 text-sm">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-green-50 transition hover:bg-white/10">
          <User className="h-5 w-5" /> Profile
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-green-50 transition hover:bg-white/10">
          <Settings className="h-5 w-5" /> Settings
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-red-100 transition hover:bg-red-500/20">
          <SquareArrowRightExit className="h-5 w-5" /> Logout
        </button>
      </div>
    </aside>
  );
}
