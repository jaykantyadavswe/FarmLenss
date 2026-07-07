import ScoreCard from "./ScoreCard";
import {
  Activity,
  Brain,
  ScanSearch,
  TrendingUp,
} from "lucide-react";

const cards = [
  {
    title: "Crop Health",
    value: "92%",
    change: "+4.2%",
    icon: Activity,
    color: "green",
  },
  {
    title: "AI Diagnoses",
    value: "248",
    change: "+18",
    icon: Brain,
    color: "blue",
  },
  {
    title: "Analyses Today",
    value: "34",
    change: "+9",
    icon: ScanSearch,
    color: "amber",
  },
  {
    title: "Accuracy",
    value: "96%",
    change: "+1.8%",
    icon: TrendingUp,
    color: "emerald",
  },
] as const;

export default function AnalysisCard() {
  return (
    <section className="grid gap-6 p-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <ScoreCard
          key={card.title}
          {...card}
        />
      ))}
    </section>
  );
}