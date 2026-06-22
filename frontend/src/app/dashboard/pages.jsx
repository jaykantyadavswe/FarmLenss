"use client";

import { useState } from "react";
import ChatContainer from "../components/chat/ChatContainer";
import RightPanel from "../components/rightpanel/RightPanel";

export default function Dashboard() {
  const [analysisData, setAnalysisData] = useState(null);

  return (
    <div className="grid h-full min-h-0 w-full min-w-0 grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_380px]">
      <section className="min-h-0 min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <ChatContainer onAnalysisUpdate={setAnalysisData} />
      </section>

      <aside className="min-h-0 min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <RightPanel analysis={analysisData} />
      </aside>
    </div>
  );
}
