"use client";
import RaftyIcon from "@rafty/icons";
import { Button, useBoolean } from "@rafty/ui";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { useEffect } from "react";

export type CopyButton = {
  content: string;
};

export function CopyButton({ content }: CopyButton) {
  const [, copyToClipboard] = useCopyToClipboard();
  const [copied, toggle] = useBoolean();

  useEffect(() => {
    if (!copied) return;

    // Use setTimeout to update the message after 1500 milliseconds (1.5 seconds)
    const timeoutId = setTimeout(() => {
      toggle(false);
    }, 1500);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [copied, toggle]);

  const handleCopy = () => {
    copyToClipboard(content);
    toggle(true);
  };

  return (
    <Button
      onClick={handleCopy}
      className="absolute right-1 top-1"
      variant="ghost"
      size="icon"
      aria-label="Copy"
    >
      {copied ? (
        <RaftyIcon
          type="check"
          height={16}
          width={16}
          className="stroke-[3] text-green-400"
        />
      ) : (
        <RaftyIcon
          type="document-duplicate"
          height={16}
          width={16}
          className="text-secondary-200 stroke-2"
        />
      )}
    </Button>
  );
}
