"use client";
import { useThread } from "@fibr/react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import {
  Button,
  Combobox,
  ComboboxClearButton,
  ComboboxContent,
  ComboboxTrigger,
  Label,
  Switch,
  eventHandler,
} from "@rafty/ui";
import type { RefObject } from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import type { PermissionFieldProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function PermissionField() {
  const { id, options } = useThread<PermissionFieldProps>();

  const { control } = useFormContext();
  const { fields, append, remove, swap, insert } = useFieldArray({
    control,
    name: id,
  });

  const addField = eventHandler(() => append({}));

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <div className="mb-4 space-y-4">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="dark:border-secondary-700 flex items-center justify-center rounded-lg border-2 py-2"
            >
              <div className="space-y-4 px-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => swap(index, index - 1)}
                  disabled={index === 0}
                >
                  <ArrowUpIcon className="size-5 stroke-2" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => swap(index, index + 1)}
                  disabled={index === fields.length - 1}
                >
                  <ArrowDownIcon className="size-5 stroke-2" />
                </Button>
              </div>
              <div className="flex-1 space-y-4 py-3">
                <div className="space-y-2">
                  <Label className="font-semibold">Collection</Label>
                  <div className="flex items-center gap-2">
                    <Controller
                      name={`${id}.${index}.collection`}
                      control={control}
                      render={({
                        field: { name, onChange, ref, value, disabled },
                      }) => (
                        <Combobox
                          id={name}
                          type="single"
                          onSelectionChange={onChange}
                          selected={value}
                          isDisabled={disabled}
                          options={options}
                          triggerRef={
                            ref as unknown as RefObject<HTMLButtonElement>
                          }
                        >
                          <ComboboxTrigger />
                          <ComboboxClearButton />
                          <ComboboxContent />
                        </Combobox>
                      )}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  <SwitchField id={`${id}.${index}.list`} label="List" />
                  <SwitchField id={`${id}.${index}.view`} label="View" />
                  <SwitchField id={`${id}.${index}.create`} label="Create" />
                  <SwitchField id={`${id}.${index}.update`} label="Update" />
                  <SwitchField id={`${id}.${index}.delete`} label="Delete" />
                </div>
              </div>
              <div className="space-y-4 px-2">
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => insert(index + 1, {})}
                >
                  <PlusIcon className="size-5 stroke-2" />
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  colorScheme="error"
                  onClick={() => remove(index)}
                >
                  <TrashIcon className="size-5 stroke-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button onClick={addField} onKeyDown={addField} className="w-max">
          Add
        </Button>
      </FieldWrapper>
    </TooltipWrapper>
  );
}

function SwitchField({ id, label }: { id: string; label: string }) {
  const { control } = useFormContext();

  return (
    <div className="flex items-center gap-3">
      <Controller
        name={id}
        control={control}
        render={({ field: { name, onChange, ref, value, disabled } }) => (
          <Switch
            id={name}
            name={name}
            checked={value}
            onCheckedChange={onChange}
            isDisabled={disabled}
            ref={ref}
          />
        )}
      />
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}
