import Image from "next/image";
import {
  Calendar,
  Clock3,
  Eye,
  Trash2,
  CloudSun,
  BadgeCheck,
} from "lucide-react";

interface HistoryCardProps {
  item: {
    crop: string;
    disease: string;
    confidence: number;
    status: string;
    severity: string;
    date: string;
    time: string;
    weather: string;
    image: string;
  };
}

export default function HistoryCard({
  item,
}: HistoryCardProps) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}

      <div className="relative h-52 w-full">

        <Image
          src={item.image}
          alt={item.crop}
          fill
          className="object-cover"
        />

        <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-green-600 backdrop-blur">
          {item.confidence}%
        </div>

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        <div>

          <h2 className="text-2xl font-bold">
            {item.crop}
          </h2>

          <p className="text-zinc-500">
            {item.disease}
          </p>

        </div>

        <div className="grid grid-cols-2 gap-4">

          <Info
            icon={<BadgeCheck size={16} />}
            title="Status"
            value={item.status}
          />

          <Info
            icon={<Calendar size={16} />}
            title="Date"
            value={item.date}
          />

          <Info
            icon={<Clock3 size={16} />}
            title="Duration"
            value={item.time}
          />

          <Info
            icon={<CloudSun size={16} />}
            title="Weather"
            value={item.weather}
          />

        </div>

        <div className="rounded-xl bg-yellow-50 p-4">

          <p className="text-xs uppercase text-zinc-500">
            Severity
          </p>

          <h3 className="mt-1 font-semibold text-yellow-700">
            {item.severity}
          </h3>

        </div>

        <div className="flex gap-3">

          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 py-3 text-white transition hover:bg-green-700">
            <Eye size={18} />
            View Report
          </button>

          <button className="rounded-xl border p-3 transition hover:bg-red-50 hover:text-red-600">
            <Trash2 size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

function Info({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-zinc-50 p-3">

      <div className="mb-2 flex items-center gap-2 text-zinc-500">
        {icon}
        <span className="text-xs">{title}</span>
      </div>

      <p className="font-medium">
        {value}
      </p>

    </div>
  );
}