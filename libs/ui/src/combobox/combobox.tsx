import * as React from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";

export type Combobox = {
  options: { value: string; label: string }[];
  onChange?: (value: string, label: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  placeholder?: string;
  inputPlaceholder?: string;
};

export function Combobox({
  options,
  placeholder,
  inputPlaceholder,
  defaultOpen = false,
  ...props
}: Combobox) {
  const [isOpen, setOpen] = React.useState(defaultOpen ?? false);
  const [value, setValue] = React.useState<string>();

  return (
    <Popover open={props.open ?? isOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        variant="outline"
        role="combobox"
        aria-expanded={isOpen}
        className="w-full justify-between"
        rightIcon={
          <ChevronUpDownIcon
            className={classNames(
              isOpen
                ? "text-primary-500"
                : "text-secondary-500 dark:text-secondary-400",
              "h-4 w-4 shrink-0 stroke-2"
            )}
          />
        }
      >
        {value ? (
          options.find((option) => option.value === value)?.label
        ) : (
          <div className="text-secondary-500 dark:text-secondary-400">
            {placeholder}
          </div>
        )}
      </PopoverTrigger>
      <PopoverContent className="!w-[765px] !p-0">
        <Command>
          <CommandInput placeholder={inputPlaceholder} />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <CheckIcon
                  className={classNames(
                    "mr-2 h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
