import { useRef } from "react";
import { useDatePickerState } from "react-stately";
import { AriaDatePickerProps, DateValue, useDatePicker } from "react-aria";
import { CalendarButton } from "./calendar-button";
import { Calendar } from "./calendar";
import { DateField } from "./date-field";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { classNames } from "@rhino/utils";
import { cva } from "class-variance-authority";
import { PopoverContent } from "@rhino/popover";
import { InputGroup, Suffix } from "@rhino/input";

const DatePickerClasses = cva(
  "transition-colors rounded-md pr-10 relative flex items-center flex-1",
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

type DatePicker = {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function DatePicker<T extends DateValue>(
  props: AriaDatePickerProps<T> & DatePicker
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
    <div className="flex flex-col w-full">
      <InputGroup {...groupProps} ref={ref}>
        <div className={classNames(DatePickerClasses({ size, variant }))}>
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationTriangleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>
        <Suffix>
          <CalendarButton
            {...buttonProps}
            isActive={state.isOpen}
            variant="ghost"
          >
            <CalendarIcon className="w-5 h-5 text-secondary-700 dark:text-secondary-200 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300" />
          </CalendarButton>
        </Suffix>
      </InputGroup>
      <PopoverContent
        triggerRef={ref}
        triggerState={state}
        placement="bottom start"
      >
        <Calendar {...calendarProps} />
      </PopoverContent>
    </div>
  );
}
