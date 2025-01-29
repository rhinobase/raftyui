import { Skeleton } from "@rafty/ui";
import dynamic from "next/dynamic";
import { CodeContainer } from "./CodeContainer";
import { HighlightBlock } from "./HighlightBlock";

const ReactLiveBlock = dynamic(
  () => import("./ReactLiveBlock").then((mod) => mod.ReactLiveBlock),
  { loading: () => <Skeleton className="-mt-2 h-[400px] w-full rounded-lg" /> },
);

export type CodeBlock = {
  content: string;
  language: string;
  live?: boolean;
  noInline?: boolean;
};

export function CodeBlock({
  language,
  content,
  live = false,
  noInline = false,
}: CodeBlock) {
  if (language === "jsx" && live) {
    return <ReactLiveBlock code={content} noInline={noInline} />;
  }

  return (
    <div className="relative z-0">
      <CodeContainer>
        <HighlightBlock language={language} content={content} />
      </CodeContainer>
    </div>
  );
}
