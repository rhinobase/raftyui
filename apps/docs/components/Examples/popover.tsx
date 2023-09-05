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
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent className="bg-secondary-100 dark:bg-gray-800 rounded-lg shadow-lg w-[300px] p-4 space-y-4">
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
