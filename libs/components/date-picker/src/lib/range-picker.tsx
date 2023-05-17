import { useRef } from "react";
import {
  DateRangePickerStateOptions,
  useDateRangePickerState,
} from "react-stately";
import { DateValue, useDateRangePicker } from "react-aria";
import { CalendarButton } from "./calendar-button";
import { RangeCalendar } from "./range-calendar";
import { DateField } from "./date-field";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import { classNames } from "@rhino/utils";
import { PopoverContent } from "@rhino/popover";
import { InputGroup, Suffix } from "@rhino/input";

const RangePickerClasses = cva(
  "flex transition-colors rounded-md pr-10 flex-1 relative",
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
          "border border-secondary-300 dark:border-secondary-700 group-focus-within:ring-2 dark:group-focus-within:ring-primary-100/20 group-focus-within:ring-primary-100 group-hover:border-primary-400 group-focus-within:border-primary-500 group-focus-within:group-hover:border-primary-500",
      },
    ],
  }
);

type RangePicker = {
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function RangePicker<T extends DateValue>(
  props: DateRangePickerStateOptions<T> & RangePicker
) {
  const { size = "md", variant = "outline" } = props;
  const state = useDateRangePickerState(props);
  const ref = useRef(null);
  const {
    groupProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  return (
    <div className="inline-flex flex-col text-left w-full">
      <InputGroup {...groupProps} ref={ref}>
        <div className={classNames(RangePickerClasses({ size, variant }))}>
          <DateField {...startFieldProps} />
          <span aria-hidden="true" className="px-2 dark:text-secondary-500">
            –
          </span>
          <DateField {...endFieldProps} />
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
        <RangeCalendar {...calendarProps} />
      </PopoverContent>
    </div>
  );
}
