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

export const AlertDialog = ({
  size = "md",
  isUnstyled = false,
  ...props
}: AlertDialog) => (
  <AlertDialogProvider value={{ size, isUnstyled }}>
    <AlertDialogPrimitive.Root {...props} />
  </AlertDialogProvider>
);
AlertDialog.displayName = "AlertDialog";

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
        {asChild ? (
          children
        ) : (
          <Button size={triggerSize} isUnstyled={unstyle} {...buttonProps}>
            {children}
          </Button>
        )}
      </AlertDialogPrimitive.Trigger>
    );
  },
);
AlertDialogTrigger.displayName = "AlertDialogTrigger";

// AlertDialogOverlayComponent
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
        unstyle
          ? className
          : classNames(
              "fixed inset-0 z-50 bg-white/70 backdrop-blur-sm dark:bg-black/60",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
              className,
            )
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// AlertDialogContent Component
export const alertDialogContentClasses = cva(
  "fixed left-[50%] top-[50%] z-50 grid w-full translate-x-[-50%] translate-y-[-50%] gap-4 border shadow-lg sm:rounded-lg dark:bg-secondary-800 dark:text-secondary-50 dark:border-secondary-700 bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",
  {
    variants: {
      size: {
        sm: "max-w-[30rem] p-5",
        md: "max-w-[40rem] p-6",
        lg: "max-w-[50rem] p-7",
        xl: "max-w-[60rem] p-8",
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
export type AlertDialogHeader = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogHeader = ({
  className,
  isUnstyled = false,
  ...props
}: AlertDialogHeader) => {
  const { isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <div
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "flex flex-col space-y-1.5 text-center sm:text-left",
              className,
            )
      }
    />
  );
};
AlertDialogHeader.displayName = "AlertDialogHeader";

// AlertDialogFooter
export type AlertDialogFooter = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogFooter = ({
  className,
  isUnstyled,
  ...props
}: AlertDialogFooter) => {
  const { isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <div
      className={
        unstyle
          ? className
          : classNames(
              "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
              className,
            )
      }
      {...props}
    />
  );
};
AlertDialogFooter.displayName = "AlertDialogFooter";

// AlertDialogTitle Component
export type AlertDialogTitle = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
> & { isUnstyled?: boolean };

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitle
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Title
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "text-lg font-semibold leading-none tracking-tight",
              className,
            )
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogTitle.displayName = "AlertDialogTitle";

// AlertDialogBody Component
export type AlertDialogDescription = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
> & { isUnstyled?: boolean };

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescription
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Description
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "text-secondary-600 dark:text-secondary-400 text-sm",
              className,
            )
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
