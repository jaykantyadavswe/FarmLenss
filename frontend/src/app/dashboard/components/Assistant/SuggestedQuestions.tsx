const questions = [
  "🍅 Tomato Diseases",
  "🌾 Best Fertilizer",
  "🌧 Weather Impact",
  "🦠 Pest Control",
];

export default function SuggestedQuestions() {
  return (
    <div className="flex flex-wrap gap-3 p-1 justify-center">
      {questions.map((q) => (
        <button
          key={q}
          className="rounded-full border bg-white px-4 py-2 text-sm hover:border-green-500 hover:bg-green-50"
        >
          {q}
        </button>
      ))}
    </div>
  );
}