// import { useRef } from "react";
// import {
//   DateRangePickerStateOptions,
//   useDateRangePickerState,
// } from "react-stately";
// import { DateValue, useDateRangePicker } from "react-aria";
// import { CalendarButton } from "./calendar-button";
// import { RangeCalendar } from "./range-calendar";
// import { DateField } from "./date-field";
// import {
//   CalendarIcon,
//   ExclamationTriangleIcon,
// } from "@heroicons/react/24/outline";
// import { cva } from "class-variance-authority";
// import { classNames } from "@rafty/utils";
// import { PopoverContent, InputGroup, Suffix } from "@rafty/ui";

// const RangePickerClasses = cva(
//   "flex transition-colors rounded-md pr-10 flex-1 relative",
//   {
//     variants: {
//       size: {
//         sm: "px-2 py-1 text-sm",
//         md: "px-3 py-1.5",
//         lg: "px-4 py-2 text-lg",
//       },
//       variant: {
//         solid: "bg-secondary-50 dark:bg-secondary-800/20",
//         outline:
//           "bg-transparent read-only:focus:border-secondary-300 dark:read-only:focus:border-secondary-700 read-only:focus:ring-0",
//         ghost: "border border-transparent",
//       },
//     },
//     compoundVariants: [
//       {
//         variant: ["outline", "solid"],
//         className:
//           "border border-secondary-300 dark:border-secondary-700 group-focus-within:ring-2 dark:group-focus-within:ring-primary-100/20 group-focus-within:ring-primary-100 group-hover:border-primary-400 group-focus-within:border-primary-500 group-focus-within:group-hover:border-primary-500",
//       },
//     ],
//   }
// );

// const IconClasses = {
//   size: {
//     sm: "h-3.5 w-3.5",
//     md: "h-5 w-5",
//     lg: "h-[26px] w-[26px]",
//   },
// };

// type RangePicker = {
//   variant?: "solid" | "outline" | "ghost";
//   size?: "sm" | "md" | "lg";
// };

// export function RangePicker<T extends DateValue>(
//   props: DateRangePickerStateOptions<T> & RangePicker
// ) {
//   const { size = "md", variant = "outline" } = props;
//   const state = useDateRangePickerState(props);
//   const ref = useRef(null);
//   const {
//     groupProps,
//     startFieldProps,
//     endFieldProps,
//     buttonProps,
//     calendarProps,
//   } = useDateRangePicker(props, state, ref);

//   return (
//     <div className="inline-flex w-full flex-col text-left">
//       <InputGroup {...groupProps} ref={ref}>
//         <div className={classNames(RangePickerClasses({ size, variant }))}>
//           <DateField {...startFieldProps} />
//           <span aria-hidden="true" className="dark:text-secondary-500 px-2">
//             –
//           </span>
//           <DateField {...endFieldProps} />
//           {state.validationState === "invalid" && (
//             <ExclamationTriangleIcon className="absolute right-10 h-6 w-6 text-red-500" />
//           )}
//         </div>
//         <Suffix
//           className={classNames(
//             size === "lg" && "w-12",
//             size === "sm" && "w-8"
//           )}
//         >
//           <CalendarButton
//             {...buttonProps}
//             isActive={state.isOpen}
//             variant="ghost"
//           >
//             <CalendarIcon
//               className={classNames(
//                 IconClasses.size[size],
//                 "text-secondary-700 dark:text-secondary-200 group-focus-within:text-primary-500 dark:group-focus-within:text-primary-300"
//               )}
//             />
//           </CalendarButton>
//         </Suffix>
//       </InputGroup>
//       {state.isOpen && (
//         <PopoverContent
//           triggerRef={ref}
//           triggerState={state}
//           placement="bottom start"
//         >
//           <RangeCalendar {...calendarProps} />
//         </PopoverContent>
//       )}
//     </div>
//   );
// }

"use client";

import * as React from "react";
import { format } from "date-fns";
import { DateRange, DayPickerRangeProps } from "react-day-picker";

import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  classNames,
} from "@rafty/ui";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { Calendar } from "./calendar";

type RangePicker = Omit<DayPickerRangeProps, "mode">;

export function RangePicker({ className, ...props }: RangePicker) {
  const [date, setDate] = React.useState<DateRange | undefined>(props.selected);

  return (
    <div className={classNames("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={classNames(
              "w-[300px] !justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto !p-0 border-none" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            {...props}
            selected={date}
            onSelect={(date, selectedDay, activeModifiers, e) => {
              setDate(date);
              if (props.onSelect && date)
                props.onSelect(date, selectedDay, activeModifiers, e);
            }}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
