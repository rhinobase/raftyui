import { useRef } from "react";
import { useDatePickerState } from "react-stately";
import { AriaDatePickerProps, DateValue, useDatePicker } from "react-aria";
import { FieldButton } from "./FieldButton";
import { Calendar } from "./Calendar";
import { DateField } from "./DateField";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";
import { PopoverContent } from "../popover";

const DatePickerClasses = cva(
  "transition-colors rounded-l-md pr-10 relative flex items-center flex-1",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-1.5",
        lg: "px-4 py-2 text-lg",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline:
          "bg-transparent read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
        ghost: "border border-transparent",
      },
    },
    compoundVariants: [
      {
        variant: ["outline", "solid"],
        className:
          "border border-secondary-300 dark:border-secondary-700 group-focus-within:ring-2 dark:group-focus-within:ring-primary-100/20 group-focus-within:ring-primary-100 group-hover:border-primary-400 group-focus-within:border-primary-500 dark:group-focus-within:border-primary-300 ",
      },
    ],
  }
);

export function DatePicker<T extends DateValue>(
  props: AriaDatePickerProps<T> & {
    variant?: "solid" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
  }
) {
  const { size = "md", variant = "outline" } = props;
  const state = useDatePickerState(props);
  const ref = useRef(null);
  const { groupProps, fieldProps, buttonProps, calendarProps } = useDatePicker(
    props,
    state,
    ref
  );

  return (
    <div className="inline-flex flex-col text-left">
      <div {...groupProps} ref={ref} className="flex group">
        <div className={classNames(DatePickerClasses({ size, variant }))}>
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationTriangleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>
        <FieldButton
          {...buttonProps}
          isPressed={state.isOpen}
          variant={variant}
        >
          <CalendarIcon className="w-5 h-5 text-secondary-700 dark:text-secondary-200 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300" />
        </FieldButton>
      </div>
      {state.isOpen && (
        <PopoverContent triggerRef={ref} state={state} placement="bottom start">
          <Calendar {...calendarProps} />
        </PopoverContent>
      )}
    </div>
  );
}
