"use client";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { cva } from "class-variance-authority";
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type HTMLAttributes,
  forwardRef,
} from "react";
import { Button } from "../button/index.js";
import { classNames } from "../utils/index.js";
import {
  type AlertDialogContext,
  AlertDialogProvider,
  useAlertDialogContext,
} from "./context.js";

export type AlertDialog = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Root
> &
  Partial<AlertDialogContext>;

export function AlertDialog({
  size = "md",
  isUnstyled = false,
  ...props
}: AlertDialog) {
  return (
    <AlertDialogProvider value={{ size, isUnstyled }}>
      <AlertDialogPrimitive.Root {...props} />
    </AlertDialogProvider>
  );
}

export type AlertDialogTrigger = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Trigger
> &
  Button;

export const AlertDialogTrigger = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Trigger>,
  AlertDialogTrigger
>(function AlertDialogTrigger(
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
) {
  const { isUnstyled: isParentUnstyled, size: parentSize } =
    useAlertDialogContext();

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
    <AlertDialogPrimitive.Trigger
      {...props}
      className={asChild ? className : undefined}
      ref={forwardedRef}
      asChild
    >
      {asChild ? children : <Button {...buttonProps}>{children}</Button>}
    </AlertDialogPrimitive.Trigger>
  );
});

export const alertDialogOverlayClasses =
  "fixed inset-0 z-50 bg-white/40 backdrop-blur-sm dark:bg-black/40 data-[state=open]:animate-overlayShow";

export type AlertDialogOverlay = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Overlay
> & { isUnstyled?: boolean };

export const AlertDialogOverlay = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Overlay>,
  AlertDialogOverlay
>(function AlertDialogOverlay(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Overlay
      {...props}
      className={
        unstyle ? className : classNames(alertDialogOverlayClasses, className)
      }
      ref={forwardedRef}
    />
  );
});

export const alertDialogContentClasses = cva(
  "w-[95%] md:w-full outline-none flex flex-col bg-white dark:bg-secondary-900 border dark:border-secondary-800 text-black dark:text-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 data-[state=open]:animate-contentShow",
  {
    variants: {
      size: {
        sm: "max-w-[30rem] p-4 rounded-md gap-2",
        md: "max-w-[40rem] p-5 rounded-lg gap-3",
        lg: "max-w-[50rem] p-6 rounded-lg gap-4",
        xl: "max-w-[60rem] p-7 rounded-xl gap-5",
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
>(function AlertDialogContent(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
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

export const alertDialogHeaderAndFooterClasses = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-2.5",
      lg: "gap-3",
      xl: "gap-3.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type AlertDialogHeader = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogHeader = forwardRef<HTMLElement, AlertDialogHeader>(
  function AlertDialogHeader(
    { className, isUnstyled = false, ...props },
    forwardedRef,
  ) {
    const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
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

export type AlertDialogFooter = HTMLAttributes<HTMLElement> & {
  isUnstyled?: boolean;
};

export const AlertDialogFooter = forwardRef<HTMLElement, AlertDialogFooter>(
  function AlertDialogFooter(
    { className, isUnstyled, ...props },
    forwardedRef,
  ) {
    const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
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

export const alertDialogTitleClasses = cva(
  "font-semibold leading-none tracking-tight",
  {
    variants: {
      size: {
        sm: "text-lg",
        md: "text-lg",
        lg: "text-xl",
        xl: "text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type AlertDialogTitle = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Title
> & { isUnstyled?: boolean };

export const AlertDialogTitle = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Title>,
  AlertDialogTitle
>(function AlertDialogTitle(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Title
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

export const alertDialogDescriptionClasses = cva(
  "text-secondary-600 dark:text-secondary-400",
  {
    variants: {
      size: {
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export type AlertDialogDescription = ComponentPropsWithoutRef<
  typeof AlertDialogPrimitive.Description
> & { isUnstyled?: boolean };

export const AlertDialogDescription = forwardRef<
  ElementRef<typeof AlertDialogPrimitive.Description>,
  AlertDialogDescription
>(function AlertDialogDescription(
  { className, isUnstyled = false, ...props },
  forwardedRef,
) {
  const { isUnstyled: isParentUnstyled, size } = useAlertDialogContext();
  const unstyle = isParentUnstyled || isUnstyled;

  return (
    <AlertDialogPrimitive.Description
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

export const AlertDialogAction = AlertDialogPrimitive.Action;

export const AlertDialogCancel = AlertDialogPrimitive.Cancel;
