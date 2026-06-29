import { messages } from "./mockData";

export default function ChatPreview() {
  return (
    <div className="flex flex-1 flex-col">

      <div className="flex-1 space-y-6 p-6">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`max-w-md rounded-2xl p-4 ${
              message.role === "user"
                ? "ml-auto bg-green-600 text-white"
                : "bg-zinc-100"
            }`}
          >
            {message.text}
          </div>

        ))}

      </div>

      <div className="border-t p-5">

        <div className="rounded-xl border px-5 py-4 text-muted-foreground">

          Ask about your crop...

        </div>

      </div>

    </div>
  );
}