import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentProps, forwardRef } from "react";
import { Button } from "../button";
import { DialogContext, DialogProvider, useDialogContext } from "./context";
import { classNames } from "@rafty/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Dialog Component
export type Dialog = ComponentProps<(typeof DialogPrimitive)["Dialog"]> &
  Partial<DialogContext>;

export const Dialog = ({
  children,
  size = "md",
  isBarebone = false,
  ...props
}: Dialog) => (
  <DialogProvider value={{ size, isBarebone }}>
    {/* TODO: Add reference to the below element */}
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DialogProvider>
);
Dialog.displayName = "Dialog";

// Dialog Button Component
export type DialogTrigger = ComponentProps<
  (typeof DialogPrimitive)["DialogTrigger"]
> &
  Button;

export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTrigger>(
  (
    {
      children,
      className,
      variant,
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isLoading = false,
      isActive = false,
      asChild = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const { isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

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

export type DialogOverlay = ComponentProps<
  (typeof DialogPrimitive)["Overlay"]
> & {
  isUnstyled?: boolean;
};

export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlay>(
  ({ className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

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
  isUnstyled?: boolean;
};

export const DialogContent = forwardRef<HTMLDivElement, DialogContent>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

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
export type DialogHeading = ComponentProps<
  (typeof DialogPrimitive)["DialogTitle"]
> & {
  isUnstyled?: boolean;
};

export const DialogHeading = React.forwardRef<HTMLDivElement, DialogHeading>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DialogPrimitive.Title
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                size === "lg" && "text-xl",
                size === "md" && "text-xl",
                size === "sm" && "text-lg",
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
DialogHeading.displayName = "DialogHeading";

// Dialog Body Component
export type DialogBody = ComponentProps<
  (typeof DialogPrimitive)["DialogDescription"]
> & { isUnstyled?: boolean };
export const DialogBody = React.forwardRef<HTMLDivElement, DialogBody>(
  ({ className, children, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DialogPrimitive.Description {...props} ref={forwardedRef} asChild>
        <div
          className={
            unstyle
              ? className
              : classNames(
                  size === "lg" && "max-w-[60rem] p-8",
                  size === "md" && "max-w-[40rem] p-7",
                  size === "sm" && "max-w-[30rem] p-6",
                  "dark:bg-secondary-800 dark:text-secondary-50 rounded-base fixed left-1/2 top-1/2 z-50 min-w-[360px] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overscroll-auto bg-white text-left shadow-xl sm:w-full sm:align-middle md:h-auto md:max-h-[inherit]",
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
  Button & { iconClassName?: string };
export const DialogCloseButton = forwardRef<
  HTMLButtonElement,
  DialogCloseButton
>(
  (
    {
      variant = "ghost",
      size = "icon",
      className,
      isUnstyled = false,
      iconClassName,
      ...props
    },
    forwardedRef
  ) => {
    const { isBarebone } = useDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <DialogPrimitive.Close ref={forwardedRef} asChild>
        {/* This will require the i18n string passed in */}
        <Button
          variant={variant}
          size={size}
          {...props}
          className={
            unstyle
              ? className
              : classNames("absolute right-5 top-5 rounded-full", className)
          }
        >
          <XMarkIcon className={classNames("h-5 w-5", iconClassName)} />
        </Button>
      </DialogPrimitive.Close>
    );
  }
);
DialogCloseButton.displayName = "DialogCloseButton";

export type DialogClose = ComponentProps<(typeof DialogPrimitive)["Close"]>;

export const DialogClose = ({ children, ...props }: DialogClose) => (
  <DialogPrimitive.Close {...props}>{children}</DialogPrimitive.Close>
);
DialogClose.displayName = "DialogClose";
