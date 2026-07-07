import { FileText, Sparkles } from "lucide-react";

export default function ReportHeader() {
  return (
    <header className="border-b bg-white p-6">

      <div className="flex items-center gap-4">

        <div className="rounded-xl bg-green-100 p-3 text-green-600">

          <FileText size={22} />

        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Analysis Report
          </h2>

          <div className="mt-1 flex items-center gap-2 text-sm text-zinc-500">

            <Sparkles size={14} />

            <span>AI Generated • Just Now</span>

          </div>

        </div>

      </div>

    </header>
  );
}