"use client";
import { useThread } from "@fibr/react";
import {
  Slider as RaftySlider,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from "@rafty/ui";
import { Controller, useFormContext } from "react-hook-form";
import type { SliderProps } from "../types";
import { FieldWrapper, TooltipWrapper } from "../utils";

export function Slider() {
  const { id, max = 100, min = 0, step = 1 } = useThread<SliderProps>();
  const { control } = useFormContext();

  const sliderProps = {
    min,
    max,
    step,
  };

  return (
    <TooltipWrapper>
      <FieldWrapper>
        <Controller
          name={id}
          control={control}
          render={({ field: { name, onChange, ref, value, disabled } }) => (
            <RaftySlider
              {...sliderProps}
              name={name}
              value={[value]}
              disabled={disabled}
              onValueChange={(value) => onChange(value[0])}
              ref={ref}
              className="mb-8 mt-5"
            >
              <SliderTrack>
                <SliderRange />
              </SliderTrack>
              <SliderThumb />
            </RaftySlider>
          )}
        />
      </FieldWrapper>
    </TooltipWrapper>
  );
}
