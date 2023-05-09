import { useRef } from "react";
import {
  useButton,
  useFocusRing,
  mergeProps,
  AriaButtonProps,
} from "react-aria";

export function CalendarButton(props: AriaButtonProps) {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { focusProps, isFocusVisible } = useFocusRing();
  return (
    <button
      {...mergeProps(buttonProps, focusProps)}
      ref={ref}
      className={`p-2 rounded-full ${props.isDisabled ? "text-gray-400" : ""} ${
        !props.isDisabled ? "hover:bg-primary-100 active:bg-primary-200" : ""
      } outline-none ${
        isFocusVisible ? "ring-2 ring-offset-2 ring-primary-600" : ""
      }`}
    >
      {props.children}
    </button>
  );
}

export function FieldButton(props: AriaButtonProps & { isPressed: boolean }) {
  const ref = useRef(null);
  const { buttonProps, isPressed } = useButton(props, ref);
  return (
    <button
      {...buttonProps}
      ref={ref}
      className={`px-2 -ml-px border transition-colors rounded-r-md group-focus-within:border-primary-600 group-focus-within:group-hover:border-primary-600 outline-none ${
        isPressed || props.isPressed
          ? "bg-gray-200 border-gray-400"
          : "bg-gray-50 border-gray-300 group-hover:border-gray-400"
      }`}
    >
      {props.children}
    </button>
  );
}
