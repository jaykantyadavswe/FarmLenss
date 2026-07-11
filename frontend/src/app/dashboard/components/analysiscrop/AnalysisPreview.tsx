import { ImagePlus } from "lucide-react";

import { ArrowRight, BrainCircuit, Cpu } from "lucide-react";

export default function AnalysisPreview() {
  return (
    <section className="rounded-3xl border border-dashed border-green-300 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm transition-all duration-300 hover:border-green-500 hover:shadow-lg">


      {/* <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
        2
      </div> */}

      <div className="flex items-center justify-center gap-3">

        <div className="rounded-xl bg-green-100 p-3 text-green-600">
          <Cpu size={22} />
        </div>

        <div>

          <h2 className="text-lg font-semibold">
            Analysis With AI
          </h2>

          <p className="text-sm text-zinc-500">
            Start Analysis With AI
          </p>

        </div>

      </div>

      {/* Content */}

      <div className="mt-6 text-center">

        <div className="mx-auto flex h-16 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
          <BrainCircuit size={38} />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-zinc-900">
          AI Analysis
        </h2>

        <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-500">
          Upload a crop image first. Once uploaded,
          our AI will identify diseases, estimate confidence,
          suggest treatments, and generate a detailed report.
        </p>

      </div>

      {/* Status */}

      <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">

        <p className="text-sm font-medium text-yellow-700">
          ⏳ Waiting for image upload...
        </p>

      </div>

      {/* Button */}

      <button
        disabled
        className="
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-zinc-300
          px-6
          py-3
          font-medium
          text-zinc-600
          cursor-not-allowed
        "
      >
        Start Analysis

        <ArrowRight size={18} />
      </button>

    </section>
  );
}