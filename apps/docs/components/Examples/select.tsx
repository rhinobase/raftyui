import { Select, SelectItem } from "@rafty/ui";

export const select_examples = {
  "select:usage": (
    <Select>
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  ),

  "select:size": (
    <Select size="sm">
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  ),
  "select:variant": (
    <Select variant="solid">
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  ),
  "select:required": (
    <Select isRequired>
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  ),
  "select:disabled": (
    <Select isDisabled>
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  ),
  "select:readonly": (
    <Select isReadOnly>
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  ),
};
