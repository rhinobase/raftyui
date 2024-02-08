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
import { useThemeEditorContext } from "../Context";

export function CammandExample() {
  const { isDisabled } = useThemeEditorContext();

  return (
    <Command className="dark:border-secondary-700 h-[330px] rounded-lg border shadow-md">
      <CommandInput
        disabled={isDisabled}
        placeholder="Type a command or search..."
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem disabled={isDisabled}>
            <CalendarIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem disabled={isDisabled}>
            <FaceSmileIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled={isDisabled}>
            <CalculatorIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem disabled={isDisabled}>
            <UserIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem disabled={isDisabled}>
            <CreditCardIcon width={16} height={16} className="mr-2 stroke-2" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
