import { useEffect, useState } from "react";

export function Typewriter({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(prev => prev + text[i]);
      i++;
      if (i >= text.length) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}