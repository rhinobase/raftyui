"use client";
import { useThread } from "@fibr/react";
import { Switch } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { SwitchGroupProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function SwitchGroup() {
  const { id, options } = useThread<SwitchGroupProps>();

  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <div className="flex w-full flex-col gap-1.5">
          <Controller
            name={id}
            control={control}
            render={({ field: { name, onChange, ref, value, disabled } }) => (
              <>
                {options.map((option) => {
                  const _id = `${name}.${option.value}`;

                  return (
                    <Switch
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
                      ref={ref}
                    >
                      {option.label ?? option.value}
                    </Switch>
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
