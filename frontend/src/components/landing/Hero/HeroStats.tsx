import { heroStats } from "./mockData";

export default function HeroStats() {
  return (
    <div className="mt-10 flex flex-wrap gap-8">

      {heroStats.map((item) => (
        <div key={item.title}>
          <h3 className="text-2xl font-bold">
            {item.value}
          </h3>

          <p className="text-sm text-gray-500">
            {item.title}
          </p>
        </div>
      ))}

    </div>
  );
}