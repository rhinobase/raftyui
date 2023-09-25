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
      <PopoverContent className="!w-96 space-y-3">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3">
          <Button size="sm">Button</Button>
          <Button size="sm" colorScheme="primary">
            Button
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  "popover:size": (
    <Popover size="sm">
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent className="!w-96 space-y-3">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3">
          <Button size="sm">Button</Button>
          <Button size="sm" colorScheme="primary">
            Button
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),

  "popover:showarrow": (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent className="!w-96 space-y-3" showArrow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3 py-1">
          <Button size="sm" colorScheme="success">
            Demo 1
          </Button>
          <Button size="sm" colorScheme="error">
            Demo 2
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  ),
  "popover:default": (
    <Popover open>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent className="!w-96 space-y-3">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </Text>
        <div className="flex justify-end gap-3 py-1">
          <Button size="sm" colorScheme="success">
            Demo 1
          </Button>
          <Button size="sm" colorScheme="error">
            Demo 2
          </Button>
        </div>
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
