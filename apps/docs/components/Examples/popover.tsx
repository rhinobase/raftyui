import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@rafty/ui";

export const popover_examples = {
  "popover:usage": (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <Text>Popover Content</Text>
      </PopoverContent>
    </Popover>
  ),
  "popover:size": (
    <Popover size="lg">
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <Text>Popover Content</Text>
      </PopoverContent>
    </Popover>
  ),

  "popover:showarrow": (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent showArrow>
        <Text>Popover Content</Text>
      </PopoverContent>
    </Popover>
  ),
  "popover:default": (
    <Popover defaultOpen>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <Text>Popover Content</Text>
      </PopoverContent>
    </Popover>
  ),
  "popover:barebone": (
    <Popover isBarebone>
      <PopoverTrigger
        className="rounded-md bg-slate-100 px-4 py-2 hover:bg-slate-100 hover:text-purple-600 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-500"
        size="lg"
      >
        Open
      </PopoverTrigger>
      <PopoverContent className="bg-secondary-50 w-[300px] space-y-4 rounded-lg p-4 shadow-lg dark:bg-stone-950">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3">
          <Button className="!bg-green-300 !text-black" size="sm">
            Demo 1
          </Button>
          <Button className="!bg-blue-300 !text-black" size="sm">
            Demo 2
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
