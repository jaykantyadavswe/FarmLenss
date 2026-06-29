import {
  UploadCloud,
  BrainCircuit,
  MessageCircle,
  FileCheck,
} from "lucide-react";

export const workflowSteps = [
  {
    step: "01",
    title: "Upload Crop Image",
    description:
      "Upload a clear image of the affected crop along with an optional description of the issue.",
    icon: UploadCloud,
  },
  {
    step: "02",
    title: "AI Image Analysis",
    description:
      "FarmLens analyzes the image using Google's Gemini AI to identify diseases and crop health issues.",
    icon: BrainCircuit,
  },
  {
    step: "03",
    title: "Interactive AI Chat",
    description:
      "Continue the conversation by asking follow-up questions about treatments, prevention, or farming practices.",
    icon: MessageCircle,
  },
  {
    step: "04",
    title: "Save & Access Reports",
    description:
      "Every analysis is securely stored so users can revisit previous diagnoses and recommendations.",
    icon: FileCheck,
  },
];