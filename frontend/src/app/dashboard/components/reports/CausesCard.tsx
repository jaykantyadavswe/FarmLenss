import { CloudRain } from "lucide-react";

const causes = [
  "High humidity",
  "Continuous rainfall",
  "Poor air circulation",
  "Fungal infection",
];

export default function CausesCard() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <CloudRain className="text-blue-600" />
        <h2 className="text-xl font-bold">
          Possible Causes
        </h2>
      </div>

      <ul className="space-y-3">
        {causes.map((cause) => (
          <li
            key={cause}
            className="rounded-xl bg-blue-50 p-3"
          >
            • {cause}
          </li>
        ))}
      </ul>

    </section>
  );
}