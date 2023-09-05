import { ErrorMessage, FieldControl, InputField, Label } from "@rafty/ui";

export default function InputFieldExample() {
  return (
    <FieldControl name="input" isRequired>
      <Label>InputField</Label>
      <InputField />
      <ErrorMessage>This is a sample error message</ErrorMessage>
    </FieldControl>
  );
}
