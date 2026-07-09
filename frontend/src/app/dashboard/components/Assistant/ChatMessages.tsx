import { messages } from "./assistantData";
import MessageBubble from "./MessageBubble";

export default function ChatMessages() {
  return (
    <div className="flex-1 space-y-6 overflow-y-auto p-6">

      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
        />
      ))}

    </div>
  );
}