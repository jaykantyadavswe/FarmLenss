import { Pill } from "lucide-react";

const medicines = [
  "Mancozeb",
  "Copper Oxychloride",
  "Chlorothalonil",
];

export default function MedicineCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <Pill className="text-indigo-600" />
        <h2 className="text-xl font-bold">
          Recommended Medicines
        </h2>
      </div>

      <div className="space-y-4">

        {medicines.map((medicine) => (
          <div
            key={medicine}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <span>{medicine}</span>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              Recommended
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}