import Image from "next/image";

import { Bot, User } from "lucide-react";

import { ChatMessage } from "./types";

interface Props {
  message: ChatMessage;
}

export default function MessageBubble({
  message,
}: Props) {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="rounded-full bg-green-600 p-3 text-white">
          <Bot size={18} />
        </div>
      )}

      <div
        className={`max-w-2xl rounded-2xl p-5 ${
          isUser
            ? "bg-green-600 text-white"
            : "bg-white border"
        }`}
      >
        {message.image && (
          <Image
            src={message.image}
            alt=""
            width={320}
            height={220}
            className="mb-4 rounded-xl"
          />
        )}

        <p className="leading-7">
          {message.text}
        </p>

        <p className="mt-3 text-xs opacity-70">
          {message.createdAt}
        </p>
      </div>

      {isUser && (
        <div className="rounded-full bg-zinc-200 p-3">
          <User size={18} />
        </div>
      )}
    </div>
  );
}