import { report } from "./reportData";

export default function PreventionCard() {
  return (
    <div className="rounded-2xl border p-5">

      <h3 className="font-semibold">
        Prevention
      </h3>

      <ul className="mt-3 space-y-2">

        {report.prevention.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}

      </ul>

    </div>
  );
}