"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import type { ValueOrFunction } from "../types";
import { getValue } from "../utils";
import { classNames } from "../utils";
import {
  type AccordionContext,
  AccordionProvider,
  useAccordionContext,
} from "./context";

// Accordion Component
export type Accordion = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  Partial<AccordionContext>;

export const Accordion = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  Accordion
>(
  (
    {
      children,
      className,
      size = "md",
      variant = "solid",
      isUnstyled = false,
      ...props
    },
    forwardedRef,
  ) => (
    <AccordionProvider value={{ size, variant, isUnstyled }}>
      <AccordionPrimitive.Root
        {...props}
        className={isUnstyled ? className : classNames("w-full", className)}
        ref={forwardedRef}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionProvider>
  ),
);
Accordion.displayName = "Accordion";

// Accordion Item Component
export type AccordionItem = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItem
>(({ className, children, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useAccordionContext();
  const unstyle = isParentUnstyled;

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
export const accordionTriggerClasses = cva(
  "text-secondary-700 dark:text-secondary-300 group flex w-full flex-1 items-center justify-between font-medium transition-all",
  {
    variants: {
      size: {
        sm: "px-2.5 py-1 text-sm",
        md: "px-3 py-1.5 text-base",
        lg: "px-3.5 py-2 text-lg",
      },
      variant: {
        solid: "bg-secondary-100 dark:bg-secondary-800",
        ghost:
          "data-[state=open]:bg-secondary-100 hover:bg-secondary-100 dark:data-[state=open]:bg-secondary-800 dark:hover:bg-secondary-800",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  },
);

export type AccordionTrigger = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  isUnstyled?: boolean;
  showIcon?: ValueOrFunction;
};

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTrigger
>(
  (
    {
      children,
      className,
      openIcon,
      closeIcon,
      isUnstyled = false,
      showIcon,
      ...props
    },
    forwardedRef,
  ) => {
    const {
      size,
      variant,
      isUnstyled: isParentUnstyled,
    } = useAccordionContext();

    const unstyle = isParentUnstyled || isUnstyled;

    const _showIcon = getValue(showIcon) ?? true;

    return (
      <AccordionPrimitive.Trigger
        {...props}
        className={
          unstyle
            ? className
            : classNames(accordionTriggerClasses({ size, variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
        {openIcon && (
          <div className="hidden group-data-[state=open]:block">{openIcon}</div>
        )}
        {closeIcon && (
          <div className="group-data-[state=close]:block group-data-[state=open]:hidden">
            {closeIcon}
          </div>
        )}
        {!openIcon && !closeIcon && _showIcon && (
          <ChevronDownIcon className="size-4 shrink-0 stroke-[2.5] opacity-60 transition-transform duration-200 group-data-[state=open]:rotate-180" />
        )}
      </AccordionPrimitive.Trigger>
    );
  },
);
AccordionTrigger.displayName = "AccordionTrigger";

// Accordion Content Component
export const accordionContentClasses = cva(
  "dark:text-secondary-100 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down w-full overflow-hidden transition-all",
  {
    variants: {
      size: {
        sm: "px-2.5 text-sm",
        md: "px-3 text-base",
        lg: "px-3.5 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type AccordionContent = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> & { isUnstyled?: boolean };

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContent
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useAccordionContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AccordionPrimitive.Content
      {...props}
      className={
        unstyle
          ? className
          : classNames(accordionContentClasses({ size }), className)
      }
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Content>
  );
});
AccordionContent.displayName = "AccordionContent";
