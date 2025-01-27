"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
} from "react";
import type { ValueOrFunction } from "../types/index.js";
import { classNames, getValue } from "../utils/index.js";
import {
  type AccordionContext,
  AccordionProvider,
  useAccordionContext,
} from "./context.js";

export const accordionClasses = cva("w-full", {
  variants: {
    size: {
      sm: "space-y-1",
      md: "space-y-2",
      lg: "space-y-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type Accordion = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Root
> &
  Partial<AccordionContext>;

export const Accordion = forwardRef<
  ElementRef<typeof AccordionPrimitive.Root>,
  Accordion
>(function Accordion(
  {
    children,
    className,
    size = "md",
    variant = "solid",
    isUnstyled = false,
    ...props
  },
  forwardedRef,
) {
  return (
    <AccordionProvider value={{ size, variant, isUnstyled }}>
      <AccordionPrimitive.Root
        {...props}
        className={
          isUnstyled
            ? className
            : classNames(accordionClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </AccordionPrimitive.Root>
    </AccordionProvider>
  );
});

export type AccordionItem = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  AccordionItem
>(function AccordionItem({ className, children, ...props }, forwardedRef) {
  const { isUnstyled } = useAccordionContext();

  return (
    <AccordionPrimitive.Item
      {...props}
      className={isUnstyled ? className : classNames("w-full", className)}
      ref={forwardedRef}
    >
      {children}
    </AccordionPrimitive.Item>
  );
});

export const accordionTriggerAndContentClasses = cva("", {
  variants: {
    size: {
      sm: "px-2 text-sm",
      md: "px-2.5 text-base",
      lg: "px-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const accordionTriggerClasses = cva(
  "text-secondary-700 dark:text-secondary-300 group flex w-full flex-1 items-center justify-between font-medium transition-all border",
  {
    variants: {
      size: {
        sm: "py-1",
        md: "py-1.5",
        lg: "py-2",
      },
      variant: {
        solid: "bg-secondary-100 dark:bg-secondary-800",
        outline:
          "border-secondary-300 data-[state=open]:border-b-transparent dark:border-secondary-700 dark:data-[state=open]:border-b-transparent",
        ghost:
          "data-[state=open]:bg-secondary-100 hover:bg-secondary-100 dark:data-[state=open]:bg-secondary-800 dark:hover:bg-secondary-800",
      },
    },
    compoundVariants: [
      {
        variant: ["solid", "ghost"],
        className: "border-transparent dark:border-transparent",
      },
      {
        variant: ["solid", "ghost"],
        size: "sm",
        className: "rounded-sm",
      },
      {
        variant: ["solid", "ghost"],
        size: "md",
        className: "rounded",
      },
      {
        variant: ["solid", "ghost"],
        size: "lg",
        className: "rounded-md",
      },
      {
        variant: "outline",
        size: "sm",
        className: "rounded-t-sm data-[state=closed]:rounded-b-sm",
      },
      {
        variant: "outline",
        size: "md",
        className: "rounded-t data-[state=closed]:rounded-b",
      },
      {
        variant: "outline",
        size: "lg",
        className: "rounded-t-md data-[state=closed]:rounded-b-md",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  },
);

export const accordionTriggerIconClasses = cva(
  "stroke-secondary-600 dark:stroke-secondary-400 shrink-0 -rotate-90 stroke-[2.5] transition-transform duration-200 group-data-[state=open]:rotate-0",
  {
    variants: {
      size: {
        sm: "size-3.5",
        md: "size-4",
        lg: "size-[18px]",
      },
    },
    defaultVariants: {
      size: "md",
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
>(function AccordionTrigger(
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
) {
  const { size, variant, isUnstyled: isParentUnstyled } = useAccordionContext();

  const unstyle = isParentUnstyled || isUnstyled;

  const _showIcon = getValue(showIcon) ?? true;

  return (
    <AccordionPrimitive.Trigger
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              accordionTriggerClasses({ size, variant }),
              accordionTriggerAndContentClasses({ size }),
              className,
            )
      }
      ref={forwardedRef}
    >
      {children}
      {openIcon && (
        <div className="group-data-[state=open]:block group-data-[state=closed]:hidden">
          {openIcon}
        </div>
      )}
      {closeIcon && (
        <div className="group-data-[state=closed]:block group-data-[state=open]:hidden">
          {closeIcon}
        </div>
      )}
      {!openIcon && !closeIcon && _showIcon && (
        <ChevronDownIcon className={accordionTriggerIconClasses({ size })} />
      )}
    </AccordionPrimitive.Trigger>
  );
});

export const accordionContentClasses = cva(
  "w-full overflow-hidden border-x border-b dark:text-secondary-100 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-all",
  {
    variants: {
      size: {
        sm: "rounded-b-sm",
        md: "rounded-b",
        lg: "rounded-b-md",
      },
      variant: {
        solid: "",
        outline:
          "data-[state=closed]:border-transparent data-[state=open]:border-secondary-300 dark:data-[state=closed]:border-transparent dark:data-[state=open]:border-secondary-700",
        ghost: "",
      },
    },
    compoundVariants: [
      {
        variant: ["ghost", "solid"],
        className: "border-transparent dark:border-transparent",
      },
    ],
    defaultVariants: {
      size: "md",
      variant: "solid",
    },
  },
);

const accordionContentOutlineVariantChildClasses = {
  size: {
    sm: "pb-1",
    md: "pb-1.5",
    lg: "pb-2",
  },
};

export type AccordionContent = ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
> & { isUnstyled?: boolean };

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContent
>(function AccordionContent(
  { children, className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { size, isUnstyled: isParentUnstyled, variant } = useAccordionContext();
  const unstyle = isParentUnstyled || isUnstyled;

  const childRender =
    variant === "outline" ? (
      // @ts-ignore
      <div className={accordionContentOutlineVariantChildClasses.size[size]}>
        {children}
      </div>
    ) : (
      children
    );

  return (
    <AccordionPrimitive.Content
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              accordionContentClasses({ size, variant }),
              accordionTriggerAndContentClasses({ size }),
              className,
            )
      }
      ref={forwardedRef}
    >
      {childRender}
    </AccordionPrimitive.Content>
  );
});
