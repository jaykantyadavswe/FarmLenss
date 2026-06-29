import {
  CheckCircle2,
  ShieldCheck,
  Upload,
} from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="relative">

      <div className="rounded-3xl border bg-green-50 p-6 shadow-2xl">

        <div className="mb-6 flex items-center justify-between">

          <h3 className="font-semibold">
            Crop Analysis
          </h3>

          <Upload className="text-green-600" />
        </div>

        <div className="space-y-5">

          <div className="rounded-2xl border p-4">

            <p className="text-sm text-gray-500">

              Disease

            </p>

            <h4 className="font-semibold">

              Fall Armyworm

            </h4>

          </div>

          <div className="rounded-2xl border p-4">

            <p className="text-sm text-gray-500">

              Confidence

            </p>

            <div className="flex items-center gap-2">

              <CheckCircle2
                size={18}
                className="text-green-600"
              />

              <span>94%</span>

            </div>

          </div>

          <div className="rounded-2xl border p-4">

            <p className="text-sm text-gray-500">

              Treatment

            </p>

            <h4 className="font-medium">

              Emamectin Benzoate

            </h4>

          </div>

          <div className="rounded-2xl bg-green-50 p-4">

            <div className="flex items-center gap-2">

              <ShieldCheck
                size={18}
                className="text-green-600"
              />

              <span className="font-medium">

                AI Report Ready

              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}