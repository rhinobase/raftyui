import * as DisclosurePrimitive from "@radix-ui/react-accordion";
import { ComponentProps, forwardRef } from "react";
import {
  AccordionContext,
  AccordionProvider,
  useAccordionContext,
} from "./context";
import { classNames } from "@rafty/utils";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

// Accordion Component
export type Accordion = ComponentProps<(typeof DisclosurePrimitive)["Root"]> &
  Partial<AccordionContext> & { isUnstyled?: boolean };

export const Accordion = forwardRef<HTMLDivElement, Accordion>(
  (
    {
      children,
      className,
      size = "md",
      variant = "solid",
      isBarebone = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <AccordionProvider value={{ size, variant, isBarebone }}>
        <DisclosurePrimitive.Root
          {...props}
          className={unstyle ? className : classNames("w-full", className)}
          ref={forwardedRef}
        >
          {children}
        </DisclosurePrimitive.Root>
      </AccordionProvider>
    );
  }
);
Accordion.displayName = "Accordian";

// Accordion Item Component
export type AccordionItem = ComponentProps<
  (typeof DisclosurePrimitive)["Item"]
> & { isUnstyled?: boolean };

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItem>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone } = useAccordionContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DisclosurePrimitive.Item
        {...props}
        className={unstyle ? className : classNames("w-full", className)}
        ref={forwardedRef}
      >
        {children}
      </DisclosurePrimitive.Item>
    );
  }
);
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

export type AccordionTrigger = ComponentProps<
  (typeof DisclosurePrimitive)["Trigger"]
> & {
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  isUnstyled?: boolean;
  showIcon?: boolean;
};

export const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTrigger>(
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
    forwardedRef
  ) => {
    const { size, variant, isBarebone } = useAccordionContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DisclosurePrimitive.Header>
        <DisclosurePrimitive.Trigger
          className={
            unstyle
              ? className
              : classNames(
                  "group flex w-full items-center justify-between text-secondary-700 dark:text-secondary-300",
                  accordionTriggerClasses.size[size],
                  accordionTriggerClasses.variant[variant],
                  className
                )
          }
          {...props}
          ref={forwardedRef}
        >
          {children}
          {openIcon && (
            <span className="hidden stroke-1 group-data-[state=open]:block">
              {openIcon}
            </span>
          )}
          {closeIcon && (
            <span className="stroke-1 group-data-[state=close]:block group-data-[state=open]:hidden">
              {closeIcon}
            </span>
          )}
          {!openIcon && !closeIcon && showIcon && (
            <ChevronDownIcon className="h-4 w-4 transform stroke-2 duration-200 group-data-[state=open]:rotate-180" />
          )}
        </DisclosurePrimitive.Trigger>
      </DisclosurePrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = "AccordionAccordianTrigger";

// Accordion Content Component
const accordionContentClasses = {
  size: {
    sm: "px-3 pt-1 pb-3 text-sm",
    md: "px-4 pt-2 pb-4",
    lg: "px-5 pt-3 pb-5",
  },
};

export type AccordionContent = ComponentProps<
  (typeof DisclosurePrimitive)["Content"]
> & { isUnstyled?: boolean };

export const AccordionContent = forwardRef<HTMLDivElement, AccordionContent>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useAccordionContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DisclosurePrimitive.Content
        className={
          unstyle
            ? className
            : classNames(
                "dark:text-secondary-100 w-full",
                accordionContentClasses.size[size],
                className
              )
        }
        {...props}
        ref={forwardedRef}
      >
        {children}
      </DisclosurePrimitive.Content>
    );
  }
);
AccordionContent.displayName = "AccordianContent";
