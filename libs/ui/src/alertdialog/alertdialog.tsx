import React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Button } from "../button";
import {
  AlertDialogProvider,
  AlertDialogContext,
  useAlertDialogContext,
} from "./context";
import { classNames } from "@rafty/utils";

// AlertDialog Component
export type AlertDialog = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
> &
  Partial<AlertDialogContext>;

export const AlertDialog = ({
  size = "md",
  isBarebone = false,
  ...props
}: AlertDialog) => (
  <AlertDialogProvider value={{ size, isBarebone }}>
    <AlertDialogPrimitive.Root {...props} />
  </AlertDialogProvider>
);
AlertDialog.displayName = "AlertDialog";

// AlertDialog Trigger Component
export type AlertDialogTrigger = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Trigger
> &
  Button;

export const AlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Trigger>,
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
      ...props
    },
    forwardedRef
  ) => {
    const { isBarebone, size: alertDialogSize } = useAlertDialogContext();
    const unstyle = isBarebone || isUnstyled;
    const triggerSize = size || alertDialogSize;
    const buttonProps = {
      variant,
      colorScheme,
      leftIcon,
      rightIcon,
      isActive,
      isDisabled,
      isLoading,
    };

    return (
      <AlertDialogPrimitive.Trigger
        {...props}
        className={asChild ? className : undefined}
        ref={forwardedRef}
        asChild
      >
        {asChild ? (
          children
        ) : (
          <Button size={triggerSize} isUnstyled={unstyle} {...buttonProps}>
            {children}
          </Button>
        )}
      </AlertDialogPrimitive.Trigger>
    );
  }
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

// AlertDialogOverlayComponent
export type AlertDialogOverlay = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
> & { isUnstyled?: boolean };

export const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlay
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <AlertDialogPrimitive.Overlay
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "fixed inset-0 z-50 bg-white/70 dark:bg-black/60 backdrop-blur-sm",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
              className
            )
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// AlertDialogContent Component
const alertDialogContentClasses = {
  size: {
    sm: "max-w-[30rem] p-6",
    md: "max-w-[35rem] p-7",
    lg: "max-w-[40rem] p-8",
  },
};

export type AlertDialogContent = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Content
> & { isUnstyled?: boolean };

export const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  AlertDialogContent
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                alertDialogContentClasses.size[size],
                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg sm:rounded-lg md:w-full",
                "bg-white dark:bg-secondary-800 dark:text-secondary-50 dark:border-secondary-700",
                "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                className
              )
        }
        ref={forwardedRef}
      />
    </AlertDialogPrimitive.Portal>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

// AlertDialogHeader
export type AlertDialogHeader = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogHeader = ({
  className,
  isUnstyled = false,
  ...props
}: AlertDialogHeader) => {
  const { isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <div
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "flex flex-col space-y-1.5 text-center sm:text-left",
              className
            )
      }
    />
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";

// AlertDialogFooter
export type AlertDialogFooter = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogFooter = ({
  className,
  isUnstyled,
  ...props
}: AlertDialogFooter) => {
  const { isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <div
      className={
        unstyle
          ? className
          : classNames(
              "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
              className
            )
      }
      {...props}
    />
  );
};
AlertDialogFooter.displayName = "AlertDialogFooter";

// AlertDialogTitle Component
export type AlertDialogTitle = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
> & { isUnstyled?: boolean };

export const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitle
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <AlertDialogPrimitive.Title
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "text-lg font-semibold leading-none tracking-tight",
              className
            )
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogTitle.displayName = "AlertDialogTitle";

// AlertDialogBody Component
export type AlertDialogDescription = React.ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
> & { isUnstyled?: boolean };

export const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescription
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <AlertDialogPrimitive.Description
      {...props}
      className={
        unstyle
          ? className
          : classNames("text-sm text-muted-foreground", className)
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogDescription.displayName = "AlertDialogDescription";

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
