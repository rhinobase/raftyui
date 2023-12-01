import {
  HiOutlineCalendar,
  HiOutlineFaceSmile,
  HiOutlineCalculator,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";
import {
  Command,
  CommandList,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@rafty/ui";

export const command_examples = {
  "command:usage": (
    <Command className="dark:border-secondary-700 rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <HiOutlineCalendar className="mr-2 stroke-2" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <HiOutlineFaceSmile className="mr-2 stroke-2" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <HiOutlineCalculator className="mr-2 stroke-2" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <HiOutlineUser className="mr-2 stroke-2" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HiOutlineCreditCard className="mr-2 stroke-2" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <HiOutlineCog8Tooth className="mr-2 stroke-2" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
