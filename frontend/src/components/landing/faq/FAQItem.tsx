"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Props {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-green-400 bg-green-100">

      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="font-semibold">
          {question}
        </h3>

        <ChevronDown
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="border-t border-green-400 px-6 py-5 text-muted-foreground leading-7">
          {answer}
        </div>
      )}

    </div>
  );
}