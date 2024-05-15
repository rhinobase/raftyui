import { SegmentGroup } from "@ark-ui/react";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type SegmentedControlContext,
  SegmentedControlProvider,
  useSegmentedControlContext,
} from "./context";

export type SegmentedControl = ComponentPropsWithoutRef<
  typeof SegmentGroup.Root
> & {
  isDisabled?: ValueOrFunction<boolean>;
} & Partial<SegmentedControlContext>;

export const SegmentedControl = forwardRef<
  ElementRef<typeof SegmentGroup.Root>,
  SegmentedControl
>(
  (
    {
      className,
      children,
      isDisabled = false,
      isReadOnly = false,
      size = "md",
      orientation = "horizontal",
      ...props
    },
    forwaredRef,
  ) => {
    const disabled = props.disabled || getValue(isDisabled);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <SegmentedControlProvider value={{ isReadOnly: readOnly ?? false, size }}>
        <SegmentGroup.Root
          {...props}
          orientation={orientation}
          disabled={disabled}
          readOnly={readOnly}
          className={classNames(
            "border-secondary-300 dark:border-secondary-700 flex gap-4 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-l",
            className,
          )}
          ref={forwaredRef}
        >
          {children}
          <SegmentGroup.Indicator className="border-primary-500 dark:border-primary-300/90 transform data-[orientation=horizontal]:bottom-0 data-[orientation=vertical]:left-0 data-[orientation=vertical]:h-[var(--height)] data-[orientation=horizontal]:w-[var(--width)] data-[orientation=horizontal]:translate-y-px data-[orientation=vertical]:-translate-x-px data-[orientation=horizontal]:border-b-2 data-[orientation=vertical]:border-l-2" />
        </SegmentGroup.Root>
      </SegmentedControlProvider>
    );
  },
);

const itemclasses = cva(
  " duration-200 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60",
  {
    variants: {
      readonly: {
        true: "cursor-default",
        false: "cursor-pointer",
      },
      size: {
        sm: "text-sm data-[orientation=horizontal]:px-1 data-[orientation=vertical]:py-1 data-[orientation=horizontal]:pb-2 w-full data-[orientation=vertical]:pl-2",
        md: "text-base data-[orientation=horizontal]:px-1.5 data-[orientation=vertical]:py-1.5 data-[orientation=horizontal]:pb-3 w-full data-[orientation=vertical]:pl-3",
        lg: "text-lg data-[orientation=horizontal]:px-2 data-[orientation=vertical]:py-2 data-[orientation=horizontal]:pb-3.5 w-full data-[orientation=vertical]:pl-3.5",
      },
      defaultVariants: {
        readonly: false,
        size: "md",
      },
    },
  },
);

const itemTextClasses = cva(
  "text-secondary-500 dark:text-secondary-400 font-semibold data-[state=checked]:dark:text-white data-[state=checked]:text-black",
  {
    variants: {
      readonly: {
        true: "",
        false:
          "data-[hover]:text-secondary-800 data-[hover]:dark:text-secondary-200 transition-all",
      },
      defaultVariants: {
        readonly: false,
      },
    },
  },
);

export type SegmentedControlItem = ComponentPropsWithoutRef<
  typeof SegmentGroup.Item
>;

export const SegmentedControlItem = forwardRef<
  ElementRef<typeof SegmentGroup.Item>,
  SegmentedControlItem
>(({ className, children, ...props }, forwaredRef) => {
  const { isReadOnly, size } = useSegmentedControlContext();

  return (
    <SegmentGroup.Item
      {...props}
      className={classNames(
        itemclasses({ readonly: isReadOnly, size }),
        className,
      )}
      ref={forwaredRef}
    >
      <SegmentGroup.ItemText
        className={itemTextClasses({ readonly: isReadOnly })}
      >
        {children}
      </SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
    </SegmentGroup.Item>
  );
});