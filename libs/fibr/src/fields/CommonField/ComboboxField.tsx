"use client";
import type { FStringFieldType, FStringListType } from "@fibr/core";
import type { FieldProps } from "@fibr/react";
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
import React, { useId } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { HiCheck } from "react-icons/hi";
import { HiChevronUpDown } from "react-icons/hi2";

export function findLabel(
  value: string | number,
  items: FStringListType<string>[],
) {
  let label: string | undefined;
  for (const item of items) {
    if (typeof item.value === "string" || typeof item.value === "number") {
      if (value === item.value) label = item.label;
    } else label = findLabel(value, item.value);

    if (label) return label;
  }
}

export function ComboboxField(props: FieldProps<FStringFieldType>) {
  const { control } = useFormContext();
  const [isOpen, setOpen] = React.useState(false);

  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => (
        <Popover open={isOpen} onOpenChange={setOpen}>
          <PopoverTrigger
            isDisabled={props.field.readOnly as boolean}
            variant="outline"
            role="combobox"
            aria-expanded={isOpen}
            className="w-full justify-between"
            rightIcon={
              <HiChevronUpDown
                className={classNames(
                  isOpen
                    ? "text-primary-500 dark:text-primary-400"
                    : "text-secondary-500 dark:text-secondary-400",
                  "shrink-0",
                )}
              />
            }
          >
            {field.value
              ? findLabel(field.value, props.field.options?.list ?? [])
              : (props.field.placeholder as string) ?? `Select ${props.name}`}
          </PopoverTrigger>
          <PopoverContent className="!w-[380px] !p-0 md:!w-[700px] lg:!w-[770px]">
            <Command>
              <CommandInput
                placeholder={
                  (props.field.placeholder as string) ?? `Search ${props.name}`
                }
              />
              <CommandList>
                {props.field.options && (
                  <Options
                    items={props.field.options.list}
                    type={props.field.type}
                    name={props.name}
                    onChange={() => setOpen(false)}
                  />
                )}
                <CommandEmpty>No data found</CommandEmpty>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  );
}

function Options(props: {
  items: FStringListType<string>[];
  type: string;
  name: string;
  onChange?: () => void;
}) {
  const { control } = useFormContext();
  const { field } = useController({ name: props.name, control });
  const components: JSX.Element[] = [];

  for (const { label, value } of props.items) {
    const key = useId();
    if (typeof value === "string" || typeof value === "number")
      components.push(
        <CommandItem
          key={key}
          value={String(value)}
          onSelect={(selected) => {
            const _value = field.value === selected ? undefined : selected;

            const value = props.type === "number" ? Number(_value) : _value;

            field.onChange(value);
            props.onChange?.();
          }}
          className="justify-between"
        >
          {label} {field.value === value && <HiCheck />}
        </CommandItem>,
      );
    else
      components.push(
        <CommandGroup key={key} heading={label}>
          <Options {...props} items={value} />
        </CommandGroup>,
      );
  }

  return components;
}
