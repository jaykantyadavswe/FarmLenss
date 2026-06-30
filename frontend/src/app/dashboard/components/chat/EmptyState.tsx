import PromptSuggestions from "./PromptSuggestions";

export default function EmptyState() {
  return (
    <main className="flex flex-1 items-center justify-center">

      <div className="w-full max-w-3xl px-8 text-center">

        <h1 className="text-4xl font-bold">
          🌱 FarmLens AI
        </h1>

        <p className="mt-4 text-zinc-500">
          Upload a crop image or ask anything about farming.
        </p>

        <PromptSuggestions />

      </div>

    </main>
  );
}