import { forwardRef } from "react";
import { classNames } from "../utils";
import { CardContext, useCardContext } from "./context";
import { cva } from "class-variance-authority";

// Card Component
export type Card = JSX.IntrinsicElements["div"] &
  Partial<CardContext> & { unstyled?: boolean };

const cardClasses = cva("flex flex-col dark:text-white", {
  variants: {
    variant: {
      solid: "bg-secondary-50 dark:bg-secondary-800",
      outline: "bg-transparent border dark:border-secondary-700",
      elevated: "bg-white dark:bg-secondary-800 drop-shadow-md",
    },
  },
});

export const Card = forwardRef<HTMLDivElement, Card>(
  (
    {
      children,
      className,
      variant,
      unstyled = false,
      barebone = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = unstyled || barebone;

    return (
      <div
        {...props}
        className={
          unstyle ? className : classNames(cardClasses({ variant }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

// CardHeader Component
const cardHeaderClasses = cva("", {
  variants: {
    size: {
      sm: "p-3 font-medium",
      md: "p-4 text-xl font-semibold",
      lg: "p-5 text-2xl font-semibold",
    },
  },
});
export type CardHeader = JSX.IntrinsicElements["div"] & { unstyled?: boolean };
export const CardHeader = forwardRef<HTMLDivElement, CardHeader>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { barebone, size } = useCardContext();
    const unstyle = barebone || unstyled;

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

// CardBody Component
export type CardBody = JSX.IntrinsicElements["div"] & { unstyled?: boolean };
const cardBodyClasses = cva("", {
  variants: {
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
    },
  },
});
export const CardBody = forwardRef<HTMLDivElement, CardBody>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { barebone, size } = useCardContext();
    const unstyle = barebone || unstyled;

    return (
      <div
        {...props}
        className={
          unstyle ? className : classNames(cardBodyClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
CardBody.displayName = "CardBody";

// CardFooter Component
export type CardFooter = JSX.IntrinsicElements["div"] & { unstyled?: boolean };

const cardFooterClasses = cva("", {
  variants: {
    size: {
      sm: "p-3",
      md: "p-4",
      lg: "p-5",
    },
  },
});

export const CardFooter = forwardRef<HTMLDivElement, CardFooter>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { barebone, size } = useCardContext();
    const unstyle = unstyled || barebone;

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
