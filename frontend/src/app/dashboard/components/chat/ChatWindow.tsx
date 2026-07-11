"use client";

import ChatInput from "./ChatInput";
import ChatMessages from "../Assistant/ChatMessagess";

export default function ChatWindow() {
  return (
    <section className="flex h-full flex-1 flex-col bg-zinc-50">
      <ChatMessages />

      {/* <ChatInput /> */}

    </section>
  );
}