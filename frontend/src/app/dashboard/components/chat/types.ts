export interface ChatMessage {
    id: string;
    role: "user" | "assistant";

    text: string;

    image?: string;

    createdAt: string;
}