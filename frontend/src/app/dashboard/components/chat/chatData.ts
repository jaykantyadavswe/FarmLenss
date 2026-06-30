import { ChatMessage } from "./types";

export const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    text: "Can you identify this disease?",
    image: "/images/history/tomato.jpg",
    createdAt: "10:30 AM",
  },
  {
    id: "2",
    role: "assistant",
    text: "The uploaded crop appears to have Early Blight with 96% confidence. The detailed report is available in the right panel.",
    createdAt: "10:31 AM",
  },
];