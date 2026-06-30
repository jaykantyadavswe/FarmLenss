import { Sparkles } from "lucide-react";

export default function RecommendationCard() {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

      <div className="mb-3 flex items-center gap-2">

        <Sparkles
          size={18}
          className="text-green-600"
        />

        <h3 className="font-semibold">

          AI Recommendation

        </h3>

      </div>

      <p className="text-sm leading-7 text-zinc-700">

        Apply Mancozeb fungicide within the next
        48 hours. Remove infected leaves immediately
        and reduce overhead irrigation to prevent
        further fungal spread.

      </p>

    </div>
  );
}