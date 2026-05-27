export default function DataRow({ label, value, isBadge }) {
  return (
    <div className="flex flex-col gap-1">

      <span className="text-gray-500 text-xs">{label}</span>

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
        <span className="text-gray-800">{value}</span>
      )}

    </div>
  );
}