"use client";
import React from "react";
import { classNames } from "../utils";
import { CardContext, CardProvider, useCardContext } from "./context";
import { cva } from "class-variance-authority";

// Card Component
export const cardClasses = cva("flex flex-col dark:text-white", {
  variants: {
    size: {
      sm: "rounded-md",
      md: "rounded-lg",
      lg: "rounded-lg",
    },
    variant: {
      outline: "border dark:border-secondary-700",
      elevated: "bg-white dark:bg-secondary-800 drop-shadow-lg",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
  },
});

export type Card = React.HTMLAttributes<HTMLDivElement> &
  Partial<CardContext> & { isUnstyled?: boolean };

export const Card = React.forwardRef<HTMLDivElement, Card>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
      isBarebone = false,
      ...props
    },
    forwardedRef,
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <CardProvider value={{ size, isBarebone, variant }}>
        <div
          {...props}
          className={
            unstyle
              ? className
              : classNames(cardClasses({ size, variant }), className)
          }
          ref={forwardedRef}
        />
      </CardProvider>
    );
  },
);
Card.displayName = "Card";

// CardHeader Component
export const cardHeaderClasses = cva("", {
  variants: {
    size: {
      sm: "p-3 font-medium",
      md: "p-4 text-xl font-semibold",
      lg: "p-5 text-2xl font-semibold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type CardHeader = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeader>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isBarebone || isUnstyled;

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
  },
);
CardHeader.displayName = "CardHeader";

// CardContent Component
export const cardContentClasses = cva("", {
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

export type CardContent = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardContent = React.forwardRef<HTMLDivElement, CardContent>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);
CardContent.displayName = "CardContent";

// CardFooter Component
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

export type CardFooter = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooter>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isUnstyled || isBarebone;

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
  },
);
CardFooter.displayName = "CardFooter";
