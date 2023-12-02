import {
  CalendarIcon,
  FaceSmileIcon,
  CalculatorIcon,
  UserIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
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

CalendarIcon.displayName = "CalendarIcon";
FaceSmileIcon.displayName = "FaceSmileIcon";
CalculatorIcon.displayName = "CalculatorIcon";
UserIcon.displayName = "UserIcon";
CreditCardIcon.displayName = "CreditCardIcon";
Cog8ToothIcon.displayName = "Cog8ToothIcon";

export const command_examples = {
  "command:usage": (
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
          <CommandItem>
            <Cog8ToothIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
};
