// import React from "react";
// import type { AriaSelectProps } from "@react-types/select";
// import { useSelect, HiddenSelect, useButton } from "react-aria";
// import { useSelectState } from "react-stately";
// import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
// import { PopoverContent } from "../popover";
// import { ListBox } from "./listbox";
// import { Button } from "../button";
// import { classNames } from "@rafty/utils";

// export { Item as SelectItem } from "react-stately";

// export type Select<T> = AriaSelectProps<T> & {
//   size?: "sm" | "md" | "lg";
//   variant?: "solid" | "outline" | "ghost";
//   className?: string;
// };

// export function Select<T extends object>(props: Select<T>) {
//   // Create state based on the incoming props
//   const state = useSelectState(props);

//   const {
//     size = "md",
//     variant = "outline",
//     className,
//     placeholder = "Select an option",
//     isDisabled,
//   } = props;

//   // Get props for child elements from useSelect
//   const ref = React.useRef(null);
//   const { triggerProps, valueProps, menuProps } = useSelect(props, state, ref);

//   // Get props for the button based on the trigger props from useSelect
//   const { buttonProps } = useButton(triggerProps, ref);

//   return (
//     <div className="relative">
//       <HiddenSelect
//         state={state}
//         triggerRef={ref}
//         label={props.label}
//         name={props.name}
//       />
//       <Button
//         {...buttonProps}
//         {...valueProps}
//         size={size}
//         variant={variant}
//         isActive={state.isOpen}
//         isDisabled={isDisabled}
//         className={classNames("!w-full !justify-between", className)}
//         rightIcon={
//           <ChevronUpDownIcon
//             className={classNames(
//               state.isOpen ? "text-primary-500" : "text-gray-500",
//               "h-5 w-5"
//             )}
//           />
//         }
//         ref={ref}
//       >
//         <span
//           className={classNames(
//             state.selectedItem
//               ? "dark:text-secondary-200 text-gray-800"
//               : "text-gray-500",
//             "text-md"
//           )}
//         >
//           {state.selectedItem ? state.selectedItem.rendered : placeholder}
//         </span>
//       </Button>
//       {state.isOpen && (
//         <PopoverContent
//           triggerState={state}
//           triggerRef={ref}
//           placement="bottom start"
//           className="-ml-3 w-full"
//         >
//           <ListBox {...menuProps} state={state} size={size} />
//         </PopoverContent>
//       )}
//     </div>
//   );
// }

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

import { classNames } from "@rafty/ui";

export const Select = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export type SelectTrigger = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Trigger
>;

export const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTrigger
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={classNames(
      "flex h-10 w-full items-center justify-between rounded-md border dark:border-secondary-700 dark:text-secondary-100 bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary-500 dark:focus:border-primary-300 focus:ring-2 focus:ring-primary-100 dark:focus:ring-primary-800 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = "SelecTrigger";

export type SelectContent = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Content
>;

export const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContent
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={classNames(
        "relative z-50 min-w-[8rem] overflow-hidden rounded-md border dark:border-secondary-700 bg-white dark:bg-secondary-800 dark:text-secondary-100 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      )}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport
        className={classNames(
          "p-1",
          position === "popper" &&
            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = "SelectContent";

export type SelectLabel = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Label
>;

export const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabel
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={classNames(
      "py-1.5 pl-8 pr-2 text-sm font-medium text-secondary-500 dark:text-secondary-400",
      className
    )}
    {...props}
  />
));
SelectLabel.displayName = "SelectLabel";

export type SelectItem = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Item
>;

export const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItem
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={classNames(
      "relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-secondary-200 dark:focus:bg-secondary-700 focus:text-secondary-900 dark:focus:text-white data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = "SelectItem";

export type SelectSeparator = React.ComponentPropsWithoutRef<
  typeof SelectPrimitive.Separator
>;

export const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  SelectSeparator
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={classNames(
      "-mx-1 my-1 h-px bg-secondary-200 dark:bg-secondary-700",
      className
    )}
    {...props}
  />
));
SelectSeparator.displayName = "SelectSeparator";
