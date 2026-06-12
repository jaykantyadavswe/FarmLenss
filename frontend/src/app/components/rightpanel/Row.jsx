export default function DataRow({ label, value, isBadge }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">

      <span className="text-xs font-medium text-slate-500">{label}</span>

      {isBadge ? (
        <span className={`px-2 py-1 w-fit rounded-full text-xs font-medium ${
          value === "High"
            ? "bg-green-100 text-green-700"
            : value === "Medium"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-red-100 text-red-700"
        }`}>
          {value}
        </span>
      ) : (
        <span className="mt-1 block text-sm font-semibold text-slate-900">{value}</span>
      )}

    </div>
  );
}
