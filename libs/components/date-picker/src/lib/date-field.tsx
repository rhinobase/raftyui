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
import { classNames } from "@rafty/utils";

export function DateField<T extends DateValue>({
  locale,
  ...props
}: AriaDateFieldProps<T> & { locale?: string }) {
  const { locale: defaultLocale } = useLocale();

  const state = useDateFieldState({
    ...props,
    locale: locale ?? defaultLocale,
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
<<<<<<<< HEAD:libs/components/date-picker/src/lib/date-field.tsx
      className={classNames(
        "focus:bg-primary-500 dark:focus:bg-primary-300 group box-content rounded-sm px-1 text-right tabular-nums outline-none focus:text-white dark:focus:text-black",
        !segment.isEditable
          ? "text-secondary-500"
          : "text-secondary-800 dark:text-secondary-200"
      )}
========
      className={`px-1 box-content tabular-nums text-right outline-none rounded-sm focus:bg-primary-500 dark:focus:bg-primary-300 focus:text-white dark:focus:text-black group ${
        !segment.isEditable
          ? "text-secondary-500"
          : "text-secondary-800 dark:text-secondary-200"
      }`}
>>>>>>>> migration:packages/core/src/date-picker/DateField.tsx
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
<<<<<<<< HEAD:libs/components/date-picker/src/lib/date-field.tsx
        className="text-secondary-500 block w-full text-center italic group-focus:text-white"
========
        className="block w-full text-center italic text-secondary-500 group-focus:text-white"
>>>>>>>> migration:packages/core/src/date-picker/DateField.tsx
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
