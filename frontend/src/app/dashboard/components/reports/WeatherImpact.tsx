import { CloudSun } from "lucide-react";

export default function WeatherImpact() {
  return (
    <section className="rounded-3xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <CloudSun className="text-yellow-500" />
        <h2 className="text-xl font-bold">
          Weather Impact
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-4">

        <Stat title="Temp" value="28°C" />

        <Stat title="Humidity" value="82%" />

        <Stat title="Rain" value="60%" />

      </div>

    </section>
  );
}

function Stat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-zinc-100 p-4 text-center">
      <p className="text-sm text-zinc-500">{title}</p>
      <h3 className="mt-2 text-xl font-bold">{value}</h3>
    </div>
  );
}