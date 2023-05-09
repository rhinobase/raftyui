import { useRef } from "react";
import {
  DateRangePickerStateOptions,
  useDateRangePickerState,
} from "react-stately";
import { DateValue, useDateRangePicker } from "react-aria";
import { FieldButton } from "./FieldButton";
import { RangeCalendar } from "./RangeCalendar";
import { DateField } from "./DateField";
import { Dialog } from "./Dialog";
import {
  CalendarIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import { Popover } from "../combobox/PopOver";

export function RangePickers<T extends DateValue>(
  props: DateRangePickerStateOptions<T>
) {
  const state = useDateRangePickerState(props);
  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    startFieldProps,
    endFieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDateRangePicker(props, state, ref);

  return (
    <div className="relative inline-flex flex-col text-left">
      <span {...labelProps} className="text-sm text-gray-800">
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className="flex group">
        <div className="flex bg-white border border-gray-300 group-hover:border-gray-400 transition-colors rounded-l-md pr-10 group-focus-within:border-primary-600 group-focus-within:group-hover:border-primary-600 p-1 relative">
          <DateField {...startFieldProps} />
          <span aria-hidden="true" className="px-2">
            –
          </span>
          <DateField {...endFieldProps} />
          {state.validationState === "invalid" && (
            <ExclamationTriangleIcon className="w-6 h-6 text-red-500 absolute right-1" />
          )}
        </div>
        <FieldButton {...buttonProps} isPressed={state.isOpen}>
          <CalendarIcon className="w-5 h-5 text-gray-700 group-focus-within:text-primary-700" />
        </FieldButton>
      </div>
      {state.isOpen && (
        <Popover triggerRef={ref} state={state} placement="bottom start">
          <Dialog {...dialogProps}>
            <RangeCalendar {...calendarProps} />
          </Dialog>
        </Popover>
      )}
    </div>
  );
}
