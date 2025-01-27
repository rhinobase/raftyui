"use client";
import { type HTMLAttributes, forwardRef } from "react";
import { classNames, getValidChildren } from "../utils/index.js";
import { LeftAddon } from "./LeftAddon.js";
import { Prefix } from "./Perfix.js";
import { RightAddon } from "./RightAddon.js";
import { Suffix } from "./Suffix.js";
import { type InputGroupContext, InputGroupProvider } from "./context.js";

export type InputGroup = HTMLAttributes<HTMLDivElement> &
  Partial<InputGroupContext>;

export const InputGroup = forwardRef<HTMLDivElement, InputGroup>(
  function InputGroup(
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
    forwardedRef
  ) {
    const validChildren = getValidChildren(children);
    const rightAddons = [];
    const leftAddons = [];
    const remaining = [];

    for (const child of validChildren) {
      switch (child.type.displayName) {
        case LeftAddon.displayName:
          isLeftAddon = true;
          leftAddons.push(child);
          break;

        case RightAddon.displayName:
          isRightAddon = true;
          rightAddons.push(child);
          break;

        case Prefix.displayName:
          isPrefix = true;
          remaining.push(child);
          break;

        case Suffix.displayName:
          isSuffix = true;
          remaining.push(child);
          break;

        default:
          remaining.push(child);
          break;
      }
    }

    return (
      <InputGroupProvider
        value={{
          isLeftAddon,
          isRightAddon,
          isPrefix,
          isSuffix,
          size,
        }}
      >
        <div
          {...props}
          className={classNames("flex w-full", className)}
          ref={forwardedRef}
        >
          {leftAddons}
          <div className="relative w-full">{remaining}</div>
          {rightAddons}
        </div>
      </InputGroupProvider>
    );
  }
);
