"use client";
import { useThread } from "@fibr/react";
import { Checkbox as RaftyCheckbox } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { CheckboxGroupProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function CheckboxGroup() {
  const { id, options } = useThread<CheckboxGroupProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <div
          role="group"
          aria-labelledby="checkbox-group"
          className="flex w-full flex-col gap-1.5"
        >
          <Controller
            name={id}
            control={control}
            render={({ field: { name, onChange, ref, value, disabled } }) => (
              <>
                {options.map((option) => {
                  const _id = `${name}.${option.value}`;

                  return (
                    <RaftyCheckbox
                      key={option.value}
                      id={_id}
                      name={_id}
                      checked={value?.includes(option.value)}
                      onCheckedChange={(checked) => {
                        let tmp = value ? [...value] : [];
                        if (checked) tmp.push(option.value);
                        else
                          tmp = tmp.filter((value) => value !== option.value);

                        onChange(tmp);
                      }}
                      isDisabled={disabled}
                      isRequired={false}
                      ref={ref}
                    >
                      {option.label ?? option.value}
                    </RaftyCheckbox>
                  );
                })}
              </>
            )}
          />
        </div>
      </FieldWrapper>
    </TooltipWrapper>
  );
}
