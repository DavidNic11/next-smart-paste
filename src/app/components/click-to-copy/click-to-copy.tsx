"use client";

import { useState } from "react";

interface ClickToCopyProps {
  text: string;
  label?: string;
  className?: string;
}

export default function ClickToCopy({ text, label = "Copy", className = "" }: ClickToCopyProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative group border border-neutral-200 rounded-md p-4 bg-white shadow ${className}`}>
      <pre className="whitespace-pre-wrap text-sm font-mono text-neutral-800">{text}</pre>

      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs bg-neutral-100 hover:bg-neutral-200 text-neutral-700 px-2 py-1 rounded transition"
      >
        {copied ? "Copied!" : label}
      </button>
    </div>
  );
}
