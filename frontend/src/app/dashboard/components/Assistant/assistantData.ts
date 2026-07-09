import { Message } from "./types";

export const messages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "👋 Hello! I'm FarmLens AI. Ask me anything about crop diseases, fertilizers, pest control, or farming practices.",
    createdAt: "10:30 AM",
  },
  {
    id: "2",
    role: "user",
    content: "How do I treat Tomato Early Blight?",
    createdAt: "10:31 AM",
  },
  {
    id: "3",
    role: "assistant",
    content:
      "Early Blight can be controlled using Mancozeb or Chlorothalonil fungicides. Remove infected leaves and avoid overhead watering.",
    createdAt: "10:31 AM",
  },
];