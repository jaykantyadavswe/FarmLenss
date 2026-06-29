import { Leaf } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="rounded-xl bg-green-600 p-2 text-white">
        <Leaf size={20} />
      </div>

      <span className="text-2xl font-bold tracking-tight text-green-600">
        FarmLens
      </span>
    </div>
  );
}