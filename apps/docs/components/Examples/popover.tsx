import { Button, Popover, PopoverContent, PopoverTrigger } from "@rafty/ui";

export const popover_examples = {
  "popover:usage": (
    <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div>Popover Content</div>
      </PopoverContent>
    </Popover>
  ),
  "popover:size": (
    <Popover size="lg">
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div>Popover Content</div>
      </PopoverContent>
    </Popover>
  ),
  "popover:default": (
    <Popover defaultOpen>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>
        <div>Popover Content</div>
      </PopoverContent>
    </Popover>
  ),
  "popover:barebone": (
    <Popover isBarebone>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent className="bg-gray-800 rounded-lg shadow-lg w-[300px]">
        <div className="p-4 flex flex-col gap-4 text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex justify-end gap-3">
            <p className="text-gray-300">Step 2 of 4</p>
            <Button className="!bg-green-300 !text-black" size="sm">
              Demo 1
            </Button>
            <Button className="!bg-blue-300 !text-black" size="sm">
              Demo 2
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
