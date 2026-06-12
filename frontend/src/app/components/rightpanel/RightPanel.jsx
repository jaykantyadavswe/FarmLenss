"use client";

import Row from './Row'

const parseConfidence = (value) => {
  if (value === undefined || value === null || value === "") {
    return { label: "N/A", display: "N/A", score: null };
  }

  if (typeof value === "number") {
    return { label: value >= 75 ? "High" : value >= 45 ? "Medium" : "Low", display: `${value}%`, score: value };
  }

  const text = String(value).trim();
  const numericMatch = text.match(/\d+(\.\d+)?/);

  if (numericMatch) {
    const score = Number(numericMatch[0]);
    return { label: score >= 75 ? "High" : score >= 45 ? "Medium" : "Low", display: `${score}%`, score };
  }

  return { label: text, display: text, score: null };
};

export default function RightPanel({ analysis }) {
  const data = analysis || {};
  const confidence = parseConfidence(data.confidence ?? data.confidenceScore);
  const confidenceTone = confidence.score === null
    ? "border-gray-300 text-gray-600"
    : confidence.score >= 75
    ? "border-green-500 text-green-700"
    : confidence.score >= 45
    ? "border-yellow-500 text-yellow-700"
    : "border-red-500 text-red-700";

  return (
    <div className="h-full min-h-0 bg-white/40 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 flex flex-col z-10 overflow-hidden">

      {/* Header */}
      <div className="p-4 border-b border-white/20">
        <h2 className="text-lg font-semibold text-gray-800">Structured Data Summary</h2>
      </div>

      {/* Scrollable content */}
      <div className="flex-1 min-h-0 overflow-y-auto p-4">
        <div className="bg-white/70 rounded-xl p-4 shadow space-y-4 text-sm">

          {/* <Row label="Crop" value={data.title || "Unknown"} /> */}

          <Row label="Detected Disease" value={data.disease || "Not detected"} className="border-t" />

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Confidence</span>

            <div className={`flex items-center justify-center w-14 h-14 rounded-full border-4 text-xs font-semibold ${confidenceTone}`}>
              {confidence.label} <br /> {confidence.display}
            </div>
          </div>

          <Row label="Primary Cause" value={data.cause || "N/A"} />

          <Row label="Recommended Treatment" value={data.treatment || "N/A"} />

          <Row label="Prevention" value={data.prevention || "N/A"} />

          <Row label="Medicine" value={data.medicine || "N/A"} />

        </div>
      </div>

      {/* Footer / Actions - anchored */}
      <div className="p-4 border-t bg-white/50">
        <div className="space-y-3">
          <button className="w-full bg-white/80 border border-white/40 hover:bg-white/90 transition p-3 rounded-xl shadow flex items-center justify-center gap-2">
            📍 Find Nearby Shops
          </button>

          <button className="w-full bg-white/80 border border-white/40 hover:bg-white/90 transition p-3 rounded-xl shadow flex items-center justify-center gap-2">
            📄 View Full Report
          </button>

          <button className="w-full bg-white/80 border border-white/40 hover:bg-white/90 transition p-3 rounded-xl shadow flex items-center justify-center gap-2">
            ⬇️ Download Report
          </button>
        </div>
      </div>
    </div>
  );
}
