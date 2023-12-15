"use client";
import dynamic from "next/dynamic";

const CodeBlock = dynamic(() =>
  import("./CodeBlock").then((mod) => mod.CodeBlock),
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
