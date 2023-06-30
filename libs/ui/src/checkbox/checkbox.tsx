// import React, {
//   InputHTMLAttributes,
//   ReactNode,
//   RefObject,
//   forwardRef,
//   useRef,
// } from "react";
// import { classNames, mergeRefs } from "@rafty/utils";
// import {
//   AriaCheckboxGroupItemProps,
//   AriaCheckboxGroupProps,
//   AriaCheckboxProps,
//   VisuallyHidden,
//   useCheckbox,
//   useCheckboxGroup,
//   useCheckboxGroupItem,
// } from "react-aria";
// import {
//   CheckboxGroupState,
//   useToggleState,
//   useCheckboxGroupState,
// } from "react-stately";
// import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";

// const CheckboxGroupContext = React.createContext<CheckboxGroupState | null>(
//   null
// );

// export type CheckboxGroup = AriaCheckboxGroupProps & {
//   children: React.ReactNode;
// };

// export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroup>(
//   (
//     { children, description, errorMessage, validationState, ...props },
//     forwardedRef
//   ) => {
//     const state = useCheckboxGroupState(props);
//     const { groupProps, descriptionProps, errorMessageProps } =
//       useCheckboxGroup(props, state);

//     return (
//       <div {...groupProps} ref={forwardedRef}>
//         <CheckboxGroupContext.Provider value={state}>
//           {children}
//         </CheckboxGroupContext.Provider>
//         {description && (
//           <div {...descriptionProps} style={{ fontSize: 12 }}>
//             {description}
//           </div>
//         )}
//         {errorMessage && validationState === "invalid" && (
//           <div {...errorMessageProps} style={{ color: "red", fontSize: 12 }}>
//             {errorMessage}
//           </div>
//         )}
//       </div>
//     );
//   }
// );
// CheckboxGroup.displayName = "CheckboxGroup";

// const checkboxClasses = {
//   isIndeterminate: [
//     "group-aria-checked:bg-primary-500 group-active:group-aria-checked:border-primary-600 group-aria-checked:border-primary-500 group-aria-checked:dark:border-primary-300 group-aria-checked:dark:bg-primary-300 group-active:group-aria-checked:bg-primary-600",
//     "border-secondary-500",
//   ],
// };

// type CheckboxComponent = {
//   isDisabled?: boolean;
//   isSelected?: boolean;
//   inputProps: InputHTMLAttributes<HTMLInputElement>;
//   children: ReactNode;
//   ref: RefObject<HTMLInputElement>;
//   isIndeterminate?: boolean;
// };

// const CheckboxComponent = forwardRef<HTMLInputElement, CheckboxComponent>(
//   (
//     {
//       isDisabled = false,
//       isSelected,
//       inputProps,
//       children,
//       ref,
//       isIndeterminate = false,
//     },
//     forwardedRef
//   ) => {
//     const Icon = isIndeterminate ? MinusIcon : CheckIcon;

//     const internalProps: { [key: string]: boolean | undefined } = {
//       "aria-disabled": isDisabled,
//       "aria-checked": undefined,
//     };

//     if (!isIndeterminate) internalProps["aria-checked"] = isSelected;

//     return (
//       <label
//         className={classNames(
//           "group flex items-center",
//           "aria-checked:text-primary-500 aria-checked:dark:text-primary-300",
//           "aria-disabled:cursor-not-allowed aria-disabled:opacity-60 aria-disabled:dark:opacity-50"
//         )}
//         {...internalProps}
//       >
//         <VisuallyHidden>
//           <input {...inputProps} ref={mergeRefs(forwardedRef, ref)} />
//         </VisuallyHidden>

//         <div
//           className={classNames(
//             checkboxClasses.isIndeterminate[Number(isIndeterminate)],
//             "border-secondary-500 mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 text-white transition duration-150 ease-in-out"
//           )}
//           aria-hidden="true"
//         >
//           <Icon
//             strokeWidth={3}
//             strokeDasharray={22}
//             strokeDashoffset={isIndeterminate ? 44 : isSelected ? 44 : 66}
//             className={classNames(
//               isIndeterminate
//                 ? "text-secondary-600 dark:text-secondary-400"
//                 : isSelected
//                 ? "text-white"
//                 : "text-transparent",
//               "h-4 w-4 transition-all duration-300"
//             )}
//           />
//         </div>
//         <span className="dark:text-secondary-200 select-none font-medium text-gray-700">
//           {children}
//         </span>
//       </label>
//     );
//   }
// );

