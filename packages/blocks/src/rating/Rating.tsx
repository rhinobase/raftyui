import { useThread } from "@fibr/react";
import { Rating as RaftyRating } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { RatingProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function Rating() {
  const { id, count } = useThread<RatingProps>();
  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftyRating
              id={name}
              name={name}
              count={count}
              value={value}
              onValueChange={onChange}
              disabled={disabled}
              ref={ref}
            />
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
