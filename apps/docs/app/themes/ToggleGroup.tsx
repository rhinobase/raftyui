import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

export default function ToggleGroups() {
  return (
    <>
      <ToggleGroup type="single">
        <ToggleGroupItem value="1">1</ToggleGroupItem>
        <ToggleGroupItem value="2">2</ToggleGroupItem>
        <ToggleGroupItem value="3">3</ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
