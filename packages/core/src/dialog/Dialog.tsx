import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentProps, forwardRef } from "react";
import { Button } from "../button";
import { DialogContext, DialogProvider, useDialogContext } from "./context";
import { classNames } from "../utils";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Dialog Component
export type Dialog = ComponentProps<(typeof DialogPrimitive)["Dialog"]> &
  DialogContext;
export const Dialog = ({
  children,
  size = "md",
  barebone = false,
  ...props
}: Dialog) => (
  <DialogProvider value={{ size, barebone }}>
    {/* TODO: Add reference to the below element */}
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DialogProvider>
);
Dialog.displayName = "Dialog";

// Dialog Button Component
export type DialogTrigger = ComponentProps<
  (typeof DialogPrimitive)["DialogTrigger"]
> &
  Button & { unstyled?: boolean };
export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTrigger>(
  (
    {
      children,
      className,
      variant,
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = false,
      loading = false,
      active = false,
      asChild = false,
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const { barebone } = useDialogContext();
    const unstyle = barebone || unstyled;

    return (
      <DialogPrimitive.Trigger {...props} asChild ref={forwardedRef}>
        {asChild ? (
          children
        ) : (
          <Button
            variant={variant || "ghost"}
            colorScheme={colorScheme}
            className={className}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            loading={loading}
            disabled={disabled}
            active={active}
            unstyled={unstyle}
          >
            {children}
          </Button>
        )}
      </DialogPrimitive.Trigger>
    );
  }
);
DialogTrigger.displayName = "DialogTrigger";

export type DialogOverlay = ComponentProps<
  (typeof DialogPrimitive)["Overlay"]
> & {
  unstyled?: boolean;
};
export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlay>(
  ({ className, unstyled = false, ...props }, forwardedRef) => {
    const { barebone } = useDialogContext();
    const unstyle = barebone || unstyled;

    return (
      <DialogPrimitive.Overlay
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                "animate-slide-down-fade fixed inset-0 z-40 h-full w-full bg-black/40 transition-opacity ease-in-out",
                className
              )
        }
        ref={forwardedRef}
      />
    );
  }
);
DialogOverlay.displayName = "DialogOverlay";

// Dialog Content Component
export type DialogContent = ComponentProps<
  (typeof DialogPrimitive)["Content"]
> & {
  unstyled?: boolean;
};
export const DialogContent = forwardRef<HTMLDivElement, DialogContent>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { barebone } = useDialogContext();
    const unstyle = barebone || unstyled;

    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Content
          {...props}
          className={
            unstyle
              ? className
              : classNames(
                  "transition-all duration-200 focus-visible:outline-none",
                  className
                )
          }
          ref={forwardedRef}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);
DialogContent.displayName = "DialogContent";

// Dialog Title Component
export type DialogTitle = ComponentProps<
  (typeof DialogPrimitive)["DialogTitle"]
> & {
  unstyled?: boolean;
};
export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitle>(
  ({ children, className, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useDialogContext();
    const unstyle = barebone || unstyled;

    return (
      <DialogPrimitive.Title
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                size == "lg" && "text-xl",
                size == "md" && "text-xl",
                size == "sm" && "text-lg",
                "mb-2 font-semibold",
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Title>
    );
  }
);
DialogTitle.displayName = "DialogTitle";

// Dialog Body Component
export type DialogBody = ComponentProps<
  (typeof DialogPrimitive)["DialogDescription"]
> & { unstyled?: boolean };
export const DialogBody = React.forwardRef<HTMLDivElement, DialogBody>(
  ({ className, children, unstyled = false, ...props }, forwardedRef) => {
    const { size, barebone } = useDialogContext();
    const unstyle = barebone || unstyled;

    return (
      <DialogPrimitive.Description {...props} ref={forwardedRef} asChild>
        <div
          className={
            unstyle
              ? className
              : classNames(
                  "dark:bg-secondary-800 dark:text-secondary-50 rounded-base fixed left-1/2 top-1/2 z-50 min-w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-auto bg-white text-left shadow-xl sm:w-full sm:align-middle md:h-auto md:max-h-[inherit]",
                  size == "lg" && "max-w-[60rem] p-8",
                  size == "md" && "max-w-[40rem] p-7",
                  size == "sm" && "max-w-[30rem] p-6",
                  className
                )
          }
        >
          {children}
        </div>
      </DialogPrimitive.Description>
    );
  }
);
DialogBody.displayName = "DialogBody";

// Dialog Cross Button Component
export type DialogCloseButton = ComponentProps<
  (typeof DialogPrimitive)["Close"]
> &
  Button & { unstyled?: boolean };
export const DialogCloseButton = forwardRef<
  HTMLButtonElement,
  DialogCloseButton
>(({ variant, className, unstyled = false, ...props }, forwardedRef) => {
  const { barebone } = useDialogContext();
  const unstyle = barebone || unstyled;

  return (
    <DialogPrimitive.Close ref={forwardedRef} asChild>
      {/* This will require the i18n string passed in */}
      <Button
        variant={variant ?? "ghost"}
        size="icon"
        {...props}
        className={
          unstyle
            ? className
            : classNames("absolute top-5 right-5 rounded-full", className)
        }
      >
        <XMarkIcon />
      </Button>
    </DialogPrimitive.Close>
  );
});
DialogCloseButton.displayName = "DialogCloseButton";

export type DialogClose = ComponentProps<(typeof DialogPrimitive)["Close"]>;
export const DialogClose = ({ children, ...props }: DialogClose) => {
  return <DialogPrimitive.Close {...props}>{children}</DialogPrimitive.Close>;
};
DialogClose.displayName = "DialogClose";
