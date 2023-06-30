import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { classNames } from "@rafty/utils";
import {
  RadioGroupContext,
  RadioGroupProvider,
  useRadioGroupContext,
} from "./context";

type RadioGroup = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Root
> &
  Partial<RadioGroupContext>;

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroup
>(({ className, size = "md", isDisabled = false, ...props }, ref) => {
  return (
    <RadioGroupProvider value={{ size: size, isDisabled: isDisabled }}>
      <RadioGroupPrimitive.Root
        className={classNames("grid gap-2", className)}
        {...props}
        ref={ref}
      />
    </RadioGroupProvider>
  );
});
RadioGroup.displayName = "RadioGroup";

type RadioGroupItem = React.ComponentPropsWithoutRef<
  typeof RadioGroupPrimitive.Item
>;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItem
>(({ className, children, ...props }, ref) => {
  const { size } = useRadioGroupContext();
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={classNames(
        size === "sm" && "h-3.5 w-3.5",
        size === "md" && "h-5 w-5",
        size === "lg" && "h-6 w-6",
        "aspect-square  rounded-full border border-secondary-400 dark:border-secondary-600 data-[state=checked]:border-primary-500 dark:data-[state=checked]:border-primary-300 ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
        <div
          className={classNames(
            size === "sm" && "h-2 w-2",
            size === "md" && "h-2.5 w-2.5",
            size === "lg" && "h-3.5 w-3.5",
            " bg-primary-500 dark:bg-primary-300 rounded-full"
          )}
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = "RadioGroupItem";

export { RadioGroup, RadioGroupItem };
