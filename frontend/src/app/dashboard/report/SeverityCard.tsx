interface Props {
  severity: "Low" | "Moderate" | "High";
}

const colors = {
  Low: "bg-green-100 text-green-700",
  Moderate: "bg-yellow-100 text-yellow-700",
  High: "bg-red-100 text-red-700",
};

export default function SeverityCard({
  severity,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5">

      <p className="text-sm text-zinc-500">
        Severity
      </p>

      <span
        className={`mt-3 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${colors[severity]}`}
      >
        {severity}
      </span>

    </div>
  );
}