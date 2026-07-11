import { History } from "lucide-react";

export default function SimilarCases() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <History />
        <h2 className="text-xl font-bold">
          Similar Cases
        </h2>
      </div>

      <div className="space-y-4">

        {[94, 91, 88].map((score, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div>
              <h3 className="font-semibold">
                Tomato • Early Blight
              </h3>
              <p className="text-sm text-zinc-500">
                Previous AI Analysis
              </p>
            </div>

            <span className="font-bold text-green-600">
              {score}%
            </span>
          </div>
        ))}

      </div>

    </section>
  );
}