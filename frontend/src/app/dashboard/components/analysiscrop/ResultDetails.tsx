import {
  ArrowRight,
  BadgeCheck,
  Brain,
  Leaf,
} from "lucide-react";

export default function ResultDetails() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

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

      {/* Details */}

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

      {/* Summary */}

      <div className="mt-6 rounded-2xl bg-zinc-50 p-4">

        <div className="mb-3 flex items-center gap-2">

          <Leaf
            size={18}
            className="text-green-600"
          />

          <h3 className="font-medium">
            AI Summary
          </h3>

        </div>

        <p className="text-sm leading-7 text-zinc-600">
          Early Blight detected with high confidence.
          Immediate fungicide treatment is recommended.
          Monitor nearby leaves over the next 5 days.
        </p>

      </div>

      {/* Footer */}

      <button
        className="
          mt-6
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
        View Full Report

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