"use client";
import React from "react";
import { classNames, getValidChildren } from "../utils";
import { InputGroupContext, InputGroupProvider } from "./context";

// InputGroup Component
export type InputGroup = React.HTMLAttributes<HTMLDivElement> &
  Partial<InputGroupContext>;

export const InputGroup = React.forwardRef<HTMLDivElement, InputGroup>(
  (
    {
      children,
      className,
      isLeftAddon = false,
      isRightAddon = false,
      isPrefix = false,
      isSuffix = false,
      ...props
    },
    forwardedRef,
  ) => {
    const validChildren = getValidChildren(children);

    validChildren.forEach((child) => {
      switch (child.type.displayName) {
        case LeftAddon.displayName:
          isLeftAddon = true;
          break;

        case RightAddon.displayName:
          isRightAddon = true;
          break;

        case Prefix.displayName:
          isPrefix = true;
          break;

        case Suffix.displayName:
          isSuffix = true;
          break;
      }
    });

    return (
      <InputGroupProvider
        value={{ isLeftAddon, isRightAddon, isPrefix, isSuffix }}
      >
        <div
          {...props}
          ref={forwardedRef}
          className={classNames("relative flex", className)}
        >
          {children}
        </div>
      </InputGroupProvider>
    );
  },
);
InputGroup.displayName = "InputGroup";

// Prefix Component
export type Prefix = React.HTMLAttributes<HTMLDivElement>;

export const Prefix = React.forwardRef<HTMLDivElement, Prefix>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        id="prefix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute left-0 top-0 z-10 flex h-full w-10 items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Prefix.displayName = "Prefix";

// Suffix Component
export type Suffix = React.HTMLAttributes<HTMLDivElement>;

export const Suffix = React.forwardRef<HTMLDivElement, Suffix>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        id="suffix"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "absolute right-0 top-0 z-10 flex h-full w-10 items-center justify-center",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
Suffix.displayName = "Suffix";

// LeftAddon Component
export type LeftAddon = React.HTMLAttributes<HTMLDivElement>;

export const LeftAddon = React.forwardRef<HTMLDivElement, LeftAddon>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <div
        id="leftaddon"
        {...props}
        ref={forwardedRef}
        className={classNames(
          "bg-secondary-200 dark:bg-secondary-700 dark:text-secondary-200 flex items-center rounded-l-md px-3",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
LeftAddon.displayName = "LeftAddon";

// RightAddon Component
export type RightAddon = React.HTMLAttributes<HTMLDivElement>;

export const RightAddon = React.forwardRef<HTMLDivElement, RightAddon>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        className={classNames(
          "bg-secondary-200 dark:bg-secondary-700 dark:text-secondary-200 flex items-center rounded-r-md px-3",
          className,
        )}
      >
        {children}
      </div>
    );
  },
);
RightAddon.displayName = "RightAddon";
