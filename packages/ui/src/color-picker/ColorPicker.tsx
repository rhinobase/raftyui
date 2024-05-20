import { ColorPicker as ArkColorPicker, Portal } from "@ark-ui/react";
import { EyeDropperIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import { Button } from "../button";
import { InputField } from "../input-field";
import type { ValueOrFunction } from "../types";
import { getValue } from "../utils";

const COLORS = [
  "red",
  "blue",
  "green",
  "yellow",
  "pink",
  "black",
  "brown",
  "orange",
  "indigo",
  "maroon",
  "purple",
];

const colorPickerTriggerClasses = {
  size: {
    sm: "size-[30px] min-w-[30px] min-h-[30px] p-1",
    md: "size-[38px] min-w-[38px] min-h-[38px] p-1.5",
    lg: "size-[46px] min-w-[46px] min-h-[46px] p-2",
  },
};

const colorPickerContentClasses = cva(
  "dark:bg-secondary-900 border-secondary-200 dark:border-secondary-600 rounded-lg border bg-white drop-shadow-lg w-full",
  {
    variants: {
      size: {
        sm: "md:max-w-[280px] max-w-[250px] p-3 space-y-3",
        md: "md:max-w-[330px] max-w-[290px] p-4 space-y-4",
        lg: "md:max-w-[380px] max-w-[310px] p-5 space-y-[18px]",
      },
    },
  },
);

const colorPickerAreaClasses = cva("overflow-hidden rounded-md", {
  variants: {
    size: {
      sm: "h-[120px]",
      md: "h-[140px]",
      lg: "h-[160px]",
    },
  },
});

const colorPickerSwatchClasses = cva("rounded-md", {
  variants: {
    size: {
      sm: "md:h-[26px] h-[27px]",
      md: "md:h-8 h-[33px]",
      lg: "md:h-[38px] h-[36px]",
    },
  },
});

export type ColorPicker = ComponentPropsWithoutRef<
  typeof ArkColorPicker.Root
> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: ValueOrFunction<boolean>;
  isDisabled?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
};

export const ColorPicker = forwardRef<
  ElementRef<typeof ArkColorPicker.Root>,
  ColorPicker
>(
  (
    {
      size = "md",
      isReadOnly = false,
      isLoading = false,
      isDisabled = false,
      ...props
    },
    forwaredRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <ArkColorPicker.Root
        {...props}
        disabled={disabled}
        readOnly={readOnly}
        ref={forwaredRef}
      >
        <ArkColorPicker.Context>
          {(colorPicker) => (
            <>
              <ArkColorPicker.Control className="flex gap-2">
                <ArkColorPicker.ChannelInput channel="hex" asChild>
                  <InputField size={size} />
                </ArkColorPicker.ChannelInput>
                <ArkColorPicker.Trigger asChild>
                  <Button
                    variant="outline"
                    className={colorPickerTriggerClasses.size[size]}
                  >
                    <div
                      style={{ background: colorPicker.valueAsString }}
                      className="h-full w-full"
                    />
                  </Button>
                </ArkColorPicker.Trigger>
              </ArkColorPicker.Control>
              <Portal>
                <ArkColorPicker.Positioner>
                  <ArkColorPicker.Content
                    className={colorPickerContentClasses({ size })}
                  >
                    <ArkColorPicker.Area
                      className={colorPickerAreaClasses({ size })}
                    >
                      <ArkColorPicker.AreaBackground className="h-full" />
                      <ArkColorPicker.AreaThumb className="size-4 rounded-full border-2 border-white" />
                    </ArkColorPicker.Area>
                    <div className="flex items-center gap-3">
                      <ArkColorPicker.EyeDropperTrigger asChild>
                        <Button variant="outline" size="icon">
                          <EyeDropperIcon className="size-5 dark:stroke-white" />
                        </Button>
                      </ArkColorPicker.EyeDropperTrigger>
                      <div className="flex-1 space-y-1.5">
                        <ArkColorPicker.ChannelSlider
                          orientation="horizontal"
                          className="h-3"
                          channel="hue"
                        >
                          <ArkColorPicker.ChannelSliderTrack className="h-full rounded-md" />
                          <ArkColorPicker.ChannelSliderThumb className="size-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 outline-none" />
                        </ArkColorPicker.ChannelSlider>
                        <ArkColorPicker.ChannelSlider
                          orientation="horizontal"
                          className="h-3"
                          channel="alpha"
                        >
                          <ArkColorPicker.TransparencyGrid className="rounded-md" />
                          <ArkColorPicker.ChannelSliderTrack className="h-full rounded-md" />
                          <ArkColorPicker.ChannelSliderThumb className="size-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 outline-none" />
                        </ArkColorPicker.ChannelSlider>
                      </div>
                    </div>
                    <ArkColorPicker.View format="rgba" className="flex gap-3">
                      <ArkColorPicker.ChannelInput channel="red" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="green" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="blue" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="alpha" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                    </ArkColorPicker.View>
                    <ArkColorPicker.View format="hsla" className="flex gap-3">
                      <ArkColorPicker.ChannelInput channel="hue" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="saturation" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="lightness" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="alpha" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                    </ArkColorPicker.View>
                    <ArkColorPicker.View format="hsba" className="flex gap-3">
                      <ArkColorPicker.ChannelInput channel="hue" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="saturation" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="brightness" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                      <ArkColorPicker.ChannelInput channel="alpha" asChild>
                        <InputField size={size} />
                      </ArkColorPicker.ChannelInput>
                    </ArkColorPicker.View>
                    <ArkColorPicker.SwatchGroup className="grid grid-cols-6 gap-3 md:grid-cols-7">
                      {COLORS.map((color) => (
                        <ArkColorPicker.SwatchTrigger value={color} key={color}>
                          <ArkColorPicker.Swatch
                            value={color}
                            className={colorPickerSwatchClasses({ size })}
                          />
                        </ArkColorPicker.SwatchTrigger>
                      ))}
                    </ArkColorPicker.SwatchGroup>
                  </ArkColorPicker.Content>
                </ArkColorPicker.Positioner>
                <ArkColorPicker.HiddenInput />
              </Portal>
            </>
          )}
        </ArkColorPicker.Context>
      </ArkColorPicker.Root>
    );
  },
);

ColorPicker.displayName = "ColorPicker";
