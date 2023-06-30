import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentProps, forwardRef } from "react";
import { Button } from "../button";
import { DrawerContext, DrawerProvider, useDrawerContext } from "./context";
import { classNames } from "@rafty/utils";
import { XMarkIcon } from "@heroicons/react/24/outline";

// Drawer Component
export type Drawer = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Root
> &
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
export type DrawerOverlay = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Overlay
>;

export const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  DrawerOverlay
>(({ className, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Overlay
      {...props}
      className={classNames(
        "animate-slide-down-fade fixed inset-0 z-40 bg-black bg-opacity-20 transition-opacity ease-in-out dark:bg-opacity-40",
        className
      )}
      ref={forwardedRef}
    />
  );
});
DrawerOverlay.displayName = "DrawerOverlay";

// Drawer Content Component
const contentClasses = {
  size: {
    sm: "max-w-2xl",
    md: "max-w-3xl",
    lg: "max-w-5xl",
    full: "w-full",
  },
  side: {
    left: "animate-slide-right left-0",
    right: "animate-slide-left right-0",
  },
};

export type DrawerContent = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Content
>;

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContent
>(({ children, className, ...props }, forwardedRef) => {
  const { size, side } = useDrawerContext();
  return (
    <DialogPrimitive.Portal>
      {/*zIndex one less than Toast */}
      <DialogPrimitive.Content
        {...props}
        className={classNames(
          "dark:bg-secondary-800 dark:text-secondary-50 fixed top-0 z-50 h-screen min-w-[360px] overflow-y-auto overscroll-auto bg-white p-6 text-left shadow-xl focus-visible:outline-none sm:w-full sm:align-middle",
          contentClasses.size[size],
          contentClasses.side[side],
          className
        )}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
DrawerContent.displayName = "DrawerContent";

// Drawer Title Component
const titleClasses = {
  size: {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-xl",
    full: "text-xl",
  },
};

export type DrawerTitle = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.DialogTitle
>;

export const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.DialogTitle>,
  DrawerTitle
>(({ children, className, ...props }, forwardedRef) => {
  const { size } = useDrawerContext();

  return (
    <DialogPrimitive.Title
      {...props}
      className={classNames(
        "mb-2 font-semibold",
        titleClasses.size[size],
        className
      )}
      ref={forwardedRef}
    >
      {children}
    </DialogPrimitive.Title>
  );
});
DrawerTitle.displayName = "DrawerTitle";

// Drawer Body Component
export type DrawerBody = React.ComponentPropsWithoutRef<
  typeof DialogPrimitive.Description
>;

export const DrawerBody = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DrawerBody
>(({ className, children, ...props }, forwardedRef) => (
  <DialogPrimitive.Description {...props} ref={forwardedRef} asChild>
    <div className={className}>{children}</div>
  </DialogPrimitive.Description>
));
DrawerBody.displayName = "DrawerBody";

// Drawer Close Button Component
export type DrawerCloseButton = ComponentProps<
  (typeof DialogPrimitive)["Close"]
> &
  Button;

export const DrawerCloseButton = forwardRef<
  HTMLButtonElement,
  DrawerCloseButton
>(({ variant = "ghost", size = "icon", className, ...props }, forwardedRef) => {
  return (
    <DialogPrimitive.Close ref={forwardedRef} asChild>
      <Button
        {...props}
        variant={variant}
        size={size}
        className={classNames("absolute right-5 top-5 rounded-full", className)}
      >
        <XMarkIcon className="h-5 w-5 stroke-2" />
      </Button>
    </DialogPrimitive.Close>
  );
});
