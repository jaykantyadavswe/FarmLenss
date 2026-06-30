import { Settings, UserCircle2 } from "lucide-react";

export default function SidebarFooter() {
  return (
    <div className="border-t p-4">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <UserCircle2
            size={40}
            className="text-green-600"
          />

          <div>

            <p className="font-medium">
              Genius
            </p>

            <p className="text-xs text-zinc-500">
              genius@example.com
            </p>

          </div>

        </div>

        <button className="rounded-lg p-2 hover:bg-zinc-100">
          <Settings size={18} />
        </button>

      </div>

    </div>
  );
}