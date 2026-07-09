import { Bot, User } from "lucide-react";
import { Message } from "./types";

interface Props {
  message: Message;
}

export default function MessageBubble({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex max-w-2xl gap-3 ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            isUser
              ? "bg-green-600 text-white"
              : "bg-green-100 text-green-600"
          }`}
        >
          {isUser ? <User size={18} /> : <Bot size={18} />}
        </div>

        {/* Message */}

        <div
          className={`rounded-2xl px-5 py-4 shadow-sm ${
            isUser
              ? "bg-green-600 text-white"
              : "border bg-white"
          }`}
        >
          <p className="leading-7">{message.content}</p>

          <p
            className={`mt-2 text-xs ${
              isUser
                ? "text-green-100"
                : "text-zinc-400"
            }`}
          >
            {message.createdAt}
          </p>
        </div>
      </div>
    </div>
  );
}