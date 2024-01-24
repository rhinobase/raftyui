import { createThread, useThread } from "@fibr/react";

export type DividerField = {
  name: string;
};

export function DividerField() {
  return <div className="bg-secondary-300 dark:bg-secondary-700 h-px w-full" />;
}

export const divider = createThread<DividerField>("divider");
