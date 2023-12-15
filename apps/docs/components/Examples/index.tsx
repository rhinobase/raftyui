"use client";
import { Skeleton } from "@rafty/ui";
import dynamic from "next/dynamic";

const SandpackEmbed = dynamic(() => import("../SandpackEmbed"), {
  loading: () => (
    <Skeleton className="h-[700px] w-full rounded-xl lg:h-[350px]" />
  ),
});

export function Examples({ children }: { children?: string }) {
  if (!children)
    return (
      <div className="w-full space-y-0">
        <p className="not-prose dark:bg-secondary-900 dark:border-secondary-800 flex w-full items-center justify-center rounded-t-xl border bg-transparent px-4 pb-6 pt-4">
          No Component Found
        </p>
      </div>
    );

  return (
    <SandpackEmbed
      files={{
        "./App.tsx": children,
      }}
    />
  );
}
