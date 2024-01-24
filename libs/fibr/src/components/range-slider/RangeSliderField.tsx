import { createThread, useThread } from "@fibr/react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { classNames } from "@rafty/ui";
import React from "react";
import { Controller } from "react-hook-form";
import { FieldWrapper } from "../FieldWrapper";

export type RangeSliderField = {
  name: string;
  label: string;
  description: string;
};

export function RangeSliderField() {
  const config = useThread<RangeSliderField>();

  return (
    <FieldWrapper
      name={config.name}
      label={config.label}
      description={config.description}
    >
      <Controller
        name={config.name}
        defaultValue={[20, 30]}
        render={({ field: { onChange, value, ...register } }) => (
          <>
            <RangeSlider
              {...register}
              onValueChange={(value) => onChange(value)}
              value={value}
              max={100}
              step={1}
            />
            <div className="text-secondary-700 dark:text-secondary-400 text-xs font-semibold">
              {value[0]} - {value[1]}
            </div>
          </>
        )}
      />
    </FieldWrapper>
  );
}

export const rangeSlider = createThread<RangeSliderField>("range-slider");

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, tabIndex, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={classNames(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="bg-secondary-400 relative h-2 w-full grow overflow-hidden rounded-full">
      <SliderPrimitive.Range
        className="bg-primary-300 absolute h-full"
        data-inverted={props.inverted ? "" : undefined}
      />
    </SliderPrimitive.Track>
    {(props.value ?? props.defaultValue ?? []).map((_, index) => (
      <SliderPrimitive.Thumb
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        key={index}
        className="border-primary ring-offset-background focus-visible:ring-ring bg-primary-600 block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        {...(tabIndex !== undefined ? { tabIndex } : undefined)}
      />
    ))}
    {/* <SliderPrimitive.Thumb className="border-primary ring-offset-background focus-visible:ring-ring bg-primary-600 block h-5 w-5 rounded-full border-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" /> */}
  </SliderPrimitive.Root>
));
RangeSlider.displayName = SliderPrimitive.Root.displayName;
