import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";

export const toggle_group_examples = {
  "toggle-group:usage": (
    <ToggleGroup type="single">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:type": (
    <ToggleGroup type="single" defaultValue="1">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:default": (
    <ToggleGroup type="single" defaultValue="3">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:barebone": (
    <ToggleGroup type="single" defaultValue="1">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:unstyled": (
    <ToggleGroup type="single" defaultValue="1">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
