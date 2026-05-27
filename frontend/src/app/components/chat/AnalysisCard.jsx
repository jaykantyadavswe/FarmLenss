export default function AnalysisCard({ data, image }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl p-4 shadow w-full max-w-md ml-5">

      {/* Image */}
      {image && (
        <img src={image} className="rounded-lg mb-3" />
      )}

      {/* Title */}
      <h3 className="font-semibold text-lg mb-2">
        {data.title}
      </h3>

      {/* Confidence */}
      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
        {data.confidence}
      </span>

      {/* Quick info */}
      <div className="mt-3 text-sm space-y-2">
        <p><b>Treatment:</b> {data.treatment}</p>
        <p><b>Prevention:</b> {data.prevention}</p>
        <p><b>Medicine:</b> {data.medicine}</p>
      </div>

    </div>
  );
}