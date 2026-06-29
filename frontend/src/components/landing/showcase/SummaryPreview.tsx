import { summary } from "./mockData";

export default function SummaryPreview() {
  return (
    <div className="w-80 border-l bg-zinc-50 p-5 ">

      <h3 className="mb-6 font-semibold">

        AI Summary

      </h3>

      <div className="space-y-5">

        <div>

          <p className="text-sm text-muted-foreground">
            Disease
          </p>

          <h4>{summary.disease}</h4>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">
            Confidence
          </p>

          <h4>{summary.confidence}</h4>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">
            Treatment
          </p>

          <h4>{summary.treatment}</h4>

        </div>

        <div>

          <p className="text-sm text-muted-foreground">
            Prevention
          </p>

          <h4>{summary.prevention}</h4>

        </div>

      </div>

    </div>
  );
}