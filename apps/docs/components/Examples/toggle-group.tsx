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
  "toggle-group:unstyled": (
    <ToggleGroup
      type="single"
      defaultValue="1"
      isUnstyled
      className="flex h-9 w-full"
    >
      <ToggleGroupItem
        value="1"
        className="dark:border-secondary-800 data-[state=on]:bg-primary-100   data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300  dark:data-[state=on]:bg-primary-300/20 w-full rounded-l-md border font-bold "
      >
        1
      </ToggleGroupItem>
      <ToggleGroupItem
        value="2"
        className="dark:border-secondary-800 data-[state=on]:bg-primary-100   data-[state=on]:text-primary-500  dark:data-[state=on]:text-primary-300 dark:data-[state=on]:bg-primary-300/20 w-full border font-bold"
      >
        2
      </ToggleGroupItem>
      <ToggleGroupItem
        value="3"
        className="dark:border-secondary-800 data-[state=on]:bg-primary-100 data-[state=on]:text-primary-500  dark:data-[state=on]:text-primary-300  dark:data-[state=on]:bg-primary-300/20 w-full rounded-r-md border font-bold"
      >
        3
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  "toggle-group:unstyledsub": (
    <ToggleGroup type="single" defaultValue="1">
      <ToggleGroupItem
        value="1"
        isUnstyled
        className="data-[state=on]:bg-primary-300/20 data-[state=on]:text-primary-500 dark:data-[state=on]:text-primary-300 w-full px-3 py-1  font-semibold"
      >
        1
      </ToggleGroupItem>
      <ToggleGroupItem value="2">2</ToggleGroupItem>
      <ToggleGroupItem value="3">3</ToggleGroupItem>
    </ToggleGroup>
  ),
};
