import { Popover, PopoverContent, PopoverTrigger } from "@rafty/ui";

export const popover_examples = {
  "popover:usage": (
    <Popover>
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
      <PopoverContent>
        <div>Popover Content</div>
      </PopoverContent>
    </Popover>
  ),
};
