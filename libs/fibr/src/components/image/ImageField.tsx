import { createThread, useThread } from "@fibr/react";

export type ImageField = {
  name: string;
};

export function ImageField() {
  return (
    <img
      src="https://via.placeholder.com/200"
      alt="placeholder"
      height={500}
      width={500}
      className="object-cover"
    />
  );
}

export const image = createThread<ImageField>("image");
