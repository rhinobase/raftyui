import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "@rhinobase/core";
import { DialogContext, DialogProvider, useDialogContext } from "./context";

// Dialog Component
type DialogProps = ComponentProps<(typeof DialogPrimitive)["Dialog"]>;
export const Dialog = forwardRef<HTMLDivElement, DialogContext & DialogProps>(
  ({ children, size = "md", ...props }, forwardedRef) => (
    <DialogProvider value={{ size }}>
      {/* TODO: Add reference to the below element */}
      <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
    </DialogProvider>
  )
);

// Dialog Button Component
type DialogButtonProps = ComponentProps<
  (typeof DialogPrimitive)["DialogTrigger"]
> &
  Button;
export const DialogButton = React.forwardRef<
  HTMLButtonElement,
  DialogButtonProps
>(
  (
    {
      children,
      className,
      variant,
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = undefined,
      loading = undefined,
      active = undefined,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <DialogPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        <Button
          variant={variant || "ghost"}
          colorScheme={colorScheme}
          className={className}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          loading={loading}
          disabled={disabled}
          active={active}
        >
          {children}
        </Button>
      </DialogPrimitive.Trigger>
    );
  }
);

// Dialog Content Component
type DialogContentProps = ComponentProps<
  (typeof DialogPrimitive)["DialogContent"]
> & {
  height?: string;
  width?: string;
};
export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, title, height, width, ...props }, forwardedRef) => {
    const { size } = useDialogContext();
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="animate-slide-down-fade absolute inset-0 z-40 bg-black bg-opacity-20 transition-opacity ease-in-out dark:bg-opacity-40" />
        {/*zIndex one less than Toast */}
        <DialogPrimitive.Content
          {...props}
          style={{ height: height && height, maxWidth: width && width }}
          className={classNames(
            "dark:bg-secondary-800 dark:text-secondary-50 rounded-base absolute left-1/2 top-1/2 z-50 min-w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white text-left shadow-xl transition-all duration-300 focus-visible:outline-none sm:w-full sm:align-middle",
            size == "lg" && "p-5xl max-w-[50rem]",
            size == "md" && "p-4xl max-w-[40rem]",
            size == "sm" && "p-3xl max-w-[30rem]",
            "overflow-y-auto overscroll-auto md:h-auto md:max-h-[inherit]",
            props.className
          )}
          ref={forwardedRef}
        >
          {children}
          <DialogCloseButton />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);

// Dialog Title Component
type DialogTitleProps = ComponentProps<(typeof DialogPrimitive)["DialogTitle"]>;
export const DialogTitle = React.forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useDialogContext();

    return (
      <DialogPrimitive.Title
        {...props}
        className={classNames(
          size == "lg" && "text-xl",
          size == "md" && "text-xl",
          size == "sm" && "text-lg",
          "mb-2 font-semibold"
        )}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Title>
    );
  }
);

// Dialog Body Component
type DialogBodyProps = ComponentProps<
  (typeof DialogPrimitive)["DialogDescription"]
>;
export const DialogBody = React.forwardRef<HTMLDivElement, DialogBodyProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Description {...props} ref={forwardedRef} asChild>
        <div className={className}>{children}</div>
      </DialogPrimitive.Description>
    );
  }
);

// Dialog Cross Button Component
function DialogCloseButton(
  props: {
    dialogCloseProps?: React.ComponentProps<(typeof DialogPrimitive)["Close"]>;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    disabled?: boolean;
    colorVariant?: Button["variant"];
  } & React.ComponentProps<typeof Button>
) {
  return (
    <DialogPrimitive.Close asChild {...props.dialogCloseProps}>
      {/* This will require the i18n string passed in */}
      <Button
        variant={props.colorVariant || "ghost"}
        size="icon"
        {...props}
        className="absolute top-5 right-5 rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6 stroke-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </DialogPrimitive.Close>
  );
}

// Dialog Close for on click close function
export const DialogClose = DialogPrimitive.DialogClose;
