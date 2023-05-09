import React, { useRef } from "react";
import { mergeProps } from "@react-aria/utils";
import { classNames } from "../utils";
import {
  AriaCheckboxProps,
  VisuallyHidden,
  useCheckbox,
  useFocusRing,
} from "react-aria";
import {
  CheckboxGroupProps,
  CheckboxGroupState,
  useToggleState,
} from "react-stately";
import { CheckIcon } from "@heroicons/react/24/outline";

export function Checkbox(props: AriaCheckboxProps) {
  const state = useToggleState(props);
  const ref = useRef<HTMLInputElement>(null);
  const { inputProps } = useCheckbox(props, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <label className="flex items-center group">
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <div
        className={classNames(
          state.isSelected
            ? "bg-primary-500 group-active:bg-primary-600"
            : "bg-white",
          "text-white",
          "border-2",
          "rounded",
          props.isDisabled
            ? "border-gray-300"
            : isFocusVisible || state.isSelected
            ? "border-primary-500 group-active:border-primary-600"
            : "border-gray-500 group-active:border-gray-600",
          "w-5",
          "h-5",
          "flex",
          "flex-shrink-0",
          "justify-center",
          "items-center",
          "mr-2",
          isFocusVisible ? "shadow-outline" : "",
          "transition",
          "ease-in-out",
          "duration-150"
        )}
        aria-hidden="true"
      >
        <CheckIcon
          strokeWidth={3}
          strokeDasharray={22}
          strokeDashoffset={state.isSelected ? 44 : 66}
          className="w-4 h-4 text-white"
          style={{
            transition: "all 400ms",
          }}
        />
      </div>
      <span
        className={classNames(
          props.isDisabled
            ? "text-gray-400"
            : "text-gray-700 group-active:text-gray-800",
          "select-none"
        )}
      >
        {props.children}
      </span>
    </label>
  );
}

import { useCheckboxGroupState } from "react-stately";
import { useCheckboxGroup, useCheckboxGroupItem } from "react-aria";

const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
  null
);

export function CheckboxGroup(
  props: CheckboxGroupProps & { children: React.ReactNode }
) {
  const { children, label, description, errorMessage, validationState } = props;
  const state = useCheckboxGroupState(props);
  const { groupProps, labelProps, descriptionProps, errorMessageProps } =
    useCheckboxGroup(props, state);

  return (
    <div {...groupProps}>
      <span {...labelProps}>{label}</span>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {errorMessage && validationState === "invalid" && (
        <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
          {errorMessage}
        </div>
      )}
    </div>
  );
}

// import React, { useRef } from "react";
// import { classNames } from "../utils";
// import {
//   useCheckbox,
//   useFocusRing,
//   VisuallyHidden,
//   mergeProps,
//   useCheckboxGroup,
// } from "react-aria";
// import {
//   useToggleState,
//   useCheckboxGroupState,
//   CheckboxGroupProps,
//   CheckboxGroupState,
// } from "react-stately";
// import type { AriaCheckboxProps } from "@react-types/checkbox";
// import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

// const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
//   null
// );

// export function CheckboxGroup(
//   props: CheckboxGroupProps & { children: React.ReactNode }
// ) {
//   const { children, label, description, errorMessage, validationState } = props;
//   const state = useCheckboxGroupState(props);
//   const { groupProps, labelProps, descriptionProps, errorMessageProps } =
//     useCheckboxGroup(props, state);

//   return (
//     <div {...groupProps}>
//       <span {...labelProps}>{label}</span>
//       <CheckboxGroupContext.Provider value={state}>
//         {children}
//       </CheckboxGroupContext.Provider>
//       {description && (
//         <div {...descriptionProps} style={{ fontSize: 12 }}>
//           {description}
//         </div>
//       )}
//       {errorMessage && validationState === "invalid" && (
//         <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
//           {errorMessage}
//         </div>
//       )}
//     </div>
//   );
// }

// type Checkbox = {
//   children?: React.ReactNode;
//   size?: "sm" | "md" | "lg";
//   indeterminate?: boolean;
// } & Omit<JSX.IntrinsicElements["input"], "size"> &
//   AriaCheckboxProps;

// const icons = [CheckIcon, MinusIcon];

// export function Checkbox({
//   children,
//   className,
//   size = "md",
//   checked = false,
//   indeterminate = false,
//   ...props
// }: Checkbox) {
//   const state = useToggleState(props);
//   const ref = useRef<HTMLInputElement>(null);
//   const { inputProps } = useCheckbox(props, state, ref);
//   const { focusProps, isFocusVisible } = useFocusRing();

//   const Icon = icons[Number(props.isIndeterminate)];

//   return (
//     <label className="group flex items-center">
//       <VisuallyHidden>
//         <input {...mergeProps(inputProps, focusProps)} ref={ref} />
//       </VisuallyHidden>
//       <div
//         className={classNames(
//           state.isSelected
//             ? "group-active:bg-primary-600 bg-primary-500"
//             : "bg-white",
//           "rounded border-2 text-white",
//           props.isDisabled
//             ? "border-gray-300"
//             : isFocusVisible || state.isSelected
//             ? "group-active:border-primary-600 border-primary-500"
//             : "border-gray-500 group-active:border-gray-600",
//           "mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center",
//           isFocusVisible && "shadow-outline",
//           "transition duration-150 ease-in-out",
//           props.validationState &&
//             "!border-error-500 group-active:!bg-error-600"
//         )}
//         aria-hidden="true"
//       >
//         <Icon
//           style={{
//             transition: "all 400ms",
//           }}
//         />
//       </div>
//       <span
//         className={classNames(
//           props.isDisabled
//             ? "text-gray-400"
//             : "text-gray-700 group-active:text-gray-800",
//           "select-none",
//           props.validationState && "!text-error-500"
//         )}
//       >
//         {children}
//       </span>
//     </label>
//   );
// }
