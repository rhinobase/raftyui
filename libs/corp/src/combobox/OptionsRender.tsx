import { CheckIcon } from "@heroicons/react/24/outline";
import { CommandGroup, CommandItem } from "@rafty/ui";
import { useId } from "react";
import { Combobox } from "./Combobox";

export type OptionsRender = Pick<Combobox, "options"> & {
  value: (string | number)[];
  onChange: (value: string | number) => void;
};

export function OptionsRender(props: OptionsRender) {
  const components: JSX.Element[] = [];

  for (const { label, value } of props.options) {
    if (typeof value === "string" || typeof value === "number") {
      const isSelected = props.value.findIndex((val) => val === value) !== -1;
      const id = useId();

      components.push(
        <CommandItem
          key={id}
          onSelect={() => props.onChange(value)}
          className="justify-between"
        >
          {label}
          {isSelected && (
            <CheckIcon className="h-3.5 w-3.5 stroke-2 opacity-70" />
          )}
        </CommandItem>,
      );
    } else {
      const id = useId();

      components.push(
        <CommandGroup key={id} heading={label} className="!p-0">
          <OptionsRender {...props} options={value} />
        </CommandGroup>,
      );
    }
  }

  return components;
}
