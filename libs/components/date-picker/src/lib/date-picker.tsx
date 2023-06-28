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
import { classNames } from "@rafty/utils";
import { cva } from "class-variance-authority";
import { PopoverContent, InputGroup, Suffix } from "@rafty/ui";

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

const IconClasses = {
  size: {
    sm: "h-3.5 w-3.5",
    md: "h-5 w-5",
    lg: "h-[26px] w-[26px]",
  },
};

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
    <div className="flex w-full flex-col">
      <InputGroup {...groupProps} ref={ref}>
        <div className={classNames(DatePickerClasses({ size, variant }))}>
          <DateField {...fieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationTriangleIcon className="absolute right-1 h-6 w-6 text-red-500" />
          )}
        </div>
        <Suffix
          className={classNames(
            size === "lg" && "w-12",
            size === "sm" && "w-8"
          )}
        >
          <CalendarButton
            {...buttonProps}
            isActive={state.isOpen}
            variant="ghost"
          >
            <CalendarIcon
              className={classNames(
                IconClasses.size[size],
                "text-secondary-700 dark:text-secondary-200 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300"
              )}
            />
          </CalendarButton>
        </Suffix>
      </InputGroup>
      {state.isOpen && (
        <PopoverContent
          triggerRef={ref}
          triggerState={state}
          placement="bottom start"
        >
          <Calendar {...calendarProps} />
        </PopoverContent>
      )}
    </div>
  );
}
