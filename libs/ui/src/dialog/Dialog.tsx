"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { BooleanOrFunction, getValue } from "@rafty/shared";
import { cva } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  HTMLAttributes,
  forwardRef,
} from "react";
import { Button } from "../button";
import { classNames } from "../utils";
import { DialogContext, DialogProvider, useDialogContext } from "./context";

// Dialog Component
export type Dialog = ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
  Partial<DialogContext>;

export const Dialog = ({
  children,
  size = "md",
  isUnstyled = false,
  ...props
}: Dialog) => (
  <DialogProvider value={{ size, isUnstyled }}>
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DialogProvider>
);
Dialog.displayName = "Dialog";

// Dialog Button Component
export type DialogTrigger = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
> &
  Button;

export const DialogTrigger = forwardRef<
  ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTrigger
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
      isLoading = false,
      isActive = false,
      asChild = false,
      isUnstyled = false,
      type = "button",
      ...props
    },
    forwardedRef,
  ) => {
    const { isUnstyled: isParentUnstyled, size: parentSize } =
      useDialogContext();
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
      <DialogPrimitive.Trigger
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
      </DialogPrimitive.Trigger>
    );
  },
);
DialogTrigger.displayName = "DialogTrigger";

export type DialogOverlay = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
> & {
  isUnstyled?: boolean;
};

export const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlay
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DialogPrimitive.Overlay
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "fixed inset-0 z-50 bg-white/40 backdrop-blur-sm dark:bg-black/40",
              "data-[state=open]:animate-in data-[state=open]:fade-in-0",
              "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
              className,
            )
      }
      ref={forwardedRef}
    />
  );
});
DialogOverlay.displayName = "DialogOverlay";

// Dialog Content Component
export const dialogContentClasses = cva(
  "fixed left-[50%] top-[50%] z-50 w-full -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg dark:bg-secondary-800 dark:text-secondary-50 bg-white data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] duration-200",
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

export type DialogContent = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  isUnstyled?: boolean;
  showCloseButton?: BooleanOrFunction;
};

export const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DialogContent
>(
  (
    { children, className, isUnstyled = false, showCloseButton, ...props },
    forwardedRef,
  ) => {
    const { size, isUnstyled: isParentUnstyled } = useDialogContext();
    const unstyle = isParentUnstyled || isUnstyled;
    const _showCloseButton = getValue(showCloseButton) ?? true;

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          {...props}
          className={
            unstyle
              ? className
              : classNames(dialogContentClasses({ size }), className)
          }
          ref={forwardedRef}
        >
          {children}
          {_showCloseButton && (
            <DialogPrimitive.Close className="hover:bg-secondary-200/70 dark:hover:bg-secondary-500/70 absolute right-4 top-4 rounded p-1 transition-all focus:outline-none">
              <XMarkIcon className="size-4 stroke-2" />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);
DialogContent.displayName = "DialogContent";

// Dialog Header Component
export type DialogHeader = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const DialogHeader = ({
  className,
  isUnstyled,
  ...props
}: DialogHeader) => {
  const { isUnstyled: isParentUnstyled } = useDialogContext();
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
DialogHeader.displayName = "DialogHeader";

// Dialog Footer Component
export type DialogFooter = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const DialogFooter = ({
  className,
  isUnstyled = false,
  ...props
}: DialogFooter) => {
  const { isUnstyled: isParentUnstyled } = useDialogContext();
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
DialogFooter.displayName = "DialogFooter";

// DialogTitle Component
export type DialogTitle = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
> & { isUnstyled?: boolean };

export const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  DialogTitle
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DialogPrimitive.Title
      ref={forwardedRef}
      className={
        unstyle
          ? className
          : classNames(
              "text-lg font-semibold leading-none tracking-tight",
              className,
            )
      }
      {...props}
    />
  );
});
DialogTitle.displayName = "DialogTitle";

// Dialog Body Component
export type DialogDescription = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
> & { isUnstyled?: boolean };

export const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  DialogDescription
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isUnstyled: isParentUnstyled } = useDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DialogPrimitive.Description
      {...props}
      className={unstyle ? className : classNames("text-sm", className)}
      ref={forwardedRef}
    />
  );
});
DialogDescription.displayName = "DialogDescription";

// Dialog Close Component
export const DialogClose = DialogPrimitive.Close;
DialogClose.displayName = "DialogClose";
