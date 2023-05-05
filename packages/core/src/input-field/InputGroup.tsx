import { forwardRef } from "react";

type InputGroup = JSX.IntrinsicElements["div"];
export const InputGroup = forwardRef<HTMLDivElement, InputGroup>(
  ({ ...props }, forwardedRef) => {
    return (
      <div {...props} ref={forwardedRef} className="relative flex">
        {props.children}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

type Prefix = JSX.IntrinsicElements["div"];

export const Prefix = forwardRef<HTMLDivElement, Prefix>(
  ({ ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        className="absolute left-0 top-0 flex h-full w-10 items-center justify-center"
      >
        {props.children}
      </div>
    );
  }
);

Prefix.displayName = "Prefix";

type Suffix = JSX.IntrinsicElements["div"];

export const Suffix = forwardRef<HTMLDivElement, Suffix>(
  ({ ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        ref={forwardedRef}
        className="absolute right-0 top-0 flex h-full w-10 items-center justify-center"
      >
        {props.children}
      </div>
    );
  }
);

Suffix.displayName = "Suffix";
