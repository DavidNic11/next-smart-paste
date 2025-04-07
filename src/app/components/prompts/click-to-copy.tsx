"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

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
    <div
      className={`relative rounded-lg border border-neutral-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow group ${className}`}
    >
      <pre className="whitespace-pre-wrap text-sm text-neutral-800 font-mono leading-snug">{text}</pre>

      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium text-violet-600 bg-violet-50 border border-violet-200 px-2 py-1 rounded hover:bg-violet-100 transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4" /> Copied
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" /> {label}
          </>
        )}
      </button>
    </div>
  );
}
