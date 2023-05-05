import * as DisclosurePrimitive from "@radix-ui/react-accordion";
import { ComponentProps, forwardRef } from "react";
import React from "react";
import {
  AccordionContext,
  AccordionProvider,
  useAccordionContext,
} from "./context";
import { classNames } from "../utils";
import { cva } from "class-variance-authority";

//AccordionComponent
export type Accordion = Partial<AccordionContext> &
  ComponentProps<(typeof DisclosurePrimitive)["Root"]> & { unstyled?: boolean };
export const Accordion = forwardRef<HTMLDivElement, Accordion>(
  (
    {
      children,
      className,
      size = "md",
      variant = "solid",
      barebone = false,
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = barebone || unstyled;

    return (
      <AccordionProvider value={{ size, variant, barebone }}>
        <DisclosurePrimitive.Root
          {...props}
          ref={forwardedRef}
          className={unstyle ? className : classNames("w-full", className)}
        >
          {children}
        </DisclosurePrimitive.Root>
      </AccordionProvider>
    );
  }
);
Accordion.displayName = "Accordian";

//AccordionItemComponent
export type AccordionItem = ComponentProps<
  (typeof DisclosurePrimitive)["Item"]
> & {
  unstyled?: boolean;
};
export const AccordionItem = forwardRef<HTMLDivElement, AccordionItem>(
  ({ className, children, unstyled = false, ...props }, forwardedRef) => {
    const { barebone } = useAccordionContext();
    const unstyle = barebone || unstyled;

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

//AccordionTriggerComponent
const accordionTriggerClasses = cva(
  "group flex w-full items-center justify-between text-secondary-700 dark:text-secondary-300",
  {
    variants: {
      size: {
        sm: "px-2.5 py-1 text-sm",
        md: "px-3 py-2",
        lg: "px-4 py-2.5 text-lg",
      },
      variant: {
        solid: "bg-secondary-50/80 dark:bg-secondary-800/20",
        ghost: "hover:bg-secondary-50/80 dark:hover:bg-secondary-800/20",
      },
    },
  }
);

export type AccordionTrigger = ComponentProps<
  (typeof DisclosurePrimitive)["Trigger"]
> & {
  openIcon?: JSX.Element;
  closeIcon?: JSX.Element;
  unstyled?: boolean;
  showIcon?: boolean;
};
export const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTrigger
>(
  (
    {
      children,
      className,
      openIcon,
      closeIcon,
      unstyled = false,
      showIcon = true,
      ...props
    },
    forwardedRef
  ) => {
    const { size, variant, barebone } = useAccordionContext();
    const unstyle = barebone || unstyled;

    return (
      <DisclosurePrimitive.Header>
        <DisclosurePrimitive.Trigger
          className={
            unstyle
              ? className
              : classNames(
                  accordionTriggerClasses({ size, variant }),
                  className
                )
          }
          {...props}
          ref={forwardedRef}
        >
          {children}
          <>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4 transform stroke-2 duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </>
        </DisclosurePrimitive.Trigger>
      </DisclosurePrimitive.Header>
    );
  }
);
AccordionTrigger.displayName = "AccordionAccordianTrigger";

//AccordionContentComponent
const accordionContentClasses = cva("dark:text-secondary-100 w-full", {
  variants: {
    size: {
      sm: "px-3 pt-1 pb-3 text-sm",
      md: "px-4 pt-2 pb-4",
      lg: "px-5 pt-3 pb-5",
    },
  },
});
export type AccordionContent = ComponentProps<
  (typeof DisclosurePrimitive)["Content"]
> & { unstyled?: boolean };
export const AccordionContent = forwardRef<HTMLDivElement, AccordionContent>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useAccordionContext();
    const unstyle = barebone || unstyled;

    return (
      <DisclosurePrimitive.Content
        className={
          unstyle
            ? className
            : classNames(accordionContentClasses({ size }), className)
        }
        {...props}
        ref={forwardedRef}
        {...props}
      >
        {children}
      </DisclosurePrimitive.Content>
    );
  }
);

AccordionContent.displayName = "AccordianContent";
