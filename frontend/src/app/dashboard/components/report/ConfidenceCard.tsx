interface Props {
  confidence: number;
}

export default function ConfidenceCard({
  confidence,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-zinc-500">
            Confidence
          </p>

          <h2 className="mt-1 text-4xl font-bold text-green-600">
            {confidence}%
          </h2>

        </div>

      </div>

      <div className="mt-5 h-3 rounded-full bg-zinc-200">

        <div
          style={{ width: `${confidence}%` }}
          className="h-full rounded-full bg-green-600"
        />

      </div>

    </div>
  );
}