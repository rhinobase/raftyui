import { createThread, useThread } from "@fibr/react";
import { InputField } from "@rafty/ui";
import { useFormContext } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type EditableTextField = {
  name: string;
  label: string;
};

export function EditableTextField() {
  // Getting component config
  const config = useThread<EditableTextField>();
  const { register } = useFormContext();

  return (
    <FieldWrapper name={config.name} label={config.label}>
      <InputField {...register(config.name)} />
    </FieldWrapper>
  );
}

export const editableText = createThread<EditableTextField>("editable-text");
