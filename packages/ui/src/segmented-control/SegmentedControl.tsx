"use client";
import {
  SegmentGroup,
  type SegmentGroupItemProps,
  type SegmentGroupRootProps,
} from "@ark-ui/react";
import { cva } from "class-variance-authority";
import { type ElementRef, forwardRef } from "react";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type SegmentedControlContext,
  SegmentedControlProvider,
  useSegmentedControlContext,
} from "./context";

export type SegmentedControl = SegmentGroupRootProps & {
  isDisabled?: ValueOrFunction;
  isLoading?: ValueOrFunction;
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
      isLoading = false,
      size = "md",
      orientation = "horizontal",
      ...props
    },
    forwaredRef,
  ) => {
    const disabled =
      props.disabled || getValue(isDisabled) || getValue(isLoading);
    const readOnly = props.readOnly || getValue(isReadOnly);

    return (
      <SegmentedControlProvider value={{ isReadOnly: readOnly ?? false, size }}>
        <SegmentGroup.Root
          {...props}
          orientation={orientation}
          disabled={disabled}
          readOnly={readOnly}
          className={classNames(
            "border-secondary-300 dark:border-secondary-700 flex gap-4 data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col data-[orientation=horizontal]:border-b data-[orientation=vertical]:border-l data-[disabled]:opacity-60",
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

export const segmentedControlItemClasses = cva(
  "data-[disabled]:cursor-not-allowed text-secondary-500 select-none dark:text-secondary-400 font-medium data-[state=checked]:dark:text-white data-[state=checked]:text-black",
  {
    variants: {
      readonly: {
        true: "cursor-default",
        false:
          "cursor-pointer data-[hover]:text-secondary-800 data-[hover]:dark:text-secondary-200 transition-all duration-200",
      },
      size: {
        sm: "text-sm data-[orientation=horizontal]:px-1 data-[orientation=vertical]:py-1 data-[orientation=horizontal]:pb-2.5 data-[orientation=vertical]:pl-2.5",
        md: "text-base data-[orientation=horizontal]:px-1.5 data-[orientation=vertical]:py-1.5 data-[orientation=horizontal]:pb-3 data-[orientation=vertical]:pl-3",
        lg: "text-lg data-[orientation=horizontal]:px-2 data-[orientation=vertical]:py-2 data-[orientation=horizontal]:pb-3.5 data-[orientation=vertical]:pl-3.5",
      },
      defaultVariants: {
        readonly: false,
        size: "md",
      },
    },
  },
);

export type SegmentedControlItem = SegmentGroupItemProps;

export const SegmentedControlItem = forwardRef<
  ElementRef<typeof SegmentGroup.Item>,
  SegmentedControlItem
>(({ className, children, ...props }, forwaredRef) => {
  const { isReadOnly, size } = useSegmentedControlContext();

  return (
    <SegmentGroup.Item
      {...props}
      className={classNames(
        segmentedControlItemClasses({ readonly: isReadOnly, size }),
        className,
      )}
      ref={forwaredRef}
    >
      <SegmentGroup.ItemText>{children}</SegmentGroup.ItemText>
      <SegmentGroup.ItemControl />
      <SegmentGroup.ItemHiddenInput />
    </SegmentGroup.Item>
  );
});
