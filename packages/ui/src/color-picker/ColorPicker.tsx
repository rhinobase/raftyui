import { ColorPicker as ColorPick, Portal } from "@ark-ui/react";
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

const TRIGGER = {
  sm: "size-[30px] p-1",
  md: "size-[38px] p-1.5",
  lg: "size-[46px] p-2",
};

const TRIGGER_CONTENT = {
  sm: "size-[18px]",
  md: "size-6",
  lg: "size-7",
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

export type ColorPicker = ComponentPropsWithoutRef<typeof ColorPick.Root> & {
  size?: "sm" | "md" | "lg";
  isReadOnly?: ValueOrFunction<boolean>;
  isDisabled?: ValueOrFunction<boolean>;
  isLoading?: ValueOrFunction<boolean>;
};

export const ColorPicker = forwardRef<
  ElementRef<typeof ColorPick.Root>,
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
      <ColorPick.Root
        {...props}
        disabled={disabled}
        readOnly={readOnly}
        ref={forwaredRef}
      >
        <ColorPick.Context>
          {(colorPicker) => (
            <>
              <ColorPick.Control className="flex gap-2">
                <ColorPick.ChannelInput channel="hex" asChild>
                  <InputField size={size} />
                </ColorPick.ChannelInput>
                <ColorPick.Trigger asChild>
                  <Button variant="outline" className={TRIGGER[size]}>
                    <div
                      style={{ background: colorPicker.valueAsString }}
                      className={TRIGGER_CONTENT[size]}
                    />
                  </Button>
                </ColorPick.Trigger>
              </ColorPick.Control>
              <Portal>
                <ColorPick.Positioner>
                  <ColorPick.Content
                    className={colorPickerContentClasses({ size })}
                  >
                    <ColorPick.Area
                      className={colorPickerAreaClasses({ size })}
                    >
                      <ColorPick.AreaBackground className="h-full" />
                      <ColorPick.AreaThumb className="size-4 rounded-full border-2 border-white" />
                    </ColorPick.Area>
                    <div className="flex items-center gap-3">
                      <ColorPick.EyeDropperTrigger asChild>
                        <Button variant="outline" size="icon">
                          <EyeDropperIcon className="size-5 dark:stroke-white" />
                        </Button>
                      </ColorPick.EyeDropperTrigger>
                      <div className="flex flex-1 flex-col gap-2">
                        <ColorPick.ChannelSlider
                          orientation="horizontal"
                          className="h-3"
                          channel="hue"
                        >
                          <ColorPick.ChannelSliderTrack className="h-full rounded-md" />
                          <ColorPick.ChannelSliderThumb className="size-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 outline-none" />
                        </ColorPick.ChannelSlider>
                        <ColorPick.ChannelSlider
                          orientation="horizontal"
                          className="h-3"
                          channel="alpha"
                        >
                          <ColorPick.TransparencyGrid className="rounded-md" />
                          <ColorPick.ChannelSliderTrack className="h-full rounded-md" />
                          <ColorPick.ChannelSliderThumb className="size-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 outline-none" />
                        </ColorPick.ChannelSlider>
                      </div>
                    </div>
                    <ColorPick.View className="flex gap-3" format="rgba">
                      <ColorPick.ChannelInput asChild channel="red">
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput asChild channel="green">
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput asChild channel="blue">
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="alpha" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                    </ColorPick.View>
                    <ColorPick.View format="hsla" className="flex gap-3">
                      <ColorPick.ChannelInput channel="hue" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="saturation" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="lightness" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="alpha" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                    </ColorPick.View>
                    <ColorPick.View format="hsba" className="flex gap-3">
                      <ColorPick.ChannelInput channel="hue" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="saturation" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="brightness" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                      <ColorPick.ChannelInput channel="alpha" asChild>
                        <InputField size={size} />
                      </ColorPick.ChannelInput>
                    </ColorPick.View>
                    <ColorPick.SwatchGroup className="grid grid-cols-6 gap-3 md:grid-cols-7">
                      {COLORS.map((color) => (
                        <ColorPick.SwatchTrigger value={color} key={color}>
                          <ColorPick.Swatch
                            value={color}
                            className={colorPickerSwatchClasses({ size })}
                          />
                        </ColorPick.SwatchTrigger>
                      ))}
                    </ColorPick.SwatchGroup>
                  </ColorPick.Content>
                </ColorPick.Positioner>
                <ColorPick.HiddenInput />
              </Portal>
            </>
          )}
        </ColorPick.Context>
      </ColorPick.Root>
    );
  },
);

ColorPicker.displayName = "ColorPicker";
