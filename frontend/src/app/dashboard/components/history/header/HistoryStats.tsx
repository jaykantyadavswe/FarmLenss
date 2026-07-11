import {
  Leaf,
  ShieldCheck,
  AlertTriangle,
  BrainCircuit,
} from "lucide-react";

const stats = [
  {
    title: "Total Analyses",
    value: "158",
    icon: Leaf,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Healthy Crops",
    value: "84",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Diseased",
    value: "74",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Avg Confidence",
    value: "93%",
    icon: BrainCircuit,
    color: "bg-violet-100 text-violet-600",
  },
];

export default function HistoryStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className={`mb-5 inline-flex rounded-xl p-3 ${item.color}`}>
              <Icon size={22} />
            </div>

            <p className="text-sm text-zinc-500">
              {item.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {item.value}
            </h2>
          </div>
        );
      })}

    </section>
  );
}