import {
  Camera,
  Leaf,
  MessageSquare,
} from "lucide-react";

const cards = [
  {
    icon: Camera,
    title: "Upload Crop Image",
    description: "Analyze crop diseases instantly.",
  },
  {
    icon: Leaf,
    title: "Disease Detection",
    description: "Get AI-powered diagnosis.",
  },
  {
    icon: MessageSquare,
    title: "Chat with AI",
    description: "Ask follow-up questions.",
  },
];

export default function WelcomeScreen() {
  return (
    <div className="flex h-full flex-col items-center justify-center px-10">

      <h1 className="text-4xl font-bold">
        Welcome to FarmLens 🌱
      </h1>

      <p className="mt-3 max-w-xl text-center text-muted-foreground">
        Upload an image of your crop and let AI help identify diseases,
        recommend treatments, and answer your farming questions.
      </p>

      <div className="mt-12 grid w-full max-w-5xl gap-6 md:grid-cols-3">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <div
              key={card.title}
              className="rounded-2xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Icon size={28} />
              </div>

              <h3 className="font-semibold">
                {card.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {card.description}
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
}