import { report } from "./reportData";

export default function SymptomsCard() {
  return (
    <div className="rounded-2xl border p-5">

      <h3 className="font-semibold">
        Symptoms
      </h3>

      <ul className="mt-3 space-y-2">

        {report.symptoms.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}

      </ul>

    </div>
  );
}