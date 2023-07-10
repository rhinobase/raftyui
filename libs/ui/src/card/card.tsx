import { forwardRef } from "react";
import { classNames } from "@rafty/utils";
import { CardContext, CardProvider, useCardContext } from "./context";

// Card Component
const cardClasses = {
  size: {
    sm: "rounded-md",
    md: "rounded-lg",
    lg: "rounded-lg",
  },
  variant: {
    outline: "border dark:border-secondary-700",
    elevated: "bg-white dark:bg-secondary-800 drop-shadow-lg",
  },
};

export type Card = React.HTMLAttributes<HTMLDivElement> &
  Partial<CardContext> & { isUnstyled?: boolean };

export const Card = forwardRef<HTMLDivElement, Card>(
  (
    {
      className,
      variant = "outline",
      size = "md",
      isUnstyled = false,
      isBarebone = false,
      ...props
    },
    forwardedRef
  ) => {
    const unstyle = isBarebone || isUnstyled;

    return (
      <CardProvider value={{ size, isBarebone, variant }}>
        <div
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  cardClasses.size[size],
                  cardClasses.variant[variant],
                  "flex flex-col dark:text-white",
                  className
                )
          }
          ref={forwardedRef}
        />
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

export type CardHeader = React.HTMLAttributes<HTMLDivElement> & {
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

// CardContent Component
const cardContentClasses = {
  size: {
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  },
};

export type CardContent = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const CardContent = forwardRef<HTMLDivElement, CardContent>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone, size } = useCardContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <div
        {...props}
        className={
          unstyle
            ? className
            : classNames(cardContentClasses.size[size], className)
        }
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  }
);
CardContent.displayName = "CardContent";

// CardFooter Component
const cardFooterClasses = {
  size: {
    sm: "p-3",
    md: "p-4",
    lg: "p-5",
  },
};

export type CardFooter = React.HTMLAttributes<HTMLDivElement> & {
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
