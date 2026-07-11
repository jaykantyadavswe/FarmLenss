import { Settings } from "lucide-react";

export default function SettingsHeader() {
  return (
    <header className="rounded-3xl border bg-white p-8 shadow-sm">

      <div className="flex items-center gap-5">

        <div className="rounded-2xl bg-green-100 p-4">

          <Settings
            className="text-green-600"
            size={28}
          />

        </div>

        <div>

          <h1 className="text-3xl font-bold">

            Settings

          </h1>

          <p className="mt-2 text-zinc-500">

            Manage your FarmLens account preferences.

          </p>

        </div>

      </div>

    </header>
  );
}