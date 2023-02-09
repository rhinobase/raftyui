import * as CheckboxPremitive from "@radix-ui/react-checkbox";
import React, { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";

type Checkbox = { children?: React.ReactNode } & ComponentProps<
  (typeof CheckboxPremitive)["Root"]
>;
// CheckBox Component (Indicator inside the CheckBox Component)
export const Checkbox = forwardRef<
  HTMLButtonElement,
  Checkbox & { size?: "sm" | "md" | "lg" }
>(({ children, className, checked, size = "md", ...props }, forwardedRef) => {
  return (
    <div className="flex items-center gap-2">
      <CheckboxPremitive.Root
        className={classNames(
          size == "sm" && "h-[16px] w-[16px]",
          size == "md" && "h-[20px] w-[20px]",
          size == "lg" && "h-[24px] w-[24px]",
          "data-[disabled]:cursor-not-allowed",
          "aria-checked:data-[state=indeterminate]:bg-primary-500 data-[state=indeterminate]:after:bg-secondary-400 aria-checked:data-[state=indeterminate]:after:bg-secondary-100 relative data-[state=indeterminate]:after:absolute data-[state=indeterminate]:after:top-[2] data-[state=indeterminate]:after:left-[5px] data-[state=indeterminate]:after:h-[2px] data-[state=indeterminate]:after:w-[50%] data-[state=indeterminate]:after:content-['']",
          "data-[state=checked]:bg-primary-500 dark:data-[state=checked]:bg-primary-400",
          "rounded-base border-secondary-300 dark:border-secondary-700 dark:text-secondary-100 group flex items-center justify-center gap-3 border",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <CheckboxPremitive.Indicator
          className={classNames(
            "dark:text-secondary-100 flex items-center gap-3",
            className,
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={classNames(
              size == "sm" && "h-2.5",
              size == "md" && "h-3",
              size == "lg" && "h-3.5",
              "stroke-2 text-white group-data-[state=indeterminate]:hidden",
            )}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </CheckboxPremitive.Indicator>
      </CheckboxPremitive.Root>
      {children && (
        <label
          className={classNames(
            size == "sm" && "text-sm",
            size == "lg" && "text-lg",
            "text-secondary-700 select-none font-medium",
          )}
        >
          {children}
        </label>
      )}
    </div>
  );
});
