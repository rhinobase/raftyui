import { createThread, useThread } from "@fibr/react";

export type TextField = {
  value: string;
};

export function TextField() {
  const config = useThread<TextField>();

  return <p className="text-sm">{config.value}</p>;
}

export const text = createThread<TextField>("text");
