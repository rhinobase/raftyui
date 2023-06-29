// import React from "react";
// import { useToggleState } from "react-stately";
// import {
//   AriaCheckboxProps,
//   useFocusRing,
//   useSwitch,
//   VisuallyHidden,
// } from "react-aria";
// import { classNames } from "@rafty/utils";

// export type Switch = Omit<AriaCheckboxProps, "isIndeterminate"> & {
//   size?: "sm" | "md" | "lg";
//   isSelected?: boolean;
// };

// export function Switch({ size = "md", children, ...props }: Switch) {
//   const state = useToggleState(props);
//   const ref = React.useRef(null);
//   const { inputProps } = useSwitch(props, state, ref);
//   const { isFocusVisible, focusProps } = useFocusRing();

//   return (
//     <label
//       className={classNames(
//         "flex items-center cursor-pointer w-max gap-2",
//         "aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
//         isFocusVisible && "ring-1 ring-primary-200 dark:ring-primary-100/20"
//       )}
//       aria-selected={state.isSelected}
//       aria-disabled={props.isDisabled}
//     >
//       <VisuallyHidden>
//         <input {...inputProps} {...focusProps} ref={ref} />
//       </VisuallyHidden>
//       <div
//         className={classNames(
//           switchClasses.size[size],
//           "group relative rounded-full transition-all",
//           "bg-secondary-400 hover:bg-secondary-500 dark:bg-secondary-700 hover:dark:bg-secondary-600",
//           "aria-selected:bg-primary-500 aria-selected:hover:bg-primary-400 aria-selected:dark:bg-primary-300 aria-selected:dark:hover:bg-primary-400",
//           "aria-disabled:hover:bg-secondary-400 dark:aria-disabled:hover:bg-secondary-700"
//         )}
//         aria-selected={state.isSelected}
//         aria-disabled={props.isDisabled}
//       >
//         <div
//           className={classNames(
//             switchThumbClasses.size[size],
//             "bg-secondary-100 dark:bg-secondary-300 absolute left-0.5 top-0.5 rounded-full transition-all duration-200",
//             "group-aria-selected:bg-white group-aria-selected:dark:bg-secondary-900"
//           )}
//         />
//       </div>
//       {children && (
//         <span
//           className={classNames(
//             size === "sm" && "text-sm",
//             size === "md" && "text-base",
//             size === "lg" && "text-lg",
//             "font-medium dark:text-white select-none"
//           )}
//         >
//           {children}
//         </span>
//       )}
//     </label>
//   );
// }

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { classNames } from "@rafty/utils";

const switchClasses = {
  size: {
    sm: "h-4 w-7",
    md: "h-6 w-10",
    lg: "h-7 w-12",
  },
};

const switchThumbClasses = {
  size: {
    sm: "h-3 w-3 data-[state=checked]:translate-x-3",
    md: "h-5 w-5 data-[state=checked]:translate-x-4",
    lg: "h-6 w-6 data-[state=checked]:translate-x-5",
  },
};

export type Switch = React.ComponentPropsWithoutRef<
  typeof SwitchPrimitives.Root
> & {
  size?: "sm" | "md" | "lg";
};

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  Switch
>(({ className, size = "md", ...props }, ref) => (
  <SwitchPrimitives.Root
    className={classNames(
      switchClasses.size[size],
      "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-300 data-[state=unchecked]:bg-secondary-400 dark:data-[state=unchecked]:bg-secondary-600",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={classNames(
        switchThumbClasses.size[size],
        "pointer-events-none block rounded-full bg-secondary-100 dark:data-[state=checked]:bg-secondary-900 data-[state=checked]:bg-secondary-100 shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = "Switch";
