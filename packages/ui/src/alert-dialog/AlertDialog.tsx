"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from "react";
import { Button } from "../button";
import { classNames } from "../utils";
import {
  type AlertDialogContext,
  AlertDialogProvider,
  useAlertDialogContext,
} from "./context";

// AlertDialog Component
export type AlertDialog = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
> &
  Partial<AlertDialogContext>;

export function AlertDialog({
  size = "md",
  isUnstyled = false,
  ...props
}: AlertDialog) {
  return (
    <AlertDialogProvider value={{ size, isUnstyled }}>
      <AlertDialogPrimitive.Root {...props} />
    </AlertDialogProvider>
  );
}

// AlertDialog Trigger Component
export type AlertDialogTrigger = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Trigger
> &
  Button;

export const AlertDialogTrigger = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Trigger>,
  AlertDialogTrigger
>(
  (
    {
      children,
      className,
      size = "md",
      variant = "ghost",
      colorScheme = "secondary",
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isActive = false,
      isLoading = false,
      isUnstyled = false,
      asChild = false,
      type = "button",
      ...props
    },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled, size: parentSize } =
      useAlertDialogContext();

    const unstyle = isParentUnstyled || isUnstyled;
    const triggerSize = size || parentSize;

    const buttonProps = {
      size: triggerSize,
      isUnstyled: unstyle,
      variant,
      colorScheme,
      leftIcon,
      rightIcon,
      isActive,
      isDisabled,
      isLoading,
      className,
      type,
    };

    return (
      <AlertDialogPrimitive.Trigger
        {...props}
        className={asChild ? className : undefined}
        ref={forwardedRef}
        asChild
      >
        {asChild ? children : <Button {...buttonProps}>{children}</Button>}
      </AlertDialogPrimitive.Trigger>
    );
  },
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

// AlertDialogOverlayComponent
export const alertDialogOverlayClasses =
  "fixed inset-0 z-50 bg-white/40 backdrop-blur-sm dark:bg-black/40 data-[state=open]:animate-overlayShow";

export type AlertDialogOverlay = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
> & { isUnstyled?: boolean };

export const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlay
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Overlay
      {...props}
      className={
        unstyle ? className : classNames(alertDialogOverlayClasses, className)
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// AlertDialogContent Component
export const alertDialogContentClasses = cva(
  "w-[95%] md:w-full focus:outline-none flex flex-col bg-white dark:bg-secondary-900 border dark:border-secondary-800 text-black dark:text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-contentShow",
  {
    variants: {
      size: {
        sm: "max-w-[30rem] p-4 rounded-md gap-2",
        md: "max-w-[40rem] p-5 rounded-lg gap-3",
        lg: "max-w-[50rem] p-6 rounded-lg gap-4",
        xl: "max-w-[60rem] p-7 rounded-xl gap-5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type AlertDialogContent = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> & { isUnstyled?: boolean };

export const AlertDialogContent = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContent
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(alertDialogContentClasses({ size }), className)
        }
        ref={forwardedRef}
      />
    </AlertDialogPrimitive.Portal>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

// AlertDialogHeader
export const alertDialogHeaderAndFooterClasses = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AlertDialogHeader = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogHeader = forwardRef<HTMLElement, AlertDialogHeader>(
  ({ className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <header
        {...props}
        className={
          unstyle
            ? className
            : classNames(alertDialogHeaderAndFooterClasses({ size }), className)
        }
        ref={forwardedRef}
      />
    );
  },
);
AlertDialogHeader.displayName = "AlertDialogHeader";

// AlertDialogFooter

export type AlertDialogFooter = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogFooter = forwardRef<HTMLElement, AlertDialogFooter>(
  ({ className, isUnstyled, ...props }, forwardedRef) => {
    const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
    const unstyle = isParentUnstyled || isUnstyled;

    return (
      <footer
        {...props}
        className={
          unstyle
            ? className
            : classNames(alertDialogHeaderAndFooterClasses({ size }), className)
        }
        ref={forwardedRef}
      />
    );
  },
);
AlertDialogFooter.displayName = "AlertDialogFooter";

export const alertDialogTitleClasses = cva(
  "font-semibold leading-none tracking-tight",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-lg",
        lg: "text-xl",
        xl: "text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

// AlertDialogTitle Component
export type AlertDialogTitle = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
> & { isUnstyled?: boolean };

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitle
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Title
      {...props}
      className={
        unstyle
          ? className
          : classNames(alertDialogTitleClasses({ size }), className)
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogTitle.displayName = "AlertDialogTitle";

// AlertDialogBody Component
export const alertDialogDescriptionClasses = cva(
  "text-secondary-600 dark:text-secondary-400",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type AlertDialogDescription = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
> & { isUnstyled?: boolean };

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescription
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Description
      {...props}
      className={
        unstyle
          ? className
          : classNames(alertDialogDescriptionClasses({ size }), className)
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = AlertDialogPrimitive.Action;
AlertDialogAction.displayName = "AlertDialogAction";

export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
AlertDialogCancel.displayName = "AlertDialogCancel";
