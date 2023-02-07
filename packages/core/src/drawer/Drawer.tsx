import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../index";
import { DrawerContext, DrawerProvider, useDrawerContext } from "./context";

// Drawer Component
type DrawerProps = ComponentProps<(typeof DialogPrimitive)["Dialog"]>;
export const Drawer = forwardRef<HTMLDivElement, DrawerContext & DrawerProps>(
  ({ children, size = "md", side = "right", ...props }, forwardedRef) => (
    <DrawerProvider value={{ size, side }}>
      {/* TODO: Add reference to the below element */}
      <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
    </DrawerProvider>
  )
);

// Drawer Content Component
type DrawerContentProps = ComponentProps<
  (typeof DialogPrimitive)["DialogContent"]
>;
export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ children, title, style, className, ...props }, forwardedRef) => {
    const { size, side } = useDrawerContext();
    return (
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="animate-slide-down-fade fixed inset-0 z-40 bg-black bg-opacity-20 transition-opacity ease-in-out dark:bg-opacity-40" />
        {/*zIndex one less than Toast */}
        <DialogPrimitive.Content
          {...props}
          style={style}
          className={classNames(
            "dark:bg-secondary-800 dark:text-secondary-50 p-3xl fixed top-0 z-50 h-screen min-w-[360px] bg-white text-left shadow-xl focus-visible:outline-none sm:w-full sm:align-middle",
            size == "full" && "min-w-full",
            size == "lg" && "max-w-5xl",
            size == "md" && "max-w-3xl",
            size == "sm" && "max-w-2xl",
            side == "left" && "animate-slide-right left-0",
            side == "right" && "animate-slide-left right-0",
            "overflow-y-auto overscroll-auto",
            className
          )}
          ref={forwardedRef}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  }
);

// Drawer Title Component
type DrawerTitleProps = ComponentProps<(typeof DialogPrimitive)["DialogTitle"]>;
export const DrawerTitle = React.forwardRef<HTMLDivElement, DrawerTitleProps>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useDrawerContext();

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

// Drawer Body Component
type DrawerBodyProps = ComponentProps<
  (typeof DialogPrimitive)["DialogDescription"]
>;
export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Description {...props} ref={forwardedRef} asChild>
        <div className={className}>{children}</div>
      </DialogPrimitive.Description>
    );
  }
);

// Drawer Cross Button Component
export function DrawerCloseButton(
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
          className="w-6 h-6 Stroke-1"
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
