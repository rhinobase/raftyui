"use client";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export function findLabel(value: string | number, items: ComboboxOption[]) {
  let label: string | undefined;
  for (const item of items) {
    if (typeof item.value === "string" || typeof item.value === "number") {
      if (value === item.value) label = item.label;
    } else label = findLabel(value, item.value);

    if (label) return label;
  }
}

export type ComboboxOption = {
  label: string;
  value: string | number | ComboboxOption[];
};

export type Combobox = {
  name?: string;
  value?: string | number;
  placeholder?: string;
  onChange?: (value?: string | number) => void;
  options?: ComboboxOption[];
  isDisabled?: boolean;
  isLoading?: boolean;
  isReadOnly?: boolean;
  isInvalid?: boolean;
  isMulti?: boolean;
};

export function Combobox({ ...props }: Combobox) {
  const triggerRef = useRef(null);
  const [contentwidth, setContentWidth] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    // @ts-ignore
    setContentWidth(triggerRef.current?.offsetWidth);
  }, []);

  const onChange = useCallback(
    (value?: string | number) => {
      props.onChange?.(value);
      setOpen(false);
    },
    [props.onChange],
  );

  return (
    <Popover open={isOpen} onOpenChange={setOpen}>
      <PopoverTrigger
        isDisabled={props.isReadOnly as boolean}
        variant="outline"
        role="combobox"
        aria-expanded={isOpen}
        className="w-full justify-between"
        rightIcon={
          <ChevronUpDownIcon
            className={classNames(
              isOpen
                ? "text-primary-500 dark:text-primary-400"
                : "text-secondary-500 dark:text-secondary-400",
              "shrink-0",
            )}
          />
        }
        ref={triggerRef}
      >
        {props.value
          ? findLabel(props.value, props.options ?? [])
          : props.placeholder ?? `Select ${props.name}`}
      </PopoverTrigger>
      <PopoverContent
        className="!p-0"
        style={{ width: contentwidth, maxWidth: "none" }}
      >
        <Command>
          <CommandInput
            placeholder={props.placeholder ?? `Search ${props.name}`}
          />
          <CommandList>
            {props.options && (
              <Options
                value={props.value}
                options={props.options}
                onChange={onChange}
              />
            )}
            <CommandEmpty>No data found</CommandEmpty>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

type Options = {
  value?: string | number;
  options: ComboboxOption[];
  onChange?: (value?: string | number) => void;
};

function Options(props: Options) {
  const components: JSX.Element[] = [];

  for (const { label, value } of props.options) {
    const key = useId();

    if (typeof value === "string" || typeof value === "number") {
      // Is the current value is selected
      const isSelected = props.value === value;

      components.push(
        <CommandItem
          key={key}
          onSelect={() => {
            // Checking, if the user wanna deselect the value
            const selectedValue = isSelected ? undefined : value;
            props.onChange?.(selectedValue);
          }}
          className="justify-between"
        >
          {label}{" "}
          {isSelected && (
            <CheckIcon className="h-3.5 w-3.5 stroke-2 opacity-70" />
          )}
        </CommandItem>,
      );
    } else
      components.push(
        <CommandGroup key={key} heading={label}>
          <Options {...props} options={value} />
        </CommandGroup>,
      );
  }

  return components;
}
