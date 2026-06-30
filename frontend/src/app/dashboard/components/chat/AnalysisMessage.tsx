import { analysis } from "./analysisData";
import DiseaseBadge from "./DiseaseBadge";
import ConfidenceBar from "./ConfidenceBar";

export default function AnalysisMessage() {
  return (
    <div className="mt-5 rounded-3xl border bg-white p-6">

      <DiseaseBadge disease={analysis.disease} />

      <h2 className="mt-5 text-2xl font-bold">
        Disease Detected
      </h2>

      <p className="mt-2 text-zinc-500">
        The uploaded crop appears to be affected by
        <span className="font-semibold">
          {" "}
          {analysis.disease}
        </span>
      </p>

      <div className="mt-6">
        <ConfidenceBar value={analysis.confidence} />
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <div>

          <h3 className="font-semibold">
            Symptoms
          </h3>

          <ul className="mt-3 space-y-2">

            {analysis.symptoms.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>

        <div>

          <h3 className="font-semibold">
            Treatment
          </h3>

          <ul className="mt-3 space-y-2">

            {analysis.treatments.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>

        <div>

          <h3 className="font-semibold">
            Prevention
          </h3>

          <ul className="mt-3 space-y-2">

            {analysis.prevention.map((item) => (
              <li key={item}>
                • {item}
              </li>
            ))}

          </ul>

        </div>

      </div>

      <button className="mt-8 rounded-xl bg-green-600 px-5 py-3 text-white transition hover:bg-green-700">

        Download Report

      </button>

    </div>
  );
}