import {
  Leaf,
  Wheat,
  Droplets,
  FlaskConical,
} from "lucide-react";

type PromptItem = {
  id: string;
  title: string;
  description: string;
  icon: typeof Leaf;
};

export const promptSuggestions: PromptItem[] = [
  {
    id: "1",
    title: "Detect Tomato Disease",
    description: "Analyze crop image using AI",
    icon: Leaf,
  },
  {
    id: "2",
    title: "Diagnose Wheat Rust",
    description: "Find disease & treatment",
    icon: Wheat,
  },
  {
    id: "3",
    title: "Irrigation Advice",
    description: "Smart watering suggestions",
    icon: Droplets,
  },
  {
    id: "4",
    title: "Fertilizer Recommendation",
    description: "Improve crop nutrition",
    icon: FlaskConical,
  },
];