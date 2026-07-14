import { ArrowRight, BrainCircuit, Cpu, ScanQrCode } from "lucide-react";
import api from '@/lib/api.js';

interface Props {

  image: File | null;

  cropType: string;

  loading: boolean;

  setLoading: (value: boolean) => void;

  setResult: (value: any) => void;

}
export default function AnalysisPreview({ image, cropType, loading, setLoading, setResult }: Props) {

  const handleChange = async () => {
    if (!image) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", image);
    // formData.append("cropType", cropType);

    const res = await fetch("/api/analyze", {
      method: "POST",
      body: formData
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  }

  return (
    <section className="rounded-3xl border border-dashed border-green-300 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm transition-all duration-300 hover:border-green-500 hover:shadow-lg">

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

      {image ? (
        <div className="flex flex-col items-center justify-center h-full rounded-2xl px-4 mt-2 py-2">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 shadow-sm">
            <ScanQrCode className="text-green-600" size={30} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-zinc-900">
            Ready for AI Analysis
          </h2>

          <p className="mt-3 max-w-lg text-center text-zinc-500 leading-7 text-sm">
            Your crop image has been uploaded successfully.
            Click the <span className="font-semibold text-green-600">Analyze</span> button
            to identify diseases and receive detailed AI recommendations.
          </p>

          <div className="mt-5 flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-medium text-green-700">
            ✅ Image Ready
          </div>

        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full rounded-2xl bg-gradient-to-b from-zinc-50 to-white px-8 py-9">

          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 shadow-sm">
            <BrainCircuit className="text-green-600" size={42} />
          </div>

          <h2 className="mt-6 text-2xl font-bold text-zinc-900">
            AI Crop Diagnosis
          </h2>

          <p className="mt-4 max-w-xl text-center text-sm leading-6 text-zinc-500">
            Upload a clear image of your crop to receive an AI-powered diagnosis.
            
          </p>

        </div>
      )}

      {/* Status */}

      <div className="mt-8 rounded-2xl border border-yellow-200 bg-yellow-50 p-4">

        {image ?
          <p className="text-sm font-medium text-yellow-700">
            ⏳ image uploaded...
          </p> :

          <p className="text-sm font-medium text-yellow-700">
            ⏳ Waiting for image upload...
          </p>
        }

      </div>

      {/* Button */}

      <button
        className={`
          mt-8
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          px-6
          py-3
          font-medium
          ${image ? "bg-green-600 cursor-progress text-white" : "cursor-not-allowed bg-zinc-300 text-zinc-600"}
        `}
        onClick={handleChange}
      >
        Start Analysis

        <ArrowRight size={18} />
      </button>

    </section>
  );
}