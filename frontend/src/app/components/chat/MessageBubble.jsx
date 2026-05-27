import { Typewriter } from "./Typewriter";
import TypingIndicator from "./TypingIndicator";
import AnalysisCard from "./AnalysisCard";
import RightPanel from '../rightpanel/RightPanel'

export default function MessageBubble({ role, text, image, loading, analysis }) {
  return (
    <div
      className={`flex flex-col gap-2 max-w-[70%] ${
        role === "user" ? "ml-auto items-end" : "items-start"
      }`}
    >

      {/* 📷 Image (user side) */}
      {role === "user" && image && (
        <img
          src={image}
          alt="uploaded"
          className="w-40 h-40 object-cover rounded-xl shadow mr-5 mt-5"
        />
      )}

      {/* 🤖 Loading */}
      {loading ? (
        <TypingIndicator />
      ) : (
        <>
          {/* 🔥 ANALYSIS CARD (AI side) */}
          {analysis && (
            <AnalysisCard data={analysis} image={image} />
          )}

          {/* 💬 Explanation */}
          {text && (
            <div
              className={`p-3 rounded-xl ml-5 mr-5 ${
                role === "user"
                  ? "bg-green-600 text-white"
                  : "bg-white shadow"
              }`}
            >
              {role === "assistant" ? (
                <Typewriter text={text} />
              ) : (
                text
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}