import { ShieldCheck } from "lucide-react";

const prevention = [
  "Crop Rotation",
  "Healthy Seeds",
  "Morning Irrigation",
  "Proper Plant Spacing",
];

export default function PreventionCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-5 flex items-center gap-3">
        <ShieldCheck className="text-emerald-600" />
        <h2 className="text-xl font-bold">
          Prevention
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {prevention.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-emerald-50 p-4"
          >
            ✓ {item}
          </div>
        ))}
      </div>

    </section>
  );
}