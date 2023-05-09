import * as React from "react";
import type { AriaSelectProps } from "@react-types/select";
import { useSelectState } from "react-stately";
import {
  useSelect,
  HiddenSelect,
  useButton,
  mergeProps,
  useFocusRing,
} from "react-aria";
import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { Popover } from "../combobox/PopOver";
import { ListBox } from "../combobox/ListBox";
import { applyStyleToMultipleVariants, classNames } from "../utils";
import { cva } from "class-variance-authority";
export { Item } from "react-stately";

const selectClasses = cva(
  "w-full appearance-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowedrelative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default outline-none ",
  {
    variants: {
      size: {
        sm: "px-2 py-1 text-sm rounded",
        md: "px-3 py-1.5 rounded-md",
        lg: "px-4 py-2 text-lg rounded-md",
      },
      variant: {
        solid: "bg-secondary-50 dark:bg-secondary-800/20",
        outline: "",
        ghost: "",
      },
      state: {
        true: "",
        false: "border-secondary-300",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "outline"],
        className: "border shadow-sm",
      },
      ...applyStyleToMultipleVariants({
        variant: ["solid", "outline"],
        size: ["sm", "md", "lg"],
        state: true,
        className:
          "ring-primary-200 border border-primary-500 dark:ring-primary-100/20 dark:border-primary-400 outline-none ring-2",
      }),
      ...applyStyleToMultipleVariants({
        variant: ["outline", "ghost"],
        size: ["sm", "md", "lg"],
        className: "bg-transparent dark:bg-secondary-900",
      }),
    ],
  }
);

export type Select = {
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

export function Select<T extends object>(props: AriaSelectProps<T> & Select) {
  // Create state based on the incoming props
  const state = useSelectState(props);

  const {
    size = "md",
    variant = "outline",
    className,
    placeholder = "Select an option",
  } = props;
  // Get props for child elements from useSelect
  const ref = React.useRef(null);
  const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps } = useFocusRing();

  return (
    <div className="relative">
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={classNames(
          selectClasses({
            state: state.isOpen,
            variant: variant,
            size: size,
          }),
          className
        )}
      >
        <span
          {...valueProps}
          className={classNames(
            state.selectedItem ? "text-gray-800" : "text-gray-500",
            "text-md"
          )}
        >
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </span>
        <ChevronUpDownIcon
          className={classNames(
            state.isOpen ? "text-primary-500" : "text-gray-500",
            "w-5 h-5"
          )}
        />
      </button>
      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          className="w-full"
        >
          <ListBox {...menuProps} state={state} size={size} />
        </Popover>
      )}
    </div>
  );
}

// import { cva } from "class-variance-authority";
// import { forwardRef } from "react";
// import { applyStyleToMultipleVariants, classNames } from "../utils";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const selectClasses = cva(
//   "w-full appearance-none outline-none dark:text-secondary-200 transition-all disabled:bg-secondary-100 disabled:dark:bg-secondary-800 disabled:cursor-not-allowed",
//   {
//     variants: {
//       size: {
//         sm: "px-2 py-1 text-sm rounded",
//         md: "px-3 py-1.5 rounded-md",
//         lg: "px-4 py-2 text-lg rounded-md",
//       },
//       variant: {
//         solid: "bg-secondary-50 dark:bg-secondary-800/20",
//         outline: "",
//         ghost: "",
//       },
//     },
//     compoundVariants: [
//       ...applyStyleToMultipleVariants({
//         variant: ["solid", "outline"],
//         size: ["sm", "md", "lg"],
//         className:
//           "border border-secondary-300 dark:border-zinc-700 hover:border-primary-500 dark:hover:border-primary-400 focus:ring-primary-200 focus:border-primary-500 dark:focus:ring-primary-100/20 dark:focus:border-primary-400 focus:outline-none focus:ring-2 ",
//       }),
//       ...applyStyleToMultipleVariants({
//         variant: ["outline", "ghost"],
//         size: ["sm", "md", "lg"],
//         className: "bg-transparent dark:bg-secondary-900",
//       }),
//     ],
//   }
// );

// export type Select = Omit<JSX.IntrinsicElements["select"], "size"> & {
//   size?: "sm" | "md" | "lg";
//   variant?: "solid" | "outline" | "ghost";
//   unstyled?: boolean;
// };

// export const Select = forwardRef<HTMLSelectElement, Select>(
//   (
//     {
//       children,
//       className,
//       size,
//       variant = "outline",
//       unstyled = false,
//       ...props
//     },
//     forwardedRef
//   ) => {
//     return (
//       <div className="relative">
//         <select
//           {...props}
//           className={
//             unstyled
//               ? className
//               : classNames(
//                   selectClasses({ size: size ?? "md", variant }),
//                   className
//                 )
//           }
//           ref={forwardedRef}
//         >
//           {children}
//         </select>
//         {!unstyled && (
//           <div className="pointer-events-none absolute top-0 right-0 flex h-full w-10 items-center justify-center">
//             <ChevronDownIcon className="dark:text-secondary-200 h-3 w-3" />
//           </div>
//         )}
//       </div>
//     );
//   }
// );

// Select.displayName = "Select";

// export type Option = JSX.IntrinsicElements["option"];

// export const Option = forwardRef<HTMLOptionElement, Option>(
//   ({ ...props }, forwardedRef) => {
//     return (
//       <option {...props} ref={forwardedRef}>
//         {props.children}
//       </option>
//     );
//   }
// );

// Option.displayName = "Option";
