import PromptSuggestions from "./PromptSuggestions";

export default function EmptyState() {
  return (
    <div className="mx-auto w-full max-w-4xl px-8 text-center">

      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
        🌱
      </div>

      <h1 className="mt-8 text-5xl font-bold">
        FarmLens AI
      </h1>

      <p className="mt-5 text-lg text-zinc-500">
        Upload a crop image or ask anything about your crops.
      </p>

      <PromptSuggestions />

    </div>
  );
}