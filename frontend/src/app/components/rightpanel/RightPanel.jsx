"use client";

import Row from './Row'

export default function RightPanel() {
  return (
    <div className="h-full bg-white/40 backdrop-blur-xl rounded-2xl p-4 shadow-lg border border-white/30 flex flex-col justify-between z-10">

      {/* 🔹 Title */}
      <h2 className="text-lg font-semibold mb-4 text-gray-800">
        Structured Data Summary
      </h2>

      {/* 🔹 Card */}
      <div className="bg-white/70 rounded-xl p-4 shadow space-y-4 text-sm">

        {/* Row */}
        <Row label="Crop" value="Corn" />

        <Row label="Detected Disease" value="Fall Armyworm" />

        {/* Confidence with circle */}
        <div className="flex justify-between items-center">
          <span className="text-gray-500">Confidence</span>

          <div className="flex items-center justify-center w-14 h-14 rounded-full border-4 border-green-500 text-green-700 text-xs font-semibold">
            High <br /> 90%
          </div>
        </div>

        <Row
          label="Primary Cause"
          value="Spodoptera frugiperda larvae"
        />

        <Row
          label="Recommended Treatment"
          value="Chlorantraniliprole spray"
        />
      </div>

      {/* 🔹 Buttons */}
      <div className="mt-6 space-y-3">

        <button className="w-full bg-white/70 backdrop-blur-md border border-white/40 hover:bg-white/90 transition p-3 rounded-xl shadow flex items-center justify-center gap-2">
          📍 Find Nearby Shops
        </button>

        <button className="w-full bg-white/70 backdrop-blur-md border border-white/40 hover:bg-white/90 transition p-3 rounded-xl shadow flex items-center justify-center gap-2">
          📄 View Full Report
        </button>

        <button className="w-full bg-white/70 backdrop-blur-md border border-white/40 hover:bg-white/90 transition p-3 rounded-xl shadow flex items-center justify-center gap-2">
          ⬇️ Download Report
        </button>

      </div>
    </div>
  );
}