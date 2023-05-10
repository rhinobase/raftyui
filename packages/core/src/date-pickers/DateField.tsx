import { useRef } from "react";
import { DateFieldState, DateSegment, useDateFieldState } from "react-stately";
import {
  AriaDateFieldProps,
  DateValue,
  useDateField,
  useDateSegment,
  useLocale,
} from "react-aria";
import { createCalendar } from "@internationalized/date";

export function DateField<T extends DateValue>(props: AriaDateFieldProps<T>) {
  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  });

  const ref = useRef(null);
  const { fieldProps } = useDateField(props, state, ref);

  return (
    <div {...fieldProps} ref={ref} className="flex">
      {state.segments.map((segment, i) => (
        <DateSegments key={i} segment={segment} state={state} />
      ))}
    </div>
  );
}

function DateSegments({
  segment,
  state,
}: {
  segment: DateSegment;
  state: DateFieldState;
}) {
  const ref = useRef(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      style={{
        ...segmentProps.style,
      }}
      className={`px-1 box-content tabular-nums text-right outline-none rounded-sm focus:bg-primary-500 focus:text-white group ${
        !segment.isEditable ? "text-gray-500" : "text-gray-800"
      }`}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className="block w-full text-center italic text-gray-500 group-focus:text-white"
        style={{
          display: segment.isPlaceholder ? "block" : "none",
          height: segment.isPlaceholder ? "" : 0,
          pointerEvents: "none",
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? "" : segment.text}
    </div>
  );
}
