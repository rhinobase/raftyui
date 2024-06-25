"use client";
import { useThread } from "@fibr/react";
import { Slider, SliderRange, SliderThumb, SliderTrack } from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { RangeSliderProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function RangeSlider() {
  const { id, ...restDataProps } = useThread<RangeSliderProps>();
  const { control } = useFormContext();

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <Slider
              {...restDataProps}
              name={name}
              value={value}
              disabled={disabled}
              onValueChange={(value) => onChange(value.splice(0, 2))}
              ref={ref}
            >
              <SliderTrack>
                <SliderRange />
              </SliderTrack>
              <SliderThumb />
              <SliderThumb />
            </Slider>
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
