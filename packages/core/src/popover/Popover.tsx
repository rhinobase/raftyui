import React, { ComponentProps, forwardRef } from "react";
import * as Popover from "@radix-ui/react-popover";
import { classNames } from "@rhinobase/utils";
import { Button } from "../button";

export type Root = ComponentProps<(typeof Popover)["Root"]>;
export const Root = forwardRef<HTMLDivElement, Root>(
  ({ children, ...props }) => {
    return <Popover.Root {...props}>{children}</Popover.Root>;
  },
);
Root.displayName = "Popover.Root";

export type Trigger = ComponentProps<(typeof Popover)["Trigger"]> & Button;
export const Trigger = forwardRef<HTMLButtonElement, Trigger>(
  (
    {
      children,
      className,
      variant,
      size,
      leftIcon = undefined,
      rightIcon = undefined,
      disabled = undefined,
      active = undefined,
      loading = undefined,
      asChild = true,
      ...props
    },
    forwardedRef,
  ) => {
    return (
      <Popover.Trigger
        {...props}
        className={className}
        ref={forwardedRef}
        asChild={asChild}
      >
        {asChild ? (
          <Button
            variant={variant}
            size={size}
            className={className}
            leftIcon={leftIcon}
            rightIcon={rightIcon}
            disabled={disabled}
            active={active}
            loading={loading}
          >
            {children}
          </Button>
        ) : (
          children
        )}
      </Popover.Trigger>
    );
  },
);
Trigger.displayName = "Popover.Trigger";

export type Anchor = ComponentProps<(typeof Popover)["Anchor"]>;
export const Anchor = forwardRef<HTMLDivElement, Anchor>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Popover.Anchor {...props} className={className} ref={forwardedRef}>
        {children}
      </Popover.Anchor>
    );
  },
);
Anchor.displayName = "Popover.Anchor";

export type Content = ComponentProps<(typeof Popover)["Content"]>;
export const Content = forwardRef<HTMLDivElement, Content>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Popover.Content
        {...props}
        className={classNames(
          "data-[side=top]:animate-slide-up data-[side=bottom]:animate-slide-down shadow-[0px_3px_15px_0px_rgba(22,45,60,0.11)]",
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </Popover.Content>
    );
  },
);
Content.displayName = "Popover.Content";

export type Arrow = ComponentProps<(typeof Popover)["Arrow"]>;
export const Arrow = forwardRef<SVGSVGElement, Arrow>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Popover.Arrow
        {...props}
        className={classNames("dark:fill-secondary-800 fill-white", className)}
        ref={forwardedRef}
      >
        {children}
      </Popover.Arrow>
    );
  },
);
Arrow.displayName = "Popover.Arrow";

export type Close = ComponentProps<(typeof Popover)["Close"]>;
export const Close = forwardRef<HTMLButtonElement, Close>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Popover.Close {...props} className={className} ref={forwardedRef}>
        {children}
      </Popover.Close>
    );
  },
);
Close.displayName = "Popover.Close";
