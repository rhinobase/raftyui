"use client";
import { useThread } from "@fibr/react";
import {
  RadioGroupItem,
  RadioGroup as RaftyRadioGroup,
  classNames,
} from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { RadioGroupProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function RadioGroup() {
  const { id, options, orientaion = "vertical" } = useThread<RadioGroupProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyRadioGroup
              id={name}
              value={value ?? undefined}
              onValueChange={onChange}
              isDisabled={disabled}
              ref={ref}
              className={classNames(
                orientaion === "horizontal" ? "flex-row gap-4" : "flex-col",
                "[&>div]:w-full xl:[&>div]:w-max",
              )}
            >
              {options.map((option) => {
                const _id = `${name}.${option.value}`;
                if (option.description)
                  return (
                    <div key={option.value} className="flex items-start">
                      <RadioGroupItem id={_id} value={option.value} />
                      <label
                        htmlFor={_id}
                        className="flex select-none flex-col gap-0.5 pl-2"
                      >
                        <span className="text-secondary-800 dark:text-secondary-200 text-sm font-medium leading-snug">
                          {option.label ?? option.value}
                        </span>
                        <span className="text-secondary-600 dark:text-secondary-400 text-sm leading-tight">
                          {option.description}
                        </span>
                      </label>
                    </div>
                  );
                return (
                  <RadioGroupItem
                    key={option.value}
                    id={_id}
                    value={option.value}
                  >
                    {option.label ?? option.value}
                  </RadioGroupItem>
                );
              })}
            </RaftyRadioGroup>
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
