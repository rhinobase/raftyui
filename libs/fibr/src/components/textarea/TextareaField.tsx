import { ThreadWithNameType } from "@fibr/react";
import { Textarea } from "@rafty/ui";
import { FieldWrapper } from "../FieldWrapper";

export function TextareaField(props: ThreadWithNameType) {
  return (
    <FieldWrapper name={props.name} label={props.label}>
      <Textarea />
    </FieldWrapper>
  );
}
