"use client";
import { Skeleton } from "@rafty/ui";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(
  () => import("./CodeBlock").then((mod) => mod.CodeBlock),
  {
    loading: () => <Skeleton className="-mt-2 h-[400px] w-full rounded-lg" />,
  },
);

export type Fence = {
  children: string;
  language: string;
  live?: boolean;
};

export function Fence({ language, children, live }: Fence) {
  return <CodeBlock language={language} content={children} live={live} />;
}
