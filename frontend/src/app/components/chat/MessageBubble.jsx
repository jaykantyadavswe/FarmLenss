import Image from "next/image";
import { Typewriter } from "./Typewriter";
import TypingIndicator from "./TypingIndicator";
import AnalysisCard from "./AnalysisCard";

export default function MessageBubble({ role, text, image, loading, analysis, title }) {
  return (
    <div
      className={`flex w-full flex-col gap-3 ${
        role === "user" ? "items-end" : "items-start"
      }`}
    >

      {role === "user" && image && (
        <Image
          src={image}
          alt="Uploaded crop"
          width={160}
          height={160}
          unoptimized
          className="h-40 w-40 rounded-2xl object-cover shadow-sm ring-1 ring-slate-200"
        />
      )}

      {loading ? (
        <TypingIndicator />
      ) : (
        <>
          {analysis && (
            <AnalysisCard data={analysis} image={image} title={title}/>
          )}

          {text && (
            <div
              className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm ${
                role === "user"
                  ? "bg-emerald-600 text-white"
                  : "border border-slate-200 bg-white text-slate-700"
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
