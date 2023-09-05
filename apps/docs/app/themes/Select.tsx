import { Select, SelectItem } from "@rafty/ui";

export default function SelectExample() {
  return (
    <Select>
      <SelectItem key="option1">Option 1</SelectItem>
      <SelectItem key="option2">Option 2</SelectItem>
      <SelectItem key="option3">Option 3</SelectItem>
    </Select>
  );
}
