import {
  CalendarIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import FaceSmileIcon from "@heroicons/react/24/outline/FaceSmileIcon";
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Command,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@rafty/ui";

export function CommandExample() {
  return (
    <Command className="rounded-lg border dark:border-secondary-700 shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceSmileIcon className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <CalculatorIcon className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Cog8ToothIcon className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
