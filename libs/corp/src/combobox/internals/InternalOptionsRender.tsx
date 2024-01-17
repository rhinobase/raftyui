import { CheckIcon } from "@heroicons/react/24/outline";
import { CommandGroup, CommandItem } from "@rafty/ui";
import { useComboboxContext } from "../context";
import { ComboboxOptionType } from "../types";

export type InternalOptionsRender = ComboboxOptionType;

export function InternalOptionsRender({ label, value }: InternalOptionsRender) {
  const { selected, onSelectionChange } = useComboboxContext();

  if (Array.isArray(value))
    return (
      <CommandGroup heading={label} className="p-0">
        {value.map((val, index) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          <InternalOptionsRender key={index} {...val} />
        ))}
      </CommandGroup>
    );

  // Checking if the current value is selected
  const isSelected = selected.findIndex((val) => val === value) !== -1;
  return (
    <CommandItem
      onSelect={() => onSelectionChange(value)}
      className="justify-between"
    >
      {label}
      {isSelected && <CheckIcon className="h-3.5 w-3.5 stroke-2 opacity-70" />}
    </CommandItem>
  );
}
