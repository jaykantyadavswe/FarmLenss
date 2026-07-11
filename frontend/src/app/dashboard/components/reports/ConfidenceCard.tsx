import {
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

interface ConfidenceCardProps {
  confidence?: number;
}

export default function ConfidenceCard({
  confidence = 96,
}: ConfidenceCardProps) {
  return (
    <section className="rounded-3xl border bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">

          <BrainCircuit
            className="text-blue-600"
            size={24}
          />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            AI Confidence
          </h2>

          <p className="text-sm text-zinc-500">
            Model prediction confidence
          </p>

        </div>

      </div>

      {/* Percentage */}

      <div className="mt-8 text-center">

        <h1 className="text-6xl font-extrabold text-green-600">
          {confidence}%
        </h1>

        <p className="mt-2 text-zinc-500">
          Prediction Accuracy
        </p>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm">

          <span>Confidence</span>

          <span>{confidence}%</span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-zinc-200">

          <div
            style={{ width: `${confidence}%` }}
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-600"
          />

        </div>

      </div>

      {/* Status */}

      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-4">

        <div className="flex items-center gap-3">

          <CheckCircle2
            className="text-green-600"
            size={22}
          />

          <div>

            <h3 className="font-semibold text-green-700">
              Excellent Match
            </h3>

            <p className="mt-1 text-sm leading-6 text-zinc-600">
              The uploaded image strongly matches
              disease patterns learned by our AI
              model.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}