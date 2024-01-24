import { createThread, useThread } from "@fibr/react";

export type HeadingField = {
  name: string;
  level?: "1" | "2" | "3" | "4" | "5" | "6";
  value: string;
};

export function HeadingField() {
  // Getting component config
  const { level = "1", value } = useThread<HeadingField>();

  const Heading = `h${level}` as "h1";

  return <Heading>{value}</Heading>;
}

export const heading = createThread<HeadingField>("heading");
