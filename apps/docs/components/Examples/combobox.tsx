import {
  Avatar,
  Command,
  Text,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandLoading,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spinner,
} from "@rafty/ui";
export const combobox_examples = {
  "combobox:usage": (
    <Popover>
      <PopoverTrigger>
        <Avatar />
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandList>
            <CommandGroup>
              <CommandItem />
              <CommandLoading>
                <Spinner />
                <Text />
              </CommandLoading>
              <CommandEmpty />
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  ),
};
