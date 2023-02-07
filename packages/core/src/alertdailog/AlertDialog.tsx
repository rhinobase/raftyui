import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import React, { ComponentProps } from "react";
import { classNames } from "@rhinobase/lib";
import { Button, ButtonProps } from "@rhinobase/ui";
import { AlertDialogProvider, AlertDialogContext, useAlertDialogContext } from "./context";

// AlertDialog Component
type AlertDialogProps = ComponentProps<typeof AlertDialogPrimitive["AlertDialog"]> & AlertDialogContext;
export const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  ({ children, size = "md", ...props }, forwardedRef) => (
    <AlertDialogProvider value={{ size }}>
      {/* TODO: Add reference to the below element */}
      <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
    </AlertDialogProvider>
  )
);

// AlertDialogButton Component
type AlertDialogButtonProps = ComponentProps<typeof AlertDialogPrimitive["AlertDialogTrigger"]> & ButtonProps;
export const AlertDialogButton = React.forwardRef<HTMLButtonElement, AlertDialogButtonProps>(
  (
    {
      children,
      className,
      variant,
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = undefined,
      active = undefined,
      loading = undefined,
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
          loading={loading}>
          {children}
        </Button>
      </AlertDialogPrimitive.Trigger>
    );
  }
);

// AlertDialogContent Component
type AlertDialogContentProps = ComponentProps<typeof AlertDialogPrimitive["AlertDialogContent"]>;
export const AlertDialogContent = React.forwardRef<HTMLDivElement, AlertDialogContentProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useAlertDialogContext();

    return (
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="animate-slide-down-fade fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity" />
        {/*zIndex one less than Toast */}
        <AlertDialogPrimitive.Content
          {...props}
          className={classNames(
            "dark:bg-secondary-800 dark:text-secondary-50 rounded-base fixed left-1/2 top-1/2 z-[9998] min-w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white text-left shadow-xl transition-all duration-300 focus-visible:outline-none sm:w-full sm:align-middle",
            size == "lg" && "p-5xl max-w-[40rem]",
            size == "md" && "p-4xl max-w-[35rem]",
            size == "sm" && "p-3xl max-w-[30rem]",
            "overflow-y-auto overscroll-auto md:h-auto md:max-h-[inherit]",
            className
          )}
          ref={forwardedRef}>
          {children}
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    );
  }
);

// AlertDialogTitle Component
type AlertDialogTitleProps = ComponentProps<typeof AlertDialogPrimitive["AlertDialogTitle"]>;
export const AlertDialogTitle = React.forwardRef<HTMLDivElement, AlertDialogTitleProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const { size } = useAlertDialogContext();

    return (
      <AlertDialogPrimitive.Title
        {...props}
        className={classNames(
          size == "lg" && "text-xl",
          size == "md" && "text-xl",
          size == "sm" && "text-lg",
          "mb-2 font-semibold",
          className
        )}
        ref={forwardedRef}>
        {children}
      </AlertDialogPrimitive.Title>
    );
  }
);

// AlertDialogBody Component
type AlertDialogBodyProps = ComponentProps<typeof AlertDialogPrimitive["AlertDialogDescription"]>;
export const AlertDialogBody = React.forwardRef<HTMLDivElement, AlertDialogBodyProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <AlertDialogPrimitive.Description {...props} ref={forwardedRef}>
        <div className={className}>{children}</div>
      </AlertDialogPrimitive.Description>
    );
  }
);

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
