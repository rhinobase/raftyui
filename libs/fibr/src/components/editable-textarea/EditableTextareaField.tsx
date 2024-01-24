import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type EditableTextareaField = {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  editIcon?: ReactElement;
};

export function EditableTextareaField() {
  // Getting component config
  const config = useThread<EditableTextareaField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const editableTextarea =
  createThread<EditableTextareaField>("editable-textarea");
