import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import React, { ComponentProps } from "react";
import { Button } from "../button";
import {
  AlertDialogProvider,
  AlertDialogContext,
  useAlertDialogContext,
} from "./context";
import { classNames } from "../utils";

// AlertDialog Component
export type AlertDialog = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialog"]
> &
  AlertDialogContext;
export const AlertDialog = ({
  children,
  size = "md",
  barebone = false,
  ...props
}: AlertDialog) => (
  <AlertDialogProvider value={{ size, barebone }}>
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  </AlertDialogProvider>
);

AlertDialog.displayName = "AlertDialog";

// AlertDialogButton Component
export type AlertDialogTrigger = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogTrigger"]
> &
  Button;
export const AlertDialogTrigger = React.forwardRef<
  HTMLButtonElement,
  AlertDialogTrigger
>(
  (
    {
      children,
      className,
      variant,
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = false,
      active = false,
      loading = false,
      unstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <AlertDialogPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        <Button
          variant={variant || "ghost"}
          colorScheme={colorScheme}
          className={className}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
          active={active}
          loading={loading}
          unstyled={unstyled}
        >
          {children}
        </Button>
      </AlertDialogPrimitive.Trigger>
    );
  }
);

AlertDialogTrigger.displayName = "AlertDialogTrigger";

// AlertDialogOverlayComponent
export type AlertDialogOverlay = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogOverlay"]
> & { unstyled?: boolean };
export const AlertDialogOverlay = React.forwardRef<
  HTMLDivElement,
  AlertDialogOverlay
>(({ className, unstyled = false, ...props }, forwardedRef) => {
  const { barebone } = useAlertDialogContext();
  const unstyle = barebone || unstyled;

  return (
    /*zIndex one less than Toast */
    <AlertDialogPrimitive.Overlay
      className={
        unstyle
          ? className
          : classNames(
              "animate-slide-down-fade fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity",
              className
            )
      }
      ref={forwardedRef}
      {...props}
    />
  );
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// AlertDialogContent Component
export type AlertDialogContent = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogContent"]
> & { unstyled?: boolean };
export const AlertDialogContent = React.forwardRef<
  HTMLDivElement,
  AlertDialogContent
>(({ children, className, unstyled = false, ...props }, forwardedRef) => {
  const { size, barebone } = useAlertDialogContext();
  const unstyle = barebone || unstyled;

  return (
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Content
        {...props}
        className={
          unstyle
            ? className
            : classNames(
                size == "lg" && "max-w-[40rem] p-8",
                size == "md" && "max-w-[35rem] p-7",
                size == "sm" && "max-w-[30rem] p-6",
                "dark:bg-secondary-800 dark:text-secondary-50 rounded-base fixed left-1/2 top-1/2 z-[9998] min-w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white text-left shadow-xl transition-all duration-300 focus-visible:outline-none sm:w-full sm:align-middle",
                "overflow-y-auto overscroll-auto md:h-auto md:max-h-[inherit]",
                className
              )
        }
        ref={forwardedRef}
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

// AlertDialogTitle Component
export type AlertDialogTitle = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogTitle"]
> & { unstyled?: boolean };
export const AlertDialogTitle = React.forwardRef<
  HTMLDivElement,
  AlertDialogTitle
>(({ children, className, unstyled = false, ...props }, forwardedRef) => {
  const { size, barebone } = useAlertDialogContext();
  const unstyle = barebone || unstyled;

  return (
    <AlertDialogPrimitive.Title
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
    </AlertDialogPrimitive.Title>
  );
});
AlertDialogTitle.displayName = "AlertDialogTitle";

// AlertDialogBody Component
export type AlertDialogBody = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogDescription"]
>;
export const AlertDialogBody = React.forwardRef<
  HTMLDivElement,
  AlertDialogBody
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <AlertDialogPrimitive.Description {...props} ref={forwardedRef} asChild>
      <div className={className}>{children}</div>
    </AlertDialogPrimitive.Description>
  );
});
AlertDialogBody.displayName = "AlertDialogBody";

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
