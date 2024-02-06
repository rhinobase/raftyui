import {
  CalculatorIcon,
  CalendarIcon,
  Cog8ToothIcon,
  CreditCardIcon,
  FaceSmileIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@rafty/ui";

export function CammandExample() {
  return (
    <Command className="dark:border-secondary-700 rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <CalendarIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <FaceSmileIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <CalculatorIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <UserIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCardIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
