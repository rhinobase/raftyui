import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { classNames } from "@rafty/utils";
import { Button } from "../button";

type Popover = React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Root>;

const Popover = ({ children, ...props }: Popover) => (
  <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
);

type PopoverTrigger = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Trigger
> &
  Button;

const PopoverTrigger = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Trigger>,
  PopoverTrigger
>(
  (
    {
      children,
      asChild = false,
      variant = "solid",
      colorScheme = "secondary",
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isActive = false,
      isLoading = false,
      isUnstyled = false,
      size = "md",
      ...props
    },
    forwardedRef
  ) => (
    <PopoverPrimitive.Trigger {...props} ref={forwardedRef} asChild>
      {asChild ? (
        children
      ) : (
        <Button
          variant={variant}
          colorScheme={colorScheme}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          isDisabled={isDisabled}
          isActive={isActive}
          size={size}
          isUnstyled={isUnstyled}
        >
          {children}
        </Button>
      )}
    </PopoverPrimitive.Trigger>
  )
);

type PopoverContent = React.ComponentPropsWithoutRef<
  typeof PopoverPrimitive.Content
>;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContent
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={classNames(
        "z-50 w-72 rounded-md border dark:border-secondary-700 bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        "dark:bg-secondary-800 bg-white",
        className
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
