"use client";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";
import { useState } from "react";

export type CopyButton = {
  content: string;
};

export function CopyButton({ content }: CopyButton) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 5000);
  };

  return (
    <Button
      onClick={handleCopyClick}
      className="absolute right-1 top-1 "
      variant="outline"
      size="icon"
      aria-label="Copy"
    >
      {isCopied ? (
        <CheckIcon height={16} width={16} className="text-green-300" />
      ) : (
        <DocumentDuplicateIcon
          height={16}
          width={16}
          className="text-slate-200"
        />
      )}
    </Button>
  );
}
