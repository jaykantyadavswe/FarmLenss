import StatCard from "./StatCard";
import { stats } from "./mockData";

export default function StatsSection() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            Trusted AI Technology
          </span>

          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Built to Make Crop Analysis
            Faster and Smarter
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            FarmLens combines artificial intelligence,
            cloud technology, and modern web engineering
            to provide fast and reliable crop disease
            detection for farmers.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (
            <StatCard
              key={item.title}
              {...item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}