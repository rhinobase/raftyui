import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { ComponentProps, forwardRef } from "react";
import { Button } from "@rafty/button";
import {
  AlertDialogProvider,
  AlertDialogContext,
  useAlertDialogContext,
} from "./context";
import { classNames } from "@rafty/utils";
import { cva } from "class-variance-authority";

// AlertDialog Component
export type AlertDialog = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialog"]
> &
  Partial<AlertDialogContext>;

export const AlertDialog = ({
  children,
  size = "md",
  isBarebone = false,
  ...props
}: AlertDialog) => (
  <AlertDialogProvider value={{ size, isBarebone }}>
    <AlertDialogPrimitive.Root {...props}>{children}</AlertDialogPrimitive.Root>
  </AlertDialogProvider>
);
AlertDialog.displayName = "AlertDialog";

// AlertDialog Trigger Component
export type AlertDialogTrigger = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogTrigger"]
> &
  Button;

export const AlertDialogTrigger = forwardRef<
  HTMLButtonElement,
  AlertDialogTrigger
>(
  (
    {
      children,
      className,
      variant = "ghost",
      colorScheme,
      leftIcon,
      rightIcon,
      isDisabled = false,
      isActive = false,
      isLoading = false,
      isUnstyled = false,
      ...props
    },
    forwardedRef
  ) => {
    const { isBarebone } = useAlertDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <AlertDialogPrimitive.Trigger {...props} ref={forwardedRef} asChild>
        <Button
          variant={variant}
          colorScheme={colorScheme}
          className={className}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          isDisabled={isDisabled}
          isActive={isActive}
          isLoading={isLoading}
          isUnstyled={unstyle}
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
> & { isUnstyled?: boolean };

export const AlertDialogOverlay = forwardRef<
  HTMLDivElement,
  AlertDialogOverlay
>(({ className, isUnstyled = false, ...props }, forwardedRef) => {
  const { isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

  return (
    /*zIndex one less than Toast */
    <AlertDialogPrimitive.Overlay
      {...props}
      className={
        unstyle
          ? className
          : classNames(
              "animate-slide-down-fade fixed inset-0 z-40 bg-black bg-opacity-30 transition-opacity",
              className
            )
      }
      ref={forwardedRef}
    />
  );
});
AlertDialogOverlay.displayName = "AlertDialogOverlay";

// AlertDialogContent Component
const alertDialogContentClasses = cva(
  "dark:bg-secondary-800 dark:text-secondary-50 rounded-base fixed left-1/2 top-1/2 z-[9998] min-w-[360px] -translate-x-1/2 -translate-y-1/2 bg-white text-left shadow-xl transition-all duration-300 focus-visible:outline-none sm:w-full sm:align-middle overflow-y-auto overscroll-auto md:h-auto md:max-h-[inherit]",
  {
    variants: {
      size: {
        sm: "max-w-[30rem] p-6",
        md: "max-w-[35rem] p-7",
        lg: "max-w-[40rem] p-8",
      },
    },
  }
);

export type AlertDialogContent = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogContent"]
> & { isUnstyled?: boolean };

export const AlertDialogContent = forwardRef<
  HTMLDivElement,
  AlertDialogContent
>(({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
  const { size, isBarebone } = useAlertDialogContext();
  const unstyle = isBarebone || isUnstyled;

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
      >
        {children}
      </AlertDialogPrimitive.Content>
    </AlertDialogPrimitive.Portal>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

// AlertDialogTitle Component
const alertDialogTitleClasses = cva("mb-2 font-semibold", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-xl",
    },
  },
});

export type AlertDialogTitle = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogTitle"]
> & { isUnstyled?: boolean };

export const AlertDialogTitle = forwardRef<HTMLDivElement, AlertDialogTitle>(
  ({ children, className, isUnstyled = false, ...props }, forwardedRef) => {
    const { size, isBarebone } = useAlertDialogContext();
    const unstyle = isBarebone || isUnstyled;

    return (
      <AlertDialogPrimitive.Title
        {...props}
        className={
          unstyle
            ? className
            : classNames(alertDialogTitleClasses({ size }), className)
        }
        ref={forwardedRef}
      >
        {children}
      </AlertDialogPrimitive.Title>
    );
  }
);
AlertDialogTitle.displayName = "AlertDialogTitle";

// AlertDialogBody Component
export type AlertDialogBody = ComponentProps<
  (typeof AlertDialogPrimitive)["AlertDialogDescription"]
>;

export const AlertDialogBody = forwardRef<HTMLDivElement, AlertDialogBody>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <AlertDialogPrimitive.Description
        {...props}
        className={className}
        ref={forwardedRef}
        asChild
      >
        {children}
      </AlertDialogPrimitive.Description>
    );
  }
);
AlertDialogBody.displayName = "AlertDialogBody";

export const AlertDialogAction = AlertDialogPrimitive.Action;
export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
