import * as SwitchPrimitive from "@radix-ui/react-switch";
import React, { ComponentProps } from "react";
import { classNames } from "@rhinobase/utils";

// Switch Component (SwitchThumb inside Switch Component )
export type Switch = ComponentProps<(typeof SwitchPrimitive)["Root"]>;
export const Switch = React.forwardRef<
  HTMLButtonElement,
  Switch & { size?: "sm" | "md" | "lg" }
>(({ size = "md", defaultValue, ...props }, forwardedRef) => {
  return (
    <SwitchPrimitive.Root
      className={classNames(
        size == "sm" && "h-[16px] w-[26px]",
        size == "md" && "h-[20px] w-[34px]",
        size == "lg" && "h-[28px] w-[50px]",
        "data-[state=checked]:bg-primary-500 data-[state=checked]:dark:bg-primary-300/90 bg-secondary-400/50 dark:bg-secondary-600 relative rounded-full transition-colors duration-200 ease-in-out",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40",
      )}
      {...props}
      ref={forwardedRef}
    >
      <SwitchPrimitive.Thumb
        className={classNames(
          size == "sm" &&
            "h-[12px] w-[12px] data-[state=checked]:translate-x-[12px]",
          size == "md" &&
            "h-[16px] w-[16px] data-[state=checked]:translate-x-[16px]",
          size == "lg" &&
            "h-[24px] w-[24px] data-[state=checked]:translate-x-[24px]",
          "dark:data-[state=checked]:bg-secondary-800 block translate-x-[2px] rounded-full bg-white transition-all duration-200 ease-in-out",
        )}
        {...props}
      />
    </SwitchPrimitive.Root>
  );
});
Switch.displayName = "Switch";
