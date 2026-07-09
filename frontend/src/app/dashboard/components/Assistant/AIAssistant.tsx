import AssistantHeader from "./AssistantHeader";
import SuggestedQuestions from "./SuggestedQuestions";
import ChatInput from "./ChatInput";
import ChatMessages from "../chat/ChatMessages";

export default function AIAssistant() {
  return (
    <section className="flex h-[calc(100vh-120px)] flex-col rounded-3xl border bg-zinc-50 shadow-sm">
      <ChatMessages />

      <SuggestedQuestions />

      <ChatInput />

    </section>
  );
}