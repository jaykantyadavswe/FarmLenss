import EmptyState from "./EmptyState";
import MessageBubble from "./MessageBubble";

import { ChatMessage } from "./types";

interface Props {
  messages: ChatMessage[];
}



export default function ChatMessages({
  messages,
}: Props) {
  if (!messages.length) {
    return <EmptyState />;
  }

  return (
    <main className="flex-1 overflow-y-auto">

      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-8">

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
          />
        ))}

      </div>

    </main>
  );
}