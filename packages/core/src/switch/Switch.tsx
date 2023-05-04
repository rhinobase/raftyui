import React from "react";

import { useToggleState } from "react-stately";
import {
  AriaCheckboxProps,
  useFocusRing,
  useSwitch,
  VisuallyHidden,
} from "react-aria";
import { classNames } from "../utils";
import { cva, VariantProps } from "class-variance-authority";

export type Switch = AriaCheckboxProps & VariantProps<typeof switchClasses>;

const switchClasses = cva("relative rounded-full", {
  variants: {
    size: {
      sm: "h-4 w-8",
      md: "h-6 w-10",
      lg: "h-7 w-12",
    },
    isSelected: {
      true: "bg-primary-500 dark:bg-primary-300",
      false: "bg-secondary-400 dark:bg-secondary-700",
    },
  },
});
const switchThumbClasses = cva(
  "absolute top-0.5 rounded-full transition-all duration-200",
  {
    variants: {
      size: {
        sm: "h-3 w-3",
        md: "h-5 w-5",
        lg: "h-6 w-6",
      },
      isSelected: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        size: ["sm", "md", "lg"],
        isSelected: false,
        className: "bg-secondary-100 dark:bg-secondary-300 left-0.5",
      },
      {
        size: ["sm", "md"],
        isSelected: true,
        className: "dark:bg-secondary-900 left-[18px] bg-white",
      },

      {
        size: "lg",
        isSelected: true,
        className: "dark:bg-secondary-900 left-[22px] bg-white",
      },
    ],
  }
);

export function Switch({ size = "md", ...props }: Switch) {
  const state = useToggleState(props);
  const ref = React.useRef(null);
  const { inputProps } = useSwitch(props, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <label
      className={classNames(
        props.isDisabled && "cursor-not-allowed opacity-50",
        "flex items-center",
        isFocusVisible && "ring-1 ring-black ring-offset-2 dark:ring-white"
      )}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <div
        className={classNames(
          switchClasses({ size, isSelected: state.isSelected })
        )}
      >
        <div
          className={classNames(
            switchThumbClasses({ size, isSelected: state.isSelected })
            // state.isSelected
            //   ? "dark:bg-secondary-900 left-[18px] bg-white"
            //   : "bg-secondary-100 dark:bg-secondary-400 left-0.5",
            // "",
          )}
        />
      </div>
      {props.children}
    </label>
  );
}

// import * as SwitchPrimitive from "@radix-ui/react-switch";
// import React, { ComponentProps } from "react";
// import { classNames } from "../utils";

// // Switch Component (SwitchThumb inside Switch Component )
// export type Switch = ComponentProps<(typeof SwitchPrimitive)["Root"]>;
// export const Switch = React.forwardRef<
//   HTMLButtonElement,
//   Switch & { size?: "sm" | "md" | "lg" }
// >(({ size = "md", defaultValue, ...props }, forwardedRef) => {
//   return (
//     <SwitchPrimitive.Root
//       className={classNames(
//         size == "sm" && "h-[16px] w-[26px]",
//         size == "md" && "h-[20px] w-[34px]",
//         size == "lg" && "h-[28px] w-[50px]",
//         "data-[state=checked]:bg-primary-500 data-[state=checked]:dark:bg-primary-300/90 bg-secondary-400/50 dark:bg-secondary-600 relative rounded-full transition-colors duration-200 ease-in-out",
//         "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
//       )}
//       {...props}
//       ref={forwardedRef}
//     >
//       <SwitchPrimitive.Thumb
//         className={classNames(
//           size == "sm" &&
//             "h-[12px] w-[12px] data-[state=checked]:translate-x-[12px]",
//           size == "md" &&
//             "h-[16px] w-[16px] data-[state=checked]:translate-x-[16px]",
//           size == "lg" &&
//             "h-[24px] w-[24px] data-[state=checked]:translate-x-[24px]",
//           "dark:data-[state=checked]:bg-secondary-800 block translate-x-[2px] rounded-full bg-white transition-all duration-200 ease-in-out",
//         )}
//         {...props}
//       />
//     </SwitchPrimitive.Root>
//   );
// });
// Switch.displayName = "Switch";
