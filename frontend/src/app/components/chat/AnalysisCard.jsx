import Image from "next/image";

export default function AnalysisCard({ data, image, title }) {
  if (!data) return null;

  return (
    <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

      {image && (
        <Image
          src={image}
          alt="Uploaded crop for analysis"
          width={384}
          height={240}
          unoptimized
          className="mb-4 max-h-72 w-full rounded-2xl object-cover"
        />
      )}

      <h3 className="mb-3 text-lg font-semibold text-slate-950">
        {title}
      </h3>

      <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
        Confidence: {data.confidence || "N/A"}
      </span>

      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        <p className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">Disease:</b> {data.disease || "N/A"}</p>
        <p className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">Cause:</b> {data.cause || "N/A"}</p>
        <p className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">Treatment:</b> {data.treatment || "N/A"}</p>
        <p className="rounded-2xl bg-slate-50 p-3"><b className="text-slate-900">Prevention:</b> {data.prevention || "N/A"}</p>
        <p className="rounded-2xl bg-slate-50 p-3 sm:col-span-2"><b className="text-slate-900">Medicine:</b> {data.medicine || "N/A"}</p>
      </div>

    </div>
  );
}
