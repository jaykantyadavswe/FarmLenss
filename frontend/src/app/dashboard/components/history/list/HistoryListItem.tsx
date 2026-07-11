import Image from "next/image";
import { Eye, Trash2 } from "lucide-react";
import StatusBadge from "../cards/StatusBadge";

export default function HistoryListItem({
  item,
}: any) {
  return (
    <div className="grid grid-cols-12 items-center border-b px-6 py-4 transition hover:bg-zinc-50">

      <div className="col-span-3 flex items-center gap-3">

        <Image
          src={item.image}
          alt={item.crop}
          width={50}
          height={50}
          className="rounded-xl object-cover"
        />

        <div>

          <h3 className="font-semibold">
            {item.crop}
          </h3>

          <p className="text-sm text-zinc-500">
            {item.weather}
          </p>

        </div>

      </div>

      <div className="col-span-2">

        {item.disease}

      </div>

      <div className="col-span-2">

        {item.confidence}%

      </div>

      <div className="col-span-2">

        <StatusBadge status={item.status} />

      </div>

      <div className="col-span-2">

        {item.date}

      </div>

      <div className="col-span-1 flex justify-end gap-2">

        <button className="rounded-lg border p-2 hover:bg-green-50">

          <Eye size={18} />

        </button>

        <button className="rounded-lg border p-2 hover:bg-red-50">

          <Trash2 size={18} />

        </button>

      </div>

    </div>
  );
}