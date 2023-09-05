import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

export function ToggleGroupExample() {
  return (
    <ToggleGroup type="single" defaultValue="1">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  );
}
