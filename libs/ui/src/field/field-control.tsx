import { forwardRef } from "react";
import { classNames } from "@rafty/utils";
import { FieldControlContext, FieldControlProvider } from "./context";

// Field Control Component
export type FieldControl = JSX.IntrinsicElements["div"] &
  Partial<FieldControlContext> & {
    name: FieldControlContext["name"];
  };

export const FieldControl = forwardRef<HTMLDivElement, FieldControl>(
  (
    {
      name,
      orientation = "col",
      isRequired = false,
      isDisabled = false,
      isReadOnly = false,
      isInvalid = false,
      isLoading = false,
      children,
      className,
      ...props
    },
    forwardedRef
  ) => (
    <FieldControlProvider
      value={{
        name,
        orientation,
        isRequired,
        isDisabled,
        isReadOnly,
        isInvalid,
        isLoading,
      }}
    >
      <div
        {...props}
        className={classNames(
          orientation === "col" && "flex-col gap-1",
          orientation === "row" && "flex-row items-center gap-2",
          orientation === "row-reverse" &&
            "flex-row-reverse items-center gap-2",
          "flex w-full",
          className
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    </FieldControlProvider>
  )
);

FieldControl.displayName = "FieldControl";
