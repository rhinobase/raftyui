import { createThread, useThread } from "@fibr/react";
import Image from "next/image";
import { FieldWrapper } from "../FieldWrapper";

export type ImageField = {
  name: string;
  src: string;
};

export function ImageField() {
  const config = useThread<ImageField>();

  return (
    <FieldWrapper name={config.name}>
      <img
        src={config.src}
        alt=""
        height={500}
        width={500}
        className="object-cover"
      />
    </FieldWrapper>
  );
}

export const image = createThread<ImageField>("image");
