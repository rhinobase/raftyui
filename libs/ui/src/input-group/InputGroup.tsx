"use client";
import { HTMLAttributes, forwardRef } from "react";
import { classNames, getValidChildren } from "../utils";
import { LeftAddon } from "./LeftAddon";
import { Prefix } from "./Perfix";
import { RightAddon } from "./RightAddon";
import { Suffix } from "./Suffix";
import { InputGroupContext, InputGroupProvider } from "./context";

// InputGroup Component
export type InputGroup = HTMLAttributes<HTMLDivElement> &
  Partial<InputGroupContext>;

export const InputGroup = forwardRef<HTMLDivElement, InputGroup>(
  (
    {
      children,
      className,
      isLeftAddon = false,
      isRightAddon = false,
      isPrefix = false,
      isSuffix = false,
      size = "md",
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
        value={{ isLeftAddon, isRightAddon, isPrefix, isSuffix, size }}
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
