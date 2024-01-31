"use client";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { Button } from "@rafty/ui";
import { useCopyToClipboard } from "@uidotdev/usehooks";

export type CopyButton = {
  content: string;
};

export function CopyButton({ content }: CopyButton) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const isCopied = Boolean(copiedText);

  return (
    <Button
      onClick={() => copyToClipboard(content)}
      className="absolute right-1 top-1"
      variant="ghost"
      size="icon"
      aria-label="Copy"
    >
      {isCopied ? (
        <CheckIcon
          height={16}
          width={16}
          className="stroke-[3] text-green-400"
        />
      ) : (
        <DocumentDuplicateIcon
          height={16}
          width={16}
          className="text-secondary-200 stroke-2"
        />
      )}
    </Button>
  );
}
