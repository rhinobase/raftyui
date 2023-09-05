import { ErrorMessage, FieldControl, InputField, Label } from "@rafty/ui";

export function InputFieldExample() {
  return (
    <FieldControl name="input" isRequired>
      <Label>InputField</Label>
      <InputField type="text" />
      <ErrorMessage>This is a sample error message</ErrorMessage>
    </FieldControl>
  );
}
