import { useThread } from "@fibr/react";
import { Listbox } from "@rafty/corp";
import { Controller } from "react-hook-form";
import type { MultiListboxProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function MultiListbox() {
  const { id, options } = useThread<MultiListboxProps>();

  return (
    <FieldWrapper>
      <TooltipWrapper>
        <Controller
          name={id}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <Listbox
              name={name}
              type="multi"
              items={options}
              onValueChange={onChange}
              value={value}
              isDisabled={disabled}
              ref={ref}
            />
          )}
        />
      </TooltipWrapper>
    </FieldWrapper>
  );
}
