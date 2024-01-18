import { ThreadType, createThread, useThread } from "@fibr/react";
import { Textarea } from "@rafty/ui";
import { FieldWrapper } from "../FieldWrapper";

export type TextareaField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
};

export function TextareaField() {
  // Getting component config
  const config = useThread<TextareaField>();
  const { size = "md" } = config;

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <Textarea size={size} />
    </FieldWrapper>
  );
}

export const textarea = createThread<TextareaField>("textarea");
