import React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "../button";
import { DialogContext, DialogProvider, useDialogContext } from "./context";
import { classNames } from "@rafty/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Dialog Component
export type Dialog = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
> &
  Partial<DialogContext>;

export const Dialog = ({
  children,
  size = "md",
  isBarebone = false,
  ...props
}: Dialog) => (
  <DialogProvider value={{ size, isBarebone }}>
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DialogProvider>
);
Dialog.displayName = "Dialog";

// Dialog Button Component
export type DialogTrigger = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
> &
  Button;

export const DialogTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTrigger
>(
  (
    {
      children,
      className,
      variant = "ghost",
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isLoading = false,
      isActive = false,
      asChild,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const { isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DialogPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        {asChild ? (
          children
        ) : (
          <Button
            variant={variant}
            colorScheme={colorScheme}
            className={className}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            isLoading={isLoading}
            isDisabled={isDisabled}
            isActive={isActive}
            isUnstyled={unstyle}
          >
            {children}
          </Button>
        )}
      </DialogPrimitive.Trigger>
    );
  }
);
DialogTrigger.displayName = "DialogTrigger";

export type DialogOverlay = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
> & {
  isUnstyled?: boolean;
};

export const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlay
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DialogPrimitive.Overlay
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
DialogOverlay.displayName = "DialogOverlay";

// Dialog Content Component
const dialogContentClasses = {
  size: {
    sm: "max-w-[30rem] p-6",
    md: "max-w-[35rem] p-7",
    lg: "max-w-[40rem] p-8",
  },
};
export type DialogContent = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  isUnstyled?: boolean;
  showCloseButton?: boolean;
};

export const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContent
>(
  (
    {
      children,
      className,
      isUnstyled = false,
      showCloseButton = true,
      ...props
    },
    forwardedRef
  ) => {
    const { size, isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  dialogContentClasses.size[size],
                  "fixed left-[50%] top-[50%] z-50 w-full -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg",
                  "bg-white dark:bg-secondary-800 dark:text-secondary-50",
                  "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
              <XMarkIcon className="h-4 w-4 stroke-2" />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);
DialogContent.displayName = "DialogContent";

// Dialog Header Component
export type DialogHeader = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const DialogHeader = ({
  className,
  isUnstyled,
  ...props
}: DialogHeader) => {
  const { isBarebone } = useDialogContext();
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
DialogHeader.displayName = "DialogHeader";

// Dialog Footer Component
export type DialogFooter = React.HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const DialogFooter = ({
  className,
  isUnstyled = false,
  ...props
}: DialogFooter) => {
  const { isBarebone } = useDialogContext();
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
DialogFooter.displayName = "DialogFooter";

// DialogTitle Component
export type DialogTitle = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
> & { isUnstyled?: boolean };

export const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitle
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DialogPrimitive.Title
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              "text-lg font-semibold leading-none tracking-tight",
              className
            )
      }
      {...props}
    />
  );
});
DialogTitle.displayName = "DialogTitle";

// Dialog Body Component
export type DialogDescription = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
> & { isUnstyled?: boolean };

export const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescription
>(({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    <DialogPrimitive.Description
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
DialogDescription.displayName = "DialogDescription";

// Dialog Close Component

export const DialogClose = DialogPrimitive.Close;
