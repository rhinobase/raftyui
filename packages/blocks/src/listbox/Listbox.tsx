import { useThread } from "@fibr/react";
import { Listbox as RaftyListbox } from "@rafty/corp";
import { Controller } from "react-hook-form";
import type { ListboxProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function Listbox() {
  const { id, options } = useThread<ListboxProps>();

  return (
    <FieldWrapper>
      <TooltipWrapper>
        <Controller
          name={id}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyListbox
              name={name}
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
