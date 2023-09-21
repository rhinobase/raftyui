import { ToggleGroup, ToggleGroupItem } from "@rafty/ui";

export const toggle_group_examples = {
  "toggle-group:usage": (
    <ToggleGroup type="single">
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:type": (
    <ToggleGroup type="multiple" defaultValue={["1"]}>
      <ToggleGroupItem value="1">1</ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:size": (
    <ToggleGroup type="single" defaultValue="1" size="sm">
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
    <ToggleGroup
      type="single"
      defaultValue="1"
      isBarebone
      className="flex h-9 w-full"
    >
      <ToggleGroupItem
        value="1"
        className="dark:border-secondary-800 w-full   rounded-l-md border  font-bold data-[state=on]:bg-blue-100 data-[state=on]:text-blue-600 dark:text-white dark:data-[state=on]:bg-slate-500 "
      >
        1
      </ToggleGroupItem>
      <ToggleGroupItem
        value="2"
        className="dark:border-secondary-800 w-full   border  font-bold data-[state=on]:bg-blue-100 data-[state=on]:text-blue-600 dark:text-white dark:data-[state=on]:bg-slate-500 "
      >
        2
      </ToggleGroupItem>
      <ToggleGroupItem
        value="3"
        className="dark:border-secondary-800 w-full rounded-r-md  border  font-bold data-[state=on]:bg-blue-100 data-[state=on]:text-blue-600 dark:text-white dark:data-[state=on]:bg-slate-500"
      >
        3
      </ToggleGroupItem>
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
