"use client";
import { Fence } from "./Fence";

export type Example = {
  children?: JSX.Element;
};

export function Example({ children }: Example) {
  if (!children)
    return (
      <p className="not-prose dark:bg-secondary-900 dark:border-secondary-800 flex w-full items-center justify-center rounded-lg border bg-transparent p-4 leading-none">
        No Example Found
      </p>
    );

  return <Fence {...children.props} live />;
}
