const prompts = [
  "🍅 Detect Tomato Disease",
  "🌾 Wheat Rust Analysis",
  "🌱 Plant Health",
  "💧 Irrigation Advice",
];

export default function PromptSuggestions() {
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2">

      {prompts.map((prompt) => (
        <button
          key={prompt}
          className="rounded-xl border bg-white p-5 text-left transition hover:border-green-500 hover:shadow-md"
        >
          {prompt}
        </button>
      ))}

    </div>
  );
}