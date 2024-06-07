import {
  ColorPicker as ArkColorPicker,
  type ColorPickerChannelInputProps,
  type ColorPickerColorFormat,
  type ColorPickerRootProps,
  Portal,
  useColorPickerContext,
} from "@ark-ui/react";
import { EyeDropperIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { useFieldControlContext } from "../field-control";
import { InputField } from "../input-field";
import { InputGroup, Suffix } from "../input-group";
import type { ValueOrFunction } from "../types";
import { type SizeType, classNames, getValue } from "../utils";

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

const colorPickerContentClasses = cva(
  "dark:bg-secondary-900 border-secondary-200 dark:border-secondary-600 border bg-white drop-shadow-lg",
  {
    variants: {
      size: {
        sm: "p-2.5 space-y-2.5 rounded-md",
        md: "p-3 space-y-3 rounded-lg",
        lg: "p-3.5 space-y-3.5 rounded-xl",
      },
    },
  },
);

export type ColorPicker = ColorPickerRootProps & {
  size?: SizeType;
  isReadOnly?: ValueOrFunction;
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
  isInvalid?: ValueOrFunction;
};

export const ColorPicker = forwardRef<
  ElementRef<typeof ArkColorPicker.Root>,
  ColorPicker
>(function ColorPicker(
  {
    size = "md",
    name,
    disabled,
    readOnly,
    isReadOnly,
    isLoading,
    isDisabled,
    isInvalid,
    ...props
  },
  forwaredRef,
) {
  const fieldControlContext = useFieldControlContext() ?? {
    isDisabled: false,
    isLoading: false,
    isReadOnly: false,
    isRequired: false,
    isInvalid: false,
  };

  const _name = name ?? fieldControlContext.name;
  const _disabled =
    (disabled ?? getValue(isDisabled) ?? fieldControlContext.isDisabled) ||
    (getValue(isLoading) ?? fieldControlContext.isLoading);
  const _invalid = getValue(isInvalid) ?? fieldControlContext.isInvalid;
  const _readOnly =
    readOnly ?? getValue(isReadOnly) ?? fieldControlContext.isReadOnly;

  const colorPickerProps: ColorPickerRootProps = {
    ...props,
    name: _name,
    disabled: _disabled,
    readOnly: _readOnly,
  };

  return (
    <ArkColorPicker.Root {...colorPickerProps} ref={forwaredRef}>
      <ArkColorPicker.Context>
        {() => (
          <>
            <ColorPickerControl size={size} invalid={_invalid} />
            <Portal>
              <ArkColorPicker.Positioner>
                <ArkColorPicker.Content
                  className={colorPickerContentClasses({ size })}
                >
                  <ColorPickerArea size={size} />
                  <ColorChannelPicker />
                  <ColorPickerView
                    size={size}
                    format="rgba"
                    channels={["red", "green", "blue", "alpha"]}
                  />
                  <ColorPickerView
                    size={size}
                    format="hsla"
                    channels={["hue", "saturation", "lightness", "alpha"]}
                  />
                  <ColorPickerView
                    size={size}
                    format="hsba"
                    channels={["hue", "saturation", "brightness", "alpha"]}
                  />
                  <div className="space-y-2">
                    <p className="text-secondary-600 dark:text-secondary-400 text-xs font-medium">
                      Selected Colors
                    </p>
                    <ColorPickerSwatchGroup size={size} />
                  </div>
                </ArkColorPicker.Content>
              </ArkColorPicker.Positioner>
              <ArkColorPicker.HiddenInput />
            </Portal>
          </>
        )}
      </ArkColorPicker.Context>
    </ArkColorPicker.Root>
  );
});

const colorPickerInputSuffixClasses = cva("", {
  variants: {
    size: {
      sm: "p-1",
      md: "p-1.5",
      lg: "p-2",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const colorPickerTriggerClasses = cva(
  "border border-secondary-300 dark:border-secondary-700",
  {
    variants: {
      size: {
        sm: "size-[22px] min-w-[22px] min-h-[22px] rounded-sm",
        md: "size-[26px] min-w-[26px] min-h-[26px] rounded",
        lg: "size-[30px] min-w-[30px] min-h-[30px] rounded",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

type ColorPickerControl = {
  size: SizeType;
  invalid: boolean;
};

function ColorPickerControl({ size, invalid }: ColorPickerControl) {
  const { value } = useColorPickerContext();

  return (
    <ArkColorPicker.Control>
      <InputGroup size={size}>
        <ArkColorPicker.ChannelInput channel="hex" asChild>
          <InputField isInvalid={invalid} />
        </ArkColorPicker.ChannelInput>
        <Suffix
          className={classNames(
            "pointer-events-auto w-max",
            colorPickerInputSuffixClasses({ size }),
          )}
        >
          <ArkColorPicker.Trigger
            className={colorPickerTriggerClasses({ size })}
            style={{
              background: value.toString("css"),
            }}
          />
        </Suffix>
      </InputGroup>
    </ArkColorPicker.Control>
  );
}

const colorPickerAreaClasses = cva("overflow-hidden rounded-md", {
  variants: {
    size: {
      sm: "h-[120px]",
      md: "h-[140px]",
      lg: "h-[160px]",
    },
  },
});

type ColorPickerArea = {
  size: SizeType;
};

function ColorPickerArea({ size }: ColorPickerArea) {
  return (
    <ArkColorPicker.Area className={colorPickerAreaClasses({ size })}>
      <ArkColorPicker.AreaBackground className="h-full" />
      <ArkColorPicker.AreaThumb className="size-4 rounded-full border-2 border-white" />
    </ArkColorPicker.Area>
  );
}

function ColorChannelPicker() {
  return (
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
          <ArkColorPicker.ChannelSliderThumb className="size-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white outline-none" />
        </ArkColorPicker.ChannelSlider>
        <ArkColorPicker.ChannelSlider
          orientation="horizontal"
          className="h-3"
          channel="alpha"
        >
          <ArkColorPicker.TransparencyGrid className="rounded-md" />
          <ArkColorPicker.ChannelSliderTrack className="h-full rounded-md" />
          <ArkColorPicker.ChannelSliderThumb className="size-4 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white outline-none" />
        </ArkColorPicker.ChannelSlider>
      </div>
    </div>
  );
}

const colorPickerLabelClasses = cva(
  "text-center font-medium select-none text-secondary-600 dark:text-secondary-400",
  {
    variants: {
      size: {
        sm: "text-xs",
        md: "text-sm",
        lg: "text-base",
      },
    },
  },
);

type ColorPickerView = {
  size: SizeType;
  channels: ColorPickerChannelInputProps["channel"][];
  format: ColorPickerColorFormat;
};

function ColorPickerView({ size, channels, format }: ColorPickerView) {
  return (
    <ArkColorPicker.View format={format} className="flex gap-3">
      {channels.map((channel) => (
        <div key={channel} className="space-y-1">
          <p className={colorPickerLabelClasses({ size })}>
            {channel.slice(0, 1).toUpperCase()}
          </p>
          <CommonChannelInput channel={channel} />
        </div>
      ))}
    </ArkColorPicker.View>
  );
}

type CommonChannelInput = ColorPickerChannelInputProps;

function CommonChannelInput(props: CommonChannelInput) {
  return (
    <ArkColorPicker.ChannelInput {...props} asChild>
      <InputField className="size-12 p-0 text-center text-sm" />
    </ArkColorPicker.ChannelInput>
  );
}

const colorPickerSwatchClasses = cva("", {
  variants: {
    size: {
      sm: "md:size-[26px] size-[27px] rounded",
      md: "md:size-8 size-[33px] rounded-md",
      lg: "md:size-[38px] size-[36px] rounded-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type ColorPickerSwatchGroup = {
  size: SizeType;
};

function ColorPickerSwatchGroup({ size }: ColorPickerSwatchGroup) {
  return (
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
  );
}
