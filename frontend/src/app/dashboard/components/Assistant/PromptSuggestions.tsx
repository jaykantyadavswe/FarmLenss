import PromptCard from "./PromptCard";
import { promptSuggestions } from "./promptData";

export default function PromptSuggestions() {
  return (
    <div className="mt-12 grid gap-5 md:grid-cols-2">

      {promptSuggestions.map((prompt) => (
        <PromptCard
          key={prompt.id}
          prompt={prompt}
        />
      ))}

    </div>
  );
}