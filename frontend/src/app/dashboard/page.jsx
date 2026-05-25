"use client";

import { useState } from "react";
import { Plus, Image, LogOut, User } from "lucide-react";

export default function Dashboard() {
  const [history, setHistory] = useState([]);

  return (
    <div className="flex h-screen">

      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-gray-900 text-white flex flex-col">

        {/* New Scan */}
        <button className="flex items-center gap-2 p-4 hover:bg-gray-800">
          <Plus size={18} /> New Scan
        </button>

        {/* History */}
        {history.length === 0 ? (
          <p className="text-gray-500 text-sm">No history yet</p>
        ) : (
          history.map((item) => (
            <div
              key={item._id}
              onClick={() => setSelected(item)}
              className="flex gap-3 p-3 mb-2 rounded-lg cursor-pointer hover:bg-gray-800 transition"
            >
              {/* Image */}
              <img
                src={item.imageUrl}
                alt="crop"
                className="w-10 h-10 rounded object-cover"
              />

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  {item.disease}
                </span>
                <span className="text-xs text-gray-400">
                  {item.crop}
                </span>
              </div>
            </div>
          ))
        )}

      </div>

      {/* 🔹 MAIN AREA */}
      <div className="flex-1 flex flex-col bg-gray-100">

        {/* 🔸 NAVBAR */}
        <div className="flex justify-between items-center p-4 bg-white shadow">
          <h1 className="font-bold text-xl">Farmlens 🌾</h1>

          <div className="flex items-center gap-4">
            <User className="cursor-pointer" />
            <button className="flex items-center gap-1 text-red-500">
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>

        {/* 🔸 RESULT AREA */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">
            Upload a crop image to get started 🌱
          </p>
        </div>

        {/* 🔸 INPUT / UPLOAD BAR */}
        <div className="p-4 bg-white border-t flex items-center gap-3">

          <input
            type="file"
            className="hidden"
            id="fileUpload"
          />

          <label
            htmlFor="fileUpload"
            className="cursor-pointer bg-green-500 text-white p-2 rounded"
          >
            <Image size={18} />
          </label>

          <input
            type="text"
            placeholder="Describe crop issue or upload image..."
            className="flex-1 border p-2 rounded-lg outline-none"
          />

          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Analyze
          </button>

        </div>

      </div>

    </div>
  );
}