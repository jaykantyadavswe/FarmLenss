import {
  ArrowRight,
  BadgeCheck,
  Brain,
} from "lucide-react";

import Link from "next/link";

export default function ResultDetails() {
  return (
    <section className="rounded-3xl border border-dashed border-green-300 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
      <div className="flex items-center justify-center gap-3">

        <div className="rounded-xl bg-green-100 p-3 text-green-600">
          <Brain size={22} />
        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Analysis Result
          </h2>

          <p className="text-sm text-zinc-500">
            AI Generated Report
          </p>

        </div>

      </div>


      <div className="mt-6 space-y-4">

        <DetailRow
          label="Crop"
          value="Tomato"
        />

        <DetailRow
          label="Disease"
          value="Early Blight"
        />

        <DetailRow
          label="Confidence"
          value="96%"
        />

        <DetailRow
          label="Severity"
          value="Moderate"
        />

      </div>

      {/* Status */}

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-green-50 p-4">

        <BadgeCheck
          className="text-green-600"
          size={22}
        />

        <div>

          <h4 className="font-medium">
            Analysis Completed
          </h4>

          <p className="text-sm text-zinc-500">
            AI successfully analyzed your crop.
          </p>

        </div>

      </div>



      {/* Footer */}

      <button
        className="
          mt-17
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          font-medium
          text-white
          transition
          hover:bg-green-700
        "
      >
        <Link href="/dashboard/report">
          View Full Report
        </Link>

        <ArrowRight size={18} />

      </button>

    </section>
  );
}

interface DetailRowProps {
  label: string;
  value: string;
}

function DetailRow({
  label,
  value,
}: DetailRowProps) {
  return (
    <div className="flex items-center justify-between border-b pb-3 last:border-none">

      <span className="text-sm text-zinc-500">
        {label}
      </span>

      <span className="font-semibold text-zinc-900">
        {value}
      </span>

    </div>
  );
}