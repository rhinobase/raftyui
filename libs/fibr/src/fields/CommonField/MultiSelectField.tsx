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
  Text,
  classNames,
} from "@rafty/ui";
import React, { useId } from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { HiCheck } from "react-icons/hi";
import { HiChevronUpDown, HiXMark } from "react-icons/hi2";
import { findLabel } from "./ComboboxField";

export function MultiSelectField(props: FieldProps<FStringFieldType>) {
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
            className="relative w-full justify-between"
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
            {field.value == null || field.value.length === 0 ? (
              (props.field.placeholder as string) ?? `Select ${field.name}`
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {field.value.map((value: string | number) => (
                  <div
                    key={value}
                    className="bg-secondary-100 dark:bg-secondary-800 flex items-center gap-1 rounded py-0.5 pl-1.5 pr-0.5"
                  >
                    <Text className="text-xs leading-none">
                      {findLabel(value, props.field.options?.list ?? [])}
                    </Text>
                    {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
                    <div
                      className="dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900 rounded-sm p-0.5 text-red-500 hover:bg-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-1 dark:text-red-300 dark:hover:bg-red-300/10"
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();

                        // Removing the value
                        field.value.splice(
                          field.value.findIndex(
                            (item: string | number) => item === value,
                          ),
                          1,
                        );

                        // Saving the new value array
                        field.onChange(field.value);
                      }}
                    >
                      <HiXMark size={13} />
                    </div>
                  </div>
                ))}
              </div>
            )}
            {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
            <div
              className={classNames(
                field.value?.length > 1 ? "visible" : "invisible",
                "absolute right-8 rounded p-0.5",
                "dark:focus:ring-secondary-100 dark:focus:ring-offset-secondary-900 text-red-500 hover:bg-red-200/40 focus:outline-none focus:ring-2 focus:ring-red-200 focus:ring-offset-1 dark:text-red-300 dark:hover:bg-red-300/10",
              )}
              // TODO: need to check
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                field.onChange([]);
                setOpen(false);
              }}
            >
              <HiXMark />
            </div>
          </PopoverTrigger>
          <PopoverContent className="!w-[380px] !p-0 md:!w-[700px] lg:!w-[770px]">
            <Command>
              <CommandInput
                placeholder={
                  (props.field.placeholder as string) ?? `Search ${props.name}`
                }
              />
              <CommandList>
                {props.field?.options && (
                  <Options
                    items={props.field.options.list}
                    name={props.name}
                    type={props.field.type}
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
  name: string;
  type: string;
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
          onSelect={(value) => {
            const prev = (field.value as (string | number)[]) ?? [];
            const index = prev.findIndex((item) => item === value);

            if (index === -1)
              prev.push(props.type === "number" ? Number(value) : value);
            else prev.splice(index, 1);

            field.onChange(prev);
            props.onChange?.();
          }}
          className="justify-between"
        >
          {label}
          {field.value?.find((item: string | number) => item === value) && (
            <HiCheck />
          )}
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
