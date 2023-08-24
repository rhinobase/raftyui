import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  AccordionContext,
  AccordionProvider,
  useAccordionContext,
} from "./context";
import { classNames } from "@rafty/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Accordion Component
export type Accordion = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  Partial<AccordionContext>;

export const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  Accordion
>(
  (
    {
      children,
      className,
      size = "md",
      variant = "solid",
      isBarebone = false,
      ...props
    },
    forwardedRef,
  ) => {
    const unstyle = isBarebone;

    return (
      <AccordionProvider value={{ size, variant, isBarebone }}>
        <AccordionPrimitive.Root
          {...props}
          className={unstyle ? className : classNames("w-full", className)}
          ref={forwardedRef}
        >
          {children}
        </AccordionPrimitive.Root>
      </AccordionProvider>
    );
  },
);
Accordion.displayName = "Accordian";

// Accordion Item Component
export type AccordionItem = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItem
>(({ className, children, ...props }, forwardedRef) => {
  const { isBarebone } = useAccordionContext();
  const unstyle = isBarebone;

  return (
    <AccordionPrimitive.Item
      {...props}
      className={unstyle ? className : classNames("w-full", className)}
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Item>
  );
});
AccordionItem.displayName = "AccordionItem";

// Accordion Trigger Component
const accordionTriggerClasses = {
  size: {
    sm: "px-2.5 py-1 text-sm",
    md: "px-3 py-2",
    lg: "px-4 py-2.5 text-lg",
  },
  variant: {
    solid: "bg-secondary-50/80 dark:bg-secondary-800/20",
    ghost: "hover:bg-secondary-50/80 dark:hover:bg-secondary-800/20",
  },
};

export type AccordionTrigger = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  isUnstyled?: boolean;
  showIcon?: boolean;
};

export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTrigger
>(
  (
    {
      children,
      className,
      openIcon,
      closeIcon,
      isUnstyled = false,
      showIcon = true,
      ...props
    },
    forwardedRef,
  ) => {
    const { size, variant, isBarebone } = useAccordionContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <AccordionPrimitive.Header className="flex">
        <AccordionPrimitive.Trigger
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "text-secondary-700 dark:text-secondary-300 group flex flex-1 items-center justify-between font-medium transition-all [&[data-state=open]>svg]:rotate-180",
                  accordionTriggerClasses.size[size],
                  accordionTriggerClasses.variant[variant],
                  className,
                )
          }
          ref={forwardedRef}
        >
          {children}
          {openIcon && (
            <div className="hidden group-data-[state=open]:block">
              {openIcon}
            </div>
          )}
          {closeIcon && (
            <div className="group-data-[state=close]:block group-data-[state=open]:hidden">
              {closeIcon}
            </div>
          )}
          {!openIcon && !closeIcon && showIcon && (
            <ChevronDownIcon className="h-4 w-4 stroke-2 shrink-0 transition-transform duration-200" />
          )}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
    );
  },
);
AccordionTrigger.displayName = "AccordionAccordianTrigger";

// Accordion Content Component
const accordionContentClasses = {
  size: {
    sm: "px-3 pb-3 text-sm",
    md: "px-4 pb-4",
    lg: "px-5 pb-5",
  },
};

export type AccordionContent = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> & { isUnstyled?: boolean };

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContent
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useAccordionContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <AccordionPrimitive.Content
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "dark:text-secondary-100 w-full overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
              accordionContentClasses.size[size],
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = "AccordianContent";
