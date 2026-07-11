import AssistantHeader from "./AssistantHeader";
import SuggestedQuestions from "./SuggestedQuestions";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessagess";

export default function AIAssistant() {
  return (
    <section className="flex h-[calc(100vh-120px)] flex-col bg-zinc-50">
      <ChatMessages />

      <SuggestedQuestions />

      <ChatInput />

    </section>
  );
}