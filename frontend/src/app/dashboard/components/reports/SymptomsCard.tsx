import { Stethoscope } from "lucide-react";

const symptoms = [
  "Brown circular lesions",
  "Yellow halo around spots",
  "Dry leaf edges",
  "Leaf curling",
];

export default function SymptomsCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Stethoscope className="text-red-500" />
        <h2 className="text-xl font-bold">Symptoms</h2>
      </div>

      <div className="space-y-3">
        {symptoms.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-red-50 px-4 py-3"
          >
            ✅ {item}
          </div>
        ))}
      </div>
    </section>
  );
}