"use client";
import { Skeleton } from "@rafty/ui";
import dynamic from "next/dynamic";

const SandpackEmbed = dynamic(() => import("../SandpackEmbed"), {
  loading: () => (
    <Skeleton className="h-[700px] w-full rounded-lg lg:h-[350px]" />
  ),
});

export function Examples({ children }: { children?: string }) {
  if (!children)
    return (
      <p className="not-prose dark:bg-secondary-900 dark:border-secondary-800 flex w-full items-center justify-center rounded-lg border bg-transparent px-4 pb-6 pt-4 leading-none">
        No Example Found
      </p>
    );

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const code = children.props.children;

  return (
    <SandpackEmbed
      files={{
        "App.tsx": code,
      }}
    />
  );
}
