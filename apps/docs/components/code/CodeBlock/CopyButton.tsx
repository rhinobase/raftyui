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
