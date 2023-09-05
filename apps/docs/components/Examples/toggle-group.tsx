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
      className="flex w-full h-9"
    >
      <ToggleGroupItem
        value="1"
        className="border w-full   dark:text-white rounded-l-md  dark:data-[state=on]:bg-slate-500 dark:border-secondary-800 data-[state=on]:bg-blue-100 font-bold data-[state=on]:text-blue-600 "
      >
        1
      </ToggleGroupItem>
      <ToggleGroupItem
        value="2"
        className="border w-full   dark:text-white  dark:data-[state=on]:bg-slate-500 data-[state=on]:bg-blue-100 dark:border-secondary-800 font-bold data-[state=on]:text-blue-600 "
      >
        2
      </ToggleGroupItem>
      <ToggleGroupItem
        value="3"
        className="border w-full dark:text-white  rounded-r-md  dark:data-[state=on]:bg-slate-500 dark:border-secondary-800 data-[state=on]:bg-blue-100 data-[state=on]:text-blue-600 font-bold"
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
