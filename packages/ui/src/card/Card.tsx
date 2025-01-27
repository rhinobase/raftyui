"use client";
import { cva } from "class-variance-authority";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames, getValidChildren } from "../utils/index.js";
import { type CardContext, CardProvider, useCardContext } from "./context.js";

export const cardClasses = cva("flex flex-col dark:text-white border", {
  variants: {
    size: {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-xl",
    },
    variant: {
      outline: "border-secondary-300 dark:border-secondary-700",
      elevated:
        "bg-white dark:bg-secondary-800 border-transparent dark:border-transparent ring-1 ring-black/10 dark:ring-white/10",
    },
  },
  compoundVariants: [
    { size: "sm", variant: "elevated", className: "shadow-md" },
    { size: "md", variant: "elevated", className: "shadow-lg" },
    { size: "lg", variant: "elevated", className: "shadow-xl" },
  ],
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

export type Card = HTMLAttributes<HTMLDivElement> &
  Partial<Omit<CardContext, "has">>;

export const Card = forwardRef<HTMLDivElement, Card>(function Card(
  {
    className,
    variant = "outline",
    size = "md",
    isUnstyled = false,
    children,
    ...props
  },
  forwardedRef
) {
  const validChildren = getValidChildren(children);

  const [hasHeader, hasFooter] = validChildren.reduce(
    (prev, cur) => {
      // Checking if CardHeader component is present
      if (cur.type.displayName === CardHeader.displayName) prev[0] = true;

      // Checking if CardFooter component is present
      if (cur.type.displayName === CardFooter.displayName) prev[1] = true;

      return prev;
    },
    [false, false]
  );

  return (
    <CardProvider
      value={{
        size,
        isUnstyled,
        variant,
        has: { header: hasHeader, footer: hasFooter },
      }}
    >
      <div
        {...props}
        className={
          isUnstyled
            ? className
            : classNames(cardClasses({ size, variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    </CardProvider>
  );
});

export const cardHeaderClasses = cva("", {
  variants: {
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CardHeader = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardHeader = forwardRef<HTMLDivElement, CardHeader>(
  function CardHeader(
    { children, className, isUnstyled = false, ...props },
    forwardedRef
  ) {
    const { isUnstyled: isParentUnstyled, size } = useCardContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardHeaderClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
CardHeader.displayName = "CardHeader";

export const cardContentClasses = cva("", {
  variants: {
    size: {
      sm: "px-3",
      md: "px-4",
      lg: "px-5",
    },
    hasHeader: {
      true: "",
      false: "",
    },
    hasFooter: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      size: "sm",
      hasHeader: false,
      hasFooter: true,
      className: "pt-3",
    },
    {
      size: "sm",
      hasHeader: true,
      hasFooter: false,
      className: "pb-3",
    },
    {
      size: "sm",
      hasHeader: false,
      hasFooter: false,
      className: "py-3",
    },
    {
      size: "md",
      hasHeader: false,
      hasFooter: true,
      className: "pt-4",
    },
    {
      size: "md",
      hasHeader: true,
      hasFooter: false,
      className: "pb-4",
    },
    {
      size: "md",
      hasHeader: false,
      hasFooter: false,
      className: "py-4",
    },
    {
      size: "lg",
      hasHeader: false,
      hasFooter: true,
      className: "pt-5",
    },
    {
      size: "lg",
      hasHeader: true,
      hasFooter: false,
      className: "pb-5",
    },
    {
      size: "lg",
      hasHeader: false,
      hasFooter: false,
      className: "py-5",
    },
  ],
  defaultVariants: {
    size: "md",
    hasHeader: true,
    hasFooter: true,
  },
});

export type CardContent = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardContent = forwardRef<HTMLDivElement, CardContent>(
  function CardContent(
    { children, className, isUnstyled = false, ...props },
    forwardedRef
  ) {
    const { isUnstyled: isParentUnstyled, size, has } = useCardContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                cardContentClasses({
                  size,
                  hasHeader: has.header,
                  hasFooter: has.footer,
                }),
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";

export const cardFooterClasses = cva("", {
  variants: {
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CardFooter = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardFooter = forwardRef<HTMLDivElement, CardFooter>(
  function CardFooter(
    { children, className, isUnstyled = false, ...props },
    forwardedRef
  ) {
    const { isUnstyled: isParentUnstyled, size } = useCardContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardFooterClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "CardFooter";
