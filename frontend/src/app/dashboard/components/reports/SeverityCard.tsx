import { AlertTriangle } from "lucide-react";

export default function SeverityCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-5 flex items-center gap-3">
        <AlertTriangle className="text-yellow-500" />
        <h2 className="text-xl font-bold">
          Severity
        </h2>
      </div>

      <span className="rounded-full bg-yellow-100 px-4 py-2 font-medium text-yellow-700">
        Moderate
      </span>

      <div className="mt-6">

        <div className="h-3 rounded-full bg-zinc-200">

          <div className="h-full w-2/3 rounded-full bg-yellow-500" />

        </div>

      </div>

    </section>
  );
}