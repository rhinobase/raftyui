import { forwardRef } from "react";
import { classNames } from "@rafty/utils";
import { CardContext, CardProvider, useCardContext } from "./context";

// Card Component
const cardClasses = {
  variant: {
    solid: "bg-secondary-50 dark:bg-secondary-800",
    outline: "bg-transparent border dark:border-secondary-700",
    elevated: "bg-white dark:bg-secondary-800 drop-shadow-md",
  },
};

export type Card = JSX.IntrinsicElements["div"] &
  Partial<CardContext> & { isUnstyled?: boolean };

export const Card = forwardRef<HTMLDivElement, Card>(
  (
    {
      children,
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
      isBarebone = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = isUnstyled || isBarebone;

    return (
      <CardProvider value={{ size, isBarebone, variant }}>
        <div
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  cardClasses.variant[variant],
                  "flex flex-col dark:text-white",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </div>
      </CardProvider>
    );
  }
);
Card.displayName = "Card";

// CardHeader Component
const cardHeaderClasses = {
  size: {
    sm: "p-3 font-medium",
    md: "p-4 text-xl font-semibold",
    lg: "p-5 text-2xl font-semibold",
  },
};

export type CardHeader = JSX.IntrinsicElements["div"] & {
  isUnstyled?: boolean;
};

export const CardHeader = forwardRef<HTMLDivElement, CardHeader>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardHeaderClasses.size[size], className)
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
const cardBodyClasses = {
  size: {
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  },
};

export type CardBody = JSX.IntrinsicElements["div"] & { isUnstyled?: boolean };

export const CardBody = forwardRef<HTMLDivElement, CardBody>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardBodyClasses.size[size], className)
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
const cardFooterClasses = {
  size: {
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  },
};

export type CardFooter = JSX.IntrinsicElements["div"] & {
  isUnstyled?: boolean;
};

export const CardFooter = forwardRef<HTMLDivElement, CardFooter>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isUnstyled || isBarebone;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardFooterClasses.size[size], className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "CardFooter";
