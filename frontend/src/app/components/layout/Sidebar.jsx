"use client";
import { useState } from "react";

export default function Sidebar() {
  const [history, setHistory] = useState([
    { id: 1, title: "Leaf Blight" },
    { id: 2, title: "Armyworm Detection" },
    { id: 3, title: "Yellow Leaves Issue" }
  ]);

  return (
    <div className="w-64 h-screen bg-green-900 text-white flex flex-col p-4">

      {/* 🔰 Logo */}
      <h1 className="text-2xl font-bold mb-6">🌱 FarmLens</h1>

      {/* ➕ New Analysis */}
      <button className="bg-green-600 hover:bg-green-500 transition p-3 rounded-xl mb-6 shadow">
        + New Analysis
      </button>

      {/* 📜 History */}
      <div className="flex-1 overflow-y-auto">
        <p className="text-sm text-green-300 mb-2">History</p>

        <div className="space-y-2">
          {history.map((item) => (
            <div
              key={item.id}
              className="bg-green-800 hover:bg-green-700 transition p-2 rounded-lg cursor-pointer"
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      {/* 👤 Footer */}
      <div className="mt-6 border-t border-green-700 pt-4 space-y-2 text-sm">

        <div className="hover:bg-green-800 p-2 rounded cursor-pointer">
          👤 Profile
        </div>

        <div className="hover:bg-green-800 p-2 rounded cursor-pointer">
          ⚙️ Settings
        </div>

        <div className="hover:bg-red-600 p-2 rounded cursor-pointer">
          🚪 Logout
        </div>

      </div>
    </div>
  );
}