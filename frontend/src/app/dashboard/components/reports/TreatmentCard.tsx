import { Syringe } from "lucide-react";

const steps = [
  "Remove infected leaves",
  "Spray Mancozeb",
  "Reduce irrigation",
  "Monitor crop for one week",
];

export default function TreatmentCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <Syringe className="text-green-600" />
        <h2 className="text-xl font-bold">
          Treatment Plan
        </h2>
      </div>

      <div className="space-y-3">
        {steps.map((step, i) => (
          <div
            key={step}
            className="flex gap-3 rounded-xl bg-green-50 p-4"
          >
            <span className="font-bold text-green-600">
              {i + 1}.
            </span>

            {step}
          </div>
        ))}
      </div>

    </section>
  );
}