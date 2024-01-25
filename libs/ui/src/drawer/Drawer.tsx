"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { Button } from "../button";
import { classNames } from "../utils";
import { DrawerContext, DrawerProvider, useDrawerContext } from "./context";

// Drawer Component
export type Drawer = ComponentPropsWithoutRef<typeof DialogPrimitive.Root> &
  Partial<DrawerContext>;

export const Drawer = ({
  children,
  size = "md",
  side = "right",
  ...props
}: Drawer) => (
  <DrawerProvider value={{ size, side }}>
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DrawerProvider>
);
Drawer.displayName = "Drawer";

//Drawer Overlay Component
export type DrawerOverlay = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

export const DrawerOverlay = forwardRef<
  ElementRef<typeof DialogPrimitive.Overlay>,
  DrawerOverlay
>(({ className, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Overlay
      {...props}
      className={classNames(
        "animate-slide-down-fade fixed inset-0 z-50 bg-white/70 backdrop-blur-sm dark:bg-black/60",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0",
        className,
      )}
      ref={forwardedRef}
    />
  );
});
DrawerOverlay.displayName = "DrawerOverlay";

// Drawer Content Component
export const drawerContentClasses = cva(
  "dark:bg-secondary-800 dark:text-secondary-50 fixed top-0 z-50 h-screen overflow-y-auto overscroll-auto bg-white p-6 text-left shadow-xl focus-visible:outline-none sm:w-full sm:align-middle",
  {
    variants: {
      size: {
        sm: "max-w-2xl",
        md: "max-w-3xl",
        lg: "max-w-5xl",
        full: "w-full",
      },
      side: {
        left: "animate-slide-right",
        right: "animate-slide-left right-0",
      },
    },
    defaultVariants: {
      side: "right",
      size: "md",
    },
  },
);

export type DrawerContent = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

export const DrawerContent = forwardRef<
  ElementRef<typeof DialogPrimitive.Content>,
  DrawerContent
>(({ children, className, ...props }, forwardedRef) => {
  const { size, side } = useDrawerContext();
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Content
        {...props}
        className={classNames(drawerContentClasses({ side, size }), className)}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
DrawerContent.displayName = "DrawerContent";

// Drawer Title Component
export const drawerTitleClasses = cva("mb-2 font-semibold", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-xl",
      full: "text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type DrawerTitle = ComponentPropsWithoutRef<
  typeof DialogPrimitive.Title
>;

export const DrawerTitle = forwardRef<
  ElementRef<typeof DialogPrimitive.Title>,
  DrawerTitle
>(({ children, className, ...props }, forwardedRef) => {
  const { size } = useDrawerContext();

  return (
    <DialogPrimitive.Title
      {...props}
      className={classNames(drawerTitleClasses({ size }), className)}
      ref={forwardedRef}
    >
      {children}
    </DialogPrimitive.Title>
  );
});
DrawerTitle.displayName = "DrawerTitle";

// Drawer Body Component
export const DrawerDescription = DialogPrimitive.Description;
DrawerDescription.displayName = "DrawerDescription";

// Drawer Close Button Component
export type DrawerClose = ComponentPropsWithoutRef<
  (typeof DialogPrimitive)["Close"]
> &
  Button;

export const DrawerClose = forwardRef<
  ElementRef<typeof DialogPrimitive.Close>,
  DrawerClose
>(
  (
    {
      variant = "ghost",
      size = "icon",
      colorScheme,
      leftIcon = undefined,
      rightIcon = undefined,
      isDisabled = false,
      isLoading = false,
      isActive = false,
      asChild,
      isUnstyled = false,
      className,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <DialogPrimitive.Close
        {...props}
        className={className}
        ref={forwardedRef}
        asChild
      >
        {asChild ? (
          children
        ) : (
          <Button
            variant={variant}
            size={size}
            className={classNames(
              "absolute right-5 top-5 rounded-full",
              className,
            )}
          >
            <XMarkIcon className="size-5 stroke-2" />
          </Button>
        )}
      </DialogPrimitive.Close>
    );
  },
);
DrawerClose.displayName = "DrawerClose";
