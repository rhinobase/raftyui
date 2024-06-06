"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from "react";
import {
  alertDialogContentClasses,
  alertDialogDescriptionClasses,
  alertDialogHeaderAndFooterClasses,
  alertDialogOverlayClasses,
  alertDialogTitleClasses,
} from "../alert-dialog";
import { Button } from "../button";
import type { ValueOrFunction } from "../types";
import { classNames, getValue } from "../utils";
import {
  type DialogContext,
  DialogProvider,
  useDialogContext,
} from "./context";

export type Dialog = ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
  Partial<DialogContext>;

export function Dialog({
  children,
  size = "md",
  isUnstyled = false,
  ...props
}: Dialog) {
  return (
    <DialogProvider value={{ size, isUnstyled }}>
      <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
    </DialogProvider>
  );
}

export type DialogTrigger = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Trigger
> &
  Button;

export const DialogTrigger = forwardRef<
  ElementRef<typeof DialogPrimitive.Trigger>,
  DialogTrigger
>(function DialogTrigger(
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
) {
  const { isUnstyled: isParentUnstyled, size: parentSize } = useDialogContext();

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
    <DialogPrimitive.Trigger
      {...props}
      className={asChild ? className : undefined}
      ref={forwardedRef}
      asChild
    >
      {asChild ? children : <Button {...buttonProps}>{children}</Button>}
    </DialogPrimitive.Trigger>
  );
});

export type DialogOverlay = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
> & {
  isUnstyled?: boolean;
};

export const DialogOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  DialogOverlay
>(function DialogOverlay(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled } = useDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DialogPrimitive.Overlay
      {...props}
      className={
        unstyle ? className : classNames(alertDialogOverlayClasses, className)
      }
      ref={forwardedRef}
    />
  );
});

export type DialogContent = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
> & {
  isUnstyled?: boolean;
  showCloseButton?: ValueOrFunction;
};

export const DialogContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DialogContent
>(function DialogContent(
  { children, className, isUnstyled = false, showCloseButton, ...props },
  forwardedRef,
) {
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
            : classNames(alertDialogContentClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
        {_showCloseButton && (
          <DialogPrimitive.Close asChild>
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-4 top-4 p-1"
            >
              <XMarkIcon className="size-4 stroke-2" />
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

export type DialogHeader = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const DialogHeader = forwardRef<HTMLElement, DialogHeader>(
  function DialogHeader({ className, isUnstyled, ...props }, forwardedRef) {
    const { isUnstyled: isParentUnstyled, size } = useDialogContext();
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

export type DialogFooter = HTMLAttributes<HTMLDivElement> & {
  isUnstyled?: boolean;
};

export const DialogFooter = forwardRef<HTMLDivElement, DialogFooter>(
  function DialogFooter(
    { className, isUnstyled = false, ...props },
    forwardedRef,
  ) {
    const { isUnstyled: isParentUnstyled, size } = useDialogContext();
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

export type DialogTitle = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
> & { isUnstyled?: boolean };

export const DialogTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  DialogTitle
>(function DialogTitle(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DialogPrimitive.Title
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

export type DialogDescription = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
> & { isUnstyled?: boolean };

export const DialogDescription = forwardRef<
  ElementRef<typeof DialogPrimitive.Description>,
  DialogDescription
>(function DialogDescription(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <DialogPrimitive.Description
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

export const DialogClose = DialogPrimitive.Close;
DialogClose.displayName = "DialogClose";