// const SingletonCheckbox = forwardRef<HTMLInputElement, AriaCheckboxProps>(
//   ({ children, isIndeterminate, ...props }, forwardedRef) => {
//     const ref = useRef<HTMLInputElement>(null);

//     const state = useToggleState(props);
//     const { inputProps } = useCheckbox(props, state, ref);

//     const isDisabled = props.isDisabled;
//     const isSelected = state.isSelected;

//     return (
//       <CheckboxComponent
//         isDisabled={isDisabled}
//         isSelected={isSelected}
//         inputProps={inputProps}
//         ref={mergeRefs(forwardedRef, ref)}
//         isIndeterminate={isIndeterminate}
//       >
//         {children}
//       </CheckboxComponent>
//     );
//   }
// );

// type Subbox = {
//   props: AriaCheckboxGroupItemProps;
//   state: CheckboxGroupState;
//   children: ReactNode;
// };

// const Subbox = forwardRef<HTMLInputElement, Subbox>(
//   ({ props, state, children }, forwardedRef) => {
//     const ref = React.useRef(null);
//     const { inputProps } = useCheckboxGroupItem(props, state, ref);

//     const isDisabled = state?.isDisabled || props.isDisabled;
//     let isSelected = false;
//     if (props.value) isSelected = state?.isSelected(props.value) ?? false;

//     return (
//       <CheckboxComponent
//         isDisabled={isDisabled}
//         isSelected={isSelected}
//         inputProps={inputProps}
//         ref={mergeRefs(ref, forwardedRef)}
//       >
//         {children}
//       </CheckboxComponent>
//     );
//   }
// );

// export type Checkbox = Omit<AriaCheckboxGroupItemProps, "value"> &
//   AriaCheckboxProps;

// export const Checkbox = forwardRef<HTMLInputElement, Checkbox>(
//   ({ children, ...props }, forwardedRef) => {
//     const state = React.useContext(CheckboxGroupContext);

//     if (!state)
//       return (
//         <SingletonCheckbox {...props} ref={forwardedRef}>
//           {children}
//         </SingletonCheckbox>
//       );

//     return (
//       <Subbox
//         props={props as AriaCheckboxGroupItemProps}
//         state={state}
//         ref={forwardedRef}
//       >
//         {children}
//       </Subbox>
//     );
//   }
// );
// Checkbox.displayName = "Checkbox";

"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "@heroicons/react/24/outline";
import { Label, classNames } from "@rafty/ui";

export type CheckBox = React.ComponentPropsWithoutRef<
  typeof CheckboxPrimitive.Root
> & { size?: "sm" | "md" | "lg" };

const CheckBoxClasses = {
  size: { sm: "h-4 w-4", md: "h-5 w-5", lg: "h-6 w-6" },
};
const CheckBoxIndicatorClasses = {
  size: { sm: "h-2.5 w-2.5", md: "h-3.5 w-3.5", lg: "h-4 w-4" },
};

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  CheckBox
>(({ className, children, size = "md", ...props }, ref) => (
  <div className="flex items-center gap-2">
    <CheckboxPrimitive.Root
      ref={ref}
      className={classNames(
        CheckBoxClasses.size[size],
        "group relative shrink-0 rounded-sm border-2 border-secondary-400 dark:border-secondary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 dark:data-[state=checked]:bg-primary-300 dark:data-[state=checked]:border-primary-300 ",
        className
      )}
      id={props.id}
      {...props}
    >
      <div className="hidden group-data-[state=indeterminate]:block text-secondary-600">
        <MinusIcon />
      </div>
      <CheckboxPrimitive.Indicator
        className={classNames(
          "flex items-center justify-center h-full text-white dark:text-secondary-700"
        )}
      >
        <CheckIcon
          className={classNames(
            CheckBoxIndicatorClasses.size[size],
            " stroke-[3]"
          )}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
    <Label htmlFor={props.id}>{children}</Label>
  </div>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
