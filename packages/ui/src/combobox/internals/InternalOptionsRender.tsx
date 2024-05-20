import { CheckIcon } from "@heroicons/react/24/outline";
import { useId } from "react";
import { CommandGroup, CommandItem } from "../../command";
import { useComboboxContext } from "../context";
import type { ComboboxOptionType } from "../types";

export function InternalOptionsRender({
  option: { label, value },
}: {
  option: ComboboxOptionType;
  index: number;
}) {
  const key = useId();
  const { selected, onSelectionChange } = useComboboxContext();

  if (Array.isArray(value))
    return (
      <CommandGroup heading={label} className="p-0">
        {value.map((val, index) => (
          <InternalOptionsRender
            key={`${index}-${key}`}
            option={val}
            index={index}
          />
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
      {isSelected && (
        <CheckIcon className="size-3.5 min-h-3.5 min-w-3.5 stroke-2 opacity-70" />
      )}
    </CommandItem>
  );
}
