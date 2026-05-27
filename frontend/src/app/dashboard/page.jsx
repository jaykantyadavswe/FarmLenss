"use client";

import { useState } from "react";
import { Plus, Image, LogOut, User } from "lucide-react";
import ChatContainer from "../components/chat/ChatContainer";
import RightPanel from "../components/rightpanel/RightPanel";

export default function Dashboard() {
  const [history, setHistory] = useState([]);
  return (
    <>
      {/* Chat Section */}
      <div className="flex-[3] bg-white/40 backdrop-blur-lg rounded-2xl shadow flex flex-col overflow-hidden">
        <ChatContainer />
      </div>

      {/* Right Panel */}
      <div className="flex-[1] bg-white/40 backdrop-blur-lg rounded-2xl p-4 shadow">
        <RightPanel />
      </div>
    </>
  );
}