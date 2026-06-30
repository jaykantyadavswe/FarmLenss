interface Props {
  value: number;
}

export default function ConfidenceBar({ value }: Props) {
  return (
    <div>

      <div className="mb-2 flex justify-between">

        <span className="text-sm font-medium">
          Confidence
        </span>

        <span className="font-semibold text-green-600">
          {value}%
        </span>

      </div>

      <div className="h-3 rounded-full bg-zinc-200">

        <div
          style={{ width: `${value}%` }}
          className="h-3 rounded-full bg-green-600"
        />

      </div>

    </div>
  );
}