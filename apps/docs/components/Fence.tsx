"use client";
import { Skeleton } from "@rafty/ui";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(
  () => import("./CodeBlock").then((mod) => mod.CodeBlock),
  { loading: () => <Skeleton className="-mt-2 h-[400px] w-full rounded-lg" /> },
);

export type Fence = {
  children: string;
  language: string;
  className?: string;
};

export function Fence(props: Fence) {
  return (
    <div className="relative">
      <CodeBlock {...props} />
    </div>
  );
}
