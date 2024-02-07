import { ErrorMessage, FieldControl, InputField, Label } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function FieldControlExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <FieldControl isDisabled={isDisabled} name="name" isRequired>
      <Label>Label</Label>
      <InputField />
      <ErrorMessage>Error message will be displayed here</ErrorMessage>
    </FieldControl>
  );
}
