import { Select, SelectItem } from "@rafty/ui";
import { useThemeEditorContext } from "../Context";

export function SelectExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Select isDisabled={isDisabled} placeholder="Select">
      <SelectItem value="1">Option 1</SelectItem>
      <SelectItem value="2">Option 2</SelectItem>
      <SelectItem value="3">Option 3</SelectItem>
    </Select>
  );
}
