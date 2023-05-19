import * as DialogPrimitive from "@radix-ui/react-dialog";
import React, { ComponentProps, forwardRef } from "react";
import { classNames } from "@rhinobase/utils";
import { Button } from "../button";
import { DrawerContext, DrawerProvider, useDrawerContext } from "./context";

// Drawer Component
type Root = ComponentProps<(typeof DialogPrimitive)["Dialog"]> & DrawerContext;
export const Root = ({
  children,
  size = "md",
  side = "right",
  ...props
}: Root) => (
  <DrawerProvider value={{ size, side }}>
    {/* TODO: Add reference to the below element */}
    <DialogPrimitive.Root {...props}>{children}</DialogPrimitive.Root>
  </DrawerProvider>
);
Root.displayName = "Drawer.Root";

// Drawer Content Component
type Content = ComponentProps<(typeof DialogPrimitive)["DialogContent"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
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
            "dark:bg-secondary-800 dark:text-secondary-50 fixed top-0 z-50 h-screen min-w-[360px] bg-white p-6 text-left shadow-xl focus-visible:outline-none sm:w-full sm:align-middle",
            size == "full" && "w-full",
            size == "lg" && "max-w-5xl",
            size == "md" && "max-w-3xl",
            size == "sm" && "max-w-2xl",
            side == "left" && "animate-slide-right left-0",
            side == "right" && "animate-slide-left right-0",
            "overflow-y-auto overscroll-auto",
            className,
          )}
          ref={forwardedRef}
        >
          {children}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    );
  },
);
Content.displayName = "Drawer.Content";

// Drawer Title Component
type Title = ComponentProps<(typeof DialogPrimitive)["DialogTitle"]>;
export const Title = React.forwardRef<HTMLDivElement, Title>(
  ({ children, ...props }, forwardedRef) => {
    const { size } = useDrawerContext();

    return (
      <DialogPrimitive.Title
        {...props}
        className={classNames(
          size == "lg" && "text-xl",
          size == "md" && "text-xl",
          size == "sm" && "text-lg",
          "mb-2 font-semibold",
        )}
        ref={forwardedRef}
      >
        {children}
      </DialogPrimitive.Title>
    );
  },
);
Title.displayName = "Drawer.Title";

// Drawer Body Component
type Body = ComponentProps<(typeof DialogPrimitive)["DialogDescription"]>;
export const Body = React.forwardRef<HTMLDivElement, Body>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <DialogPrimitive.Description {...props} ref={forwardedRef} asChild>
        <div className={className}>{children}</div>
      </DialogPrimitive.Description>
    );
  },
);
Body.displayName = "Drawer.Body";

// Drawer Cross Button Component
export function CloseButton(
  props: {
    dialogCloseProps?: React.ComponentProps<(typeof DialogPrimitive)["Close"]>;
    onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    disabled?: boolean;
    colorVariant?: Button["variant"];
  } & React.ComponentProps<typeof Button>,
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
          strokeWidth="1.5"
          stroke="currentColor"
          className="Stroke-1 h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </Button>
    </DialogPrimitive.Close>
  );
}
