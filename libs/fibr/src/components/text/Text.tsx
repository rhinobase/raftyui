import { createThread, useThread } from "@fibr/react";

export type Text = {
  name: string;
  value: string;
};

export function Text() {
  // Getting component config
  const config = useThread<Text>();

  return <p>{config.value}</p>;
}

export const text = createThread<Text>("text");
